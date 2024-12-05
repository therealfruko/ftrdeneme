'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'

export function withAuth(Component: React.ComponentType, allowedRoles: string[] = ['admin', 'user']) {
  return function AuthenticatedComponent(props: any) {
    const { user, isAdmin } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (!user) {
        router.push('/login')
      } else if (!allowedRoles.includes(user.role)) {
        router.push('/')
      }
    }, [user, router])

    if (!user || !allowedRoles.includes(user.role)) {
      return null
    }

    return <Component {...props} />
  }
}

