import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { connectDatabase } from "@/lib/db";
import { User } from "@/lib/db/schemas/user";
import { createUser } from "@/lib/actions/user";
import { USER_ENUM } from "@/globals";

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
        await connectDatabase();
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
        await connectDatabase();
        let user = await User.findOne({ email: email });
        if (!user) {
          if(profile.email && profile.given_name) {
            user = await createUser({
              email: profile?.email,
              name: profile?.given_name?.replace(" ", "").toLowerCase(),
              profile_image: profile?.picture,
              role: USER_ENUM.INFLUENCER
            });
          }
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
  },
  secret: process.env.NEXT_AUTH_SECRET,
});