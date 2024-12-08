import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";

import { createRefreshToken, db, rotateRefreshToken } from "~/server/db";
import { TOKEN_NAME } from "~/utils/constants";
import { SecurityService } from "~/utils/security";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
    } & DefaultSession["user"];

    token?: string;
    refreshToken?: string;
    expires: string;
  }
}

export const authConfig = {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("请输入邮箱和密码");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user?.password) {
          throw new Error("用户不存在");
        }

        const isPasswordValid = await SecurityService.verifyPassword(
          credentials.password as string,
          user.password,
        );

        if (!isPasswordValid) {
          throw new Error("密码错误");
        }

        return {
          ...user,
        };
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    // 确保 JWT 包含必要的用户信息
    jwt: async ({ token, user }) => {
      console.log("jwt callback", token, user);

      if (user) {
        token.id = user.id;
        token.email = user.email;

        // 获取客户端信息
        const clientInfo = await SecurityService.getClientInfo();

        // 检查设备是否被封禁
        const blockedDevice = await db.deviceInfo.findFirst({
          where: {
            userId: user.id,
            fingerprint: clientInfo.fingerprint,
            isBlocked: true,
          },
        });

        if (blockedDevice) {
          throw new Error("设备已被封禁");
        }

        // 创建或更新设备信息
        await db.deviceInfo.upsert({
          where: {
            userId_fingerprint: {
              userId: user.id!,
              fingerprint: clientInfo.fingerprint,
            },
          },
          create: {
            userId: user.id!,
            fingerprint: clientInfo.fingerprint,
            userAgent: clientInfo.userAgent,
            lastIp: clientInfo.ip,
          },
          update: {
            lastLoginAt: new Date(),
            lastIp: clientInfo.ip,
          },
        });

        // 创建 refresh token
        const refreshToken = await createRefreshToken(user.id!);
        token.refreshToken = refreshToken.token;

        // token.exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60;
      }
      // console.log("jwt callback token exp", token.exp);
      // if (Date.now() / 1000 > token.exp!) {
      //   try {
      //     console.log("token?.refreshToken ", token?.refreshToken);

      //     const newToken = await rotateRefreshToken(
      //       token?.refreshToken as string,
      //     );
      //     token.refreshToken = newToken.token;
      //     token.exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60; // 更新过期时间
      //   } catch (error) {
      //     console.error("刷新 token 失败:", error);
      //     throw new Error("请重新登录");
      //   }
      // }

      return token;
    },
    // 从 JWT 中提取信息到 session
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email ?? "";
        session.refreshToken = token.refreshToken as string;
        session.token = token.token as string;
      }
      return session;
    },
    authorized: async ({ request, auth }) => {
      console.log("authorized callback", request, auth);

      if (!auth?.user) {
        return false;
      }
      return true;
    },
  },
  pages: {
    signIn: "/sign-in",
    signOut: "/sign-out",
  },
  session: {
    strategy: "jwt",
    maxAge: 60,
  },
  cookies: {
    sessionToken: {
      name: TOKEN_NAME,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60,
      },
    },
  },
} satisfies NextAuthConfig;
