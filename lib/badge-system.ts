import dbConnect from "@/lib/mongodb"
import User from "@/models/User"
import type { IBadge } from "@/models/User"

export interface BadgeDefinition {
  id: string
  type: "milestone" | "specialty"
  name: string
  description: string
  icon: string
  requirement: (stats: { wordsAdded: number; wordsEdited: number; wordsReviewed: number }) => boolean
}

// Define all available badges
export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  // Milestone badges for words added
  {
    id: "milestone_10_words",
    type: "milestone",
    name: "First Steps",
    description: "Added 10 words",
    icon: "🌱",
    requirement: (stats) => stats.wordsAdded >= 10,
  },
  {
    id: "milestone_20_words",
    type: "milestone",
    name: "Growing Contributor",
    description: "Added 20 words",
    icon: "🌿",
    requirement: (stats) => stats.wordsAdded >= 20,
  },
  {
    id: "milestone_30_words",
    type: "milestone",
    name: "Dedicated Builder",
    description: "Added 30 words",
    icon: "🌳",
    requirement: (stats) => stats.wordsAdded >= 30,
  },
  {
    id: "milestone_40_words",
    type: "milestone",
    name: "Language Architect",
    description: "Added 40 words",
    icon: "🏗️",
    requirement: (stats) => stats.wordsAdded >= 40,
  },
  {
    id: "milestone_50_words",
    type: "milestone",
    name: "Half Century",
    description: "Added 50 words",
    icon: "⭐",
    requirement: (stats) => stats.wordsAdded >= 50,
  },
  {
    id: "milestone_60_words",
    type: "milestone",
    name: "Prolific Creator",
    description: "Added 60 words",
    icon: "✨",
    requirement: (stats) => stats.wordsAdded >= 60,
  },
  {
    id: "milestone_70_words",
    type: "milestone",
    name: "Master Builder",
    description: "Added 70 words",
    icon: "🎯",
    requirement: (stats) => stats.wordsAdded >= 70,
  },
  {
    id: "milestone_80_words",
    type: "milestone",
    name: "Language Guardian",
    description: "Added 80 words",
    icon: "🛡️",
    requirement: (stats) => stats.wordsAdded >= 80,
  },
  {
    id: "milestone_90_words",
    type: "milestone",
    name: "Legendary Contributor",
    description: "Added 90 words",
    icon: "👑",
    requirement: (stats) => stats.wordsAdded >= 90,
  },
  {
    id: "milestone_100_words",
    type: "milestone",
    name: "Century Milestone",
    description: "Added 100 words",
    icon: "🏆",
    requirement: (stats) => stats.wordsAdded >= 100,
  },
  {
    id: "milestone_150_words",
    type: "milestone",
    name: "Sesquicentennial",
    description: "Added 150 words",
    icon: "💎",
    requirement: (stats) => stats.wordsAdded >= 150,
  },
  {
    id: "milestone_200_words",
    type: "milestone",
    name: "Double Century",
    description: "Added 200 words",
    icon: "🌟",
    requirement: (stats) => stats.wordsAdded >= 200,
  },
  {
    id: "milestone_500_words",
    type: "milestone",
    name: "Balti Legend",
    description: "Added 500 words",
    icon: "🔥",
    requirement: (stats) => stats.wordsAdded >= 500,
  },
  // Specialty badges
  {
    id: "specialty_editor",
    type: "specialty",
    name: "Meticulous Editor",
    description: "Edited 50 words",
    icon: "✏️",
    requirement: (stats) => stats.wordsEdited >= 50,
  },
  {
    id: "specialty_reviewer",
    type: "specialty",
    name: "Quality Reviewer",
    description: "Reviewed 50 words",
    icon: "👀",
    requirement: (stats) => stats.wordsReviewed >= 50,
  },
]

export async function checkAndAwardBadges(userId: string): Promise<IBadge[]> {
  try {
    await dbConnect()

    const user = await User.findById(userId)
    if (!user) {
      console.warn(`User ${userId} not found for badge check`)
      return []
    }

    const stats = user.contributionStats || { wordsAdded: 0, wordsEdited: 0, wordsReviewed: 0 }
    const existingBadgeIds = new Set((user.badges || []).map((b) => b.id))
    const newBadges: IBadge[] = []

    // Check each badge definition
    for (const badgeDef of BADGE_DEFINITIONS) {
      // Skip if user already has this badge
      if (existingBadgeIds.has(badgeDef.id)) {
        continue
      }

      // Check if user meets the requirement
      if (badgeDef.requirement(stats)) {
        const newBadge: IBadge = {
          type: badgeDef.type,
          id: badgeDef.id,
          name: badgeDef.name,
          description: badgeDef.description,
          icon: badgeDef.icon,
          unlockedAt: new Date(),
        }

        newBadges.push(newBadge)
        existingBadgeIds.add(badgeDef.id)
      }
    }

    // Award new badges if any
    if (newBadges.length > 0) {
      user.badges = [...(user.badges || []), ...newBadges]
      await user.save()
      console.log(`Awarded ${newBadges.length} new badges to user ${userId}`)
    }

    return newBadges
  } catch (error) {
    console.error("Error checking and awarding badges:", error)
    return []
  }
}

export function getBadgeDefinition(badgeId: string): BadgeDefinition | undefined {
  return BADGE_DEFINITIONS.find((b) => b.id === badgeId)
}
