import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import BarcodeScanner from '@/components/BarcodeScanner'

export const Route = createFileRoute('/setting')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BarcodeScanner/>
  )
}
