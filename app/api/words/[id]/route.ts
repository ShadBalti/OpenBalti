import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordComment from "@/models/WordComment"
import WordFeedback from "@/models/WordFeedback"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth-options"
import { logActivity } from "@/lib/activity-logger"
import { isValidObjectId } from "mongoose"

const validateObjectId = (id: string): boolean => {
  return isValidObjectId(id)
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    if (!validateObjectId(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid word ID format" }, { status: 400 })
    }

    console.log(`🔄 API: Connecting to MongoDB for fetching word ID: ${params.id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for fetching word ID: ${params.id}`)

    const word = await Word.findById(params.id)

    if (!word) {
      console.log(`⚠️ API: Word with ID ${params.id} not found`)
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    console.log(`📋 API: Successfully fetched word: ${word.balti} - ${word.english}`)
    return NextResponse.json({ success: true, data: word })
  } catch (error) {
    console.error(`❌ API Error fetching word ID ${params.id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to fetch word" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    if (!validateObjectId(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid word ID format" }, { status: 400 })
    }

    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    console.log(`🔄 API: Connecting to MongoDB for updating word ID: ${params.id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for updating word ID: ${params.id}`)

    const body = await req.json()

    // Validate required fields
    if (!body.balti || !body.english) {
      console.log(`⚠️ API: Validation failed for updating word ID: ${params.id} - missing required fields`)
      return NextResponse.json(
        { success: false, error: "Balti word and English translation are required" },
        { status: 400 },
      )
    }

    // Get the original word for logging
    const originalWord = await Word.findById(params.id)
    if (!originalWord) {
      console.log(`⚠️ API: Word with ID ${params.id} not found for update`)
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Check authorization - allow if user is creator, admin, founder, or moderator
    const isCreator = session.user.id === originalWord.createdBy?.toString()
    const isAdmin = session.user.role === "admin"
    const isFounder = (session.user as any).isFounder === true
    const isModerator = (session.user as any).isModerator === true

    if (!isCreator && !isAdmin && !isFounder && !isModerator) {
      console.log(`⚠️ API: User ${session.user.id} not authorized to update word ${params.id}`)
      return NextResponse.json(
        { success: false, error: "You don't have permission to edit this word" },
        { status: 403 },
      )
    }

    // Add updatedBy field to track who made the change
    const updateData = {
      ...body,
      updatedBy: session.user.id,
    }

    const word = await Word.findByIdAndUpdate(params.id, updateData, { new: true, runValidators: true })

    console.log(`✅ API: Successfully updated word: ${word.balti} - ${word.english}`)

    // Log the activity with details about what changed
    const changes = []
    if (originalWord.balti !== word.balti) {
      changes.push(`Balti: "${originalWord.balti}" → "${word.balti}"`)
    }
    if (originalWord.english !== word.english) {
      changes.push(`English: "${originalWord.english}" → "${word.english}"`)
    }
    if (originalWord.phonetic !== word.phonetic) {
      changes.push(`Phonetic: "${originalWord.phonetic || "none"}" → "${word.phonetic || "none"}"`)
    }

    // Check for category changes
    const originalCategories = originalWord.categories || []
    const newCategories = word.categories || []
    if (JSON.stringify(originalCategories) !== JSON.stringify(newCategories)) {
      changes.push(`Categories updated`)
    }

    // Check for example changes
    const originalExamples = originalWord.examples || []
    const newExamples = word.examples || []
    if (JSON.stringify(originalExamples) !== JSON.stringify(newExamples)) {
      changes.push(`Examples updated`)
    }

    await logActivity({
      session,
      action: "update",
      wordId: word._id,
      wordBalti: word.balti,
      wordEnglish: word.english,
      details: changes.length > 0 ? `Updated: ${changes.join(", ")}` : "Updated word",
    })

    return NextResponse.json({ success: true, data: word })
  } catch (error) {
    console.error(`❌ API Error updating word ID ${params.id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to update word" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    if (!validateObjectId(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid word ID format" }, { status: 400 })
    }

    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    console.log(`🔄 API: Connecting to MongoDB for deleting word ID: ${params.id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for deleting word ID: ${params.id}`)

    // Fetch the word first to check authorization
    const word = await Word.findById(params.id)
    if (!word) {
      console.log(`⚠️ API: Word with ID ${params.id} not found for deletion`)
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    // Check authorization - allow if user is creator, admin, founder, or moderator
    const isCreator = session.user.id === word.createdBy?.toString()
    const isAdmin = session.user.role === "admin"
    const isFounder = (session.user as any).isFounder === true
    const isModerator = (session.user as any).isModerator === true

    if (!isCreator && !isAdmin && !isFounder && !isModerator) {
      console.log(`⚠️ API: User ${session.user.id} not authorized to delete word ${params.id}`)
      return NextResponse.json(
        { success: false, error: "You don't have permission to delete this word" },
        { status: 403 },
      )
    }

    // Now delete the word
    const deletedWord = await Word.findByIdAndDelete(params.id)

    if (!deletedWord) {
      console.log(`⚠️ API: Word with ID ${params.id} not found for deletion`)
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    console.log(`✅ API: Successfully deleted word: ${deletedWord.balti} - ${deletedWord.english}`)

    await WordComment.deleteMany({ wordId: params.id })
    await WordFeedback.deleteMany({ wordId: params.id })
    console.log(`✅ API: Cascade deleted comments and feedback for word ${params.id}`)

    // Log the activity
    await logActivity({
      session,
      action: "delete",
      wordId: deletedWord._id,
      wordBalti: deletedWord.balti,
      wordEnglish: deletedWord.english,
      details: "Deleted word from dictionary",
    })

    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error(`❌ API Error deleting word ID ${params.id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to delete word" }, { status: 500 })
  }
}
