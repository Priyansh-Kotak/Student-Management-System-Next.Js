'use client'

import { LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/Button'

interface NavbarProps {
  userName: string
  userEmail?: string
}

export function Navbar({ userName, userEmail }: NavbarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white rounded-lg p-2">
            <User size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Student Management</h1>
            <p className="text-sm text-gray-600">
              Welcome, {userName}
              {userEmail && (
                <span className="text-gray-400 ml-1">({userEmail})</span>
              )}
            </p>
          </div>
        </div>
        
        <Button
          variant="secondary"
          size="sm"
          onClick={handleLogout}
          className="flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </nav>
  )
}
