import { createFileRoute, useNavigate } from '@tanstack/react-router'
import useAuthStore from '@/store/authStore';
import { useEffect } from 'react';


export const Route = createFileRoute('/category')({
  component: RouteComponent,
})

const {userInfo} = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if(!userInfo){
      navigate({to: '/login'})
    }
  }, []);
  useEffect(() => {
    if(!userInfo){
      navigate({to: '/login'})
    }
  }, [userInfo]);



function RouteComponent() {
  return 'Hello /category!'
}
