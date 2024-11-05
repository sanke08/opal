import { useEffect, useState } from "react"
import useAction from "@/hooks/useAction"
import axios from "axios"
import { BASE_URL } from "@/lib/constance"
import { useParams } from "next/navigation"
import InfoVideo from "./InfoVideo"
import ChangeVidLocTo from "./ChangeVidLocTo"

const ChangeVidLocContent = () => {


    const [currentWorkspace, setCurrentWorkspace] = useState<{ id: string, name: string }>({ id: "", name: "" })
    const [currentFolder, setCurrentFolder] = useState<{ id: string, name: string }>({ id: "", name: "" })

    const params: { workspaceId: string, folderId?: string } | null = useParams()

    const { execute, isLoading, data } = useAction({
        executeFun: async () => {
            return await axios.get(`${BASE_URL}/api/workspace`)
        },
        onSuccess: (data) => {
            const workspace = data?.workspaces.find((workspace) => workspace.id === params?.workspaceId)
            setCurrentWorkspace({ name: workspace.name, id: workspace.id })
            const folder = workspace.folders.find((folder) => folder.id === params?.folderId)
            setCurrentFolder({ name: folder?.name, id: folder?.id })
        }
    })

    useEffect(() => {
        execute()
    }, [])


    return (
        <div className=" border-t pt-6">
            <InfoVideo isLoading={isLoading} currentWorkspaceName={currentWorkspace.name} currentFolderName={currentFolder.name} />
            {
                data?.workspaces &&

                <ChangeVidLocTo workspaces={data?.workspaces} currentWorkspaceId={currentWorkspace.id} currentFolderId={currentFolder.id} />
            }
        </div>
    )
}

export default ChangeVidLocContent
