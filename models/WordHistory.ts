import mongoose, { Schema, type Document } from "mongoose"

export interface IWordHistory extends Document {
  wordId: string
  balti: string
  english: string
  action: "create" | "update" | "delete"
  userId: string
  userName?: string
  userImage?: string
  details?: string
  createdAt: Date
}

const WordHistorySchema: Schema = new Schema(
  {
    wordId: {
      type: Schema.Types.ObjectId,
      ref: "Word",
      required: true,
    },
    balti: {
      type: String,
      required: true,
    },
    english: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      enum: ["create", "update", "delete"],
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: {
      type: String,
    },
    userImage: {
      type: String,
    },
    details: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

// Create index for faster queries
WordHistorySchema.index({ wordId: 1, createdAt: -1 })
WordHistorySchema.index({ userId: 1 })

export default mongoose.models.WordHistory || mongoose.model<IWordHistory>("WordHistory", WordHistorySchema)
