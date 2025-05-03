"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, BookmarkX } from "lucide-react"
import { toast } from "react-toastify"
import Link from "next/link"
import WordDetail from "@/components/word-detail"
import type { IWord } from "@/models/Word"

interface Favorite {
  _id: string
  userId: string
  wordId: IWord
  createdAt: string
}

export default function FavoritesList() {
  const { data: session, status } = useSession()
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedWord, setSelectedWord] = useState<IWord | null>(null)

  useEffect(() => {
    if (status === "authenticated") {
      fetchFavorites()
    } else if (status === "unauthenticated") {
      setLoading(false)
    }
  }, [status])

  const fetchFavorites = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/favorites")
      const result = await response.json()

      if (result.success) {
        setFavorites(result.data)
      } else {
        toast.error(result.error || "Failed to fetch favorites")
      }
    } catch (error) {
      console.error("Error fetching favorites:", error)
      toast.error("Failed to fetch favorites")
    } finally {
      setLoading(false)
    }
  }

  const removeFavorite = async (wordId: string) => {
    try {
      const response = await fetch(`/api/favorites/${wordId}`, {
        method: "DELETE",
      })
      const result = await response.json()

      if (result.success) {
        setFavorites(favorites.filter((fav) => fav.wordId._id !== wordId))
        toast.success("Removed from favorites")
      } else {
        toast.error(result.error || "Failed to remove from favorites")
      }
    } catch (error) {
      console.error("Error removing favorite:", error)
      toast.error("Failed to remove from favorites")
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
          <p className="text-muted-foreground">Loading favorites...</p>
        </div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sign in to view favorites</CardTitle>
          <CardDescription>You need to be logged in to save and view your favorite words</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Button asChild>
            <Link href="/auth/signin?callbackUrl=/favorites">Sign In</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (favorites.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No favorites yet</CardTitle>
          <CardDescription>You haven't added any words to your favorites yet</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Button asChild>
            <Link href="/">Browse Dictionary</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {selectedWord ? (
        <div className="space-y-4">
          <Button variant="outline" onClick={() => setSelectedWord(null)} className="mb-2">
            Back to favorites
          </Button>
          <WordDetail word={selectedWord} />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((favorite) => (
            <Card key={favorite._id} className="overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{favorite.wordId.balti}</CardTitle>
                    <CardDescription>{favorite.wordId.english}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFavorite(favorite.wordId._id)}
                    aria-label="Remove from favorites"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                  >
                    <BookmarkX className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                {favorite.wordId.phonetic && (
                  <p className="text-sm text-muted-foreground mb-2">/{favorite.wordId.phonetic}/</p>
                )}
                {favorite.wordId.categories && favorite.wordId.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {favorite.wordId.categories.slice(0, 3).map((category, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                    {favorite.wordId.categories.length > 3 && (
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        +{favorite.wordId.categories.length - 3}
                      </span>
                    )}
                  </div>
                )}
                <Button variant="link" className="p-0 h-auto mt-2" onClick={() => setSelectedWord(favorite.wordId)}>
                  View details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
