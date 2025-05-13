"use client"

import {
//   Folder,
//   Forward,
//   MoreHorizontal,
//   Trash2,
} from "lucide-react"

import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
} from "components/components/ui/dropdown-menu"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
//   SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
//   useSidebar,
} from "components/components/ui/sidebar"
import { RoutesType } from 'utils/interfaces'
import { Link } from 'react-router-dom'

export function NavProjects({
  projects,
}: {
  projects: RoutesType[]
}) {
//   const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Platform Tools</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => {
          const Icon = item.Icon
          return ( <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link
                key={item.path}
                to={item.path}
                >
                  <Icon/>
                    <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>)
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
