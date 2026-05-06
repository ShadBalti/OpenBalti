import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import ActivityLog from "@/models/ActivityLog"
import User from "@/models/User"

export async function GET(req: NextRequest) {
  try {
    await dbConnect()

    const searchParams = req.nextUrl.searchParams
    const timeframe = searchParams.get("timeframe") || "7d" // 7d, 30d, all
    const limit = Math.min(Number.parseInt(searchParams.get("limit") || "10", 10), 50)

    // Calculate date range
    const now = new Date()
    let dateFrom = new Date()

    if (timeframe === "7d") {
      dateFrom.setDate(now.getDate() - 7)
    } else if (timeframe === "30d") {
      dateFrom.setDate(now.getDate() - 30)
    } else {
      dateFrom = new Date(0) // All time
    }

    // Get trending words (by feedback and comments in timeframe)
    const trendingWords = await Word.aggregate([
      {
        $match: {
          createdAt: { $gte: dateFrom },
        },
      },
      {
        $addFields: {
          trendScore: {
            $add: [
              { $ifNull: ["$feedbackStats.useful", 0] },
              { $ifNull: ["$feedbackStats.trusted", 0] },
              { $multiply: [{ $ifNull: ["$feedbackStats.needsReview", 0] }, 0.5] },
            ],
          },
        },
      },
      { $sort: { trendScore: -1, createdAt: -1 } },
      { $limit: limit },
      {
        $project: {
          balti: 1,
          english: 1,
          categories: 1,
          feedbackStats: 1,
          createdAt: 1,
          trendScore: 1,
        },
      },
    ])

    // Get top contributors this week
    const topContributorsTimeframe = new Date()
    topContributorsTimeframe.setDate(now.getDate() - 7)

    const topContributors = await ActivityLog.aggregate([
      {
        $match: {
          createdAt: { $gte: topContributorsTimeframe },
          action: { $in: ["create", "update"] },
        },
      },
      {
        $group: {
          _id: "$user",
          contributionCount: { $sum: 1 },
        },
      },
      { $sort: { contributionCount: -1 } },
      { $limit: limit },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      { $unwind: { path: "$userInfo", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          _id: 1,
          contributionCount: 1,
          "userInfo.name": 1,
          "userInfo.image": 1,
          "userInfo.role": 1,
        },
      },
    ])

    // Get most searched words (from search activity if tracked)
    const mostSearched = await Word.aggregate([
      {
        $match: {
          "searchCount": { $gt: 0 },
        },
      },
      { $sort: { searchCount: -1 } },
      { $limit: limit },
      {
        $project: {
          balti: 1,
          english: 1,
          searchCount: 1,
          categories: 1,
        },
      },
    ]).catch(() => []) // If searchCount doesn't exist, return empty

    return NextResponse.json({
      success: true,
      data: {
        trendingWords,
        topContributors,
        mostSearched,
        timeframe,
      },
    })
  } catch (error) {
    console.error("Error fetching trending data:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch trending data" },
      { status: 500 }
    )
  }
}
