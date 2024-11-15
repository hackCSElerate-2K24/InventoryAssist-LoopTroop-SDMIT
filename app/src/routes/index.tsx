import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {useEffect} from "react";
import useAuthStore from "@/store/authStore.ts";

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate({from: '/'});
  const {userInfo} = useAuthStore();
  useEffect(() => {
    if(!userInfo){
      navigate({to: '/login'})
    }
  }, []);

  return (
    <div></div>
  )
}
