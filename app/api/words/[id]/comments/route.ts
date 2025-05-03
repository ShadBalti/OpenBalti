import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordComment from "@/models/WordComment"
import { logActivity } from "@/lib/activity-logger"

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const { content } = await req.json()

    if (!content || content.trim().length === 0) {
      return NextResponse.json({ success: false, error: "Comment cannot be empty" }, { status: 400 })
    }

    if (content.length > 1000) {
      return NextResponse.json({ success: false, error: "Comment is too long (max 1000 characters)" }, { status: 400 })
    }

    await dbConnect()

    // Check if the word exists
    const word = await Word.findById(id)
    if (!word) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Create new comment
    const comment = await WordComment.create({
      wordId: id,
      userId: session.user.id,
      content: content.trim(),
    })

    // Populate user data
    const populatedComment = await WordComment.findById(comment._id).populate({
      path: "userId",
      select: "name image",
    })

    await logActivity({
      userId: session.user.id,
      action: "added_comment",
      details: `Added a comment to word: ${word.balti}`,
      targetId: id,
      targetType: "word",
    })

    return NextResponse.json({
      success: true,
      message: "Comment added successfully",
      data: populatedComment,
    })
  } catch (error) {
    console.error("Error adding comment:", error)
    return NextResponse.json({ success: false, error: "Failed to add comment" }, { status: 500 })
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    await dbConnect()

    // Check if the word exists
    const word = await Word.findById(id)
    if (!word) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Get comments for the word
    const comments = await WordComment.find({ wordId: id }).sort({ createdAt: -1 }).populate({
      path: "userId",
      select: "name image",
    })

    return NextResponse.json({
      success: true,
      data: comments,
    })
  } catch (error) {
    console.error("Error fetching comments:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch comments" }, { status: 500 })
  }
}
