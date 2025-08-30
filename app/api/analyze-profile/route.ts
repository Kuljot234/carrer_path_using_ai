import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const userProfile = await request.json()

    // Validate the user profile data
    if (!userProfile.skills || !userProfile.interests) {
      return NextResponse.json({ error: "Missing required user profile data" }, { status: 400 })
    }

    // In a production environment, this would call the AI model using the AI SDK
    // Here's how you would implement it with the AI SDK:

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Analyze this user profile and provide a detailed assessment of their career potential:
      
      Name: ${userProfile.name}
      Skills: ${userProfile.skills.join(", ")}
      Interests: ${userProfile.interests.join(", ")}
      Education: ${userProfile.educationLevel}
      
      Provide an analysis that includes:
      1. Top 3 career matches based on their skills and interests
      2. Key strengths they possess
      3. Areas for improvement or skill gaps
      4. Recommended learning resources
      5. Potential career growth trajectory
      
      Format your response as JSON with the following structure:
      {
        "analysis": {
          "summary": "Brief overview of their profile",
          "strengths": ["Strength 1", "Strength 2", "Strength 3"],
          "improvementAreas": ["Area 1", "Area 2", "Area 3"],
          "careerMatches": [
            {
              "title": "Career Title",
              "matchScore": 85,
              "description": "Brief description"
            }
          ],
          "growthPotential": "Description of growth potential",
          "recommendedResources": [
            {
              "title": "Resource name",
              "type": "Course/Book/etc",
              "url": "URL"
            }
          ]
        }
      }`,
      system:
        "You are a career analysis AI that specializes in evaluating user profiles and providing detailed career assessments.",
    })

    // Parse the AI response
    let analysis
    try {
      analysis = JSON.parse(text)
    } catch (error) {
      console.error("Error parsing AI response:", error)
      return NextResponse.json({ error: "Failed to parse AI analysis" }, { status: 500 })
    }

    return NextResponse.json(analysis)
  } catch (error) {
    console.error("Error in profile analysis API:", error)
    return NextResponse.json({ error: "Failed to analyze profile" }, { status: 500 })
  }
}
