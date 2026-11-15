import { Link } from '@tanstack/react-router'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export function NotFound() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div className="not-found-content">
        <div className="not-found-art" aria-hidden="true">
          <span>4</span><span>0</span><span>4</span>
        </div>
        <div className="not-found-copy">
          <p className="eyebrow"><span className="status-dot" /> Page not found</p>
          <h1 id="not-found-title">This page took a wrong turn.</h1>
          <p>
            The page may have moved or the address may be misspelled. Let’s get you back to something useful.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="button-primary">
              <FaArrowLeft aria-hidden="true" /> Back to home
            </Link>
            <Link to="/projects" className="button-link">
              Explore projects <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
