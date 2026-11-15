import { FaArrowUp } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'
import { SocialLinkList } from './SocialLinks'
import { profile } from '../data/portfolio'
import { scrollToTop } from '../utils/scrollToTop'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link to="/" className="footer-brand">
          <img
            className="brand-mark"
            src="/images/yossif-hafney-mark.svg"
            alt=""
            aria-hidden="true"
          />
          <span>{profile.name}<br />{profile.title}</span>
        </Link>
        <div className="footer-note">
          <p>Have a good idea?</p>
          <Link to="/contact">I’d love to hear about it <FaArrowUp aria-hidden="true" /></Link>
        </div>
        <SocialLinkList className="footer-socials" />
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} — {profile.name}</span>
        <div className="footer-links">
          <Link to="/projects">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/hire">Hire me</Link>
        </div>
        <a href="#top" onClick={(event) => { event.preventDefault(); scrollToTop() }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
