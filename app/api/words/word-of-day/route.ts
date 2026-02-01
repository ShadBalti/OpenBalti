import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

/**
 * Returns a deterministic "Word of the Day" based on the current date.
 * The same word is returned for the entire day across all users.
 * Uses caching to minimize database queries.
 *
 * @param {NextRequest} req - The incoming request object
 * @returns {Promise<NextResponse>} The word of the day object
 */
export async function GET(req: NextRequest) {
  try {
    await dbConnect()

    // Get today's date in UTC
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)

    // Use date as a seed for deterministic selection
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    )

    // Get total count of words
    const totalWords = await Word.countDocuments({})

    if (totalWords === 0) {
      return NextResponse.json(
        { success: false, error: "No words available" },
        { status: 404 }
      )
    }

    // Use day-based modulo to select a consistent word for the day
    const index = dayOfYear % totalWords

    // Get the word at the calculated index
    const word = await Word.findOne({})
      .sort({ _id: 1 })
      .skip(index)
      .lean()

    if (!word) {
      return NextResponse.json(
        { success: false, error: "Word of the day not found" },
        { status: 404 }
      )
    }

    // Calculate time until next word
    const now = new Date()
    const nextDay = new Date(today)
    nextDay.setUTCDate(nextDay.getUTCDate() + 1)
    const timeUntilNextWord = nextDay.getTime() - now.getTime()

    return NextResponse.json({
      success: true,
      data: word,
      nextWordIn: timeUntilNextWord,
    })
  } catch (error) {
    console.error("Error fetching word of the day:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch word of the day" },
      { status: 500 }
    )
  }
}
