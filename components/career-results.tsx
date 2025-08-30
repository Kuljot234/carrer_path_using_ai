"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, BookOpen, TrendingUp, Map, ArrowLeft } from "lucide-react"

interface CareerResultsProps {
  results: any
  onReset: () => void
}

export default function CareerResults({ results, onReset }: CareerResultsProps) {
  const [selectedCareer, setSelectedCareer] = useState(results.careers[0])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Career Recommendations</h2>
        <Button variant="outline" size="sm" onClick={onReset}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Update Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.careers.slice(0, 3).map((career: any, index: number) => (
          <Card
            key={index}
            className={`cursor-pointer transition-all ${selectedCareer.title === career.title ? "ring-2 ring-primary" : "hover:shadow-md"}`}
            onClick={() => setSelectedCareer(career)}
          >
            <CardHeader>
              <CardTitle>{career.title}</CardTitle>
              <CardDescription>{career.description.slice(0, 100)}...</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Match Score</span>
                  <span className="text-sm font-medium">{career.matchScore}%</span>
                </div>
                <Progress value={career.matchScore} className="h-2" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {career.keySkills.slice(0, 3).map((skill: string, i: number) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
                {career.keySkills.length > 3 && <Badge variant="outline">+{career.keySkills.length - 3} more</Badge>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="details" className="mt-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">
            <Briefcase className="h-4 w-4 mr-2" />
            Career Details
          </TabsTrigger>
          <TabsTrigger value="skills">
            <BookOpen className="h-4 w-4 mr-2" />
            Skill Gap Analysis
          </TabsTrigger>
          <TabsTrigger value="market">
            <TrendingUp className="h-4 w-4 mr-2" />
            Market Insights
          </TabsTrigger>
          <TabsTrigger value="roadmap">
            <Map className="h-4 w-4 mr-2" />
            Career Roadmap
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{selectedCareer.title}</CardTitle>
              <CardDescription>Detailed information about this career path</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p>{selectedCareer.description}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCareer.keySkills.map((skill: string, i: number) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Average Salary Range</h3>
                <p className="text-lg font-semibold">
                  ${selectedCareer.salaryRange.min.toLocaleString()} - $
                  {selectedCareer.salaryRange.max.toLocaleString()}
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Growth Potential</h3>
                <div className="flex items-center">
                  <Progress value={selectedCareer.growthPotential} className="h-2 flex-1 mr-4" />
                  <span>{selectedCareer.growthPotential}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skill Gap Analysis</CardTitle>
              <CardDescription>Skills you need to develop for this career</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Your Existing Skills</h3>
                  <div className="space-y-4">
                    {results.skillGaps.existingSkills.map((skill: any, index: number) => (
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
                    {results.skillGaps.missingSkills.map((skill: any, index: number) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">Importance: {skill.importance}%</span>
                        </div>
                        <Progress value={skill.importance} className="h-2" />

                        <div className="mt-2 space-y-2">
                          <h4 className="text-sm font-medium">Learning Resources:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {skill.resources.map((resource: any, i: number) => (
                              <Card key={i} className="p-3">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h5 className="font-medium text-sm">{resource.title}</h5>
                                    <p className="text-xs text-muted-foreground">
                                      {resource.provider} • {resource.type}
                                    </p>
                                  </div>
                                  <Button variant="ghost" size="sm" asChild>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                      <span className="sr-only">Open resource</span>
                                      <TrendingUp className="h-4 w-4" />
                                    </a>
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
        </TabsContent>

        <TabsContent value="market">
          <Card>
            <CardHeader>
              <CardTitle>Job Market Insights</CardTitle>
              <CardDescription>Current trends and statistics for this career path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Demand Trend</h3>
                  <div className="flex items-center">
                    {results.marketInsights.demandTrend.trend === "increasing" ? (
                      <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                    ) : (
                      <TrendingUp className="h-8 w-8 text-yellow-500 mr-3" />
                    )}
                    <div>
                      <p className="font-medium">
                        {results.marketInsights.demandTrend.trend === "increasing" ? "Increasing" : "Stable"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {results.marketInsights.demandTrend.percentage}% growth expected
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{results.marketInsights.demandTrend.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Top Locations</h3>
                  <div className="space-y-4">
                    {results.marketInsights.topLocations.slice(0, 3).map((location: any, index: number) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{location.name}</span>
                        <span className="text-sm font-medium">{location.jobCount} jobs</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap">
          <Card>
            <CardHeader>
              <CardTitle>Career Roadmap</CardTitle>
              <CardDescription>A step-by-step guide to help you achieve your career goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-muted" />

                <div className="space-y-8">
                  {results.roadmap.stages.map((stage: any, stageIndex: number) => (
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
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
