import mongoose, { Schema, type Document } from "mongoose"

export interface IActivityLog extends Document {
  user: string
  action: "create" | "update" | "delete" | "review"
  wordId?: string
  wordBalti?: string
  wordEnglish?: string
  details?: string
  createdAt: Date
}

const ActivityLogSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      enum: ["create", "update", "delete", "review"],
      required: true,
    },
    wordId: {
      type: Schema.Types.ObjectId,
      ref: "Word",
    },
    wordBalti: {
      type: String,
    },
    wordEnglish: {
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
ActivityLogSchema.index({ user: 1, createdAt: -1 })
ActivityLogSchema.index({ wordId: 1 })
ActivityLogSchema.index({ createdAt: -1 })

export default mongoose.models.ActivityLog || mongoose.model<IActivityLog>("ActivityLog", ActivityLogSchema)
