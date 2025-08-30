import { type NextRequest, NextResponse } from "next/server"

// Set runtime to nodejs
export const runtime = "nodejs"

// Enable CORS
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

// Handle OPTIONS request (for CORS preflight)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  })
}

export async function POST(request: NextRequest) {
  try {
    // Add CORS headers to the response
    const headers = {
      ...corsHeaders,
      "Content-Type": "application/json",
    }

    // Parse the request body
    const data = await request.json()
    const message = data.message

    if (!message) {
      return NextResponse.json({ error: "No message provided" }, { status: 400, headers })
    }

    console.log("Processing career advice request:", message.substring(0, 50) + "...")

    // Direct OpenAI API call (similar to your Flask implementation)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or "gpt-4" if you have access
        messages: [
          {
            role: "system",
            content:
              "You are a helpful AI Career Advisor. You provide guidance on job roles, skills, and market trends.",
          },
          { role: "user", content: message },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("OpenAI API error:", errorData)
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`)
    }

    const result = await response.json()
    const reply = result.choices[0].message.content

    // Return the response
    return NextResponse.json({ reply }, { headers })
  } catch (error) {
    console.error("Error in career advisor API:", error)
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500, headers: corsHeaders },
    )
  }
}
