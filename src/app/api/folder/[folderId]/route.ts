
import { db } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (req: NextRequest, { params }: { params: { folderId: string } }) => {
    try {
        const { folderId } = await params
        const body = await req.json()
        const { name } = body
        await db.folder.update({
            where: {
                id: folderId
            },
            data: {
                name
            }
        })
        return NextResponse.json({ message: "Folder updated successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}