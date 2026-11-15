import { FaArrowUp, FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaRegEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link to="/" className="footer-brand">
          <span className="brand-mark">P<span>.</span></span>
          <span>Thoughtful work.<br />Made with care.</span>
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
        <span>© {new Date().getFullYear()} — Portfolio</span>
        <div className="footer-links">
          <Link to="/projects">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/hire">Hire me</Link>
        </div>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
