/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersImport } from './routes/users'
import { Route as UpdatepasswordImport } from './routes/updatepassword'
import { Route as SignUpImport } from './routes/signUp'
import { Route as SignInImport } from './routes/signIn'
import { Route as GetspecificuserImport } from './routes/getspecificuser'
import { Route as GetStatsImport } from './routes/getStats'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as CreateticketImport } from './routes/createticket'
import { Route as AgentsImport } from './routes/agents'
import { Route as UpdateticketTicketIdImport } from './routes/updateticket/$ticket-id'
import { Route as PostsIdImport } from './routes/posts/$id'
import { Route as GetallcommentsTicketIdImport } from './routes/getallcomments/$ticket-id'
import { Route as FileuploadTicketIdImport } from './routes/fileupload/$ticket-id'
import { Route as AssignticketsTicketIdImport } from './routes/assigntickets/$ticket-id'
import { Route as UpdateticketIdImport } from './routes/update/${ticket.id}'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UsersRoute = UsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const UpdatepasswordRoute = UpdatepasswordImport.update({
  id: '/updatepassword',
  path: '/updatepassword',
  getParentRoute: () => rootRoute,
} as any)

const SignUpRoute = SignUpImport.update({
  id: '/signUp',
  path: '/signUp',
  getParentRoute: () => rootRoute,
} as any)

const SignInRoute = SignInImport.update({
  id: '/signIn',
  path: '/signIn',
  getParentRoute: () => rootRoute,
} as any)

const GetspecificuserRoute = GetspecificuserImport.update({
  id: '/getspecificuser',
  path: '/getspecificuser',
  getParentRoute: () => rootRoute,
} as any)

const GetStatsRoute = GetStatsImport.update({
  id: '/getStats',
  path: '/getStats',
  getParentRoute: () => rootRoute,
} as any)

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const CreateticketRoute = CreateticketImport.update({
  id: '/createticket',
  path: '/createticket',
  getParentRoute: () => rootRoute,
} as any)

