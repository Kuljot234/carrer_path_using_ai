"use client"
import UserProfileForm from "@/components/user-profile-form"
import RouteGuard from "@/components/route-guard"

export default function GetStartedPage() {
  return (
    <RouteGuard requireAuth>
      <div className="flex flex-col min-h-screen">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Get Your Career Recommendations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Complete your profile to receive personalized career recommendations based on your skills, education, and
              interests
            </p>
          </div>
        </div>

        <main className="flex-1 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <UserProfileForm />
            </div>
          </div>
        </main>
      </div>
    </RouteGuard>
  )
}
