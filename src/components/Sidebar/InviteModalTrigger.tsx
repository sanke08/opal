import { PlusCircle } from "lucide-react";


export default function InviteModalTrigger() {
    return (
        <div className="text-sm cursor-pointer flex items-center justify-center bg-neutral-800/90  hover:bg-neutral-800/60 w-full rounded-sm p-[5px] gap-2">
            <PlusCircle size={15} className="text-neutral-800/90 fill-neutral-500" />
            <div className="text-neutral-400 font-semibold text-xs">
                Invite To Workspace
            </div>
        </div>
    )
}
