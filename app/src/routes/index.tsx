import {createFileRoute, useNavigate} from '@tanstack/react-router'
import StockUpdateCard from '@/components/stock-update-card'
import { Chart } from '@/components/chart'
import InventorySummary from '@/components/inventorySmmary'
import TopSellingItems from '@/components/topSellingItems'
import {useEffect} from "react";
import useAuthStore from "@/store/authStore.ts";
import BarcodeScannerComponent from '@/components/BarcodeScannerComponent'

export const Route = createFileRoute('/')({
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
  }, [userInfo]);
  return (
    <>
    <div className='grid  px-8 min-h-screen w-full mt-16 grid-cols-1'>
      <div className='bg-white '>
        <StockUpdateCard/>
      </div>
      <div className='col-span-2 grid sm:grid-cols-2 grid-col-1'>
        <div>
          <h1 className='text-3xl font-bold m-2'>Overview</h1>
        <Chart />
        </div>
        <InventorySummary />
      </div>
      <div>
        <TopSellingItems />
      </div>
      <div className='border-grey-500 border-[1px]'></div> <br />
      <div className="text-center text-3xl sm:text-3xl md:text-4xl">
        <h2>Barcode Scanner</h2>
      </div>
      <br />
      <div className="flex justify-center items-center text-center text-xl sm:text-2xl">
        <BarcodeScannerComponent />
      </div>
      <br /><br />
    </div>
    

    <BarcodeScannerComponent />
      
    </>
  )
}
