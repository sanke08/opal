import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Circle } from 'lucide-react'

const CommentCard = () => {
  return (
    <div className=' flex gap-x-2 items-start'>
      <Avatar className=' w-8 h-8'>
        <AvatarImage
          src={""}
          alt="author"
        />
        <AvatarFallback>
          <p className=' p-4 bg-zinc-800 animate-pulse'></p>
        </AvatarFallback>
      </Avatar>
      <div>
        <div className="capitalize text-sm text-zinc-500 flex gap-x-4">
          Sanket Gawande
          <div className="flex items-center gap-x-0.5">
            <Circle size={5} className="fill-zinc-500" />
            <span className="text-zinc-500 text-xs">
              1d ago
            </span>
          </div>
        </div>
        <div className=' p-0 m-0'>
          <p className="text-zinc-200 text-sm">
            This is a comment
          </p>
        </div>
      </div>

    </div>
  )
}

export default CommentCard
