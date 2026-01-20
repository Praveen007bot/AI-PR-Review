import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import prisma from "./lib/prisma";

export const {auth, handlers, signIn, signOut} = NextAuth({
  debug: true,
  providers: [GitHub],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
      } 
      return session;
    }
  }
})