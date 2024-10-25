import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import User from "@/models/user.model";
import { connectDB } from "@/utils/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }:any) {
      try {
        await connectDB();
        const sessionUser = await User.findOne({ email: session?.user?.email });
        if (session.user) {
          session.user.id = sessionUser?._id.toString();
        }
        return session;
      } catch (error) {
        console.error(error);
        return session;
      }
    },
    async signIn({ profile }) {
      try {
        const email = profile?.email;
        if (!email) return false;
        await connectDB();
        let user = await User.findOne({ email: email });
        if (!user) {
          user = await User.create({
            email: profile?.email,
            name: profile?.given_name?.replace(" ", "").toLowerCase(),
            image: profile?.picture,
          });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
  pages: {
    signIn: "/auth",
    // error: "/",
    // signOut: "/",
  },
  secret: process.env.NEXT_AUTH_SECRET,
});