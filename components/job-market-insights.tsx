"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, MapPin, Building } from "lucide-react"

interface JobMarketInsightsProps {
  marketInsights: {
    demandTrend: {
      trend: "increasing" | "stable" | "decreasing"
      percentage: number
      description: string
    }
    topEmployers: {
      name: string
      jobCount: number
      logo?: string
    }[]
    topLocations: {
      name: string
      jobCount: number
      growthRate: number
    }[]
    salaryTrends: {
      year: number
      averageSalary: number
    }[]
    industryDistribution: {
      industry: string
      percentage: number
    }[]
  }
  careerTitle: string
}

export default function JobMarketInsights({ marketInsights, careerTitle }: JobMarketInsightsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Job Market Insights for {careerTitle}</CardTitle>
          <CardDescription>Current trends and statistics for this career path</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="employers">Top Employers</TabsTrigger>
              <TabsTrigger value="locations">Top Locations</TabsTrigger>
              <TabsTrigger value="salary">Salary Trends</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Demand Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      {marketInsights.demandTrend.trend === "increasing" ? (
                        <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                      ) : marketInsights.demandTrend.trend === "decreasing" ? (
                        <TrendingDown className="h-8 w-8 text-red-500 mr-3" />
                      ) : (
                        <TrendingUp className="h-8 w-8 text-yellow-500 mr-3" />
                      )}
                      <div>
                        <p className="font-medium">
                          {marketInsights.demandTrend.trend === "increasing"
                            ? "Increasing"
                            : marketInsights.demandTrend.trend === "decreasing"
                              ? "Decreasing"
                              : "Stable"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {marketInsights.demandTrend.percentage}%{" "}
                          {marketInsights.demandTrend.trend === "increasing"
                            ? "growth"
                            : marketInsights.demandTrend.trend === "decreasing"
                              ? "decline"
                              : "change"}{" "}
                          expected
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">{marketInsights.demandTrend.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Industry Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {marketInsights.industryDistribution.map((item, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{item.industry}</span>
                            <span>{item.percentage}%</span>
                          </div>
                          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{ width: `${item.percentage}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="employers" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {marketInsights.topEmployers.map((employer, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-muted rounded-full p-2">
                          <Building className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium">{employer.name}</h3>
                          <p className="text-sm text-muted-foreground">{employer.jobCount} open positions</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="locations" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {marketInsights.topLocations.map((location, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-muted rounded-full p-2">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{location.name}</h3>
                            <span className={`text-sm ${location.growthRate > 0 ? "text-green-500" : "text-red-500"}`}>
                              {location.growthRate > 0 ? "+" : ""}
                              {location.growthRate}%
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{location.jobCount} open positions</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="salary" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-[300px] relative">
                    {/* This would be a chart in a real implementation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Salary trend visualization would appear here</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2">
                      {marketInsights.salaryTrends.map((item, index) => (
                        <div key={index} className="text-center">
                          <p className="text-xs text-muted-foreground">{item.year}</p>
                          <p className="text-sm font-medium">${item.averageSalary.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
