import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import React from 'react'


interface Props {
    isLoading?: boolean,
    className?: string
}


export default function Loader({ isLoading = true, className, ...rest }: Props) {
    if (isLoading)
        return (
            <Loader2 {...rest} className={cn(' animate-spin', className)} />
        )
}
