import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
        </Link>{' '}
        <Link to="/updatepassword" className="[&.active]:font-bold">
       update password
        </Link>{' '}
        <Link to="/signin" className="[&.active]:font-bold">
         Signin
        </Link>{' '}
           
        <Link to="/dashboard" className="[&.active]:font-bold">
         Dashboard
        </Link>{' '}
        <Link to="/createticket" className="[&.active]:font-bold">
         Create ticket
        </Link>{' '}
        <Link to="/users" className="[&.active]:font-bold">
        users table
        </Link>{' '}
        <Link to="/getspecificuser" className="[&.active]:font-bold">
        specific user
        </Link>{' '}
               
        <Link to="/getStats" className="[&.active]:font-bold">
        Ticket Statistics
        </Link>{' '}
        
        <Link to="/fileupload/$ticket-id" className="[&.active]:font-bold">
        upload files
        </Link>{' '}
        
        <Link to="/assigntickets/$ticket" className="[&.active]:font-bold">
        assign agents
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
