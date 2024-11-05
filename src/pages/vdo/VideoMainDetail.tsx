import { User, Video } from "@prisma/client"


interface VideoMainDetailProps {
    video: Video & { User: User }
    author: boolean
    daysAgo: number
}


const VideoMainDetail = ({ video, author, daysAgo }: VideoMainDetailProps) => {
    return (
        <div>
            <div className="flex gap-x-5 items-start justify-between">
                <h2 className="text-white text-4xl font-bold">
                    {/* {video.title} */}
                    Video Title
                </h2>
            </div>
            <span className="flex gap-x-3 mt-2">
                <p className="text-zinc-400 text-sm capitalize">
                    {/* {video.User?.firstname} {video.User?.lastname} */}
                    Sanket Gawande
                </p>
                <p className="text-zinc-500 text-sm">
                    {/* {daysAgo === 0 ? 'Today' : `${daysAgo}d ago`} */}
                    1d ago
                </p>
            </span>
        </div>
    )
}

export default VideoMainDetail
