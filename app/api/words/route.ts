import { NextResponse } from "next/server"
import { getWords, createWord } from "@/lib/words"

export async function GET() {
  try {
    const words = await getWords()
    return NextResponse.json(words)
  } catch (error) {
    console.error("Error fetching words:", error)
    return NextResponse.json({ error: "Failed to fetch words" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const wordData = await request.json()

    // Process related words if they exist
    if (wordData.relatedWords && typeof wordData.relatedWords === "string") {
      wordData.relatedWords = wordData.relatedWords
        .split("\n")
        .map((word: string) => word.trim())
        .filter(Boolean)
    }

    const newWord = await createWord(wordData)
    return NextResponse.json(newWord, { status: 201 })
  } catch (error) {
    console.error("Error creating word:", error)
    return NextResponse.json({ error: "Failed to create word" }, { status: 500 })
  }
}

