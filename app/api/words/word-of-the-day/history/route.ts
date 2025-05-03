import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "7", 10)
    const startDateParam = searchParams.get("startDate")

    // Parse the start date or use today
    const startDate = startDateParam ? new Date(startDateParam) : new Date()

    await dbConnect()

    // Count total words
    const totalWords = await Word.countDocuments({ status: "approved" })

    if (totalWords === 0) {
      return NextResponse.json({ error: "No approved words found" }, { status: 404 })
    }

    const words = []

    // Get words for each day in the range
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate)
      date.setDate(date.getDate() - i)
      const dateString = date.toISOString().split("T")[0]

      // Use the date string as a seed for deterministic selection
      const dateSeed = dateString
        .split("-")
        .map(Number)
        .reduce((a, b) => a + b, 0)

      // Use the date seed to select a word
      const wordIndex = dateSeed % totalWords

      // Find the word at that index
      const word = await Word.findOne({ status: "approved" })
        .sort({ createdAt: 1 })
        .skip(wordIndex)
        .populate("createdBy", "name image")
        .lean()

      if (word) {
        words.push({
          ...word,
          date: date.toISOString(),
        })
      }
    }

    return NextResponse.json({ words })
  } catch (error) {
    console.error("Error fetching word history:", error)
    return NextResponse.json({ error: "Failed to fetch word history" }, { status: 500 })
  }
}
