import Link from "next/link"
import type { Word } from "@/lib/words"

interface WordProps {
  word: Word
}

export default function WordCard({ word }: WordProps) {
  return (
    <Link href={`/words/${word._id}`}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{word.word}</h3>
            <p className="text-sm text-gray-500">{word.transliteration}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{word.partOfSpeech}</span>
        </div>
        <p className="mt-3 text-gray-700">{word.meaning}</p>
        {word.example && (
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium">Example:</span> {word.example}
          </p>
        )}
      </div>
    </Link>
  )
}

