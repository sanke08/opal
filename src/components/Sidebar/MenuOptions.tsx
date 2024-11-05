"use client"
import { MENU_ITEMS } from "@/lib/constance"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const MenuOptions = ({ activeWorkspaceId }: { activeWorkspaceId: string }) => {

    const pathname = usePathname()

    const menuItems = useMemo(() => {
        return MENU_ITEMS(activeWorkspaceId)
    }, [activeWorkspaceId])


    return (
        <div>
            <p className=" font-bold">Menu</p>
            {menuItems && menuItems.map(menuItem => (
                <MenuItem key={menuItem.href} href={menuItem.href} title={menuItem.title} icon={menuItem.icon} isSelected={pathname === menuItem.href} />
            ))}
        </div>
    )
}

export default MenuOptions



interface Props {
    title: string
    href: string
    icon: LucideIcon
    isSelected: boolean
}
const MenuItem = ({ title, href, icon: Icon, isSelected }: Props) => {

    return (
        <div className="cursor-pointer my-[5px]">
            <Link
                href={href}
                className={cn(
                    'flex items-center justify-between group rounded-lg hover:bg-[#1D1D1D]',
                    isSelected ? 'bg-neutral-800/80 hover:bg-neutral-800/80' : ''
                )}
            >
                <div className="flex items-center gap-2 transition-all p-[5px] cursor-pointer">
                    {<Icon size={18} className={cn( isSelected ? "text-white" : " text-neutral-500")} />}
                    <span
                        className={cn(
                            ' text-sm group-hover:text-neutral-400 transition-all truncate',
                            isSelected ? 'text-white hover:text-white' : "text-neutral-500"
                        )}
                    >
                        {title}
                    </span>
                </div>
                { }
            </Link>
        </div>
    )
}