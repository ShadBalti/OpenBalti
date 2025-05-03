"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import {
  Bookmark,
  BookmarkCheck,
  History,
  Lightbulb,
  GraduationCap,
  ArrowLeft,
  Edit,
  Trash2,
  Share2,
  Volume2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import WordFeedback from "@/components/word-feedback"
import WordComments from "@/components/word-comments"
import type { IWord } from "@/models/Word"

interface WordDetailPageProps {
  word: IWord
}

export default function WordDetailPage({ word }: WordDetailPageProps) {
  const router = useRouter()
  const { data: session } = useSession()
  const { toast } = useToast()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const checkFavoriteStatus = async () => {
    if (!session) return

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
        // Remove from favorites
        const response = await fetch(`/api/favorites/${word._id}`, {
          method: "DELETE",
        })
        const result = await response.json()

        if (result.success) {
          setIsFavorite(false)
          toast({
            title: "Success",
            description: "Removed from favorites",
          })
        } else {
          toast({
            title: "Error",
            description: result.error || "Failed to remove from favorites",
            variant: "destructive",
          })
        }
      } else {
        // Add to favorites
        const response = await fetch("/api/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ wordId: word._id }),
        })
        const result = await response.json()

        if (result.success) {
          setIsFavorite(true)
          toast({
            title: "Success",
            description: "Added to favorites",
          })
        } else {
          toast({
            title: "Error",
            description: result.error || "Failed to add to favorites",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("Error toggling favorite:", error)
      toast({
        title: "Error",
        description: "An error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteWord = async () => {
    if (!session) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/words/${word._id}`, {
        method: "DELETE",
      })
      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Word deleted successfully",
        })
        router.push("/")
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete word",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting word:", error)
      toast({
        title: "Error",
        description: "Failed to delete word",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
      setDeleteConfirmOpen(false)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${word.balti} - OpenBalti Dictionary`,
          text: `Learn about the Balti word "${word.balti}" meaning "${word.english}" in the OpenBalti Dictionary.`,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied",
        description: "Word link copied to clipboard",
      })
    }
  }

  const playPronunciation = () => {
    // This is a placeholder for future audio implementation
    setIsPlaying(true)
    toast({
      title: "Audio not available",
      description: "Pronunciation audio will be available in a future update",
    })
    setTimeout(() => setIsPlaying(false), 1000)
  }

  // Check favorite status on component mount
  useState(() => {
    checkFavoriteStatus()
  })

  return (
    <div className="space-y-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dictionary</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/words/${word._id}`}>Word Details</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="w-full">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="text-3xl font-bold">{word.balti}</CardTitle>
            {word.phonetic && <CardDescription className="text-lg mt-1">/{word.phonetic}/</CardDescription>}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={playPronunciation}
              disabled={isPlaying}
              aria-label="Listen to pronunciation"
            >
              <Volume2 className={`h-4 w-4 ${isPlaying ? "text-primary" : ""}`} />
            </Button>
            {session && (
              <Button
                variant="outline"
                size="icon"
                onClick={toggleFavorite}
                disabled={isLoading}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                {isFavorite ? <BookmarkCheck className="h-4 w-4 text-primary" /> : <Bookmark className="h-4 w-4" />}
              </Button>
            )}
            <Button variant="outline" size="icon" onClick={handleShare} aria-label="Share this word">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">English Translation</h3>
            <p className="text-xl">{word.english}</p>
          </div>

          {word.difficultyLevel && (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <Badge variant="outline" className="text-sm">
                {word.difficultyLevel.charAt(0).toUpperCase() + word.difficultyLevel.slice(1)} Level
              </Badge>
            </div>
          )}

          {word.categories && word.categories.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {word.categories.map((category, index) => (
                  <Badge key={index} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {word.dialect && (
            <div>
              <h3 className="text-lg font-medium mb-2">Regional Dialect</h3>
              <p>{word.dialect}</p>
            </div>
          )}

          {word.usageNotes && (
            <div className="p-4 bg-muted rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <h3 className="text-lg font-medium">Usage Notes</h3>
              </div>
              <p className="text-muted-foreground">{word.usageNotes}</p>
            </div>
          )}

          {word.relatedWords && word.relatedWords.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Related Words</h3>
              <div className="flex flex-wrap gap-2">
                {word.relatedWords.map((relatedWord, index) => (
                  <Badge key={index} variant="outline">
                    {relatedWord}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator className="my-6" />

          {word._id && (
            <div>
              <h3 className="text-lg font-medium mb-4">Community Feedback</h3>
              <WordFeedback wordId={word._id} />
            </div>
          )}

          {word._id && (
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Comments</h3>
              <WordComments wordId={word._id} />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between pt-6">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dictionary
            </Link>
          </Button>

          {session && (
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href={`/words/${word._id}/history`}>
                  <History className="mr-2 h-4 w-4" />
                  View History
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/?edit=${word._id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>
              <Button variant="destructive" onClick={() => setDeleteConfirmOpen(true)} disabled={isLoading}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>

      <AlertDialog open={deleteConfirmOpen} onOpenChange={setDeleteConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the word and all associated data from the
              dictionary.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteWord}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
