import mongoose, { Schema, type Document } from "mongoose"

/**
 * @interface IFavorite
 * @extends {Document}
 * @description Represents a user's favorite word.
 * This is used to create a "many-to-many" relationship between users and words,
 * allowing users to save words to their personal collection.
 *
 * @property {string} userId - The ID of the user who favorited the word.
 * @property {string} wordId - The ID of the favorited word.
 * @property {Date} createdAt - The timestamp when the word was favorited.
 */
export interface IFavorite extends Document {
  userId: string
  wordId: string
  createdAt: Date
}

/**
 * @const FavoriteSchema
 * @description The Mongoose schema for the Favorite model.
 * It defines the relationship between a user and a word they have favorited.
 * A unique compound index on `userId` and `wordId` ensures that a user can only favorite a word once.
 */
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
