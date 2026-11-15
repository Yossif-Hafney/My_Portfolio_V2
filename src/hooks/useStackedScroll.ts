import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useStackedScroll(
  sequence: RefObject<HTMLElement | null>,
  progress: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const root = sequence.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const panels = gsap.utils.toArray<HTMLElement>(root.querySelectorAll('[data-stack-panel]'))
    if (!panels.length) return

    const current = progress.current?.querySelector<HTMLElement>('[data-sequence-current]')
    const fill = progress.current?.querySelector<HTMLElement>('[data-sequence-fill]')
    const total = progress.current?.querySelector<HTMLElement>('[data-sequence-total]')
    if (total) total.textContent = String(panels.length).padStart(2, '0')
    if (current) current.textContent = '01'

    const context = gsap.context(() => {
      panels.forEach((panel, index) => {
        const next = panels[index + 1]
        if (!next) return

        gsap.fromTo(
          panel,
          { scale: 1, filter: 'brightness(1)' },
          {
            scale: 0.9,
            filter: 'brightness(0.42)',
            ease: 'none',
            scrollTrigger: {
              trigger: next,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          },
        )
      })

      ScrollTrigger.create({
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          if (fill) gsap.set(fill, { scaleY: self.progress })
        },
      })

      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive && current) {
              current.textContent = String(index + 1).padStart(2, '0')
            }
          },
        })
      })
    }, root)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const timeoutId = window.setTimeout(refresh, 250)

    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(timeoutId)
      context.revert()
    }
  }, [sequence, progress])
}
