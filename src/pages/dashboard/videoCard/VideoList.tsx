"use client"
import { Video as VideoType } from '@prisma/client'
import { useState, useEffect } from 'react'
import VideoCard from './VideoCard'

const VideoList = ({ videos: initialVideos }: { videos: VideoType[] }) => {

    const [videos, setVideos] = useState<VideoType[]>([])


    useEffect(() => {
        setVideos(initialVideos)
    }, [initialVideos])


    return (
        <div className=' w-full grid grid-cols-5 gap-4'>
            {
                videos && videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                ))
            }
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    )
}

export default VideoList
