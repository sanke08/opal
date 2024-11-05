import { getServerSideUser } from "@/actions/auth.actions";
import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const user = await getServerSideUser()
        if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

        const { name } = body;
        const workspaces = await db.workspace.create({
            data: {
                name,
                userId: user.id
            }
        })

        return NextResponse.json({ message: "Workspace created successfully", workspaces }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }

}



export const GET = async (req: NextRequest) => {
    try {
        const user = await getServerSideUser()
        if (!user) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

        const workspaces = await db.workspace.findMany({
            where: {
                userId: user.id
            },
            select: {
                name: true,
                id: true,
                folders: {
                    select: {
                        id: true,
                        name: true,
                        workspaceId: true
                    }
                },
            },
        })
        return NextResponse.json({ workspaces }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}
