import { useEffect } from 'react'
import { useAuthStore } from '../store/authStore'
import { useNavigate } from '@tanstack/react-router'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to home page if not authenticated
      navigate({ to: '/' })
    }
  }, [isAuthenticated, navigate])

  // Don't render anything while checking authentication
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You need to be logged in to access this page.</p>
          <p className="text-gray-600 mt-2">Redirecting to home page...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
