import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export async function GET() {
  try {
    await dbConnect()

    // Get the current date in YYYY-MM-DD format
    const today = new Date()
    const dateString = today.toISOString().split("T")[0]

    // Use the date string as a seed for deterministic selection
    // This ensures the same word is shown to all users on the same day
    const dateSeed = dateString
      .split("-")
      .map(Number)
      .reduce((a, b) => a + b, 0)

    // Count total words
    const totalWords = await Word.countDocuments({ status: "approved" })

    if (totalWords === 0) {
      return NextResponse.json({ error: "No approved words found" }, { status: 404 })
    }

    // Use the date seed to select a word
    // This is a simple algorithm that rotates through words based on the date
    const wordIndex = dateSeed % totalWords

    // Find the word at that index, sorted by creation date
    const word = await Word.findOne({ status: "approved" })
      .sort({ createdAt: 1 })
      .skip(wordIndex)
      .populate("createdBy", "name image")
      .lean()

    if (!word) {
      return NextResponse.json({ error: "Word of the day not found" }, { status: 404 })
    }

    return NextResponse.json({
      word,
      date: today.toISOString(),
    })
  } catch (error) {
    console.error("Error fetching word of the day:", error)
    return NextResponse.json({ error: "Failed to fetch word of the day" }, { status: 500 })
  }
}
