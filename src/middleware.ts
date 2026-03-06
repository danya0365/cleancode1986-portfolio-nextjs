import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  // Admin Dashboard App Route Protection
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    if (!isLoggedIn) {
      // Not logged in -> Redirect to login page
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  // Admin API Route Protection
  if (pathname.startsWith("/api/admin")) {
    if (!isLoggedIn) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }
  }

  return NextResponse.next();
});

export const config = {
  // Execute middleware on all admin routes and API routes
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
