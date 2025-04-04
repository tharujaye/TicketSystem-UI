"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { DashboardHeader } from '@/pages/layout/dashboard-header'
import { TicketPurchaseForm } from '@/pages/tickets/purchase-form'
import { TicketReleaseForm } from '@/pages/tickets/release-form'

export default function TicketsPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">
          {user.role === 'customer' ? 'Purchase Tickets' : 'Release Tickets'}
        </h1>
        {user.role === 'customer' ? <TicketPurchaseForm /> : <TicketReleaseForm />}
      </main>
    </div>
  )
}

