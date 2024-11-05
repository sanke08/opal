import { db } from '@/lib/prisma'
import React from 'react'
import VideoList from './VideoList'

const VideoListContainer = async ({ workspaceId }: { workspaceId: string }) => {
  const videos = await db.video.findMany({
    where: {
      OR: [
        {
          workspaceId,

        },
        {
          folderId: workspaceId
        }
      ]
    }
  })
  return (
    <div>
      <p className='text-xl text-neutral-300 font-bold'>Videos</p>
      <VideoList videos={videos} />
    </div>
  )
}

export default VideoListContainer
