import NextAuth, { Profile, Session, NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { db } from "./prisma"
import { JWT } from "next-auth/jwt";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";


export const authOptions: NextAuthConfig = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    pages: {
        signIn: '/auth',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account && profile) {
                token.email = profile.email as string;
                token.id = account.access_token;
            }
            return token;
        },
        session: async ({ session, token }: { session: Session, token: JWT; }) => {
            try {

                const user = await db.user.findUnique({
                    where: {
                        email: token.email!
                    }
                });
                if (user && session.user) {
                    // @ts-expect-error typo error
                    session.user.id = user.id;
                }
            } catch (error) {
                if (error instanceof PrismaClientInitializationError) {
                    throw new Error("Internal server error");
                }
                console.log(error);
                throw error;
            }
            // session.accessToken = token.id ||""
            return session
        },
        signIn: async ({ profile }: { profile: Profile }) => {
            try {
                if (!profile.email) return false
                const existUser = await db.user.findFirst({
                    where: {
                        email: profile.email
                    }
                })


                if (!existUser) {
                    await db.$transaction(async (tx) => {
                        const user = await tx.user.create({
                            data: {
                                email: profile.email!,
                                image: `${profile.image}` || "",
                                firstname: profile.name,
                                lastname: profile.family_name || ""
                            }
                        })

                        await tx.workspace.create({
                            data: {
                                name: `${user.firstname}'s Workspace`,
                                userId: user.id
                            }
                        })
                    })
                }
                return true
            } catch (error) {
                console.log("error : ", error)
                return false
            }

        },
    },

}


export const { handlers, signIn, signOut, auth } = NextAuth(authOptions)