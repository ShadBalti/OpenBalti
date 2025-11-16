import mongoose, { Schema, type Document } from "mongoose"

/**
 * @interface IActivityLog
 * @extends {Document}
 * @description Represents a log of user activity within the application.
 * Each document records a specific action performed by a user, such as creating, updating, or reviewing a word.
 *
 * @property {string} user - The ID of the user who performed the action.
 * @property {"create" | "update" | "delete" | "review"} action - The type of action performed.
 * @property {string} [wordId] - The ID of the word that was the subject of the action.
 * @property {string} [wordBalti] - The Balti version of the word at the time of the action.
 * @property {string} [wordEnglish] - The English version of the word at the time of the action.
 * @property {string} [details] - Any additional details about the activity.
 * @property {Date} createdAt - The timestamp when the activity was logged.
 */
export interface IActivityLog extends Document {
  user: string
  action: "create" | "update" | "delete" | "review"
  wordId?: string
  wordBalti?: string
  wordEnglish?: string
  details?: string
  createdAt: Date
}

/**
 * @const ActivityLogSchema
 * @description The Mongoose schema for the ActivityLog model.
 * It defines the structure, data types, and constraints for the activity log documents stored in MongoDB.
 * It also includes timestamps for tracking when each log entry is created and updated.
 */
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
