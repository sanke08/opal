"use client"
import { Folder as FolderType } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import Folder from './FolderCard'
import { usePathname, useRouter } from 'next/navigation'
import Modal from '@/components/CustomModal'
import { Button } from '@/components/ui/button'
import { FolderModalContent } from '@/components/FolderModalContent'
import { FolderPlus } from 'lucide-react'

const title = "Create a Workspace"
const description = " Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."





const FolderList = ({ folders: initialFolders }: { folders: FolderType[] }) => {

  const [folders, setFolders] = useState<FolderType[]>([])
  const router = useRouter()
  const pathname = usePathname()


  useEffect(() => {
    setFolders(initialFolders)
  }, [initialFolders])

  const handleNavigation = (folderId: string) => {
    router.replace(`${pathname}?folder=${Math.random()}`)
  }


  return (
    <div className=" w-full flex space-x-4 py-2 pr-1 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      {
        folders && folders.map((folder) => (
          <Folder key={folder.id} folder={folder} handleNavigation={handleNavigation} />
        ))
      }


      <Modal content={<FolderModalContent workspaceId={folders[0]?.workspaceId} />} title={title} description={description}  >
        <Button className='flex px-4 items-center justify-between text-left gap-2 border h-16 min-w-64'>
          <div>
            <p className='cursor-text text-sm font-semibold h-6'>Add a Folder</p>
            <p className=' text-xs text-zinc-500'>No Folder Found</p>
          </div>
          <FolderPlus size={20} className=' w-40 h-40'/>
        </Button>
      </Modal>

    </div>
  )
}

export default FolderList
