import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Balti Learning Roadmap - Your Structured Path to Fluency",
  "Follow our structured learning roadmap from beginner to advanced, with clear milestones, timelines, and recommended resources at each level.",
  { keywords: ["learning path", "roadmap", "structured learning", "progression"] },
)

export default function LearningRoadmapPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Balti Learning Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured path from complete beginner to confident speaker, with clear milestones and recommended
            resources at each stage.
          </p>
        </section>

        {/* Level 1: Beginner */}
        <section className="mb-12">
          <div className="border-l-4 border-primary pl-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Level 1: Beginner (Weeks 1-8)</h2>
            <p className="text-muted-foreground">Foundation & Basic Communication</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Goals</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Understand Balti alphabet and pronunciation</li>
                <li>✓ Learn 50-100 essential vocabulary words</li>
                <li>✓ Master basic greetings and courtesy phrases</li>
                <li>✓ Understand present tense verb forms</li>
                <li>✓ Introduce yourself in simple Balti</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Recommended Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  →{" "}
                  <Link href="/blog/getting-started-with-balti" className="text-primary hover:underline">
                    Getting Started Guide
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/learn/pronunciation-guide" className="text-primary hover:underline">
                    Pronunciation Master Class
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/learn/script" className="text-primary hover:underline">
                    Balti Script Lesson
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/learn/phrases/greetings" className="text-primary hover:underline">
                    Greetings & Etiquette
                  </Link>
                </li>
                <li>→ Daily 20-minute practice sessions</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Daily Routine Suggestion</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>5 min: Pronunciation drills</li>
                <li>10 min: Learn 5 new vocabulary words</li>
                <li>5 min: Practice a single greeting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Level 2: Elementary */}
        <section className="mb-12">
          <div className="border-l-4 border-blue-400 pl-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Level 2: Elementary (Weeks 9-16)</h2>
            <p className="text-muted-foreground">Expanding Vocabulary & Grammar</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Goals</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Expand vocabulary to 200+ words</li>
                <li>✓ Understand past and future tenses</li>
                <li>✓ Use postpositions for location and direction</li>
                <li>✓ Ask basic questions</li>
                <li>✓ Hold 1-2 minute conversations</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Recommended Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  →{" "}
                  <Link href="/learn/complete-grammar" className="text-primary hover:underline">
                    Complete Grammar Reference
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/learn/phrases/shopping" className="text-primary hover:underline">
                    Shopping & Bargaining Guide
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/learn/dialects" className="text-primary hover:underline">
                    Dialects Overview
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/dictionary" className="text-primary hover:underline">
                    OpenBalti Dictionary (active use)
                  </Link>
                </li>
                <li>→ Practice with language partners in community</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Daily Routine Suggestion</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>5 min: Review previous vocabulary</li>
                <li>15 min: Learn new grammar concept with examples</li>
                <li>15 min: Practice vocabulary in context</li>
                <li>10 min: Conversation practice (if possible)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Level 3: Intermediate */}
        <section className="mb-12">
          <div className="border-l-4 border-green-400 pl-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Level 3: Intermediate (Weeks 17-32)</h2>
            <p className="text-muted-foreground">Complex Conversations & Cultural Understanding</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Goals</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Reach 400+ vocabulary words</li>
                <li>✓ Understand and use complex sentence structures</li>
                <li>✓ Hold 5-10 minute conversations on familiar topics</li>
                <li>✓ Understand different Balti dialects</li>
                <li>✓ Read and write basic Balti</li>
                <li>✓ Understand cultural context of words and phrases</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Recommended Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  →{" "}
                  <Link href="/learn/culture" className="text-primary hover:underline">
                    Cultural Heritage Deep Dives
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/learn/dialects/khaplu" className="text-primary hover:underline">
                    Regional Dialect Studies
                  </Link>
                </li>
                <li>
                  →{" "}
                  <Link href="/learn/phrases/emotions" className="text-primary hover:underline">
                    Expressing Emotions in Context
                  </Link>
                </li>
                <li>→ Regular conversation practice with native speakers</li>
                <li>→ Listen to Balti music and folk stories</li>
                <li>→ Explore etymology and word connections</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Daily Routine Suggestion</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>20 min: Reading or listening to cultural content</li>
                <li>20 min: Conversation practice</li>
                <li>20 min: Learning advanced grammar or new vocabulary</li>
                <li>15 min: Writing practice</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Level 4: Advanced */}
        <section className="mb-12">
          <div className="border-l-4 border-purple-400 pl-6 mb-6">
            <h2 className="text-3xl font-bold mb-2">Level 4: Advanced (Weeks 33+)</h2>
            <p className="text-muted-foreground">Fluency & Cultural Mastery</p>
          </div>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Goals</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Expand vocabulary to 600+</li>
                <li>✓ Speak fluently without hesitation on most topics</li>
                <li>✓ Understand nuanced cultural references and idioms</li>
                <li>✓ Read historical and literary texts</li>
                <li>✓ Teach others or contribute to preservation</li>
                <li>✓ Appreciate poetic and artistic expressions in Balti</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Recommended Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  →{" "}
                  <Link href="/contribute" className="text-primary hover:underline">
                    Contribute to OpenBalti Dictionary
                  </Link>
                </li>
                <li>→ Immersive experiences in Baltistan</li>
                <li>→ Connect with academic resources</li>
                <li>→ Mentor new learners</li>
                <li>→ Explore historical Yige script</li>
                <li>→ Document and preserve oral traditions</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Focus Areas</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Deepening cultural understanding</li>
                <li>• Mastering historical and archaic forms</li>
                <li>• Contributing to academic research</li>
                <li>• Teaching and mentoring others</li>
                <li>• Preserving endangered vocabulary</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Progress Tracking */}
        <section className="bg-primary/10 border border-primary/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">How to Track Your Progress</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <strong>Weekly Checkpoints:</strong> Test yourself on vocabulary and grammar concepts
            </li>
            <li>
              <strong>Conversation Milestones:</strong> Record yourself speaking at each level and compare
            </li>
            <li>
              <strong>Dictionary Usage:</strong> Track how many words you actively use in speech
            </li>
            <li>
              <strong>Community Engagement:</strong> Join study groups and get feedback from native speakers
            </li>
            <li>
              <strong>Personal Projects:</strong> Write simple stories, keep a journal, or document traditions
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-muted-foreground mb-6">
            Everyone's learning pace is different. Use this roadmap as a guide, not a strict timeline. Consistency
            matters more than speed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog/getting-started-with-balti"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90"
            >
              Start at Level 1
            </Link>
            <Link
              href="/resources"
              className="inline-block bg-background border border-border px-6 py-2 rounded-lg hover:border-primary"
            >
              Browse All Resources
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
