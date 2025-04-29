"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, MapPin, Globe, Calendar, Edit, AlertCircle, Star, Crown } from "lucide-react"
import Link from "next/link"
import ActivityLogList from "@/components/activity/activity-log-list"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { VerificationBadge } from "@/components/ui/verification-badge"
import { FounderBadge } from "@/components/ui/founder-badge"

interface UserProfileProps {
  userId: string
}

interface UserData {
  id: string
  name: string
  email?: string
  image?: string
  role: string
  bio?: string
  location?: string
  website?: string
  isPublic?: boolean
  isVerified?: boolean
  isFounder?: boolean
  contributionStats: {
    wordsAdded: number
    wordsEdited: number
    wordsReviewed: number
  }
  createdAt: string
}

export default function UserProfile({ userId }: UserProfileProps) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const isOwnProfile = session?.user?.id === userId
  const isAdmin = session?.user?.role === "admin"
  const isOwner = user?.role === "owner" || user?.isFounder

  useEffect(() => {
    if (userId) {
      fetchUserProfile()
    }
  }, [userId, retryCount])

  const fetchUserProfile = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/users/${userId}`)

      if (!response.ok) {
        if (response.status === 401) {
          setError("Authentication required. Please sign in.")
          if (status === "unauthenticated") {
            router.push(`/auth/signin?callbackUrl=${encodeURIComponent(`/users/${userId}`)}`)
            return
          }
        } else if (response.status === 403) {
          setError("This profile is private")
        } else if (response.status === 404) {
          setError("User not found")
        } else {
          setError(`Failed to load profile: ${response.statusText || "Unknown error"}`)
        }
        return
      }

      const result = await response.json()

      if (result.success) {
        setUser(result.data)
      } else {
        setError(result.error || "Failed to load profile")
      }
    } catch (error) {
      console.error("Error fetching user profile:", error)
      setError("Failed to load profile. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1)
  }

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM yyyy")
    } catch (error) {
      console.error("Error formatting date:", error)
      return "Unknown date"
    }
  }

  const getTotalContributions = () => {
    if (!user || !user.contributionStats) return 0
    const { wordsAdded = 0, wordsEdited = 0, wordsReviewed = 0 } = user.contributionStats
    return wordsAdded + wordsEdited + wordsReviewed
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl flex items-center justify-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            {error}
          </CardTitle>
          <CardDescription>
            {error === "User not found"
              ? "The user you're looking for doesn't exist or has been removed."
              : error === "This profile is private"
                ? "This user has set their profile to private."
                : "There was a problem loading this profile."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Button onClick={handleRetry} variant="outline">
            Try Again
          </Button>
          <Button asChild variant="ghost">
            <Link href="/contributors">View All Contributors</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!user) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Could not load user data. Please try again later or contact support if the problem persists.
        </AlertDescription>
      </Alert>
    )
  }

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U"

  return (
    <div className="space-y-8">
      <Card className={isOwner ? "border-amber-500 shadow-amber-100 dark:shadow-none" : ""}>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6">
          <div className="relative">
            <Avatar className={`h-16 w-16 sm:h-20 sm:w-20 ${isOwner ? "ring-2 ring-amber-500" : ""}`}>
              <AvatarImage src={user.image || ""} alt={user.name} />
              <AvatarFallback className="text-xl sm:text-2xl">{initials}</AvatarFallback>
            </Avatar>
            {isOwner && (
              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-background rounded-full p-0.5">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500 fill-amber-500" />
              </div>
            )}
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between">
              <div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <CardTitle className="text-xl sm:text-2xl">{user.name}</CardTitle>
                  {user.isVerified && <VerificationBadge size="sm" className="sm:h-4 sm:w-4" />}
                </div>
                {user.email && (isOwnProfile || isAdmin) && <CardDescription>{user.email}</CardDescription>}
              </div>
              {isOwnProfile && (
                <Button asChild size="sm" variant="outline" className="mt-2 sm:mt-0">
                  <Link href="/settings">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {isOwner && <FounderBadge size="sm" className="sm:text-xs" />}
              <Badge variant="outline" className="text-xs">
                {user.role === "owner"
                  ? "Owner"
                  : user.role === "admin"
                    ? "Administrator"
                    : user.role === "contributor"
                      ? "Contributor"
                      : "Member"}
              </Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary text-xs">
                {getTotalContributions()} Contributions
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-4 sm:p-6">
          {user.bio && (
            <div>
              <p className="whitespace-pre-line text-sm sm:text-base">{user.bio}</p>
            </div>
          )}

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground">
            {user.location && (
              <div className="flex items-center">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                {user.location}
              </div>
            )}
            {user.website && (
              <div className="flex items-center">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <a
                  href={user.website.startsWith("http") ? user.website : `https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-primary"
                >
                  {user.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {user.createdAt && (
              <div className="flex items-center">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Joined {formatDate(user.createdAt)}
              </div>
            )}
          </div>

          {isOwner && (
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 p-3 sm:p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h3 className="text-xs sm:text-sm font-medium flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                <Crown className="h-3 w-3 sm:h-4 sm:w-4" />
                Founder & Owner
              </h3>
              <p className="text-xs sm:text-sm mt-1 text-amber-700 dark:text-amber-400">
                This account belongs to the founder and owner of OpenBalti. They created this platform to preserve and
                promote the Balti language.
              </p>
            </div>
          )}

          <div className="pt-4 border-t">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Contribution Statistics</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <Card>
                <CardHeader className="p-2 sm:pb-2">
                  <CardTitle className="text-lg sm:text-3xl font-bold text-center text-green-600 dark:text-green-400">
                    {user.contributionStats?.wordsAdded || 0}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">Words Added</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-2 sm:pb-2">
                  <CardTitle className="text-lg sm:text-3xl font-bold text-center text-blue-600 dark:text-blue-400">
                    {user.contributionStats?.wordsEdited || 0}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">Words Edited</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-2 sm:pb-2">
                  <CardTitle className="text-lg sm:text-3xl font-bold text-center text-purple-600 dark:text-purple-400">
                    {user.contributionStats?.wordsReviewed || 0}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center p-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">Words Reviewed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="activity" className="mt-6">
          <ActivityLogList userId={userId} limit={10} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
