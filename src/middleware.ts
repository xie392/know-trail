import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./server/auth";
import { db } from "./server/db";

export async function middleware(request: NextRequest) {
  const session = await auth();

  // 黑名单设备
  //   if (session?.token) {
  //     const blockedToken = await db.blockedToken.findUnique({
  //       where: { token: session.token },
  //     });

  //     if (blockedToken) {
  //       return NextResponse.redirect(new URL("/api/auth/signout", request.url));
  //     }
  //   }

  // 如果接近过期时间，尝试刷新
  if (
    session?.expires &&
    new Date(session.expires) < new Date(Date.now() + 5 * 60 * 1000)
  ) {
    return NextResponse.redirect(new URL("/api/auth/refresh", request.url));
  }

  return NextResponse.next();
}

// 配置匹配路径
// export const config = {
//   matcher: [
//     /*
//      * 匹配所有路径除了:
//      * /api/auth/refresh, /api/auth/* (auth 相关的 API 路由)
//      * /_next/static (静态文件)
//      * /_next/image (图片优化 API)
//      * /favicon.ico (浏览器自动请求的 favicon)
//      */
//     "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
//   ],
// };
