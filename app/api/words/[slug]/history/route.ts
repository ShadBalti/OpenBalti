import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import WordHistory from "@/models/WordHistory"
import Word from "@/models/Word"

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    await dbConnect()

    // Find word by slug
    const word = await Word.findOne({ slug: params.slug })
    if (!word) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Get query parameters
    const searchParams = req.nextUrl.searchParams
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10)
    const page = Number.parseInt(searchParams.get("page") || "1", 10)

    // Calculate pagination
    const skip = (page - 1) * limit

    // Fetch history with pagination using word ID
    const history = await WordHistory.find({ wordId: word._id }).sort({ createdAt: -1 }).skip(skip).limit(limit).lean()

    // Get total count for pagination
    const totalCount = await WordHistory.countDocuments({ wordId: word._id })

    return NextResponse.json({
      success: true,
      data: {
        word: {
          id: word._id,
          balti: word.balti,
          english: word.english,
          slug: word.slug,
        },
        history,
      },
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    console.error(`Error fetching history for word slug ${params.slug}:`, error)
    return NextResponse.json({ success: false, error: "Failed to fetch word history" }, { status: 500 })
  }
}
