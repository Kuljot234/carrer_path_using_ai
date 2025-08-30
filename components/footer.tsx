import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CareerPathAI</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered career path prediction and skill gap analysis to help you achieve your professional goals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/ai-technology" className="text-muted-foreground hover:underline">
                  AI Technology
                </Link>
              </li>
              <li>
                <Link href="/career-paths" className="text-muted-foreground hover:underline">
                  Career Paths
                </Link>
              </li>
              <li>
                <Link href="/skill-analysis" className="text-muted-foreground hover:underline">
                  Skill Analysis
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CareerPathAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
