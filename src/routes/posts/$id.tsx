import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const {id}=Route.useParams();
  return `Hello /posts/${id}!`
}
