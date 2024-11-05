import CustomTooltip from "@/components/CustomTooltip"
import { cn } from "@/lib/utils"
import { Download, LucideProps } from "lucide-react"


type DownloadVdoProps = LucideProps & {
    className?: string
}

const DownloadVdo = ({ className, ...rest }: DownloadVdoProps) => {
  return (
    <CustomTooltip content={"Download video"}>
      <Download className={cn("text-zinc-400 cursor-pointer hover:text-white hover:bg-zinc-700/80 rounded-xl p-2", className)} size={36} {...rest} />
    </CustomTooltip>
  )
}

export default DownloadVdo
