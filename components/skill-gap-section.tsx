import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SkillGapSection() {
  // Sample skill gap data
  const skillGaps = [
    {
      career: "Data Scientist",
      missingSkills: [
        {
          name: "Machine Learning",
          importance: 90,
          resources: [
            {
              title: "Machine Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/machine-learning",
            },
          ],
        },
        {
          name: "SQL",
          importance: 85,
          resources: [
            {
              title: "SQL for Data Science",
              provider: "Coursera",
              url: "https://www.coursera.org/learn/sql-for-data-science",
            },
          ],
        },
      ],
    },
    {
      career: "Full Stack Developer",
      missingSkills: [
        {
          name: "React",
          importance: 88,
          resources: [
            {
              title: "React - The Complete Guide",
              provider: "Udemy",
              url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
            },
          ],
        },
        {
          name: "Node.js",
          importance: 82,
          resources: [
            {
              title: "Node.js Tutorial",
              provider: "W3Schools",
              url: "https://www.w3schools.com/nodejs/",
            },
          ],
        },
      ],
    },
  ]

  return (
    <section id="skill-gap" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skill Gap Analysis</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Identify the skills you need to develop to succeed in your desired career path
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillGaps.map((careerSkills, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  {careerSkills.career} Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {careerSkills.missingSkills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">Importance: {skill.importance}%</span>
                    </div>
                    <Progress value={skill.importance} className="h-2" />

                    <div className="mt-2">
                      <h4 className="text-sm font-medium mb-2">Recommended Resource:</h4>
                      <Card className="p-3 bg-muted/50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-medium text-sm">{skill.resources[0].title}</h5>
                            <p className="text-xs text-muted-foreground">{skill.resources[0].provider}</p>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={skill.resources[0].url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="#profile-form">Get Your Personalized Skill Analysis</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
