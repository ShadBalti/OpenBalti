import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth-options"

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    console.log(`🔄 API: Connecting to MongoDB for fetching user ID: ${id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for fetching user ID: ${id}`)

    const session = await getServerSession(authOptions)
    const isOwnProfile = session?.user?.id === id
    const isAdmin = session?.user?.role === "admin"

    // Validate the user ID format to prevent MongoDB errors
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`⚠️ API: Invalid user ID format: ${id}`)
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    // Find the user
    const user = await User.findById(id).select("-password")

    if (!user) {
      console.log(`⚠️ API: User with ID ${id} not found`)
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    // If the profile is not public and the requester is not the owner or an admin
    if (user.isPublic === false && !isOwnProfile && !isAdmin) {
      return NextResponse.json({ success: false, error: "This profile is private" }, { status: 403 })
    }

    // Ensure contributionStats exists with default values
    const contributionStats = user.contributionStats || {
      wordsAdded: 0,
      wordsEdited: 0,
      wordsReviewed: 0,
    }

    const userData = {
      id: user._id,
      name: user.name || "Anonymous User",
      image: user.image,
      role: user.role || "user",
      bio: user.bio,
      location: user.location,
      website: user.website,
      isPublic: user.isPublic !== false,
      isVerified: user.isVerified || false,
      isFounder: user.isFounder || user.role === "owner" || false,
      contributionStats,
      badges: user.badges || [],
      createdAt: user.createdAt || new Date().toISOString(),
      ...(isOwnProfile || isAdmin ? { email: user.email } : {}),
    }

    console.log(`📋 API: Successfully fetched user: ${user.name}`)
    return NextResponse.json({ success: true, data: userData })
  } catch (error) {
    console.error(`❌ API Error fetching user ID ${id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to fetch user" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    // Only allow users to update their own profile (or admins)
    if (session.user.id !== id && session.user.role !== "admin") {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 })
    }

    // Validate the user ID format
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json({ success: false, error: "Invalid user ID format" }, { status: 400 })
    }

    console.log(`🔄 API: Connecting to MongoDB for updating user ID: ${id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for updating user ID: ${id}`)

    const body = await req.json()

    // Validate and sanitize input
    const allowedFields = ["name", "bio", "location", "website", "isPublic"]
    const updateData: any = {}

    allowedFields.forEach((field) => {
      if (body[field] !== undefined) {
        updateData[field] = body[field]
      }
    })

    // Only admins can update these fields
    if (session.user.role === "admin" || session.user.role === "owner") {
      if (body.isVerified !== undefined) updateData.isVerified = body.isVerified
      if (body.role !== undefined) updateData.role = body.role

      // Only owner can set founder status
      if (session.user.role === "owner" && body.isFounder !== undefined) {
        updateData.isFounder = body.isFounder
      }
    }

    // Update the user
    const user = await User.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).select(
      "-password",
    )

    if (!user) {
      console.log(`⚠️ API: User with ID ${id} not found for update`)
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    console.log(`✅ API: Successfully updated user: ${user.name}`)
    return NextResponse.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        bio: user.bio,
        location: user.location,
        website: user.website,
        isPublic: user.isPublic,
        isVerified: user.isVerified,
        isFounder: user.isFounder,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(`❌ API Error updating user ID ${id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to update user" }, { status: 500 })
  }
}
