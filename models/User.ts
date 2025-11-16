import mongoose, { Schema, type Document } from "mongoose"
import { hash } from "bcryptjs"

/**
 * @interface IBadge
 * @description Represents a badge that can be awarded to a user for their contributions.
 * Badges are embedded within the User document.
 *
 * @property {"milestone" | "specialty"} type - The category of the badge.
 * @property {string} id - A unique identifier for the badge.
 * @property {string} name - The display name of the badge.
 * @property {string} description - A short description of what the badge represents.
 * @property {string} icon - An emoji or icon representing the badge.
 * @property {Date} unlockedAt - The date when the badge was awarded to the user.
 */
export interface IBadge {
  type: "milestone" | "specialty"
  id: string
  name: string
  description: string
  icon: string
  unlockedAt: Date
}

/**
 * @interface IUser
 * @extends {Document}
 * @description Represents a user account in the application.
 * This interface defines all the properties of a user, including their personal information,
 * authentication details, role, profile settings, and contribution data.
 *
 * @property {string} name - The user's full name.
 * @property {string} email - The user's email address (must be unique).
 * @property {string} password - The user's hashed password.
 * @property {string} [image] - The URL of the user's profile picture.
 * @property {"user" | "admin" | "contributor" | "owner"} role - The user's role, which determines their permissions.
 * @property {Date} [emailVerified] - The timestamp when the user's email was verified.
 * @property {string} [bio] - A short biography of the user.
 * @property {string} [location] - The user's location.
 * @property {string} [website] - The URL of the user's personal website.
 * @property {boolean} isPublic - Whether the user's profile is public.
 * @property {boolean} isVerified - Whether the user is a verified contributor.
 * @property {boolean} isFounder - Whether the user is a founder of the project.
 * @property {object} contributionStats - An object tracking the user's contributions.
 * @property {number} contributionStats.wordsAdded - The number of words added by the user.
 * @property {number} contributionStats.wordsEdited - The number of words edited by the user.
 * @property {number} contributionStats.wordsReviewed - The number of words reviewed by the user.
 * @property {IBadge[]} [badges] - An array of badges awarded to the user.
 * @property {Array<object>} [searchPresets] - An array of saved search presets for the user.
 * @property {Date} createdAt - The timestamp when the user account was created.
 * @property {Date} updatedAt - The timestamp when the user account was last updated.
 */
export interface IUser extends Document {
  name: string
  email: string
  password: string
  image?: string
  role: "user" | "admin" | "contributor" | "owner"
  emailVerified?: Date
  bio?: string
  location?: string
  website?: string
  isPublic: boolean
  isVerified: boolean
  isFounder: boolean
  contributionStats: {
    wordsAdded: number
    wordsEdited: number
    wordsReviewed: number
  }
  badges?: IBadge[]
  searchPresets?: Array<{
    _id?: string
    name: string
    query: string
    filters: {
      category?: string
      dialect?: string
      difficulty?: string
      feedback?: string
    }
    createdAt?: Date
  }>
  createdAt: Date
  updatedAt: Date
}

/**
 * @const UserSchema
 * @description The Mongoose schema for the User model.
 * It defines the structure, validation, and middleware for user documents stored in MongoDB.
 * This schema includes a pre-save hook to automatically hash user passwords.
 */
const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [8, "Password should be at least 8 characters long"],
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "contributor", "owner"],
      default: "user",
    },
    emailVerified: {
      type: Date,
    },
    bio: {
      type: String,
      maxlength: [500, "Bio should not exceed 500 characters"],
    },
    location: {
      type: String,
      maxlength: [100, "Location should not exceed 100 characters"],
    },
    website: {
      type: String,
      maxlength: [200, "Website URL should not exceed 200 characters"],
    },
    isPublic: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isFounder: {
      type: Boolean,
      default: false,
    },
    contributionStats: {
      wordsAdded: {
        type: Number,
        default: 0,
      },
      wordsEdited: {
        type: Number,
        default: 0,
      },
      wordsReviewed: {
        type: Number,
        default: 0,
      },
    },
    badges: [
      {
        type: {
          type: String,
          enum: ["milestone", "specialty"],
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        icon: {
          type: String,
          required: true,
        },
        unlockedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    searchPresets: [
      {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        query: {
          type: String,
          trim: true,
        },
        filters: {
          category: String,
          dialect: String,
          difficulty: String,
          feedback: String,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next()
  }

  try {
    this.password = await hash(this.password, 12)
    next()
  } catch (error) {
    next(error as Error)
  }
})

// Check if the model is already defined to prevent overwriting during hot reloads
export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
