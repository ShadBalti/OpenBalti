import mongoose, { Schema, type Document } from "mongoose"

export interface IWord extends Document {
  balti: string
  english: string
  reviewStatus?: "flagged" | "reviewed" | null
  createdAt: Date
  updatedAt: Date
}

const WordSchema: Schema = new Schema(
  {
    balti: {
      type: String,
      required: [true, "Please provide the Balti word"],
      trim: true,
    },
    english: {
      type: String,
      required: [true, "Please provide the English translation"],
      trim: true,
    },
    reviewStatus: {
      type: String,
      enum: ["flagged", "reviewed", null],
      default: null,
    },
  },
  {
    timestamps: true,
  },
)

// Check if the model is already defined to prevent overwriting during hot reloads
export default mongoose.models.Word || mongoose.model<IWord>("Word", WordSchema)
