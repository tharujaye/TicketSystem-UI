"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoginForm } from '@/pages/auth/login-form'
import { useAuth } from '@/contexts/auth-context'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [selectedRole, setSelectedRole] = useState<'customer' | 'vendor' | null>(null)

  const handleLogin = (userData: { email: string; password: string }) => {
    if (selectedRole) {
      login({
        id: '1',
        name: userData.email.split('@')[0],
        role: selectedRole,
      })
      router.push('/tickets')
    }
  }

  const handleCancel = () => {
    setSelectedRole(null)  // Reset the selected role
  }

  if (!selectedRole) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Choose your role</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button onClick={() => setSelectedRole('customer')}>I&apos;m a Customer</Button>
            <Button onClick={() => setSelectedRole('vendor')}>I&apos;m a Vendor</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <LoginForm onSubmit={handleLogin} role={selectedRole} />
      <div className="mt-4">
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
