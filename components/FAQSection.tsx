"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

const faqData: FAQItem[] = [
  {
    category: "Getting Started",
    question: "What is OpenBalti and who is it for?",
    answer:
      "OpenBalti is a free, open-source digital dictionary and learning platform dedicated to preserving and promoting the Balti language. It's designed for native Balti speakers wanting to document their language, learners interested in Balti culture, linguists researching Tibetic languages, and the global Balti diaspora seeking to reconnect with their heritage.",
  },
  {
    category: "Getting Started",
    question: "How long does it take to learn the Balti language?",
    answer:
      "Learning speed varies from person to person. With consistent daily practice using OpenBalti's resources, you can start forming basic Balti phrases within a few weeks. Becoming comfortable with grammar, pronunciation, and script may take a few months of steady progress. Our structured lessons on script, grammar, and phrases are designed to guide you step by step.",
  },
  {
    category: "Language & Culture",
    question: "Is Balti similar to Tibetan?",
    answer:
      "Yes — Balti originates from Classical Tibetan and is classified as a Tibetic language. It has evolved over centuries with influences from Persian, Urdu, and local Himalayan languages. While it shares Tibetan roots and uses a Tibetan-based script (Yige), it's now a distinct language with its own pronunciation, vocabulary, and grammar that beautifully reflects the unique culture of Baltistan.",
  },
  {
    category: "Language & Culture",
    question: "What is the Balti script?",
    answer:
      "The Balti script (བལྟི), also known as Yige or Bhoti script, is based on the Classical Tibetan writing system. It dates back to the 8th century and includes unique letters and pronunciation rules that connect deeply with Balti identity. OpenBalti teaches both the traditional Yige script and Romanized Balti, making the language accessible to all learners.",
  },
  {
    category: "Language & Culture",
    question: "Does Balti have regional dialects?",
    answer:
      "Yes, there are four main dialectal variations: Eastern (Chorbat, Nubra Valley), Central (Khaplu Valley), Western (Skardu, Shigar, Rondu), and Southern (Upper Kharmang, Kargil). These dialects differ mainly in pronunciation and some vocabulary, but all Balti speakers can understand each other easily. The Skardu dialect is often considered the prestige dialect.",
  },
  {
    category: "Language & Culture",
    question: "Is Balti an endangered language?",
    answer:
      "Balti faces challenges from urbanization, migration, and the dominance of languages like Urdu and English. However, it remains actively spoken by hundreds of thousands of people in Baltistan and among diaspora communities. Projects like OpenBalti are working to document and revitalize the language, ensuring it thrives for future generations.",
  },
  {
    category: "Learning Resources",
    question: "Do I need to know Tibetan to learn Balti?",
    answer:
      "No — OpenBalti is designed for complete beginners with no prior knowledge of Tibetan or any related language. All lessons are fully in English, and we teach everything from pronunciation to grammar step by step. While knowing Tibetan might help with script recognition, it's not required.",
  },
  {
    category: "Learning Resources",
    question: "Can I learn Balti using English letters (Romanization)?",
    answer:
      "Yes! OpenBalti uses Romanized Balti to make the language accessible to everyone. You'll learn both writing systems — Romanized transcription and the traditional Balti Yige script — side by side, allowing you to read and write Balti regardless of your background.",
  },
  {
    category: "Learning Resources",
    question: "Will there be audio lessons or pronunciation guides?",
    answer:
      "Yes! We're actively developing an audio lessons feature with recordings from native Balti speakers. Current lessons include phonetic spellings and pronunciation guides. In the meantime, you can also find traditional Balti songs and storytelling videos on YouTube to hear native pronunciation.",
  },
  {
    category: "Learning Resources",
    question: "Can children learn Balti through OpenBalti?",
    answer:
      "Definitely! Our lessons are designed to be simple, visual, and engaging, making them ideal for children and families who want to reconnect with their Balti roots. Parents can use OpenBalti alongside their children to learn together and keep the language alive in their households.",
  },
  {
    category: "Contributing",
    question: "Can I contribute to OpenBalti?",
    answer:
      "OpenBalti is a community-driven project that welcomes contributions from everyone. You can add new words to the dictionary, suggest corrections, contribute example sentences, share cultural context, or help with technical development on GitHub. Every contribution helps preserve and share the Balti language with the world.",
  },
  {
    category: "Contributing",
    question: "How are dictionary entries verified?",
    answer:
      "OpenBalti uses a community review system where contributions are reviewed and validated by native speakers and language experts. Users can also rate entries as helpful, trusted, or needing review. This collaborative approach ensures the accuracy and quality of our dictionary while allowing the community to participate in language preservation.",
  },
  {
    category: "Technical",
    question: "Can I type Balti on my phone or computer?",
    answer:
      "Yes! The Balti Yige script is supported in Unicode. You can use Tibetan-based fonts to type in Balti script. We're also developing a dedicated Balti Keyboard feature for OpenBalti. For now, many users type in Romanized Balti which works on any standard keyboard.",
  },
  {
    category: "Technical",
    question: "Is OpenBalti free to use?",
    answer:
      "Yes, OpenBalti is completely free and open source under the MIT License. You can use all features, access all dictionary entries, and learn from all our resources without any cost. The project is sustained by community contributions and the dedication of our volunteers.",
  },
]

/**
 * Renders a comprehensive FAQ section with categorized questions and answers.
 * Includes structured data (JSON-LD) for SEO to help search engines display rich snippets.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Group FAQs by category
  const categories = Array.from(new Set(faqData.map((faq) => faq.category)))

  // JSON-LD structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="max-w-4xl mx-auto py-16 md:py-24 px-6 scroll-mt-20" aria-labelledby="faq-heading">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
          <HelpCircle className="w-7 h-7 text-primary" />
        </div>
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Everything you need to know about learning the Balti language, using OpenBalti, and contributing to language
          preservation.
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {categories.map((category) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider px-1">{category}</h3>
            <div className="space-y-3">
              {faqData
                .filter((faq) => faq.category === category)
                .map((faq, index) => {
                  const globalIndex = faqData.findIndex((f) => f.question === faq.question)
                  const isOpen = openIndex === globalIndex

                  return (
                    <div
                      key={globalIndex}
                      className={cn(
                        "bg-card border rounded-xl transition-all duration-300",
                        isOpen
                          ? "border-primary/50 shadow-lg shadow-primary/5"
                          : "border-border hover:border-primary/30",
                      )}
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full text-left p-5 flex justify-between items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${globalIndex}`}
                      >
                        <span className="text-base font-medium leading-relaxed pr-2">{faq.question}</span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                            isOpen && "rotate-180 text-primary",
                          )}
                        />
                      </button>
                      <div
                        id={`faq-answer-${globalIndex}`}
                        className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96" : "max-h-0")}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="border-t border-border pt-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center bg-muted/30 border border-border rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
        <p className="text-muted-foreground mb-4">
          Can't find what you're looking for? We're here to help with any questions about Balti language learning or the
          OpenBalti platform.
        </p>
        <a
          href="mailto:shadbalti2@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
