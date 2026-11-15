import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { Root } from './Pages/Root'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Projects } from './Pages/Projects'
import { Contact } from './Pages/Contact'
import { Hire } from './Pages/Hire'
import { NotFound } from './Pages/NotFound'
import { ProjectDetail } from './Pages/ProjectDetail'

// Create the root route
const rootRoute = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
})

// Create individual routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
})

const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/project/$slug',
  component: ProjectDetail,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const hireRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hire',
  component: Hire,
})

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  projectDetailRoute,
  contactRoute,
  hireRoute,
])

// Create the router
export const router = createRouter({ routeTree })

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
