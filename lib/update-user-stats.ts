import dbConnect from "@/lib/mongodb"
import User from "@/models/User"

type ContributionType = "wordsAdded" | "wordsEdited" | "wordsReviewed"

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
