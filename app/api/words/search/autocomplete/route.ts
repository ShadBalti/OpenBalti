import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const query = url.searchParams.get("q") || ""
    const limit = Math.min(Number.parseInt(url.searchParams.get("limit") || "10"), 20)

    if (!query || query.length < 2) {
      return NextResponse.json({ success: true, data: [] })
    }

    await dbConnect()

    // Get suggestions from both Balti and English fields
    const suggestions = await Word.aggregate([
      {
        $match: {
          $or: [{ balti: { $regex: query, $options: "i" } }, { english: { $regex: query, $options: "i" } }],
        },
      },
      {
        $project: {
          balti: 1,
          english: 1,
          _id: 1,
        },
      },
      {
        $limit: limit,
      },
    ])

    return NextResponse.json({ success: true, data: suggestions })
  } catch (error) {
    console.error("Error fetching autocomplete suggestions:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch suggestions" }, { status: 500 })
  }
}
