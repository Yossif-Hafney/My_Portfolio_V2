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
            Fill out the form below to submit your hiring request. I'll review your project details and get back to you within 24 hours.
          </p>
        </div>
        
        <HiringForm />
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
          <div className="expectation-grid">
            <div className="expectation-card" data-reveal>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Request</h3>
              <p className="text-gray-600">Fill out the form with your project details and requirements</p>
            </div>
            <div className="expectation-card" data-reveal>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review & Response</h3>
              <p className="text-gray-600">I'll review your request and respond within 24 hours</p>
            </div>
            <div className="expectation-card" data-reveal>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Project</h3>
              <p className="text-gray-600">Once approved, we'll begin working on your project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
