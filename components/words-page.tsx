"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { Loader2, RotateCw, ArrowLeftRight, Filter, Plus, X } from "lucide-react"
import WordList from "@/components/word-list"
import WordForm from "@/components/word-form"
import DialectBrowser from "@/components/dialect-browser"
import DifficultyBrowser from "@/components/difficulty-browser"
import FeedbackFilter from "@/components/feedback-filter"
import AdvancedSearch from "@/components/advanced-search"
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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

/**
 * The main component for the dictionary page, providing a comprehensive interface for browsing,
 * searching, filtering, adding, editing, and deleting words.
 * It integrates various sub-components like `AdvancedSearch`, `WordList`, and `WordForm`
 * to create a full-featured dictionary experience.
 * It manages the state for the word list, search terms, filters, and user interactions.
 *
 * @returns {JSX.Element} The rendered words page.
 */
interface WordsPageProps {
  initialWords?: IWord[]
}

export default function WordsPage({ initialWords = [] }: WordsPageProps) {
  const { data: session } = useSession()
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [words, setWords] = useState<IWord[]>(initialWords)
  const [isLoading, setIsLoading] = useState(initialWords.length === 0)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingWord, setEditingWord] = useState<IWord | null>(null)
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
  const [wordToDelete, setWordToDelete] = useState<string | null>(null)
  const [direction, setDirection] = useState<"balti-to-english" | "english-to-balti">("balti-to-english")
  const [activeTab, setActiveTab] = useState<"browse" | "add">("browse")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedDialect, setSelectedDialect] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [selectedFeedback, setSelectedFeedback] = useState<string | null>(null)
  const [showFiltersSheet, setShowFiltersSheet] = useState(false)
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)
  const [fuzzySearch, setFuzzySearch] = useState(false)

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
  }, [searchParams])

  const fetchWords = async (
    search = searchTerm,
    category = selectedCategory,
    dialect = selectedDialect,
    difficulty = selectedDifficulty,
    feedback = selectedFeedback,
    useFuzzy = fuzzySearch,
  ) => {
    try {
      setIsLoading(true)

      const hasMultipleFilters = [category, dialect, difficulty, feedback].filter(Boolean).length > 1

      if (useFuzzy || hasMultipleFilters) {
        const params = new URLSearchParams()
        if (search) params.append("search", search)
        if (useFuzzy) params.append("fuzzy", "true")
        if (category) params.append("categories", category)
        if (dialect) params.append("dialects", dialect)
        if (difficulty) params.append("difficulties", difficulty)
        if (feedback) params.append("feedback", feedback)

        const response = await fetch(`/api/words/search/advanced?${params.toString()}`)
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
      } else {
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

  const handleAdvancedSearch = (query: string, filters: any, fuzzy: boolean) => {
    setSearchTerm(query)
    setSelectedCategory(filters.categories?.[0] || null)
    setSelectedDialect(filters.dialects?.[0] || null)
    setSelectedDifficulty(filters.difficulties?.[0] || null)
    setSelectedFeedback(filters.feedback?.[0] || null)
    setFuzzySearch(fuzzy)
    fetchWords(
      query,
      filters.categories?.[0],
      filters.dialects?.[0],
      filters.difficulties?.[0],
      filters.feedback?.[0],
      fuzzy,
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <h1 className="text-2xl font-bold tracking-tight sr-only">Balti Dictionary</h1>
        <div className="flex-1 w-full md:w-auto">
          <AdvancedSearch onSearch={handleAdvancedSearch} isLoading={isLoading} />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Sheet open={showFiltersSheet} onOpenChange={setShowFiltersSheet}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Dictionary</SheetTitle>
                <SheetDescription>
                  Filter words by category, dialect, difficulty, and community feedback.
                </SheetDescription>
              </SheetHeader>

              <div className="py-4 space-y-6">
                <DialectBrowser selectedDialect={selectedDialect} onDialectChange={handleDialectChange} inline />

                <DifficultyBrowser
                  selectedDifficulty={selectedDifficulty}
                  onDifficultyChange={handleDifficultyChange}
                  inline
                />

                <FeedbackFilter selectedFeedback={selectedFeedback} onFeedbackChange={handleFeedbackChange} inline />
              </div>

              <SheetFooter>
                <div className="flex justify-between w-full">
                  <Button variant="outline" onClick={clearAllFilters} disabled={activeFiltersCount === 0}>
                    Clear all
                  </Button>
                  <SheetClose asChild>
                    <Button>Apply filters</Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Button
            onClick={toggleDirection}
            variant="outline"
            size="icon"
            aria-label={`Toggle direction to ${direction === "balti-to-english" ? "English to Balti" : "Balti to English"}`}
          >
            <ArrowLeftRight className="h-4 w-4" />
          </Button>

          <Button onClick={() => fetchWords()} variant="outline" size="icon" aria-label="Refresh word list">
            <RotateCw className="h-4 w-4" />
          </Button>

          {session && (
            <Button onClick={() => setActiveTab("add")} variant="default" className="gap-1">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Add Word</span>
            </Button>
          )}
        </div>
      </div>

      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {selectedCategory && (
            <Badge variant="outline" className="flex items-center gap-1">
              Category: {selectedCategory}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => handleCategoryChange(null)}
                aria-label={`Remove category filter: ${selectedCategory}`}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {selectedDialect && (
            <Badge variant="outline" className="flex items-center gap-1">
              Dialect: {selectedDialect}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => handleDialectChange(null)}
                aria-label={`Remove dialect filter: ${selectedDialect}`}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {selectedDifficulty && (
            <Badge variant="outline" className="flex items-center gap-1">
              Difficulty: {selectedDifficulty}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => handleDifficultyChange(null)}
                aria-label={`Remove difficulty filter: ${selectedDifficulty}`}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {selectedFeedback && (
            <Badge variant="outline" className="flex items-center gap-1">
              Feedback: {selectedFeedback}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => handleFeedbackChange(null)}
                aria-label={`Remove feedback filter: ${selectedFeedback}`}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={clearAllFilters}
            aria-label="Clear all filters"
          >
            Clear all
          </Button>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "browse" | "add")} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="browse">Browse Dictionary</TabsTrigger>
          {session ? (
            <TabsTrigger value="add">{editingWord ? "Edit Word" : "Add New Word"}</TabsTrigger>
          ) : (
            <TabsTrigger value="add" disabled>
              Add New Word (Login Required)
            </TabsTrigger>
          )}
        </TabsList>

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
