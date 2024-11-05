import { db } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();

        const { name, workspaceId } = body;
      await db.folder.create({
            data: {
                workspaceId,
                name
            }
        })
    
        return NextResponse.json({ message: "Folder created successfully" }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
}