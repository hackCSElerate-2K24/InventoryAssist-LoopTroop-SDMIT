import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import ItemTable from '../components/ItemTable'

export const Route = createFileRoute('/itemTable')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ItemTable></ItemTable>
  )
}
