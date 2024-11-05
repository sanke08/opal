import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, Circle, User2 } from "lucide-react"
import Link from "next/link"
import { Video as VideoType } from '@prisma/client'
import CopyLink from "@/feature/CopyLink"
import ChangeVideoLocation from "@/feature/ChangeVideoLocation"

const VideoCard = ({ video }: { video?: VideoType }) => {
    return (
        <div className=" group overflow-hidden cursor-pointer bg-[#171717] relative border-[1px] border-[#252525] flex flex-col rounded-xl">

            <div className=" absolute top-2 right-2 z-50 hidden  space-x-2 group-hover:flex">
                <ChangeVideoLocation />
                <CopyLink videoId={video?.id} />
            </div>
            <Link
                href={"#"}

                // href={`/dashboard/${props.workspaceId}/video/${props.id}`}
                className="hover:bg-zinc-800/50 transition duration-150 flex flex-col justify-between h-full"
            >
                {/* <video
                    controls={false}
                    preload="metadata"
                    className="w-full aspect-video opacity-50 z-20"
                >
                    <source
                        src={`${process.env.NEXT_PUBLIC_CLOUD_FRONT_STREAM_URL}/${props.source}#t=1`}
                    />
                </video> */}
                <div className=" w-full h-[150px] bg-zinc-800 animate-pulse"></div>
                <div className="p-3 flex flex-col z-20">

                    <h2 className="text-sm font-semibold text-zinc-300">
                        {video?.title || "Title"}
                    </h2>
                    <div className="flex gap-x-2 items-center mt-2">
                        <Avatar className=" w-6 h-6">
                            <AvatarImage src={"werr"} />
                            <AvatarFallback>
                                <User2 />
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="capitalize text-xs text-zinc-300">
                                {video?.User?.firstname || "sanket"} {video?.User?.lastname || "Gawande"}
                            </p>
                            <p className="text-[#6d6b6b]  text-xs flex items-center gap-x-1">
                                <Circle
                                    size={4}
                                    className=" fill-zinc-500"
                                />
                                4 Day ago
                                {/* {daysAgo === 0 ? 'Today' : `${daysAgo}d ago`} */}
                            </p>
                        </div>
                    </div>
                    <div className=" mt-2">
                        <span className="flex gap-x-1 items-center">
                            <Building
                                className="text-[#9D9D9D]"
                                size={12}
                            />
                            <p className="text-xs text-zinc-500 capitalize">
                                {video?.User?.firstname || "sanket"}'s Workspace
                            </p>
                        </span>
                    </div>

                </div>
            </Link>
        </div>
    )
}

export default VideoCard 
