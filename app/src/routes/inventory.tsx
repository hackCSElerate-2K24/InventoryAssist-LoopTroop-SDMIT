import { createFileRoute, useNavigate } from '@tanstack/react-router'
import ItemTable from '../components/ItemTable'
import useAuthStore from '@/store/authStore';
import { useEffect } from 'react';

export const Route = createFileRoute('/inventory')({
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
  return (
    <div className='h-screen w-screen flex flex-row gap-4 bg-orange-100'>
      <div>
        Category
      </div>
      <ItemTable></ItemTable>
    </div>

  )
}
