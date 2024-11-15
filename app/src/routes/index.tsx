import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import StockUpdateCard from '@/components/stock-update-card'
import { Chart } from '@/components/chart'
import InventorySummary from '@/components/inventorySmmary'
import TopSellingItems from '@/components/topSellingItems'

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
    </div>
      
    </>
  )
}
