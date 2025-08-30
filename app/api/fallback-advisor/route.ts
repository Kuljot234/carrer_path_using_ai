import { NextResponse } from "next/server"

// A set of predefined responses for common career questions
const predefinedResponses: Record<string, string> = {
  "software developer": `
Software Development is a promising career path. Key points:

Skills needed:
- Programming languages (JavaScript, Python, Java, etc.)
- Problem-solving abilities
- Teamwork and communication
- Git and version control

Job outlook:
- High demand across industries
- Average salary range: $70,000-$150,000
- Growth opportunities in specialized areas like AI, cloud computing

Getting started:
- Learn a programming language through Codecademy, freeCodeCamp
- Build projects for your portfolio
- Consider a computer science degree or bootcamp
`,
  "data scientist": `
Data Science combines analytics, programming, and domain knowledge. Key points:

Skills needed:
- Python or R programming
- Statistics and mathematics
- Machine learning algorithms
- Data visualization
- SQL and database knowledge

Job outlook:
- Growing demand across sectors
- Average salary range: $85,000-$165,000
- High demand in tech, finance, healthcare

Getting started:
- Learn Python and statistics basics
- Take courses on Coursera, DataCamp
- Work on data projects using public datasets
`,
  "ux designer": `
UX Design focuses on user experience and interface design. Key points:

Skills needed:
- User research methods
- Wireframing and prototyping
- Visual design principles
- Usability testing
- Tools like Figma, Sketch

Job outlook:
- Increasing demand as digital products grow
- Average salary range: $65,000-$130,000
- Opportunities in tech, agencies, and product companies

Getting started:
- Learn design principles
- Master tools like Figma
- Build a portfolio of redesigns or personal projects
`,
  default: `
Here are some general career development tips:

1. Identify your strengths and interests before choosing a career path
2. Research industry trends and job market demand
3. Develop both technical and soft skills relevant to your field
4. Network with professionals in your target industry
5. Create a strong online presence through LinkedIn and a portfolio
6. Consider further education or certifications if needed
7. Look for internships or entry-level positions to gain experience

For more specific advice, please ask about a particular career path or skill set.
`,
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const userMessage = body.message?.toLowerCase() || ""

    // Find the most relevant predefined response
    let responseText = predefinedResponses.default

    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (userMessage.includes(keyword)) {
        responseText = response
        break
      }
    }

    return NextResponse.json({
      reply: responseText,
      note: "This is a fallback response system. The OpenAI service may be unavailable.",
    })
  } catch (error) {
    console.error("Error in fallback API:", error)
    return NextResponse.json(
      {
        error: "Error processing request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
