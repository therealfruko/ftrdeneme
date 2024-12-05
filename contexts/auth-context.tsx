'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // In a real app, you would validate credentials against your backend
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      role: email.includes('admin') ? 'admin' : 'user',
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const register = async (name: string, email: string, password: string) => {
    // In a real app, you would send this data to your backend to create a new user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: 'user', // New users are always regular users
    }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const isAdmin = user?.role === 'admin'

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

