import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareerRecommendationSection() {
  // Sample career data
  const careers = [
    {
      title: "Data Scientist",
      description:
        "Data scientists gather and analyze large sets of structured and unstructured data. They analyze, process, and model data then interpret the results to create actionable plans for companies and other organizations.",
      matchScore: 92,
      keySkills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics", "R"],
      salaryRange: { min: 95000, max: 150000 },
      growthPotential: 85,
    },
    {
      title: "Full Stack Developer",
      description:
        "Full stack developers work with both the front and back ends of a website or application. They can create a website, application, or software program from start to finish.",
      matchScore: 87,
      keySkills: ["JavaScript", "React", "Node.js", "HTML/CSS", "MongoDB", "Express"],
      salaryRange: { min: 85000, max: 140000 },
      growthPotential: 78,
    },
    {
      title: "UX/UI Designer",
      description:
        "UX/UI designers create meaningful and relevant experiences for users. They consider the why, what, and how of product use and focus on creating intuitive, accessible interfaces.",
      matchScore: 75,
      keySkills: ["Figma", "User Research", "Wireframing", "Prototyping", "Visual Design", "Information Architecture"],
      salaryRange: { min: 75000, max: 120000 },
      growthPotential: 72,
    },
  ]

  return (
    <section id="career-recommendations" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Career Paths</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of the most in-demand career paths our AI recommends based on current market trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {careers.map((career, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>{career.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{career.description.slice(0, 120)}...</p>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Market Demand</span>
                    <span>{career.matchScore}%</span>
                  </div>
                  <Progress value={career.matchScore} className="h-2" />
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.keySkills.slice(0, 4).map((skill, i) => (
                      <Badge key={i} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm mb-1">Salary Range:</p>
                  <p className="font-medium">
                    ${career.salaryRange.min.toLocaleString()} - ${career.salaryRange.max.toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="#profile-form">Get Personalized Recommendations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
