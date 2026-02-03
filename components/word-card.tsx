"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark, BookmarkCheck, Share2, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface WordCardProps {
  word: any
  isFavorite?: boolean
  onFavoriteToggle?: (isFavorite: boolean) => void
  onShare?: () => void
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Intermediate:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  Advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
}

export function WordCard({
  word,
  isFavorite = false,
  onFavoriteToggle,
  onShare,
}: WordCardProps) {
  const { data: session } = useSession()
  const { toast } = useToast()
  const [favorite, setFavorite] = useState(isFavorite)
  const [isLoading, setIsLoading] = useState(false)

  const handleFavoriteToggle = async () => {
    if (!session) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save favorites",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const method = favorite ? "DELETE" : "POST"
      const response = await fetch(`/api/favorites${favorite ? `/${word._id}` : ""}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: !favorite ? JSON.stringify({ wordId: word._id }) : undefined,
      })

      if (response.ok) {
        setFavorite(!favorite)
        onFavoriteToggle?.(!favorite)
        toast({
          title: favorite ? "Removed from favorites" : "Added to favorites",
        })
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to update favorites", variant: "destructive" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleShare = () => {
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}/words/${word.english.replace(/\s+/g, "-")}`
    const text = `${word.english} - ${word.balti}`

    if (navigator.share) {
      navigator.share({
        title: "OpenBalti Word",
        text: text,
        url: url,
      })
    } else {
      navigator.clipboard.writeText(url)
      toast({ title: "Link copied to clipboard!" })
    }

    onShare?.()
  }

  const difficultyColor = difficultyColors[word.difficultyLevel] || difficultyColors.Beginner
  const creator = word.createdBy as any

  return (
    <Card className="group hover:shadow-md hover:border-primary/50 transition-all">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{word.english}</h3>
            <p className="text-primary font-medium text-sm">{word.balti}</p>
          </div>
          <Badge className={`whitespace-nowrap ${difficultyColor}`} variant="secondary">
            {word.difficultyLevel}
          </Badge>
        </div>

        {word.pronunciation && (
          <p className="text-xs text-muted-foreground italic">{word.pronunciation}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Definition */}
        {word.definition && (
          <div>
            <p className="text-sm text-muted-foreground line-clamp-3">{word.definition}</p>
          </div>
        )}

        {/* Categories */}
        {word.categories && word.categories.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {word.categories.slice(0, 3).map((cat: string) => (
              <Badge key={cat} variant="outline" className="text-xs">
                {cat}
              </Badge>
            ))}
            {word.categories.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{word.categories.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Creator Info */}
        {creator && (
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <Avatar className="h-6 w-6">
              <AvatarImage src={creator.image} alt={creator.name} />
              <AvatarFallback>{creator.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground truncate">
                Added by <span className="font-medium">{creator.name}</span>
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 h-8 gap-1"
            onClick={handleFavoriteToggle}
            disabled={isLoading}
          >
            {favorite ? (
              <>
                <BookmarkCheck className="h-4 w-4" />
                <span className="text-xs">Saved</span>
              </>
            ) : (
              <>
                <Bookmark className="h-4 w-4" />
                <span className="text-xs">Save</span>
              </>
            )}
          </Button>

          <Button variant="ghost" size="sm" className="flex-1 h-8 gap-1" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            <span className="text-xs">Share</span>
          </Button>

          <Link href={`/words/${word.english.replace(/\s+/g, "-")}`}>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <span className="text-xs">Learn</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
