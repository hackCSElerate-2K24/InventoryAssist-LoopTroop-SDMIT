import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
