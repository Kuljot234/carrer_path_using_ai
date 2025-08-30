import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Career Path AI - Blog",
  description: "Latest insights, tips, and resources for career development and skill enhancement",
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Career Insights Blog</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Discover the latest trends, tips, and expert advice to help you navigate your career journey.
        </p>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="career-advice">Career Advice</TabsTrigger>
            <TabsTrigger value="skill-development">Skill Development</TabsTrigger>
            <TabsTrigger value="industry-trends">Industry Trends</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="career-advice" className="space-y-8">
            {blogPosts
              .filter((post) => post.category === "Career Advice")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </TabsContent>

          <TabsContent value="skill-development" className="space-y-8">
            {blogPosts
              .filter((post) => post.category === "Skill Development")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </TabsContent>

          <TabsContent value="industry-trends" className="space-y-8">
            {blogPosts
              .filter((post) => post.category === "Industry Trends")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-8">
            {blogPosts
              .filter((post) => post.category === "AI Insights")
              .map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
}

interface BlogPostCardProps {
  post: BlogPost
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="md:flex">
        <div className="md:w-1/3 h-60 md:h-auto bg-muted relative overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
          </div>
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span className="flex items-center gap-1">
                <CalendarIcon className="h-3 w-3" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
            </div>
            <CardTitle className="text-2xl hover:text-primary transition-colors">
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </CardTitle>
            <CardDescription className="text-base">{post.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3">{post.content.substring(0, 200)}...</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">{post.author}</span>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href={`/blog/${post.id}`}>Read More</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

const blogPosts: BlogPost[] = [
  {
    id: "navigating-career-transitions",
    title: "Navigating Career Transitions: A Comprehensive Guide",
    excerpt: "Learn how to successfully transition to a new career with our step-by-step approach.",
    content: `Career transitions can be both exciting and daunting. Whether you're looking to pivot to a completely new industry or advance within your current field, the process requires careful planning and execution.

    The first step in any successful career transition is self-assessment. Take time to reflect on your skills, values, interests, and long-term goals. Understanding what truly motivates you will help ensure that your next career move aligns with your personal and professional aspirations.

    Research is crucial when considering a career change. Explore industry trends, job market demands, and required qualifications for your target role. Informational interviews with professionals already working in your desired field can provide valuable insights and help you build a network.

    Skill development is often necessary when transitioning careers. Identify the gap between your current skills and those required for your target role. This might involve formal education, certifications, online courses, or hands-on experience through volunteering or side projects.

    Your resume and online presence should be updated to highlight transferable skills and relevant experiences. Focus on achievements and competencies that demonstrate your potential value in the new role, even if your experience comes from a different industry.

    Networking plays a critical role in career transitions. Attend industry events, join professional associations, and leverage social media platforms like LinkedIn to connect with professionals in your target field. Many opportunities come through personal connections rather than formal job applications.

    Be prepared for challenges during your transition. You might need to start at a lower level or accept a temporary reduction in salary. View these as investments in your long-term career satisfaction and growth potential.

    Finally, maintain resilience and patience throughout the process. Career transitions rarely happen overnight, and setbacks are normal. Stay focused on your goals, celebrate small wins, and remain adaptable as you navigate your path forward.`,
    author: "Dr. Sarah Johnson",
    date: "April 10, 2023",
    readTime: "8 min read",
    category: "Career Advice",
    tags: ["career transition", "professional development", "job search"],
    image: "/placeholder.svg?height=400&width=600&text=Career+Transitions",
  },
  {
    id: "mastering-in-demand-tech-skills",
    title: "Mastering In-Demand Tech Skills for 2023 and Beyond",
    excerpt: "Discover which technical skills are most valued by employers and how to acquire them efficiently.",
    content: `The technology landscape continues to evolve at a rapid pace, creating both challenges and opportunities for professionals looking to advance their careers. Staying relevant requires continuous learning and adaptation to emerging trends.

    Artificial Intelligence and Machine Learning remain at the forefront of in-demand skills. Professionals with expertise in these areas are highly sought after across industries. Beyond theoretical knowledge, employers value practical experience with frameworks like TensorFlow, PyTorch, and scikit-learn.

    Cloud computing skills continue to be essential as more organizations migrate their infrastructure to platforms like AWS, Azure, and Google Cloud. Understanding cloud architecture, security, and deployment strategies is valuable for both technical and non-technical roles.

    Cybersecurity has become a critical priority for organizations of all sizes. Skills in threat detection, vulnerability assessment, and security protocols are in high demand, with a significant shortage of qualified professionals in the market.

    Data analysis and visualization capabilities are increasingly important across roles. Proficiency with tools like Python, R, SQL, Tableau, and Power BI allows professionals to extract meaningful insights from complex datasets and communicate them effectively.

    Full-stack development skills remain valuable, with particular emphasis on modern JavaScript frameworks like React, Angular, and Vue.js. Additionally, knowledge of backend technologies such as Node.js, Django, and Ruby on Rails creates a well-rounded technical profile.

    DevOps practices and tools have transformed how software is developed and deployed. Experience with CI/CD pipelines, containerization (Docker, Kubernetes), and infrastructure as code (Terraform, Ansible) is highly valued in development teams.

    When developing these skills, focus on project-based learning that results in portfolio pieces demonstrating your capabilities. Employers increasingly value practical experience over certifications alone, though recognized credentials can help you get past initial screening processes.

    Remember that technical skills should be complemented by soft skills like communication, problem-solving, and collaboration. The most successful tech professionals combine technical expertise with the ability to work effectively in teams and translate complex concepts for non-technical stakeholders.`,
    author: "Michael Chen",
    date: "March 15, 2023",
    readTime: "10 min read",
    category: "Skill Development",
    tags: ["technology", "skills", "learning"],
    image: "/placeholder.svg?height=400&width=600&text=Tech+Skills",
  },
  {
    id: "future-of-work-ai-era",
    title: "The Future of Work in the AI Era: Preparing for Tomorrow's Jobs",
    excerpt: "How artificial intelligence is reshaping the job market and what it means for your career strategy.",
    content: `Artificial intelligence is fundamentally transforming the nature of work across industries. Rather than simply automating routine tasks, modern AI systems are increasingly capable of handling complex cognitive functions that were once thought to be exclusively human domains.

    This evolution raises important questions about the future of employment. While some predict widespread job displacement, historical evidence suggests that technological revolutions typically create more jobs than they eliminate. However, the types of jobs and skills required will shift significantly.

    Jobs that involve routine, predictable tasks are most vulnerable to automation. This includes roles in manufacturing, data processing, customer service, and even some aspects of professional services like law and accounting. Conversely, jobs requiring creativity, emotional intelligence, complex problem-solving, and interpersonal skills are likely to grow in importance.

    New categories of employment are emerging at the intersection of human expertise and AI capabilities. These include AI trainers, ethics specialists, human-AI collaboration managers, and explainable AI experts. These roles leverage uniquely human qualities while harnessing the power of artificial intelligence.

    Industries experiencing significant AI-driven transformation include healthcare, where AI is enhancing diagnostic capabilities and treatment planning; finance, where algorithms are revolutionizing risk assessment and fraud detection; and education, where personalized learning experiences are becoming increasingly sophisticated.

    For individuals planning their career trajectories, adaptability is paramount. This means developing a foundation of transferable skills that remain valuable across contexts, cultivating technological literacy without necessarily becoming technical specialists, and adopting a mindset of continuous learning.

    Organizations are also evolving their approach to talent development. Progressive companies are investing in reskilling programs, creating more flexible work arrangements, and redesigning jobs to maximize complementarity between human workers and AI systems.

    Policy considerations are equally important in managing this transition. Effective responses may include updating education systems to emphasize uniquely human capabilities, creating stronger safety nets for displaced workers, and developing ethical frameworks to guide AI implementation in the workplace.

    The future of work in the AI era will likely be characterized by greater fluidity between roles, industries, and ways of working. By anticipating these changes and proactively developing relevant capabilities, individuals can position themselves to thrive in this evolving landscape.`,
    author: "Dr. Aisha Patel",
    date: "February 28, 2023",
    readTime: "12 min read",
    category: "Industry Trends",
    tags: ["artificial intelligence", "future of work", "automation"],
    image: "/placeholder.svg?height=400&width=600&text=Future+of+Work",
  },
  {
    id: "ai-powered-career-guidance",
    title: "How AI is Revolutionizing Career Guidance and Development",
    excerpt: "Explore how artificial intelligence tools are providing more personalized and effective career advice.",
    content: `Artificial intelligence is transforming career guidance from a largely subjective, opinion-based process into a data-driven, personalized experience. This evolution represents a significant advancement in how individuals navigate their professional journeys.

    Traditional career counseling has been limited by human advisors' knowledge, biases, and capacity. AI systems can analyze vast datasets spanning industries, roles, skills, and career trajectories to identify patterns and opportunities that might otherwise remain hidden.

    Skill assessment is one area where AI excels. Advanced algorithms can evaluate an individual's capabilities through various inputs, from resume analysis to interactive assessments, providing a comprehensive picture of strengths and development areas. This creates a more objective foundation for career planning.

    Personalized recommendations are another key benefit. AI systems can match individual profiles with potential career paths, educational opportunities, and specific job openings at a scale and level of precision that would be impossible for human advisors alone.

    Labor market intelligence becomes more accessible through AI-powered platforms. These tools can analyze real-time data on industry trends, emerging roles, and skill demands, helping individuals make forward-looking career decisions rather than relying on potentially outdated information.

    Learning pathways become more efficient when guided by AI. These systems can identify the most relevant educational resources based on an individual's current skills, learning style, and career objectives, optimizing the return on investment for time spent developing new capabilities.

    Bias reduction is a potential advantage of well-designed AI career guidance systems. By focusing on skills and capabilities rather than demographic factors, these tools can help create more equitable access to opportunities, though careful attention must be paid to potential algorithmic biases.

    The human element remains crucial despite these technological advances. The most effective approaches combine AI-powered insights with human judgment, emotional intelligence, and contextual understanding. Career decisions involve complex personal factors that algorithms alone cannot fully address.

    As these technologies continue to evolve, we can expect increasingly sophisticated career guidance systems that adapt to individual needs throughout the professional lifecycle, from early education through retirement planning. This represents a fundamental shift in how we approach career development.`,
    author: "James Wilson",
    date: "January 20, 2023",
    readTime: "9 min read",
    category: "AI Insights",
    tags: ["career guidance", "artificial intelligence", "personalization"],
    image: "/placeholder.svg?height=400&width=600&text=AI+Career+Guidance",
  },
  {
    id: "building-effective-learning-habits",
    title: "Building Effective Learning Habits for Continuous Professional Growth",
    excerpt: "Practical strategies for developing sustainable learning routines in a fast-changing work environment.",
    content: `In today's rapidly evolving professional landscape, the ability to learn continuously has become perhaps the most valuable meta-skill. Developing effective learning habits is essential for maintaining relevance and advancing in your career.

    The foundation of effective learning begins with self-awareness. Understanding your preferred learning styles, optimal times for focused work, and personal motivations creates the framework for more efficient skill acquisition. Regular reflection on these factors allows you to refine your approach over time.

    Deliberate practice, rather than passive consumption of information, leads to meaningful skill development. This involves breaking complex skills into component parts, focusing intensely on areas of weakness, seeking immediate feedback, and gradually increasing the challenge level as you improve.

    Spaced repetition and interleaving are scientifically-proven techniques that enhance retention. Rather than cramming information in extended sessions, distribute your practice over time and alternate between different but related topics. This approach strengthens neural connections and improves transfer of knowledge across contexts.

    Creating a supportive environment significantly impacts learning success. This includes physical aspects like a dedicated workspace with minimal distractions, as well as digital tools that facilitate organization and focus. Equally important is a social environment that encourages growth and provides accountability.

    Time management strategies should acknowledge the cognitive demands of deep learning. Techniques like time-blocking, the Pomodoro method, and energy management help protect your most productive hours for challenging learning tasks while ensuring sustainable progress over the long term.

    Application of new knowledge reinforces learning. Look for opportunities to implement new skills in real-world contexts, whether through work projects, volunteer opportunities, or personal initiatives. This practical application reveals gaps in understanding and creates meaningful connections to existing knowledge.

    Reflection and documentation accelerate progress. Maintaining a learning journal, creating summary notes, or teaching concepts to others forces you to articulate your understanding and identify areas for further development. These practices transform passive exposure into active learning.

    Finally, cultivate a growth mindset that views challenges as opportunities and values the process of improvement over fixed outcomes. This perspective helps maintain motivation through inevitable setbacks and creates the psychological foundation for lifelong learning.`,
    author: "Elena Rodriguez",
    date: "December 5, 2022",
    readTime: "7 min read",
    category: "Skill Development",
    tags: ["learning", "habits", "professional development"],
    image: "/placeholder.svg?height=400&width=600&text=Learning+Habits",
  },
]
