import { NextResponse } from "next/server";
import { rotateRefreshToken } from "~/server/db";

export async function POST(request: Request) {
  try {
    const { refreshToken } = await request.json();
    const newToken = await rotateRefreshToken(refreshToken as string);

    return NextResponse.json({ token: newToken });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to refresh token" },
      { status: 400 },
    );
  }
}
