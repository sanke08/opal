import { db } from '@/lib/prisma'
import dynamic from 'next/dynamic'
const FolderList = dynamic(() => import('./FolderList'), { ssr: true })



const FolderListContainer = async ({ workspaceId }: { workspaceId: string }) => {

    const Folders = await db.folder.findMany({
        where: {
            workspaceId,
        },
        include: {
            _count: {
                select: {
                    videos: true,
                },
            },
        },
    })


    return (
        <div>
            <p className='text-xl text-neutral-300 font-bold'>Folders</p>
            <FolderList folders={Folders} />
        </div>
    )
}

export default FolderListContainer
