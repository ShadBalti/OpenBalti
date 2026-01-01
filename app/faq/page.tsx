import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(
  "Frequently Asked Questions - OpenBalti",
  "Get answers to common questions about learning Balti, using the dictionary, contributing to our community, and preserving the language.",
  { keywords: ["FAQ", "frequently asked questions", "Balti learning", "help"] },
)

export default function FAQPage() {
  const faqs = [
    {
      category: "Learning Balti",
      questions: [
        {
          q: "Is Balti difficult to learn?",
          a: "Balti is moderately difficult for English speakers. The grammar is logical and the pronunciation is relatively straightforward, but the different word order and grammatical concepts take time. With consistent practice, you can make rapid progress.",
        },
        {
          q: "What's the best way to start learning Balti?",
          a: "Start with our Getting Started Guide, learn basic pronunciation and greetings, then gradually expand your vocabulary using the dictionary. Practice with native speakers when possible, listen to Balti music, and immerse yourself in the culture.",
        },
        {
          q: "How much time should I dedicate to learning daily?",
          a: "15-30 minutes of focused, daily practice is ideal for beginners. As you progress, you can increase to 45-60 minutes. Consistency matters more than duration.",
        },
      ],
    },
    {
      category: "Using the Dictionary",
      questions: [
        {
          q: "How many words are in the OpenBalti Dictionary?",
          a: "We currently have over 500 curated entries with English translations, pronunciation guides, and cultural context. We're constantly adding more.",
        },
        {
          q: "Can I search by pronunciation?",
          a: "Our main dictionary allows text search. We're developing advanced search features including pronunciation search. Check back soon!",
        },
        {
          q: "Why do some words have multiple spellings?",
          a: "Balti is transitioning between writing systems (historical Yige, Perso-Arabic, and Latin transliteration). We include multiple spellings to reflect real-world usage and historical variants.",
        },
      ],
    },
    {
      category: "Contributing",
      questions: [
        {
          q: "Can I add new words to the dictionary?",
          a: "Yes! We welcome community contributions. Visit our Contribute page to submit new words, corrections, and examples. All submissions are reviewed by native speakers.",
        },
        {
          q: "What if I notice an error?",
          a: "Please let us know! You can report errors through the feedback feature on any dictionary entry, or contact us directly through our Contact page.",
        },
        {
          q: "Can non-native speakers contribute?",
          a: "Absolutely. Learners, linguists, and language enthusiasts can all contribute. Native speakers review contributions to ensure accuracy.",
        },
      ],
    },
    {
      category: "Cultural & Linguistic",
      questions: [
        {
          q: "How is Balti different from other Tibetan dialects?",
          a: "Balti is one of the oldest Tibetic languages. It has unique phonological features, vocabulary, and grammatical structures influenced by its geographic isolation and cultural interactions with Central Asia. Our Dialects section explores these differences in detail.",
        },
        {
          q: "What is the historical significance of Balti?",
          a: "Balti preserves many archaic Tibetan features and serves as a linguistic window into historical Tibet and Central Asia. It's invaluable for linguistic research and cultural heritage preservation.",
        },
        {
          q: "Why is Balti endangered?",
          a: "Like many minority languages, Balti faces pressure from dominant languages like Urdu and English, especially among younger generations. Education and media primarily use these languages, leading to reduced daily use of Balti.",
        },
      ],
    },
    {
      category: "Community & Support",
      questions: [
        {
          q: "How can I connect with other learners?",
          a: "Visit our Community page, check out our Contributors section, and engage with our online platforms. We're building a supportive network of learners and native speakers.",
        },
        {
          q: "Are there conversation partners available?",
          a: "Our community section connects learners with native speakers. We're also developing structured conversation groups for different proficiency levels.",
        },
        {
          q: "What if I have a question not answered here?",
          a: "Please contact us through our Contact page. We'd love to hear from you and answer any questions you have about Balti language learning.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about learning Balti and using OpenBalti.
          </p>
        </section>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category) => (
            <section key={category.category}>
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, idx) => (
                  <details
                    key={idx}
                    className="bg-card border border-border rounded-lg p-6 group cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <summary className="font-semibold text-lg flex items-center justify-between group-open:text-primary">
                      <span>{faq.q}</span>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're here to help! Reach out to our community or contact us directly.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  )
}
