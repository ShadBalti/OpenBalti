"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2, Trash2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import WordForm from "@/components/word-form"
import { slugToWord, wordToSlug } from "@/lib/utils"
import type { IWord } from "@/models/Word"

export default function WordEditPage() {
  const router = useRouter()
  const params = useParams()
  const { data: session } = useSession()
  const { toast } = useToast()
  
  const slug = params.slug as string
  const [word, setWord] = useState<IWord | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    fetchWord()
  }, [slug])

  useEffect(() => {
    if (word && session) {
      // Allow edit if user is creator, admin, founder, or moderator
      // Convert both to strings for comparison since createdBy can be an object or ID string
      const creatorId = typeof (word.createdBy as any) === 'object' 
        ? (word.createdBy as any)?._id?.toString() 
        : (word.createdBy as any)?.toString()
      const isCreator = session.user?.id === creatorId
      const isAdmin = session.user?.role === "admin"
      const isFounder = (session.user as any)?.isFounder === true
      const isModerator = (session.user as any)?.isModerator === true
      
      setAuthorized(isCreator || isAdmin || isFounder || isModerator)
    }
  }, [word, session])

  const fetchWord = async () => {
    try {
      setLoading(true)
      const searchWord = slugToWord(slug)
      const response = await fetch(`/api/words/search?q=${encodeURIComponent(searchWord)}`)
      const result = await response.json()

      if (result.success && result.data.length > 0) {
        setWord(result.data[0])
      } else {
        toast({
          title: "Word not found",
          description: "The word you're trying to edit doesn't exist",
          variant: "destructive",
        })
        router.push("/dictionary")
      }
    } catch (error) {
      console.error("Error fetching word:", error)
      toast({
        title: "Error",
        description: "Failed to load the word",
        variant: "destructive",
      })
      router.push("/dictionary")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (formData: any) => {
    if (!word) return

    try {
      setSubmitting(true)
      const response = await fetch(`/api/words/${word._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Word updated successfully",
        })
        router.push(`/words/${wordToSlug(word.english)}`)
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to update word",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error updating word:", error)
      toast({
        title: "Error",
        description: "Failed to update word",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!word) return

    const confirmed = window.confirm(
      "Are you sure you want to delete this word? This action cannot be undone."
    )
    if (!confirmed) return

    try {
      setDeleting(true)
      const response = await fetch(`/api/words/${word._id}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Word deleted successfully",
        })
        router.push("/dictionary")
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
      setDeleting(false)
    }
  }

  if (!session) {
    return (
      <div className="container max-w-2xl py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>You must be logged in to edit words</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="container max-w-2xl py-8 flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!word || !authorized) {
    return (
      <div className="container max-w-2xl py-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              {!word ? "Word not found" : "You don't have permission to edit this word"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/dictionary">Back to Dictionary</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-2xl py-8">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/words/${wordToSlug(word.english)}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Edit Word</CardTitle>
          <CardDescription>
            Update "{word.english}" ({word.balti})
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WordForm
            initialData={word}
            isSubmitting={submitting}
            onSubmit={handleSubmit}
            onCancel={() => router.back()}
          />
        </CardContent>
      </Card>

      {/* Delete Section */}
      <Card className="border-destructive mt-6">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>Permanently delete this word from the dictionary</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={deleting}
            className="gap-2"
          >
            {deleting && <Loader2 className="h-4 w-4 animate-spin" />}
            <Trash2 className="h-4 w-4" />
            Delete Word
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
