"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Circle, ExternalLink } from "lucide-react"
import Link from "next/link"

interface CareerRoadmapProps {
  roadmap: {
    stages: {
      title: string
      description: string
      timeframe: string
      milestones: {
        title: string
        description: string
        skills: string[]
        resources?: {
          title: string
          url: string
        }[]
      }[]
    }[]
  }
  careerTitle: string
}

export default function CareerRoadmap({ roadmap, careerTitle }: CareerRoadmapProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Career Roadmap for {careerTitle}</CardTitle>
          <CardDescription>A step-by-step guide to help you achieve your career goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-muted" />

            <div className="space-y-8">
              {roadmap.stages.map((stage, stageIndex) => (
                <div key={stageIndex} className="relative">
                  <div className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center z-10">
                      <span className="text-lg font-bold">{stageIndex + 1}</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium">{stage.title}</h3>
                      <p className="text-sm text-muted-foreground">{stage.timeframe}</p>
                      <p className="mt-1">{stage.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 ml-12 space-y-4">
                    {stage.milestones.map((milestone, milestoneIndex) => (
                      <Card key={milestoneIndex} className="relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-3">
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{milestone.title}</h4>
                              <p className="text-sm mt-1">{milestone.description}</p>

                              <div className="mt-3">
                                <h5 className="text-sm font-medium mb-2">Skills to develop:</h5>
                                <div className="flex flex-wrap gap-2">
                                  {milestone.skills.map((skill, i) => (
                                    <Badge key={i} variant="outline">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {milestone.resources && milestone.resources.length > 0 && (
                                <div className="mt-4">
                                  <h5 className="text-sm font-medium mb-2">Recommended resources:</h5>
                                  <div className="space-y-3">
                                    {milestone.resources.map((resource, i) => (
                                      <div key={i} className="bg-muted/50 p-3 rounded-md">
                                        <Button variant="link" className="h-auto p-0 text-sm mb-1" asChild>
                                          <Link href={resource.url} target="_blank">
                                            <ExternalLink className="h-3 w-3 mr-1" />
                                            {resource.title}
                                          </Link>
                                        </Button>
                                        <p className="text-xs text-muted-foreground mt-1">
                                          This resource is specifically selected to help you master the skills needed
                                          for this milestone. It provides comprehensive coverage of key concepts,
                                          practical exercises, and real-world applications. The content is structured to
                                          build your knowledge progressively, making it ideal for both beginners and
                                          those looking to deepen their expertise in this area.
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
