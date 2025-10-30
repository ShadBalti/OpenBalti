import { generateMetadata } from "@/lib/metadata";
import { getKeywordsFor } from "@/lib/seoKeywords";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LearnContinue from "@/components/LearnContinue";

export const metadata = generateMetadata(
  "Balti Script (བལྟི) | Learn Balti | OpenBalti",
    "Discover the original Tibetan-based Balti script — its letters, sounds, and deep connection to Baltistan’s cultural identity.",
{ keywords: getKeywordsFor("learn/script") }
);

export default function ScriptPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center">Balti Script & Linguistic Structure</h1>

      <p className="text-lg mb-8 text-gray-300">
        The Balti language, a branch of the Tibetic family, carries centuries of linguistic evolution 
        and cultural history. Its script — the ancient <strong>Yige</strong> or <strong>Bhoti script</strong> — 
        remains the most authentic representation of Balti phonology and identity.
      </p>

      <Image
        src="/images/Balti_Script_Sample.png"
        alt="Balti Yige Script Sample"
        width={900}
        height={400}
        className="rounded-xl shadow-lg mb-10 mx-auto"
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-400">I. General Linguistic Structure</h2>
        <p>
          Balti is spoken primarily in <strong>Baltistan</strong> (Gilgit-Baltistan, Pakistan) and parts of 
          <strong> Ladakh, India</strong>. It belongs to the <strong>Tibetic language family</strong> and 
          follows a <strong>Subject–Object–Verb (SOV)</strong> order.
        </p>
        <p>
          The lexicon blends indigenous Tibetic vocabulary with loanwords from Urdu, Persian, and English. 
          Arabic letters like <strong>ث، ح، ذ</strong> appear in the Perso-Arabic script only for borrowed words.
        </p>
      </section>

      <section className="space-y-6 mt-10">
        <h2 className="text-3xl font-semibold text-blue-400">II. Morphology: Nouns, Pronouns & Cases</h2>
        <p>
          Balti employs a rich morphological system marking plurality, case, and gender. Articles are largely 
          absent — the noun alone serves for “the,” while post-nominal particles indicate “a” or “one.”
        </p>

        <h3 className="text-2xl font-medium text-blue-300 mt-6">A. Gender and Pluralization</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Gender is expressed naturally — e.g., <em>byapho</em> (cock) vs. <em>byapong-o</em> (hen).</li>
          <li>Plurals form with suffixes like <strong>-kun</strong> or vowel changes such as 
              <em> lagpa → lagpong</em>.</li>
        </ul>

        <h3 className="text-2xl font-medium text-blue-300 mt-6">B. Case System (8 Cases)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-800 border border-gray-700 text-sm">
            <thead>
              <tr className="bg-slate-700 text-gray-100">
                <th className="p-3 text-left">Case</th>
                <th className="p-3 text-left">Marker</th>
                <th className="p-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3">Nominative</td><td className="p-3">—</td><td className="p-3">Subject of verb</td></tr>
              <tr><td className="p-3">Genitive</td><td className="p-3"><strong>i / e</strong></td><td className="p-3">nang-i (“of a house”)</td></tr>
              <tr><td className="p-3">Agentive</td><td className="p-3"><strong>si</strong></td><td className="p-3">Nga si phchek (“I shall make”)</td></tr>
              <tr><td className="p-3">Dative</td><td className="p-3"><strong>la</strong></td><td className="p-3">Dyu kho la min (“Give this to him”)</td></tr>
              <tr><td className="p-3">Locative</td><td className="p-3"><strong>-ing-nu</strong></td><td className="p-3">Nang-ing-nu (“at home”)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6 mt-10">
        <h2 className="text-3xl font-semibold text-blue-400">III. Verb System and Tense</h2>
        <p>
          Balti verbs are complex, with at least <strong>11 tense markers</strong> that modify verb roots 
          to indicate time and aspect. Examples include <strong>-ed</strong> (present), 
          <strong>-en</strong> (present participle), and <strong>-set</strong> (past participle).
        </p>
        <ul className="list-disc pl-6">
          <li><strong>Yodpo</strong> — “to exist,” “to be present.”</li>
          <li><strong>Zerbo</strong> — “that which is being said.”</li>
        </ul>
      </section>

      <section className="space-y-6 mt-10">
        <h2 className="text-3xl font-semibold text-blue-400">IV. Honorifics and Sociolinguistic Nuance</h2>
        <p>
          Balti conveys respect and emotion through <strong>honorific verb forms</strong> and nuanced adjectives.
          Example: <em>Gyurba</em> (“to die”) is reserved for saints or respected figures.
        </p>
      </section>

      <section className="space-y-6 mt-10">
        <h2 className="text-3xl font-semibold text-blue-400">V. The Balti Yige Script (Tibetan Script)</h2>
        <p>
          The <strong>Tibetan Yige script</strong> — native to Balti — dates back to the <strong>8th century</strong>.
          It’s revered for capturing Balti phonology with unmatched accuracy.
        </p>

        <h3 className="text-2xl font-medium text-blue-300 mt-6">1. Historical Use and Revival</h3>
        <ul className="list-disc pl-6">
          <li>Adopted around <strong>727 AD</strong> after the Tibetan conquest of Baltistan.</li>
          <li>Used for <strong>religious and royal manuscripts</strong> until the 14th–17th centuries.</li>
          <li>Now being <strong>revived</strong> through classes, activism, and digital tools.</li>
          <li>Written <strong>left-to-right</strong>.</li>
        </ul>

        <h3 className="text-2xl font-medium text-blue-300 mt-6">2. Alphabet and Modern Adaptations</h3>
        <p>
          The Balti Yige alphabet derives from Tibetan but includes additions for modern sounds, 
          such as Urdu and Arabic loanwords. In 1985, <strong>Yusuf Hussain Abadi</strong> 
          introduced four new letters to accommodate these.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-slate-800 border border-gray-700 text-sm">
            <thead>
              <tr className="bg-slate-700 text-gray-100">
                <th className="p-3 text-left">Letter</th>
                <th className="p-3 text-left">Romanization</th>
                <th className="p-3 text-left">IPA</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3">ཫ</td><td className="p-3">q</td><td className="p-3">/q/</td></tr>
              <tr><td className="p-3">ཁ༹</td><td className="p-3">x</td><td className="p-3">/χ/</td></tr>
              <tr><td className="p-3">ག༹</td><td className="p-3">ɣ</td><td className="p-3">/ʁ/</td></tr>
              <tr><td className="p-3">ཕ༹</td><td className="p-3">f</td><td className="p-3">/f/</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-medium text-blue-300 mt-6">3. Script in Practice</h3>
        <ul className="list-disc pl-6">
          <li>“Haider” → <strong>ཧེ་དར</strong></li>
          <li>“Balti” → <strong>སྦལ་ཏི།</strong></li>
          <li>“Grapes” → <strong>རྒུན།</strong> (*Rgun*)</li>
          <li>“Winter” → <strong>དགུན་ཝགྷ།</strong> (*Gon wagh*)</li>
        </ul>
      </section>

        <LearnContinue
        title="Keep Exploring"
        links={[
          { label: "Balti Dialectal", href: "/learn/dialectal" },
          { label: "Balti Script →", href: "/learn/script", variant: "secondary" },
        ]}
      />

      <footer className="mt-16 text-center border-t border-gray-700 pt-8">
        <p className="text-gray-400">
          📖 Learn more in the <a href="/learn/dialectal" className="text-blue-400 hover:underline">Balti Dialectal</a> section
          or explore our <a href="/dictionary" className="text-blue-400 hover:underline">online dictionary</a>.
        </p>
      </footer>
    </main>
  );
}