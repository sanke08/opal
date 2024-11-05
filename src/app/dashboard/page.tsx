import Loader from "@/components/Loader"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const Dashboard = dynamic(() => import("@/pages/dashboard/Dashboard").then(mod => mod.Dashboard), {
    ssr: true
})



export default function page() {
    return (
        <Suspense fallback={<Loader />}>
            <Dashboard />
        </Suspense>
    )
}


