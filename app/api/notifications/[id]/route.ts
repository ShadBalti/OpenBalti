import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import authOptions from "@/lib/auth-options"
import { NotificationService } from "@/lib/notification-service"
import Notification from "@/models/Notification"
import dbConnect from "@/lib/mongodb"

/**
 * PUT /api/notifications/[id]
 * Mark a specific notification as read
 */
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    // Verify the notification belongs to the user
    const notification = await Notification.findById(id)

    if (!notification) {
      return NextResponse.json({ success: false, error: "Notification not found" }, { status: 404 })
    }

    if (notification.userId.toString() !== session.user.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 })
    }

    const updated = await NotificationService.markAsRead(id)

    return NextResponse.json({
      success: true,
      data: updated,
    })
  } catch (error) {
    console.error("Error updating notification:", error)
    return NextResponse.json({ success: false, error: "Failed to update notification" }, { status: 500 })
  }
}

/**
 * DELETE /api/notifications/[id]
 * Delete a specific notification
 */
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    // Verify the notification belongs to the user
    const notification = await Notification.findById(id)

    if (!notification) {
      return NextResponse.json({ success: false, error: "Notification not found" }, { status: 404 })
    }

    if (notification.userId.toString() !== session.user.id) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 })
    }

    await NotificationService.delete(id)

    return NextResponse.json({
      success: true,
      message: "Notification deleted",
    })
  } catch (error) {
    console.error("Error deleting notification:", error)
    return NextResponse.json({ success: false, error: "Failed to delete notification" }, { status: 500 })
  }
}
