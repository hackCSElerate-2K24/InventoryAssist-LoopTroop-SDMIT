import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import StockUpdateCard from '@/components/stock-update-card'
import { Chart } from '@/components/chart'
import InventorySummary from '@/components/inventorySmmary'
import TopSellingItems from '@/components/topSellingItems'
import BarcodeScannerComponent from '@/components/BarcodeScannerComponent'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  return (
    <>
    <div className='h-screen w-screen grid grid-rows-[1fr_3fr_1fr] mt-16'>
      <div>
      <StockUpdateCard/>
      </div>
      <div className="bg-white lg:mt-14 sm:mt-0 lg:mx-24 lg:mb-8 sm:mx-24 sm:mb-4">
        <p className="text-3xl font-bold text-black">Overview</p>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <Chart />
        </div>
        <div>
          <InventorySummary />
        </div>
      </div>
      <div>
        <TopSellingItems />
      </div>
      <div className='border-grey-500 border-[1px]'></div> <br />
      <div className='text-center text-3xl'>
        <h2>
          Barcode Scanner
        </h2>
      </div><br />
      <div className="flex justify-center text-center text-3xl">
        <BarcodeScannerComponent />
      </div>
      <br /><br />
    </div>
    </>
  )
}
