import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import ActivityLog from "@/models/ActivityLog"

export async function GET(req: NextRequest) {
  try {
    await dbConnect()

    const searchParams = req.nextUrl.searchParams
    const limit = Math.min(Number.parseInt(searchParams.get("limit") || "20", 10), 100)
    const page = Math.max(Number.parseInt(searchParams.get("page") || "1", 10), 1)
    const actionType = searchParams.get("action") || ""

    const skip = (page - 1) * limit

    // Build match filter
    const matchFilter: any = {}
    if (actionType && actionType !== "all") {
      matchFilter.action = actionType
    }

    // Fetch recent activities with user information
    const activities = await ActivityLog.aggregate([
      { $match: matchFilter },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: { path: "$user", preserveNullAndEmptyArrays: true } },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
      {
        $project: {
          _id: 1,
          action: 1,
          wordId: 1,
          wordBalti: 1,
          wordEnglish: 1,
          details: 1,
          createdAt: 1,
          "user._id": 1,
          "user.name": 1,
          "user.image": 1,
          "user.role": 1,
        },
      },
    ])

    // Get total count for pagination
    const totalCount = await ActivityLog.countDocuments(matchFilter)

    return NextResponse.json({
      success: true,
      data: activities,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching live feed:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch live feed" },
      { status: 500 }
    )
  }
}
