import mongoose, { Schema, type Document } from "mongoose"

/**
 * @interface IWordFeedback
 * @extends {Document}
 * @description Represents a piece of feedback given by a user to a specific word.
 * This model tracks whether a user finds a word 'useful', 'trusted', or thinks it 'needs review'.
 *
 * @property {mongoose.Types.ObjectId} wordId - The ID of the word receiving the feedback.
 * @property {mongoose.Types.ObjectId} userId - The ID of the user giving the feedback.
 * @property {"useful" | "trusted" | "needsReview"} type - The type of feedback given.
 * @property {Date} createdAt - The timestamp when the feedback was created.
 * @property {Date} updatedAt - The timestamp when the feedback was last updated.
 */
export interface IWordFeedback extends Document {
  wordId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  type: "useful" | "trusted" | "needsReview"
  createdAt: Date
  updatedAt: Date
}

/**
 * @const WordFeedbackSchema
 * @description The Mongoose schema for the WordFeedback model.
 * It defines the structure for feedback entries, ensuring that a user can only provide one piece of feedback per word
 * through a unique compound index on `wordId` and `userId`.
 */
const WordFeedbackSchema = new Schema(
  {
    wordId: {
      type: Schema.Types.ObjectId,
      ref: "Word",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["useful", "trusted", "needsReview"],
      required: true,
    },
  },
  { timestamps: true },
)

// Create a compound index to ensure a user can only give one type of feedback per word
WordFeedbackSchema.index({ wordId: 1, userId: 1 }, { unique: true })

export default mongoose.models.WordFeedback || mongoose.model<IWordFeedback>("WordFeedback", WordFeedbackSchema)
