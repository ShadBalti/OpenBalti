import { NextResponse } from "next/server"
import { getWordById, updateWord, deleteWord } from "@/lib/words"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const word = await getWordById(params.id)

    if (!word) {
      return NextResponse.json({ error: "Word not found" }, { status: 404 })
    }

    return NextResponse.json(word)
  } catch (error) {
    console.error("Error fetching word:", error)
    return NextResponse.json({ error: "Failed to fetch word" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const wordData = await request.json()

    // Process related words if they exist
    if (wordData.relatedWords && typeof wordData.relatedWords === "string") {
      wordData.relatedWords = wordData.relatedWords
        .split("\n")
        .map((word: string) => word.trim())
        .filter(Boolean)
    }

    const updatedWord = await updateWord(params.id, wordData)
    return NextResponse.json(updatedWord)
  } catch (error) {
    console.error("Error updating word:", error)
    return NextResponse.json({ error: "Failed to update word" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await deleteWord(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting word:", error)
    return NextResponse.json({ error: "Failed to delete word" }, { status: 500 })
  }
}

