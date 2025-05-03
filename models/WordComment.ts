import mongoose, { Schema, type Document } from "mongoose"

export interface IWordComment extends Document {
  wordId: mongoose.Types.ObjectId
  userId: mongoose.Types.ObjectId
  content: string
  createdAt: Date
  updatedAt: Date
}

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
