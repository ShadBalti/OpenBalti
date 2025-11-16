import dbConnect from "@/lib/mongodb"
import ActivityLog from "@/models/ActivityLog"
import WordHistory from "@/models/WordHistory"
import User from "@/models/User"
import type { Session } from "next-auth"
import { incrementUserStat } from "@/lib/update-user-stats"
import { checkAndAwardBadges } from "@/lib/badge-system"

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

/**
 * Logs user activity and updates relevant records in the database.
 * This function handles logging to the main activity log, updating user statistics,
 * awarding badges, and recording word history for create, update, and delete actions.
 *
 * @param {LogActivityParams} params - The parameters for the activity log.
 * @param {Session} [params.session] - The user's session object, used to identify the user.
 * @param {string} [params.userId] - The ID of the user performing the action (used if session is not available).
 * @param {ActivityAction} params.action - The type of action being logged (e.g., 'create', 'update').
 * @param {string} [params.wordId] - The ID of the word associated with the activity.
 * @param {string} [params.wordBalti] - The Balti representation of the word.
 * @param {string} [params.wordEnglish] - The English translation of the word.
 * @param {string} [params.details] - Additional details about the activity.
 * @returns {Promise<void>} A promise that resolves when the activity has been logged.
 */
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

    await checkAndAwardBadges(actualUserId)

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
