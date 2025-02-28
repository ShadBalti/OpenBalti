"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Edit, Trash2 } from "lucide-react"
import type { Word } from "@/lib/words"

export default function AdminWordList() {
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWords() {
      try {
        const response = await fetch("/api/words")
        if (response.ok) {
          const data = await response.json()
          setWords(data)
        }
      } catch (error) {
        console.error("Error fetching words:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchWords()
  }, [])

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this word?")) {
      try {
        const response = await fetch(`/api/words/${id}`, {
          method: "DELETE",
        })

        if (response.ok) {
          setWords(words.filter((word) => word._id !== id))
        } else {
          alert("Failed to delete word")
        }
      } catch (error) {
        console.error("Error deleting word:", error)
        alert("An error occurred while deleting the word")
      }
    }
  }

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
      </div>
    )
  }

  if (words.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 mb-4">No words found in the dictionary yet.</p>
        <Link href="/admin/add-word" className="btn-primary">
          Add Your First Word
        </Link>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left">Word</th>
            <th className="py-3 px-4 text-left">Transliteration</th>
            <th className="py-3 px-4 text-left">Meaning</th>
            <th className="py-3 px-4 text-left">Part of Speech</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word._id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">{word.word}</td>
              <td className="py-3 px-4">{word.transliteration}</td>
              <td className="py-3 px-4">{word.meaning}</td>
              <td className="py-3 px-4">{word.partOfSpeech}</td>
              <td className="py-3 px-4 text-right">
                <div className="flex justify-end space-x-2">
                  <Link href={`/admin/edit-word/${word._id}`} className="p-1 text-blue-600 hover:text-blue-800">
                    <Edit size={18} />
                  </Link>
                  <button
                    onClick={() => handleDelete(word._id?.toString() || "")}
                    className="p-1 text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

