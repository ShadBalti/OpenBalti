"use client"

import { HomeCard } from "./home-card"
import { BookOpen, Lightbulb, Info } from "lucide-react"

/**
 * Homepage cards section with Dictionary, Learn Balti, and About cards.
 * Organized in a responsive grid with semantic structure for SEO.
 *
 * @returns {JSX.Element} The rendered cards section
 */
export function HomeCardsSection() {
  return (
    <section aria-labelledby="main-sections" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="mb-12 text-center">
        <h2 id="main-sections" className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Explore OpenBalti
        </h2>
        <p className="text-gray-400 text-lg">
          Access the dictionary, learn the language, or discover more about Balti culture
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
        {/* Dictionary Card */}
        <HomeCard
          href="/dictionary"
          icon={<BookOpen className="h-7 w-7" />}
          title="Dictionary"
          subtitle="Browse and search thousands of Balti words with English translations. Add your own entries to help preserve the language."
          ctaText="Explore Dictionary"
          ariaLabel="Navigate to the Balti-English dictionary"
        />

        {/* Learn Balti Card */}
        <HomeCard
          href="/learn"
          icon={<Lightbulb className="h-7 w-7" />}
          title="Learn Balti"
          subtitle="Access learning resources and educational materials to master the Balti language. Start your journey today."
          ctaText="Start Learning"
          ariaLabel="Access Balti language learning resources"
        />

        {/* About Card */}
        <HomeCard
          href="/about"
          icon={<Info className="h-7 w-7" />}
          title="About OpenBalti"
          subtitle="Learn more about our mission to preserve Balti culture and heritage. Discover the story behind OpenBalti."
          ctaText="Learn Our Story"
          ariaLabel="Learn more about the OpenBalti project"
        />
        {/* About Card */}
        <HomeCard
          href="/contribute"
          icon={<Info className="h-7 w-7" />}
          title="Contribute to OpenBalti"
          subtitle="Help preserve and document the Balti language by contributing to the OpenBalti dictionary project."
          ariaLabel="learn how to Contribute to OpenBalti "
        />
      </div>
    </section>
  )
}
