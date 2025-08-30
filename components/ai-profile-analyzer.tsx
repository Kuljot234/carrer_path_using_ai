"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Brain, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Define a list of recognized skills
const RECOGNIZED_SKILLS = [
  // Programming Languages
  "javascript",
  "python",
  "java",
  "c++",
  "c#",
  "ruby",
  "php",
  "swift",
  "kotlin",
  "go",
  "rust",
  "typescript",
  // Web Development
  "html",
  "css",
  "react",
  "angular",
  "vue",
  "node.js",
  "express",
  "django",
  "flask",
  "next.js",
  "tailwind",
  // Data Science
  "machine learning",
  "deep learning",
  "data analysis",
  "statistics",
  "r",
  "pandas",
  "numpy",
  "tensorflow",
  "pytorch",
  "scikit-learn",
  // Database
  "sql",
  "mongodb",
  "postgresql",
  "mysql",
  "oracle",
  "firebase",
  "redis",
  "elasticsearch",
  // Cloud & DevOps
  "aws",
  "azure",
  "google cloud",
  "docker",
  "kubernetes",
  "jenkins",
  "ci/cd",
  "terraform",
  "git",
  "github",
  // Design
  "ui design",
  "ux design",
  "figma",
  "sketch",
  "adobe xd",
  "photoshop",
  "illustrator",
  "wireframing",
  "prototyping",
  // Soft Skills
  "communication",
  "teamwork",
  "problem solving",
  "critical thinking",
  "leadership",
  "project management",
  "time management",
  // AI & ML
  "natural language processing",
  "computer vision",
  "reinforcement learning",
  "neural networks",
  "ai ethics",
  // Mobile Development
  "ios development",
  "android development",
  "react native",
  "flutter",
  "swift",
  "kotlin",
  // Other Tech
  "blockchain",
  "cybersecurity",
  "data engineering",
  "big data",
  "hadoop",
  "spark",
  "tableau",
  "power bi",
]

// Define career paths and their associated skills
const CAREER_PATHS = {
  "Data Scientist": {
    coreSkills: ["python", "statistics", "machine learning", "sql", "data analysis", "pandas", "numpy"],
    complementarySkills: ["r", "tensorflow", "pytorch", "big data", "data visualization", "deep learning"],
    description: "Analyzes and interprets complex data to help organizations make better decisions",
  },
  "Full Stack Developer": {
    coreSkills: ["javascript", "html", "css", "react", "node.js", "sql", "git"],
    complementarySkills: ["typescript", "mongodb", "aws", "docker", "next.js", "express"],
    description: "Builds both client and server software for web applications",
  },
  "UX/UI Designer": {
    coreSkills: ["ui design", "ux design", "figma", "wireframing", "prototyping", "user research"],
    complementarySkills: ["adobe xd", "sketch", "html", "css", "visual design", "information architecture"],
    description: "Creates user-friendly interfaces and experiences for digital products",
  },
  "Data Analyst": {
    coreSkills: ["sql", "excel", "data analysis", "statistics", "data visualization", "tableau", "power bi"],
    complementarySkills: ["python", "r", "pandas", "business intelligence", "problem solving"],
    description: "Examines data to identify trends and create visualizations to help businesses make decisions",
  },
  "Machine Learning Engineer": {
    coreSkills: ["python", "machine learning", "deep learning", "tensorflow", "pytorch", "statistics"],
    complementarySkills: ["computer vision", "natural language processing", "aws", "docker", "data engineering"],
    description: "Builds and deploys machine learning models into production systems",
  },
  "DevOps Engineer": {
    coreSkills: ["linux", "docker", "kubernetes", "ci/cd", "aws", "terraform", "git"],
    complementarySkills: ["python", "bash scripting", "monitoring", "security", "networking"],
    description: "Combines software development and IT operations to shorten development cycles",
  },
}

