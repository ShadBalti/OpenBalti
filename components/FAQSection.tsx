"use client";

import { useState, useEffect } from "react";
import Head from "next/head";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How long does it take to learn the Balti language?",
    answer:
      "Learning speed varies from person to person. With consistent daily practice, you can start forming basic Balti phrases within a few weeks. Becoming comfortable with grammar, pronunciation, and script may take a few months of steady progress.",
  },
  {
    question: "Is Balti similar to Tibetan?",
    answer:
      "Yes — Balti originates from Classical Tibetan but has evolved with influences from Persian, Urdu, and local Himalayan languages. While it shares Tibetan roots, it’s now a distinct language that beautifully reflects the culture of Baltistan.",
  },
  {
    question: "Can I contribute to OpenBalti lessons?",
    answer:
      "Absolutely! OpenBalti is a community-driven project. You can contribute example sentences, lesson ideas, or cultural notes. Every contribution helps preserve and share the Balti language globally.",
  },
  {
    question: "Where can I hear native Balti speakers?",
    answer:
      "We’re preparing an Audio Lessons feature with recordings from native Balti speakers. For now, you can listen to traditional Balti songs and regional storytelling videos on YouTube and local culture platforms.",
  },
  {
    question: "Do I need to know Tibetan to learn Balti?",
    answer:
      "No — OpenBalti is designed for beginners. Lessons are fully in English, and we teach everything from pronunciation to grammar step by step.",
  },
  {
    question: "What is the Balti script?",
    answer:
      "The Balti script (བལྟི) is based on Tibetan writing. It includes unique letters and pronunciation rules that connect deeply with Balti identity. You can start learning it in our Script Lessons section.",
  },
  {
    question: "Does Balti have regional differences?",
    answer:
      "Yes, there are slight dialectal variations between regions in Baltistan, mainly in pronunciation. However, all Balti speakers can understand each other easily.",
  },
  {
    question: "Can I learn Balti using English letters?",
    answer:
      "Yes! We use Romanized Balti to make the language accessible for everyone. You’ll learn both writing systems — Romanized and Balti script — side by side.",
  },
  {
    question: "Is Balti still spoken today?",
    answer:
      "Yes, Balti is actively spoken in Baltistan and among diaspora communities. Through projects like OpenBalti, we’re working to preserve and promote it for future generations.",
  },
  {
    question: "Can children learn Balti through OpenBalti?",
    answer:
      "Definitely! The lessons are simple and visually engaging, making them ideal for children and families who want to reconnect with their roots.",
  },
  {
    question: "Will there be pronunciation guides or audio lessons?",
    answer:
      "Yes! Upcoming updates will include pronunciation recordings from native speakers and phonetic spellings to help learners practice authentic sounds.",
  },
  {
    question: "What makes Balti language special?",
    answer:
      "Balti reflects the beauty, humility, and wisdom of mountain life. Each word often carries emotional and spiritual depth, connecting speakers to their ancestors and nature.",
  },
  {
    question: "Is Balti a written or only spoken language?",
    answer:
      "Balti is both written and spoken. Traditionally, it used a Tibetan-derived script, and in modern contexts, it’s often written using Roman letters for easier typing.",
  },
  {
    question: "Can I type Balti on my phone or computer?",
    answer:
      "Yes! Balti script is supported in Unicode. You can use Tibetan-based fonts or our upcoming Balti Keyboard feature on OpenBalti to write and share Balti online.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  // ✅ Structured data for SEO (JSON-LD)
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
  };

  return (
    <section
      id="faq"
      className="max-w-3xl mx-auto py-24 px-6 text-gray-100 scroll-mt-20"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <h2 className="text-4xl font-bold text-center mb-12 text-amber-400">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        Everything you need to know about learning the Balti language, joining
        lessons, and exploring the culture through OpenBalti.
      </p>

      <div className="space-y-5">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/60 border border-gray-700 hover:border-amber-400/50 rounded-2xl shadow-md transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-xl"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-medium text-gray-100 group-hover:text-amber-400 transition">
                {faq.question}
              </span>
              <span className="text-amber-400 text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-${index}`}
                className="px-6 pb-6 pt-6 text-gray-300 text-base leading-relaxed border-t border-gray-700/60 animate-fadeIn"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}