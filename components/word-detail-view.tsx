"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bookmark, BookmarkCheck, Lightbulb, GraduationCap, BookOpen, Scroll, Share2 } from "lucide-react"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import WordFeedback from "@/components/word-feedback"
import WordComments from "@/components/word-comments"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ShareArticle } from "@/components/share-article"

interface WordDetailViewProps {
  word: any // IWord with populated fields
  history: any[] // IWordHistory with populated user info
}

export default function WordDetailView({ word, history }: WordDetailViewProps) {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (session) {
      checkFavoriteStatus()
    }
  }, [session, word._id])

  const checkFavoriteStatus = async () => {
    try {
      const response = await fetch("/api/favorites")
      const result = await response.json()

      if (result.success) {
        const favorites = result.data
        setIsFavorite(favorites.some((fav: any) => fav.wordId._id === word._id))
      }
    } catch (error) {
      console.error("Error checking favorite status:", error)
    }
  }

  const toggleFavorite = async () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please log in to save favorites",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      if (isFavorite) {
        const response = await fetch(`/api/favorites/${word._id}`, {
          method: "DELETE",
        })
        const result = await response.json()

        if (result.success) {
          setIsFavorite(false)
          toast({ title: "Removed from favorites" })
        } else {
          toast({
            title: "Error",
            description: result.error,
            variant: "destructive",
          })
        }
      } else {
        const response = await fetch("/api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ wordId: word._id }),
        })
        const result = await response.json()

        if (result.success) {
          setIsFavorite(true)
          toast({ title: "Added to favorites" })
        } else {
          toast({
            title: "Error",
            description: result.error,
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to manage favorites",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getActionBadgeColor = (action: string) => {
    switch (action) {
      case "create":
        return "bg-green-100 text-green-800"
      case "update":
        return "bg-blue-100 text-blue-800"
      case "delete":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-foreground">{word.balti}</h1>
              {word.phonetic && <p className="text-lg text-gray-600 dark:text-muted-foreground mt-1">/{word.phonetic}/</p>}
            </div>
            <div className="flex gap-2">
              <ShareArticle
                title={`${word.english} - ${word.balti}`}
                url={typeof window !== "undefined" ? window.location.href : ""}
                description={`Learn the Balti word "${word.balti}" (${word.english}) on OpenBalti`}
                variant="outline"
                size="sm"
                showLabel={false}
              />
              {session && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleFavorite}
                  disabled={isLoading}
                  className="rounded-full bg-transparent"
                >
                  {isFavorite ? <BookmarkCheck className="h-5 w-5 text-blue-600" /> : <Bookmark className="h-5 w-5" />}
                </Button>
              )}
            </div>
          </div>
          <p className="text-xl text-gray-700 dark:text-foreground mt-3">{word.english}</p>
        </CardHeader>
      </Card>

      {/* Metadata Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {word.difficultyLevel && (
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-blue-600" />
                <CardTitle className="text-base">Difficulty Level</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Badge className="capitalize bg-blue-100 text-blue-800 hover:bg-blue-100">{word.difficultyLevel}</Badge>
            </CardContent>
          </Card>
        )}

        {word.dialect && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Regional Dialect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{word.dialect}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        {/* Details Tab */}
        <TabsContent value="details" className="space-y-4">
          {word.categories && word.categories.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {word.categories.map((category: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {word.usageNotes && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <CardTitle className="text-base">Usage Notes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{word.usageNotes}</p>
              </CardContent>
            </Card>
          )}

          {word.examples && word.examples.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <CardTitle className="text-base">Usage Examples</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {word.examples.map((example: any, index: number) => (
                  <div key={index} className="pl-4 border-l-2 border-blue-300">
                    <p className="font-medium text-sm">{example.balti}</p>
                    <p className="text-sm text-muted-foreground">{example.english}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {word.etymology && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Scroll className="h-4 w-4 text-purple-500" />
                  <CardTitle className="text-base">Etymology</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{word.etymology}</p>
              </CardContent>
            </Card>
          )}

          {word.culturalNotes && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <CardTitle className="text-base">Cultural Significance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{word.culturalNotes}</p>
              </CardContent>
            </Card>
          )}

          {word.relatedWords && word.relatedWords.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Related Words</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {word.relatedWords.map((relatedWord: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {relatedWord}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contributor Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Contributor Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {word.createdBy && (
                <div className="flex items-start gap-3 pb-4 border-b">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={word.createdBy.image || "/placeholder.svg"} alt={word.createdBy.name} />
                    <AvatarFallback>{word.createdBy.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{word.createdBy.name}</p>
                      {word.createdBy.isVerified && (
                        <Badge className="bg-blue-100 text-blue-800 text-xs">Verified</Badge>
                      )}
                      {word.createdBy.isFounder && (
                        <Badge className="bg-gold-100 text-yellow-800 text-xs">Founder</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Created on {formatDate(word.createdAt)}</p>
                    {word.createdBy.bio && <p className="text-sm mt-2">{word.createdBy.bio}</p>}
                  </div>
                </div>
              )}

              {word.updatedBy && (
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={word.updatedBy.image || "/placeholder.svg"} alt={word.updatedBy.name} />
                    <AvatarFallback>{word.updatedBy.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{word.updatedBy.name}</p>
                      {word.updatedBy.isVerified && (
                        <Badge className="bg-blue-100 text-blue-800 text-xs">Verified</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Last updated on {formatDate(word.updatedAt)}</p>
                    {word.updatedBy.bio && <p className="text-sm mt-2">{word.updatedBy.bio}</p>}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-4">
          {history && history.length > 0 ? (
            <div className="space-y-3">
              {history.map((entry: any, index: number) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`${getActionBadgeColor(entry.action)} capitalize text-xs`}>
                            {entry.action}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{formatDate(entry.createdAt)}</span>
                        </div>
                        {entry.details && <p className="text-sm text-gray-700">{entry.details}</p>}
                      </div>
                      {entry.user && (
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={entry.user.image || "/placeholder.svg"} alt={entry.user.name} />
                            <AvatarFallback>{entry.user.name?.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="text-right">
                            <p className="text-sm font-medium">{entry.user.name}</p>
                            {entry.user.isVerified && <p className="text-xs text-blue-600">Verified</p>}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">No history available</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Feedback Tab */}
        <TabsContent value="feedback">
          <WordFeedback wordId={word._id?.toString() || ""} />
        </TabsContent>

        {/* Comments Tab */}
        <TabsContent value="comments">
          <WordComments wordId={word._id?.toString() || ""} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
