import { generateMetadata } from "@/lib/metadata";
import { getKeywordsFor } from "@/lib/seoKeywords";
import React from "react";
import Link from "next/link";
import LearnContinue from "@/components/LearnContinue";

export const metadata = generateMetadata( 
"Balti Grammar & Structure | Learn Balti | OpenBalti",
    "Learn how Balti sentences are structured — from nouns and verbs to natural flow, tones, and expressions deeply tied to culture.",
{ keywords: getKeywordsFor("learn/grammar") }
);

/**
 * Renders the page dedicated to explaining Balti grammar and sentence structure.
 * It covers the basic Subject-Object-Verb (SOV) order, main parts of speech,
 * and provides example sentences to illustrate the concepts.
 *
 * @returns {JSX.Element} The rendered grammar information page.
 */
export default function GrammarPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Grammar & Structure
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Understand how Balti sentences are built — learn how words connect,
          how meaning changes with context, and how expression flows naturally.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">The Foundation</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Balti grammar follows a <span className="font-semibold">Subject–Object–Verb (SOV)</span> order,
          similar to Tibetan and Japanese. Understanding this pattern helps
          learners build natural sentences and express complete thoughts
          clearly.
        </p>
      </section>

      {/* Basic Sentence Structure */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          🧩 Basic Sentence Structure
        </h2>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="text-center mb-6">
            <p className="text-xl text-blue-400 font-semibold">
              Subject + Object + Verb
            </p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-gray-200 text-lg">
              <span className="font-semibold">Nga</span> (I){" "}
              <span className="font-semibold">chha</span> (tea){" "}
              <span className="font-semibold">za-yin</span> (am drinking)
            </p>
            <p className="text-gray-400 italic">→ I am drinking tea.</p>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-4">
          Note how the verb always comes at the end — a key feature of Balti
          grammar.
        </p>
      </section>

      {/* Parts of Speech */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          📚 Main Parts of Speech
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🧍‍♂️",
              title: "Nouns",
              desc: "Names of people, places, or things. Example: 'mi' (person), 'ri' (mountain).",
            },
            {
              icon: "⚡",
              title: "Verbs",
              desc: "Describe actions or states. Example: 'za' (eat), 'gro' (go).",
            },
            {
              icon: "🎨",
              title: "Adjectives",
              desc: "Describe qualities. Example: 'chenmo' (big), 'ngarmo' (beautiful).",
            },
            {
              icon: "🔗",
              title: "Particles",
              desc: "Attach to words to add meaning or tone. Example: '-yin', '-song' indicate tense or emphasis.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-gray-800 hover:bg-gray-750 rounded-2xl p-6 shadow-lg text-center transition"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Example Sentences */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          💬 Example Sentences
        </h2>
        <div className="space-y-6">
          {[
            {
              balti: "ང་འཇགས་པ་ཡིན། (Nga jagpa yin)",
              eng: "I am happy.",
            },
            {
              balti: "ཁྱེད་རང་བོད་སྐད་ཡིན་པས། (Khyed-rang bod skad yin-pas?)",
              eng: "Do you speak Balti?",
            },
            {
              balti: "མི་འདི་རི་ལ་འགྲོ། (Mi di ri la gro)",
              eng: "That person goes to the mountain.",
            },
          ].map(({ balti, eng }) => (
            <div
              key={balti}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:bg-gray-750 transition"
            >
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-400 italic">{eng}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Note */}
      <section className="relative text-center py-20 px-6 bg-gray-950">
        <div
          className="absolute inset-0 bg-[url('/images/leh-monastery.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Language & Respect</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            In Balti, how you speak often reflects respect and relationship.
            Politeness levels and honorific forms show humility, age difference,
            and affection — echoing Baltistan’s cultural values.
          </p>
        </div>
      </section>

      <LearnContinue
        title="Keep Exploring"
        links={[
          { label: "Common Phrases", href: "/learn/phrases" },
          { label: "Balti Script", href: "/learn/script", variant: "secondary" },
        ]}
      />
    </main>
  );
}