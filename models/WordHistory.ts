import mongoose, { Schema, type Document } from "mongoose"

/**
 * @interface IWordHistory
 * @extends {Document}
 * @description Represents a single entry in the revision history of a dictionary word.
 * Each document is a snapshot of a word at a specific point in time, capturing create, update, or delete actions.
 *
 * @property {string} wordId - The ID of the word this history entry belongs to.
 * @property {string} balti - The Balti version of the word at the time of this history record.
 * @property {string} english - The English version of the word at the time of this history record.
 * @property {"create" | "update" | "delete"} action - The action that was performed.
 * @property {string} userId - The ID of the user who performed the action.
 * @property {string} [userName] - The name of the user, denormalized for efficient querying.
 * @property {string} [userImage] - The profile image URL of the user, denormalized for efficient querying.
 * @property {string} [details] - Additional details about the change.
 * @property {Date} createdAt - The timestamp when the history entry was created.
 */
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

/**
 * @const WordHistorySchema
 * @description The Mongoose schema for the WordHistory model.
 * It defines the structure for storing historical versions of words,
 * creating a comprehensive audit trail for all changes.
 */
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
