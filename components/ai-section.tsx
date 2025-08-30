import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import EnhancedAIChatAdvisor from "@/components/enhanced-ai-chat-advisor"
import AIAnalysisVisualization from "@/components/ai-analysis-visualization"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Cpu, Database, LineChart, Sparkles } from "lucide-react"

export default function AISection() {
  const aiFeatures = [
    {
      icon: <Brain className="h-10 w-10 text-blue-600" />,
      title: "Natural Language Processing",
      description: "Our AI understands and analyzes your skills and interests using advanced NLP techniques.",
    },
    {
      icon: <Database className="h-10 w-10 text-blue-600" />,
      title: "Vast Career Database",
      description: "Trained on millions of career trajectories and job descriptions for accurate recommendations.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-600" />,
      title: "Predictive Analytics",
      description: "Forecasts career growth potential and market demand based on current trends.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-blue-600" />,
      title: "Personalized Learning Paths",
      description: "Creates custom skill development roadmaps tailored to your specific career goals.",
    },
  ]

  return (
    <section id="ai-technology" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Career Guidance</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our advanced AI technology analyzes your profile to provide personalized career recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">AI Chat Advisor</h3>
            <EnhancedAIChatAdvisor />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">How Our AI Works</h3>
            <AIAnalysisVisualization />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our AI Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
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

        <Card className="bg-blue-50 dark:bg-blue-950 border-none p-8">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Cpu className="h-12 w-12 text-blue-600" />
              <div>
                <h3 className="text-2xl font-bold">Ready to experience AI-powered career guidance?</h3>
                <p className="text-muted-foreground">Get personalized recommendations based on your unique profile</p>
              </div>
            </div>
            <Button asChild size="lg" className="whitespace-nowrap">
              <Link href="#profile-form">Try Our AI Now</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
