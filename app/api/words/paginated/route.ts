import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

/**
 * Server-side pagination endpoint for dictionary words
 * Implements offset-based pagination to load words incrementally
 * 
 * Query parameters:
 * - page: Page number (1-indexed)
 * - limit: Items per page (default: 50, max: 100)
 * - sort: Sort field (default: createdAt)
 * - order: Sort order (asc/desc, default: desc)
 * - dialect: Filter by dialect
 * - difficulty: Filter by difficulty level
 * - category: Filter by category
 * 
 * @example /api/words/paginated?page=1&limit=50
 */
export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const searchParams = request.nextUrl.searchParams
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"))
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") || "50")))
    const sort = searchParams.get("sort") || "createdAt"
    const order = searchParams.get("order") === "asc" ? 1 : -1
    const dialect = searchParams.get("dialect")
    const difficulty = searchParams.get("difficulty")
    const category = searchParams.get("category")

    // Build query filter
    const filter: Record<string, unknown> = {}
    if (dialect) filter.dialect = dialect
    if (difficulty) filter.difficultyLevel = difficulty
    if (category) filter.categories = category

    // Calculate skip value
    const skip = (page - 1) * limit

    // Execute queries in parallel for better performance
    const [words, total] = await Promise.all([
      Word.find(filter)
        .sort({ [sort]: order })
        .skip(skip)
        .limit(limit)
        .select("english balti phonetic dialect difficultyLevel categories feedbackStats createdAt")
        .lean(),
      Word.countDocuments(filter),
    ])

    const totalPages = Math.ceil(total / limit)

    return NextResponse.json(
      {
        success: true,
        data: words,
        pagination: {
          current: page,
          total: totalPages,
          perPage: limit,
          totalItems: total,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error fetching paginated words:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch words",
      },
      { status: 500 },
    )
  }
}
