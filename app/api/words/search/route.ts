import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

/**
 * Handles GET requests to search for a specific word by query.
 * Used by the edit page to find words by English translation.
 * Supports the 'q' parameter for simple word lookup.
 *
 * @param {NextRequest} req - The incoming Next.js request object.
 * @returns {Promise<NextResponse>} A response containing matching words or an error message.
 */
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const q = url.searchParams.get("q") || ""

    if (!q) {
      return NextResponse.json(
        { success: false, error: "Search query is required", data: [] },
        { status: 400 }
      )
    }

    await dbConnect()

    // Escape regex special characters to prevent regex injection
    const escapedQuery = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    // Search for exact match first (case-insensitive), then partial matches
    const word = await Word.findOne({
      english: { $regex: new RegExp(`^${escapedQuery}$`, "i") },
    }).lean()

    if (word) {
      return NextResponse.json({ success: true, data: [word] })
    }

    // If no exact match, search for partial matches
    const partialMatches = await Word.find({
      english: { $regex: escapedQuery, $options: "i" },
    })
      .lean()
      .limit(10)

    return NextResponse.json({ success: true, data: partialMatches })
  } catch (error) {
    console.error("Error searching words:", error)
    return NextResponse.json(
      { success: false, error: "Failed to search words", data: [] },
      { status: 500 }
    )
  }
}
