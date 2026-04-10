import Notification from "@/models/Notification"
import User from "@/models/User"
import dbConnect from "@/lib/mongodb"

/**
 * NotificationService - Handles all notification operations
 * Provides methods for creating, retrieving, and managing notifications
 */
export class NotificationService {
  /**
   * Create a new notification for a user
   */
  static async create(
    userId: string,
    type: "review_feedback" | "contribution_approved" | "contribution_rejected" | "comment_reply" | "badge_earned",
    title: string,
    message: string,
    options?: {
      relatedId?: string
      relatedType?: "word" | "review" | "comment"
      data?: Record<string, any>
    },
  ) {
    try {
      await dbConnect()

      const notification = await Notification.create({
        userId,
        type,
        title,
        message,
        relatedId: options?.relatedId,
        relatedType: options?.relatedType,
        data: options?.data,
      })

      return notification
    } catch (error) {
      console.error("Error creating notification:", error)
      throw error
    }
  }

  /**
   * Get all notifications for a user
   */
  static async getUserNotifications(userId: string, limit = 20, skip = 0) {
    try {
      await dbConnect()

      const notifications = await Notification.find({ userId })
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip)
        .populate("relatedId")
        .lean()

      const total = await Notification.countDocuments({ userId })
      const unreadCount = await Notification.countDocuments({ userId, isRead: false })

      return {
        notifications,
        total,
        unreadCount,
      }
    } catch (error) {
      console.error("Error fetching notifications:", error)
      throw error
    }
  }

  /**
   * Get unread notifications for a user
   */
  static async getUnreadNotifications(userId: string) {
    try {
      await dbConnect()

      const notifications = await Notification.find({ userId, isRead: false })
        .sort({ createdAt: -1 })
        .limit(10)
        .lean()

      return notifications
    } catch (error) {
      console.error("Error fetching unread notifications:", error)
      throw error
    }
  }

  /**
   * Mark a notification as read
   */
  static async markAsRead(notificationId: string) {
    try {
      await dbConnect()

      const notification = await Notification.findByIdAndUpdate(
        notificationId,
        { isRead: true },
        { new: true },
      )

      return notification
    } catch (error) {
      console.error("Error marking notification as read:", error)
      throw error
    }
  }

  /**
   * Mark all notifications as read for a user
   */
  static async markAllAsRead(userId: string) {
    try {
      await dbConnect()

      await Notification.updateMany({ userId, isRead: false }, { isRead: true })

      return { success: true }
    } catch (error) {
      console.error("Error marking all notifications as read:", error)
      throw error
    }
  }

  /**
   * Delete a notification
   */
  static async delete(notificationId: string) {
    try {
      await dbConnect()

      await Notification.findByIdAndDelete(notificationId)

      return { success: true }
    } catch (error) {
      console.error("Error deleting notification:", error)
      throw error
    }
  }

  /**
   * Get notification statistics for a user
   */
  static async getNotificationStats(userId: string) {
    try {
      await dbConnect()

      const [total, unread, byType] = await Promise.all([
        Notification.countDocuments({ userId }),
        Notification.countDocuments({ userId, isRead: false }),
        Notification.aggregate([
          { $match: { userId: require("mongoose").Types.ObjectId(userId) } },
          { $group: { _id: "$type", count: { $sum: 1 } } },
        ]),
      ])

      return {
        total,
        unread,
        byType: Object.fromEntries(byType.map((item) => [item._id, item.count])),
      }
    } catch (error) {
      console.error("Error getting notification stats:", error)
      throw error
    }
  }

  /**
   * Notify user about contribution review
   */
  static async notifyReviewFeedback(
    userId: string,
    wordTitle: string,
    status: "approved" | "rejected" | "needs_revision",
    feedback: string,
    wordId?: string,
  ) {
    const messages = {
      approved: {
        title: "Contribution Approved!",
        message: `Your contribution for "${wordTitle}" has been approved and added to the dictionary.`,
      },
      rejected: {
        title: "Contribution Needs Attention",
        message: `Your contribution for "${wordTitle}" requires additional information. Please review the feedback.`,
      },
      needs_revision: {
        title: "Revision Required",
        message: `Your contribution for "${wordTitle}" needs some revisions. Check the feedback for details.`,
      },
    }

    return this.create(userId, "review_feedback", messages[status].title, messages[status].message, {
      relatedId: wordId,
      relatedType: "word",
      data: {
        status,
        feedback,
      },
    })
  }

  /**
   * Notify user about a reply to their comment
   */
  static async notifyCommentReply(userId: string, replierName: string, wordTitle: string, commentId?: string) {
    return this.create(
      userId,
      "comment_reply",
      "New Reply to Your Comment",
      `${replierName} replied to your comment on "${wordTitle}".`,
      {
        relatedId: commentId,
        relatedType: "comment",
      },
    )
  }

  /**
   * Notify user about earned badge
   */
  static async notifyBadgeEarned(userId: string, badgeName: string, badgeDescription: string) {
    return this.create(userId, "badge_earned", `Badge Earned: ${badgeName}`, badgeDescription, {
      data: { badgeName },
    })
  }
}
