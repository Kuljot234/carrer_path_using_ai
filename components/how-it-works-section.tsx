import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Enter your skills, education, experience, and career interests.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI analyzes your profile and matches it with potential career paths.",
    },
    {
      number: "03",
      title: "Review Recommendations",
      description: "Explore personalized career recommendations and insights.",
    },
    {
      number: "04",
      title: "Follow Your Roadmap",
      description: "Use the personalized roadmap to develop skills and achieve your goals.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple process helps you discover and pursue your ideal career path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
