import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "ออกจากระบบสำเร็จ",
  })

  response.cookies.set({
    name: "auth-token",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  })

  return response
}

