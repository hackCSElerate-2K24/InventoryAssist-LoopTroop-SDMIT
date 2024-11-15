import {createFileRoute, redirect, useNavigate} from '@tanstack/react-router'
import LoginForm from '@/components/loginForm'
import useAuthStore from '@/store/authStore';
import { useEffect } from 'react';

export const Route = createFileRoute('/login')({
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
  },[userInfo]);
  return (
    <LoginForm></LoginForm>
  )
}
