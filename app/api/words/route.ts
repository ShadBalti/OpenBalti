import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import { logActivity } from "@/lib/activity-logger"

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const search = url.searchParams.get("search") || ""
    const category = url.searchParams.get("category")
    const dialect = url.searchParams.get("dialect")
    const difficulty = url.searchParams.get("difficulty")
    const feedbackFilter = url.searchParams.get("feedback")

    await dbConnect()

    const query: any = {}

    // Search query
    if (search) {
      query.$or = [{ balti: { $regex: search, $options: "i" } }, { english: { $regex: search, $options: "i" } }]
    }

    // Category filter
    if (category) {
      query.categories = category
    }

    // Dialect filter
    if (dialect) {
      query.dialect = dialect
    }

    // Difficulty filter
    if (difficulty) {
      query.difficultyLevel = difficulty
    }

    // Feedback filter
    if (feedbackFilter) {
      query[`feedbackStats.${feedbackFilter}`] = { $gt: 0 }
    }

    const words = await Word.find(query).sort({ createdAt: -1 })

    return NextResponse.json({ success: true, data: words })
  } catch (error) {
    console.error("Error fetching words:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch words" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const { balti, english, phonetic, categories, dialect, usageNotes, relatedWords, difficultyLevel } =
      await req.json()

    if (!balti || !english) {
      return NextResponse.json(
        { success: false, error: "Balti word and English translation are required" },
        { status: 400 },
      )
    }

    await dbConnect()

    // Check if word already exists
    const existingWord = await Word.findOne({
      balti: { $regex: new RegExp(`^${balti}$`, "i") },
    })

    if (existingWord) {
      return NextResponse.json(
        { success: false, error: "This Balti word already exists in the dictionary" },
        { status: 409 },
      )
    }

    const newWord = await Word.create({
      balti,
      english,
      phonetic,
      categories,
      dialect,
      usageNotes,
      relatedWords,
      difficultyLevel,
      createdBy: session.user.id,
      feedbackStats: { useful: 0, trusted: 0, needsReview: 0 },
    })

    await logActivity({
      userId: session.user.id,
      action: "created_word",
      details: `Created new word: ${balti} (${english})`,
      targetId: newWord._id,
      targetType: "word",
    })

    return NextResponse.json({
      success: true,
      message: "Word added successfully",
      data: newWord,
    })
  } catch (error) {
    console.error("Error adding word:", error)
    return NextResponse.json({ success: false, error: "Failed to add word" }, { status: 500 })
  }
}
