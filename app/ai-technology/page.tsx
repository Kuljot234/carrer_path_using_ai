import type { Metadata } from "next"
import AISection from "@/components/ai-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI Technology - Career Path Predictor",
  description: "Learn about the advanced AI technology behind our career recommendation system.",
}

export default function AITechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our AI Technology</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover how our advanced AI technology analyzes your profile to provide personalized career recommendations
          </p>
        </div>
      </div>

      <main className="flex-1">
        <AISection />

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Our AI in Action</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get personalized career recommendations based on your unique profile using our advanced AI technology.
            </p>
            <Button asChild size="lg">
              <Link href="/get-started">Try Our AI Now</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
