"use client"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

const VideoActivity = () => {
  return (
    <div className=" flex flex-col h-full ">
      <div className=" h-full">
        <CommentCard />
      </div>
      <div className=" h-fit">
        <CommentForm />
      </div>
    </div>
  )
}

export default VideoActivity
