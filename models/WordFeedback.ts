import mongoose, { Schema, type Document } from "mongoose"

export interface IWordFeedback extends Document {
  wordId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  type: "useful" | "trusted" | "needsReview"
  createdAt: Date
  updatedAt: Date
}

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
