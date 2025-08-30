import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const benefits = [
    "Make informed career decisions based on data and AI insights",
    "Discover careers that match your unique skills and interests",
    "Understand the skills you need to develop for your dream job",
    "Access up-to-date information on job market trends",
    "Follow a personalized roadmap to achieve your career goals",
    "Save time in researching career options and requirements",
    "Reduce uncertainty in your career planning process",
    "Identify high-growth opportunities in your field of interest",
  ]

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About CareerPathAI</h2>
            <p className="text-xl text-muted-foreground">Empowering your career journey with artificial intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="mb-4">
                At CareerPathAI, we believe everyone deserves a fulfilling career that aligns with their skills,
                interests, and values. Our mission is to democratize career guidance by leveraging artificial
                intelligence to provide personalized, data-driven recommendations.
              </p>
              <p>
                Founded by a team of AI experts and career counselors, we've developed a sophisticated system that
                analyzes your unique profile and matches it with potential career paths, helping you make informed
                decisions about your professional future.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Technology</h3>
              <p className="mb-4">
                CareerPathAI uses advanced natural language processing and machine learning algorithms to analyze user
                profiles and job market data. Our system is trained on millions of career trajectories, job
                descriptions, and skill requirements from various industries.
              </p>
              <p>
                We continuously update our data sources and refine our algorithms to ensure our recommendations reflect
                the latest trends and opportunities in the job market. Our commitment to accuracy and relevance sets us
                apart from traditional career guidance methods.
              </p>
            </div>
          </div>

          <Card className="bg-blue-50 dark:bg-blue-950 border-none">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-center">Benefits of Using CareerPathAI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
