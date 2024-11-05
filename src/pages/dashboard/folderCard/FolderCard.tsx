import { FolderIcon } from "lucide-react"
import { Folder as FolderType } from "@prisma/client"
import React, { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import useAction from "@/hooks/useAction"
import axios from "axios"
import { BASE_URL } from "@/lib/constance"


interface FolderCardProps {
  folder?: FolderType
  handleNavigation: (folderId: string) => void
}


const FolderCard = ({ folder, handleNavigation }: FolderCardProps) => {


  const inputRef = useRef<HTMLInputElement | null>(null)

  const [isUpdating, setIsUpdating] = useState(false)

  const { execute } = useAction({
    executeFun: async () => {
      return axios.put(`${BASE_URL}/api/folder/${folder?.id}`, { name: inputRef.current?.value })
    },
    onSuccess: (data) => {
      console.log(data)
    }
  })


  const handleDoubleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation()
    setIsUpdating(true)
    inputRef.current?.focus()
  }

  const handleSingleClick = () => {
    // if (folder)
    handleNavigation(folder?.id)
  }


  return (
    <div onClick={handleSingleClick} className=" px-4 py-2 min-w-64 h-16 border cursor-pointer rounded-lg flex justify-between items-center gap-2 snap-start hover:bg-zinc-800/50 transition-all">
      <div>
        {
          isUpdating ?

            <Input ref={(el) => {
              inputRef.current = el
              el?.focus()
            }}
              onBlur={() => {
                if (inputRef.current?.value.length && folder) {
                  execute()
                  folder.name = inputRef.current?.value
                }
                setIsUpdating(false)
              }}
              onClick={(e) => e.stopPropagation()}
              className=" !cursor-text h-6 bg-transparent px-1 py-0 text-white border  disabled:text-white disabled:opacity-100"
            />
            :
            <p  onClick={(e) => e.stopPropagation()} onDoubleClick={handleDoubleClick} className=" !cursor-text text-sm font-semibold h-6">{folder?.name || "Title"}</p>
        }

        <p className=" text-xs text-zinc-500">{folder?._count.videos || 0} videos</p>
      </div>
      <FolderIcon fill="white" size={24} />
    </div>
  )
}

export default FolderCard
