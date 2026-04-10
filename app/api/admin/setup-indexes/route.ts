import { NextRequest, NextResponse } from "next/server"
import { initializeDatabaseIndexes } from "@/lib/db-indexes"

/**
 * Admin endpoint to initialize database indexes
 * This should be called once during initial setup or when indexes are missing
 * In production, consider calling this from a cron job or setup script
 * 
 * Security: Should be protected with API key or authentication in production
 */
export async function POST(request: NextRequest) {
  try {
    // In production, verify API key or admin status here
    const authHeader = request.headers.get("authorization")
    const apiKey = process.env.ADMIN_API_KEY

    if (apiKey && authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      )
    }

    if (process.env.NODE_ENV === "development") {
      console.log("🚀 Initializing database indexes...")
    }
    const result = await initializeDatabaseIndexes()

    return NextResponse.json(
      {
        success: true,
        message: result.message,
        timestamp: new Date().toISOString(),
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[Admin] Index setup failed:", error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to initialize indexes",
      },
      { status: 500 },
    )
  }
}

/**
 * Optional GET endpoint to check current index status
 */
export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")
    const apiKey = process.env.ADMIN_API_KEY

    if (apiKey && authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Use POST method to initialize indexes",
        documentation: "POST /api/admin/setup-indexes with Authorization header",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[Admin] Index check failed:", error instanceof Error ? error.message : "Unknown error")
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to check indexes",
      },
      { status: 500 },
    )
  }
}
