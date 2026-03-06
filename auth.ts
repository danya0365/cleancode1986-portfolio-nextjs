import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { TursoAuthRepository } from "./src/infrastructure/repositories/turso/TursoAuthRepository";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        token: { label: "Magic Link Token", type: "text" },
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const repo = new TursoAuthRepository();

        // Path B: Magic Link Login (Used via LINE)
        if (credentials?.token) {
          const user = await repo.consumeMagicLink(credentials.token as string);
          if (user) {
            return { id: user.id, name: user.username, role: user.role };
          }
          return null; // Token invalid or expired
        }

        // Path A: Standard Login (Username/Password for Future Admin Page)
        if (credentials?.username && credentials?.password) {
          const user = await repo.getUserByUsername(credentials.username as string);
          if (!user) return null;

          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.passwordHash
          );

          if (isValid) {
            return { id: user.id, name: user.username, role: user.role };
          }
        }

        return null;
      },
    }),
  ],
});
