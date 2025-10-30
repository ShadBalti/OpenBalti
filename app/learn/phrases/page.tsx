import { generateMetadata } from "@/lib/metadata";
import React from "react";
import Link from "next/link";
import LearnContinue from "@/components/LearnContinue";

export const metadata = generateMetadata(
    "Common Balti Phrases | Learn Balti | OpenBalti",
    "Explore useful Balti phrases for everyday conversations — greetings, travel, and emotions with English translations.",
);

export default function PhrasesPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Common Balti Phrases
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Learn how to speak like a native!  
          These common Balti expressions help you greet, travel, and connect with others in everyday life.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Phrases Matter</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Phrases are the bridge between words and conversation.  
          By learning expressions used in daily life, you’ll quickly feel more confident speaking Balti in real situations.
        </p>
      </section>

      {/* Category: Greetings */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          👋 Greetings & Introductions
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { balti: "ཇུ་ཕོ། (Joo-pho!)", eng: "Hello!" },
            { balti: "ཁང་གི་ཡོད་པས། (Khang gi yod-pas?)", eng: "How are you?" },
            { balti: "ང་བདེ་ཡིན། (Nga de yin)", eng: "I’m fine." },
            { balti: "ཁྱེད་རང་གི་མིང་ག་རེ་རེད། (Khyed-rang gi ming ga-re red?)", eng: "What’s your name?" },
            { balti: "ང་གི་མིང་ཤད་ཡིན། (Nga gi ming Shad yin)", eng: "My name is Shad." },
            { balti: "དགོང་དག་བཀྲ་ཤིས། (Gong dag tashi)", eng: "Good evening / Goodbye." },
          ].map(({ balti, eng }) => (
            <div
              key={balti}
              className="bg-gray-800 hover:bg-gray-750 p-6 rounded-2xl shadow-lg transition"
            >
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-400 italic">{eng}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category: Travel */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          🏔️ Travel & Directions
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { balti: "དེ་གིས་ག་ལ་འགྲོ་ཡིན། (De gis ga la gro yin?)", eng: "Where are you going?" },
            { balti: "ང་སྐུ་དགོན་པ་ལ་འགྲོ། (Nga sku gonpa la gro)", eng: "I am going to the monastery." },
            { balti: "ལམ་འདི་ངོ་མི་ཤེས། (Lam di ngo mi shes)", eng: "I don’t know this road." },
            { balti: "འདི་གིས་མི་ལ་གསུངས། (Di gis mi la sung)", eng: "Please tell this person." },
            { balti: "ཆུ་ག་ཡོད་རེད། (Chu ga yod red?)", eng: "Where is water?" },
            { balti: "གཡག་འདི་མངོན་པ། (Yag di ngon-pa)", eng: "That yak is beautiful!" },
          ].map(({ balti, eng }) => (
            <div
              key={balti}
              className="bg-gray-800 hover:bg-gray-750 p-6 rounded-2xl shadow-lg transition"
            >
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-400 italic">{eng}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category: Emotions */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          💖 Emotions & Expressions
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            { balti: "ང་འཇགས་པ་ཡིན། (Nga jagpa yin)", eng: "I’m happy." },
            { balti: "ང་ཁོང་ཁྲོ་ཡིན། (Nga khong khro yin)", eng: "I’m angry." },
            { balti: "ང་སྐྱོ་བ་ཡིན། (Nga skyo-wa yin)", eng: "I’m sad." },
            { balti: "ང་རབ་བཞིན་བདེ་པོ་ཡིན། (Nga rab-shin depo yin)", eng: "I’m feeling great!" },
            { balti: "ང་འདུག་གིས་འཛིན་ཡོད། (Nga dug gis dzin yod)", eng: "I miss you." },
            { balti: "ཁྱེད་ལ་ང་ལྷག་མེད། (Khyed la nga lhag med)", eng: "I love you." },
          ].map(({ balti, eng }) => (
            <div
              key={balti}
              className="bg-gray-800 hover:bg-gray-750 p-6 rounded-2xl shadow-lg transition"
            >
              <p className="text-lg font-semibold mb-2">{balti}</p>
              <p className="text-gray-400 italic">{eng}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Insight */}
      <section className="relative text-center py-20 px-6 bg-gray-950">
        <div
          className="absolute inset-0 bg-[url('/images/skardu-valley.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Cultural Insight</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Balti communication is full of warmth and humility.  
            When you speak Balti, you’re not just using words — you’re sharing
            the respect, kindness, and deep human connection that defines
            Baltistan.
          </p>
        </div>
      </section>

     <LearnContinue
        title="Keep Exploring"
        links={[
          { label: "Balti Grammar", href: "/learn/grammar" },
          { label: "Balti Script →", href: "/learn/script", variant: "secondary" },
        ]}
      />
    </main>
  );
}