"use client"

import { HomeCard } from "./home-card"
import { BookOpen, Lightbulb, Info, Compass, Users, Trophy, HelpCircle, CheckCircle, Map } from "lucide-react"

/**
 * Homepage cards section with core tools and resources.
 * Organized in two semantic sections with responsive grid for accessibility.
 *
 * @returns {JSX.Element} The rendered cards section
 */
export function HomeCardsSection() {
  return (
    <>
      {/* Core Tools Section */}
      <section aria-labelledby="core-tools" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h2 id="core-tools" className="text-3xl sm:text-4xl font-bold text-white mb-3">
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

          {/* Contribute Card */}
          <HomeCard
            href="/contribute"
            icon={<Users className="h-7 w-7" />}
            title="Contribute"
            subtitle="Help preserve and document the Balti language by contributing to the OpenBalti dictionary project."
            ctaText="Get Involved"
            ariaLabel="Learn how to contribute to OpenBalti"
          />
        </div>
      </section>

      {/* Resources & Learning Paths Section */}
      <section aria-labelledby="resources-section" className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h2 id="resources-section" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Resources & Learning Paths
          </h2>
          <p className="text-gray-400 text-lg">
            Explore guides, stories, and tools to enhance your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Get Started Card */}
          <HomeCard
            href="/get-started"
            icon={<Compass className="h-7 w-7" />}
            title="Get Started"
            subtitle="New to Balti? Start here with a comprehensive beginner's guide to learning the language and culture."
            ctaText="Begin Your Journey"
            ariaLabel="Access beginner's guide to learning Balti"
          />

          {/* Learning Roadmap Card */}
          <HomeCard
            href="/learning-roadmap"
            icon={<Map className="h-7 w-7" />}
            title="Learning Roadmap"
            subtitle="Follow a structured path from beginner to advanced proficiency. Clear milestones and learning objectives."
            ctaText="View Roadmap"
            ariaLabel="Access structured learning roadmap"
          />

          {/* FAQ Card */}
          <HomeCard
            href="/faq"
            icon={<HelpCircle className="h-7 w-7" />}
            title="FAQ"
            subtitle="Find answers to common questions about learning Balti, using the dictionary, and contributing."
            ctaText="Find Answers"
            ariaLabel="Browse frequently asked questions"
          />

          {/* Success Stories Card */}
          <HomeCard
            href="/success-stories"
            icon={<CheckCircle className="h-7 w-7" />}
            title="Success Stories"
            subtitle="Read inspiring stories from learners who've preserved their heritage and mastered the Balti language."
            ctaText="Read Stories"
            ariaLabel="Explore learner success stories"
          />

          {/* Resources Card */}
          <HomeCard
            href="/resources"
            icon={<BookOpen className="h-7 w-7" />}
            title="Learning Resources"
            subtitle="Curated collection of books, videos, audio files, and tools for Balti language learning."
            ctaText="Explore Resources"
            ariaLabel="Access curated learning resources"
          />

          {/* Leaderboard Card */}
          <HomeCard
            href="/leaderboard"
            icon={<Trophy className="h-7 w-7" />}
            title="Community Leaderboard"
            subtitle="Track learning progress, see top contributors, and celebrate community achievements together."
            ctaText="View Leaderboard"
            ariaLabel="View community leaderboard and rankings"
          />
        </div>
      </section>
    </>
  )
}
