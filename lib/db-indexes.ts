import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import WordHistory from "@/models/WordHistory"
import User from "@/models/User"
import mongoose from "mongoose"

/**
 * Initializes all database indexes for optimal query performance
 * Should be called once during application startup or on-demand
 * Indexes are idempotent - safe to call multiple times
 */
export async function initializeDatabaseIndexes() {
  try {
    await dbConnect()

    console.log("📊 Initializing database indexes...")

    // Word collection indexes
    console.log("  Creating Word indexes...")
    await Word.collection.createIndex({ english: 1, balti: 1 })
    await Word.collection.createIndex({ english: "text", balti: "text" })
    await Word.collection.createIndex({ dialect: 1 })
    await Word.collection.createIndex({ difficultyLevel: 1 })
    await Word.collection.createIndex({ categories: 1 })
    await Word.collection.createIndex({ createdBy: 1 })
    await Word.collection.createIndex({ updatedBy: 1 })
    await Word.collection.createIndex({ createdAt: -1 })
    
    // Compound indexes for common filter combinations
    await Word.collection.createIndex({ dialect: 1, difficultyLevel: 1 })
    await Word.collection.createIndex({ categories: 1, dialect: 1 })
    await Word.collection.createIndex({ difficultyLevel: 1, createdAt: -1 })

    // WordHistory collection indexes
    console.log("  Creating WordHistory indexes...")
    await WordHistory.collection.createIndex({ wordId: 1, createdAt: -1 })
    await WordHistory.collection.createIndex({ userId: 1, createdAt: -1 })
    await WordHistory.collection.createIndex({ changeType: 1 })

    // User collection indexes
    console.log("  Creating User indexes...")
    await User.collection.createIndex({ email: 1 }, { unique: true })
    await User.collection.createIndex({ username: 1 }, { unique: true, sparse: true })
    await User.collection.createIndex({ isVerified: 1 })
    await User.collection.createIndex({ isFounder: 1 })

    console.log("✅ Database indexes initialized successfully!")
    return { success: true, message: "All indexes created" }
  } catch (error) {
    // Index creation errors are typically benign (index already exists)
    // but we should still log them for debugging
    if ((error as any)?.code === 48) {
      console.log("ℹ️  Index already exists (expected behavior)")
      return { success: true, message: "Indexes already exist" }
    }
    console.error("⚠️  Error initializing indexes:", error)
    throw error
  }
}

/**
 * Checks which indexes exist on the Word collection
 * Useful for debugging and monitoring index status
 */
export async function checkWordIndexes() {
  try {
    await dbConnect()
    const indexes = await Word.collection.getIndexes()
    console.log("📋 Current Word collection indexes:")
    console.table(indexes)
    return indexes
  } catch (error) {
    console.error("Error checking indexes:", error)
    throw error
  }
}

/**
 * Drops all non-required indexes (useful for maintenance)
 * Always preserves the _id index which is required by MongoDB
 */
export async function dropAllIndexes() {
  try {
    await dbConnect()
    await Word.collection.dropIndexes()
    console.log("🗑️  All Word indexes dropped (except _id)")
    return { success: true }
  } catch (error) {
    console.error("Error dropping indexes:", error)
    throw error
  }
}
