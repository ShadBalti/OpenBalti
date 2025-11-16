import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import ActivityLog from "@/models/ActivityLog"

/**
 * Updates contributor statistics based on recent activity.
 * Recalculates and updates the contribution statistics for all users in the database.
 * This function iterates through each user, counts their contributions (words added, edited, and reviewed)
 * from the `ActivityLog`, and updates their profile with the corrected counts.
 * It is designed to be run periodically as a maintenance task to ensure data integrity.
 *
 * @returns {Promise<void>} A promise that resolves when all user statistics have been updated.
 */
export async function updateAllUserStatistics(): Promise<void> {
  try {
    await dbConnect()

    // Get all users
    const users = await User.find({})

    for (const user of users) {
      // Count different contribution types
      const wordsAdded = await ActivityLog.countDocuments({
        user: user._id,
        action: "create",
      })

      const wordsEdited = await ActivityLog.countDocuments({
        user: user._id,
        action: "update",
      })

      const wordsReviewed = await ActivityLog.countDocuments({
        user: user._id,
        action: "review",
      })

      // Update user with the correct counts
      await User.findByIdAndUpdate(user._id, {
        $set: {
          "contributionStats.wordsAdded": wordsAdded,
          "contributionStats.wordsEdited": wordsEdited,
          "contributionStats.wordsReviewed": wordsReviewed,
        },
      })

      console.log(`✅ Updated statistics for user ${user.name} (${user._id})`)
    }

    console.log("✅ All user statistics updated successfully")
  } catch (error) {
    console.error("❌ Error updating user statistics:", error)
  }
}
