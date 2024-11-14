import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/suppliers')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /suppliers!'
}
