import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  // Get OpenAI API key status (safely)
  const apiKey = process.env.OPENAI_API_KEY || ""
  const apiKeyStatus = !!apiKey

  // Only return the first few characters of the API key for security
  const apiKeyStart = apiKey ? apiKey.substring(0, 3) : ""

  return NextResponse.json({
    env: {
      OPENAI_API_KEY_STATUS: apiKeyStatus,
      OPENAI_API_KEY_START: apiKeyStart,
    },
  })
}
