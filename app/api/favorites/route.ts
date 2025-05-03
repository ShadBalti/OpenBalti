import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Favorite from "@/models/Favorite"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET(req: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    console.log("🔄 API: Connecting to MongoDB for fetching favorites...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for fetching favorites")

    const favorites = await Favorite.find({ userId: session.user.id }).populate("wordId")
    console.log(`📋 API: Successfully fetched ${favorites.length} favorites for user ${session.user.id}`)

    return NextResponse.json({ success: true, data: favorites })
  } catch (error) {
    console.error("❌ API Error fetching favorites:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch favorites" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    console.log("🔄 API: Connecting to MongoDB for adding favorite...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for adding favorite")

    const body = await req.json()

    if (!body.wordId) {
      return NextResponse.json({ success: false, error: "Word ID is required" }, { status: 400 })
    }

    // Check if already favorited
    const existingFavorite = await Favorite.findOne({
      userId: session.user.id,
      wordId: body.wordId,
    })

    if (existingFavorite) {
      return NextResponse.json({ success: false, error: "Word already in favorites" }, { status: 400 })
    }

    const favorite = await Favorite.create({
      userId: session.user.id,
      wordId: body.wordId,
    })

    console.log(`✅ API: Successfully added word ${body.wordId} to favorites for user ${session.user.id}`)

    return NextResponse.json({ success: true, data: favorite }, { status: 201 })
  } catch (error) {
    console.error("❌ API Error adding favorite:", error)
    return NextResponse.json({ success: false, error: "Failed to add favorite" }, { status: 500 })
  }
}
