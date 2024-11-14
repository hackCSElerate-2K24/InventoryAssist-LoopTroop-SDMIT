import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ItemTable from '../components/ItemTable'

export const Route = createFileRoute('/inventory')({
  component: RouteComponent,
})

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
