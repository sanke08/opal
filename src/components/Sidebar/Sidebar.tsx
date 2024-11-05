
import { Separator } from "../ui/separator"
import MenuOptions from "./MenuOptions"
import WorkspaceSelector from "./WorkspaceSelector"

type Props = {
    activeWorkspaceId: string,
    workspaces: {
        name: string,
        id: string
    }[]
}


export default function Sidebar({ activeWorkspaceId, workspaces }: Props) {

    return (
        <div className=" flex-none px-2 h-full w-[210px] space-y-4 flex flex-col overflow-hidden">
            <div className=" w-full p-5 bg-neutral-800"></div>
            <WorkspaceSelector activeWorkspaceId={activeWorkspaceId} workspaces={workspaces} />
            <Separator/>
            <MenuOptions activeWorkspaceId={activeWorkspaceId} />

        </div>
    )
}
