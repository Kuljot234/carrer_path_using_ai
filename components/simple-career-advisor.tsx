"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Info } from "lucide-react"

export default function SimpleCareerAdvisor() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [usingFallback, setUsingFallback] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    setError(null)
    setResponse("")
    setUsingFallback(false)

    try {
      console.log("Sending request to OpenAI career advisor API...")

      // Try the main API first
      let res = await fetch("/api/openai-career-advisor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })

      let data = await res.json()

      // If the main API fails, try the fallback
      if (!res.ok) {
        console.log("Main API failed, trying fallback...")
        setUsingFallback(true)

        res = await fetch("/api/fallback-career-advisor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        })

        data = await res.json()
      }

      if (!res.ok) {
        throw new Error(data.error || `Server responded with status: ${res.status}`)
      }

      if (data.reply) {
        setResponse(data.reply)
      } else {
        throw new Error("Received an empty response from the server")
      }
    } catch (err) {
      console.error("Error getting career advice:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
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
              placeholder="Ask about career paths, skills, or job trends..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading || !message.trim()} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
              </>
            ) : (
              "Get Career Advice"
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {usingFallback && !error && (
          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Notice</AlertTitle>
            <AlertDescription>
              Using fallback responses. The AI service might be temporarily unavailable.
            </AlertDescription>
          </Alert>
        )}

        {response && (
          <div className="mt-6">
            <h3 className="font-medium mb-2">Career Advice:</h3>
            <div className="p-4 bg-muted rounded-md whitespace-pre-wrap">{response}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
