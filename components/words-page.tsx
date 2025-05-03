"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { Loader2, Search } from "lucide-react"
import WordList from "@/components/word-list"
import WordForm from "@/components/word-form"
import type { IWord } from "@/models/Word"

import { Button } from "@/components/ui/button"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function WordsPage() {
  const { data: session } = useSession()
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [words, setWords] = useState<IWord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingWord, setEditingWord] = useState<IWord | null>(null)
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [wordToDelete, setWordToDelete] = useState<string | null>(null)
  const [direction, setDirection] = useState<"balti-to-english" | "english-to-balti">("balti-to-english")
  const [activeTab, setActiveTab] = useState<"browse" | "add" | "all" | "recent" | "popular">("browse")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDialect, setSelectedDialect] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null)
  const [showFiltersSheet, setShowFiltersSheet] = useState(false)
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  // Initialize state from URL parameters
  useEffect(() => {
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category")
    const dialect = searchParams.get("dialect")
    const difficulty = searchParams.get("difficulty")
    const feedback = searchParams.get("feedback")

    setSearchTerm(search)
    setSelectedCategory(category)
    setSelectedDialect(dialect)
    setSelectedDifficulty(difficulty)
    setSelectedFeedback(feedback)

    fetchWords(search, category, dialect, difficulty, feedback)

    // Count active filters
    let count = 0
    if (category) count++
    if (dialect) count++
    if (difficulty) count++
    if (feedback) count++
    setActiveFiltersCount(count)

    // Update search query when URL parameter changes
    setSearchQuery(searchParams.get("q") || "")
  }, [searchParams])

  const fetchWords = async (
    search = searchTerm,
    category = selectedCategory,
    dialect = selectedDialect,
    difficulty = selectedDifficulty,
    feedback = selectedFeedback,
  ) => {
    try {
      setIsLoading(true)

      // Build query string
      const params = new URLSearchParams()
      if (search) params.append("search", search)
      if (category) params.append("category", category)
      if (dialect) params.append("dialect", dialect)
      if (difficulty) params.append("difficulty", difficulty)
      if (feedback) params.append("feedback", feedback)

      const response = await fetch(`/api/words?${params.toString()}`)
      const result = await response.json()

      if (result.success) {
        setWords(result.data)
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to fetch words",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching words:", error)
      toast({
        title: "Error",
        description: "Failed to fetch words",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const updateUrl = (
    search = searchTerm,
    category = selectedCategory,
    dialect = selectedDialect,
    difficulty = selectedDifficulty,
    feedback = selectedFeedback,
  ) => {
    const params = new URLSearchParams()
    if (search) params.append("search", search)
    if (category) params.append("category", category)
    if (dialect) params.append("dialect", dialect)
    if (difficulty) params.append("difficulty", difficulty)
    if (feedback) params.append("feedback", feedback)

    const queryString = params.toString()
    router.push(queryString ? `/?${queryString}` : "/")
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    updateUrl(term, selectedCategory, selectedDialect, selectedDifficulty, selectedFeedback)
  }

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    updateUrl(searchTerm, category, selectedDialect, selectedDifficulty, selectedFeedback)
  }

  const handleDialectChange = (dialect: string | null) => {
    setSelectedDialect(dialect)
    updateUrl(searchTerm, selectedCategory, dialect, selectedDifficulty, selectedFeedback)
  }

  const handleDifficultyChange = (difficulty: string | null) => {
    setSelectedDifficulty(difficulty)
    updateUrl(searchTerm, selectedCategory, selectedDialect, difficulty, selectedFeedback)
  }

  const handleFeedbackChange = (feedback: string | null) => {
    setSelectedFeedback(feedback)
    updateUrl(searchTerm, selectedCategory, selectedDialect, selectedDifficulty, feedback)
  }

  const clearAllFilters = () => {
    setSelectedCategory(null)
    setSelectedDialect(null)
    setSelectedDifficulty(null)
    setSelectedFeedback(null)
    setActiveFiltersCount(0)
    updateUrl(searchTerm, null, null, null, null)
    setShowFiltersSheet(false)
  }

  const handleAddWord = async (wordData: any) => {
    try {
      const response = await fetch("/api/words", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wordData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Word added successfully",
        })
        setActiveTab("browse")
        fetchWords() // Refresh the word list
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to add word",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error adding word:", error)
      toast({
        title: "Error",
        description: "Failed to add word",
        variant: "destructive",
      })
    }
  }

  const handleEditWord = (word: IWord) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please log in to edit words",
        variant: "destructive",
      })
      return
    }
    setEditingWord(word)
    setActiveTab("add")
  }

  const handleUpdateWord = async (wordData: any) => {
    if (!editingWord) return

    try {
      const response = await fetch(`/api/words/${editingWord._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wordData),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Word updated successfully",
        })
        setActiveTab("browse")
        setEditingWord(null)
        fetchWords() // Refresh the word list
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
    }
  }

  const confirmDelete = (id: string) => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please log in to delete words",
        variant: "destructive",
      })
      return
    }
    setWordToDelete(id)
    setDeleteConfirmOpen(true)
  }

  const handleDeleteWord = async () => {
    if (!wordToDelete) return

    try {
      const response = await fetch(`/api/words/${wordToDelete}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Word deleted successfully",
        })
        fetchWords() // Refresh the word list
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
      setDeleteConfirmOpen(false)
      setWordToDelete(null)
    }
  }

  const toggleDirection = () => {
    setDirection((prev) => (prev === "balti-to-english" ? "english-to-balti" : "balti-to-english"))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?q=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push("/")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dictionary</CardTitle>
        <CardDescription>Browse and search for Balti words and their translations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="search"
            placeholder="Search words..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "browse" | "add" | "all" | "recent" | "popular")}
        >
          <TabsList>
            <TabsTrigger value="all">All Words</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            {session && <TabsTrigger value="add">{editingWord ? "Edit Word" : "Add New Word"}</TabsTrigger>}
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <WordList query={searchQuery} sort="alphabetical" />
          </TabsContent>
          <TabsContent value="recent" className="space-y-4">
            <WordList query={searchQuery} sort="recent" />
          </TabsContent>
          <TabsContent value="popular" className="space-y-4">
            <WordList query={searchQuery} sort="popular" />
          </TabsContent>
          <TabsContent value="browse" className="focus:outline-none">
            {isLoading ? (
              <div className="flex justify-center items-center py-16">
                <div className="flex flex-col items-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" aria-hidden="true" />
                  <p className="text-muted-foreground">Loading dictionary...</p>
                </div>
              </div>
            ) : words.length > 0 ? (
              <WordList
                words={words}
                direction={direction}
                onEdit={handleEditWord}
                onDelete={confirmDelete}
                showActions={!!session}
              />
            ) : (
              <Card className="p-8 text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <p className="text-muted-foreground">No words found</p>
                  {searchTerm || activeFiltersCount > 0 ? (
                    <Button variant="outline" onClick={clearAllFilters}>
                      Clear all filters
                    </Button>
                  ) : session ? (
                    <Button onClick={() => setActiveTab("add")}>Add your first word</Button>
                  ) : (
                    <Button asChild>
                      <Link href="/auth/signin">Sign in to add words</Link>
                    </Button>
                  )}
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="add" className="focus:outline-none">
            {session ? (
              <WordForm
                initialData={editingWord}
                onSubmit={editingWord ? handleUpdateWord : handleAddWord}
                onCancel={() => {
                  setEditingWord(null)
                  setActiveTab("browse")
                }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 border rounded-md">
                <p className="mb-4 text-muted-foreground">You need to be logged in to add or edit words</p>
                <Button asChild>
                  <Link href="/auth/signin?callbackUrl=/">Sign In</Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>

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
    </Card>
  )
}
