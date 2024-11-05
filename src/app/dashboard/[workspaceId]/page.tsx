import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import dynamic from 'next/dynamic'
import FolderListWrapper from '@/pages/dashboard/folderCard/FolderListWrapper'

const CreateFolder = dynamic(() => import('@/pages/dashboard/CreateFolder'))
const CreateWorkspace = dynamic(() => import('@/pages/dashboard/CreateWorkspace'))
const FolderListContainer = dynamic(() => import('@/pages/dashboard/folderCard/FolderListContainer'))
const VideoListContainer = dynamic(() => import('@/pages/dashboard/videoCard/VideoListContainer'))



export default async function page({ params }: { params: { workspaceId: string } }) {
  const { workspaceId } = await params

  return (
    <>
      <Tabs
        defaultValue="videos"
      >
        <div className="flex justify-between items-center">
          <TabsList className="bg-transparent gap-2">
            <TabsTrigger
              className=" px-3 rounded-full hover:bg-neutral-800/80"
              value="videos"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="archive"
              className=" px-3 rounded-full data-[state=active]:bg-[#252525] hover:bg-neutral-800/80"
            >
              Archive
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-x-3">
            <CreateWorkspace />
            <CreateFolder workspaceId={workspaceId} />
          </div>
        </div>
        <section className=" mt-6">
          <TabsContent value="videos" className=' space-y-3'>
            <FolderListWrapper>
              <FolderListContainer workspaceId={workspaceId} />
            </FolderListWrapper>
            <VideoListContainer workspaceId={workspaceId} />
          </TabsContent>
        </section>
      </Tabs>
    </>
  )
}
