import { generateMetadata } from "@/lib/metadata";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = generateMetadata(
  "Learn Balti Language | OpenBalti",
  "Start your journey to learn the Balti language — from script and grammar to real expressions deeply rooted in the culture of Baltistan."
);

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
            icon: "🔡",
            title: "Romanized Balti",
            desc: "Learn how Balti is written using English letters — making it easier to type and read.",
            link: "/learn/romanized",
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
       
      {/* FAQ Section */}
<section className="max-w-5xl mx-auto px-6 py-20 border-t border-gray-800">
  <h2 className="text-3xl font-semibold text-center mb-10">
    Frequently Asked Questions
  </h2>

  <div className="space-y-10 text-gray-300">

    {/* Q1 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        What is the Balti language?
      </h3>
      <p className="leading-relaxed">
        Balti is an ancient Tibetic language spoken mainly in Baltistan, located in the Karakoram range
        of northern Pakistan. It evolved from Classical Tibetan and preserves many of its original
        linguistic and cultural traits, making it one of the most authentic Tibetan dialects still in use today.
      </p>
    </div>

    {/* Q2 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        Why is learning Balti important?
      </h3>
      <p className="leading-relaxed">
        Learning Balti helps preserve a centuries-old cultural identity. By studying and speaking it,
        you’re helping to protect the history, values, and worldview of the Balti people — ensuring the language
        continues to thrive in the digital age.
      </p>
    </div>

    {/* Q3 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        How can I start learning Balti?
      </h3>
      <p className="leading-relaxed">
        Begin with the <Link href="/learn/script" className="text-blue-400 hover:underline">Balti Script</Link> to
        learn how to read and write letters, then explore <Link href="/learn/grammar" className="text-blue-400 hover:underline">Grammar Basics</Link> 
        to understand sentence structures. Finally, use <Link href="/learn/phrases" className="text-blue-400 hover:underline">Common Phrases</Link> 
        for practical, everyday conversations.
      </p>
    </div>

    {/* Q4 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        Is Balti similar to Tibetan or Ladakhi?
      </h3>
      <p className="leading-relaxed">
        Yes, Balti, Tibetan, and Ladakhi share the same linguistic roots. However, Balti has developed
        unique sounds, vocabulary, and expressions shaped by the culture and environment of Baltistan.
        It’s often considered the most conservative form of Classical Tibetan still spoken.
      </p>
    </div>

    {/* Q5 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        Can I learn Balti online for free?
      </h3>
      <p className="leading-relaxed">
        Yes! OpenBalti is a free, community-driven platform that provides structured lessons, examples,
        and cultural insights to help you learn at your own pace. There’s no cost — only curiosity and dedication.
      </p>
    </div>

    {/* Q6 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        Does Balti have its own script?
      </h3>
      <p className="leading-relaxed">
        Balti uses a Tibetan-based script known as <span className="italic">Balti Yig</span>. 
        It’s written vertically or horizontally and closely resembles the Uchen style of Tibetan writing. 
        You can learn it in the <Link href="/learn/script" className="text-blue-400 hover:underline">Script Section</Link>.
      </p>
    </div>

    {/* Q7 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        Is Balti difficult to learn?
      </h3>
      <p className="leading-relaxed">
        Not at all! While the script might seem complex at first, Balti grammar is logical and consistent. 
        With regular practice, you’ll quickly pick up pronunciation, writing, and everyday phrases.
      </p>
    </div>

    {/* Q8 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        Who can learn Balti?
      </h3>
      <p className="leading-relaxed">
        Anyone! Whether you’re a native speaker wanting to reconnect with your roots or a language enthusiast 
        fascinated by Himalayan cultures, OpenBalti is designed to make Balti learning accessible to everyone.
      </p>
    </div>

    {/* Q9 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        How long does it take to learn Balti?
      </h3>
      <p className="leading-relaxed">
        It depends on your pace — with consistent practice, learners can start forming sentences in a few weeks. 
        The more you listen, read, and speak, the more natural it becomes. OpenBalti offers resources to support
        both beginners and intermediate learners.
      </p>
    </div>

    {/* Q10 */}
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        How can I contribute to OpenBalti?
      </h3>
      <p className="leading-relaxed">
        You can help by adding example sentences, suggesting new lessons, or improving translations.
        Visit the <Link href="/about" className="text-blue-400 hover:underline">About</Link> page to
        learn more about contributing to the Balti language revival movement.
      </p>
    </div>
  </div>
</section>
    </main>
  );
}