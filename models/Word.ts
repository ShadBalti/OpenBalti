import mongoose, { Schema, type Document } from "mongoose"

export interface IWord extends Document {
  balti: string
  english: string
  phonetic?: string
  categories?: string[]
  dialect?: string
  usageNotes?: string
  relatedWords?: string[]
  difficultyLevel?: "beginner" | "intermediate" | "advanced"
  createdBy: mongoose.Types.ObjectId
  updatedBy?: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
  feedbackStats?: {
    useful: number
    trusted: number
    needsReview: number
  }
}

const WordSchema = new Schema(
  {
    balti: {
      type: String,
      required: true,
      trim: true,
    },
    english: {
      type: String,
      required: true,
      trim: true,
    },
    phonetic: {
      type: String,
      trim: true,
    },
    categories: {
      type: [String],
      default: [],
    },
    dialect: {
      type: String,
      trim: true,
    },
    usageNotes: {
      type: String,
      trim: true,
    },
    relatedWords: {
      type: [String],
      default: [],
    },
    difficultyLevel: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "intermediate",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    feedbackStats: {
      useful: {
        type: Number,
        default: 0,
      },
      trusted: {
        type: Number,
        default: 0,
      },
      needsReview: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true },
)

// Create text indexes for search
WordSchema.index({ balti: "text", english: "text" })

export default mongoose.models.Word || mongoose.model<IWord>("Word", WordSchema)
