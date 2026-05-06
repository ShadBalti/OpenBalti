import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import ActivityLog from "@/models/ActivityLog"

export async function GET(req: NextRequest) {
  try {
    await dbConnect()

    const searchParams = req.nextUrl.searchParams
    const userId = searchParams.get("userId")
    const action = searchParams.get("action")
    const limit = Math.min(Number.parseInt(searchParams.get("limit") || "20", 10), 100)
    const page = Math.max(Number.parseInt(searchParams.get("page") || "1", 10), 1)

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      )
    }

    const skip = (page - 1) * limit

    // Build match filter
    const matchFilter: any = {
      user: userId,
    }

    if (action && action !== "all") {
      matchFilter.action = action
    }

    // Fetch user activities
    const activities = await ActivityLog.find(matchFilter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()

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
    console.error("Error fetching user activity:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch user activity" },
      { status: 500 }
    )
  }
}
