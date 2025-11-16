import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

type ContributionType = "wordsAdded" | "wordsEdited" | "wordsReviewed"

/**
 * Increments a specific contribution statistic for a user by one.
 * This is an atomic operation that efficiently updates a user's contribution count
 * (e.g., words added, edited, or reviewed) in the database.
 *
 * @param {string} userId - The ID of the user whose statistic needs to be updated.
 * @param {ContributionType} type - The type of contribution to increment ('wordsAdded', 'wordsEdited', 'wordsReviewed').
 * @returns {Promise<void>} A promise that resolves when the statistic has been updated.
 */
export async function incrementUserStat(userId: string, type: ContributionType): Promise<void> {
  if (!userId) {
    console.warn("Attempted to update stats without a valid user ID")
    return
  }

  try {
    await dbConnect()

    const updateField = `contributionStats.${type}`

    await User.findByIdAndUpdate(userId, { $inc: { [updateField]: 1 } }, { new: true })

    console.log(`✅ Updated user ${userId} stats: incremented ${type}`)
  } catch (error) {
    console.error("❌ Error updating user stats:", error)
  }
}
