"use client"

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useAuth } from '@/contexts/auth-context'

export function DashboardHeader() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  const handleLoginOrTickets = () => {
    if (user) {
      router.push('/tickets')
    } else {
      router.push('/login')
    }
  }

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        PassPorter
      </Link>
      <nav className="flex items-center gap-4 lg:gap-6">
      <Link href="/home" className="text-sm font-medium">
          Home
        </Link>
        <Link href="/events" className="text-sm font-medium">
          Events
        </Link>
        <Link href="/tickets" className="text-sm font-medium">
          Tickets
        </Link>
        <Link href="/vip" className="text-sm font-medium">
          VIP
        </Link>
        <Button onClick={handleLoginOrTickets}>
          {user ? 'Manage Tickets' : 'Login'}
        </Button>
        {user && (
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </nav>
    </header>
  )
}

