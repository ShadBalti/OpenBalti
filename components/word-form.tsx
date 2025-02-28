"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Word } from "@/lib/words"

interface WordFormProps {
  initialData?: Word
}

export default function WordForm({ initialData }: WordFormProps = {}) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    word: initialData?.word || "",
    transliteration: initialData?.transliteration || "",
    meaning: initialData?.meaning || "",
    partOfSpeech: initialData?.partOfSpeech || "noun",
    example: initialData?.example || "",
    pronunciation: initialData?.pronunciation || "",
    etymology: initialData?.etymology || "",
    relatedWords: initialData?.relatedWords?.join("\n") || "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Process related words
      const processedData = {
        ...formData,
        relatedWords: formData.relatedWords
          ? formData.relatedWords
              .split("\n")
              .map((word) => word.trim())
              .filter(Boolean)
          : [],
      }

      const url = initialData?._id ? `/api/words/${initialData._id}` : "/api/words"

      const method = initialData?._id ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      })

      if (!response.ok) {
        throw new Error("Failed to save word")
      }

      // Redirect back to admin page
      router.push("/admin")
      router.refresh()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred while saving the word.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="word" className="block text-sm font-medium text-gray-700 mb-1">
              Balti Word
            </label>
            <input
              type="text"
              id="word"
              name="word"
              value={formData.word}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div>
            <label htmlFor="transliteration" className="block text-sm font-medium text-gray-700 mb-1">
              Transliteration
            </label>
            <input
              type="text"
              id="transliteration"
              name="transliteration"
              value={formData.transliteration}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="meaning" className="block text-sm font-medium text-gray-700 mb-1">
            Meaning
          </label>
          <input
            type="text"
            id="meaning"
            name="meaning"
            value={formData.meaning}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>

        <div>
          <label htmlFor="partOfSpeech" className="block text-sm font-medium text-gray-700 mb-1">
            Part of Speech
          </label>
          <select
            id="partOfSpeech"
            name="partOfSpeech"
            value={formData.partOfSpeech}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
            <option value="adverb">Adverb</option>
            <option value="pronoun">Pronoun</option>
            <option value="preposition">Preposition</option>
            <option value="conjunction">Conjunction</option>
            <option value="interjection">Interjection</option>
          </select>
        </div>

        <div>
          <label htmlFor="example" className="block text-sm font-medium text-gray-700 mb-1">
            Example (Optional)
          </label>
          <textarea
            id="example"
            name="example"
            value={formData.example}
            onChange={handleChange}
            className="input-field min-h-[80px]"
          />
        </div>

        <div>
          <label htmlFor="pronunciation" className="block text-sm font-medium text-gray-700 mb-1">
            Pronunciation (Optional)
          </label>
          <input
            type="text"
            id="pronunciation"
            name="pronunciation"
            value={formData.pronunciation}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="etymology" className="block text-sm font-medium text-gray-700 mb-1">
            Etymology (Optional)
          </label>
          <input
            type="text"
            id="etymology"
            name="etymology"
            value={formData.etymology}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="relatedWords" className="block text-sm font-medium text-gray-700 mb-1">
            Related Words (Optional, one per line)
          </label>
          <textarea
            id="relatedWords"
            name="relatedWords"
            value={formData.relatedWords}
            onChange={handleChange}
            className="input-field min-h-[100px]"
            placeholder="Enter related words, one per line"
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-70">
            {isSubmitting ? "Saving..." : initialData ? "Update Word" : "Add Word"}
          </button>
        </div>
      </div>
    </form>
  )
}

