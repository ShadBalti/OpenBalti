import dbConnect from "@/lib/mongodb"
import ActivityLog from "@/models/ActivityLog"
import WordHistory from "@/models/WordHistory"
import User from "@/models/User"
import type { Session } from "next-auth"
import { incrementUserStat } from "@/lib/update-user-stats"

type ActivityAction = "create" | "update" | "delete" | "review"

interface LogActivityParams {
  session?: Session
  userId?: string
  action: ActivityAction
  wordId?: string
  wordBalti?: string
  wordEnglish?: string
  details?: string
}

export async function logActivity({
  session,
  userId,
  action,
  wordId,
  wordBalti,
  wordEnglish,
  details,
}: LogActivityParams): Promise<void> {
  const actualUserId = session?.user?.id || userId

  if (!actualUserId) {
    console.warn("Attempted to log activity without a valid user session or userId")
    return
  }

  try {
    await dbConnect()

    // Log to activity log
    await ActivityLog.create({
      user: actualUserId,
      action,
      wordId,
      wordBalti,
      wordEnglish,
      details,
    })

    console.log(`✅ Activity logged: ${action} by user ${actualUserId}`)

    // Update user statistics based on the action
    if (action === "create") {
      await incrementUserStat(actualUserId, "wordsAdded")
    } else if (action === "update") {
      await incrementUserStat(actualUserId, "wordsEdited")
    } else if (action === "review") {
      await incrementUserStat(actualUserId, "wordsReviewed")
    }

    // Log to word history for create, update, delete actions
    if (["create", "update", "delete"].includes(action) && wordId && wordBalti && wordEnglish) {
      // Get user details for the history record
      const user = await User.findById(actualUserId).select("name image").lean()

      await WordHistory.create({
        wordId,
        balti: wordBalti,
        english: wordEnglish,
        action: action as "create" | "update" | "delete",
        userId: actualUserId,
        userName: user?.name || "Unknown User",
        userImage: user?.image || undefined,
        details,
      })

      console.log(`✅ Word history logged: ${action} for word ${wordId}`)
    }
  } catch (error) {
    console.error("❌ Error logging activity:", error)
  }
}
