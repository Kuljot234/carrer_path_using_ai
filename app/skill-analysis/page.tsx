import type { Metadata } from "next"
import SkillGapSection from "@/components/skill-gap-section"
import AIProfileAnalyzer from "@/components/ai-profile-analyzer"
import EnhancedSkillAnalysis from "@/components/enhanced-skill-analysis"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Brain } from "lucide-react"

export const metadata: Metadata = {
  title: "Skill Analysis - Career Path Predictor",
  description: "Identify the skills you need to develop to succeed in your desired career path.",
}

export default function SkillAnalysisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Skill Gap Analysis</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Identify the skills you need to develop to succeed in your desired career path
          </p>
        </div>
      </div>

      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Try Our Quick AI Skill Analyzer</h2>
              <AIProfileAnalyzer />
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Career Skill Analysis</h2>

            <Tabs defaultValue="career-skills" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="career-skills">
                  <Brain className="h-4 w-4 mr-2" />
                  Career Path Skills
                </TabsTrigger>
                <TabsTrigger value="skill-gaps">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Skill Gap Analysis
                </TabsTrigger>
              </TabsList>

              <TabsContent value="career-skills">
                <EnhancedSkillAnalysis />
              </TabsContent>

              <TabsContent value="skill-gaps">
                <SkillGapSection />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Personalized Skill Analysis</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Complete your profile to receive a comprehensive skill gap analysis and personalized learning
              recommendations.
            </p>
            <Button asChild size="lg">
              <Link href="/get-started">Complete Your Profile</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
