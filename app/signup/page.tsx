import type { Metadata } from "next"
import { SignupForm } from "@/components/auth/signup-form"

export const metadata: Metadata = {
  title: "Sign Up - Career Path Predictor",
  description: "Create a new account on Career Path Predictor",
}

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Join CareerPathAI</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Create an account to get personalized career recommendations and track your progress
          </p>
        </div>
      </div>

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <SignupForm />
        </div>
      </main>
    </div>
  )
}
