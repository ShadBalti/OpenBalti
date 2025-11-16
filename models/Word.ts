import mongoose, { Schema, type Document } from "mongoose"

/**
 * @interface IWord
 * @extends {Document}
 * @description Represents a single entry in the dictionary.
 * It contains all the linguistic and metadata associated with a word.
 *
 * @property {string} balti - The word in the Balti language.
 * @property {string} english - The English translation of the word.
 * @property {string} [phonetic] - The phonetic spelling of the Balti word.
 * @property {string[]} [categories] - An array of categories or tags associated with the word.
 * @property {string} [dialect] - The regional dialect the word belongs to.
 * @property {string} [usageNotes] - Notes on how the word is used.
 * @property {string[]} [relatedWords] - An array of related words.
 * @property {"beginner" | "intermediate" | "advanced"} [difficultyLevel] - The difficulty level for language learners.
 * @property {Array<{ balti: string; english: string }>} [examples] - An array of example sentences.
 * @property {string} [etymology] - The origin and history of the word.
 * @property {string} [culturalNotes] - Notes on the cultural significance of the word.
 * @property {mongoose.Types.ObjectId} createdBy - The ID of the user who created the word.
 * @property {mongoose.Types.ObjectId} [updatedBy] - The ID of the user who last updated the word.
 * @property {Date} createdAt - The timestamp when the word was created.
 * @property {Date} updatedAt - The timestamp when the word was last updated.
 * @property {object} [feedbackStats] - Statistics on community feedback for the word.
 * @property {number} feedbackStats.useful - The number of times the word was marked as useful.
 * @property {number} feedbackStats.trusted - The number of times the word was marked as trusted.
 * @property {number} feedbackStats.needsReview - The number of times the word was flagged for review.
 */
export interface IWord extends Document {
  balti: string
  english: string
  phonetic?: string
  categories?: string[]
  dialect?: string
  usageNotes?: string
  relatedWords?: string[]
  difficultyLevel?: "beginner" | "intermediate" | "advanced"
  examples?: Array<{ balti: string; english: string }>
  etymology?: string
  culturalNotes?: string
  createdBy: mongoose.Types.ObjectId
  updatedBy?: mongoose.Types.ObjectId
  createdAt: Date
  updatedAt: Date
  feedbackStats?: {
    useful: number
    trusted: number
    needsReview: number
  }
}

/**
 * @const WordSchema
 * @description The Mongoose schema for the Word model.
 * It defines the structure, data types, and validation for dictionary word entries.
 * It also includes text indexes on the `balti` and `english` fields to optimize search performance.
 */
const WordSchema = new Schema(
  {
    balti: {
      type: String,
      required: true,
      trim: true,
    },
    english: {
      type: String,
      required: true,
      trim: true,
    },
    phonetic: {
      type: String,
      trim: true,
    },
    categories: {
      type: [String],
      default: [],
    },
    dialect: {
      type: String,
      trim: true,
    },
    usageNotes: {
      type: String,
      trim: true,
    },
    relatedWords: {
      type: [String],
      default: [],
    },
    difficultyLevel: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "intermediate",
    },
    examples: {
      type: [
        {
          balti: {
            type: String,
            required: true,
            trim: true,
          },
          english: {
            type: String,
            required: true,
            trim: true,
          },
        },
      ],
      default: [],
    },
    etymology: {
      type: String,
      trim: true,
    },
    culturalNotes: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    feedbackStats: {
      useful: {
        type: Number,
        default: 0,
      },
      trusted: {
        type: Number,
        default: 0,
      },
      needsReview: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true },
)

// Create text indexes for search
WordSchema.index({ balti: "text", english: "text" })

export default mongoose.models.Word || mongoose.model<IWord>("Word", WordSchema)
