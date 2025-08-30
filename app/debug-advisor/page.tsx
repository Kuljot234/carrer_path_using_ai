"use client"
import DebugAdvisor from "@/components/debug-advisor"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function DebugAdvisorPage() {
  const [apiRoute, setApiRoute] = useState("/api/simple-advisor")
  const [envVars, setEnvVars] = useState<{ [key: string]: string }>({})

  // Debug function to check environment variables
  const checkEnvVars = async () => {
    try {
      const res = await fetch("/api/debug-env")
      const data = await res.json()
      setEnvVars(data.env || {})
    } catch (err) {
      console.error("Failed to check env vars:", err)
      setEnvVars({ error: "Failed to fetch environment variables" })
    }
  }

  useEffect(() => {
    checkEnvVars()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Debug AI Advisor</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Environment Check</CardTitle>
            <CardDescription>Checking if environment variables are properly loaded</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-2">OpenAI API Key</h3>
                <p>
                  Status:{" "}
                  {envVars.OPENAI_API_KEY_STATUS ? (
                    <span className="text-green-600">Available</span>
                  ) : (
                    <span className="text-red-600">Missing</span>
                  )}
                </p>
                {envVars.OPENAI_API_KEY_STATUS && (
                  <p className="text-sm text-muted-foreground">Key starting with: {envVars.OPENAI_API_KEY_START}...</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">API Route Selection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setApiRoute("/api/simple-advisor")}
              className={`p-3 border rounded-md ${apiRoute === "/api/simple-advisor" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              OpenAI API
            </button>
            <button
              onClick={() => setApiRoute("/api/fallback-advisor")}
              className={`p-3 border rounded-md ${apiRoute === "/api/fallback-advisor" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
            >
              Fallback API
            </button>
          </div>
        </div>

        <DebugAdvisor key={apiRoute} apiRoute={apiRoute} />

        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md">
          <h3 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">Troubleshooting Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
            <li>Check that your OpenAI API key is correctly set in your environment variables</li>
            <li>Ensure your OpenAI API key is valid and has sufficient credits</li>
            <li>Try the Fallback API option if the OpenAI API is not working</li>
            <li>Check console logs for detailed error messages</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
