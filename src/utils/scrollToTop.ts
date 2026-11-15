import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export function scrollToTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return gsap.to(window, {
    scrollTo: { y: 0, autoKill: true },
    delay: reduceMotion ? 0 : 0.1,
    duration: reduceMotion ? 0 : 2,
    ease: 'power1.inOut',
    overwrite: 'auto',
  })
}
