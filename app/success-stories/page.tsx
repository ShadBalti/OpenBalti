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
      title: "Reconnecting with my roots",
      story:
        "Growing up in London, I lost touch with my native Balti language. When I discovered OpenBalti, I realized how much I missed it. Within three months of consistent learning, I could have basic conversations with my grandmother again. Now I'm teaching my own children their heritage language. OpenBalti gave me back a piece of my identity.",
    },
    {
      name: "Ali Hassan",
      location: "Skardu, Baltistan",
      image: "👨‍💼",
      title: "Preserving our cultural heritage",
      story:
        "As a high school teacher in Skardu, I use OpenBalti to help my students understand the richness of our language beyond casual usage. The detailed guides on dialects and grammar have transformed how I teach. My students are more engaged and proud of their linguistic heritage. This is exactly what our community needed.",
    },
    {
      name: "Dr. Sarah Chen",
      location: "Berkeley, USA",
      image: "👩‍🎓",
      title: "Linguistic research made accessible",
      story:
        "As a linguistics researcher studying Tibetic languages, OpenBalti has been invaluable. The comprehensive dictionary and structured information about dialects support my research. I've contributed my own linguistic findings back to the community. This is how language preservation and academia should work together.",
    },
    {
      name: "Zainab Malik",
      location: "Toronto, Canada",
      image: "👩‍👧",
      title: "Teaching my children their mother tongue",
      story:
        "I wanted my children to speak Balti fluently, but I didn't have structured resources. OpenBalti's lesson structure and pronunciation guides have been perfect. We do 20 minutes of learning together every evening. My kids are now speaking basic Balti with their cousins back home. It's beautiful seeing them take pride in our language.",
    },
    {
      name: "Muhammad Khan",
      location: "Khaplu, Baltistan",
      image: "👨‍🏫",
      title: "Building community engagement",
      story:
        "I started a local learning group using OpenBalti resources. Every weekend, young people gather to learn and discuss our language and culture. The dictionary and guides make teaching easier, but the community aspect is what keeps everyone motivated. We're now 30 people strong, and the movement is growing.",
    },
    {
      name: "Aisha Siddiqui",
      location: "Istanbul, Turkey",
      image: "👩‍💻",
      title: "Contributing as a developer",
      story:
        "I'm a software engineer who wanted to give back to my community. Contributing to OpenBalti's development has been fulfilling. I've helped optimize the dictionary search and am working on new features. Using tech to preserve language is what drives me. Join us—we need more voices in this mission.",
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{story.image}</div>
                <div>
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                </div>
              </div>
              <h4 className="font-semibold text-primary mb-3">{story.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{story.story}</p>
            </div>
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
