"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, ChevronRight } from "lucide-react"
import Link from "next/link"

interface DifficultyGroup {
  level: string
  count: number
}

export default function DifficultyBrowser() {
  const [difficulties, setDifficulties] = useState<DifficultyGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDifficulties()
  }, [])

  const fetchDifficulties = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/words/difficulties")
      const result = await response.json()

      if (result.success) {
        setDifficulties(result.data)
      } else {
        setError(result.error || "Failed to fetch difficulty levels")
      }
    } catch (error) {
      console.error("Error fetching difficulty levels:", error)
      setError("An error occurred while fetching difficulty levels")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Difficulty Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <p className="text-muted-foreground">Loading difficulty levels...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Difficulty Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-8">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchDifficulties} variant="outline">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Browse by Difficulty</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {difficulties.map((difficulty) => (
            <Link
              key={difficulty.level}
              href={`/?difficulty=${encodeURIComponent(difficulty.level)}`}
              className="block"
            >
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                  <span className="capitalize">{difficulty.level}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-2">{difficulty.count} words</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
