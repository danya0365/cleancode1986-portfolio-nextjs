import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // user object is only passed on the initial sign-in
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).role = token.role;
        session.user.id = token.id as string;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      // Admin API protection
      if (pathname.startsWith("/api/admin")) {
        return isLoggedIn; // Return false to trigger 401
      }

      // Admin Dashboard protection
      if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
        if (!isLoggedIn) {
          return Response.redirect(new URL("/admin/login", nextUrl));
        }
      }

      return true;
    },
  },
  providers: [], // Providers are added in auth.ts to avoid Edge Runtime issues
  session: { strategy: "jwt" },
  trustHost: true,
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
