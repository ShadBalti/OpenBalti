import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    // Only allow admins to access this endpoint
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 })
    }

    await dbConnect()

    const { userId } = await req.json()

    if (!userId) {
      return NextResponse.json({ success: false, error: "User ID is required" }, { status: 400 })
    }

    // Update the user to be the owner
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        role: "owner",
        isVerified: true,
        isFounder: true,
      },
      { new: true },
    ).select("-password")

    if (!updatedUser) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "User has been set as the owner and founder",
      data: {
        id: updatedUser._id,
        name: updatedUser.name,
        role: updatedUser.role,
        isVerified: updatedUser.isVerified,
        isFounder: updatedUser.isFounder,
      },
    })
  } catch (error) {
    console.error("Error setting owner:", error)
    return NextResponse.json({ success: false, error: "Failed to set owner" }, { status: 500 })
  }
}
