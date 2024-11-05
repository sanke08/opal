"use server"
import { auth, signIn } from "@/lib/authOption"
import { db } from "@/lib/prisma"

export const getSession = async () => {
    return await auth()
}

export const
    handleSignin = async () => {
        await signIn("google", { redirectTo: "/dashboard" })
    }



export const getServerSideUser = async () => {
    try {

        const session = await getSession()
        if (!session || !session.user?.email)
            return null
        const user = await db.user.findFirst({
            where: {
                email: session.user.email as string,
            },
            include: {
                workspaces: {
                    where: {
                        OR: [
                            {
                                members: {
                                    some: {
                                        User: {
                                            email: session.user.email
                                        }
                                    }
                                }
                            },
                            {
                                User: {
                                    email: session.user.email
                                }
                            }
                        ]
                    },
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        if (!user) return null
        return user
    } catch (error) {
        console.log("error : ", error)
        return null
    }
}

