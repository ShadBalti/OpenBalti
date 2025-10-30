import { generateMetadata } from "@/lib/metadata";
import { getKeywordsFor } from "@/lib/seoKeywords";
import React from "react";
import LearnContinue from "@/components/LearnContinue";

export const metadata = generateMetadata(
  "Balti Dialects | Learn Balti Language | OpenBalti",
  "Explore the regional dialects of the Balti language spoken across Baltistan and Ladakh. Learn how pronunciation, vocabulary, and accent vary between Skardu, Khaplu, Shigar, Rondu, Kharmang, Chorbat, and Kargil.",
{ keywords: getKeywordsFor("learn/dialectal") }
);

export default function DialectalPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Balti Dialects & Regional Variations
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Discover how Balti sounds, words, and accents vary across the mountains — from
          Skardu to Kargil, Khaplu to Nubra.
        </p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto mb-8">
          “While all Baltis understand one another, every valley has its own melody.”
        </blockquote>
      </section>

      {/* Overview Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          A Language with Many Voices
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The Balti language, a member of the <strong>Tibetic language family</strong>, is
          characterized by several regional variations or dialects. While these dialects are
          generally considered <strong>mutually intelligible</strong>, they exhibit observable
          differences in <em>phonology, accent,</em> and <em>vocabulary</em>.
        </p>
      </section>

      {/* Dialectal Divisions */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400 text-center">
          Major Dialectal Divisions & Geographical Distribution
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The Balti language encompasses <strong>four principal dialects</strong> reflecting
          regional linguistic nuances and variations between valleys and even villages:
        </p>
        <ul className="space-y-4 text-gray-300 list-disc pl-6">
          <li>
            <strong>Eastern Dialect:</strong> Predominantly spoken in the{" "}
            <em>Chorbat and Nubra Valley</em> regions of Ladakh.
          </li>
          <li>
            <strong>Central Dialect:</strong> Found in the <em>Khaplu Valley</em>.
          </li>
          <li>
            <strong>Western Dialects:</strong> Spoken across <em>Skardu, Shigar,</em> and{" "}
            <em>Rondu</em>. The <strong>Skardu dialect</strong> is often considered the
            <em> prestige dialect</em> of Balti.
          </li>
          <li>
            <strong>Southern Dialect:</strong> Prevalent in <em>Upper Kharmang</em> and{" "}
            <em>Kargil</em> in Ladakh.
          </li>
        </ul>
        <p className="text-gray-400 text-sm mt-4">
          The Khaplu and Skardu dialects are very similar overall, with accent being the
          main point of difference.
        </p>
      </section>

      {/* Dialectal Table */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-blue-400">
          Examples of Dialectal Variation
        </h2>
        <div className="overflow-x-auto bg-gray-800 rounded-2xl shadow-lg p-4">
          <table className="min-w-full text-sm text-gray-200 border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-blue-400">
                <th className="p-3 text-left">English Meaning</th>
                <th className="p-3 text-left">Eastern (Nubra/Chorbat)</th>
                <th className="p-3 text-left">Central (Khaplu)</th>
                <th className="p-3 text-left">Western (Skardu/Shigar/Rondu)</th>
                <th className="p-3 text-left">Southern (Kharmang/Kargil)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Milk", "Oma", "Oma", "Ona", "Oma"],
                ["Keep", "Yuq", "Yuq", "Yuq", "Juq"],
                ["Girl", "Bono", "Bono", "Bono", "Bomo"],
                ["You (singular)", "Yan", "Yan", "Yang", "Yan"],
                ["Mountain", "Braq", "Braq", "Blaq", "Braq"],
              ].map(([eng, east, central, west, south], i) => (
                <tr key={i} className="border-t border-gray-700">
                  <td className="p-3 font-medium text-gray-100">{eng}</td>
                  <td className="p-3">{east}</td>
                  <td className="p-3">{central}</td>
                  <td className="p-3">{west}</td>
                  <td className="p-3">{south}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-center mt-4 text-sm italic">
          Data adapted from field linguistics and speaker interviews across Baltistan and Ladakh.
        </p>
      </section>

      {/* Phonological Differences */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400 text-center">
          Phonological Differences & Conservatism
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Linguistic analysis highlights differences between the <strong>Khaplu</strong> and{" "}
          <strong>Skardu</strong> dialects, especially in how they preserve or modify Classical
          Tibetan sounds.
        </p>

        <ul className="space-y-4 text-gray-300 list-disc pl-6">
          <li>
            <strong>Khaplu Conservatism:</strong> The Khaplu dialect is the only known
            Tibetan form that preserves the <em>dorso-velar</em> pronunciations [kr-], [khr-],
            and [gr-].
          </li>
          <li>
            <strong>Pronunciation Patterns:</strong> Words like{" "}
            <em>gro (wheat), khrag (blood), gri (knife)</em> are pronounced with the{" "}
            <em>back of the tongue</em> against the soft palate.
          </li>
          <li>
            <strong>Skardu Pronunciation:</strong> The Skardu dialect uses a slightly{" "}
            <em>retroflexed tongue-tip</em> against the front of the hard palate, giving
            sounds like [tro], [thrak], and [dri].
          </li>
          <li>
            The Western dialect uses <em>ona</em> for “milk,” while the other varieties use{" "}
            <em>oma</em>.
          </li>
        </ul>
      </section>

      {/* External Influences */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400 text-center">
          External Influences on Variation
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The Balti linguistic landscape is dynamic and continually evolving due to
          cultural exchange, migration, and contact with neighboring languages.
        </p>

        <ul className="space-y-4 text-gray-300 list-disc pl-6">
          <li>
            <strong>Urdu & English:</strong> Balti increasingly absorbs loanwords from
            Urdu, Punjabi, and English through media and education.
          </li>
          <li>
            <strong>Arabic & Persian:</strong> Religious and historical influences enrich
            Balti with vocabulary from these classical languages.
          </li>
          <li>
            <strong>Neighboring Contacts:</strong> Shared vocabulary with{" "}
            <em>Burushaski</em> and <em>Shina</em> due to geographical proximity.
          </li>
          <li>
            <strong>Urban Diaspora:</strong> Baltis in cities like Karachi and Islamabad
            develop newer forms that blend Balti with Urdu and English.
          </li>
          <li>
            <strong>Accent vs. Dialect:</strong> Some differences between Skardu and Khaplu
            are mainly accentual, while core grammar remains consistent.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="text-center py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-semibold mb-4">The Beauty of Variation</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Each dialect of Balti reflects centuries of cultural evolution — a voice shaped by
          mountains, valleys, and shared identity. Learning these variations helps preserve
          not only words, but the spirit of Baltistan itself.
        </p>
      </section>
       <LearnContinue
        title="Keep Exploring"
        links={[
          { label: "Common Phrases", href: "/learn/phrases" },
          { label: "Balti Script →", href: "/learn/script", variant: "secondary" },
        ]}
      />
    </main>
  );
}