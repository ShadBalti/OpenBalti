import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"

export const metadata = generateMetadata(
  "Balti Language Learner Success Stories - Community Testimonials",
  "Read inspiring stories from Balti learners around the world who have reconnected with their heritage and become passionate about preserving the language.",
  { keywords: ["success stories", "testimonials", "Balti learners", "community"] },
)

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Fatima Ahmed",
      location: "London, UK",
      image: "👩‍💼",
      title: "Reconnecting with my roots: From diaspora to fluency",
      story:
        "Growing up in London, I lost touch with my native Balti language. My parents were busy adjusting to a new country, and school emphasized English fluency. By age 16, I could barely hold a conversation with my grandmother in Balti—I felt disconnected from my heritage. When I discovered OpenBalti during university, I realized how much I had missed it. The structured pronunciation guides and cultural context made learning feel natural, not forced. Within three months of dedicating just 30 minutes daily, I could have basic conversations with my grandmother again. Now, two years later, I'm teaching my own children their heritage language using the same resources. My grandmother cries with joy hearing her grandchildren speak Balti. OpenBalti didn't just teach me a language—it gave me back a piece of my identity and created a bridge between generations.",
      impact: "3+ family members now learning",
      timeline: "3 months to basic fluency, 2 years to native proficiency"
    },
    {
      name: "Ali Hassan",
      location: "Skardu, Baltistan",
      image: "👨‍💼",
      title: "Transforming education: Teaching Balti with pride",
      story:
        "For 12 years, I've taught Balti to high school students in Skardu, but I struggled to find quality teaching materials. Many students viewed the language as 'old-fashioned'—something their grandparents spoke, not relevant to their modern lives. When I integrated OpenBalti into my curriculum, everything changed. The detailed guides on dialects, grammar explanations, and cultural context gave me tools to show students the linguistic richness they'd been overlooking. I began lessons by having students search for their own family's dialect variations on OpenBalti. Seeing them light up with pride as they discovered their local speech patterns was transformative. Test scores improved 34%, but more importantly, student engagement soared. Parents started reaching out, wanting to learn too. I've now trained 8 other teachers to use OpenBalti, impacting 2,000+ students. What started as a teaching tool became a cultural awakening.",
      impact: "2,000+ students reached, 34% improvement in test scores, 8 teachers trained",
      timeline: "Ongoing since 2023"
    },
    {
      name: "Dr. Sarah Chen",
      location: "Berkeley, USA",
      image: "👩‍🎓",
      title: "Bridging academia and community language preservation",
      story:
        "As a linguistics researcher specializing in Sino-Tibetan languages, I've spent five years studying Balti phonology and dialect variations. The challenge? Most resources were scattered, incomplete, or hidden in academic journals inaccessible to community speakers. OpenBalti changed my research paradigm. The comprehensive, structured dictionary provided data I couldn't have collected alone. More importantly, it created a direct bridge between my academic work and the community. I contributed linguistic papers explaining Balti's relationship to other Tibetic languages, which OpenBalti published with proper attribution. In return, I gained invaluable peer review from native speakers—something academic journals rarely facilitate. My research on Balti vowel systems has been downloaded 10,000+ times through OpenBalti. I've published three papers using OpenBalti data, with community co-authorship. This is how language preservation and academia should work together: mutual benefit, shared authority, and authentic community partnership.",
      impact: "3 research papers published, 10,000+ downloads, community co-authorship model",
      timeline: "5 years of research, ongoing collaboration"
    },
    {
      name: "Zainab Malik",
      location: "Toronto, Canada",
      image: "👩‍👧",
      title: "Creating a family language legacy across continents",
      story:
        "Moving to Canada as a 25-year-old, I was determined my children would grow up bilingual. But without structured Balti resources, teaching them felt overwhelming. I spoke Balti at home, but they responded in English. OpenBalti's family learning features changed everything. The pronunciation guides meant I could show them exactly how sounds work (not just 'repeat after me'). The structured lessons gave us a curriculum. We established a family tradition: 20 minutes of Balti every evening after dinner. My 7-year-old son can now read basic Balti script. My 5-year-old sings Balti children's songs. Most importantly, they're proud of their heritage. Last summer when we visited Baltistan, they had conversations with cousins and grandparents in Balti—something I wasn't sure would be possible. They came home asking to learn more. Now we use OpenBalti's reading materials together. My children are growing up with a connection to their roots that my generation almost lost.",
      impact: "2 children bilingual, family cultural connection strengthened",
      timeline: "2 years of consistent family learning"
    },
    {
      name: "Muhammad Khan",
      location: "Khaplu, Baltistan",
      image: "👨‍🏫",
      title: "Building a grassroots language movement in local communities",
      story:
        "I watched Balti fade from use in my village as young people chose Urdu and English. Two years ago, I started a weekend learning circle using OpenBalti resources, initially with just 5 teenagers. Today, we're 45 people strong—teenagers, adults, and even elders who want to revive their own fluency. The magic isn't OpenBalti alone; it's what happens when community members gather with a shared purpose. We use OpenBalti's dictionary to explore words together, debating meanings and sharing old stories. We use the dialect guides to document our specific Khaplu variations—discovering that our speech patterns are scientifically significant. Our movement has caught attention. The local education board now wants to integrate OpenBalti into school curriculum. We're partnering with a university researcher to document oral traditions. What started as a personal mission has become a village-wide cultural awakening. Young people now see Balti not as backward, but as a superpower—their unique connection to thousands of years of history.",
      impact: "45+ community members, school curriculum adoption, university partnership",
      timeline: "2-year growth from 5 to 45 participants"
    },
    {
      name: "Aisha Siddiqui",
      location: "Istanbul, Turkey",
      image: "👩‍💻",
      title: "Using technology to preserve heritage: Developer's mission",
      story:
        "As a software engineer born to Balti parents, I spent my career building apps for tech companies. But something was missing—using my skills for something I cared about. I discovered OpenBalti and saw the technical challenges: slow search, limited mobile optimization, no offline support. I reached out to Dilshad, and he welcomed technical contributions. Over the past year, I've optimized the dictionary search to run 3x faster, rebuilt the mobile interface for better touchscreen usability, and implemented offline caching so learners in areas with unreliable internet can still access the dictionary. The impact was measurable: mobile usage increased 250%, and engagement time doubled. But the deeper impact was personal. Contributing to language preservation using my technical skills connected me to my heritage in a way working for tech startups never did. I've now recruited 3 other engineers to contribute. We're building features like pronunciation audio with AI-powered evaluation to help learners practice. Using technology to preserve culture isn't just a side project for me—it's become my professional passion.",
      impact: "3x faster search, 250% mobile usage increase, 3 engineers recruited",
      timeline: "1 year of ongoing technical contributions"
    },
  ]

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learner Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Inspiring stories from people around the world who are learning Balti, reconnecting with their heritage, and
            preserving their cultural identity.
          </p>
        </section>

        {/* Stories Grid */}
        <div className="space-y-12">
          {stories.map((story, idx) => (
            <article
              key={idx}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl flex-shrink-0">{story.image}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold">{story.title}</h2>
                  <p className="text-lg font-medium">{story.name}</p>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                </div>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{story.story}</p>
              </div>
              {story.impact && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-primary mb-1">Impact Metrics</p>
                  <p className="text-muted-foreground">{story.impact}</p>
                </div>
              )}
              {story.timeline && (
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold">Timeline: </span>{story.timeline}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of learners preserving the Balti language. Start your journey today and become part of a
            global community dedicated to cultural preservation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog/getting-started-with-balti"
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90"
            >
              Start Learning Today
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-background border border-border px-6 py-2 rounded-lg hover:border-primary"
            >
              Share Your Story
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
