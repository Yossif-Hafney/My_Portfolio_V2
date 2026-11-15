import { useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from '@tanstack/react-router';
import { useScrollReveal } from '../hooks/useScrollReveal'
import webProject1 from "../images/web-project-1.jpg";
import webProject2 from "../images/web-project-2.jpg";
import mobileProject1 from "../images/mobile-project-1.jpg";
import mobileProject2 from "../images/mobile-project-2.jpg";
import uiProject1 from "../images/ui-project-1.jpg";
import uiProject2 from "../images/ui-project-2.jpg";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLElement | null>(null)
  useScrollReveal(sectionRef, activeFilter)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: webProject1,
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "web",
      image: webProject2,
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "mobile",
      image: mobileProject1,
      description: "A mobile fitness tracking application with workout planning, progress tracking, and social features for motivation.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com/yourusername/fitness-app",
      live: "https://fitness-app-demo.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "mobile",
      image: mobileProject2,
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React Native", "OpenWeather API", "Maps API", "AsyncStorage"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-app-demo.com",
    },
    {
      id: 5,
      title: "Design System",
      category: "ui",
      image: uiProject1,
      description: "A comprehensive design system with reusable components, documentation, and accessibility guidelines for consistent UI development.",
      technologies: ["Storybook", "Figma", "React", "TypeScript"],
      github: "https://github.com/yourusername/design-system",
      live: "https://design-system-demo.com",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "ui",
      image: uiProject2,
      description: "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio-demo.com",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ui", label: "UI/UX" },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section ref={sectionRef} className="portfolio-section projects-section">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading" data-reveal>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4" data-split>
            My Projects
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique 
            challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters" data-reveal>
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`filter-button px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-reveal
              className="project-card bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
} 