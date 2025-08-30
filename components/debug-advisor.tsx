"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DebugAdvisorProps {
  apiRoute: string
}

export default function DebugAdvisor({ apiRoute = "/api/simple-advisor" }: DebugAdvisorProps) {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [rawResponse, setRawResponse] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    setResponse(null)
    setRawResponse(null)

    try {
      console.log(`Sending request to ${apiRoute}...`)

      const res = await fetch(apiRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })

      console.log("Response status:", res.status)

      // Get the raw text first for debugging
      const responseText = await res.text()
      console.log("Raw response:", responseText)
      setRawResponse(responseText)

      // Try to parse as JSON
      try {
        const data = JSON.parse(responseText)
        setResponse(data)
      } catch (parseError) {
        console.error("Failed to parse response as JSON:", parseError)
        setResponse({ error: "Invalid JSON response", rawText: responseText })
      }
    } catch (err) {
      console.error("Request error:", err)
      setResponse({ error: err instanceof Error ? err.message : "Unknown error" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Debug Advisor</CardTitle>
        <p className="text-sm text-muted-foreground">Testing API route: {apiRoute}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Ask a simple question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading || !message.trim()} className="w-full">
            {isLoading ? "Processing..." : "Test API"}
          </Button>
        </form>

        {response && (
          <div className="mt-6">
            <h3 className="font-medium mb-2">Response:</h3>
            <div className="p-4 bg-muted rounded-md overflow-auto max-h-60">
              <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
            </div>

            {response.reply && (
              <div className="mt-4 p-4 bg-muted/50 rounded-md">
                <h4 className="font-medium mb-2">Career Advice:</h4>
                <p>{response.reply}</p>
              </div>
            )}
          </div>
        )}

        {rawResponse && !response?.reply && (
          <div className="mt-6">
            <h3 className="font-medium mb-2">Raw Response:</h3>
            <div className="p-4 bg-muted rounded-md overflow-auto max-h-60">
              <pre className="text-xs whitespace-pre-wrap">{rawResponse}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
