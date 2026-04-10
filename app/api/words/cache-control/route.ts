import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"

/**
 * GET endpoint for cache management - returns word data with appropriate cache headers
 * Implements cache strategies for different word endpoints
 * 
 * Query params:
 * - type: 'popular' | 'recent' | 'search' (default: 'popular')
 * - limit: number of results to return (default: 50)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get("type") || "popular"
    const limit = parseInt(searchParams.get("limit") || "50")

    await dbConnect()

    let query = Word.find({})

    switch (type) {
      case "popular":
        // Most viewed/liked words - cached for 1 hour
        query = query.sort({ viewCount: -1 }).limit(limit)
        return NextResponse.json(
          { success: true, type: "popular", data: await query.lean() },
          {
            headers: {
              "Cache-Control": "public, max-age=3600, s-maxage=3600",
            },
          }
        )

      case "recent":
        // Recently added/updated words - cached for 30 minutes
        query = query.sort({ createdAt: -1 }).limit(limit)
        return NextResponse.json(
          { success: true, type: "recent", data: await query.lean() },
          {
            headers: {
              "Cache-Control": "public, max-age=1800, s-maxage=1800",
            },
          }
        )

      case "search":
        // Search results - cached for 5 minutes (shorter due to query variability)
        const searchQuery = searchParams.get("q") || ""
        if (!searchQuery) {
          return NextResponse.json(
            { success: false, error: "Search query required" },
            { status: 400 }
          )
        }

        query = query
          .or([
            { english: { $regex: searchQuery, $options: "i" } },
            { balti: { $regex: searchQuery, $options: "i" } },
          ])
          .limit(limit)

        return NextResponse.json(
          { success: true, type: "search", query: searchQuery, data: await query.lean() },
          {
            headers: {
              "Cache-Control": "public, max-age=300, s-maxage=300",
            },
          }
        )

      default:
        return NextResponse.json(
          { success: false, error: "Invalid cache type" },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error("Cache control error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to retrieve cached data" },
      { status: 500 }
    )
  }
}
