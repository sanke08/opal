"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type Props =  {
    children: React.ReactNode
    content: string
    className?: string
}

const CustomTooltip = ({ children, content, className }: Props) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger className={cn( className)}>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default CustomTooltip
