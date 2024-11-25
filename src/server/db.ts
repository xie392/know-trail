import { PrismaClient } from "@prisma/client";

import { env } from "~/env";

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;


export async function createRefreshToken(userId: string) {
  return await db.refreshToken.create({
    data: {
      userId,
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    }
  });
}

export async function rotateRefreshToken(oldToken: string) {
  const token = await db.refreshToken.findUnique({
    where: { token: oldToken }
  });

  if (!token || token.expires < new Date()) {
    throw new Error('Invalid refresh token');
  }

  // 创建新token
  const newToken = await createRefreshToken(token.userId);

  // 删除旧token
  await db.refreshToken.delete({
    where: { id: token.id }
  });

  return newToken;
}