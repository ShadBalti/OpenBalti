import { Suspense } from "react"
import { HomePageContent } from "@/components/HomePageContent"
import { HomeCardsSection } from "@/components/home-cards-section"

/**
 * Renders the homepage with hero section, navigation cards, and content.
 * Optimized for SEO with semantic structure and proper heading hierarchy.
 *
 * @returns {JSX.Element} The rendered homepage
 */
export default function Home() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="text-blue-500">OpenBalti</span> – Preserve Balti
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Explore and contribute to the digital preservation of the Balti language
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <HomeCardsSection />
        </Suspense>

        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <HomePageContent />
        </Suspense>
      </div>
    </div>
  )
}
