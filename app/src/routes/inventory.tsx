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
    <div className='h-screen w-screen flex flex-row gap-4  p-16 pb-0'>
      <div className="h-full w-full bg-blue-200 ">

      </div>
      {/*<div> Category*/}
      {/*</div>*/}
      {/*<ItemTable></ItemTable>*/}
    </div>

  )
}
