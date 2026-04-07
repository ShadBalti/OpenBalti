import { NextRequest, NextResponse } from "next/server"

/**
 * POST endpoint to receive Web Vitals and performance metrics from clients
 * Stores metrics for analysis and monitoring
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the metrics from the request body
    const metric = await request.json()

    // Validate metric structure
    if (!metric.name || metric.value === undefined) {
      return NextResponse.json(
        { success: false, error: "Invalid metric structure" },
        { status: 400 }
      )
    }

    // Log metric (in production, send to monitoring service like Datadog, New Relic, etc.)
    console.log("[Analytics] Web Vital:", {
      metric: metric.name,
      value: metric.value,
      rating: metric.rating || "none",
      timestamp: new Date(metric.timestamp || Date.now()).toISOString(),
    })

    // In production, you could:
    // 1. Store in a database
    // 2. Send to a monitoring service (Datadog, New Relic, LogRocket)
    // 3. Aggregate and display in a dashboard
    // 4. Create alerts for poor metrics

    return NextResponse.json({
      success: true,
      message: "Metric received",
    })
  } catch (error) {
    console.error("Error processing metric:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process metric" },
      { status: 500 }
    )
  }
}
