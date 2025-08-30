"use client"
import HuggingFaceChatbot from "@/components/huggingface-chatbot"
import RouteGuard from "@/components/route-guard"

export default function ChatbotPage() {
  return (
    <RouteGuard requireAuth>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">🤖 AI Career Chatbot</h1>
            <p className="text-muted-foreground">
              Powered by advanced AI technology, this chatbot provides personalized career guidance and insights.
            </p>
          </div>

          <div className="mb-6 p-4 bg-muted rounded-lg">
            <h2 className="font-semibold mb-2">✅ Model Status: Ready</h2>
            <p className="text-sm text-muted-foreground">
              The AI model has been successfully loaded and is ready to assist you with career-related questions.
            </p>
          </div>

          <HuggingFaceChatbot />

          <div className="mt-6 text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-muted p-3 rounded-lg">
                <strong>Full Stack Development</strong>
                <p className="text-muted-foreground">Frontend + Backend skills</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong>Software Engineering</strong>
                <p className="text-muted-foreground">Programming & system design</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong>DevOps Engineering</strong>
                <p className="text-muted-foreground">Infrastructure & automation</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong>Frontend Development</strong>
                <p className="text-muted-foreground">UI/UX & web technologies</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong>Backend Development</strong>
                <p className="text-muted-foreground">Server-side & databases</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <strong>Mobile Development</strong>
                <p className="text-muted-foreground">iOS, Android & cross-platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteGuard>
  )
}
