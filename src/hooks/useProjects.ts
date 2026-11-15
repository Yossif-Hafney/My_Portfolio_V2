import { useEffect, useState } from 'react'
import type { ProjectGalleryImage } from '../Components/ProjectImageSlider'

export interface Project {
  id: number
  slug: string
  title: string
  description: string
  shortDescription: string
  fullDescription: string
  image: string
  gallery: ProjectGalleryImage[]
  technologies: string[]
  features: string[]
  status: string
  branches: string[]
  liveDemo: string | null
  liveCta?: string
  sourceCode: string
  category: string
  client: string
  startDate: string
  endDate: string
}

type ProjectState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'loaded'; projects: Project[] }

interface ProjectSummary {
  id: number
  slug: string
  title: string
  description: string
  image: string
}

interface ProjectDetails {
  slug: string
  title: string
  description: string
  shortDescription: string
  fullDescription: string
  image: string
  gallery: string[]
  technologies: string[]
  features: string[]
  status: string
  branches: string[]
  liveDemo: string | null
  liveCta?: string
  sourceCode: string
  category: string
  client: string
  startDate: string
  endDate: string
}

let projectsRequest: Promise<Project[]> | null = null

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isNonEmptyString)
}

function isHttpsUrl(value: string) {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

function isImagePath(value: unknown): value is string {
  return (
    isNonEmptyString(value) &&
    ((value.startsWith('/') && !value.startsWith('//')) || isHttpsUrl(value))
  )
}

function isProjectSummary(value: unknown): value is ProjectSummary {
  return (
    isRecord(value) &&
    typeof value.id === 'number' &&
    Number.isInteger(value.id) &&
    isNonEmptyString(value.slug) &&
    isNonEmptyString(value.title) &&
    isNonEmptyString(value.description) &&
    isImagePath(value.image)
  )
}

function isProjectDetails(value: unknown): value is ProjectDetails {
  return (
    isRecord(value) &&
    isNonEmptyString(value.slug) &&
    isNonEmptyString(value.title) &&
    isNonEmptyString(value.description) &&
    isNonEmptyString(value.shortDescription) &&
    isNonEmptyString(value.fullDescription) &&
    isImagePath(value.image) &&
    Array.isArray(value.gallery) &&
    value.gallery.length > 0 &&
    value.gallery.every(isImagePath) &&
    isStringArray(value.technologies) &&
    isStringArray(value.features) &&
    isNonEmptyString(value.status) &&
    isStringArray(value.branches) &&
    (value.liveDemo === null || (isNonEmptyString(value.liveDemo) && isHttpsUrl(value.liveDemo))) &&
    (value.liveCta === undefined || isNonEmptyString(value.liveCta)) &&
    isNonEmptyString(value.sourceCode) &&
    (value.sourceCode === 'Private Repository' || isHttpsUrl(value.sourceCode)) &&
    isNonEmptyString(value.category) &&
    isNonEmptyString(value.client) &&
    isNonEmptyString(value.startDate) &&
    isNonEmptyString(value.endDate)
  )
}

function parseUniqueRecords<T extends { slug: string }>(
  value: unknown,
  isItem: (item: unknown) => item is T,
  dataName: string,
): T[] {
  if (!Array.isArray(value) || !value.every(isItem)) {
    throw new Error(`${dataName} must contain valid project records.`)
  }

  const slugs = value.map((project) => project.slug)
  if (new Set(slugs).size !== slugs.length) {
    throw new Error(`${dataName} project slugs must be unique.`)
  }

  return value
}

function parseProjects(summariesValue: unknown, detailsValue: unknown): Project[] {
  const summaries = parseUniqueRecords(summariesValue, isProjectSummary, 'Project list')
  const details = parseUniqueRecords(detailsValue, isProjectDetails, 'Project details')
  const detailsBySlug = new Map(details.map((project) => [project.slug, project]))

  return summaries.map((summary) => {
    const detail = detailsBySlug.get(summary.slug)
    if (!detail || detail.title !== summary.title) {
      throw new Error(`Missing or mismatched project details for "${summary.slug}".`)
    }

    return {
      id: summary.id,
      slug: summary.slug,
      title: summary.title,
      description: summary.description,
      shortDescription: detail.shortDescription,
      fullDescription: detail.fullDescription,
      image: summary.image,
      gallery: detail.gallery.map((src) => {
        const fileName = decodeURIComponent(src.split('/').pop() ?? src)
        const baseName = fileName
          .replace(/\.[^.]+$/, '')
          .replace(/-\d{2}-\d{2}-\d{4}_.+$/, '')
          .replace(/[-_]+/g, ' ')
        const label = baseName
          .split(' ')
          .map((word) => {
            if (word.toLowerCase() === 'wfdp') return 'WFDP'
            if (word.toLowerCase() === 'prisdent') return 'President'
            if (word.toLowerCase() === 'inv') return 'Invoice'
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          })
          .join(' ')

        return {
          src,
          alt: `${summary.title} — ${label} screen.`,
          label,
        }
      }),
      technologies: detail.technologies,
      features: detail.features,
      status: detail.status,
      branches: detail.branches,
      liveDemo: detail.liveDemo,
      liveCta: detail.liveCta,
      sourceCode: detail.sourceCode,
      category: detail.category,
      client: detail.client,
      startDate: detail.startDate,
      endDate: detail.endDate,
    }
  })
}

async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Request for ${url} failed with status ${response.status}.`)
  }
  return response.json() as Promise<unknown>
}

function loadProjects() {
  if (!projectsRequest) {
    projectsRequest = Promise.all([
      fetchJson('/api/projects.json'),
      fetchJson('/api/project-details.json'),
    ])
      .then(([summaries, details]) => parseProjects(summaries, details))
      .catch((error: unknown) => {
        console.error('Unable to load project data.', error)
        projectsRequest = null
        throw error
      })
  }

  return projectsRequest
}

export function useProjects(): ProjectState {
  const [state, setState] = useState<ProjectState>({ status: 'loading' })

  useEffect(() => {
    let cancelled = false

    loadProjects()
      .then((projects) => {
        if (!cancelled) setState({ status: 'loaded', projects })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error' })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}

export function formatProjectPeriod(startDate: string, endDate: string) {
  const formatDate = (value: string) => {
    if (value === 'Present') return value

    const date = new Date(`${value}T00:00:00Z`)
    if (Number.isNaN(date.getTime())) return value

    return new Intl.DateTimeFormat('en', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(date)
  }

  return `${formatDate(startDate)} – ${formatDate(endDate)}`
}
