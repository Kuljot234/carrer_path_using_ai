import { type NextRequest, NextResponse } from "next/server"

// Mock data for development purposes
const mockCareerData = {
  careers: [
    {
      title: "Data Scientist",
      description:
        "Data scientists gather and analyze large sets of structured and unstructured data. They analyze, process, and model data then interpret the results to create actionable plans for companies and other organizations.",
      matchScore: 92,
      keySkills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics", "R"],
      salaryRange: { min: 95000, max: 150000 },
      growthPotential: 85,
    },
    {
      title: "Full Stack Developer",
      description:
        "Full stack developers work with both the front and back ends of a website or application. They can create a website, application, or software program from start to finish.",
      matchScore: 87,
      keySkills: ["JavaScript", "React", "Node.js", "HTML/CSS", "MongoDB", "Express"],
      salaryRange: { min: 85000, max: 140000 },
      growthPotential: 78,
    },
    {
      title: "UX/UI Designer",
      description:
        "UX/UI designers create meaningful and relevant experiences for users. They consider the why, what, and how of product use and focus on creating intuitive, accessible interfaces.",
      matchScore: 75,
      keySkills: ["Figma", "User Research", "Wireframing", "Prototyping", "Visual Design", "Information Architecture"],
      salaryRange: { min: 75000, max: 120000 },
      growthPotential: 72,
    },
  ],
  skillGaps: {
    missingSkills: [
      {
        name: "Machine Learning",
        importance: 90,
        resources: [
          {
            title: "Machine Learning Specialization",
            provider: "Coursera",
            url: "https://www.coursera.org/specializations/machine-learning",
            type: "Course",
          },
          {
            title: "Hands-On Machine Learning with Scikit-Learn and TensorFlow",
            provider: "O'Reilly",
            url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
            type: "Book",
          },
        ],
      },
      {
        name: "SQL",
        importance: 85,
        resources: [
          {
            title: "SQL for Data Science",
            provider: "Coursera",
            url: "https://www.coursera.org/learn/sql-for-data-science",
            type: "Course",
          },
          {
            title: "SQL Tutorial",
            provider: "W3Schools",
            url: "https://www.w3schools.com/sql/",
            type: "Tutorial",
          },
        ],
      },
      {
        name: "Data Visualization",
        importance: 80,
        resources: [
          {
            title: "Data Visualization with Python",
            provider: "Coursera",
            url: "https://www.coursera.org/learn/python-for-data-visualization",
            type: "Course",
          },
          {
            title: "Storytelling with Data",
            provider: "Amazon",
            url: "https://www.amazon.com/Storytelling-Data-Visualization-Business-Professionals/dp/1119002257",
            type: "Book",
          },
        ],
      },
    ],
    existingSkills: [
      {
        name: "Python",
        proficiency: 75,
      },
      {
        name: "Statistics",
        proficiency: 60,
      },
      {
        name: "Problem Solving",
        proficiency: 85,
      },
      {
        name: "Communication",
        proficiency: 90,
      },
    ],
  },
  marketInsights: {
    demandTrend: {
      trend: "increasing",
      percentage: 24,
      description:
        "The demand for Data Scientists is growing rapidly as more companies recognize the value of data-driven decision making.",
    },
    topEmployers: [
      { name: "Google", jobCount: 156 },
      { name: "Microsoft", jobCount: 132 },
      { name: "Amazon", jobCount: 128 },
    ],
    topLocations: [
      { name: "San Francisco, CA", jobCount: 245, growthRate: 18 },
      { name: "New York, NY", jobCount: 198, growthRate: 15 },
      { name: "Seattle, WA", jobCount: 156, growthRate: 22 },
    ],
    salaryTrends: [
      { year: 2020, averageSalary: 105000 },
      { year: 2021, averageSalary: 112000 },
      { year: 2022, averageSalary: 120000 },
      { year: 2023, averageSalary: 128000 },
      { year: 2024, averageSalary: 135000 },
    ],
  },
  roadmap: {
    stages: [
      {
        title: "Foundation Building",
        description: "Establish core skills and knowledge required for a data science career",
        timeframe: "3-6 months",
      },
      {
        title: "Skill Development",
        description: "Develop specialized skills in machine learning and data analysis",
        timeframe: "6-9 months",
      },
      {
        title: "Professional Experience",
        description: "Gain practical experience and build a portfolio",
        timeframe: "9-12 months",
      },
    ],
  },
}

export async function POST(request: NextRequest) {
  try {
    const userProfile = await request.json()

    // Validate the user profile data
    if (!userProfile.skills || !userProfile.interests) {
      return NextResponse.json({ error: "Missing required user profile data" }, { status: 400 })
    }

    // In a production environment, this would call the AI model using the AI SDK
    // For demonstration purposes, we'll use mock data

    // Example of how you would use the AI SDK in production:
    /*
    const { text } = await generateText({
      model: openai('gpt-4o'),
      prompt: `Based on this user profile: ${JSON.stringify(userProfile)}, 
               recommend career paths, identify skill gaps, and provide market insights.`,
      system: "You are a career counseling AI that specializes in analyzing user profiles and recommending suitable career paths."
    })
    
    // Parse the AI response
    const predictions = JSON.parse(text)
    */

    // For now, return mock data
    return NextResponse.json(mockCareerData)
  } catch (error) {
    console.error("Error in prediction API:", error)
    return NextResponse.json({ error: "Failed to generate career predictions" }, { status: 500 })
  }
}
