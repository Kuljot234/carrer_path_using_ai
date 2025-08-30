"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Detailed tech career advice data
const techCareers = [
  {
    id: "full-stack",
    title: "Full Stack Developer",
    description:
      "Full Stack Developers work on both client and server sides of web applications. They handle everything from user interfaces to databases and server configuration.",
    responsibilities: [
      "Develop and maintain web applications from front to back end",
      "Create responsive user interfaces using modern frameworks",
      "Design and implement RESTful APIs and database schemas",
      "Optimize applications for performance and scalability",
      "Collaborate with designers, product managers, and other developers",
    ],
    frontendSkills: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Vue.js",
      "Angular",
      "TypeScript",
      "Redux",
      "Responsive Design",
    ],
    backendSkills: ["Node.js", "Python", "Java", "PHP", "Ruby", "Express", "Django", "Spring Boot", "Laravel"],
    databaseSkills: ["SQL", "MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    devOpsSkills: ["Git", "Docker", "CI/CD", "AWS/Azure/GCP", "Kubernetes"],
    salary: {
      entry: "$70,000 - $90,000",
      mid: "$90,000 - $130,000",
      senior: "$130,000 - $180,000+",
    },
    demand: "Very High",
    growthOutlook: "Excellent",
    learningPath: [
      "Learn HTML, CSS, and JavaScript fundamentals",
      "Master a frontend framework (React, Vue, or Angular)",
      "Learn backend development with Node.js or Python",
      "Study database design and management",
      "Build full-stack projects for your portfolio",
      "Learn version control with Git",
      "Understand deployment and DevOps basics",
    ],
    resources: [
      { name: "freeCodeCamp Full Stack Curriculum", url: "https://www.freecodecamp.org/" },
      { name: "The Odin Project", url: "https://www.theodinproject.com/" },
      { name: "Full Stack Open", url: "https://fullstackopen.com/en/" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
      { name: "GitHub", url: "https://github.com/" },
    ],
    certifications: [
      "AWS Certified Developer",
      "MongoDB Certified Developer",
      "Microsoft Certified: Azure Developer Associate",
      "Google Cloud Professional Developer",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Developer",
    description:
      "Frontend Developers focus on creating the user-facing parts of web applications. They work with design teams to implement visual elements and interactive features.",
    responsibilities: [
      "Build responsive and accessible user interfaces",
      "Implement designs from wireframes and mockups",
      "Optimize web applications for maximum speed and scalability",
      "Ensure cross-browser compatibility and responsive design",
      "Collaborate with UX/UI designers and backend developers",
    ],
    coreSkills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Responsive Design", "Web Accessibility (WCAG)"],
    frameworkSkills: ["React", "Vue.js", "Angular", "Svelte", "Next.js", "Redux/Context API"],
    toolingSkills: ["Webpack", "Babel", "ESLint", "npm/yarn", "Jest/Testing Library", "Storybook"],
    cssSkills: ["Sass/SCSS", "Tailwind CSS", "Styled Components", "CSS Modules", "CSS Grid/Flexbox", "CSS Animations"],
    salary: {
      entry: "$65,000 - $85,000",
      mid: "$85,000 - $120,000",
      senior: "$120,000 - $160,000+",
    },
    demand: "High",
    growthOutlook: "Strong",
    learningPath: [
      "Master HTML, CSS, and JavaScript fundamentals",
      "Learn responsive design principles",
      "Study a major frontend framework (React recommended)",
      "Understand state management patterns",
      "Learn testing methodologies",
      "Build a portfolio of responsive, interactive projects",
      "Study web performance optimization",
    ],
    resources: [
      { name: "Frontend Masters", url: "https://frontendmasters.com/" },
      { name: "CSS-Tricks", url: "https://css-tricks.com/" },
      { name: "JavaScript.info", url: "https://javascript.info/" },
      { name: "React Documentation", url: "https://reactjs.org/docs/getting-started.html" },
      { name: "Smashing Magazine", url: "https://www.smashingmagazine.com/" },
    ],
    certifications: [
      "Meta Frontend Developer Professional Certificate",
      "W3C Front-End Web Developer",
      "JavaScript Certification (various providers)",
      "React Developer Certification",
    ],
  },
  {
    id: "backend",
    title: "Backend Developer",
    description:
      "Backend Developers build and maintain the server-side of web applications. They focus on databases, server logic, APIs, and application architecture.",
    responsibilities: [
      "Design and implement server-side logic and APIs",
      "Create and manage databases and data models",
      "Ensure high performance and responsiveness of applications",
      "Implement security and data protection measures",
      "Collaborate with frontend developers and DevOps engineers",
    ],
    languageSkills: ["Node.js", "Python", "Java", "C#", "Go", "Ruby", "PHP"],
    frameworkSkills: ["Express.js", "Django", "Spring Boot", "ASP.NET Core", "Ruby on Rails", "Laravel", "FastAPI"],
    databaseSkills: ["SQL (PostgreSQL, MySQL)", "NoSQL (MongoDB, DynamoDB)", "Redis", "GraphQL", "ORM tools"],
    infrastructureSkills: ["RESTful APIs", "Microservices", "Docker", "Serverless", "Message Queues", "CI/CD"],
    salary: {
      entry: "$75,000 - $95,000",
      mid: "$95,000 - $135,000",
      senior: "$135,000 - $180,000+",
    },
    demand: "Very High",
    growthOutlook: "Excellent",
    learningPath: [
      "Choose and master a backend language (Node.js, Python, etc.)",
      "Learn database design and management",
      "Study API design principles",
      "Understand authentication and security best practices",
      "Learn about server deployment and scaling",
      "Build backend projects with databases and APIs",
      "Study system design and architecture patterns",
    ],
    resources: [
      { name: "Node.js Documentation", url: "https://nodejs.org/en/docs/" },
      { name: "Django Documentation", url: "https://docs.djangoproject.com/" },
      { name: "PostgreSQL Tutorial", url: "https://www.postgresqltutorial.com/" },
      { name: "REST API Design Best Practices", url: "https://restfulapi.net/" },
      { name: "Backend Developer Roadmap", url: "https://roadmap.sh/backend" },
    ],
    certifications: [
      "AWS Certified Developer - Associate",
      "Microsoft Certified: Azure Developer Associate",
      "Oracle Certified Professional, Java SE Programmer",
      "MongoDB Certified Developer",
    ],
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    description:
      "DevOps Engineers bridge development and operations, focusing on infrastructure, deployment, automation, and monitoring to ensure reliable and efficient software delivery.",
    responsibilities: [
      "Implement and manage CI/CD pipelines",
      "Configure and maintain cloud infrastructure",
      "Automate deployment processes",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices",
      "Optimize application performance and reliability",
    ],
    infrastructureSkills: ["AWS/Azure/GCP", "Terraform", "Kubernetes", "Docker", "Linux/Unix", "Networking"],
    cicdSkills: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD", "Travis CI"],
    monitoringSkills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Nagios"],
    scriptingSkills: ["Bash", "Python", "Go", "PowerShell", "YAML", "HCL"],
    salary: {
      entry: "$80,000 - $100,000",
      mid: "$100,000 - $140,000",
      senior: "$140,000 - $200,000+",
    },
    demand: "Very High",
    growthOutlook: "Excellent",
    learningPath: [
      "Learn Linux fundamentals and shell scripting",
      "Master version control with Git",
      "Study containerization (Docker) and orchestration (Kubernetes)",
      "Learn infrastructure as code (Terraform, CloudFormation)",
      "Understand CI/CD principles and tools",
      "Study cloud platforms (AWS, Azure, or GCP)",
      "Learn monitoring and observability practices",
    ],
    resources: [
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" },
      { name: "Linux Academy", url: "https://linuxacademy.com/" },
      { name: "Kubernetes Documentation", url: "https://kubernetes.io/docs/home/" },
      { name: "Terraform Documentation", url: "https://www.terraform.io/docs" },
      { name: "The DevOps Handbook (book)", url: "https://itrevolution.com/book/the-devops-handbook/" },
    ],
    certifications: [
      "AWS Certified DevOps Engineer - Professional",
      "Certified Kubernetes Administrator (CKA)",
      "Microsoft Certified: DevOps Engineer Expert",
      "Google Professional Cloud DevOps Engineer",
      "Docker Certified Associate",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Developer",
    description:
      "Mobile Developers create applications for mobile devices like smartphones and tablets, focusing on iOS, Android, or cross-platform development.",
    responsibilities: [
      "Design and build advanced applications for iOS or Android platforms",
      "Ensure the performance, quality, and responsiveness of applications",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Identify and fix bugs and performance bottlenecks",
      "Continuously discover, evaluate, and implement new technologies",
    ],
    androidSkills: ["Java", "Kotlin", "Android SDK", "Android Studio", "Material Design", "Jetpack Compose"],
    iosSkills: ["Swift", "Objective-C", "Xcode", "UIKit", "SwiftUI", "Core Data"],
    crossPlatformSkills: ["React Native", "Flutter", "Xamarin", "Ionic", "Capacitor"],
    generalSkills: [
      "Mobile UI/UX Design",
      "RESTful APIs",
      "Local Data Storage",
      "Push Notifications",
      "App Store Optimization",
    ],
    salary: {
      entry: "$70,000 - $90,000",
      mid: "$90,000 - $130,000",
      senior: "$130,000 - $170,000+",
    },
    demand: "High",
    growthOutlook: "Strong",
    learningPath: [
      "Choose a platform (iOS, Android, or cross-platform)",
      "Learn the primary language for your chosen platform",
      "Master the platform-specific development environment",
      "Study mobile UI/UX design principles",
      "Learn how to work with APIs and local data storage",
      "Build a portfolio of mobile applications",
      "Understand app store submission processes",
    ],
    resources: [
      { name: "Android Developers", url: "https://developer.android.com/" },
      { name: "Apple Developer", url: "https://developer.apple.com/" },
      { name: "React Native Documentation", url: "https://reactnative.dev/docs/getting-started" },
      { name: "Flutter Documentation", url: "https://flutter.dev/docs" },
      { name: "Udacity Mobile Development Courses", url: "https://www.udacity.com/courses/all?search=mobile" },
    ],
    certifications: [
      "Google Associate Android Developer",
      "App Development with Swift Certification",
      "React Native Certification",
      "Flutter Development Bootcamp",
      "Xamarin Certified Mobile Professional",
    ],
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    description:
      "Software Engineers design, develop, and maintain software systems using engineering principles and best practices. They work across the entire software development lifecycle.",
    responsibilities: [
      "Design and implement software solutions to solve complex problems",
      "Write clean, efficient, and maintainable code",
      "Collaborate with cross-functional teams on software architecture",
      "Review code and provide technical guidance",
      "Debug and fix software issues",
      "Implement automated testing strategies",
    ],
    programmingSkills: ["Java", "Python", "C++", "C#", "JavaScript", "Go", "Rust", "TypeScript"],
    engineeringSkills: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "Design Patterns",
      "Software Architecture",
      "OOP/Functional Programming",
    ],
    toolingSkills: ["Git", "CI/CD", "Testing Frameworks", "Debugging Tools", "IDEs", "Build Systems"],
    softSkills: ["Problem Solving", "Technical Communication", "Teamwork", "Time Management", "Continuous Learning"],
    salary: {
      entry: "$75,000 - $100,000",
      mid: "$100,000 - $150,000",
      senior: "$150,000 - $200,000+",
    },
    demand: "Very High",
    growthOutlook: "Excellent",
    learningPath: [
      "Master a primary programming language",
      "Study computer science fundamentals (data structures, algorithms)",
      "Learn software design principles and patterns",
      "Understand testing methodologies",
      "Study system design and architecture",
      "Build complex software projects",
      "Practice problem-solving and coding challenges",
    ],
    resources: [
      { name: "LeetCode", url: "https://leetcode.com/" },
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      {
        name: "Clean Code (book)",
        url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
      },
      { name: "Design Patterns (book)", url: "https://refactoring.guru/design-patterns" },
      { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/" },
    ],
    certifications: [
      "AWS Certified Developer - Associate",
      "Microsoft Certified: Azure Developer Associate",
      "Oracle Certified Professional, Java SE Programmer",
      "Google Associate Cloud Engineer",
      "Certified Software Development Professional (CSDP)",
    ],
  },
]

// General career advice for other fields
const generalCareers = [
  {
    keywords: ["data", "analyst", "science", "analytics", "machine learning", "ai"],
    title: "Data Science",
    advice:
      "Data science and analytics are in high demand. You should focus on skills like SQL, Python, data visualization tools, and statistics. Consider getting certified in tools like Tableau or Power BI and building a portfolio of data projects.",
    skills: ["Python", "SQL", "Statistics", "Tableau", "Machine Learning"],
    resources: ["Kaggle", "DataCamp", "Coursera", "edX", "Fast.ai"],
  },
  {
    keywords: ["design", "ux", "ui", "user experience", "graphic"],
    title: "UX/UI Design",
    advice:
      "UX/UI design is crucial for modern products. Focus on learning design tools like Figma or Adobe XD, understanding user research methods, and creating a strong portfolio showing your design process and solutions.",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    resources: ["Dribbble", "Behance", "Nielsen Norman Group", "Interaction Design Foundation", "UX Collective"],
  },
  {
    keywords: ["marketing", "digital", "seo", "content", "social media"],
    title: "Digital Marketing",
    advice:
      "Digital marketing continues to evolve with new platforms and technologies. Focus on developing skills in SEO, content marketing, social media management, and analytics. Consider getting Google Analytics and Google Ads certifications.",
    skills: ["SEO", "Content Marketing", "Social Media", "Analytics", "Email Marketing"],
    resources: ["HubSpot Academy", "Google Digital Garage", "Moz", "Content Marketing Institute", "Hootsuite Academy"],
  },
  {
    keywords: ["project", "management", "agile", "scrum", "product"],
    title: "Project Management",
    advice:
      "Project management is essential across industries. Consider certifications like PMP or Scrum Master. Develop skills in team leadership, stakeholder management, and project planning tools.",
    skills: ["Agile", "Scrum", "Stakeholder Management", "Risk Management", "Budgeting"],
    resources: ["PMI", "Scrum.org", "Atlassian", "LinkedIn Learning", "Coursera"],
  },
]

// Default advice for when no keywords match
const defaultAdvice = {
  title: "Career Development",
  advice:
    "To advance in your career, focus on both technical skills specific to your field and soft skills like communication and problem-solving. Networking, continuous learning, and finding mentors are also important strategies for career growth.",
  skills: ["Communication", "Problem Solving", "Networking", "Time Management", "Leadership"],
  resources: ["LinkedIn Learning", "Coursera", "edX", "Industry Conferences", "Professional Associations"],
}

export default function StandaloneCareerAdvisor() {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<null | {
    title: string
    advice?: string
    skills?: string[]
    resources?: string[]
  }>(null)
  const [selectedCareer, setSelectedCareer] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      const lowerQuery = query.toLowerCase()

      // Check for tech career matches first
      const techMatch = techCareers.find(
        (career) => lowerQuery.includes(career.id) || lowerQuery.includes(career.title.toLowerCase()),
      )

      if (techMatch) {
        setSelectedCareer(techMatch)
        setResult({
          title: techMatch.title,
        })
        setActiveTab("overview")
        setIsLoading(false)
        return
      }

      // Find matching general career advice
      const matchedAdvice =
        generalCareers.find((advice) => advice.keywords.some((keyword) => lowerQuery.includes(keyword))) ||
        defaultAdvice

      setSelectedCareer(null)
      setResult(matchedAdvice)
      setIsLoading(false)
    }, 1000) // Simulate 1 second delay
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Career Advisor</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Ask about career paths like 'full stack developer' or 'software engineer'..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading || !query.trim()} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
            ) : (
              "Get Career Advice"
            )}
          </Button>
        </form>

        {result && !selectedCareer && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold">{result.title}</h3>
              <p className="mt-2 text-muted-foreground">{result.advice}</p>
            </div>

            {result.skills && (
              <div>
                <h4 className="font-semibold mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {result.resources && (
              <div>
                <h4 className="font-semibold mb-2">Recommended Resources:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {result.resources.map((resource, index) => (
                    <li key={index}>{resource}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {selectedCareer && (
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-4">{selectedCareer.title}</h3>
            <p className="mb-6 text-muted-foreground">{selectedCareer.description}</p>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="learning">Learning Path</TabsTrigger>
                <TabsTrigger value="salary">Salary & Demand</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedCareer.responsibilities.map((resp: string, index: number) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Career Outlook:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <span className="font-medium">Demand:</span> {selectedCareer.demand}
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <span className="font-medium">Growth:</span> {selectedCareer.growthOutlook}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-4">
                {selectedCareer.frontendSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Frontend Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.frontendSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.backendSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Backend Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.backendSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.databaseSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Database Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.databaseSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.devOpsSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">DevOps Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.devOpsSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.coreSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Core Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.coreSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.frameworkSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Framework Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.frameworkSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.programmingSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Programming Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.programmingSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.engineeringSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Engineering Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.engineeringSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCareer.softSkills && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Soft Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCareer.softSkills.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="learning" className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Learning Path:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    {selectedCareer.learningPath.map((step: string, index: number) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Recommended Resources:</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedCareer.resources.map((resource: { name: string; url: string }, index: number) => (
                      <li key={index}>{resource.name}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Relevant Certifications:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedCareer.certifications.map((cert: string, index: number) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="salary" className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Salary Ranges (US):</h4>
                  <div className="space-y-3">
                    <div className="bg-muted p-3 rounded-lg">
                      <span className="font-medium">Entry Level:</span> {selectedCareer.salary.entry}
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <span className="font-medium">Mid Level:</span> {selectedCareer.salary.mid}
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <span className="font-medium">Senior Level:</span> {selectedCareer.salary.senior}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Note: Salary ranges vary by location, company size, and experience level.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Market Demand:</h4>
                  <p>
                    <span className="font-medium">Current Demand:</span> {selectedCareer.demand}
                  </p>
                  <p>
                    <span className="font-medium">Growth Outlook:</span> {selectedCareer.growthOutlook}
                  </p>
                  <p className="mt-2">
                    {selectedCareer.title} roles are in {selectedCareer.demand.toLowerCase()} demand across the tech
                    industry, with {selectedCareer.growthOutlook.toLowerCase()} projected growth over the next 5-10
                    years.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
