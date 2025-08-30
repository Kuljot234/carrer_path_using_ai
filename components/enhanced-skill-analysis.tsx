"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, Code, BarChartIcon as ChartBar, Brain, Server, Globe } from "lucide-react"

// Define the career skill data structure
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

interface Skill {
  name: string
  description: string
  importance: number
  timeToLearn: string
  level: SkillLevel
  resources: {
    title: string
    provider: string
    url: string
    type: string
  }[]
}

interface CareerSkillSet {
  title: string
  description: string
  icon: React.ReactNode
  coreSkills: Skill[]
  complementarySkills: Skill[]
  futureSkills: Skill[]
}

export default function EnhancedSkillAnalysis() {
  const [selectedCareer, setSelectedCareer] = useState<string>("data-scientist")

  // Career skill data
  const careerSkills: Record<string, CareerSkillSet> = {
    "data-scientist": {
      title: "Data Scientist",
      description:
        "Data scientists gather and analyze large sets of structured and unstructured data, using their expertise in statistics, mathematics, and programming to derive actionable insights.",
      icon: <ChartBar className="h-8 w-8 text-blue-600" />,
      coreSkills: [
        {
          name: "Python Programming",
          description:
            "Python is the primary programming language for data science, used for data manipulation, analysis, and machine learning model development.",
          importance: 95,
          timeToLearn: "3-6 months",
          level: "Advanced",
          resources: [
            {
              title: "Python for Data Science and Machine Learning Bootcamp",
              provider: "Udemy",
              url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
              type: "Course",
            },
            {
              title: "Python Data Science Handbook",
              provider: "O'Reilly",
              url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
              type: "Book",
            },
          ],
        },
        {
          name: "Statistics & Mathematics",
          description:
            "Strong foundation in statistics, probability, linear algebra, and calculus is essential for understanding machine learning algorithms and data analysis techniques.",
          importance: 90,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Statistics with Python Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/statistics-with-python",
              type: "Course",
            },
            {
              title: "Mathematics for Machine Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/mathematics-machine-learning",
              type: "Course",
            },
          ],
        },
        {
          name: "Machine Learning",
          description:
            "Understanding of machine learning algorithms, model evaluation, and implementation using libraries like scikit-learn, TensorFlow, or PyTorch.",
          importance: 90,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Machine Learning by Andrew Ng",
              provider: "Coursera",
              url: "https://www.coursera.org/learn/machine-learning",
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
          name: "SQL & Database Knowledge",
          description:
            "Ability to extract and manipulate data from relational databases using SQL queries and understand database design principles.",
          importance: 85,
          timeToLearn: "2-4 months",
          level: "Intermediate",
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
          description:
            "Skills in creating clear, informative visualizations using libraries like Matplotlib, Seaborn, or tools like Tableau to communicate insights effectively.",
          importance: 80,
          timeToLearn: "2-3 months",
          level: "Intermediate",
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
      complementarySkills: [
        {
          name: "Big Data Technologies",
          description:
            "Knowledge of big data frameworks like Hadoop, Spark, and distributed computing concepts for processing large datasets.",
          importance: 75,
          timeToLearn: "3-6 months",
          level: "Intermediate",
          resources: [
            {
              title: "Big Data Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/big-data",
              type: "Course",
            },
            {
              title: "Learning Spark",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/",
              type: "Book",
            },
          ],
        },
        {
          name: "Cloud Computing",
          description:
            "Experience with cloud platforms (AWS, Azure, GCP) for deploying machine learning models and data processing pipelines.",
          importance: 70,
          timeToLearn: "2-4 months",
          level: "Intermediate",
          resources: [
            {
              title: "AWS Machine Learning",
              provider: "Amazon",
              url: "https://aws.amazon.com/training/learn-about/machine-learning/",
              type: "Course",
            },
            {
              title: "Google Cloud Platform for Machine Learning",
              provider: "Google",
              url: "https://cloud.google.com/training/machinelearning-ai",
              type: "Course",
            },
          ],
        },
        {
          name: "Domain Knowledge",
          description:
            "Understanding of the specific industry or field where data science is being applied, such as finance, healthcare, or marketing.",
          importance: 75,
          timeToLearn: "3-12 months",
          level: "Intermediate",
          resources: [
            {
              title: "Industry-specific courses",
              provider: "Various",
              url: "https://www.coursera.org/browse/business",
              type: "Courses",
            },
            {
              title: "Industry publications and journals",
              provider: "Various",
              url: "https://medium.com/towards-data-science",
              type: "Articles",
            },
          ],
        },
      ],
      futureSkills: [
        {
          name: "Deep Learning",
          description:
            "Advanced neural network architectures and techniques for complex problems in computer vision, natural language processing, and more.",
          importance: 85,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Deep Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/deep-learning",
              type: "Course",
            },
            {
              title: "Deep Learning with Python",
              provider: "Manning",
              url: "https://www.manning.com/books/deep-learning-with-python-second-edition",
              type: "Book",
            },
          ],
        },
        {
          name: "MLOps",
          description:
            "Practices for deploying, monitoring, and maintaining machine learning models in production environments.",
          importance: 80,
          timeToLearn: "3-6 months",
          level: "Advanced",
          resources: [
            {
              title: "Machine Learning Engineering for Production (MLOps)",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
              type: "Course",
            },
            {
              title: "Building Machine Learning Pipelines",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/building-machine-learning/9781492053187/",
              type: "Book",
            },
          ],
        },
        {
          name: "Reinforcement Learning",
          description:
            "Techniques for training agents to make sequences of decisions through trial and error and reward mechanisms.",
          importance: 70,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Reinforcement Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/reinforcement-learning",
              type: "Course",
            },
            {
              title: "Reinforcement Learning: An Introduction",
              provider: "MIT Press",
              url: "http://incompleteideas.net/book/the-book-2nd.html",
              type: "Book",
            },
          ],
        },
      ],
    },
    "full-stack-developer": {
      title: "Full Stack Developer",
      description:
        "Full stack developers work with both the front and back ends of a website or application, handling everything from user interfaces to server logic and databases.",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      coreSkills: [
        {
          name: "HTML/CSS",
          description:
            "Fundamental web technologies for creating and styling web pages, including responsive design principles and CSS frameworks.",
          importance: 90,
          timeToLearn: "1-3 months",
          level: "Advanced",
          resources: [
            {
              title: "The Complete Web Developer Course",
              provider: "Udemy",
              url: "https://www.udemy.com/course/the-complete-web-developer-course-2/",
              type: "Course",
            },
            {
              title: "MDN Web Docs",
              provider: "Mozilla",
              url: "https://developer.mozilla.org/en-US/docs/Web",
              type: "Documentation",
            },
          ],
        },
        {
          name: "JavaScript",
          description:
            "Core programming language for web development, essential for creating interactive websites and applications.",
          importance: 95,
          timeToLearn: "3-6 months",
          level: "Advanced",
          resources: [
            {
              title: "JavaScript: The Definitive Guide",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/",
              type: "Book",
            },
            {
              title: "JavaScript30",
              provider: "Wes Bos",
              url: "https://javascript30.com/",
              type: "Course",
            },
          ],
        },
        {
          name: "Frontend Framework",
          description:
            "Proficiency in at least one modern JavaScript framework like React, Angular, or Vue for building complex user interfaces.",
          importance: 90,
          timeToLearn: "2-4 months",
          level: "Advanced",
          resources: [
            {
              title: "React - The Complete Guide",
              provider: "Udemy",
              url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
              type: "Course",
            },
            {
              title: "Next.js Documentation",
              provider: "Vercel",
              url: "https://nextjs.org/docs",
              type: "Documentation",
            },
          ],
        },
        {
          name: "Backend Language",
          description:
            "Proficiency in at least one server-side language such as Node.js, Python, Ruby, Java, or PHP for building application logic.",
          importance: 90,
          timeToLearn: "3-6 months",
          level: "Advanced",
          resources: [
            {
              title: "The Complete Node.js Developer Course",
              provider: "Udemy",
              url: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
              type: "Course",
            },
            {
              title: "Express.js Documentation",
              provider: "Express",
              url: "https://expressjs.com/",
              type: "Documentation",
            },
          ],
        },
        {
          name: "Database Management",
          description:
            "Knowledge of database design, SQL or NoSQL databases, and data modeling for storing and retrieving application data.",
          importance: 85,
          timeToLearn: "2-4 months",
          level: "Intermediate",
          resources: [
            {
              title: "MongoDB - The Complete Developer's Guide",
              provider: "Udemy",
              url: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/",
              type: "Course",
            },
            {
              title: "SQL and PostgreSQL: The Complete Developer's Guide",
              provider: "Udemy",
              url: "https://www.udemy.com/course/sql-and-postgresql/",
              type: "Course",
            },
          ],
        },
      ],
      complementarySkills: [
        {
          name: "Version Control/Git",
          description: "Understanding of Git workflows, branching strategies, and collaborative development practices.",
          importance: 85,
          timeToLearn: "1-2 months",
          level: "Intermediate",
          resources: [
            {
              title: "Git & GitHub - The Complete Git & GitHub Course",
              provider: "Udemy",
              url: "https://www.udemy.com/course/git-github-the-complete-git-github-course/",
              type: "Course",
            },
            {
              title: "Pro Git Book",
              provider: "Git",
              url: "https://git-scm.com/book/en/v2",
              type: "Book",
            },
          ],
        },
        {
          name: "API Development",
          description:
            "Skills in designing and implementing RESTful or GraphQL APIs for communication between frontend and backend systems.",
          importance: 85,
          timeToLearn: "2-3 months",
          level: "Intermediate",
          resources: [
            {
              title: "REST API Design, Development & Management",
              provider: "Udemy",
              url: "https://www.udemy.com/course/rest-api/",
              type: "Course",
            },
            {
              title: "GraphQL: The Complete Developer's Guide",
              provider: "Udemy",
              url: "https://www.udemy.com/course/graphql-with-react-course/",
              type: "Course",
            },
          ],
        },
        {
          name: "Testing",
          description:
            "Knowledge of testing methodologies and frameworks for unit, integration, and end-to-end testing of applications.",
          importance: 80,
          timeToLearn: "2-3 months",
          level: "Intermediate",
          resources: [
            {
              title: "JavaScript Testing with Jest",
              provider: "Udemy",
              url: "https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/",
              type: "Course",
            },
            {
              title: "Testing JavaScript Applications",
              provider: "Manning",
              url: "https://www.manning.com/books/testing-javascript-applications",
              type: "Book",
            },
          ],
        },
      ],
      futureSkills: [
        {
          name: "DevOps & CI/CD",
          description:
            "Understanding of continuous integration, deployment pipelines, and infrastructure as code for automating application delivery.",
          importance: 75,
          timeToLearn: "3-6 months",
          level: "Intermediate",
          resources: [
            {
              title: "DevOps for Developers",
              provider: "Udemy",
              url: "https://www.udemy.com/course/devops-for-developers/",
              type: "Course",
            },
            {
              title: "GitHub Actions Documentation",
              provider: "GitHub",
              url: "https://docs.github.com/en/actions",
              type: "Documentation",
            },
          ],
        },
        {
          name: "Cloud Services",
          description:
            "Experience with cloud platforms like AWS, Azure, or Google Cloud for deploying and scaling applications.",
          importance: 80,
          timeToLearn: "3-6 months",
          level: "Intermediate",
          resources: [
            {
              title: "AWS Certified Developer - Associate",
              provider: "Amazon",
              url: "https://aws.amazon.com/certification/certified-developer-associate/",
              type: "Certification",
            },
            {
              title: "Serverless Framework Documentation",
              provider: "Serverless",
              url: "https://www.serverless.com/framework/docs/",
              type: "Documentation",
            },
          ],
        },
        {
          name: "Web Performance Optimization",
          description:
            "Techniques for improving application loading times, rendering performance, and overall user experience.",
          importance: 75,
          timeToLearn: "2-4 months",
          level: "Advanced",
          resources: [
            {
              title: "Web Performance Fundamentals",
              provider: "Frontend Masters",
              url: "https://frontendmasters.com/courses/web-performance/",
              type: "Course",
            },
            {
              title: "High Performance Browser Networking",
              provider: "O'Reilly",
              url: "https://hpbn.co/",
              type: "Book",
            },
          ],
        },
      ],
    },
    "ux-ui-designer": {
      title: "UX/UI Designer",
      description:
        "UX/UI designers create meaningful and relevant experiences for users, focusing on the look and feel of digital products and how users interact with them.",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      coreSkills: [
        {
          name: "User Research",
          description:
            "Methods for understanding user needs, behaviors, and motivations through interviews, surveys, and usability testing.",
          importance: 90,
          timeToLearn: "2-4 months",
          level: "Advanced",
          resources: [
            {
              title: "User Research Fundamentals",
              provider: "Interaction Design Foundation",
              url: "https://www.interaction-design.org/courses/user-research-methods-and-best-practices",
              type: "Course",
            },
            {
              title: "Just Enough Research",
              provider: "A Book Apart",
              url: "https://abookapart.com/products/just-enough-research",
              type: "Book",
            },
          ],
        },
        {
          name: "UI Design Tools",
          description:
            "Proficiency in design tools like Figma, Sketch, or Adobe XD for creating wireframes, mockups, and prototypes.",
          importance: 95,
          timeToLearn: "2-3 months",
          level: "Advanced",
          resources: [
            {
              title: "Figma UI/UX Design Essentials",
              provider: "Udemy",
              url: "https://www.udemy.com/course/figma-ux-ui-design-fundamentals/",
              type: "Course",
            },
            {
              title: "Figma Documentation",
              provider: "Figma",
              url: "https://help.figma.com/",
              type: "Documentation",
            },
          ],
        },
        {
          name: "Visual Design Principles",
          description:
            "Understanding of color theory, typography, layout, and visual hierarchy for creating aesthetically pleasing interfaces.",
          importance: 90,
          timeToLearn: "3-6 months",
          level: "Advanced",
          resources: [
            {
              title: "Graphic Design Fundamentals",
              provider: "Skillshare",
              url: "https://www.skillshare.com/classes/Graphic-Design-Basics-Core-Principles-for-Visual-Design/1539782027",
              type: "Course",
            },
            {
              title: "The Elements of Graphic Design",
              provider: "Amazon",
              url: "https://www.amazon.com/Elements-Graphic-Design-Second/dp/1581157622/",
              type: "Book",
            },
          ],
        },
        {
          name: "Interaction Design",
          description:
            "Skills in designing intuitive user flows, navigation patterns, and interactive elements that enhance user experience.",
          importance: 90,
          timeToLearn: "3-6 months",
          level: "Advanced",
          resources: [
            {
              title: "Interaction Design Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/interaction-design",
              type: "Course",
            },
            {
              title: "About Face: The Essentials of Interaction Design",
              provider: "Wiley",
              url: "https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576",
              type: "Book",
            },
          ],
        },
        {
          name: "Prototyping",
          description: "Creating interactive prototypes to test and validate design concepts before development.",
          importance: 85,
          timeToLearn: "1-3 months",
          level: "Intermediate",
          resources: [
            {
              title: "Prototyping for Designers",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/prototyping-for-designers/9781491954089/",
              type: "Book",
            },
            {
              title: "Rapid Prototyping for UX",
              provider: "LinkedIn Learning",
              url: "https://www.linkedin.com/learning/rapid-prototyping-for-ux",
              type: "Course",
            },
          ],
        },
      ],
      complementarySkills: [
        {
          name: "HTML/CSS Basics",
          description:
            "Understanding of web technologies to better collaborate with developers and create more feasible designs.",
          importance: 75,
          timeToLearn: "1-2 months",
          level: "Beginner",
          resources: [
            {
              title: "HTML & CSS for Designers",
              provider: "Codecademy",
              url: "https://www.codecademy.com/learn/learn-html-css",
              type: "Course",
            },
            {
              title: "HTML and CSS: Design and Build Websites",
              provider: "Amazon",
              url: "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/",
              type: "Book",
            },
          ],
        },
        {
          name: "Information Architecture",
          description:
            "Organizing and structuring content in a way that helps users find information and complete tasks efficiently.",
          importance: 80,
          timeToLearn: "2-3 months",
          level: "Intermediate",
          resources: [
            {
              title: "Information Architecture Fundamentals",
              provider: "Interaction Design Foundation",
              url: "https://www.interaction-design.org/courses/information-visualization",
              type: "Course",
            },
            {
              title: "Information Architecture: For the Web and Beyond",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/",
              type: "Book",
            },
          ],
        },
        {
          name: "Design Systems",
          description:
            "Creating and maintaining design systems to ensure consistency across products and streamline the design process.",
          importance: 80,
          timeToLearn: "2-4 months",
          level: "Intermediate",
          resources: [
            {
              title: "Design Systems: A Practical Guide",
              provider: "Smashing Magazine",
              url: "https://www.smashingmagazine.com/design-systems-book/",
              type: "Book",
            },
            {
              title: "Creating a Design System in Figma",
              provider: "Skillshare",
              url: "https://www.skillshare.com/classes/Design-Systems-in-Figma/1962045358",
              type: "Course",
            },
          ],
        },
      ],
      futureSkills: [
        {
          name: "Motion Design",
          description:
            "Creating meaningful animations and transitions that enhance user experience and provide visual feedback.",
          importance: 75,
          timeToLearn: "3-6 months",
          level: "Intermediate",
          resources: [
            {
              title: "Motion Design for UI",
              provider: "Udemy",
              url: "https://www.udemy.com/course/motion-design-for-ui/",
              type: "Course",
            },
            {
              title: "Animation at Work",
              provider: "A Book Apart",
              url: "https://abookapart.com/products/animation-at-work",
              type: "Book",
            },
          ],
        },
        {
          name: "Voice User Interface Design",
          description: "Designing conversational interfaces for voice assistants and audio-based interactions.",
          importance: 70,
          timeToLearn: "2-4 months",
          level: "Intermediate",
          resources: [
            {
              title: "Voice User Interface Design",
              provider: "Interaction Design Foundation",
              url: "https://www.interaction-design.org/courses/voice-user-interfaces",
              type: "Course",
            },
            {
              title: "Designing Voice User Interfaces",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/designing-voice-user/9781491955413/",
              type: "Book",
            },
          ],
        },
        {
          name: "Accessibility Design",
          description:
            "Creating inclusive designs that can be used by people with various disabilities and impairments.",
          importance: 85,
          timeToLearn: "2-3 months",
          level: "Intermediate",
          resources: [
            {
              title: "Accessibility for Web Design",
              provider: "LinkedIn Learning",
              url: "https://www.linkedin.com/learning/accessibility-for-web-design",
              type: "Course",
            },
            {
              title: "Inclusive Design Patterns",
              provider: "Smashing Magazine",
              url: "https://www.smashingmagazine.com/inclusive-design-patterns/",
              type: "Book",
            },
          ],
        },
      ],
    },
    "ai-engineer": {
      title: "AI Engineer",
      description:
        "AI Engineers design, build, and deploy artificial intelligence systems and models that can perform tasks requiring human intelligence.",
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      coreSkills: [
        {
          name: "Machine Learning",
          description:
            "Understanding of machine learning algorithms, model training, evaluation metrics, and implementation using libraries like scikit-learn.",
          importance: 95,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Machine Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/machine-learning-introduction",
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
          name: "Deep Learning",
          description:
            "Knowledge of neural network architectures, training techniques, and frameworks like TensorFlow or PyTorch.",
          importance: 90,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Deep Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/deep-learning",
              type: "Course",
            },
            {
              title: "Deep Learning with Python",
              provider: "Manning",
              url: "https://www.manning.com/books/deep-learning-with-python-second-edition",
              type: "Book",
            },
          ],
        },
        {
          name: "Python Programming",
          description:
            "Advanced Python skills for implementing AI algorithms, data processing, and building machine learning pipelines.",
          importance: 90,
          timeToLearn: "3-6 months",
          level: "Advanced",
          resources: [
            {
              title: "Python for Data Science and Machine Learning Bootcamp",
              provider: "Udemy",
              url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
              type: "Course",
            },
            {
              title: "Fluent Python",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/",
              type: "Book",
            },
          ],
        },
        {
          name: "Mathematics & Statistics",
          description:
            "Strong foundation in linear algebra, calculus, probability, and statistics for understanding AI algorithms.",
          importance: 85,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Mathematics for Machine Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/mathematics-machine-learning",
              type: "Course",
            },
            {
              title: "Statistics with Python Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/statistics-with-python",
              type: "Course",
            },
          ],
        },
        {
          name: "Natural Language Processing",
          description:
            "Techniques for processing and analyzing human language data, including text classification, sentiment analysis, and language generation.",
          importance: 85,
          timeToLearn: "4-8 months",
          level: "Advanced",
          resources: [
            {
              title: "Natural Language Processing Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/natural-language-processing",
              type: "Course",
            },
            {
              title: "Natural Language Processing with Transformers",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/natural-language-processing/9781098103231/",
              type: "Book",
            },
          ],
        },
      ],
      complementarySkills: [
        {
          name: "MLOps",
          description:
            "Practices for deploying, monitoring, and maintaining machine learning models in production environments.",
          importance: 80,
          timeToLearn: "3-6 months",
          level: "Intermediate",
          resources: [
            {
              title: "Machine Learning Engineering for Production (MLOps)",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
              type: "Course",
            },
            {
              title: "Building Machine Learning Pipelines",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/building-machine-learning/9781492053187/",
              type: "Book",
            },
          ],
        },
        {
          name: "Cloud AI Services",
          description:
            "Experience with AI and ML services provided by cloud platforms like AWS, Azure, or Google Cloud.",
          importance: 75,
          timeToLearn: "2-4 months",
          level: "Intermediate",
          resources: [
            {
              title: "AWS Machine Learning",
              provider: "Amazon",
              url: "https://aws.amazon.com/training/learn-about/machine-learning/",
              type: "Course",
            },
            {
              title: "Azure AI Fundamentals",
              provider: "Microsoft",
              url: "https://learn.microsoft.com/en-us/training/paths/azure-ai-fundamentals-training/",
              type: "Course",
            },
          ],
        },
        {
          name: "Data Engineering",
          description:
            "Skills in data pipeline development, ETL processes, and data storage solutions for AI applications.",
          importance: 75,
          timeToLearn: "3-6 months",
          level: "Intermediate",
          resources: [
            {
              title: "Data Engineering with Python",
              provider: "Packt",
              url: "https://www.packtpub.com/product/data-engineering-with-python/9781839214189",
              type: "Book",
            },
            {
              title: "Data Engineering, Big Data, and Machine Learning on GCP",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/gcp-data-machine-learning",
              type: "Course",
            },
          ],
        },
      ],
      futureSkills: [
        {
          name: "Reinforcement Learning",
          description:
            "Techniques for training agents to make sequences of decisions through trial and error and reward mechanisms.",
          importance: 75,
          timeToLearn: "6-12 months",
          level: "Advanced",
          resources: [
            {
              title: "Reinforcement Learning Specialization",
              provider: "Coursera",
              url: "https://www.coursera.org/specializations/reinforcement-learning",
              type: "Course",
            },
            {
              title: "Reinforcement Learning: An Introduction",
              provider: "MIT Press",
              url: "http://incompleteideas.net/book/the-book-2nd.html",
              type: "Book",
            },
          ],
        },
        {
          name: "AI Ethics & Responsible AI",
          description:
            "Understanding of ethical considerations, bias mitigation, and responsible AI development practices.",
          importance: 80,
          timeToLearn: "2-4 months",
          level: "Intermediate",
          resources: [
            {
              title: "AI Ethics: Global Perspectives",
              provider: "edX",
              url: "https://www.edx.org/course/ai-ethics-global-perspectives",
              type: "Course",
            },
            {
              title: "Practical Artificial Intelligence Ethics",
              provider: "Manning",
              url: "https://www.manning.com/books/practical-artificial-intelligence-ethics",
              type: "Book",
            },
          ],
        },
        {
          name: "Generative AI",
          description:
            "Techniques for creating AI systems that can generate new content, such as images, text, or music.",
          importance: 85,
          timeToLearn: "4-8 months",
          level: "Advanced",
          resources: [
            {
              title: "Generative Deep Learning",
              provider: "O'Reilly",
              url: "https://www.oreilly.com/library/view/generative-deep-learning/9781492041931/",
              type: "Book",
            },
            {
              title: "Generative AI with Python and TensorFlow",
              provider: "Packt",
              url: "https://www.packtpub.com/product/generative-ai-with-python-and-tensorflow-2/9781800200883",
              type: "Book",
            },
          ],
        },
      ],
    },
  }

  // Function to render skill card
  const renderSkillCard = (skill: Skill) => (
    <Card key={skill.name} className="hover:shadow-md transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium">{skill.name}</h4>
            <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
          </div>
          <Badge
            className={`${skill.importance >= 90 ? "bg-blue-600" : skill.importance >= 80 ? "bg-green-600" : "bg-amber-600"}`}
          >
            {skill.importance}%
          </Badge>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Importance</span>
            <span>{skill.level}</span>
          </div>
          <Progress value={skill.importance} className="h-2" />
        </div>

        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-between text-sm">
            <span>Estimated Learning Time:</span>
            <span className="font-medium">{skill.timeToLearn}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="text-sm font-medium">Learning Resources:</h5>
          <div className="space-y-3">
            {skill.resources.map((resource, i) => (
              <div key={i} className="flex flex-col text-sm p-3 bg-muted/50 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-medium">{resource.title}</span>
                    <p className="text-xs text-muted-foreground">
                      {resource.provider} • {resource.type}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Open resource</span>
                    </a>
                  </Button>
                </div>

                <div className="mt-2 text-xs">
                  <p>
                    {resource.type === "Course" &&
                      `This ${resource.provider} course offers a structured learning path for ${skill.name}, covering everything from fundamentals to advanced concepts. The curriculum includes video lectures, hands-on exercises, and real-world projects to reinforce your learning. You'll benefit from instructor guidance and a community of learners to support your journey.`}

                    {resource.type === "Book" &&
                      `This comprehensive book is widely regarded as an essential resource for mastering ${skill.name}. Written by industry experts, it provides in-depth explanations, practical examples, and best practices. The content is structured to build your knowledge progressively, making complex concepts accessible and applicable to real-world scenarios.`}

                    {resource.type === "Documentation" &&
                      `This official documentation serves as the definitive reference for ${skill.name}. It provides detailed explanations of all features, APIs, and implementation details. While more technical in nature, it's an invaluable resource for understanding the inner workings and capabilities of the technology.`}

                    {resource.type === "Tutorial" &&
                      `This step-by-step tutorial guides you through practical applications of ${skill.name}. It focuses on hands-on learning with clear examples and exercises that reinforce key concepts. Ideal for visual learners who prefer a project-based approach to mastering new skills.`}

                    {!["Course", "Book", "Documentation", "Tutorial"].includes(resource.type) &&
                      `This ${resource.type.toLowerCase()} provides valuable insights and practical knowledge about ${skill.name}. It's designed to help you develop proficiency through a combination of theoretical understanding and practical application, with content created by industry professionals.`}
                  </p>

                  <p className="mt-2 text-muted-foreground">
                    Recommended for:{" "}
                    {skill.level === "Beginner"
                      ? "Those new to the subject with no prior experience"
                      : skill.level === "Intermediate"
                        ? "Learners with basic understanding seeking to deepen their knowledge"
                        : "Advanced practitioners looking to master complex concepts and techniques"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Career Paths</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {Object.entries(careerSkills).map(([key, career]) => (
                  <Button
                    key={key}
                    variant="ghost"
                    className={`w-full justify-start rounded-none px-4 py-6 h-auto ${
                      selectedCareer === key ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedCareer(key)}
                  >
                    <div className="flex items-center">
                      {career.icon}
                      <span className="ml-3">{career.title}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-3/4 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                {careerSkills[selectedCareer].icon}
                <div>
                  <CardTitle>{careerSkills[selectedCareer].title}</CardTitle>
                  <p className="text-muted-foreground mt-1">{careerSkills[selectedCareer].description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Tabs defaultValue="core-skills">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="core-skills">
                <BookOpen className="h-4 w-4 mr-2" />
                Core Skills
              </TabsTrigger>
              <TabsTrigger value="complementary-skills">
                <Server className="h-4 w-4 mr-2" />
                Complementary Skills
              </TabsTrigger>
              <TabsTrigger value="future-skills">
                <Brain className="h-4 w-4 mr-2" />
                Future Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="core-skills" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                {careerSkills[selectedCareer].coreSkills.map(renderSkillCard)}
              </div>
            </TabsContent>

            <TabsContent value="complementary-skills" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                {careerSkills[selectedCareer].complementarySkills.map(renderSkillCard)}
              </div>
            </TabsContent>

            <TabsContent value="future-skills" className="mt-6">
              <div className="grid grid-cols-1 gap-6">
                {careerSkills[selectedCareer].futureSkills.map(renderSkillCard)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
