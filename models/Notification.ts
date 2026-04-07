import mongoose, { Document, Schema } from "mongoose"

/**
 * Notification document interface
 * Stores notifications for user contributions, reviews, and community interactions
 */
export interface INotification extends Document {
  userId: mongoose.Schema.Types.ObjectId
  type: "review_feedback" | "contribution_approved" | "contribution_rejected" | "comment_reply" | "badge_earned"
  title: string
  message: string
  relatedId?: mongoose.Schema.Types.ObjectId // Reference to the word, review, or comment
  relatedType?: "word" | "review" | "comment"
  isRead: boolean
  data?: Record<string, any> // Store additional context (e.g., badge name, rejection reason)
  createdAt: Date
  updatedAt: Date
}

const NotificationSchema = new Schema<INotification>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ["review_feedback", "contribution_approved", "contribution_rejected", "comment_reply", "badge_earned"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    relatedId: {
      type: Schema.Types.ObjectId,
    },
    relatedType: {
      type: String,
      enum: ["word", "review", "comment"],
    },
    isRead: {
      type: Boolean,
      default: false,
      index: true,
    },
    data: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  },
)

// Index for efficient notification queries
NotificationSchema.index({ userId: 1, isRead: 1, createdAt: -1 })

const Notification = mongoose.models.Notification || mongoose.model<INotification>("Notification", NotificationSchema)

export default Notification
