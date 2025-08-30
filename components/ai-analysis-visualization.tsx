"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Cpu, Database, Network, Zap } from "lucide-react"

export default function AIAnalysisVisualization() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [completed, setCompleted] = useState(false)

  const steps = [
    {
      title: "Data Collection",
      icon: <Database className="h-6 w-6" />,
      description: "Gathering user profile data, skills, education, and interests",
    },
    {
      title: "Feature Extraction",
      icon: <Zap className="h-6 w-6" />,
      description: "Converting user inputs into structured features for AI processing",
    },
    {
      title: "Model Processing",
      icon: <Cpu className="h-6 w-6" />,
      description: "Running data through our trained machine learning models",
    },
    {
      title: "Pattern Matching",
      icon: <Network className="h-6 w-6" />,
      description: "Identifying patterns and correlations with successful career paths",
    },
    {
      title: "Recommendation Generation",
      icon: <Brain className="h-6 w-6" />,
      description: "Creating personalized career recommendations and insights",
    },
  ]

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setCurrentStep(0)
    setCompleted(false)

    // Simulate AI analysis process
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval)
          setIsAnalyzing(false)
          setCompleted(true)
          return prev
        }
        return prev + 1
      })
    }, 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-blue-600" />
          AI Analysis Process
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <p className="text-muted-foreground">See how our AI processes your data to generate career recommendations</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-muted" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center z-10 ${
                        currentStep >= index ? "bg-blue-600 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium">{step.title}</h3>
                        {currentStep === index && isAnalyzing && (
                          <Badge className="ml-2 bg-blue-600 animate-pulse">Processing</Badge>
                        )}
                        {currentStep > index && <Badge className="ml-2 bg-green-600">Completed</Badge>}
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {!isAnalyzing && !completed && (
              <Button onClick={startAnalysis} className="w-full md:w-auto">
                Start AI Analysis Demo
              </Button>
            )}
            {isAnalyzing && (
              <Button disabled className="w-full md:w-auto">
                Analyzing... ({currentStep + 1}/{steps.length})
              </Button>
            )}
            {completed && (
              <div className="text-center space-y-4">
                <p className="text-green-600 font-medium">Analysis Complete!</p>
                <Button onClick={startAnalysis} variant="outline">
                  Run Again
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
