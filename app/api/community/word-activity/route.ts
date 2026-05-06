import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import ActivityLog from "@/models/ActivityLog"

export async function GET(req: NextRequest) {
  try {
    await dbConnect()

    const searchParams = req.nextUrl.searchParams
    const timeframe = searchParams.get("timeframe") || "week"
    const limit = Math.min(Number.parseInt(searchParams.get("limit") || "15", 10), 50)

    // Calculate date range
    const now = new Date()
    let dateFrom = new Date()

    if (timeframe === "today") {
      dateFrom.setHours(0, 0, 0, 0)
    } else if (timeframe === "week") {
      dateFrom.setDate(now.getDate() - 7)
    } else if (timeframe === "month") {
      dateFrom.setMonth(now.getMonth() - 1)
    } else {
      dateFrom = new Date(0) // All time
    }

    // Get recently modified words
    const words = await Word.aggregate([
      {
        $match: {
          $or: [
            { createdAt: { $gte: dateFrom } },
            { updatedAt: { $gte: dateFrom } },
          ],
        },
      },
      { $sort: { updatedAt: -1, createdAt: -1 } },
      { $limit: limit },
      {
        $lookup: {
          from: "activitylogs",
          let: { wordId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$wordId", "$$wordId"] },
                createdAt: { $gte: dateFrom },
              },
            },
            {
              $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "userInfo",
              },
            },
            { $unwind: { path: "$userInfo", preserveNullAndEmptyArrays: true } },
            {
              $group: {
                _id: "$user",
                action: { $first: "$action" },
                timestamp: { $first: "$createdAt" },
                name: { $first: "$userInfo.name" },
                image: { $first: "$userInfo.image" },
                role: { $first: "$userInfo.role" },
              },
            },
            { $sort: { timestamp: -1 } },
            { $limit: 5 },
          ],
          as: "contributors",
        },
      },
      {
        $project: {
          _id: 1,
          balti: 1,
          english: 1,
          createdAt: 1,
          updatedAt: 1,
          categories: 1,
          feedbackStats: 1,
          contributors: {
            $map: {
              input: "$contributors",
              as: "contributor",
              in: {
                userId: "$$contributor._id",
                name: "$$contributor.name",
                image: "$$contributor.image",
                role: "$$contributor.role",
                action: "$$contributor.action",
                timestamp: "$$contributor.timestamp",
              },
            },
          },
        },
      },
    ])

    return NextResponse.json({
      success: true,
      data: words,
      timeframe,
    })
  } catch (error) {
    console.error("Error fetching word activity:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch word activity" },
      { status: 500 }
    )
  }
}
