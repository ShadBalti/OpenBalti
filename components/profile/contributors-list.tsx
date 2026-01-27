"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Search, Lock, AlertTriangle } from "lucide-react"
import { toast } from "react-toastify"
import Link from "next/link"
import { format } from "date-fns"
import { VerificationBadge } from "@/components/ui/verification-badge"

interface Contributor {
  _id: string
  name: string
  image?: string
  role: string
  bio?: string
  isPublic: boolean
  isVerified: boolean
  isFounder: boolean
  contributionStats: {
    wordsAdded: number
    wordsEdited: number
    wordsReviewed: number
    total?: number
  }
  createdAt: string
}

export default function ContributorsList() {
  const router = useRouter()
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<string>("contributions")
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    // Set new timer for debounced fetch
    debounceTimerRef.current = setTimeout(() => {
      fetchContributors()
    }, 300)

    // Cleanup on unmount
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [sortBy, searchTerm])

  const fetchContributors = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      // Build query parameters - fetch all contributors without pagination
      const params = new URLSearchParams()
      params.append("limit", "1000")
      params.append("sortBy", sortBy)

      if (searchTerm) {
        params.append("search", searchTerm)
      }

      const response = await fetch(`/api/users?${params.toString()}`)

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success && result.data && Array.isArray(result.data)) {
        // Validate and ensure all required fields are present
        const validatedContributors = result.data.map((contributor: Contributor) => {
          try {
            // Safely parse createdAt date
            const createdAt = contributor.createdAt ? new Date(contributor.createdAt).toISOString() : new Date().toISOString()
            
            return {
              ...contributor,
              createdAt,
              isVerified: contributor.isVerified ?? false,
              isFounder: contributor.isFounder ?? false,
              contributionStats: contributor.contributionStats || {
                wordsAdded: 0,
                wordsEdited: 0,
                wordsReviewed: 0,
              },
            }
          } catch (dateError) {
            console.error("[v0] Error validating contributor data:", dateError)
            return {
              ...contributor,
              createdAt: new Date().toISOString(),
              isVerified: contributor.isVerified ?? false,
              isFounder: contributor.isFounder ?? false,
              contributionStats: contributor.contributionStats || {
                wordsAdded: 0,
                wordsEdited: 0,
                wordsReviewed: 0,
              },
            }
          }
        })
        setContributors(validatedContributors)
      } else {
        throw new Error(result.error || "Failed to fetch contributors")
      }
    } catch (error) {
      console.error("[v0] Error fetching contributors:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
      toast.error("Failed to fetch contributors. Please try again later.")
    } finally {
      setLoading(false)
    }
  }, [sortBy, searchTerm])

  const getTotalContributions = (contributor: Contributor) => {
    if (contributor.contributionStats?.total !== undefined) {
      return contributor.contributionStats.total
    }

    const { wordsAdded = 0, wordsEdited = 0, wordsReviewed = 0 } = contributor.contributionStats || {}
    return wordsAdded + wordsEdited + wordsReviewed
  }

  const formatDate = useCallback((dateString: string | undefined): string => {
    if (!dateString || dateString.trim() === "") {
      return "Joined unknown"
    }

    try {
      const date = new Date(dateString)
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        console.warn("[v0] Invalid date value:", dateString)
        return "Joined unknown"
      }

      // Verify the date is within a reasonable range (between 2000 and 2100)
      const year = date.getFullYear()
      if (year < 2000 || year > 2100) {
        console.warn("[v0] Date out of valid range:", dateString)
        return "Joined unknown"
      }

      return format(date, "MMM yyyy")
    } catch (error) {
      console.error("[v0] Error formatting date:", error, { dateString })
      return "Joined unknown"
    }
  }, [])

  if (error) {
    return (
      <Card className="p-4 sm:p-6">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <AlertTriangle className="h-10 w-10 sm:h-12 sm:w-12 text-amber-500" />
          <h3 className="text-lg sm:text-xl font-semibold">Error Loading Contributors</h3>
          <p className="text-muted-foreground text-sm sm:text-base">{error}</p>
          <Button onClick={() => fetchContributors()}>Try Again</Button>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search contributors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="contributions">Most Contributions</SelectItem>
              <SelectItem value="recent">Recently Joined</SelectItem>
              <SelectItem value="name">Alphabetical</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-12 sm:py-16">
          <div className="flex flex-col items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
            <p className="text-muted-foreground">Loading contributors...</p>
          </div>
        </div>
      ) : contributors.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-center">No Contributors Found</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              {searchTerm
                ? `No contributors match "${searchTerm}". Try a different search term.`
                : "No contributors found."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {contributors.map((contributor) => {
              const initials = contributor.name
                ? contributor.name
                    .split(" ")
                    .map((n) => n?.[0] || "")
                    .join("")
                    .toUpperCase()
                : "U"

              const totalContributions = getTotalContributions(contributor)
              const isOwner = contributor.role === "owner" || contributor.isFounder

              return (
                <Card
                  key={contributor._id}
                  className={`overflow-hidden hover:shadow-md transition-shadow ${
                    isOwner ? "border-amber-500/50" : ""
                  }`}
                >
                  <Link href={`/users/${contributor._id}`} className="block h-full">
                    <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:pb-2">
                      <Avatar className={`h-10 w-10 sm:h-12 sm:w-12 ${isOwner ? "ring-1 ring-amber-500" : ""}`}>
                        <AvatarImage src={contributor.image || ""} alt={contributor.name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                          <CardTitle className="text-base sm:text-lg">{contributor.name}</CardTitle>
                          {contributor.isVerified && <VerificationBadge size="sm" />}
                          {contributor.isFounder && (
                            <Badge variant="outline" className="text-xs px-1.5 py-0 h-5 bg-amber-100 text-amber-900 border-amber-200">
                              Founder
                            </Badge>
                          )}
                          {!contributor.isPublic && <Lock className="h-3 w-3 text-muted-foreground" />}
                        </div>
                        <div className="flex items-center mt-1 flex-wrap gap-1">
                          <Badge variant="outline" className="text-xs px-1.5 py-0 h-5">
                            {contributor.role === "owner"
                              ? "Owner"
                              : contributor.role === "admin"
                                ? "Admin"
                                : contributor.role === "contributor"
                                  ? "Contributor"
                                  : "Member"}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 sm:p-4 sm:pt-0">
                      {contributor.bio && (
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2 sm:mb-3">
                          {contributor.bio}
                        </p>
                      )}
                      <div className="flex flex-col gap-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary text-xs w-fit">
                          {totalContributions} {totalContributions === 1 ? "Contribution" : "Contributions"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(contributor.createdAt)}
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
