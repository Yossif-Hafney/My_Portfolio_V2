import { useState, useEffect } from 'react'
import { useAuthStore } from '../store/authStore'
import { AdminLogin } from '../Components/AdminLogin'
import { AdminDashboard } from '../Components/AdminDashboard'
import { useNavigate } from '@tanstack/react-router'

export const Admin = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // If not authenticated, show login form
    if (!isAuthenticated) {
      setShowLogin(true)
    } else {
      setShowLogin(false)
    }
  }, [isAuthenticated])

  const handleLoginSuccess = () => {
    setShowLogin(false)
  }

  const handleLogout = () => {
    // Redirect to home page after logout
    navigate({ to: '/' })
  }

  // Show login form if not authenticated
  if (!isAuthenticated || showLogin) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />
  }

  // Show dashboard if authenticated
  return <AdminDashboard onLogout={handleLogout} />
}
