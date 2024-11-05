"use client"
import dynamic from "next/dynamic"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CopyEmbdedCode from "@/feature/CopyEmbdedCode"
import CopyLink from "@/feature/CopyLink"
import DownloadVdo from "@/feature/DownloadVdo"
import { Skeleton } from "@/components/ui/skeleton"
import VideoActivity from "./VideoActivity"
import VideoTranscript from "./VideoTranscript"
import EditVideoDetail from "./EditVideoDetail"


const VdoAITool = dynamic(() => import("@/pages/vdo/VdoAITool"), {
    ssr: false,
    loading: () => <Skeleton className="w-full h-[300px]" />
})

const VideoFeature = () => {
    return (
        <div className=" h-full flex flex-col gap-2">
            <div className="flex justify-end gap-x-3 p-1 px-4 items-center bg-zinc-800/50 rounded-xl">
                <EditVideoDetail />
                <CopyLink videoId="jhgjth" size={36} className=" hover:bg-zinc-700/80 rounded-xl p-2" />
                <CopyEmbdedCode />
                <DownloadVdo />
            </div>

            <Tabs defaultValue="Transcript" className=" h-full border p-2 rounded-xl">
                <TabsList className="bg-transparent gap-2 h-max border-b w-full justify-start rounded-none pb-2">
                    {['Ai tools', 'Transcript', 'Activity'].map((tab) => (

                        <TabsTrigger
                            key={tab}
                            className=" px-3 rounded-full hover:bg-neutral-800/80"
                            value={tab}
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value="Ai tools">
                    <VdoAITool />
                </TabsContent>
                <TabsContent value="Transcript">
                    <VideoTranscript transcript="we" />
                </TabsContent>
                <TabsContent value="Activity" className=" h-[90%]">
                    <VideoActivity />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default VideoFeature
