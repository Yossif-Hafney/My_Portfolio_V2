import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from '@tanstack/react-router'
import { ProjectDataNotice } from './ProjectDataNotice'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { formatProjectPeriod, useProjects } from '../hooks/useProjects'

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const projectState = useProjects()
  const projects = projectState.status === 'loaded' ? projectState.projects : []
  useScrollReveal(sectionRef, projectState.status)

  return (
    <section ref={sectionRef} className="portfolio-section projects-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading" data-reveal>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4" data-split>
            Professional Projects
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Frontend work on the WFDP website and its client dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectState.status !== 'loaded' && (
            <ProjectDataNotice status={projectState.status} />
          )}
          {projects.map((project) => (
            <article
              key={project.title}
              data-reveal
              className="project-card bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg"
            >
              <Link
                to="/project/$slug"
                params={{ slug: project.slug }}
                className="project-card-link"
              >
                <div className="project-card-image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="project-card-content p-6">
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.category} · {formatProjectPeriod(project.startDate, project.endDate)}
                  </p>
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mt-3 mb-3">
                    {project.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.shortDescription}</p>
                  <ul className="project-highlights">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-5" aria-label="Technologies">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <span className="project-card-open">
                    View case study <FaArrowRight aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Want to discuss a project?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get in touch <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
