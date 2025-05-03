import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

export async function GET() {
  try {
    console.log("🔄 API: Connecting to MongoDB for fetching word categories...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for fetching word categories")

    // Aggregate to get all unique categories
    const categoriesResult = await Word.aggregate([
      { $match: { categories: { $exists: true, $ne: [] } } },
      { $unwind: "$categories" },
      { $group: { _id: "$categories" } },
      { $sort: { _id: 1 } },
    ])

    const categories = categoriesResult.map((item) => item._id)

    console.log(`📋 API: Successfully fetched ${categories.length} categories`)

    return NextResponse.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    console.error("❌ API Error fetching categories:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch categories" }, { status: 500 })
  }
}
