import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import Word from "@/models/Word"
import type { IWord } from "@/models/Word"
import { calculateFuzzyScore } from "@/lib/fuzzy-search"
import { searchCache, type CacheKey } from "@/lib/search-cache"

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const search = url.searchParams.get("search") || ""
    const fuzzy = url.searchParams.get("fuzzy") === "true"
    const categories = url.searchParams.getAll("categories")
    const dialects = url.searchParams.getAll("dialects")
    const difficulties = url.searchParams.getAll("difficulties")
    const feedbackFilters = url.searchParams.getAll("feedback")

    // Create cache key
    const cacheKey: CacheKey = {
      query: search,
      filters: {
        categories,
        dialects,
        difficulties,
        feedbackFilters,
      },
      fuzzy,
    }

    // Check cache first
    const cachedResults = searchCache.get<any[]>(cacheKey)
    if (cachedResults) {
      return NextResponse.json({ success: true, data: cachedResults, cached: true })
    }

    await dbConnect()

    const query: any = {}

    // Build multi-filter query
    if (categories.length > 0) {
      query.categories = { $in: categories }
    }

    if (dialects.length > 0) {
      query.dialect = { $in: dialects }
    }

    if (difficulties.length > 0) {
      query.difficultyLevel = { $in: difficulties }
    }

    if (feedbackFilters.length > 0) {
      query.$or = feedbackFilters.map((filter) => ({
        [`feedbackStats.${filter}`]: { $gt: 0 },
      }))
    }

    let results = (await Word.find(query).sort({ createdAt: -1 })) as IWord[]

    // Apply fuzzy matching if enabled
    if (search && fuzzy) {
      results = results
        .map((word: IWord) => ({
          word,
          score: Math.max(calculateFuzzyScore(search, word.balti), calculateFuzzyScore(search, word.english)),
        }))
        .filter(({ score }: { score: number }) => score >= 0.6)
        .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
        .map(({ word }: { word: IWord }) => word)
    } else if (search) {
      // Standard regex search
      results = results.filter(
        (word: IWord) => word.balti.match(new RegExp(search, "i")) || word.english.match(new RegExp(search, "i")),
      )
    }

    // Cache the results
    searchCache.set(cacheKey, results)

    return NextResponse.json({ success: true, data: results })
  } catch (error) {
    console.error("Error in advanced search:", error)
    return NextResponse.json({ success: false, error: "Failed to perform search" }, { status: 500 })
  }
}
