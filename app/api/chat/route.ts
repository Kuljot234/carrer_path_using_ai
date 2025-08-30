import type { NextRequest } from "next/server"
import type { Message } from "ai"
import { generateText } from "ai"
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

    // Use the AI SDK to generate a response
    const { text } = await generateText({
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
  
  When recommending learning resources, provide detailed information including:
  - The specific topics covered in the resource
  - Why this resource is valuable for the particular skill
  - The learning format (interactive exercises, video lectures, projects, etc.)
  - The approximate time commitment required
  - The level of expertise it's designed for (beginner, intermediate, advanced)
  - How this resource fits into a broader learning path
  
  For example, instead of just recommending "Learn Python on Coursera", say:
  "I recommend the 'Python for Data Science and Machine Learning Bootcamp' on Udemy. This comprehensive course covers Python fundamentals, data manipulation with NumPy and Pandas, and visualization with Matplotlib. It includes 25+ hours of video content, coding exercises, and projects that simulate real-world data analysis tasks. The course is designed for beginners with some programming experience and takes approximately 2-3 months to complete if studying 5-7 hours per week. This serves as an excellent foundation before moving on to more specialized machine learning courses."
  
  If asked about a field you're not familiar with, acknowledge your limitations and suggest related fields you can provide information about.
  
  Keep responses under 250 words unless more detail is specifically requested.`,
    })

    return new Response(JSON.stringify({ response: text }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error in chat API:", error)
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
