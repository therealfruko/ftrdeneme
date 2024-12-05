'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, FileText, Users, Settings, LogOut, FileUp, Database } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard, roles: ['admin', 'user'] },
  { name: 'Invoices', href: '/invoices', icon: FileText, roles: ['admin', 'user'] },
  { name: 'Customers', href: '/customers', icon: Users, roles: ['admin'] },
  { name: 'Import/Export', href: '/import-export', icon: FileUp, roles: ['admin'] },
  { name: 'Bulk Operations', href: '/bulk-operations', icon: Database, roles: ['admin'] },
  { name: 'Settings', href: '/settings', icon: Settings, roles: ['admin', 'user'] },
]

export function Sidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  if (!user) return null

  return (
    <div className="flex flex-col h-full w-64 bg-gray-900 text-white">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Vercel Invoice Tracker</h1>
        <p className="text-sm mt-2">Welcome, {user.name}</p>
        <p className="text-xs text-gray-400">Role: {user.role}</p>
      </div>
      <nav className="flex-1 px-2 py-4">
        {navItems.map((item) => {
          if (!item.roles.includes(user.role)) return null
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  'w-full justify-start mb-2',
                  pathname === item.href ? 'bg-gray-800' : ''
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

