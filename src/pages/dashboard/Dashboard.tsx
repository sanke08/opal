import { getServerSideUser } from "@/actions/auth.actions"
import { redirect } from "next/navigation"

export const Dashboard = async () => {
    const user = await getServerSideUser()
    if (!user) return redirect("/auth")
    if (!user.workspaces[0].id) return redirect("/workspace/new")
    return redirect(`/dashboard/${user.workspaces[0].id}`)
}