const AgentsRoute = AgentsImport.update({
  id: '/agents',
  path: '/agents',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UpdateticketTicketIdRoute = UpdateticketTicketIdImport.update({
  id: '/updateticket/$ticket-id',
  path: '/updateticket/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const PostsIdRoute = PostsIdImport.update({
  id: '/posts/$id',
  path: '/posts/$id',
  getParentRoute: () => rootRoute,
} as any)

const GetallcommentsTicketIdRoute = GetallcommentsTicketIdImport.update({
  id: '/getallcomments/$ticket-id',
  path: '/getallcomments/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const FileuploadTicketIdRoute = FileuploadTicketIdImport.update({
  id: '/fileupload/$ticket-id',
  path: '/fileupload/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const AssignticketsTicketIdRoute = AssignticketsTicketIdImport.update({
  id: '/assigntickets/$ticket-id',
  path: '/assigntickets/$ticket-id',
  getParentRoute: () => rootRoute,
} as any)

const UpdateticketIdRoute = UpdateticketIdImport.update({
  id: '/update/${ticket/id}',
  path: '/update/${ticket/id}',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/agents': {
      id: '/agents'
      path: '/agents'
      fullPath: '/agents'
      preLoaderRoute: typeof AgentsImport
      parentRoute: typeof rootRoute
    }
    '/createticket': {
      id: '/createticket'
      path: '/createticket'
      fullPath: '/createticket'
      preLoaderRoute: typeof CreateticketImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/getStats': {
      id: '/getStats'
      path: '/getStats'
      fullPath: '/getStats'
      preLoaderRoute: typeof GetStatsImport
      parentRoute: typeof rootRoute
    }
    '/getspecificuser': {
      id: '/getspecificuser'
      path: '/getspecificuser'
      fullPath: '/getspecificuser'
      preLoaderRoute: typeof GetspecificuserImport
      parentRoute: typeof rootRoute
    }
    '/signIn': {
      id: '/signIn'
      path: '/signIn'
      fullPath: '/signIn'
      preLoaderRoute: typeof SignInImport
      parentRoute: typeof rootRoute
    }
    '/signUp': {
      id: '/signUp'
      path: '/signUp'
      fullPath: '/signUp'
      preLoaderRoute: typeof SignUpImport
      parentRoute: typeof rootRoute
    }
    '/updatepassword': {
      id: '/updatepassword'
      path: '/updatepassword'
      fullPath: '/updatepassword'
      preLoaderRoute: typeof UpdatepasswordImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
    '/assigntickets/$ticket-id': {
      id: '/assigntickets/$ticket-id'
      path: '/assigntickets/$ticket-id'
      fullPath: '/assigntickets/$ticket-id'
      preLoaderRoute: typeof AssignticketsTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/fileupload/$ticket-id': {
      id: '/fileupload/$ticket-id'
      path: '/fileupload/$ticket-id'
      fullPath: '/fileupload/$ticket-id'
      preLoaderRoute: typeof FileuploadTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/getallcomments/$ticket-id': {
      id: '/getallcomments/$ticket-id'
      path: '/getallcomments/$ticket-id'
      fullPath: '/getallcomments/$ticket-id'
      preLoaderRoute: typeof GetallcommentsTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/$id': {
      id: '/posts/$id'
      path: '/posts/$id'
      fullPath: '/posts/$id'
      preLoaderRoute: typeof PostsIdImport
      parentRoute: typeof rootRoute
    }
    '/updateticket/$ticket-id': {
      id: '/updateticket/$ticket-id'
      path: '/updateticket/$ticket-id'
      fullPath: '/updateticket/$ticket-id'
      preLoaderRoute: typeof UpdateticketTicketIdImport
      parentRoute: typeof rootRoute
    }
    '/update/${ticket/id}': {
      id: '/update/${ticket/id}'
      path: '/update/${ticket/id}'
      fullPath: '/update/${ticket/id}'
      preLoaderRoute: typeof UpdateticketIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/agents': typeof AgentsRoute
  '/createticket': typeof CreateticketRoute
  '/dashboard': typeof DashboardRoute
  '/getStats': typeof GetStatsRoute
  '/getspecificuser': typeof GetspecificuserRoute
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/updatepassword': typeof UpdatepasswordRoute
  '/users': typeof UsersRoute
  '/assigntickets/$ticket-id': typeof AssignticketsTicketIdRoute
  '/fileupload/$ticket-id': typeof FileuploadTicketIdRoute
  '/getallcomments/$ticket-id': typeof GetallcommentsTicketIdRoute
  '/posts/$id': typeof PostsIdRoute
  '/updateticket/$ticket-id': typeof UpdateticketTicketIdRoute
  '/update/${ticket/id}': typeof UpdateticketIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/agents': typeof AgentsRoute
  '/createticket': typeof CreateticketRoute
  '/dashboard': typeof DashboardRoute
  '/getStats': typeof GetStatsRoute
  '/getspecificuser': typeof GetspecificuserRoute
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/updatepassword': typeof UpdatepasswordRoute
  '/users': typeof UsersRoute
  '/assigntickets/$ticket-id': typeof AssignticketsTicketIdRoute
  '/fileupload/$ticket-id': typeof FileuploadTicketIdRoute
  '/getallcomments/$ticket-id': typeof GetallcommentsTicketIdRoute
  '/posts/$id': typeof PostsIdRoute
  '/updateticket/$ticket-id': typeof UpdateticketTicketIdRoute
  '/update/${ticket/id}': typeof UpdateticketIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/agents': typeof AgentsRoute
  '/createticket': typeof CreateticketRoute
  '/dashboard': typeof DashboardRoute
  '/getStats': typeof GetStatsRoute
  '/getspecificuser': typeof GetspecificuserRoute
  '/signIn': typeof SignInRoute
  '/signUp': typeof SignUpRoute
  '/updatepassword': typeof UpdatepasswordRoute
  '/users': typeof UsersRoute
  '/assigntickets/$ticket-id': typeof AssignticketsTicketIdRoute
  '/fileupload/$ticket-id': typeof FileuploadTicketIdRoute
  '/getallcomments/$ticket-id': typeof GetallcommentsTicketIdRoute
  '/posts/$id': typeof PostsIdRoute
  '/updateticket/$ticket-id': typeof UpdateticketTicketIdRoute
  '/update/${ticket/id}': typeof UpdateticketIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/agents'
    | '/createticket'
    | '/dashboard'
    | '/getStats'
    | '/getspecificuser'
    | '/signIn'
    | '/signUp'
    | '/updatepassword'
    | '/users'
    | '/assigntickets/$ticket-id'
    | '/fileupload/$ticket-id'
    | '/getallcomments/$ticket-id'
    | '/posts/$id'
    | '/updateticket/$ticket-id'
    | '/update/${ticket/id}'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/agents'
    | '/createticket'
    | '/dashboard'
    | '/getStats'
    | '/getspecificuser'
    | '/signIn'
    | '/signUp'
    | '/updatepassword'
    | '/users'
    | '/assigntickets/$ticket-id'
    | '/fileupload/$ticket-id'
    | '/getallcomments/$ticket-id'
    | '/posts/$id'
    | '/updateticket/$ticket-id'
    | '/update/${ticket/id}'
  id:
    | '__root__'
    | '/'
    | '/agents'
    | '/createticket'
    | '/dashboard'
    | '/getStats'
    | '/getspecificuser'
    | '/signIn'
    | '/signUp'
    | '/updatepassword'
    | '/users'
    | '/assigntickets/$ticket-id'
    | '/fileupload/$ticket-id'
    | '/getallcomments/$ticket-id'
    | '/posts/$id'
    | '/updateticket/$ticket-id'
    | '/update/${ticket/id}'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AgentsRoute: typeof AgentsRoute
  CreateticketRoute: typeof CreateticketRoute
  DashboardRoute: typeof DashboardRoute
  GetStatsRoute: typeof GetStatsRoute
  GetspecificuserRoute: typeof GetspecificuserRoute
  SignInRoute: typeof SignInRoute
  SignUpRoute: typeof SignUpRoute
  UpdatepasswordRoute: typeof UpdatepasswordRoute
  UsersRoute: typeof UsersRoute
  AssignticketsTicketIdRoute: typeof AssignticketsTicketIdRoute
  FileuploadTicketIdRoute: typeof FileuploadTicketIdRoute
  GetallcommentsTicketIdRoute: typeof GetallcommentsTicketIdRoute
  PostsIdRoute: typeof PostsIdRoute
  UpdateticketTicketIdRoute: typeof UpdateticketTicketIdRoute
  UpdateticketIdRoute: typeof UpdateticketIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AgentsRoute: AgentsRoute,
  CreateticketRoute: CreateticketRoute,
  DashboardRoute: DashboardRoute,
  GetStatsRoute: GetStatsRoute,
  GetspecificuserRoute: GetspecificuserRoute,
  SignInRoute: SignInRoute,
  SignUpRoute: SignUpRoute,
  UpdatepasswordRoute: UpdatepasswordRoute,
  UsersRoute: UsersRoute,
  AssignticketsTicketIdRoute: AssignticketsTicketIdRoute,
  FileuploadTicketIdRoute: FileuploadTicketIdRoute,
  GetallcommentsTicketIdRoute: GetallcommentsTicketIdRoute,
  PostsIdRoute: PostsIdRoute,
  UpdateticketTicketIdRoute: UpdateticketTicketIdRoute,
  UpdateticketIdRoute: UpdateticketIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/agents",
        "/createticket",
        "/dashboard",
        "/getStats",
        "/getspecificuser",
        "/signIn",
        "/signUp",
        "/updatepassword",
        "/users",
        "/assigntickets/$ticket-id",
        "/fileupload/$ticket-id",
        "/getallcomments/$ticket-id",
        "/posts/$id",
        "/updateticket/$ticket-id",
        "/update/${ticket/id}"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/agents": {
      "filePath": "agents.tsx"
    },
    "/createticket": {
      "filePath": "createticket.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/getStats": {
      "filePath": "getStats.tsx"
    },
    "/getspecificuser": {
      "filePath": "getspecificuser.tsx"
    },
    "/signIn": {
      "filePath": "signIn.tsx"
    },
    "/signUp": {
      "filePath": "signUp.tsx"
    },
    "/updatepassword": {
      "filePath": "updatepassword.tsx"
    },
    "/users": {
      "filePath": "users.tsx"
    },
    "/assigntickets/$ticket-id": {
      "filePath": "assigntickets/$ticket-id.tsx"
    },
    "/fileupload/$ticket-id": {
      "filePath": "fileupload/$ticket-id.tsx"
    },
    "/getallcomments/$ticket-id": {
      "filePath": "getallcomments/$ticket-id.tsx"
    },
    "/posts/$id": {
      "filePath": "posts/$id.tsx"
    },
    "/updateticket/$ticket-id": {
      "filePath": "updateticket/$ticket-id.tsx"
    },
    "/update/${ticket/id}": {
      "filePath": "update/${ticket.id}.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
