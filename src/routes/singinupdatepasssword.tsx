import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/singinupdatepasssword')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/singinupdatepasssword"!</div>
}
