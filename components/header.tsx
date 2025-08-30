"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useAuth } from "@/context/auth-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, LogOut, Settings, Bot } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const isActive = (path: string) => pathname === path

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">CareerPath AI</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              How It Works
            </button>
            <Link
              href="/blog"
              className={`transition-colors hover:text-foreground/80 ${
                isActive("/blog") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/chatbot"
              className={`transition-colors hover:text-foreground/80 flex items-center space-x-1 ${
                isActive("/chatbot") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              <Bot className="h-4 w-4" />
              <span>Chatbot</span>
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
              <span className="font-bold">CareerPath AI</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/ai-advisor" className="flex items-center">
                      <Bot className="mr-2 h-4 w-4" />
                      AI Advisor
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/chatbot" className="flex items-center">
                      <Bot className="mr-2 h-4 w-4" />
                      Chatbot
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
