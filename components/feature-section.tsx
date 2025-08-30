import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, BookOpen, TrendingUp, Map, Users } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: "AI-Based Career Recommendations",
      description: "Get personalized career suggestions based on your unique skills, education, and interests.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: "Skill Gap Analysis",
      description: "Identify the skills you need to develop to succeed in your recommended career paths.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: "Job Market Insights",
      description: "Access real-time data on job demand, salary trends, and growth opportunities.",
    },
    {
      icon: <Map className="h-10 w-10 text-blue-600" />,
      title: "Personalized Career Roadmap",
      description: "Receive a step-by-step guide to help you achieve your career goals.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Industry Connections",
      description: "Connect with professionals and mentors in your target industry for guidance and networking.",
    },
  ]

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform offers comprehensive tools to guide your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
