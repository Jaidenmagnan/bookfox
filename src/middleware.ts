import { NextResponse, NextRequest } from "next/server";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";

// This function can be marked `async` if using `await` inside
const { auth } = NextAuth(authConfig);
export async function middleware(request: NextRequest) {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|signin|public|^/$).*)",
};
