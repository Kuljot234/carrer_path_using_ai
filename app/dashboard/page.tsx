"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { UserProfile } from "@/components/user-profile"
import RouteGuard from "@/components/route-guard"
import { useAuth } from "@/context/auth-context"
import { ArrowLeft } from "lucide-react"
import CareerRecommendations from "@/components/career-recommendations"
import { useState } from "react"

export default function DashboardPage() {
  const { user } = useAuth()
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [recommendations, setRecommendations] = useState<any>(null)

  // Mock data for demonstration
  const mockRecommendations = {
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
        keySkills: [
          "Figma",
          "User Research",
          "Wireframing",
          "Prototyping",
          "Visual Design",
          "Information Architecture",
        ],
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
            },
          ],
        },
      ],
    },
  }

  const handleGetRecommendations = () => {
    setRecommendations(mockRecommendations)
    setShowRecommendations(true)
  }

  const handleReset = () => {
    setShowRecommendations(false)
    setRecommendations(null)
  }

  return (
    <RouteGuard requireAuth>
      <div className="container mx-auto px-4 py-8">
        {!showRecommendations ? (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
                <p className="text-muted-foreground">Track your career progress and recommendations</p>
              </div>
              <Button onClick={handleGetRecommendations}>Get Career Recommendations</Button>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <UserProfile />

              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="learning">Learning</TabsTrigger>
                  <TabsTrigger value="jobs">Job Matches</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Profile Completion</CardTitle>
                        <CardDescription>Complete your profile to get better recommendations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">75%</div>
                        <div className="text-muted-foreground">Add more skills to improve your matches</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Skill Assessment</CardTitle>
                        <CardDescription>Take skill assessments to verify your expertise</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2/5</div>
                        <div className="text-muted-foreground">Assessments completed</div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle>Learning Progress</CardTitle>
                        <CardDescription>Track your learning journey</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-muted-foreground">Courses in progress</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Get Started</CardTitle>
                      <CardDescription>Complete these steps to get the most out of CareerPathAI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold">1</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Complete Your Profile</h3>
                            <p className="text-muted-foreground">Add your skills, education, and work experience</p>
                            <Button variant="outline" size="sm" className="mt-2">
                              Update Profile
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold">2</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Get Career Recommendations</h3>
                            <p className="text-muted-foreground">
                              Receive personalized career path suggestions based on your profile
                            </p>
                            <Button size="sm" className="mt-2" onClick={handleGetRecommendations}>
                              Get Recommendations
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold">3</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Explore Learning Resources</h3>
                            <p className="text-muted-foreground">
                              Discover courses and materials to develop your skills
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              Browse Resources
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Skills</CardTitle>
                      <CardDescription>Manage your skills and expertise levels</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <p>Your skills content would appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="learning" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Resources</CardTitle>
                      <CardDescription>Recommended courses and materials based on your career goals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border-2 hover:border-blue-500 transition-all duration-300">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Python for Data Science</CardTitle>
                              <CardDescription>Coursera • Intermediate</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm mb-4">
                                This comprehensive course covers Python programming fundamentals with a focus on data
                                science applications. You'll learn essential libraries like NumPy, Pandas, and
                                Matplotlib through hands-on projects analyzing real-world datasets.
                              </p>
                              <p className="text-sm mb-4">
                                The curriculum is designed by industry experts and academic professionals to ensure you
                                develop practical skills that align with current industry standards. Each module builds
                                upon previous concepts, creating a solid foundation for data analysis and visualization
                                techniques.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Duration: 8 weeks • 4-6 hours per week • Certificate upon completion
                              </p>
                              <Button className="w-full mt-4">Start Learning</Button>
                            </CardContent>
                          </Card>

                          <Card className="border-2 hover:border-blue-500 transition-all duration-300">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Machine Learning Fundamentals</CardTitle>
                              <CardDescription>edX • Advanced</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm mb-4">
                                This advanced course introduces the theoretical foundations and practical applications
                                of machine learning. You'll explore supervised and unsupervised learning algorithms,
                                model evaluation techniques, and feature engineering.
                              </p>
                              <p className="text-sm mb-4">
                                The program includes programming assignments in Python using scikit-learn and
                                TensorFlow, giving you hands-on experience implementing and optimizing machine learning
                                models for various problem domains. Case studies from industry applications provide
                                context for how these techniques solve real business challenges.
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Duration: 12 weeks • 8-10 hours per week • Verified certificate available
                              </p>
                              <Button className="w-full mt-4">Start Learning</Button>
                            </CardContent>
                          </Card>
                        </div>

                        <Card>
                          <CardHeader>
                            <CardTitle>Personalized Learning Path</CardTitle>
                            <CardDescription>Curated resources based on your skill gaps</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="mb-4">
                              Based on your profile and career goals as a Data Scientist, we've created a customized
                              learning path to help you develop the skills you need. This structured approach ensures
                              you're focusing on the most relevant topics in the right order.
                            </p>

                            <div className="space-y-4 mt-6">
                              <div className="relative pl-8 pb-4 border-l-2 border-blue-500">
                                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500"></div>
                                <h3 className="font-medium">Phase 1: Foundation (2-3 months)</h3>
                                <p className="text-sm mt-1">
                                  Start with Python programming fundamentals and statistics. These core skills form the
                                  foundation of data science and are prerequisites for more advanced topics. The
                                  recommended courses include interactive coding exercises and projects that reinforce
                                  theoretical concepts with practical applications.
                                </p>
                              </div>

                              <div className="relative pl-8 pb-4 border-l-2 border-blue-500">
                                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500"></div>
                                <h3 className="font-medium">Phase 2: Data Analysis (2-3 months)</h3>
                                <p className="text-sm mt-1">
                                  Build on your foundation with data manipulation, visualization, and exploratory data
                                  analysis techniques. You'll learn to work with real-world datasets, clean and
                                  preprocess data, and extract meaningful insights. The courses in this phase emphasize
                                  practical skills that are immediately applicable in professional settings.
                                </p>
                              </div>

                              <div className="relative pl-8 pb-4 border-l-2 border-blue-500">
                                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500"></div>
                                <h3 className="font-medium">Phase 3: Machine Learning (3-4 months)</h3>
                                <p className="text-sm mt-1">
                                  Advance to machine learning algorithms and model building. This phase covers
                                  supervised and unsupervised learning, model evaluation, and hyperparameter tuning. The
                                  recommended resources include comprehensive theoretical explanations alongside coding
                                  implementations, ensuring you understand both the "why" and "how" of machine learning
                                  techniques.
                                </p>
                              </div>

                              <div className="relative pl-8">
                                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500"></div>
                                <h3 className="font-medium">Phase 4: Specialization (2-3 months)</h3>
                                <p className="text-sm mt-1">
                                  Focus on specialized areas like deep learning, natural language processing, or
                                  computer vision based on your interests. This phase includes advanced courses and
                                  projects that will distinguish you in the job market. The resources are selected to
                                  provide cutting-edge knowledge and techniques used in industry applications.
                                </p>
                              </div>
                            </div>

                            <Button className="w-full mt-6">View Detailed Learning Plan</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="jobs" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Job Matches</CardTitle>
                      <CardDescription>Current job openings that match your profile</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <p>Job matches content would appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your account preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <p>Settings content would appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </>
        ) : (
          <div>
            <div className="flex items-center mb-6">
              <Button variant="outline" size="sm" onClick={handleReset} className="mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
              <h1 className="text-3xl font-bold">Your Career Recommendations</h1>
            </div>
            <CareerRecommendations recommendations={recommendations} onReset={handleReset} />
          </div>
        )}
      </div>
    </RouteGuard>
  )
}
