import type { Metadata } from "next"
import HowItWorksSection from "@/components/how-it-works-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How It Works - Career Path Predictor",
  description: "Learn how our AI-powered career recommendation system works to help you find your ideal career path.",
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">How CareerPathAI Works</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our simple process helps you discover and pursue your ideal career path using advanced AI technology
          </p>
        </div>
      </div>

      <main className="flex-1">
        <HowItWorksSection />

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Follow our simple process to discover your ideal career path and start your journey today.
            </p>
            <Button asChild size="lg">
              <Link href="/get-started">Get Your Career Recommendations</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
