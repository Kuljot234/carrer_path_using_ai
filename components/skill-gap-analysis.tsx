"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface SkillGapAnalysisProps {
  skillGaps: {
    missingSkills: {
      name: string
      importance: number
      resources: {
        title: string
        provider: string
        url: string
        type: string
      }[]
    }[]
    existingSkills: {
      name: string
      proficiency: number
    }[]
  }
  careerTitle: string
}

export default function SkillGapAnalysis({ skillGaps, careerTitle }: SkillGapAnalysisProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Skill Gap Analysis for {careerTitle}</CardTitle>
          <CardDescription>Compare your current skills with those required for this career path</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Your Existing Skills</h3>
              <div className="space-y-4">
                {skillGaps.existingSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Skills to Develop</h3>
              <div className="space-y-6">
                {skillGaps.missingSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">Importance: {skill.importance}%</span>
                    </div>
                    <Progress value={skill.importance} className="h-2" />

                    <div className="mt-2 space-y-2">
                      <h4 className="text-sm font-medium">Learning Resources:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {skill.resources.map((resource, i) => (
                          <Card key={i} className="p-3">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <h5 className="font-medium text-sm">{resource.title}</h5>
                                <p className="text-xs text-muted-foreground">
                                  {resource.provider} • {resource.type}
                                </p>
                                <p className="text-xs mt-2">
                                  {resource.type === "Course"
                                    ? `This comprehensive ${resource.provider} course covers all essential concepts and practical applications of ${skill.name}. Perfect for building a solid foundation with hands-on exercises and real-world projects.`
                                    : resource.type === "Book"
                                      ? `This authoritative book is considered a must-read resource for mastering ${skill.name}. It offers in-depth explanations, practical examples, and expert insights from industry professionals.`
                                      : `This tutorial provides step-by-step guidance on ${skill.name}, with practical examples and exercises to reinforce your learning. Great for beginners and those looking to refresh their knowledge.`}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={resource.url} target="_blank">
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
