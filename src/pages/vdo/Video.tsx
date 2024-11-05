import VideoMainDetail from "./VideoMainDetail";
import VideoDesc from "./VideoDesc";
import VideoFeature from "./VideoFeature";

const Video = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 overflow-hidden h-[calc(100vh-60px)]">
            <div className="flex flex-col col-span-2 gap-y-6 overflow-y-auto h-[200vh] hide_scrollbar">
                {/* @ts-expect-error video is not defined */}
                <VideoMainDetail author={true} daysAgo={1} />

                <div className=" w-full h-[50vh] bg-zinc-800 animate-pulse rounded-xl"></div>

                <VideoDesc />
            </div>

            <div className=" col-span-1 h-[97%]">
                <VideoFeature />
            </div>
        </div>
    )
}

export default Video


