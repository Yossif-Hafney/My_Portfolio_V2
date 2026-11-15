import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  isAuthenticated: boolean
  adminCredentials: {
    username: string
    password: string
  }
  login: (username: string, password: string) => boolean
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      adminCredentials: {
        username: 'admin',
        password: 'admin123'
      },
      login: (username: string, password: string) => {
        const { adminCredentials } = get()
        if (username === adminCredentials.username && password === adminCredentials.password) {
          set({ isAuthenticated: true })
          return true
        }
        return false
      },
      logout: () => {
        set({ isAuthenticated: false })
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)
