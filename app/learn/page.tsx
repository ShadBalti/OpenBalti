import { generateMetadata } from "@/lib/metadata";
import React from "react";
import Link from "next/link";

export const metadata = generateMetadata(
  "Learn Balti Language | OpenBalti",
  "Start your journey to learn the Balti language — from script and grammar to real expressions deeply rooted in the culture of Baltistan.",
)


export default function LearnPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Learn Balti with OpenBalti
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Preserving our language through knowledge and technology.
        </p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto mb-8">
          “Start your journey to learn the Balti language — from script and
          grammar to real expressions deeply rooted in the culture of
          Baltistan.”
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
          Balti is one of the oldest living forms of the Tibetan language, with
          its own unique sounds, grammar, and deep cultural meanings. Through
          OpenBalti, you can explore it step by step — understanding not only
          how it’s spoken but why it matters.
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
            icon: "🔡",
            title: "Romanized Balti",
            desc: "Learn how Balti is written using English letters — making it easier to type and read.",
            link: "/learn/romanized",
          },
          {
            icon: "🧱",
            title: "Grammar & Structure",
            desc: "Explore how Balti sentences are formed: nouns, verbs, tenses, and natural flow.",
            link: "/learn/grammar",
          },
          {
            icon: "💬",
            title: "Phrases & Usage",
            desc: "Common Balti sentences used in greetings, travel, and daily life, with English meanings.",
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
            Learn how Balti sentences are structured, from subjects and verbs to
            particles that add rhythm and meaning.
          </p>
          <Link
            href="/learn/grammar"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Start Lesson →
          </Link>
        </div>
        <div className="flex-1">
          <img
            src="/images/balti-script.png"
            alt="Balti Script"
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>
      </section>

      {/* Cultural Insight Section */}
      <section className="relative text-center py-20 px-6 bg-gray-950">
        <div
          className="absolute inset-0 bg-[url('/images/baltistan-valley.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            Language Reflects Culture
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every Balti word carries a story — of respect, kinship, and
            connection to nature. Through learning, we don’t just preserve
            vocabulary; we keep alive the worldview of our ancestors.
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
              desc: "Explore Balti step by step — from basic script to fluent understanding.",
            },
            {
              icon: "🧩",
              title: "Contribute Examples",
              desc: "Add example sentences or cultural meanings to help others learn.",
            },
            {
              icon: "🪶",
              title: "Share Knowledge",
              desc: "Share what you learn with friends, family, or online to spread the language.",
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
    </main>
  );
}