import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordFeedback from "@/models/WordFeedback"
import { logActivity } from "@/lib/activity-logger"

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const { type } = await req.json()

    if (!["useful", "trusted", "needsReview"].includes(type)) {
      return NextResponse.json({ success: false, error: "Invalid feedback type" }, { status: 400 })
    }

    await dbConnect()

    // Check if the word exists
    const word = await Word.findById(id)
    if (!word) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Check if user has already provided feedback for this word
    const existingFeedback = await WordFeedback.findOne({
      wordId: id,
      userId: session.user.id,
    })

    if (existingFeedback) {
      // If the feedback type is the same, remove it (toggle behavior)
      if (existingFeedback.type === type) {
        await WordFeedback.findByIdAndDelete(existingFeedback._id)

        // Update word feedback stats
        await Word.findByIdAndUpdate(id, {
          $inc: { [`feedbackStats.${type}`]: -1 },
        })

        await logActivity({
          userId: session.user.id,
          action: "removed_feedback",
          details: `Removed ${type} feedback for word: ${word.balti}`,
          targetId: id,
          targetType: "word",
        })

        return NextResponse.json({
          success: true,
          message: `Removed ${type} feedback`,
          action: "removed",
        })
      } else {
        // If the feedback type is different, update it
        const oldType = existingFeedback.type
        existingFeedback.type = type
        await existingFeedback.save()

        // Update word feedback stats
        await Word.findByIdAndUpdate(id, {
          $inc: {
            [`feedbackStats.${oldType}`]: -1,
            [`feedbackStats.${type}`]: 1,
          },
        })

        await logActivity({
          userId: session.user.id,
          action: "changed_feedback",
          details: `Changed feedback from ${oldType} to ${type} for word: ${word.balti}`,
          targetId: id,
          targetType: "word",
        })

        return NextResponse.json({
          success: true,
          message: `Changed feedback to ${type}`,
          action: "changed",
        })
      }
    } else {
      // Create new feedback
      await WordFeedback.create({
        wordId: id,
        userId: session.user.id,
        type,
      })

      // Update word feedback stats
      await Word.findByIdAndUpdate(id, {
        $inc: { [`feedbackStats.${type}`]: 1 },
      })

      await logActivity({
        userId: session.user.id,
        action: "added_feedback",
        details: `Added ${type} feedback for word: ${word.balti}`,
        targetId: id,
        targetType: "word",
      })

      return NextResponse.json({
        success: true,
        message: `Added ${type} feedback`,
        action: "added",
      })
    }
  } catch (error) {
    console.error("Error handling word feedback:", error)
    return NextResponse.json({ success: false, error: "Failed to process feedback" }, { status: 500 })
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const session = await getServerSession(authOptions)

    await dbConnect()

    // Check if the word exists
    const word = await Word.findById(id)
    if (!word) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Get feedback stats for the word
    const feedbackStats = word.feedbackStats || { useful: 0, trusted: 0, needsReview: 0 }

    // Get user's feedback if logged in
    let userFeedback = null
    if (session && session.user) {
      const feedback = await WordFeedback.findOne({
        wordId: id,
        userId: session.user.id,
      })

      if (feedback) {
        userFeedback = feedback.type
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        stats: feedbackStats,
        userFeedback,
      },
    })
  } catch (error) {
    console.error("Error fetching word feedback:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch feedback" }, { status: 500 })
  }
}
