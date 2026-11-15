import { Link } from '@tanstack/react-router'
import { useRef } from 'react'
import { education, profile, skills } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillGroups = [
  { title: 'Frontend', items: skills.frontend },
  { title: 'Tools', items: skills.tools },
  { title: 'Concepts', items: skills.concepts },
  { title: 'Soft skills', items: skills.soft },
]

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  useScrollReveal(sectionRef)

  return (
    <section ref={sectionRef} className="portfolio-section about-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading" data-reveal>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4" data-split>
            About {profile.name}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {profile.summary}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="about-column" data-reveal>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Technical skills
            </h2>
            <div className="space-y-6">
              {skillGroups.map(({ title, items }) => (
                <section key={title}>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="about-skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="about-column" data-reveal>
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Education
            </h2>
            <article className="experience-item relative mt-6">
              <div className="ml-12">
                <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="education-institution">
                    {education.institution}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    {education.period}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Relevant coursework: {education.coursework.join(', ')}.
                  </p>
                </div>
              </div>
            </article>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Languages</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Arabic and English</p>
            </div>
          </div>
        </div>

        <div className="section-cta" data-reveal>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Explore my frontend work and project experience.
          </p>
          <Link to="/projects">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
