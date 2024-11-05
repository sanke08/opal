
import { Skeleton } from '@/components/ui/skeleton'


interface InfoVideoProps {
    isLoading: boolean
    currentWorkspaceName: string
    currentFolderName: string
}


const InfoVideo = ({ isLoading, currentWorkspaceName, currentFolderName }: InfoVideoProps) => {
    return (
        <div className="boder-[1px] rounded-xl">
            <h2 className="text-xs text-[#a4a4a4]">Current Workspace</h2>
            {
                isLoading ?
                    <Skeleton className=" h-6 w-40 bg-zinc-800 rounded-sm " />
                    :
                    <p className='font-semibold'>{currentWorkspaceName}</p>
            }
            <h2 className="text-xs text-[#a4a4a4] mt-4">Current Folder</h2>
            {
                isLoading
                    ? <Skeleton className=" h-6 w-40 bg-zinc-800 rounded-sm " />
                    :
                    <p className=' font-semibold'>
                        {
                            currentFolderName || <span className="text-zinc-500 italic font-normal">The video has no folder</span>
                        }
                    </p>
            }
        </div>
    )
}

export default InfoVideo
