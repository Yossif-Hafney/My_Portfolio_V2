import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useAuthStore } from '../store/authStore'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand-link" aria-label="Portfolio home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">P<span>.</span></span>
          <span className="brand-caption">Portfolio<br />& development</span>
        </Link>

        <div className="desktop-nav">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === '/' }}
              activeProps={{ className: 'nav-link is-active' }}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          {isAuthenticated && (
            <Link to="/admin" activeProps={{ className: 'nav-link is-active' }} className="nav-link">
              Dashboard
            </Link>
          )}
        </div>

        <div className="nav-actions">
          <Link to="/hire" className="nav-cta">Discuss a project <span aria-hidden="true">↗</span></Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === '/' }}
            activeProps={{ className: 'mobile-nav-link is-active' }}
            className="mobile-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}<span aria-hidden="true">↗</span>
          </Link>
        ))}
        {isAuthenticated && (
          <Link to="/admin" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            Dashboard<span aria-hidden="true">↗</span>
          </Link>
        )}
        <Link to="/hire" className="mobile-nav-link mobile-nav-cta" onClick={() => setMenuOpen(false)}>
          Discuss a project<span aria-hidden="true">↗</span>
        </Link>
      </div>
      {menuOpen && <button className="mobile-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
