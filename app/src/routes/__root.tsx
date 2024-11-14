import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
      <main>
        <Navbar/>
        <Outlet />
      </main>
  )
}
