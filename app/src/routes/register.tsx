import * as React from 'react'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import RegisterPage from '@/components/registerFrom'
import useAuthStore from '@/store/authStore';
import { useEffect } from 'react';

export const Route = createFileRoute('/register')({
  component: RouteComponent,
})


function RouteComponent() {

  const {userInfo} = useAuthStore();
    const navigate = useNavigate();
    useEffect(() => {
      if(userInfo){
        navigate({to: '/login'})
      }
    }, []);
    useEffect(() => {
      if(userInfo){
        navigate({to: '/login'})
      }
  }, [userInfo]);
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
