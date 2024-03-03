import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>

      <hr />
      <ScrollRestoration />
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  ),
})
