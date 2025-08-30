"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Loader2 } from "lucide-react"

interface RouteGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export default function RouteGuard({ children, requireAuth = false }: RouteGuardProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    // Auth check function
    const authCheck = () => {
      // If the route requires authentication and user is not authenticated
      if (requireAuth && !isAuthenticated) {
        setAuthorized(false)
        router.push(`/login?returnUrl=${encodeURIComponent(pathname)}`)
      } else {
        setAuthorized(true)
      }
    }

    // On initial load - run auth check
    if (!isLoading) {
      authCheck()
    }

    // On route change - run auth check
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isLoading, pathname, requireAuth, router])

  // Show loading indicator while the auth provider is still initializing
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  // If authorized, render children
  return authorized ? <>{children}</> : null
}
