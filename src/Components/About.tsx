import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiDocker } from "react-icons/si";
import { Link } from '@tanstack/react-router';
import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  useScrollReveal(sectionRef)
  const skills = [
    { name: "React", icon: FaReact, color: "text-blue-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", icon: FaDatabase, color: "text-blue-700" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Led development of multiple React applications, mentored junior developers, and implemented best practices.",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built end-to-end web applications using React, Node.js, and PostgreSQL. Collaborated with design and product teams.",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Developed responsive websites and e-commerce solutions using modern web technologies.",
    },
  ];

  return (
    <section ref={sectionRef} className="portfolio-section about-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading" data-reveal>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4" data-split>
            About Me
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 4+ years of experience creating 
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Content */}
          <div className="about-column" data-reveal>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              My Journey
            </h3>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <p>
                I started my journey in web development with a curiosity about how things work on the internet. 
                What began as a hobby quickly turned into a passion, and now I'm fortunate enough to do what I love for a living.
              </p>
              <p>
                I specialize in building modern web applications using React, TypeScript, and Node.js. 
                I believe in writing clean, maintainable code and creating user experiences that are both 
                beautiful and functional.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
                Skills & Technologies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    data-reveal
                    className="skill-card flex flex-col items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-200"
                  >
                    <Icon className={`w-8 h-8 ${color} mb-2`} />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="about-column" data-reveal>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item relative" data-reveal>
                  <div className="absolute left-4 top-0 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="ml-12">
                    <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-5 top-3 w-0.5 h-8 bg-neutral-300 dark:bg-neutral-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="section-cta" data-reveal>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Want to see my work? Check out my projects!
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 