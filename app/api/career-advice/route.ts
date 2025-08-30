import { type NextRequest, NextResponse } from "next/server"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const userInput = body.message

    // Validate the input
    if (!userInput || typeof userInput !== "string") {
      return NextResponse.json({ error: "Invalid request: message must be a non-empty string" }, { status: 400 })
    }

    console.log("Processing career advice request:", userInput.substring(0, 50) + "...")

    // Generate the response using the AI SDK
    const result = await generateText({
      model: openai("gpt-4o"),
      prompt: userInput,
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
- Career progression paths`,
    })

    // Return the response
    return NextResponse.json({ reply: result.text })
  } catch (error) {
    // Log the error for debugging
    console.error("Error in career advice API:", error)

    // Return a friendly error message
    return NextResponse.json(
      {
        error: "Failed to generate career advice",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
