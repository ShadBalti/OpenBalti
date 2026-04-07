import mongoose, { Document, Schema } from "mongoose"

/**
 * ReviewFeedback document interface
 * Stores structured feedback for contribution reviews
 */
export interface IReviewFeedback extends Document {
  wordId: mongoose.Schema.Types.ObjectId
  submissionId: mongoose.Schema.Types.ObjectId // Reference to the user's word submission
  reviewerId: mongoose.Schema.Types.ObjectId // User who provided feedback
  status: "pending" | "approved" | "rejected" | "needs_revision"
  feedback: string
  categories: {
    accuracy: number // 1-5 rating
    completeness: number // 1-5 rating
    culturalContext: number // 1-5 rating
    sourcing: number // 1-5 rating
  }
  suggestions?: string[]
  requiredRevisions?: string[]
  approvedAt?: Date
  rejectedAt?: Date
  revisionDeadline?: Date
  createdAt: Date
  updatedAt: Date
}

const ReviewFeedbackSchema = new Schema<IReviewFeedback>(
  {
    wordId: {
      type: Schema.Types.ObjectId,
      ref: "Word",
      required: true,
      index: true,
    },
    submissionId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    reviewerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "needs_revision"],
      default: "pending",
      index: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    categories: {
      type: {
        accuracy: {
          type: Number,
          min: 1,
          max: 5,
        },
        completeness: {
          type: Number,
          min: 1,
          max: 5,
        },
        culturalContext: {
          type: Number,
          min: 1,
          max: 5,
        },
        sourcing: {
          type: Number,
          min: 1,
          max: 5,
        },
      },
      required: true,
    },
    suggestions: [String],
    requiredRevisions: [String],
    approvedAt: Date,
    rejectedAt: Date,
    revisionDeadline: Date,
  },
  {
    timestamps: true,
  },
)

// Index for efficient queries
ReviewFeedbackSchema.index({ wordId: 1, status: 1, createdAt: -1 })
ReviewFeedbackSchema.index({ submissionId: 1 })
ReviewFeedbackSchema.index({ reviewerId: 1, createdAt: -1 })

const ReviewFeedback = mongoose.models.ReviewFeedback || mongoose.model<IReviewFeedback>("ReviewFeedback", ReviewFeedbackSchema)

export default ReviewFeedback
