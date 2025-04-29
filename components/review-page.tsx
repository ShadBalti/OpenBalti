"use client"

import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Badge } from "@/components/ui/badge"
import { Loader2, Search, CheckCircle, AlertCircle, Edit, Trash2, Save, X, Filter } from "lucide-react"
import type { IWord } from "@/models/Word"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function ReviewPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [words, setWords] = useState<IWord[]>([])
  const [filteredWords, setFilteredWords] = useState<IWord[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [editingWord, setEditingWord] = useState<IWord | null>(null)
  const [editForm, setEditForm] = useState({ balti: "", english: "" })
  const [deleteConfirm, setDeleteConfirm] = useState<{ open: boolean; wordId: string | null }>({
    open: false,
    wordId: null,
  })
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "balti" | "english">("newest")
  const [reviewFilter, setReviewFilter] = useState<"all" | "flagged" | "reviewed">("all")
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)

  useEffect(() => {
    // If not authenticated and authentication check is complete, redirect to login
    if (status === "unauthenticated") {
      toast.error("You need to be signed in to access the review page.")
      router.push("/auth/signin?callbackUrl=/review")
      return
    }

    // Only fetch words if authenticated
    if (status === "authenticated") {
      fetchWords()
    }
  }, [status, router])

  useEffect(() => {
    filterAndSortWords()
  }, [words, searchTerm, sortBy, reviewFilter])

  const fetchWords = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/words")
      const result = await response.json()

      if (result.success) {
        setWords(result.data)
      } else {
        toast.error(result.error || "Failed to fetch words")
      }
    } catch (error) {
      console.error("Error fetching words:", error)
      toast.error("Failed to fetch words")
    } finally {
      setLoading(false)
    }
  }

  const filterAndSortWords = () => {
    let filtered = [...words]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (word) =>
          word.balti.toLowerCase().includes(searchTerm.toLowerCase()) ||
          word.english.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply review status filter
    if (reviewFilter !== "all") {
      filtered = filtered.filter((word) => word.reviewStatus === reviewFilter)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        case "balti":
          return a.balti.localeCompare(b.balti)
        case "english":
          return a.english.localeCompare(b.english)
        default:
          return 0
      }
    })

    setFilteredWords(filtered)
  }

  const handleUpdateWord = async () => {
    if (!editingWord) return

    try {
      const response = await fetch(`/api/words/${editingWord._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          balti: editForm.balti,
          english: editForm.english,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Word updated successfully!")
        setEditingWord(null)
        fetchWords()
        // Mark as reviewed after update
        await updateReviewStatus(editingWord._id, "reviewed")
      } else {
        if (result.error === "Authentication required") {
          toast.error("Your session has expired. Please log in again.")
          router.push("/auth/signin?callbackUrl=/review")
        } else {
          toast.error(result.error || "Failed to update word")
        }
      }
    } catch (error) {
      console.error("Error updating word:", error)
      toast.error("Failed to update word")
    }
  }

  const handleDeleteWord = async () => {
    if (!deleteConfirm.wordId) return

    try {
      const response = await fetch(`/api/words/${deleteConfirm.wordId}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Word deleted successfully!")
        fetchWords()
      } else {
        if (result.error === "Authentication required") {
          toast.error("Your session has expired. Please log in again.")
          router.push("/auth/signin?callbackUrl=/review")
        } else {
          toast.error(result.error || "Failed to delete word")
        }
      }
    } catch (error) {
      console.error("Error deleting word:", error)
      toast.error("Failed to delete word")
    } finally {
      setDeleteConfirm({ open: false, wordId: null })
    }
  }

  const updateReviewStatus = async (wordId: string, status: "flagged" | "reviewed" | null) => {
    try {
      setIsUpdatingStatus(true)
      const response = await fetch(`/api/words/${wordId}/review`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reviewStatus: status,
        }),
      })

      if (response.status === 401) {
        toast.error("Your session has expired. Please log in again.")
        router.push("/auth/signin?callbackUrl=/review")
        return false
      }

      if (!response.ok) {
        const errorData = await response.json()
        toast.error(errorData.error || `Error: ${response.statusText}`)
        return false
      }

      const result = await response.json()

      if (result.success) {
        // Update the word in the local state
        setWords((prevWords) =>
          prevWords.map((word) => (word._id === wordId ? { ...word, reviewStatus: status } : word)),
        )

        return true
      } else {
        toast.error(result.error || "Failed to update review status")
        return false
      }
    } catch (error) {
      console.error("Error updating review status:", error)
      toast.error("Failed to update review status")
      return false
    } finally {
      setIsUpdatingStatus(false)
    }
  }

  const startEditing = (word: IWord) => {
    setEditingWord(word)
    setEditForm({
      balti: word.balti,
      english: word.english,
    })
  }

  const cancelEditing = () => {
    setEditingWord(null)
  }

  const markAsFlagged = async (wordId: string) => {
    const success = await updateReviewStatus(wordId, "flagged")
    if (success) {
      toast.info("Word flagged for review")
    }
  }

  const markAsReviewed = async (wordId: string) => {
    const success = await updateReviewStatus(wordId, "reviewed")
    if (success) {
      toast.success("Word marked as reviewed")
    }
  }

  const clearReviewStatus = async (wordId: string) => {
    const success = await updateReviewStatus(wordId, null)
    if (success) {
      toast.info("Review status cleared")
    }
  }

  const getReviewStatusBadge = (status: "flagged" | "reviewed" | null) => {
    if (status === "flagged") {
      return (
        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
          <AlertCircle className="h-3 w-3 mr-1" />
          Needs Review
        </Badge>
      )
    } else if (status === "reviewed") {
      return (
        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          <CheckCircle className="h-3 w-3 mr-1" />
          Reviewed
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="text-muted-foreground">
        Not Reviewed
      </Badge>
    )
  }

  const getReviewedCount = () => {
    return words.filter((word) => word.reviewStatus === "reviewed").length
  }

  const getFlaggedCount = () => {
    return words.filter((word) => word.reviewStatus === "flagged").length
  }

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="flex flex-col items-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={reviewFilter} onValueChange={(value) => setReviewFilter(value as any)}>
            <SelectTrigger className="w-[160px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Entries</SelectItem>
              <SelectItem value="flagged">Needs Review</SelectItem>
              <SelectItem value="reviewed">Reviewed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="balti">Balti (A-Z)</SelectItem>
              <SelectItem value="english">English (A-Z)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">Word List</TabsTrigger>
          <TabsTrigger value="stats">Review Stats</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="mt-6">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                <p className="text-muted-foreground">Loading dictionary entries...</p>
              </div>
            </div>
          ) : filteredWords.length === 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>No Words Found</CardTitle>
                <CardDescription>
                  {searchTerm
                    ? "No words match your search criteria. Try a different search term."
                    : reviewFilter !== "all"
                      ? `No words with status "${reviewFilter}" found.`
                      : "No words found in the dictionary."}
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Dictionary Entries</CardTitle>
                  <Badge variant="outline">
                    {filteredWords.length} {filteredWords.length === 1 ? "word" : "words"}
                  </Badge>
                </div>
                <CardDescription>
                  Review and edit dictionary entries to ensure accuracy and completeness
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[30%]">Balti</TableHead>
                        <TableHead className="w-[30%]">English</TableHead>
                        <TableHead className="w-[20%]">Status</TableHead>
                        <TableHead className="w-[20%] text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredWords.map((word) => (
                        <TableRow key={word._id} className="group">
                          <TableCell className="font-medium">{word.balti}</TableCell>
                          <TableCell>{word.english}</TableCell>
                          <TableCell>{getReviewStatusBadge(word.reviewStatus)}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => startEditing(word)}
                                aria-label="Edit word"
                                className="h-8 w-8 text-muted-foreground hover:text-primary"
                                disabled={isUpdatingStatus}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => markAsFlagged(word._id)}
                                aria-label="Flag for review"
                                className="h-8 w-8 text-muted-foreground hover:text-yellow-500"
                                disabled={isUpdatingStatus || word.reviewStatus === "flagged"}
                              >
                                <AlertCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => markAsReviewed(word._id)}
                                aria-label="Mark as reviewed"
                                className="h-8 w-8 text-muted-foreground hover:text-green-500"
                                disabled={isUpdatingStatus || word.reviewStatus === "reviewed"}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setDeleteConfirm({ open: true, wordId: word._id })}
                                aria-label="Delete word"
                                className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                disabled={isUpdatingStatus}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        <TabsContent value="stats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Review Statistics</CardTitle>
              <CardDescription>Overview of dictionary review progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg">
                  <span className="text-3xl font-bold text-primary">{words.length}</span>
                  <span className="text-sm text-muted-foreground">Total Entries</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
                  <span className="text-3xl font-bold text-green-600 dark:text-green-400">{getReviewedCount()}</span>
                  <span className="text-sm text-muted-foreground">Reviewed</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                  <span className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{getFlaggedCount()}</span>
                  <span className="text-sm text-muted-foreground">Flagged for Review</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Review Progress</h3>
                <div className="w-full bg-muted rounded-full h-4 mb-2">
                  <div
                    className="bg-primary h-4 rounded-full"
                    style={{
                      width: `${words.length > 0 ? (getReviewedCount() / words.length) * 100 : 0}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {getReviewedCount()} of {words.length} words reviewed (
                  {words.length > 0 ? Math.round((getReviewedCount() / words.length) * 100) : 0}%)
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Dialog */}
      {editingWord && (
        <Card className="border-primary/20 mt-6">
          <CardHeader>
            <CardTitle>Edit Word</CardTitle>
            <CardDescription>Make corrections to the dictionary entry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="edit-balti">Balti Word</Label>
                <Input
                  id="edit-balti"
                  value={editForm.balti}
                  onChange={(e) => setEditForm({ ...editForm, balti: e.target.value })}
                  placeholder="Enter Balti word"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-english">English Translation</Label>
                <Input
                  id="edit-english"
                  value={editForm.english}
                  onChange={(e) => setEditForm({ ...editForm, english: e.target.value })}
                  placeholder="Enter English translation"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={cancelEditing}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleUpdateWord}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteConfirm.open} onOpenChange={(open) => setDeleteConfirm({ ...deleteConfirm, open })}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the word from the dictionary.
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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}
