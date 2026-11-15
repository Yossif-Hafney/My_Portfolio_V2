import { useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { gsap } from 'gsap'

export interface ProjectGalleryImage {
  src: string
  alt: string
  label: string
}

interface ProjectImageSliderProps {
  images: ProjectGalleryImage[]
  projectTitle: string
}

export function ProjectImageSlider({ images, projectTitle }: ProjectImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const activeImage = images[activeIndex]

  useLayoutEffect(() => {
    const image = imageRef.current
    if (!image || !activeImage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tween = gsap.fromTo(
      image,
      { autoAlpha: 0.55, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power2.out' },
    )

    return () => {
      tween.kill()
    }
  }, [activeImage])

  if (!activeImage) return null

  const goTo = (index: number) => {
    setActiveIndex((index + images.length) % images.length)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(activeIndex - 1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(activeIndex + 1)
    }
  }

  return (
    <div
      className="project-image-slider"
      role="region"
      aria-label={`${projectTitle} screenshots`}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="project-image-slider-stage">
        <img
          key={activeImage.src}
          ref={imageRef}
          src={activeImage.src}
          alt={activeImage.alt}
          fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
          decoding="async"
          draggable={false}
        />
      </div>

      <div className="project-image-slider-footer">
        <div className="project-image-slider-caption" aria-live="polite" aria-atomic="true">
          <span>Project screen</span>
          <strong>{activeImage.label}</strong>
        </div>
        <div className="project-image-slider-controls">
          <span className="project-image-slider-count" aria-label={`Screenshot ${activeIndex + 1} of ${images.length}`}>
            {String(activeIndex + 1).padStart(2, '0')}
            <span>/ {String(images.length).padStart(2, '0')}</span>
          </span>
          <button
            type="button"
            className="project-image-slider-button"
            aria-label="Previous screenshot"
            onClick={() => goTo(activeIndex - 1)}
          >
            <FaArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="project-image-slider-button"
            aria-label="Next screenshot"
            onClick={() => goTo(activeIndex + 1)}
          >
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="project-image-slider-pagination" aria-label="Choose a screenshot">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className={`project-image-slider-indicator${index === activeIndex ? ' is-active' : ''}`}
            aria-label={`Show screenshot ${index + 1}: ${image.label}`}
            aria-pressed={index === activeIndex}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
