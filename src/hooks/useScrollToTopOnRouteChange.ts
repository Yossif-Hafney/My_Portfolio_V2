import { useLayoutEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { scrollToTop } from '../utils/scrollToTop'

export function useScrollToTopOnRouteChange() {
  const pathname = useLocation({ select: (location) => location.pathname })

  useLayoutEffect(() => {
    const scrollTween = scrollToTop()
    return () => {
      scrollTween.kill()
    }
  }, [pathname])
}
