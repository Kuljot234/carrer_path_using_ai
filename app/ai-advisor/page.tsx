"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import EnhancedAIChatAdvisor from "@/components/enhanced-ai-chat-advisor"
import StandaloneCareerAdvisor from "@/components/standalone-career-advisor"
import HuggingFaceChatbot from "@/components/huggingface-chatbot"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RouteGuard from "@/components/route-guard"

export default function AIAdvisorPage() {
  return (
    <RouteGuard requireAuth>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">AI Career Advisor</h1>
          <p className="text-muted-foreground mb-8">
            Chat with our AI advisor to get personalized career guidance and answers to your questions.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How can the AI Advisor help you?</CardTitle>
              <CardDescription>Our AI can assist with various career-related questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Career Path Guidance</h3>
                  <p className="text-sm">
                    Ask about different career paths, required skills, and growth opportunities in various fields.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Skill Development</h3>
                  <p className="text-sm">
                    Get recommendations on which skills to develop and resources for learning them.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Job Market Insights</h3>
                  <p className="text-sm">
                    Learn about current trends, salary expectations, and demand for different roles.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Resume & Interview Tips</h3>
                  <p className="text-sm">Get advice on improving your resume and preparing for job interviews.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="chatbot">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
              <TabsTrigger value="advisor">Career Advisor</TabsTrigger>
              <TabsTrigger value="chat">Enhanced Chat</TabsTrigger>
            </TabsList>
            <TabsContent value="chatbot">
              <HuggingFaceChatbot />
            </TabsContent>
            <TabsContent value="advisor">
              <StandaloneCareerAdvisor />
            </TabsContent>
            <TabsContent value="chat">
              <EnhancedAIChatAdvisor />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </RouteGuard>
  )
}
