import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

export async function GET(req: NextRequest) {
  try {
    console.log("🔄 API: Connecting to MongoDB for fetching users...")
    await dbConnect()
    console.log("✅ API: MongoDB connected for fetching users")

    // Get query parameters
    const searchParams = req.nextUrl.searchParams
    const limit = Number.parseInt(searchParams.get("limit") || "20", 10)
    const page = Number.parseInt(searchParams.get("page") || "1", 10)
    const sortBy = searchParams.get("sortBy") || "contributions"
    const search = searchParams.get("search") || ""

    // Build query - show all accounts, not just public ones
    const query: any = {}

    if (search) {
      query.name = { $regex: search, $options: "i" }
    }

    // Calculate pagination
    const skip = (page - 1) * limit

    // Determine sort order
    let sort: any = {}
    if (sortBy === "contributions") {
      sort = { "contributionStats.total": -1 }
    } else if (sortBy === "recent") {
      sort = { createdAt: -1 }
    } else if (sortBy === "name") {
      sort = { name: 1 }
    }

    // Make sure contributionStats exists for all users
    const pipeline = [
      { $match: query },
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
      { $sort: sort },
      { $skip: skip },
      { $limit: limit },
      {
        $project: {
          name: 1,
          image: 1,
          role: 1,
          bio: 1,
          isPublic: 1,
          contributionStats: 1,
          createdAt: 1,
        },
      },
    ]

    // Fetch users with pagination using aggregation
    const users = await User.aggregate(pipeline)

    // Get total count for pagination
    const totalCount = await User.countDocuments(query)

    console.log(`📋 API: Successfully fetched ${users.length} users`)

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
    console.error("❌ API Error fetching users:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch users" }, { status: 500 })
  }
}
