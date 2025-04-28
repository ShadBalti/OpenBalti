"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Search, ChevronLeft, ChevronRight, Lock } from "lucide-react"
import { toast } from "react-toastify"
import Link from "next/link"
import { format } from "date-fns"

interface Contributor {
  _id: string
  name: string
  image?: string
  role: string
  bio?: string
  isPublic: boolean
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
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<string>("contributions")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchContributors()
  }, [page, sortBy, searchTerm])

  const fetchContributors = async () => {
    try {
      setLoading(true)

      // Build query parameters
      const params = new URLSearchParams()
      params.append("page", page.toString())
      params.append("limit", "12")
      params.append("sortBy", sortBy)

      if (searchTerm) {
        params.append("search", searchTerm)
      }

      const response = await fetch(`/api/users?${params.toString()}`)

      if (!response.ok) {
        throw new Error("Failed to fetch contributors")
      }

      const result = await response.json()

      if (result.success) {
        setContributors(result.data)
        setTotalPages(result.pagination.pages)
      } else {
        toast.error(result.error || "Failed to fetch contributors")
      }
    } catch (error) {
      console.error("Error fetching contributors:", error)
      toast.error("Failed to fetch contributors")
    } finally {
      setLoading(false)
    }
  }

  const getTotalContributions = (contributor: Contributor) => {
    if (contributor.contributionStats.total !== undefined) {
      return contributor.contributionStats.total
    }
    const { wordsAdded, wordsEdited, wordsReviewed } = contributor.contributionStats
    return wordsAdded + wordsEdited + wordsReviewed
  }

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM yyyy")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
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
            <SelectTrigger className="w-[180px]">
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
        <div className="flex justify-center items-center py-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor) => {
              const initials = contributor.name
                ? contributor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                : "U"

              const totalContributions = getTotalContributions(contributor)

              return (
                <Card key={contributor._id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <Link href={`/users/${contributor._id}`} className="block h-full">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={contributor.image || ""} alt={contributor.name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{contributor.name}</CardTitle>
                          {!contributor.isPublic && <Lock className="h-3 w-3 text-muted-foreground" />}
                        </div>
                        <div className="flex items-center mt-1">
                          <Badge variant="outline" className="text-xs">
                            {contributor.role === "admin"
                              ? "Administrator"
                              : contributor.role === "contributor"
                                ? "Contributor"
                                : "Member"}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {contributor.bio && (
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{contributor.bio}</p>
                      )}
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="bg-primary/10 text-primary">
                          {totalContributions} Contributions
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Joined {formatDate(contributor.createdAt)}
                        </span>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
