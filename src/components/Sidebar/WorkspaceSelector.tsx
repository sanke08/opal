"use client"


import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import Modal from "../CustomModal"
import { Search } from "./Search"
import { Button } from "../ui/button"
import { PlusCircle } from "lucide-react"

type Props = {
    activeWorkspaceId: string,
    workspaces: {
        name: string,
        id: string
    }[]
}



const WorkspaceSelector = ({ activeWorkspaceId, workspaces }: Props) => {
    const router = useRouter()


    const onChangeActiveWorkspace = (value: string) => {
        router.push(`/dashboard/${value}`)
    }


 

    return (
        <div  className=" w-full space-y-2">
            <Select defaultValue={activeWorkspaceId} onValueChange={onChangeActiveWorkspace}>
                <SelectTrigger className=" text-neutral-400 bg-transparent">
                    <SelectValue placeholder="Select a workspace"></SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-[#111111] backdrop-blur-xl">
                    <SelectGroup>
                        <SelectLabel className=" text-white text-left w-full">Workspaces</SelectLabel>
                        <Separator className=" mb-1.5" />
                        {workspaces.map((workspace) => (
                            <SelectItem
                                value={workspace.id}
                                key={workspace.id}
                            >
                                {workspace.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Modal content={<Search workspaceId={activeWorkspaceId} />} title="Invite To Workspace" description="Invite other users to your workspace" >
                <Button size={"sm"} className="bg-neutral-800/80 w-full"> <PlusCircle /> Invite To Workspace</Button>
            </Modal>
        </div>
    )
}

export default WorkspaceSelector
