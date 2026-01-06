import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Community Spotlight: Native Speakers Preserving Balti",
  "Meet passionate community members dedicating their time and expertise to teach and preserve the Balti language for future generations.",
  { keywords: ["community", "native speakers", "language preservation", "Balti community"] },
)

export default function CommunitySpotlightPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link href="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Spotlight: Native Speakers Preserving Balti</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>December 20, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2>The Backbone of Language Preservation</h2>
            <p>
              Language preservation doesn't happen in isolation. It thrives because of passionate individuals—native
              speakers, educators, linguists, and community organizers—who dedicate their time, energy, and expertise to
              keeping their language alive. These are the unsung heroes of cultural preservation.
            </p>
          </section>

          <section>
            <h2>Who Are These Community Champions?</h2>
            <p>The Balti language preservation movement includes:</p>
            <ul>
              <li>
                <strong>Elders and Native Speakers:</strong> Those whose first language is Balti and who serve as living
                libraries of the language's authentic usage and cultural context.
              </li>
              <li>
                <strong>Educators:</strong> Teachers who maintain Balti language instruction in schools despite
                pressures toward English and Urdu-only education.
              </li>
              <li>
                <strong>Linguists and Scholars:</strong> Researchers documenting Balti's phonology, grammar, and
                history.
              </li>
              <li>
                <strong>Digital Activists:</strong> Tech-savvy Baltis creating podcasts, YouTube channels, social media
                content, and digital platforms like OpenBalti.
              </li>
              <li>
                <strong>Cultural Organizers:</strong> Those organizing festivals, events, and community gatherings
                celebrating Balti culture.
              </li>
            </ul>
          </section>

          <section>
            <h2>The Challenges They Face</h2>
            <p>
              These community members face significant obstacles. Young people prefer English and Urdu. Educational
              systems don't adequately support minority languages. Economic pressures mean people migrate to cities
              where Balti is less spoken. Time is precious—teaching Balti is often volunteer work done alongside regular
              jobs.
            </p>
            <p>
              Yet despite these challenges, they persist. Their motivation comes from a deep understanding that language
              is identity, that losing Balti means losing part of what makes them who they are.
            </p>
          </section>

          <section>
            <h2>Stories of Preservation</h2>
            <h3>The Grandmother Teaching Her Grandchildren</h3>
            <p>
              In homes across Baltistan and diaspora communities, grandmothers and grandfathers make deliberate efforts
              to teach the language to younger generations. They tell stories, sing songs, use Balti in daily
              conversation, and insist that children learn. This intergenerational transmission is the most important
              preservation effort.
            </p>
            <h3>The Teacher at the Small School</h3>
            <p>
              In Khaplu or Skardu, a teacher of Balti language instruction carefully plans lessons, creates materials,
              and works to make the language engaging for students surrounded by digital media in English and Urdu.
              Their work keeps Balti alive in educational spaces.
            </p>
            <h3>The Diaspora Organizer</h3>
            <p>
              In cities across Pakistan, the Middle East, and beyond, members of the diaspora community organize Balti
              language classes and cultural events. They create spaces where their children can connect with their
              heritage despite living far from Baltistan.
            </p>
            <h3>The Digital Pioneer</h3>
            <p>
              Younger Baltis are using technology to preserve and promote their language. They create Instagram accounts
              with daily Balti words, run YouTube channels teaching the language, and contribute to projects like
              OpenBalti. They're proving that digital tools can be powerful preservation instruments.
            </p>
          </section>

          <section>
            <h2>How You Can Support These Efforts</h2>
            <ul>
              <li>
                <strong>Learn Balti:</strong> By learning the language, you support those who have dedicated themselves
                to teaching it.
              </li>
              <li>
                <strong>Share Resources:</strong> Spread the word about Balti language learning materials and community
                initiatives.
              </li>
              <li>
                <strong>Engage with Community Content:</strong> Watch Balti videos, listen to podcasts, share community
                content on social media.
              </li>
              <li>
                <strong>Contribute:</strong> If you have skills (translation, design, technology), consider volunteering
                with preservation projects.
              </li>
              <li>
                <strong>Advocate:</strong> Support policies that protect minority language education and cultural
                rights.
              </li>
            </ul>
          </section>

          <section>
            <h2>Conclusion: The Power of Community</h2>
            <p>
              Language preservation is fundamentally a community effort. It's about individuals choosing, again and
              again, to speak their language, to teach it to others, and to create spaces where it thrives. The Balti
              language survives because of these community champions—not in spite of challenges, but because they've
              chosen to meet them head-on.
            </p>
            <p>
              If you're reading this and you're Balti, you are part of this community. Your choices to speak, teach, and
              celebrate the language matter. And if you're not Balti, supporting these efforts honors the universal
              principle that all peoples deserve to maintain their cultural and linguistic heritage.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </main>
  )
}
