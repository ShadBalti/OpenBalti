import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordComment from "@/models/WordComment"
import WordFeedback from "@/models/WordFeedback"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { logActivity } from "@/lib/activity-logger"
import { generateSlug, generateUniqueSlug } from "@/lib/slug-utils"

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    await dbConnect()

    // Find word by slug
    const word = await Word.findOne({ slug: params.slug })

    if (!word) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: word })
  } catch (error) {
    console.error(`Error fetching word with slug ${params.slug}:`, error)
    return NextResponse.json({ success: false, error: "Failed to fetch word" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    await dbConnect()

    const body = await req.json()

    if (!body.balti || !body.english) {
      return NextResponse.json(
        { success: false, error: "Balti word and English translation are required" },
        { status: 400 },
      )
    }

    const originalWord = await Word.findOne({ slug: params.slug })
    if (!originalWord) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    let newSlug = params.slug
    if (originalWord.balti !== body.balti) {
      const baseSlug = generateSlug(body.balti)
      const existingSlugs = await Word.find({ slug: { $regex: `^${baseSlug}` } }).select("slug")
      newSlug = generateUniqueSlug(
        baseSlug,
        existingSlugs.map((w) => w.slug),
      )
    }

    const updateData = {
      ...body,
      slug: newSlug,
      updatedBy: session.user.id,
    }

    const word = await Word.findOneAndUpdate({ slug: params.slug }, updateData, { new: true, runValidators: true })

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

    const originalCategories = originalWord.categories || []
    const newCategories = word.categories || []
    if (JSON.stringify(originalCategories) !== JSON.stringify(newCategories)) {
      changes.push(`Categories updated`)
    }

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
    console.error(`Error updating word with slug ${params.slug}:`, error)
    return NextResponse.json({ success: false, error: "Failed to update word" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    await dbConnect()

    const word = await Word.findOneAndDelete({ slug: params.slug })

    if (!word) {
      return NextResponse.json({ success: false, error: "Word not found" }, { status: 404 })
    }

    await WordComment.deleteMany({ wordId: word._id })
    await WordFeedback.deleteMany({ wordId: word._id })

    await logActivity({
      session,
      action: "delete",
      wordId: word._id,
      wordBalti: word.balti,
      wordEnglish: word.english,
      details: "Deleted word from dictionary",
    })

    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error(`Error deleting word with slug ${params.slug}:`, error)
    return NextResponse.json({ success: false, error: "Failed to delete word" }, { status: 500 })
  }
}
