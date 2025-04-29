import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import ActivityLog from "@/models/ActivityLog"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET(req: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    console.log("🔄 API: Connecting to MongoDB for fetching activity logs...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for fetching activity logs")

    // Get query parameters
    const searchParams = req.nextUrl.searchParams
    const limit = Number.parseInt(searchParams.get("limit") || "50", 10)
    const page = Number.parseInt(searchParams.get("page") || "1", 10)
    const userId = searchParams.get("userId")
    const wordId = searchParams.get("wordId")
    const action = searchParams.get("action")

    // Build query
    const query: any = {}
    if (userId) query.user = userId
    if (wordId) query.wordId = wordId
    if (action) query.action = action

    // Only admins can see all logs, regular users can only see their own
    if (session.user.role !== "admin") {
      query.user = session.user.id
    }

    // Calculate pagination
    const skip = (page - 1) * limit

    // Fetch logs with pagination
    const logs = await ActivityLog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("user", "name email")
      .lean()

    // Get total count for pagination
    const totalCount = await ActivityLog.countDocuments(query)

    console.log(`📋 API: Successfully fetched ${logs.length} activity logs`)

    return NextResponse.json({
      success: true,
      data: logs,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    console.error("❌ API Error fetching activity logs:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch activity logs" }, { status: 500 })
  }
}
