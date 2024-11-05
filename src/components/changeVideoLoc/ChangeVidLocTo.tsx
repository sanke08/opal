import { useEffect, useMemo, useRef, useState } from "react"
import CustomSelect from "../CustomSelect"
import { Skeleton } from "../ui/skeleton"
import { Button } from "../ui/button"

interface ChangeVidLocToProps {
    workspaces: {
        name: string
        id: string
        folders: {
            name: string
            id: string
            workspaceId: string
        }[]
    }[]
    currentWorkspaceId: string
    currentFolderId: string
}


const ChangeVidLocTo = ({ workspaces, currentWorkspaceId, currentFolderId }: ChangeVidLocToProps) => {

    const [folders, setFolders] = useState<{ name: string, id: string }[] | null>(null)

    const [_, forceUpdate] = useState({})

    const locationRef = useRef<{ workspace: { name: string, id: string }, folder: { name: string, id: string } }>({ workspace: { name: "", id: "" }, folder: { name: "", id: "" } })


    const handleMoveToWorkspace = (value: string) => {
        const selectedWorkspace = workspaces?.find((workspace) => workspace.id === value)
        if (selectedWorkspace)
            setFolders(selectedWorkspace.folders)

        locationRef.current.workspace.name = selectedWorkspace?.name || ""
        locationRef.current.workspace.id = selectedWorkspace?.id || ""

        locationRef.current.folder = { name: "", id: "" }
        forceUpdate({})
    }

    const handleMoveToFolder = (value: string) => {
        const selectedFolder = folders?.find((folder) => folder.id === value)
        if (selectedFolder) {
            locationRef.current.folder.name = selectedFolder.name
            locationRef.current.folder.id = selectedFolder.id
        }
        forceUpdate({})
    }


    useEffect(() => {
        const selectedWorkspace = workspaces?.find((workspace) => workspace.id === currentWorkspaceId)

        if (selectedWorkspace) {
            locationRef.current.workspace.name = selectedWorkspace.name
            locationRef.current.workspace.id = selectedWorkspace.id
            setFolders(selectedWorkspace.folders)
        }
    }, [currentWorkspaceId, workspaces])

    return (
        <div>

            <div className="flex flex-col p-3 mt-8 border-[1px] rounded-xl">
                <h2 className="text-sm text-zinc-500 pb-3">To</h2>

                <div>
                    <p className="text-xs py-1">Workspace</p>
                    {
                        !workspaces
                            ?
                            <Skeleton className="w-full h-[40px] rounded-xl" />
                            :
                            <CustomSelect
                                activeItemId={currentWorkspaceId}
                                onValueChange={(value) => handleMoveToWorkspace(value)}
                                items={workspaces}
                            />
                    }
                </div>

                <div className=" pt-2">
                    <p className="text-xs py-1">Folder</p>
                    {
                        !folders?.length
                            ? <p className=" text-zinc-500 italic text-sm">This workspace has no folders</p>
                            :
                            <CustomSelect
                                activeItemId={currentFolderId}
                                onValueChange={(value) => handleMoveToFolder(value)}
                                items={folders}
                            />
                    }
                </div>
                <p className="text-sm text-zinc-500 pt-2 italic">
                    {`${locationRef.current.workspace.name} / ${locationRef.current.folder.name}`}
                </p>

            </div>
            <Button variant={"secondary"} className="mt-4 w-full">Transfer</Button>

        </div>
    )
}

export default ChangeVidLocTo
