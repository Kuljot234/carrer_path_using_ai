import type { NextRequest } from "next/server"
import { StreamingTextResponse, type Message } from "ai"
import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    // Validate the request
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid request format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Format the conversation history for the AI model
    const formattedMessages = messages.map((msg: Message) => ({
      role: msg.role,
      content: msg.content,
    }))

    // Use the AI SDK to stream a response
    const result = streamText({
      model: openai("gpt-4o"),
      messages: formattedMessages,
      system: `You are a career counseling AI assistant that specializes in providing advice about career paths, 
      skill development, and job market trends. Focus on being helpful, accurate, and concise.
      
      You have expertise in various career fields including:
      - Data Science and Analytics
      - Software Development
      - UX/UI Design
      - Digital Marketing
      - Project Management
      - Cybersecurity
      - Cloud Computing
      
      When discussing careers, include information about:
      - Required skills and education
      - Salary ranges and job outlook
      - Learning resources
      - Career progression paths
      
      If asked about a field you're not familiar with, acknowledge your limitations and suggest related fields you can provide information about.
      
      Keep responses under 250 words unless more detail is specifically requested.`,
    })

    // Create a proper streaming response using the StreamingTextResponse utility
    return new StreamingTextResponse(result.stream)
  } catch (error) {
    console.error("Error in chat streaming API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
