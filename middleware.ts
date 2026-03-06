import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // Execute middleware on all admin routes and API routes
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
