import mongoose, { Schema, type Document } from "mongoose"

/**
 * @interface IWordComment
 * @extends {Document}
 * @description Represents a comment made by a user on a specific dictionary word.
 *
 * @property {mongoose.Types.ObjectId} wordId - The ID of the word that was commented on.
 * @property {mongoose.Types.ObjectId} userId - The ID of the user who made the comment.
 * @property {string} content - The text content of the comment.
 * @property {Date} createdAt - The timestamp when the comment was created.
 * @property {Date} updatedAt - The timestamp when the comment was last updated.
 */
export interface IWordComment extends Document {
  wordId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  content: string
  createdAt: Date
  updatedAt: Date
}

/**
 * @const WordCommentSchema
 * @description The Mongoose schema for the WordComment model.
 * It defines the structure of a comment, linking it to a specific word and user.
 */
const WordCommentSchema = new Schema(
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
    content: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },
  },
  { timestamps: true },
)

export default mongoose.models.WordComment || mongoose.model<IWordComment>("WordComment", WordCommentSchema)
