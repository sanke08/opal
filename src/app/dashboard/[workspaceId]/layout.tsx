import { getServerSideUser } from '@/actions/auth.actions'
import { redirect } from 'next/navigation'
import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header'

type Props = {
    children: React.ReactNode,
    params: { workspaceId: string }
}


export default async function layout({ children, params }: Props) {

    const { workspaceId } = await params

    const user = await getServerSideUser()
    if (!user) redirect("/auth")
    if (!user.workspaces.length) return redirect("/dashboard")

    const workspaces = user.workspaces.map((workspace) => ({
        name: workspace.name,
        id: workspace.id
    }))

    return (
        <div className='flex h-screen w-full pt-2'>
            <Sidebar activeWorkspaceId={workspaceId} workspaces={workspaces} />
            <div className=' w-full scrollbar-hide  overflow-hidden'>
                <Header />
                <div className='bg-zinc-900 p-4 rounded-xl mt-2 h-full scrollbar-hide overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}
