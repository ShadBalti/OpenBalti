import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import WordHistory from "@/models/WordHistory"
import Word from "@/models/Word"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log(`🔄 API: Connecting to MongoDB for fetching history of word ID: ${params.id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for fetching history of word ID: ${params.id}`)

    // First check if the word exists
    const word = await Word.findById(params.id)
    if (!word) {
      console.log(`⚠️ API: Word with ID ${params.id} not found`)
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Get query parameters
    const searchParams = req.nextUrl.searchParams
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10)
    const page = Number.parseInt(searchParams.get("page") || "1", 10)

    // Calculate pagination
    const skip = (page - 1) * limit

    // Fetch history with pagination
    const history = await WordHistory.find({ wordId: params.id }).sort({ createdAt: -1 }).skip(skip).limit(limit).lean()

    // Get total count for pagination
    const totalCount = await WordHistory.countDocuments({ wordId: params.id })

    console.log(`📋 API: Successfully fetched ${history.length} history entries for word ID: ${params.id}`)

    return NextResponse.json({
      success: true,
      data: {
        word: {
          id: word._id,
          balti: word.balti,
          english: word.english,
          reviewStatus: word.reviewStatus,
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
    console.error(`❌ API Error fetching history for word ID ${params.id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to fetch word history" }, { status: 500 })
  }
}
