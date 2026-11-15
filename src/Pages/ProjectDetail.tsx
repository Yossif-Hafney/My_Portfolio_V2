import { useEffect, useRef } from 'react'
import { Link, useParams } from '@tanstack/react-router'
import { FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProjectImageSlider } from '../Components/ProjectImageSlider'
import { ProjectDataNotice } from '../Components/ProjectDataNotice'
import { formatProjectPeriod, useProjects, type Project } from '../hooks/useProjects'
import { NotFound } from './NotFound'

gsap.registerPlugin(ScrollTrigger)

function ProjectDetailContent({
  project,
  projectIndex,
  projects,
}: {
  project: Project
  projectIndex: number
  projects: Project[]
}) {
  const pageRef = useRef<HTMLElement | null>(null)
  const nextProject = projects[(projectIndex + 1) % projects.length] ?? project

  useEffect(() => {
    const root = pageRef.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-detail-kicker]', { autoAlpha: 0, y: 16, duration: 0.55 })
        .from('[data-detail-title]', { autoAlpha: 0, y: 42, duration: 0.8 }, '-=0.28')
        .from('[data-detail-intro]', { autoAlpha: 0, y: 24, duration: 0.65 }, '-=0.42')
        .from('[data-detail-fact]', { autoAlpha: 0, y: 18, stagger: 0.1, duration: 0.55 }, '-=0.35')
        .from('[data-detail-image]', { autoAlpha: 0, y: 28, duration: 0.8 }, '-=0.65')

      root.querySelectorAll<HTMLElement>('[data-detail-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 86%',
              once: true,
            },
          },
        )
      })
    }, root)

    return () => context.revert()
  }, [project.slug])

  return (
    <section ref={pageRef} className="project-detail-page" aria-labelledby="project-detail-title">
      <div className="project-detail-shell">
        <div className="project-detail-utility">
          <Link to="/projects" className="project-detail-back">
            <FaArrowLeft aria-hidden="true" />
            <span>All projects</span>
          </Link>
          <p>
            <span>Selected work</span>
            <strong>{String(projectIndex + 1).padStart(2, '0')}</strong>
            <span>/ {String(projects.length).padStart(2, '0')}</span>
          </p>
        </div>

        <div className="project-detail-hero">
          <div className="project-detail-copy">
            <p className="project-detail-eyebrow" data-detail-kicker>
              <span className="status-dot" />
              Project case study
            </p>
            <h1 id="project-detail-title" data-detail-title>{project.title}</h1>
            <p className="project-detail-intro" data-detail-intro>{project.fullDescription}</p>

            <div className="project-detail-facts">
              <div data-detail-fact>
                <span>Category</span>
                <strong>{project.category}</strong>
              </div>
              <div data-detail-fact>
                <span>Client</span>
                <strong>{project.client}</strong>
              </div>
              <div data-detail-fact>
                <span>Timeline</span>
                <strong>{formatProjectPeriod(project.startDate, project.endDate)}</strong>
              </div>
              <div data-detail-fact>
                <span>Status</span>
                <strong>{project.status}</strong>
              </div>
            </div>

            <div className="project-detail-actions">
              <a href="#project-contributions" className="project-detail-explore">
                Explore the work <FaArrowDown aria-hidden="true" />
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  className="project-detail-live-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.liveCta ?? 'Visit live website'} <FaArrowRight aria-hidden="true" />
                </a>
              )}
              {project.sourceCode === 'Private Repository' ? (
                <span className="project-detail-private-source">Private repository</span>
              ) : (
                <a
                  href={project.sourceCode}
                  className="project-detail-source-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source code <FaArrowRight aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <figure className="project-detail-visual" data-detail-image>
            <ProjectImageSlider
              key={project.slug}
              images={project.gallery}
              projectTitle={project.title}
            />
          </figure>
        </div>

        <section
          id="project-contributions"
          className="project-detail-contributions"
          aria-labelledby="project-contributions-title"
          data-detail-reveal
        >
          <div className="project-detail-section-heading">
            <p className="project-detail-eyebrow"><span>01</span> Project features</p>
            <h2 id="project-contributions-title">What the product includes</h2>
            <p>Core areas and capabilities described for this project.</p>
          </div>
          <ol className="project-contribution-list">
            {project.features.map((feature, index) => (
              <li key={feature}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{feature}</p>
                <FaArrowRight aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="project-detail-branches" aria-label="Project areas">
            {project.branches.map((branch) => <span key={branch}>{branch}</span>)}
          </div>
        </section>

        <section className="project-detail-stack" aria-labelledby="project-stack-title" data-detail-reveal>
          <div className="project-detail-stack-copy">
            <p className="project-detail-eyebrow"><span>02</span> Technologies</p>
            <h2 id="project-stack-title">The tools behind the work</h2>
            <p>Technologies used throughout this project.</p>
          </div>
          <ul className="project-detail-technology-list">
            {project.technologies.map((technology, index) => (
              <li key={technology}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {technology}
              </li>
            ))}
          </ul>
        </section>

        <section className="project-detail-next" aria-label="Next project" data-detail-reveal>
          <div>
            <p className="project-detail-eyebrow">Continue exploring</p>
            <h2>{nextProject.title}</h2>
            <p>{nextProject.shortDescription}</p>
          </div>
          <Link to="/project/$slug" params={{ slug: nextProject.slug }}>
            <span>View project</span>
            <FaArrowRight aria-hidden="true" />
          </Link>
        </section>

        <div className="project-detail-footer">
          <p>Interested in working together?</p>
          <Link to="/contact">Let’s talk <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  )
}

export function ProjectDetail() {
  const { slug } = useParams({ from: '/project/$slug' })
  const projectState = useProjects()

  if (projectState.status !== 'loaded') {
    return (
      <section className="project-detail-page">
        <div className="project-detail-shell">
          <ProjectDataNotice status={projectState.status} />
        </div>
      </section>
    )
  }

  const projects = projectState.projects
  const projectIndex = projects.findIndex((project) => project.slug === slug)
  const project = projects[projectIndex]

  if (!project) return <NotFound />

  return (
    <ProjectDetailContent
      project={project}
      projectIndex={projectIndex}
      projects={projects}
    />
  )
}
