import { Bell, CreditCard, Home, Library, LucideIcon, Settings } from "lucide-react";

export const BASE_URL = "http://localhost:3000"

export const MENU_ITEMS = (
    workspaceId: string
  ): { title: string; href: string; icon: LucideIcon }[] => [
    { title: 'Home', href: `/dashboard/${workspaceId}/home`, icon: Home },
    {
      title: 'My Library',
      href: `/dashboard/${workspaceId}`,
      icon: Library,
    },
    {
      title: 'Notifications',
      href: `/dashboard/${workspaceId}/notifications`,
      icon: Bell,
    },
    {
      title: 'Billing',
      href: `/dashboard/${workspaceId}/billing`,
      icon: CreditCard,
    },
    {
      title: 'Settings',
      href: `/dashboard/${workspaceId}/settings`,
      icon: Settings,
    },
  ]
  