import { Outlet, useLocation } from '@tanstack/react-router'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useScrollToTopOnRouteChange } from '../hooks/useScrollToTopOnRouteChange'

export function Root() {
  const pathname = useLocation({ select: (location) => location.pathname })
  useScrollToTopOnRouteChange()

  return (
    <div id="top" className="app-shell">
      <Header />
      <main>
        <div className="route-transition" key={pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
