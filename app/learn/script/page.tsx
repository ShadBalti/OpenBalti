import { generateMetadata } from "@/lib/metadata"
import React from "react";
import Link from "next/link";

export const metadata = generateMetadata(
  "Balti Script (བལྟི) | Learn Balti | OpenBalti",
    "Discover the original Tibetan-based Balti script — its letters, sounds, and deep connection to Baltistan’s cultural identity.",
);

export default function ScriptPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Balti Script (བལྟི)
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover the beauty of Balti script — a Tibetan-based writing system
          that connects language with history, identity, and sound.
        </p>
      </section>

      {/* Origin & Background */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Origins & Background</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          The Balti script, known as <span className="font-semibold">“Balti Yig” (བལྟི་ཡིག)</span>,
          originates from the Tibetan family of scripts. Historically, it was
          widely used in Baltistan before the adoption of the Persian-based
          script. Reviving this script helps reconnect the community to its
          linguistic roots and cultural expressions.
        </p>
      </section>

      {/* Script Table / Characters */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Balti Characters Overview
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 text-center">
          {[
            { char: "ཀ", name: "Ka" },
            { char: "ཁ", name: "Kha" },
            { char: "ག", name: "Ga" },
            { char: "ང", name: "Nga" },
            { char: "ཅ", name: "Ca" },
            { char: "ཆ", name: "Cha" },
            { char: "ཇ", name: "Ja" },
            { char: "ཉ", name: "Nya" },
            { char: "ཏ", name: "Ta" },
            { char: "ད", name: "Da" },
            { char: "ན", name: "Na" },
            { char: "པ", name: "Pa" },
            { char: "ཕ", name: "Pha" },
            { char: "བ", name: "Ba" },
            { char: "མ", name: "Ma" },
          ].map(({ char, name }) => (
            <div
              key={char}
              className="bg-gray-800 hover:bg-gray-750 rounded-xl py-6 px-4 transition shadow-lg"
            >
              <div className="text-3xl mb-2">{char}</div>
              <div className="text-sm text-gray-300">{name}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-6 text-sm">
          These are just a few core consonants. The Balti script includes
          additional characters, vowel marks, and tonal indicators.
        </p>
      </section>

      {/* Importance Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Why Learning the Script Matters
        </h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Learning the Balti script connects you directly to centuries of
          wisdom, poetry, and culture preserved in its written form. It’s more
          than a writing system — it’s a window into the worldview of the
          people of Baltistan.
        </p>
      </section>

      {/* Learn Next Section */}
      <section className="bg-gray-950 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Continue Your Learning</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/learn/romanized"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition"
          >
            → Romanized Balti
          </Link>
          <Link
            href="/learn/grammar"
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition"
          >
            Grammar Basics →
          </Link>
        </div>
      </section>
    </main>
  );
}