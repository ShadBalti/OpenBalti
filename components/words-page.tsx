"use client"

import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import WordList from "@/components/word-list"
import WordForm from "@/components/word-form"
import SearchBar from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { Loader2, RotateCw, ArrowLeftRight } from "lucide-react"
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
import type { IWord } from "@/models/Word"
// Add useSession import at the top
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function WordsPage() {
  const { data: session } = useSession()
  const [words, setWords] = useState<IWord[]>([])
  const [loading, setLoading] = useState(true)
  const [direction, setDirection] = useState<"balti-to-english" | "english-to-balti">("balti-to-english")
  const [searchTerm, setSearchTerm] = useState("")
  const [editingWord, setEditingWord] = useState<IWord | null>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<{ open: boolean; wordId: string | null }>({
    open: false,
    wordId: null,
  })
  const [activeTab, setActiveTab] = useState<"browse" | "add">("browse")

  useEffect(() => {
    fetchWords()
  }, [searchTerm])

  const fetchWords = async () => {
    try {
      setLoading(true)
      const url = searchTerm ? `/api/words?search=${encodeURIComponent(searchTerm)}` : "/api/words"

      const response = await fetch(url)
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

  const handleAddWord = async (wordData: { balti: string; english: string }) => {
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
        toast.success("Word added successfully!")
        fetchWords()
        setActiveTab("browse")
      } else {
        toast.error(result.error || "Failed to add word")
      }
    } catch (error) {
      console.error("Error adding word:", error)
      toast.error("Failed to add word")
    }
  }

  const handleUpdateWord = async (id: string, wordData: { balti: string; english: string }) => {
    try {
      const response = await fetch(`/api/words/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wordData),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Word updated successfully!")
        setEditingWord(null)
        fetchWords()
      } else {
        toast.error(result.error || "Failed to update word")
      }
    } catch (error) {
      console.error("Error updating word:", error)
      toast.error("Failed to update word")
    }
  }

  const confirmDelete = (id: string) => {
    setDeleteConfirm({ open: true, wordId: id })
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
        toast.error(result.error || "Failed to delete word")
      }
    } catch (error) {
      console.error("Error deleting word:", error)
      toast.error("Failed to delete word")
    } finally {
      setDeleteConfirm({ open: false, wordId: null })
    }
  }

  const toggleDirection = () => {
    setDirection((prev) => (prev === "balti-to-english" ? "english-to-balti" : "balti-to-english"))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="flex gap-2">
          <Button onClick={toggleDirection} variant="outline" className="whitespace-nowrap">
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            {direction === "balti-to-english" ? "Balti → English" : "English → Balti"}
          </Button>
          <Button onClick={() => fetchWords()} variant="outline" size="icon" aria-label="Refresh word list">
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "browse" | "add")} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="browse">Browse Dictionary</TabsTrigger>
          {session ? (
            <TabsTrigger value="add">Add New Word</TabsTrigger>
          ) : (
            <TabsTrigger value="add" disabled>
              Add New Word (Login Required)
            </TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="browse" className="mt-6">
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                <p className="text-muted-foreground">Loading dictionary...</p>
              </div>
            </div>
          ) : (
            <WordList
              words={words}
              direction={direction}
              onEdit={(word) => {
                if (!session) {
                  toast.error("Please log in to edit words")
                  return
                }
                setEditingWord(word)
                setActiveTab("add")
              }}
              onDelete={(id) => {
                if (!session) {
                  toast.error("Please log in to delete words")
                  return
                }
                confirmDelete(id)
              }}
              showActions={!!session}
            />
          )}
        </TabsContent>
        <TabsContent value="add" className="mt-6">
          {session ? (
            <WordForm
              initialData={editingWord}
              onSubmit={editingWord ? (data) => handleUpdateWord(editingWord._id, data) : handleAddWord}
              onCancel={editingWord ? () => setEditingWord(null) : undefined}
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
