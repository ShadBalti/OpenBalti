import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { updateAllUserStatistics } from "@/lib/update-statistics"

export async function POST() {
  try {
    // Check if user is authenticated and is an admin
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    if (session.user.role !== "admin") {
      return NextResponse.json({ success: false, error: "Admin privileges required" }, { status: 403 })
    }

    // Update all user statistics
    await updateAllUserStatistics()

    return NextResponse.json({
      success: true,
      message: "All user statistics have been updated successfully",
    })
  } catch (error) {
    console.error("❌ API Error updating user statistics:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update user statistics",
      },
      { status: 500 },
    )
  }
}
