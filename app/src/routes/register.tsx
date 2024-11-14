import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import RegisterPage from '@/components/registerFrom'

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='h-screen grid'>
      
        <div className='grid gap-8 place-content-center justify-center'>
          <h1 className="text-3xl font-bold text-primary">Registration</h1>
          <RegisterPage ></RegisterPage>
          <div className="flex justify-center">
                Already have one? &nbsp;
                <Link to='/login' className="hover:underline italic">
                   Login
                </Link>
            </div>         
        </div>

    </div>
  )
}
