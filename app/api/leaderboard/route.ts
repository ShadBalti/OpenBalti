import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

export async function GET(req: NextRequest) {
  try {
    console.log("🔄 API: Connecting to MongoDB for leaderboard...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for leaderboard")

    const searchParams = req.nextUrl.searchParams
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10)
    const page = Number.parseInt(searchParams.get("page") || "1", 10)
    const sortBy = searchParams.get("sortBy") || "contributions"

    const skip = (page - 1) * limit

    // Build aggregation pipeline for leaderboard
    const pipeline = [
      {
        $addFields: {
          contributionStats: {
            $ifNull: [
              "$contributionStats",
              {
                wordsAdded: 0,
                wordsEdited: 0,
                wordsReviewed: 0,
              },
            ],
          },
        },
      },
      {
        $addFields: {
          "contributionStats.wordsAdded": { $ifNull: ["$contributionStats.wordsAdded", 0] },
          "contributionStats.wordsEdited": { $ifNull: ["$contributionStats.wordsEdited", 0] },
          "contributionStats.wordsReviewed": { $ifNull: ["$contributionStats.wordsReviewed", 0] },
          "contributionStats.total": {
            $add: [
              { $ifNull: ["$contributionStats.wordsAdded", 0] },
              { $ifNull: ["$contributionStats.wordsEdited", 0] },
              { $ifNull: ["$contributionStats.wordsReviewed", 0] },
            ],
          },
        },
      },
      // Filter out users with no contributions
      {
        $match: {
          "contributionStats.total": { $gt: 0 },
        },
      },
      // Sort by contributions or recent
      {
        $sort: sortBy === "recent" ? { createdAt: -1 } : { "contributionStats.total": -1 },
      },
      { $skip: skip },
      { $limit: limit },
      {
        $project: {
          name: 1,
          image: 1,
          role: 1,
          bio: 1,
          contributionStats: 1,
          badges: 1,
          createdAt: 1,
        },
      },
    ]

    const users = await User.aggregate(pipeline)

    // Get total count for pagination
    const totalCount = await User.countDocuments({
      $expr: {
        $gt: [
          {
            $add: [
              { $ifNull: ["$contributionStats.wordsAdded", 0] },
              { $ifNull: ["$contributionStats.wordsEdited", 0] },
              { $ifNull: ["$contributionStats.wordsReviewed", 0] },
            ],
          },
          0,
        ],
      },
    })

    console.log(`📋 API: Successfully fetched ${users.length} leaderboard entries`)

    return NextResponse.json({
      success: true,
      data: users,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    console.error("❌ API Error fetching leaderboard:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch leaderboard" }, { status: 500 })
  }
}
