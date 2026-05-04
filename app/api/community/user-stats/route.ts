import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import ActivityLog from "@/models/ActivityLog"

export async function GET(req: NextRequest) {
  try {
    await dbConnect()

    const searchParams = req.nextUrl.searchParams
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 }
      )
    }

    // Get user with their stats
    const user = await User.findById(userId).select(
      "name email image role badges contributionStats createdAt"
    )

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      )
    }

    // Calculate streak (consecutive days with contribution)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const contributionsByDate = await ActivityLog.aggregate([
      {
        $match: {
          userId: user._id,
          action: { $in: ["create", "update", "review"] },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: -1 } },
      { $limit: 365 },
    ])

    // Calculate current streak
    let currentStreak = 0
    if (contributionsByDate.length > 0) {
      const dateList = contributionsByDate.map((item) => new Date(item._id))

      for (let i = 0; i < dateList.length; i++) {
        const expectedDate = new Date(today)
        expectedDate.setDate(expectedDate.getDate() - i)
        expectedDate.setHours(0, 0, 0, 0)

        const currentDate = new Date(dateList[i])
        currentDate.setHours(0, 0, 0, 0)

        if (
          expectedDate.getTime() === currentDate.getTime() ||
          (i === 0 && expectedDate > currentDate)
        ) {
          currentStreak++
        } else {
          break
        }
      }
    }

    // Get recent contributions
    const recentContributions = await ActivityLog.aggregate([
      {
        $match: {
          userId: user._id,
        },
      },
      { $sort: { createdAt: -1 } },
      { $limit: 5 },
      {
        $project: {
          action: 1,
          wordBalti: 1,
          wordEnglish: 1,
          createdAt: 1,
        },
      },
    ])

    return NextResponse.json({
      success: true,
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
          createdAt: user.createdAt,
        },
        stats: {
          ...user.contributionStats,
          currentStreak,
          totalContributions: user.contributionStats?.total || 0,
          badges: user.badges || [],
        },
        recentContributions,
      },
    })
  } catch (error) {
    console.error("Error fetching user stats:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch user statistics" },
      { status: 500 }
    )
  }
}
