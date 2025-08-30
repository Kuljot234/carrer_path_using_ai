import { NextResponse } from "next/server"

// Set runtime to nodejs
export const runtime = "nodejs"

export async function POST(request: Request) {
  console.log("API route triggered")

  try {
    // Log environment variable (redacted for security)
    const apiKey = process.env.OPENAI_API_KEY
    console.log("API key exists:", !!apiKey)
    console.log("API key starts with:", apiKey ? apiKey.substring(0, 3) + "..." : "undefined")

    if (!apiKey) {
      console.error("Missing OpenAI API key")
      return NextResponse.json({ error: "Missing API key configuration" }, { status: 500 })
    }

    // Log request body
    const body = await request.json()
    console.log("Request body:", JSON.stringify(body))

    const userMessage = body.message

    if (!userMessage) {
      console.error("Missing message in request")
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    console.log("Making OpenAI API request...")

    // Making a simple OpenAI request
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful career advisor. Keep answers brief and focused on career advice.",
          },
          { role: "user", content: userMessage },
        ],
        max_tokens: 300,
      }),
    })

    // Log OpenAI API response status
    console.log("OpenAI API response status:", openaiResponse.status)

    // If the response is not OK, throw an error
    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text()
      console.error("OpenAI API error:", errorText)
      return NextResponse.json(
        {
          error: `OpenAI API error: ${openaiResponse.status}`,
          details: errorText,
        },
        { status: 500 },
      )
    }

    // Parse the response
    const data = await openaiResponse.json()
    console.log("OpenAI API response:", JSON.stringify(data).substring(0, 200) + "...")

    // Extract the reply from the response
    const reply = data.choices[0].message.content

    // Return the response
    return NextResponse.json({ reply })
  } catch (error) {
    // Log the complete error
    console.error("Error in career advisor API:", error)

    // Return a detailed error response
    return NextResponse.json(
      {
        error: "An error occurred processing your request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
