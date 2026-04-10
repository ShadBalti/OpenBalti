import { unstable_cache } from "next/cache"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import User from "@/models/User"

export interface SiteStats {
  totalWords: number
  totalContributors: number
}

/**
 * Fetches site statistics (total words and contributors) with Next.js caching.
 * Results are cached for 1 hour (3600 seconds).
 */
export const getSiteStats = unstable_cache(
  async (): Promise<SiteStats> => {
    try {
      await dbConnect()
      
      const [totalWords, totalContributors] = await Promise.all([
        Word.countDocuments(),
        User.countDocuments(),
      ])
      
      return {
        totalWords: totalWords || 0,
        totalContributors: totalContributors || 0,
      }
    } catch (error) {
      console.error("[getSiteStats] Error fetching stats:", error)
      return {
        totalWords: 0,
        totalContributors: 0,
      }
    }
  },
  ["site-stats"],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ["site-stats"],
  }
)

/**
 * Fetches the top N contributors by entry count.
 * Results are cached for 1 hour.
 */
export const getTopContributors = unstable_cache(
  async (limit: number = 3) => {
    try {
      await dbConnect()
      
      const topContributors = await Word.aggregate([
        {
          $group: {
            _id: "$createdBy",
            entryCount: { $sum: 1 },
          },
        },
        {
          $sort: { entryCount: -1 },
        },
        {
          $limit: limit,
        },
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            _id: 0,
            userId: "$_id",
            username: "$user.name",
            entryCount: 1,
            image: "$user.image",
            bio: "$user.bio",
          },
        },
      ])
      
      return topContributors.filter((c) => c.userId && c.username)
    } catch (error) {
      console.error("[getTopContributors] Error fetching contributors:", error)
      return []
    }
  },
  ["top-contributors"],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ["top-contributors"],
  }
)
