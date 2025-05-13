/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { NavMain } from "components/nav-main"
import { NavProjects } from "components/nav-projects"
import { NavUser } from "components/nav-user"
import { TeamSwitcher } from 'components/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "components/components/ui/sidebar"
import {
  AudioWaveform,
  // BookOpen,
  // Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  // SquareTerminal,
} from "lucide-react"
import { appPages } from 'routes/appRoutes'


// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  navMain: [
    {
      title: "Settings",
      path: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          path: "#",
        },
        {
          title: "Team",
          path: "#",
        },
        {
          title: "Billing",
          path: "#",
        },
        {
          title: "Limits",
          path: "#",
        },
      ],
    },
  ],
}

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const activeRoute = (routeName: string) => {
  //   if (location.pathname.includes(routeName)) {
  //     return true;
  //   }
  //   return false;
  // };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={appPages as any} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
