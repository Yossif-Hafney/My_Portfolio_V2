import { useEffect, useState } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

const socialIcons = {
  facebook: FaFacebookF,
  github: FaGithub,
  x: FaXTwitter,
  telegram: FaTelegramPlane,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
} satisfies Record<string, IconType>

type SocialIconName = keyof typeof socialIcons

interface SocialLink {
  id: number
  name: string
  icon: SocialIconName
  url: string
}

type SocialLinksState =
  | { status: 'loading'; links: null }
  | { status: 'loaded'; links: SocialLink[] }
  | { status: 'error'; links: null }

let socialLinksRequest: Promise<SocialLink[]> | null = null

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isHttpsUrl(value: string) {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

function isSocialLink(value: unknown): value is SocialLink {
  return (
    isRecord(value) &&
    typeof value.id === 'number' &&
    Number.isInteger(value.id) &&
    typeof value.name === 'string' &&
    value.name.trim().length > 0 &&
    typeof value.icon === 'string' &&
    Object.hasOwn(socialIcons, value.icon) &&
    typeof value.url === 'string' &&
    isHttpsUrl(value.url)
  )
}

function parseSocialLinks(value: unknown): SocialLink[] {
  if (!Array.isArray(value) || !value.every(isSocialLink)) {
    throw new Error('Social links must be an array of valid HTTPS social profiles.')
  }

  const ids = value.map((link) => link.id)
  if (new Set(ids).size !== ids.length) {
    throw new Error('Social link IDs must be unique.')
  }

  return value
}

function loadSocialLinks() {
  if (!socialLinksRequest) {
    socialLinksRequest = fetch('/api/social-links.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Social links request failed with status ${response.status}.`)
        }
        return response.json() as Promise<unknown>
      })
      .then(parseSocialLinks)
      .catch((error: unknown) => {
        console.error('Unable to load /api/social-links.json.', error)
        socialLinksRequest = null
        throw error
      })
  }

  return socialLinksRequest
}

export function SocialLinkList({
  className,
  linkClassName,
}: {
  className: string
  linkClassName?: string
}) {
  const [state, setState] = useState<SocialLinksState>({ status: 'loading', links: null })

  useEffect(() => {
    let cancelled = false

    loadSocialLinks()
      .then((links) => {
        if (!cancelled) setState({ status: 'loaded', links })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', links: null })
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (state.status === 'loading') return null
  if (state.status === 'error') {
    return <p className="social-links-error" role="alert">Social links are currently unavailable.</p>
  }

  return (
    <div className={className} role="group" aria-label="Social links">
      {state.links.map(({ id, name, icon, url }) => {
        const Icon = socialIcons[icon]
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            className={linkClassName}
          >
            <Icon aria-hidden="true" />
          </a>
        )
      })}
    </div>
  )
}
