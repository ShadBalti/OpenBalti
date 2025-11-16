"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark, BookmarkCheck, History, Lightbulb, GraduationCap, BookOpen, Scroll } from "lucide-react"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import type { IWord } from "@/models/Word"
import WordFeedback from "@/components/word-feedback"
import WordComments from "@/components/word-comments"

interface WordDetailProps {
  word: IWord
  onClose ? : () => void
}

/**
 * Renders a detailed view of a single dictionary word.
 * It displays the word's translations, phonetic spelling, categories, usage notes, and other metadata.
 * Authenticated users can add or remove the word from their favorites.
 * The component also integrates `WordFeedback` and `WordComments` to show community interactions.
 *
 * @param {WordDetailProps} props - The component props.
 * @param {IWord} props.word - The word object to display.
 * @param {() => void} [props.onClose] - An optional callback function to close the detail view.
 * @returns {JSX.Element} The rendered word detail component.
 */
export default function WordDetail({ word, onClose }: WordDetailProps) {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    // Check if this word is in user's favorites
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
        description: "An error occurred while managing favorites",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <CardTitle className="text-2xl font-bold">{word.balti}</CardTitle>
          {word.phonetic && <p className="text-sm text-muted-foreground mt-1">/{word.phonetic}/</p>}
        </div>
        <div className="flex gap-2">
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
          <Button variant="ghost" size="icon" asChild aria-label="View word history">
            <Link href={`/words/${word._id}/history`}>
              <History className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-medium">English Translation</h3>
          <p className="text-lg">{word.english}</p>
        </div>

        {word.difficultyLevel && (
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <Badge variant="outline">
              {word.difficultyLevel.charAt(0).toUpperCase() + word.difficultyLevel.slice(1)} Level
            </Badge>
          </div>
        )}

        {word.categories && word.categories.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Categories</h3>
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
            <h3 className="font-medium mb-1">Regional Dialect</h3>
            <p>{word.dialect}</p>
          </div>
        )}

        {word.usageNotes && (
          <div className="p-3 bg-muted rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              <h3 className="font-medium">Usage Notes</h3>
            </div>
            <p className="text-muted-foreground">{word.usageNotes}</p>
          </div>
        )}

        {word.examples && word.examples.length > 0 && (
          <div className="p-3 bg-muted rounded-md">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-blue-500" />
              <h3 className="font-medium">Usage Examples</h3>
            </div>
            <div className="space-y-3">
              {word.examples.map((example, index) => (
                <div key={index} className="pl-3 border-l-2 border-primary">
                  <p className="font-medium text-sm">{example.balti}</p>
                  <p className="text-sm text-muted-foreground">{example.english}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {word.etymology && (
          <div className="p-3 bg-muted rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <Scroll className="h-4 w-4 text-purple-500" />
              <h3 className="font-medium">Etymology</h3>
            </div>
            <p className="text-muted-foreground text-sm">{word.etymology}</p>
          </div>
        )}

        {word.culturalNotes && (
          <div className="p-3 bg-muted rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              <h3 className="font-medium">Cultural Significance</h3>
            </div>
            <p className="text-muted-foreground text-sm">{word.culturalNotes}</p>
          </div>
        )}

        {word.relatedWords && word.relatedWords.length > 0 && (
          <div>
            <h3 className="font-medium mb-2">Related Words</h3>
            <div className="flex flex-wrap gap-2">
              {word.relatedWords.map((relatedWord, index) => (
                <Badge key={index} variant="outline">
                  {relatedWord}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {word._id && (
          <div className="mt-6">
            <WordFeedback wordId={word._id} />
          </div>
        )}
        {word._id && (
          <div className="mt-4">
            <WordComments wordId={word._id} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}