import mongoose, { Schema, type Document } from "mongoose"

export type WordScript = "persoArabic" | "yige" | "roman" | "ipa"
export type DefinitionLanguage = "english" | "urdu" | "balti"

export interface IWordScriptForm {
  script: WordScript
  text: string
  isPrimary?: boolean
  transliteration?: string
  notes?: string
}

export interface IWordDefinition {
  language: DefinitionLanguage
  text: string
  isPrimary?: boolean
}

export interface IWord extends Document<string> {
  _id: string
  balti: string
  english: string
  phonetic?: string
  scripts?: IWordScriptForm[]
  definitions?: IWordDefinition[]
  partOfSpeech: string
  searchTerms?: string[]
  categories?: string[]
  dialect?: string
  usageNotes?: string
  relatedWords?: string[]
  difficultyLevel?: "beginner" | "intermediate" | "advanced"
  examples?: Array<{ balti: string; english: string }>
  etymology?: string
  culturalNotes?: string
  linguisticData?: Record<string, unknown>
  createdBy: mongoose.Types.ObjectId | string
  updatedBy?: mongoose.Types.ObjectId | string
  createdAt: Date
  updatedAt: Date
  feedbackStats?: {
    useful: number
    trusted: number
    needsReview: number
  }
  reviewStatus?: "flagged" | "reviewed" | null
}

const scriptFormSchema = new Schema(
  {
    script: {
      type: String,
      enum: ["persoArabic", "yige", "roman", "ipa"],
      required: true,
    },
    text: { type: String, required: true, trim: true },
    isPrimary: { type: Boolean, default: false },
    transliteration: { type: String, trim: true },
    notes: { type: String, trim: true },
  },
  { _id: false },
)

const definitionSchema = new Schema(
  {
    language: {
      type: String,
      enum: ["english", "urdu", "balti"],
      required: true,
    },
    text: { type: String, required: true, trim: true },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false },
)

const wordSchemaDefinition: Record<string, unknown> = {
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
  scripts: {
    type: [scriptFormSchema],
    default: [],
  },
  definitions: {
    type: [definitionSchema],
    default: [],
  },
  partOfSpeech: {
    type: String,
    required: true,
    trim: true,
    default: "unknown",
    index: true,
  },
  searchTerms: {
    type: [String],
    default: [],
    set: (terms: string[] = []) => Array.from(new Set(terms.map((term) => term.trim()).filter(Boolean))),
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
  linguisticData: {
    type: Schema.Types.Mixed,
    default: {},
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
}

const UntypedSchema = Schema as any
const WordSchema: Schema = new UntypedSchema(wordSchemaDefinition, { timestamps: true })

WordSchema.pre("validate", function normalizeCompatibleFields(this: IWord) {
  const word = this

  if (!word.scripts?.length) {
    word.scripts = [
      { script: "roman", text: word.balti, isPrimary: true },
      ...(word.phonetic ? [{ script: "ipa" as const, text: word.phonetic }] : []),
    ]
  }

  if (!word.definitions?.length) {
    word.definitions = [{ language: "english", text: word.english, isPrimary: true }]
  }

})

WordSchema.index({ balti: "text", english: "text", phonetic: "text", searchTerms: "text", "scripts.text": "text", "definitions.text": "text" })
WordSchema.index({ partOfSpeech: 1, dialect: 1 })
WordSchema.index({ searchTerms: 1 })
WordSchema.index({ "scripts.script": 1, "scripts.text": 1 })
WordSchema.index({ "definitions.language": 1, "definitions.text": 1 })

const UntypedMongoose = mongoose as any
export default UntypedMongoose.models.Word || UntypedMongoose.model("Word", WordSchema)
