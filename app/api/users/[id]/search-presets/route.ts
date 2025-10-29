import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import { isValidObjectId } from "mongoose"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    if (session.user.id !== params.id) {
      return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 })
    }

    if (!isValidObjectId(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid user ID" }, { status: 400 })
    }

    await dbConnect()

    const user = await User.findById(params.id).select("searchPresets")

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: user.searchPresets || [] })
  } catch (error) {
    console.error("Error fetching search presets:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch presets" }, { status: 500 })
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    if (session.user.id !== params.id) {
      return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 })
    }

    if (!isValidObjectId(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid user ID" }, { status: 400 })
    }

    const { name, query, filters } = await req.json()

    if (!name) {
      return NextResponse.json({ success: false, error: "Preset name is required" }, { status: 400 })
    }

    await dbConnect()

    const user = await User.findById(params.id)

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    const newPreset = {
      _id: new (require("mongoose").Types.ObjectId)(),
      name,
      query: query || "",
      filters: filters || {},
      createdAt: new Date(),
    }

    user.searchPresets = user.searchPresets || []
    user.searchPresets.push(newPreset)
    await user.save()

    return NextResponse.json({ success: true, data: newPreset })
  } catch (error) {
    console.error("Error creating search preset:", error)
    return NextResponse.json({ success: false, error: "Failed to create preset" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    if (session.user.id !== params.id) {
      return NextResponse.json({ success: false, error: "Forbidden" }, { status: 403 })
    }

    if (!isValidObjectId(params.id)) {
      return NextResponse.json({ success: false, error: "Invalid user ID" }, { status: 400 })
    }

    const presetId = req.nextUrl.searchParams.get("presetId")

    if (!presetId) {
      return NextResponse.json({ success: false, error: "Preset ID is required" }, { status: 400 })
    }

    await dbConnect()

    const user = await User.findByIdAndUpdate(params.id, { $pull: { searchPresets: { _id: presetId } } }, { new: true })

    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: user.searchPresets })
  } catch (error) {
    console.error("Error deleting search preset:", error)
    return NextResponse.json({ success: false, error: "Failed to delete preset" }, { status: 500 })
  }
}
