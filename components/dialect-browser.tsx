"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ChevronRight } from "lucide-react"
import Link from "next/link"

interface DialectGroup {
  name: string
  count: number
}

export default function DialectBrowser() {
  const [dialects, setDialects] = useState<DialectGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDialects()
  }, [])

  const fetchDialects = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/words/dialects")
      const result = await response.json()

      if (result.success) {
        setDialects(result.data)
      } else {
        setError(result.error || "Failed to fetch dialects")
      }
    } catch (error) {
      console.error("Error fetching dialects:", error)
      setError("An error occurred while fetching dialects")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Regional Dialects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <p className="text-muted-foreground">Loading dialects...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Regional Dialects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-8">
            <p className="text-destructive mb-4">{error}</p>
            <Button onClick={fetchDialects} variant="outline">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (dialects.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Regional Dialects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <p className="text-muted-foreground">No dialect data available yet</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Browse by Region</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {dialects.map((dialect) => (
            <Link key={dialect.name} href={`/?category=${encodeURIComponent(dialect.name)}`} className="block">
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  <span>{dialect.name || "Unspecified"}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-2">{dialect.count} words</span>
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
