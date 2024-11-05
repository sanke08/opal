"use client"

import { FolderModalContent } from "@/components/FolderModalContent"
import Modal from "@/components/CustomModal"
import { Button } from "@/components/ui/button"
import { FolderPlus } from "lucide-react"



const title = "Create a Workspace"
const description = " Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."


const CreateFolder = ({ workspaceId }: { workspaceId: string }) => {
    return (
        <Modal
            content={<FolderModalContent workspaceId={workspaceId} />}
            title={title}
            description={description}>

            <Button size={"sm"} className="bg-neutral-800/80 hover:bg-neutral-700/50 text-neutral-500 hover:text-neutral-300 flex items-center gap-2 rounded-lg">
                <FolderPlus />
                Add Folder
            </Button>
        </Modal>
    )
}

export default CreateFolder