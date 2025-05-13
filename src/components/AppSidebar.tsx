// "use client"

// import * as React from "react"
// import {
//   ArrowUpCircleIcon,
//   BarChartIcon,
//   CameraIcon,
//   ClipboardListIcon,
//   DatabaseIcon,
//   FileCodeIcon,
//   FileIcon,
//   FileTextIcon,
//   FolderIcon,
//   HelpCircleIcon,
//   LayoutDashboardIcon,
//   ListIcon,
//   SearchIcon,
//   SettingsIcon,
//   UsersIcon,
// } from "lucide-react"

// // import { NavDocuments } from "@/components/nav-documents"
// // import { NavMain } from "@/components/nav-main"
// // import { NavSecondary } from "@/components/nav-secondary"
// // import { NavUser } from "@/components/nav-user"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "components/components/ui/sidebar"

// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Dashboard",
//       url: "#",
//       icon: LayoutDashboardIcon,
//     },
//     {
//       title: "Lifecycle",
//       url: "#",
//       icon: ListIcon,
//     },
//     {
//       title: "Analytics",
//       url: "#",
//       icon: BarChartIcon,
//     },
//     {
//       title: "Projects",
//       url: "#",
//       icon: FolderIcon,
//     },
//     {
//       title: "Team",
//       url: "#",
//       icon: UsersIcon,
//     },
//   ],
//   navClouds: [
//     {
//       title: "Capture",
//       icon: CameraIcon,
//       isActive: true,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Proposal",
//       icon: FileTextIcon,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Prompts",
//       icon: FileCodeIcon,
//       url: "#",
//       items: [
//         {
//           title: "Active Proposals",
//           url: "#",
//         },
//         {
//           title: "Archived",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Settings",
//       url: "#",
//       icon: SettingsIcon,
//     },
//     {
//       title: "Get Help",
//       url: "#",
//       icon: HelpCircleIcon,
//     },
//     {
//       title: "Search",
//       url: "#",
//       icon: SearchIcon,
//     },
//   ],
//   documents: [
//     {
//       name: "Data Library",
//       url: "#",
//       icon: DatabaseIcon,
//     },
//     {
//       name: "Reports",
//       url: "#",
//       icon: ClipboardListIcon,
//     },
//     {
//       name: "Word Assistant",
//       url: "#",
//       icon: FileIcon,
//     },
//   ],
// }
// console.log(data)

// export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   return (
//     <Sidebar collapsible="offcanvas" {...props}>
//       <SidebarHeader>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton
//               asChild
//               className="data-[slot=sidebar-menu-button]:!p-1.5"
//             >
//               <a href="#">
//                 <ArrowUpCircleIcon className="h-5 w-5" />
//                 <span className="text-base font-semibold">Acme Inc.</span>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarContent>
//         {/* <NavMain items={data.navMain} />
//         <NavDocuments items={data.documents} />
//         <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
//       </SidebarContent>
//       <SidebarFooter>
//         {/* <NavUser user={data.user} /> */}
//       </SidebarFooter>
//     </Sidebar>
//   )
// }

"use client"

import * as React from "react"
// import {
//   AudioWaveform,
//   BookOpen,
//   Bot,
//   Command,
//   Frame,
//   GalleryVerticalEnd,
//   Map,
//   PieChart,
//   Settings2,
//   SquareTerminal,
// } from "lucide-react"

import { NavMain } from "components/components/nav-main"
import { NavProjects } from "components/components/nav-projects"
import { NavUser } from "components/components/nav-user"
import { TeamSwitcher } from "components/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "components/components/ui/sidebar"

// This is sample data.
// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   teams: [
//     {
//       name: "Acme Inc",
//       logo: GalleryVerticalEnd,
//       plan: "Enterprise",
//     },
//     {
//       name: "Acme Corp.",
//       logo: AudioWaveform,
//       plan: "Startup",
//     },
//     {
//       name: "Evil Corp.",
//       logo: Command,
//       plan: "Free",
//     },
//   ],
//   navMain: [
//     {
//       title: "Playground",
//       url: "#",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "History",
//           url: "#",
//         },
//         {
//           title: "Starred",
//           url: "#",
//         },
//         {
//           title: "Settings",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Models",
//       url: "#",
//       icon: Bot,
//       items: [
//         {
//           title: "Genesis",
//           url: "#",
//         },
//         {
//           title: "Explorer",
//           url: "#",
//         },
//         {
//           title: "Quantum",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Documentation",
//       url: "#",
//       icon: BookOpen,
//       items: [
//         {
//           title: "Introduction",
//           url: "#",
//         },
//         {
//           title: "Get Started",
//           url: "#",
//         },
//         {
//           title: "Tutorials",
//           url: "#",
//         },
//         {
//           title: "Changelog",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "General",
//           url: "#",
//         },
//         {
//           title: "Team",
//           url: "#",
//         },
//         {
//           title: "Billing",
//           url: "#",
//         },
//         {
//           title: "Limits",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// }

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <h1>Teams switcher here</h1>
      </SidebarHeader>
      <SidebarContent>
         <h1>Nav main and Nav projects here</h1>
        {/* <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
         <h1>Nav user here</h1>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
