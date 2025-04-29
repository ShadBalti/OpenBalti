import mongoose, { Schema, type Document } from "mongoose"
import { hash } from "bcryptjs"

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
  createdAt: Date
  updatedAt: Date
}

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
