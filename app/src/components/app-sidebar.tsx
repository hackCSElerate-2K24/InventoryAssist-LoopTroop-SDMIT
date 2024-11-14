import { Link } from "@tanstack/react-router"
import inventory from "../assets/inventory.svg"
import gear from "../assets/gear.png"
import category from "../assets/category.svg"
import supplier from "../assets/supplier.svg"
import home from "../assets/home.png"




import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "DashBoard",
    url: "/",
    icons: home,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icons: inventory
  },
  {
    title: "Category",
    url: "/category",
    icons:category
  },
  {
    title: "Suppliers",
    url: "/suppliers",
    icons:supplier
    
  },
  {
    title: "Settings",
    url: "/setting",
    icons: gear,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <div className="flex items-center">
                      <img src={item.icons} className="size-5 object-cover"></img>
                      <Link to={item.url}>
                        <span className="text-xl">
                          {item.title}
                        </span>
                        
                      </Link>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
