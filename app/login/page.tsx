import type { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login - Career Path Predictor",
  description: "Log in to your Career Path Predictor account",
}

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Log in to access your personalized career recommendations and track your progress
          </p>
        </div>
      </div>

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}
