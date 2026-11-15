import { HiringForm } from '../Components/HiringForm'
import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export const Hire = () => {
  const pageRef = useRef<HTMLElement | null>(null)
  useScrollReveal(pageRef)

  return (
    <section ref={pageRef} className="hire-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading" data-reveal>
          <h1 className="text-4xl font-bold text-gray-900 mb-4" data-split>Ready to Work Together?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share a few details about your project. Your email application will open with a draft for you to review and send.
          </p>
        </div>
        
        <HiringForm />
      </div>
    </section>
  )
}