export default function AIProfileAnalyzer() {
  const [skills, setSkills] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState("")
  const [invalidSkills, setInvalidSkills] = useState<string[]>([])
  const [validSkills, setValidSkills] = useState<string[]>([])
  const [skillValidationMessage, setSkillValidationMessage] = useState("")

  // Validate skills as user types
  useEffect(() => {
    if (skills.trim()) {
      const enteredSkills = skills
        .toLowerCase()
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill)

      const valid = enteredSkills.filter((skill) => RECOGNIZED_SKILLS.includes(skill))
      const invalid = enteredSkills.filter((skill) => !RECOGNIZED_SKILLS.includes(skill))

      setValidSkills(valid)
      setInvalidSkills(invalid)

      if (invalid.length > 0) {
        setSkillValidationMessage(
          `${invalid.length} skill${invalid.length > 1 ? "s" : ""} not recognized. Please check spelling or use common skill terms.`,
        )
      } else if (valid.length > 0) {
        setSkillValidationMessage(`${valid.length} valid skill${valid.length > 1 ? "s" : ""} recognized.`)
      } else {
        setSkillValidationMessage("")
      }
    } else {
      setValidSkills([])
      setInvalidSkills([])
      setSkillValidationMessage("")
    }
  }, [skills])

  const analyzeSkills = (skillList: string[]) => {
    // Calculate career matches based on skill overlap
    const careerMatches = Object.entries(CAREER_PATHS).map(([career, details]) => {
      const coreSkillsMatch = details.coreSkills.filter((skill) => skillList.includes(skill))
      const complementarySkillsMatch = details.complementarySkills.filter((skill) => skillList.includes(skill))

      const coreMatchPercentage = (coreSkillsMatch.length / details.coreSkills.length) * 100
      const complementaryMatchPercentage = (complementarySkillsMatch.length / details.complementarySkills.length) * 100

      // Weight core skills more heavily (70%) than complementary skills (30%)
      const overallMatchScore = Math.round(coreMatchPercentage * 0.7 + complementaryMatchPercentage * 0.3)

      return {
        title: career,
        description: details.description,
        matchScore: overallMatchScore,
        coreSkillsMatch: {
          matched: coreSkillsMatch,
          missing: details.coreSkills.filter((skill) => !skillList.includes(skill)),
          percentage: Math.round(coreMatchPercentage),
        },
        complementarySkillsMatch: {
          matched: complementarySkillsMatch,
          missing: details.complementarySkills.filter((skill) => !skillList.includes(skill)),
          percentage: Math.round(complementaryMatchPercentage),
        },
      }
    })

    // Sort careers by match score
    const sortedCareers = careerMatches.sort((a, b) => b.matchScore - a.matchScore)

    // Identify strengths and improvement areas
    const strengths = [...new Set(sortedCareers.flatMap((career) => career.coreSkillsMatch.matched))]
    const improvementAreas = [...new Set(sortedCareers.slice(0, 3).flatMap((career) => career.coreSkillsMatch.missing))]

    return {
      analysis: {
        summary: `Based on your ${skillList.length} skill${skillList.length > 1 ? "s" : ""}, we've analyzed potential career matches.`,
        strengths:
          strengths.length > 0 ? strengths : ["No specific strengths identified. Add more skills for better analysis."],
        improvementAreas:
          improvementAreas.length > 0
            ? improvementAreas
            : ["Add more skills for personalized improvement recommendations."],
        careerMatches: sortedCareers.slice(0, 3),
      },
    }
  }

  const handleAnalyze = async () => {
    if (!skills.trim()) {
      setError("Please enter your skills to analyze")
      return
    }

    setIsAnalyzing(true)
    setError("")

    try {
      // Short delay to simulate processing
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (validSkills.length === 0) {
        setResult({
          analysis: {
            summary: "We couldn't recognize any of the skills you entered.",
            strengths: ["No recognized skills to analyze."],
            improvementAreas: ["Try entering common skill terms like 'python', 'javascript', 'data analysis', etc."],
            careerMatches: [],
          },
        })
      } else {
        // Generate analysis based on recognized skills
        const analysisResult = analyzeSkills(validSkills)
        setResult(analysisResult)
      }

      setIsAnalyzing(false)
    } catch (error) {
      console.error("Error analyzing profile:", error)
      setError("Failed to analyze your profile. Please try again.")
      setIsAnalyzing(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="h-5 w-5 mr-2 text-blue-600" />
          Quick Skill Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!result ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Enter your skills below for a quick AI analysis of potential career matches
            </p>
            <Textarea
              placeholder="Enter your skills separated by commas (e.g., JavaScript, Python, Data Analysis, UX Design)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="min-h-[100px]"
            />

            {skillValidationMessage && (
              <div className="flex items-center text-sm">
                {invalidSkills.length > 0 ? (
                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                ) : (
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                )}
                <span>{skillValidationMessage}</span>
              </div>
            )}

            {invalidSkills.length > 0 && (
              <div className="text-sm">
                <span className="text-amber-500 font-medium">Unrecognized skills: </span>
                <span>{invalidSkills.join(", ")}</span>
              </div>
            )}

            {validSkills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {validSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button onClick={handleAnalyze} className="w-full" disabled={isAnalyzing}>
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze My Skills"
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Analysis Summary</h3>
              <p>{result.analysis.summary}</p>
            </div>

            {result.analysis.careerMatches.length === 0 ? (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>No career matches found</AlertTitle>
                <AlertDescription>
                  We couldn't match your skills to our career paths. Try adding more recognized skills or check our
                  skill guides for inspiration.
                </AlertDescription>
              </Alert>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                      Strengths
                    </h3>
                    <ul className="space-y-1">
                      {result.analysis.strengths.map((strength: string, i: number) => (
                        <li key={i} className="text-sm flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <XCircle className="h-4 w-4 text-amber-600 mr-1" />
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-1">
                      {result.analysis.improvementAreas.map((area: string, i: number) => (
                        <li key={i} className="text-sm flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Top Career Matches</h3>
                  <div className="space-y-4">
                    {result.analysis.careerMatches.map((career: any, i: number) => (
                      <Card key={i} className="p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium">{career.title}</div>
                              <div className="text-sm text-muted-foreground">{career.description}</div>
                            </div>
                            <Badge
                              className={`${
                                career.matchScore >= 70
                                  ? "bg-green-600"
                                  : career.matchScore >= 40
                                    ? "bg-blue-600"
                                    : "bg-amber-600"
                              }`}
                            >
                              {career.matchScore}% Match
                            </Badge>
                          </div>

                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Core Skills Match</span>
                                <span>{career.coreSkillsMatch.percentage}%</span>
                              </div>
                              <Progress value={career.coreSkillsMatch.percentage} className="h-2" />
                            </div>

                            {career.coreSkillsMatch.missing.length > 0 && (
                              <div className="text-sm">
                                <span className="text-amber-600 font-medium">Skills to develop: </span>
                                <span>{career.coreSkillsMatch.missing.join(", ")}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}

            {result.analysis.careerMatches.length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium mb-2">Recommended Learning Resources</h3>
                <Card className="p-4">
                  <div className="space-y-4">
                    <p className="text-sm">
                      Based on your skill analysis, here are some recommended resources to help you develop the skills
                      needed for your top career match:
                    </p>

                    {result.analysis.careerMatches[0].coreSkillsMatch.missing.slice(0, 2).map((skill, i) => (
                      <div key={i} className="bg-muted p-3 rounded-md">
                        <h4 className="font-medium text-sm">{skill} Learning Path</h4>
                        <p className="text-xs mt-1">
                          Developing expertise in {skill} is crucial for success in the{" "}
                          {result.analysis.careerMatches[0].title} role. We recommend starting with foundational courses
                          that cover core concepts before moving to advanced applications. Online platforms like
                          Coursera, Udemy, and edX offer excellent structured courses with hands-on projects. Supplement
                          your learning with practice on platforms like LeetCode or Kaggle to apply your skills to
                          real-world problems.
                        </p>
                        <p className="text-xs mt-2 text-muted-foreground">
                          Estimated time to proficiency: 3-6 months with consistent practice
                        </p>
                      </div>
                    ))}

                    <p className="text-sm text-muted-foreground">
                      For a personalized learning plan with detailed resource recommendations, complete your profile and
                      get a comprehensive skill gap analysis.
                    </p>
                  </div>
                </Card>
              </div>
            )}

            <Button onClick={() => setResult(null)} variant="outline" className="w-full">
              Analyze Different Skills
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
