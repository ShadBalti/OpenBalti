"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface DictionaryCategory {
  name: string
  count: number
  description: string
}

interface DictionaryQuickLinksProps {
  categories?: DictionaryCategory[]
  difficulties?: DictionaryCategory[]
  dialects?: DictionaryCategory[]
  totalWords?: number
}

export function DictionaryQuickLinks({
  categories = [],
  difficulties = [],
  dialects = [],
  totalWords = 0,
}: DictionaryQuickLinksProps) {
  const safeCategories = Array.isArray(categories) ? categories : []
  const safeDifficulties = Array.isArray(difficulties) ? difficulties : []
  const safeDialects = Array.isArray(dialects) ? dialects : []

  return (
    <section className="space-y-8" aria-label="Dictionary navigation and entry points">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader>
            <CardTitle className="text-lg text-blue-400">Total Words</CardTitle>
            <CardDescription className="text-2xl font-bold text-white">{totalWords}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-emerald-500/20 bg-emerald-500/5">
          <CardHeader>
            <CardTitle className="text-lg text-emerald-400">Categories</CardTitle>
            <CardDescription className="text-2xl font-bold text-white">{safeCategories.length}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardHeader>
            <CardTitle className="text-lg text-amber-400">Dialects</CardTitle>
            <CardDescription className="text-2xl font-bold text-white">{safeDialects.length}</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Browse by Difficulty Level */}
      <nav aria-label="Browse by difficulty level">
        <h2 className="text-xl font-semibold mb-4">Browse by Difficulty Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {safeDifficulties.map((difficulty) => (
            <Link
              key={difficulty.name}
              href={`/dictionary?difficulty=${difficulty.name}`}
              className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-blue-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold capitalize text-white group-hover:text-blue-400 transition-colors">
                    {difficulty.name}
                  </h3>
                  <Badge variant="secondary" className="ml-2">
                    {difficulty.count}
                  </Badge>
                </div>
                <p className="text-sm text-slate-400">{difficulty.description}</p>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent group-hover:translate-x-full transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Browse by Dialect */}
      <nav aria-label="Browse by dialect">
        <h2 className="text-xl font-semibold mb-4">Browse by Dialect</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {safeDialects.map((dialect) => (
            <Link
              key={dialect.name}
              href={`/dictionary?dialect=${dialect.name}`}
              className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 p-3 text-center transition-all hover:border-emerald-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <div>
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors text-sm">
                  {dialect.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{dialect.count} words</p>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent group-hover:translate-x-full transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Browse by Category */}
      <nav aria-label="Browse by category">
        <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {safeCategories.map((category) => (
            <Link
              key={category.name}
              href={`/dictionary?category=${category.name}`}
              className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-800/50 p-4 transition-all hover:border-purple-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold capitalize text-white group-hover:text-purple-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{category.description}</p>
                </div>
                <Badge variant="secondary" className="ml-4 shrink-0">
                  {category.count}
                </Badge>
              </div>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent group-hover:translate-x-full transition-transform duration-500" />
            </Link>
          ))}
        </div>
      </nav>
    </section>
  )
}
