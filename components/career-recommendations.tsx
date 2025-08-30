"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, BookOpen, TrendingUp, Map, ArrowLeft } from "lucide-react"
import JobMarketInsights from "@/components/job-market-insights"
import SkillGapAnalysis from "@/components/skill-gap-analysis"
import CareerRoadmap from "@/components/career-roadmap"
import type { CareerRecommendation } from "@/types/career-recommendation"

interface CareerRecommendationsProps {
  recommendations: {
    careers: CareerRecommendation[]
    skillGaps: any
    marketInsights: any
    roadmap: any
  }
  onReset: () => void
}

export default function CareerRecommendations({ recommendations, onReset }: CareerRecommendationsProps) {
  const [selectedCareer, setSelectedCareer] = useState<CareerRecommendation>(recommendations.careers[0])

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
        {recommendations.careers.slice(0, 3).map((career, index) => (
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
                {career.keySkills.slice(0, 3).map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
                {career.keySkills.length > 3 && <Badge variant="outline">+{career.keySkills.length - 3} more</Badge>}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={selectedCareer.title === career.title ? "default" : "outline"} className="w-full">
                {selectedCareer.title === career.title ? "Selected" : "Select"}
              </Button>
            </CardFooter>
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
                  {selectedCareer.keySkills.map((skill, i) => (
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
          <SkillGapAnalysis skillGaps={recommendations.skillGaps} careerTitle={selectedCareer.title} />
        </TabsContent>

        <TabsContent value="market">
          <JobMarketInsights marketInsights={recommendations.marketInsights} careerTitle={selectedCareer.title} />
        </TabsContent>

        <TabsContent value="roadmap">
          <CareerRoadmap roadmap={recommendations.roadmap} careerTitle={selectedCareer.title} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
