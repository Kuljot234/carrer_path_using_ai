import { type NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const { message, chatHistory } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "No message provided" }, { status: 400 })
    }

    // Simulate the Hugging Face model response with career-focused content
    const careerResponses = {
      "full stack": `As a Full Stack Developer, you'll work on both frontend and backend technologies. Key skills include:

**Frontend:** React, Vue.js, Angular, HTML/CSS, JavaScript/TypeScript
**Backend:** Node.js, Python, Java, databases (SQL/NoSQL)
**Tools:** Git, Docker, CI/CD pipelines

**Career Path:**
1. Learn HTML, CSS, JavaScript fundamentals
2. Master a frontend framework (React recommended)
3. Learn backend development (Node.js or Python)
4. Study database design and management
5. Build full-stack projects for your portfolio

**Salary Range:** $70,000 - $180,000+ depending on experience level.`,

      "software developer": `Software Development is a broad field with excellent career prospects. Here's what you need to know:

**Core Skills:**
- Programming languages (Python, Java, JavaScript, C++)
- Data structures and algorithms
- Software design patterns
- Version control (Git)
- Testing methodologies

**Specializations:**
- Web Development
- Mobile Development
- Desktop Applications
- Game Development
- System Programming

**Learning Path:**
1. Choose a primary programming language
2. Master computer science fundamentals
3. Build projects to showcase your skills
4. Learn software engineering best practices
5. Contribute to open source projects

**Job Market:** Very high demand with excellent growth prospects.`,

      frontend: `Frontend Development focuses on user interfaces and user experience. Here's your roadmap:

**Essential Skills:**
- HTML5, CSS3, JavaScript (ES6+)
- Responsive design principles
- Frontend frameworks (React, Vue, Angular)
- CSS preprocessors (Sass, Less)
- Build tools (Webpack, Vite)

**Advanced Skills:**
- TypeScript
- State management (Redux, Context API)
- Testing (Jest, Cypress)
- Performance optimization
- Web accessibility (WCAG)

**Career Progression:**
Junior → Mid-level → Senior → Lead → Principal/Architect

**Salary:** $65,000 - $160,000+ based on experience and location.`,

      backend: `Backend Development powers the server-side of applications. Here's what you need:

**Core Technologies:**
- Server languages (Node.js, Python, Java, Go)
- Databases (PostgreSQL, MongoDB, Redis)
- API design (REST, GraphQL)
- Cloud platforms (AWS, Azure, GCP)
- Containerization (Docker, Kubernetes)

**Key Concepts:**
- System design and architecture
- Database optimization
- Security best practices
- Scalability and performance
- Microservices architecture

**Learning Steps:**
1. Master a backend language
2. Learn database design
3. Understand API development
4. Study system design principles
5. Practice with cloud platforms

**Market Demand:** Very high with excellent compensation.`,

      devops: `DevOps Engineering bridges development and operations. Here's your guide:

**Core Skills:**
- Linux/Unix systems
- Cloud platforms (AWS, Azure, GCP)
- Containerization (Docker, Kubernetes)
- Infrastructure as Code (Terraform, CloudFormation)
- CI/CD pipelines (Jenkins, GitHub Actions)

**Monitoring & Observability:**
- Prometheus, Grafana
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Application monitoring tools

**Career Path:**
1. Learn Linux fundamentals
2. Master cloud platforms
3. Study containerization
4. Learn infrastructure automation
5. Understand monitoring and logging

**Salary Range:** $80,000 - $200,000+ with high demand across industries.`,

      mobile: `Mobile Development offers great opportunities in iOS and Android platforms:

**iOS Development:**
- Swift programming language
- Xcode IDE
- UIKit and SwiftUI frameworks
- Core Data for data persistence
- App Store guidelines

**Android Development:**
- Kotlin (preferred) or Java
- Android Studio IDE
- Jetpack Compose for UI
- Room database
- Google Play Store policies

**Cross-Platform:**
- React Native
- Flutter
- Xamarin

**Learning Path:**
1. Choose platform (iOS, Android, or cross-platform)
2. Learn platform-specific language
3. Master development tools
4. Study mobile UI/UX principles
5. Build and publish apps

**Market:** Strong demand with good compensation potential.`,
    }

    // Find the most relevant response based on keywords
    const lowerMessage = message.toLowerCase()
    let response = ""

    if (lowerMessage.includes("full stack") || lowerMessage.includes("fullstack")) {
      response = careerResponses["full stack"]
    } else if (lowerMessage.includes("software developer") || lowerMessage.includes("software engineer")) {
      response = careerResponses["software developer"]
    } else if (lowerMessage.includes("frontend") || lowerMessage.includes("front-end")) {
      response = careerResponses["frontend"]
    } else if (lowerMessage.includes("backend") || lowerMessage.includes("back-end")) {
      response = careerResponses["backend"]
    } else if (lowerMessage.includes("devops") || lowerMessage.includes("dev ops")) {
      response = careerResponses["devops"]
    } else if (lowerMessage.includes("mobile") || lowerMessage.includes("ios") || lowerMessage.includes("android")) {
      response = careerResponses["mobile"]
    } else {
      // Default career advice response
      response = `I'm here to help with your career questions! I can provide detailed information about:

🔹 **Full Stack Development** - Frontend + Backend skills
🔹 **Software Engineering** - Programming and system design
🔹 **Frontend Development** - UI/UX and web technologies
🔹 **Backend Development** - Server-side and databases
🔹 **DevOps Engineering** - Infrastructure and automation
🔹 **Mobile Development** - iOS, Android, and cross-platform

Ask me about any of these career paths, including:
- Required skills and technologies
- Learning roadmaps and resources
- Salary expectations and job market
- Career progression paths
- Certification recommendations

What specific career area would you like to explore?`
    }

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      response,
      model: "career-advisor-v1",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error in Hugging Face chat API:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
