import type { MetadataRoute } from "next"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import type { IWord } from "@/models/Word"

/**
 * Safe slug generator for URLs
 */
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://openbalti.com"
  const now = new Date()

  let wordUrls: MetadataRoute.Sitemap = []

  try {
    await dbConnect()

    const words = await Word.find({}, { english: 1, updatedAt: 1 })
      .lean()
      .exec()

    wordUrls = words
      .filter((w: Partial<IWord>) => w?.english)
      .map((word: Partial<IWord>) => {
        const slug = slugify(word.english as string)

        return {
          url: `${baseUrl}/words/${slug}`,
          lastModified: word.updatedAt ? new Date(word.updatedAt) : now,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }
      })
  } catch (error) {
    console.error("Sitemap word fetch failed:", error)
  }

  const blogArticles = [
    "getting-started-with-balti",
    "why-balti-language-matters",
    "balti-dialects-explained",
    "balti-language-guide-2026",
    "traditional-crafts-balti-culture",
    "community-spotlight",
    "learning-balti-with-music",
  ]

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/dictionary`, lastModified: now, changeFrequency: "daily", priority: 0.95 },

    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...blogArticles.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    { url: `${baseUrl}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/learn/phrases`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/learn/script`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/learn/dialectal`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/learn/grammar`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    { url: `${baseUrl}/learn/dialects/khaplu`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/dialects/skardu`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/dialects/chorbat-nubra`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/dialects/kargil`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    { url: `${baseUrl}/learn/phrases/greetings`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/phrases/shopping`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/phrases/emotions`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    { url: `${baseUrl}/learn/culture`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/learn/culture/balti-cap`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/culture/traditional-foods`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/culture/festivals`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learn/culture/family-customs`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    { url: `${baseUrl}/get-started`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/learning-roadmap`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/success-stories`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contribute`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/leaderboard`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contributors`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/activity`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/license`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ]

  return [...staticRoutes, ...wordUrls]
}