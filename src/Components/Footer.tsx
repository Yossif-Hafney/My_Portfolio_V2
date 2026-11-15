import { FaArrowUp, FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'
import { profile } from '../data/portfolio'
import { scrollToTop } from '../utils/scrollToTop'

const socialLinks = [
  { icon: FaGithub, href: profile.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: FaRegEnvelope, href: `mailto:${profile.email}`, label: 'Email' },
]

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
        <div className="footer-socials" aria-label="Social links">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon aria-hidden="true" />
            </a>
          ))}
        </div>
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
