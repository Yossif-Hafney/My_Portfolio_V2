import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from '@tanstack/react-router'
import { FaArrowDown, FaArrowRight, FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import profileImage from '../images/profile.jpeg'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: FaRegEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
]

export default function Landing() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-copy]',
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.15 },
      )
      gsap.fromTo(
        '[data-hero-image]',
        { autoAlpha: 0, scale: 0.94, rotate: 2 },
        { autoAlpha: 1, scale: 1, rotate: 0, duration: 1.1, ease: 'power3.out', delay: 0.35 },
      )
      gsap.to('[data-orbit]', {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      })
    }, hero)

    return () => context.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-hero-copy>
            <span className="status-dot" /> Available for select projects
          </p>
          <h1 id="hero-title" data-split="hero">
            Thoughtful digital
            <br />
            <span>experiences.</span>
          </h1>
          <p className="hero-description" data-hero-copy>
            I’m a full-stack developer turning complex ideas into clear, useful, and
            beautifully crafted products for the web.
          </p>
          <div className="hero-actions" data-hero-copy>
            <Link to="/projects" className="button-primary">
              Explore my work <FaArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="button-link">
              Let’s talk <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-socials" data-hero-copy aria-label="Social links">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
            <span className="social-divider" />
            <span className="hero-location">Full-stack development</span>
          </div>
        </div>

        <div className="hero-visual" data-hero-image>
          <div className="hero-photo-frame">
            <div className="hero-orbit" data-orbit aria-hidden="true">
              <span />
            </div>
            <img src={profileImage} alt="Portrait of the portfolio owner" className="hero-photo" />
            <div className="photo-caption">
              <span className="caption-mark">✳</span>
              <span>Design-minded<br />development</span>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">01 / 04</div>
        </div>
      </div>

      <a className="scroll-cue" href="#intro">
        <span>Scroll to explore</span>
        <FaArrowDown aria-hidden="true" />
      </a>
    </section>
  )
}
