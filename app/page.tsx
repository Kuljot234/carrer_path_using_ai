"use client"
import Hero from "@/components/hero"
import FeatureSection from "@/components/feature-section"
import HowItWorksSection from "@/components/how-it-works-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function HomePage() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <main className="flex-1">
        {/* Features Section */}
        <FeatureSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Blog Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover insights, tips, and expert advice to help you navigate your career journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "Navigating Career Transitions",
                  excerpt: "Learn how to successfully transition to a new career with our step-by-step approach.",
                  image: "/placeholder.svg?height=200&width=400&text=Career+Transitions",
                  date: "April 10, 2023",
                  url: "/blog/navigating-career-transitions",
                },
                {
                  title: "Mastering In-Demand Tech Skills",
                  excerpt:
                    "Discover which technical skills are most valued by employers and how to acquire them efficiently.",
                  image: "/placeholder.svg?height=200&width=400&text=Tech+Skills",
                  date: "March 15, 2023",
                  url: "/blog/mastering-in-demand-tech-skills",
                },
                {
                  title: "The Future of Work in the AI Era",
                  excerpt:
                    "How artificial intelligence is reshaping the job market and what it means for your career strategy.",
                  image: "/placeholder.svg?height=200&width=400&text=Future+of+Work",
                  date: "February 28, 2023",
                  url: "/blog/future-of-work-ai-era",
                },
              ].map((post, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="mb-4 line-clamp-2">{post.excerpt}</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={post.url}>Read Article</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Ideal Career Path?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our AI-powered system analyzes your skills, education, and interests to recommend the perfect career path
              for you.
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
                    <Link href="/login">
                      Already have an account? Log In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore Our Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-blue-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">AI Technology</h3>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Discover how our advanced AI analyzes your profile to provide personalized recommendations.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/ai-technology">Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-indigo-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Career Paths</h3>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Explore popular career paths and discover which one might be the perfect fit for you.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/career-paths">Explore Careers</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 bg-purple-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Skill Analysis</h3>
                </div>
                <div className="p-6">
                  <p className="mb-4">
                    Identify the skills you need to develop to succeed in your desired career path.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/skill-analysis">Analyze Skills</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
