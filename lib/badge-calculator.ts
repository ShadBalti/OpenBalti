import type { IUser } from "@/models/User"

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  type: "milestone" | "specialty" | "achievement"
  unlockedAt?: Date
}

export interface BadgeProgress {
  badge: Badge
  progress: number
  maxProgress: number
  isUnlocked: boolean
}

/**
 * Calculates which badges a user has earned based on their contributions.
 * Includes milestone badges (entries added), specialty badges (areas of expertise),
 * and achievement badges (community recognition).
 */
export function calculateUserBadges(user: IUser): Badge[] {
  const badges: Badge[] = []
  
  const contributions = {
    wordsAdded: user.contributionStats?.wordsAdded || 0,
    wordsEdited: user.contributionStats?.wordsEdited || 0,
    wordsReviewed: user.contributionStats?.wordsReviewed || 0,
  }

  const totalContributions = contributions.wordsAdded + contributions.wordsEdited + contributions.wordsReviewed

  // Milestone Badges
  if (contributions.wordsAdded >= 1) {
    badges.push({
      id: "first-contributor",
      name: "First Contributor",
      description: "Added your first word to the dictionary",
      icon: "🌱",
      type: "milestone",
      unlockedAt: user.createdAt,
    })
  }

  if (contributions.wordsAdded >= 10) {
    badges.push({
      id: "word-collector-10",
      name: "Word Collector",
      description: "Added 10 words to the dictionary",
      icon: "📚",
      type: "milestone",
    })
  }

  if (contributions.wordsAdded >= 50) {
    badges.push({
      id: "prolific-contributor",
      name: "Prolific Contributor",
      description: "Added 50 words to the dictionary",
      icon: "⭐",
      type: "milestone",
    })
  }

  if (contributions.wordsAdded >= 100) {
    badges.push({
      id: "master-lexicographer",
      name: "Master Lexicographer",
      description: "Added 100 words to the dictionary",
      icon: "👑",
      type: "milestone",
    })
  }

  // Specialty Badges
  if (contributions.wordsEdited >= 20) {
    badges.push({
      id: "editor",
      name: "Editor",
      description: "Edited 20 words for accuracy and clarity",
      icon: "✏️",
      type: "specialty",
    })
  }

  if (contributions.wordsReviewed >= 15) {
    badges.push({
      id: "quality-guardian",
      name: "Quality Guardian",
      description: "Reviewed 15 word submissions for quality",
      icon: "🛡️",
      type: "specialty",
    })
  }

  if (totalContributions >= 50 && contributions.wordsEdited >= 10) {
    badges.push({
      id: "versatile-contributor",
      name: "Versatile Contributor",
      description: "Contributed across multiple activities",
      icon: "🎯",
      type: "specialty",
    })
  }

  // Achievement Badges
  if (user.isVerified) {
    badges.push({
      id: "verified-expert",
      name: "Verified Expert",
      description: "Verified as a Balti language expert",
      icon: "✓",
      type: "achievement",
    })
  }

  if (user.isFounder) {
    badges.push({
      id: "founder",
      name: "Founder",
      description: "One of the founders of OpenBalti",
      icon: "🏛️",
      type: "achievement",
    })
  }

  return badges
}

/**
 * Calculates progress towards the next badge for each category.
 */
export function calculateBadgeProgress(user: IUser): BadgeProgress[] {
  const milestones = [
    { threshold: 1, id: "first-contributor" },
    { threshold: 10, id: "word-collector-10" },
    { threshold: 50, id: "prolific-contributor" },
    { threshold: 100, id: "master-lexicographer" },
  ]

  const progress: BadgeProgress[] = []
  const wordsAdded = user.contributionStats?.wordsAdded || 0

  for (let i = 0; i < milestones.length; i++) {
    const current = milestones[i]
    const nextMilestone = i < milestones.length - 1 ? milestones[i + 1].threshold : milestones[i].threshold * 2

    progress.push({
      badge: {
        id: current.id,
        name: `${nextMilestone} Word Milestone`,
        description: `Reach ${nextMilestone} contributions`,
        icon: "🎯",
        type: "milestone",
      },
      progress: Math.min(wordsAdded, nextMilestone),
      maxProgress: nextMilestone,
      isUnlocked: wordsAdded >= current.threshold,
    })
  }

  return progress
}
