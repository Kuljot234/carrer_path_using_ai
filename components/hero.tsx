"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"

export default function Hero() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Ideal Career Path with AI</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Our AI-powered system analyzes your skills, education, and interests to recommend the perfect career path for
          you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isAuthenticated ? (
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/how-it-works">Learn More</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
