
interface VideoTranscriptProps {
  transcript: string
}
const VideoTranscript = ({ transcript }: VideoTranscriptProps) => {
  return (
    <p className=' text-zinc-200 text-sm'>
      {transcript} Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat dolores, voluptas similique, delectus architecto inventore voluptatibus, laudantium deleniti cupiditate commodi! Vel reiciendis magnam enim! Similique numquam quasi, nam vel tempora, ad doloribus quos cupiditate laborum ipsa provident, mollitia magnam temporibus consectetur officia expedita et neque quis necessitatibus obcaecati qui?
    </p>
  )
}

export default VideoTranscript
