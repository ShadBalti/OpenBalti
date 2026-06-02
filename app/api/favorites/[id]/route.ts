import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Favorite from "@/models/Favorite"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth-options"

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ success: false, error: "Authentication required" }, { status: 401 })
    }

    console.log(`🔄 API: Connecting to MongoDB for removing favorite for word ID: ${id}...`)
    await dbConnect()
    console.log(`✅ API: MongoDB connected for removing favorite for word ID: ${id}`)

    const result = await Favorite.findOneAndDelete({
      userId: session.user.id,
      wordId: id,
    })

    if (!result) {
      return NextResponse.json({ success: false, error: "Favorite not found" }, { status: 404 })
    }

    console.log(`✅ API: Successfully removed word ${id} from favorites for user ${session.user.id}`)

    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error(`❌ API Error removing favorite for word ID ${id}:`, error)
    return NextResponse.json({ success: false, error: "Failed to remove favorite" }, { status: 500 })
  }
}
