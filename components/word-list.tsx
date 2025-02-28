"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import WordCard from "./word-card"
import type { Word } from "@/lib/words"

export default function WordList() {
  const [words, setWords] = useState<Word[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRecentWords() {
      try {
        const response = await fetch("/api/words?limit=3")
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

    fetchRecentWords()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {words.map((word) => (
        <WordCard key={word._id?.toString()} word={word} />
      ))}
      <div className="col-span-full text-center mt-4">
        <Link href="/words" className="btn-primary inline-block">
          View All Words
        </Link>
      </div>
    </div>
  )
}

