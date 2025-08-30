import type { UserProfile } from "@/types/user-profile"

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
      { name: "IBM", jobCount: 112 },
      { name: "Facebook", jobCount: 98 },
      { name: "Apple", jobCount: 87 },
    ],
    topLocations: [
      { name: "San Francisco, CA", jobCount: 245, growthRate: 18 },
      { name: "New York, NY", jobCount: 198, growthRate: 15 },
      { name: "Seattle, WA", jobCount: 156, growthRate: 22 },
      { name: "Boston, MA", jobCount: 134, growthRate: 12 },
      { name: "Austin, TX", jobCount: 112, growthRate: 28 },
      { name: "Chicago, IL", jobCount: 98, growthRate: 10 },
    ],
    salaryTrends: [
      { year: 2020, averageSalary: 105000 },
      { year: 2021, averageSalary: 112000 },
      { year: 2022, averageSalary: 120000 },
      { year: 2023, averageSalary: 128000 },
      { year: 2024, averageSalary: 135000 },
    ],
    industryDistribution: [
      { industry: "Technology", percentage: 35 },
      { industry: "Finance", percentage: 20 },
      { industry: "Healthcare", percentage: 15 },
      { industry: "Retail", percentage: 10 },
      { industry: "Manufacturing", percentage: 8 },
      { industry: "Other", percentage: 12 },
    ],
  },
  roadmap: {
    stages: [
      {
        title: "Foundation Building",
        description: "Establish core skills and knowledge required for a data science career",
        timeframe: "3-6 months",
        milestones: [
          {
            title: "Learn Python Programming",
            description: "Master Python fundamentals and libraries like NumPy and Pandas",
            skills: ["Python", "NumPy", "Pandas"],
            resources: [
              {
                title: "Python for Data Science and Machine Learning Bootcamp",
                url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
              },
              { title: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
            ],
          },
          {
            title: "Statistics and Mathematics",
            description: "Build a strong foundation in statistics, probability, and linear algebra",
            skills: ["Statistics", "Probability", "Linear Algebra"],
            resources: [
              {
                title: "Statistics with Python Specialization",
                url: "https://www.coursera.org/specializations/statistics-with-python",
              },
              {
                title: "Mathematics for Machine Learning Specialization",
                url: "https://www.coursera.org/specializations/mathematics-machine-learning",
              },
            ],
          },
        ],
      },
      {
        title: "Skill Development",
        description: "Develop specialized skills in machine learning and data analysis",
        timeframe: "6-9 months",
        milestones: [
          {
            title: "Machine Learning Fundamentals",
            description: "Learn core ML algorithms and their applications",
            skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
            resources: [
              { title: "Machine Learning by Andrew Ng", url: "https://www.coursera.org/learn/machine-learning" },
              {
                title: "Hands-On Machine Learning with Scikit-Learn",
                url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
              },
            ],
          },
          {
            title: "Data Visualization",
            description: "Master data visualization techniques and tools",
            skills: ["Matplotlib", "Seaborn", "Tableau", "Data Storytelling"],
            resources: [
              {
                title: "Data Visualization with Python",
                url: "https://www.coursera.org/learn/python-for-data-visualization",
              },
              { title: "Tableau Training", url: "https://www.tableau.com/learn/training" },
            ],
          },
        ],
      },
      {
        title: "Professional Experience",
        description: "Gain practical experience and build a portfolio",
        timeframe: "9-12 months",
        milestones: [
          {
            title: "Personal Projects",
            description: "Build a portfolio of data science projects",
            skills: ["Project Management", "GitHub", "Documentation"],
            resources: [
              { title: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" },
              { title: "GitHub Portfolio Guide", url: "https://www.dataquest.io/blog/build-a-data-science-portfolio/" },
            ],
          },
          {
            title: "Internship or Entry-Level Position",
            description: "Apply for internships or junior data scientist roles",
            skills: ["Resume Building", "Interview Skills", "Networking"],
            resources: [
              { title: "Data Science Interview Guide", url: "https://www.interviewquery.com/" },
              {
                title: "LinkedIn Profile Optimization",
                url: "https://www.linkedin.com/learning/learning-linkedin-for-students",
              },
            ],
          },
        ],
      },
    ],
  },
}

export async function predictCareerPath(userProfile: UserProfile) {
  try {
    // In a production environment, this would call the AI model
    // For now, we'll use mock data for demonstration

    // This is where you would integrate with the AI SDK
    // const { text } = await generateText({
    //   model: openai('gpt-4o'),
    //   prompt: `Based on this user profile: ${JSON.stringify(userProfile)},
    //            recommend career paths, identify skill gaps, and provide market insights.`,
    //   system: "You are a career counseling AI that specializes in analyzing user profiles and recommending suitable career paths."
    // });

    // Parse the AI response and return structured data
    // const aiResponse = JSON.parse(text);

    // For now, return mock data
    return mockCareerData
  } catch (error) {
    console.error("Error predicting career path:", error)
    throw new Error("Failed to predict career path")
  }
}
