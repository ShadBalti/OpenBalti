import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import authOptions from "@/lib/auth-options"
import { NotificationService } from "@/lib/notification-service"

/**
 * GET /api/notifications
 * Fetch notifications for the authenticated user
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const limit = parseInt(searchParams.get("limit") || "20")
    const skip = parseInt(searchParams.get("skip") || "0")

    const result = await NotificationService.getUserNotifications(session.user.id, limit, skip)

    return NextResponse.json({
      success: true,
      data: result.notifications,
      total: result.total,
      unreadCount: result.unreadCount,
    })
  } catch (error) {
    console.error("Error fetching notifications:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch notifications" }, { status: 500 })
  }
}

/**
 * PUT /api/notifications
 * Mark all notifications as read for the authenticated user
 */
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    await NotificationService.markAllAsRead(session.user.id)

    return NextResponse.json({
      success: true,
      message: "All notifications marked as read",
    })
  } catch (error) {
    console.error("Error marking notifications as read:", error)
    return NextResponse.json({ success: false, error: "Failed to update notifications" }, { status: 500 })
  }
}
