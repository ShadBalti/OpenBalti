import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export async function GET() {
  try {
    console.log("🔄 API: Connecting to MongoDB for fetching dialect data...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for fetching dialect data")

    // Get unique dialects and their counts
    const dialectData = await Word.aggregate([
      // Only include documents that have a dialect field
      { $match: { dialect: { $exists: true, $ne: "" } } },
      // Group by dialect and count
      { $group: { _id: "$dialect", count: { $sum: 1 } } },
      // Format the output
      { $project: { _id: 0, name: "$_id", count: 1 } },
      // Sort by count in descending order
      { $sort: { count: -1 } },
    ])

    console.log(`📋 API: Successfully fetched ${dialectData.length} dialects`)

    return NextResponse.json({ success: true, data: dialectData })
  } catch (error) {
    console.error("❌ API Error fetching dialect data:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch dialect data" }, { status: 500 })
  }
}
