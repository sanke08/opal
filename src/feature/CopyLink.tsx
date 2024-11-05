"use client"
import CustomTooltip from "@/components/CustomTooltip"
import { BASE_URL } from "@/lib/constance"
import { cn } from "@/lib/utils"
import { Link2, LucideProps } from "lucide-react"

type CopyLinkProps = LucideProps & {
    videoId: string,
    className?: string
}


const CopyLink = ({ videoId, className, ...rest }: CopyLinkProps) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(
            `${BASE_URL}/preview/${videoId}`

        )
    }



    return (
        <CustomTooltip content={"Copy link"}>
        <Link2 onClick={handleCopy} className={cn(" cursor-pointer transition-all duration-300", className)} {...rest} />
        </CustomTooltip>
    )
}

export default CopyLink
