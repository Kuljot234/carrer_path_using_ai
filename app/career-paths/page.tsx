import type { Metadata } from "next"
import CareerRecommendationSection from "@/components/career-recommendation-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Career Paths - Career Path Predictor",
  description: "Explore popular career paths and discover which one might be the perfect fit for you.",
}

export default function CareerPathsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Career Paths</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover popular career paths and find the one that aligns with your skills and interests
          </p>
        </div>
      </div>

      <main className="flex-1">
        <CareerRecommendationSection />

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Find Your Perfect Career Match</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get personalized career recommendations based on your unique profile and discover your ideal career path.
            </p>
            <Button asChild size="lg">
              <Link href="/get-started">Get Personalized Recommendations</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
