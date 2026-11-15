import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export function useScrollReveal(container: RefObject<HTMLElement | null>, refreshKey?: string) {
  useEffect(() => {
    const root = container.current
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false
    const splits: SplitText[] = []
    const context = gsap.context(() => {}, root)

    const run = async () => {
      if (document.fonts?.ready) await document.fonts.ready
      if (cancelled || !container.current) return

      context.add(() => {
        root.querySelectorAll<HTMLElement>('[data-split]').forEach((element) => {
          const split = SplitText.create(element, {
            type: 'chars,words',
            charsClass: 'split-char',
            wordsClass: 'split-word',
          })
          splits.push(split)

          const isHero = element.dataset.split === 'hero'
          gsap.from(split.chars, {
            yPercent: 118,
            autoAlpha: 0,
            rotateX: -42,
            stagger: 0.018,
            duration: 0.85,
            ease: 'power4.out',
            delay: isHero ? 0.08 : 0,
            scrollTrigger: isHero
              ? undefined
              : {
                  trigger: element,
                  start: 'top 82%',
                  once: true,
                },
          })
        })

        root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                once: true,
              },
            },
          )
        })
      })
    }

    void run()

    return () => {
      cancelled = true
      splits.forEach((split) => split.revert())
      context.revert()
    }
  }, [container, refreshKey])
}
