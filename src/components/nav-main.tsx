   "use client"

   import { ChevronRight, type LucideIcon } from "lucide-react"

   import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
   } from "components/components/ui/collapsible"
   import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem,
   } from "components/components/ui/sidebar"
   import { Link } from 'react-router-dom'

   export function NavMain({
   items,
   }: {
   items: {
      title: string
      path: string
      icon?: LucideIcon
      isActive?: boolean
      items?: {
         title: string
         path: string
      }[]
   }[]
   }) {
   return (
      <SidebarGroup>
         <SidebarGroupLabel>Preferences</SidebarGroupLabel>
         <SidebarMenu>
         {items.map((item) => {
            const Icon = item.icon
            return <Collapsible
               key={item.title}
               asChild
               // defaultOpen={item.isActive}
               className="group/collapsible"
            >
               <SidebarMenuItem>
               <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                     {Icon && <Icon />}
                     <span>{item.title}</span>
                     <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
               </CollapsibleTrigger>
               <CollapsibleContent>
                  <SidebarMenuSub>
                     {item.items?.map((subItem) => (
                     <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                           <Link
                           key={subItem.path}
                           to={subItem.path}
                           >
                              <span>{subItem.title}</span>
                           </Link>
                        </SidebarMenuSubButton>
                     </SidebarMenuSubItem>
                     ))}
                  </SidebarMenuSub>
               </CollapsibleContent>
               </SidebarMenuItem>
            </Collapsible>
         
         })}
         </SidebarMenu>
      </SidebarGroup>
   )
   }
