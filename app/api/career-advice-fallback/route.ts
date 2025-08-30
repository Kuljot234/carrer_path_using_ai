import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

// Sample responses for common career questions
const sampleResponses = {
  default: "I'm your career advisor AI. Ask me about career paths, skills, or job market trends!",
  "software developer":
    "Software development is a rewarding career with high demand. Key skills include programming languages (JavaScript, Python, etc.), problem-solving, and teamwork. The average salary ranges from $70,000 to $150,000 depending on experience and location. To get started, consider learning a programming language through platforms like freeCodeCamp or Codecademy.",
  "data scientist":
    "Data Science combines statistics, programming, and domain expertise. Required skills include Python/R, statistics, machine learning, and data visualization. The average salary ranges from $85,000 to $165,000. Start by learning Python and statistics through courses on Coursera or DataCamp.",
  "ux designer":
    "UX Design focuses on creating intuitive user experiences. Skills needed include user research, wireframing, prototyping, and visual design. Salaries typically range from $65,000 to $130,000. Begin with learning design principles and tools like Figma through platforms like Interaction Design Foundation.",
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const userInput = body.message?.toLowerCase() || ""

    // Find the most relevant response
    let response = sampleResponses.default

    for (const [key, value] of Object.entries(sampleResponses)) {
      if (userInput.includes(key)) {
        response = value
        break
      }
    }

    // Return the response
    return NextResponse.json({
      reply: response,
      note: "This is a fallback response. The AI service might be temporarily unavailable.",
    })
  } catch (error) {
    // Log the error for debugging
    console.error("Error in fallback API:", error)

    // Return a friendly error message
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
