import { Outlet } from '@tanstack/react-router'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export function Root() {
  return (
    <div id="top" className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
