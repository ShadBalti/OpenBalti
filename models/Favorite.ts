import mongoose, { Schema, type Document } from "mongoose"

export interface IFavorite extends Document {
  userId: string
  wordId: string
  createdAt: Date
}

const FavoriteSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    wordId: {
      type: Schema.Types.ObjectId,
      ref: "Word",
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// Create a compound index to ensure a user can only favorite a word once
FavoriteSchema.index({ userId: 1, wordId: 1 }, { unique: true })

export default mongoose.models.Favorite || mongoose.model<IFavorite>("Favorite", FavoriteSchema)
