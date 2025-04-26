import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export async function GET(req: NextRequest) {
  try {
    await dbConnect()

    // Get search query from URL if present
    const searchParams = req.nextUrl.searchParams
    const search = searchParams.get("search") || ""

    let query = {}
    if (search) {
      query = {
        $or: [{ balti: { $regex: search, $options: "i" } }, { english: { $regex: search, $options: "i" } }],
      }
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
    await dbConnect()

    const body = await req.json()

    // Validate required fields
    if (!body.balti || !body.english) {
      return NextResponse.json(
        { success: false, error: "Balti word and English translation are required" },
        { status: 400 },
      )
    }

    const word = await Word.create(body)

    return NextResponse.json({ success: true, data: word }, { status: 201 })
  } catch (error) {
    console.error("Error creating word:", error)
    return NextResponse.json({ success: false, error: "Failed to create word" }, { status: 500 })
  }
}
