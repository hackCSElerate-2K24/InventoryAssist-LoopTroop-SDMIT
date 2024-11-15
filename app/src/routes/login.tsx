import {createFileRoute, redirect} from '@tanstack/react-router'
import LoginForm from '@/components/loginForm'

export const Route = createFileRoute('/login')({
  beforeLoad: async ({ context }) => {
    // @ts-ignore
    if (context.auth.userInfo) {
      throw redirect({ to: "/login" });
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LoginForm></LoginForm>
  )
}
