import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export async function GET() {
  try {
    console.log("🔄 API: Connecting to MongoDB for fetching difficulty level data...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for fetching difficulty level data")

    // Get counts for each difficulty level
    const difficultyData = await Word.aggregate([
      // Only include documents that have a difficultyLevel field
      { $match: { difficultyLevel: { $exists: true, $ne: "" } } },
      // Group by difficulty level and count
      { $group: { _id: "$difficultyLevel", count: { $sum: 1 } } },
      // Format the output
      { $project: { _id: 0, level: "$_id", count: 1 } },
      // Sort by predetermined order (beginner, intermediate, advanced)
      { $sort: { level: 1 } },
    ])

    console.log(`📋 API: Successfully fetched ${difficultyData.length} difficulty levels`)

    return NextResponse.json({ success: true, data: difficultyData })
  } catch (error) {
    console.error("❌ API Error fetching difficulty level data:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch difficulty level data" }, { status: 500 })
  }
}
