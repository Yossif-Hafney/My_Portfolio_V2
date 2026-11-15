import { useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { FaArrowRight } from 'react-icons/fa'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si'
import Landing from '../Components/Landing'
import { education, projects, profile, skills } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useStackedScroll } from '../hooks/useStackedScroll'

const skillCards = [
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#e8b931' },
  { name: 'React', icon: SiReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#e8eee4' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#42b883' },
  { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00c58e' },
  { name: 'HTML5', icon: SiHtml5, color: '#e66a3c' },
  { name: 'CSS3', icon: SiCss3, color: '#3978c5' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
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
            <div className="intro-kicker" data-reveal><span>01 — About</span></div>
            <div className="intro-content">
              <h2 id="intro-title" data-split>
                Frontend engineering grounded in <span>careful thinking</span> and collaboration.
              </h2>
              <p data-reveal>{profile.summary}</p>
              <Link to="/about" className="button-link" data-reveal>
                More about me <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>

        <div className="stack-panel stack-panel--skills" data-stack-panel>
          <section className="skills-section" aria-labelledby="skills-title">
            <div className="skills-heading">
              <p className="eyebrow" data-reveal>02 — Technical skills</p>
              <h2 id="skills-title" data-split>The tools I use<br /><span>to build for the web.</span></h2>
              <p data-reveal>Frontend technologies, development tools, and core engineering concepts from my experience.</p>
            </div>
            <div className="skills-grid">
              {skillCards.map(({ name, icon: Icon, color }) => (
                <div className="technology-card" key={name} data-reveal>
                  <Icon className="technology-icon" style={{ color }} aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
            <div className="skills-detail" data-reveal>
              <p><strong>Tools:</strong> {skills.tools.join(', ')}</p>
              <p><strong>Concepts:</strong> {skills.concepts.join(', ')}</p>
              <p><strong>Additional:</strong> {skills.soft.join(', ')}</p>
            </div>
          </section>
        </div>

        <div className="stack-panel stack-panel--journey" data-stack-panel>
          <section className="journey-section" aria-label="Projects and education">
            <div className="journey-column">
              <div className="journey-heading">
                <p className="eyebrow" data-reveal>03 — Professional projects</p>
                <h2 data-split>Frontend work<br /><span>in production systems.</span></h2>
              </div>
              <div className="journey-list">
                {projects.map((project, index) => (
                  <article className="journey-card" key={project.title} data-reveal>
                    <span className="journey-period">{project.period}</span>
                    <div>
                      <h3>{project.title}</h3>
                      <p className="journey-organization">{project.role}</p>
                      <p>{project.description}</p>
                    </div>
                    <span className="journey-index">{String(index + 1).padStart(2, '0')}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="journey-column education-column">
              <div className="journey-heading">
                <p className="eyebrow" data-reveal>04 — Education</p>
                <h2 data-split>Engineering<br /><span>and lifelong learning.</span></h2>
              </div>
              <div className="journey-list">
                <article className="journey-card education-card" data-reveal>
                  <span className="education-symbol" aria-hidden="true">01</span>
                  <div>
                    <h3>{education.degree}</h3>
                    <p className="journey-organization">{education.institution}</p>
                    <p>Relevant coursework: {education.coursework.join(', ')}.</p>
                  </div>
                  <span className="journey-period">{education.period}</span>
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
            <h2 id="featured-title" className="featured-title" data-split>Web experiences<br />built with care.</h2>
            <div className="featured-grid">
              {projects.map((project, index) => (
                <Link
                  to="/project/$slug"
                  params={{ slug: project.slug }}
                  className="featured-card"
                  key={project.title}
                  data-reveal
                >
                  <div className="featured-project-panel">
                    <img
                      className="featured-project-image"
                      src={project.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="featured-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="featured-arrow" aria-hidden="true"><FaArrowRight /></span>
                    <p>{project.role} · {project.period}</p>
                    <h3>{project.title}</h3>
                    <span>{project.technologies.join(' · ')}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="stack-panel stack-panel--end" data-stack-panel>
          <section className="home-cta">
            <p className="eyebrow" data-reveal>06 — Get in touch</p>
            <h2 data-split>Let’s make it<br /><span>real.</span></h2>
            <Link to="/contact" className="button-primary" data-reveal>
              Start a conversation <FaArrowRight aria-hidden="true" />
            </Link>
            <p className="sequence-end-mark">Yossif Hafney · Frontend Engineer</p>
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
