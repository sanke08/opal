"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAction from "@/hooks/useAction"
import { BASE_URL } from "@/lib/constance"
import axios from "axios"
import  { useRef } from "react"






export const FolderModalContent = ({ workspaceId }: { workspaceId: string }) => {

    const inpRef = useRef<HTMLInputElement | null>(null)

    const { execute, isLoading, reset } = useAction({
        executeFun: async () => {
            console.log("clicked")
            console.log(inpRef.current?.value)
            return await axios.post(`${BASE_URL}/api/folder`, { workspaceId, name: inpRef.current?.value })
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
                <Input ref={inpRef} placeholder='Folder Name' />
            </div>
            <Button isLoading={isLoading} variant={"secondary"} onClick={() => execute()} className=' w-full'>Add</Button>
        </div>
    )
}