import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { FaArrowRight, FaDatabase, FaJava } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import Landing from '../Components/Landing'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useStackedScroll } from '../hooks/useStackedScroll'
import webProject1 from '../images/web-project-1.jpg'
import mobileProject1 from '../images/mobile-project-1.jpg'
import uiProject1 from '../images/ui-project-1.jpg'

const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#e8b931' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'HTML5', icon: SiHtml5, color: '#e66a3c' },
  { name: 'CSS3', icon: SiCss3, color: '#3978c5' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#42b883' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#e8eee4' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00c58e' },
  { name: 'Java', icon: FaJava, color: '#e76f00' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
  { name: 'NestJS', icon: SiNestjs, color: '#e0234e' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
  { name: 'SQL', icon: FaDatabase, color: '#4169e1' },
]

const featuredWork = [
  { number: '01', name: 'E-commerce platform', type: 'Web application', image: webProject1 },
  { number: '02', name: 'Fitness companion', type: 'Mobile experience', image: mobileProject1 },
  { number: '03', name: 'Design system', type: 'Product design', image: uiProject1 },
]

export function Home() {
  const pageRef = useRef<HTMLDivElement | null>(null)
  const sequenceRef = useRef<HTMLDivElement | null>(null)
  const progressRef = useRef<HTMLElement | null>(null)
  useScrollReveal(pageRef)
  useStackedScroll(sequenceRef, progressRef)

  return (
    <div ref={pageRef} className="home-page">
      <div ref={sequenceRef} className="scroll-sequence">
        <div className="stack-panel stack-panel--hero" data-stack-panel>
          <Landing />
        </div>

        <div className="stack-panel stack-panel--intro" data-stack-panel>
          <section id="intro" className="intro-section" aria-labelledby="intro-title">
            <div className="intro-kicker" data-reveal><span>01 — The approach</span></div>
            <div className="intro-content">
              <h2 id="intro-title" data-split>
                Good work lives where <span>clear thinking</span> meets careful craft.
              </h2>
              <p data-reveal>
                From the first sketch to the final interaction, I bring design and engineering
                together to make digital products feel effortless.
              </p>
              <Link to="/about" className="button-link" data-reveal>A little more about me <FaArrowRight aria-hidden="true" /></Link>
            </div>
          </section>
        </div>

        <div className="stack-panel stack-panel--skills" data-stack-panel>
          <section className="skills-section" aria-labelledby="skills-title">
            <div className="skills-heading">
              <p className="eyebrow" data-reveal>02 — Tools & technologies</p>
              <h2 id="skills-title" data-split>The right tools<br /><span>for the right idea.</span></h2>
              <p data-reveal>A versatile toolkit for building thoughtful experiences, from the interface to the database.</p>
            </div>
            <div className="skills-grid">
              {skills.map(({ name, icon: Icon, color }) => (
                <div className="technology-card" key={name} data-reveal>
                  <Icon className="technology-icon" style={{ color }} aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="stack-panel stack-panel--journey" data-stack-panel>
          <section className="journey-section" aria-label="Experience and education">
          <div className="journey-column">
            <div className="journey-heading">
              <p className="eyebrow" data-reveal>03 — Experience <span className="sample-label">Sample content</span></p>
              <h2 data-split>Where I’ve<br /><span>put ideas to work.</span></h2>
            </div>
            <div className="journey-list">
              <article className="journey-card" data-reveal>
                <span className="journey-period">2023 — Present</span>
                <div>
                  <h3>Full-stack Developer</h3>
                  <p className="journey-organization">Product team · Sample entry</p>
                  <p>Sample experience content. Replace with your role, organization, and key contributions.</p>
                </div>
                <span className="journey-index">01</span>
              </article>
              <article className="journey-card" data-reveal>
                <span className="journey-period">2021 — 2023</span>
                <div>
                  <h3>Frontend Developer</h3>
                  <p className="journey-organization">Digital studio · Sample entry</p>
                  <p>Sample experience content. Replace with your role, organization, and key contributions.</p>
                </div>
                <span className="journey-index">02</span>
              </article>
            </div>
          </div>

          <div className="journey-column education-column">
            <div className="journey-heading">
              <p className="eyebrow" data-reveal>04 — Education <span className="sample-label">Sample content</span></p>
              <h2 data-split>Always learning,<br /><span>always growing.</span></h2>
            </div>
            <div className="journey-list">
              <article className="journey-card education-card" data-reveal>
                <span className="education-symbol" aria-hidden="true">01</span>
                <div>
                  <h3>Computer Science</h3>
                  <p className="journey-organization">Sample university · Sample qualification</p>
                  <p>Sample education content. Replace with your school, qualification, and dates.</p>
                </div>
                <span className="journey-period">2020 — 2024</span>
              </article>
              <article className="journey-card education-card" data-reveal>
                <span className="education-symbol" aria-hidden="true">02</span>
                <div>
                  <h3>Web Development</h3>
                  <p className="journey-organization">Professional learning · Sample entry</p>
                  <p>Sample education content. Replace with a course, certification, or learning milestone.</p>
                </div>
                <span className="journey-period">2024</span>
              </article>
            </div>
          </div>
          </section>
        </div>

        <div className="stack-panel stack-panel--featured" data-stack-panel>
          <section className="featured-section" aria-labelledby="featured-title">
            <div className="section-topline" data-reveal>
              <p className="eyebrow">05 — Selected projects</p>
              <Link to="/projects" className="text-arrow">All projects <FaArrowRight aria-hidden="true" /></Link>
            </div>
            <h2 id="featured-title" className="featured-title" data-split>Made to make<br />a difference.</h2>
            <div className="featured-grid">
              {featuredWork.map((project) => (
                <Link to="/projects" className="featured-card" key={project.number} data-reveal>
                  <div className="featured-image-wrap">
                    <img src={project.image} alt="" className="featured-image" />
                    <span className="featured-number">{project.number}</span>
                    <span className="featured-arrow" aria-hidden="true"><FaArrowRight /></span>
                  </div>
                  <div className="featured-caption">
                    <h3>{project.name}</h3>
                    <span>{project.type}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="stack-panel stack-panel--end" data-stack-panel>
          <section className="home-cta">
            <p className="eyebrow" data-reveal>06 — Sequence complete</p>
            <h2 data-split>Let’s make it<br /><span>real.</span></h2>
            <Link to="/contact" className="button-primary" data-reveal>Start a conversation <FaArrowRight aria-hidden="true" /></Link>
            <p className="sequence-end-mark">End of sequence</p>
          </section>
        </div>

        <div className="sequence-end-spacer" aria-hidden="true" />
      </div>

      <aside ref={progressRef} className="sequence-progress" aria-hidden="true">
        <span data-sequence-current>01</span>
        <div className="sequence-progress-track">
          <div className="sequence-progress-fill" data-sequence-fill />
        </div>
        <span data-sequence-total>06</span>
      </aside>
    </div>
  )
}
