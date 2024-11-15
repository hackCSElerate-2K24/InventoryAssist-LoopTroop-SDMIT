import { createFileRoute, useNavigate } from '@tanstack/react-router'
import useAuthStore from '@/store/authStore';
import { useEffect } from 'react';


export const Route = createFileRoute('/category')({
  component: RouteComponent,
})




function RouteComponent() {
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
  return 'Hello /category!'
}
