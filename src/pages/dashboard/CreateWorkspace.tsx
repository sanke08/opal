"use client"
import Modal from '@/components/CustomModal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useAction from '@/hooks/useAction'
import { BASE_URL } from '@/lib/constance'
import axios from 'axios'
import { FolderPlus } from 'lucide-react'
import React, { useRef } from 'react'

const CreateWorkspace = () => {
    return (
        <Modal content={<WorkspaceForm />} title="Create a Workspace" description=" Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself." >
            <Button size={"sm"} className="bg-neutral-800/80 hover:bg-neutral-700/50 text-neutral-500 hover:text-neutral-300 flex items-center gap-2 rounded-lg">
                <FolderPlus />
                Create Workspace
            </Button>
        </Modal>
    )
}

export default CreateWorkspace


const WorkspaceForm = () => {


    
    const inpRef = useRef<HTMLInputElement | null>(null)


    const { execute, isLoading,reset } = useAction({
        executeFun: async () => {
            console.log("clicked")
            console.log(inpRef.current?.value)
            return await axios.post(`${BASE_URL}/api/workspace`, { name: inpRef.current?.value })
        },
        onSuccess: (data) => {
            console.log(data)
            reset()
        },
        onError: (error) => {
            console.log(error.message)
            reset()
        },

    })

    return (
        <div className=' space-y-4'>
            <div className=' space-y-0.5'>
                <Label>Name</Label>
                <Input ref={inpRef} placeholder='Workspace Name' />
            </div>
            <Button isLoading={isLoading} onClick={execute} variant={"secondary"} className=' w-full'>Create</Button>
        </div>
    )
}