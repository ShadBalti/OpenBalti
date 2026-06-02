import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth-options"
import { logActivity } from "@/lib/activity-logger"
import { isValidObjectId } from "mongoose"

const validateObjectId = (id: string): boolean => {
  return isValidObjectId(id)
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    if (!validateObjectId(id)) {
      return NextResponse.json({ success: false, error: "Invalid word ID format" }, { status: 400 })
    }

    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    console.log(`🔄 API: Connecting to MongoDB for updating review status of word ID: ${id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for updating review status of word ID: ${id}`)

    const body = await req.json()

    // Validate review status
    if (!["flagged", "reviewed", null].includes(body.reviewStatus)) {
      console.log(`⚠️ API: Invalid review status for word ID: ${id}`)
      return NextResponse.json(
        { success: false, error: "Invalid review status. Must be 'flagged', 'reviewed', or null" },
        { status: 400 },
      )
    }

    // Get the original word for logging
    const originalWord = await Word.findById(id)
    if (!originalWord) {
      console.log(`⚠️ API: Word with ID ${id} not found for review status update`)
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    const word = await Word.findByIdAndUpdate(
      id,
      {
        reviewStatus: body.reviewStatus,
        updatedBy: session.user.id,
      },
      { new: true, runValidators: true },
    )

    console.log(`✅ API: Successfully updated review status for word: ${word.balti} - ${word.english}`)

    // Log the activity
    let actionDetails = ""
    if (body.reviewStatus === "flagged") {
      actionDetails = "Flagged for review"
    } else if (body.reviewStatus === "reviewed") {
      actionDetails = "Marked as reviewed"
    } else {
      actionDetails = "Cleared review status"
    }

    await logActivity({
      session,
      action: "review",
      wordId: word._id,
      wordBalti: word.balti,
      wordEnglish: word.english,
      details: actionDetails,
    })

    return NextResponse.json({ success: true, data: word })
  } catch (error) {
    console.error(`❌ API Error updating review status for word ID ${id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to update review status" }, { status: 500 })
  }
}
