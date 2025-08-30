import type { Metadata } from "next"
import AboutSection from "@/components/about-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About - Career Path Predictor",
  description: "Learn about our AI-powered career recommendation system.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About CareerPathAI</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, technology, and the team behind CareerPathAI
          </p>
        </div>
      </div>

      <main className="flex-1">
        <AboutSection />

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Thousands of Satisfied Users</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover your ideal career path and start your journey to professional success today.
            </p>
            <Button asChild size="lg">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
