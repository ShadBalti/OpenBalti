import { generateMetadata } from "@/lib/metadata";
import { getKeywordsFor } from "@/lib/seoKeywords";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

export const metadata = generateMetadata(
  "Learn Balti Language Online | OpenBalti – Balti Script, Grammar & Culture",
  "Master the Balti language with OpenBalti. Learn Balti script, grammar, common phrases, and expressions, and explore the rich culture and heritage of Baltistan. Start speaking Balti today!", { keywords: getKeywordsFor("learn") }
);

/**
 * Renders the main "Learn" page, which serves as a hub for all language learning resources.
 * It provides an introduction to the Balti language and links to detailed sections on script,
 * grammar, phrases, and dialects.
 *
 * @returns {JSX.Element} The rendered "Learn" page.
 */
export default function LearnPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Learn Balti with <span className="text-blue-500">OpenBalti</span>
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Preserving our language through knowledge and technology.
        </p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto mb-8">
          “Start your journey to learn the Balti language — from script and
          grammar to real expressions deeply rooted in the culture of Baltistan.”
        </blockquote>
        <Link
          href="#categories"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition"
        >
          Start Learning →
        </Link>
      </section>

      {/* Quote Block */}
      <section className="text-center py-16">
        <blockquote className="max-w-2xl mx-auto border-l-4 border-blue-400 pl-6 italic text-gray-300 text-lg relative">
          “Every language carries a world within it — to learn Balti is to step
          into the soul of the mountains.”
          <span className="block mt-4 text-blue-400 font-semibold">
            — OpenBalti Community
          </span>
          <div className="absolute inset-0 rounded-xl border border-blue-500/30 blur-sm" />
        </blockquote>
      </section>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          The Path to Learning Balti
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Balti is one of the oldest surviving forms of the Tibetan language,
          with its own unique script, sounds, and grammar. Through OpenBalti, we
          aim to make it easy for learners to explore this heritage — step by
          step, from alphabets to fluent communication. You’ll not only learn
          how it’s spoken but also understand the stories and traditions
          interwoven with each word.
        </p>
      </section>

      {/* Lesson Categories Grid */}
      <section
        id="categories"
        className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {[
          {
            icon: "✍️",
            title: "Balti Script (བལྟི)",
            desc: "Discover the original Tibetan-based Balti script and how each letter connects to sound and meaning.",
            link: "/learn/script",
          },
          {
            icon: "🗣️",
            title: "Balti Dialectal",
            desc: "Explore the regional variations and unique dialects of Balti spoken across Baltistan — each with its own tone and expression.",
            link: "/learn/dialectal",
          },
           
          {
            icon: "🧱",
            title: "Grammar & Structure",
            desc: "Explore how Balti sentences are formed: nouns, verbs, tenses, and the natural rhythm of speech.",
            link: "/learn/grammar",
          },
          {
            icon: "💬",
            title: "Phrases & Usage",
            desc: "Practice common Balti expressions for greetings, travel, and emotions — with English translations.",
            link: "/learn/phrases",
          },
        ].map(({ icon, title, desc, link }) => (
          <Link
            href={link}
            key={title}
            className="bg-gray-800 hover:bg-gray-750 rounded-2xl p-6 shadow-lg transition group"
          >
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
          </Link>
        ))}
      </section>

      {/* Featured Lesson Section */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 py-20">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">
            Featured Lesson — Grammar Basics
          </h2>
          <p className="text-gray-300 mb-6">
            Dive into the structure of Balti sentences — how subjects, verbs,
            and particles create balance and meaning. This lesson lays the
            foundation for understanding how Balti reflects thought and
            identity.
          </p>
          <Link
            href="/learn/grammar"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Start Lesson →
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src="/balti-script.png"
            alt="Balti Script — Vowels & Consonants | OpenBalti"
            width={1200}
            height={700}
            priority
            className="rounded-2xl shadow-lg object-contain"
          />
        </div>
      </section>

      {/* Cultural Insight Section */}
      <section className="relative text-center py-20 px-6 bg-gray-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/baltistan-valley.jpg')] bg-cover bg-center opacity-25"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Language Reflects Culture
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every Balti word carries a story — of respect, kinship, and
            connection to the mountains and the divine. Through learning, we
            don’t just preserve vocabulary; we sustain a living culture and
            worldview passed down through generations.
          </p>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-10">
          How You Can Learn & Contribute
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "📖",
              title: "Follow Lessons",
              desc: "Explore Balti step by step — from script to fluent expression, all in one place.",
            },
            {
              icon: "🧩",
              title: "Contribute Examples",
              desc: "Add real-world examples or cultural meanings to help enrich the learning experience.",
            },
            {
              icon: "🪶",
              title: "Share Knowledge",
              desc: "Share what you learn with others — your words might inspire someone to reconnect with their roots.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:bg-gray-750 transition"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
       
       {/* FAQ section */}
        <div className="mt-20">
          <FAQSection />
        </div>
  </main>
  );
}