import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Balti Language Pronunciation Guide: Master the Sounds",
  "Master Balti pronunciation with detailed phonetic breakdowns, IPA notation, audio guides, mouth position diagrams, and solutions for common pronunciation challenges.",
  {
    keywords: [
      "Balti pronunciation",
      "how to pronounce Balti",
      "Balti phonetics",
      "Balti sounds",
      "Balti accent",
    ],
  },
)

const article = ARTICLES["balti-pronunciation-guide-master-sounds"]

export default function BaltiPronunciationPage() {
  return (
    <BlogArticleLayout
      slug={article.slug}
      title={article.title}
      excerpt={article.excerpt}
      date={article.date}
      readTime={article.readTime}
      category={article.category}
      author={article.author}
      relatedArticles={article.relatedArticles}
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Introduction to Balti Phonetics</h2>
        <p>
          Balti is a Tibetic language with a rich phonetic system including consonant clusters, retroflex consonants, and distinct vowel sounds that may not exist in English. This guide breaks down each sound with IPA notation, mouth positioning, and practice techniques.
        </p>
        <p>
          While Balti shares some sounds with English, many require precise mouth positioning and articulation. With consistent practice and attention to native speaker models, you can master authentic Balti pronunciation.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Balti Vowel System</h2>
        <p>
          Balti has five basic vowels, each with a clear, consistent pronunciation. Pay careful attention to vowel length—in Balti, long vowels can change word meaning.
        </p>

        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold mb-3">The Five Vowels</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="min-w-24">
                  <p className="font-semibold text-lg">a</p>
                  <p className="text-xs text-muted-foreground">/a/</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Like in "father"</p>
                  <p className="text-sm">Open your mouth wide and produce a deep vowel. Not like the "a" in "cat".</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-w-24">
                  <p className="font-semibold text-lg">e</p>
                  <p className="text-xs text-muted-foreground">/e/</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Like in "say" (without the off-glide)</p>
                  <p className="text-sm">Close to the English vowel but hold it steady without diphthongizing.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-w-24">
                  <p className="font-semibold text-lg">i</p>
                  <p className="text-xs text-muted-foreground">/i/</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Like in "see"</p>
                  <p className="text-sm">High, front vowel. Pull your lips back slightly and position your tongue high in the front of your mouth.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-w-24">
                  <p className="font-semibold text-lg">o</p>
                  <p className="text-xs text-muted-foreground">/o/</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Like in "go" (without the off-glide)</p>
                  <p className="text-sm">Mid-back vowel. Hold it steady and don&apos;t let it diphthongize like in English.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-w-24">
                  <p className="font-semibold text-lg">u</p>
                  <p className="text-xs text-muted-foreground">/u/</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Like in "moon"</p>
                  <p className="text-sm">High, back vowel. Round your lips and position your tongue high in the back of your mouth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
            <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">Vowel Length Matters</h3>
            <p className="text-sm">
              In Balti, vowel length distinguishes meaning. A short &apos;a&apos; is different from a long &apos;aa&apos;. Listen carefully to native speakers and time your vowel production.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Balti Consonants</h2>
        <p>
          Balti has many consonants, including several retroflex sounds (produced with the tongue curled back) that don&apos;t exist in English. These require specific articulation practice.
        </p>

        <h3 className="text-xl font-semibold mt-6">Common Consonants</h3>
        <div className="border border-border rounded-lg p-4 bg-card">
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">p</p>
                <p className="text-xs text-muted-foreground">/p/</p>
              </div>
              <div className="text-sm">
                <p>Voiceless bilabial stop. Like English "p" but slightly more aspirated.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">t</p>
                <p className="text-xs text-muted-foreground">/t/</p>
              </div>
              <div className="text-sm">
                <p>Voiceless alveolar stop. Dental, touching the back of your front teeth.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">k</p>
                <p className="text-xs text-muted-foreground">/k/</p>
              </div>
              <div className="text-sm">
                <p>Voiceless velar stop. Like English "k" in "sky".</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">m</p>
                <p className="text-xs text-muted-foreground">/m/</p>
              </div>
              <div className="text-sm">
                <p>Voiced bilabial nasal. Like English "m".</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">n</p>
                <p className="text-xs text-muted-foreground">/n/</p>
              </div>
              <div className="text-sm">
                <p>Voiced alveolar nasal. Like English "n".</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">l</p>
                <p className="text-xs text-muted-foreground">/l/</p>
              </div>
              <div className="text-sm">
                <p>Voiced alveolar lateral. Similar to English "l" but dental.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">r</p>
                <p className="text-xs text-muted-foreground">/r/</p>
              </div>
              <div className="text-sm">
                <p>Voiced alveolar flap. Like Spanish "r" in "pero", not English "r".</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">s</p>
                <p className="text-xs text-muted-foreground">/s/</p>
              </div>
              <div className="text-sm">
                <p>Voiceless alveolar fricative. Like English "s".</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Retroflex Consonants (Special Attention Required)</h3>
        <p>
          These sounds are produced with the tongue curled back. They&apos;re common in Balti and require deliberate practice.
        </p>

        <div className="border border-border rounded-lg p-4 bg-card">
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">ṭ</p>
                <p className="text-xs text-muted-foreground">/ʈ/</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-1">Retroflex Stop</p>
                <p>Curl your tongue tip back against the hard palate. Release suddenly like a regular "t".</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">ḍ</p>
                <p className="text-xs text-muted-foreground">/ɖ/</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-1">Retroflex Stop (Voiced)</p>
                <p>Like ṭ but with vocal cord vibration. Similar in position to ṭ.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">ḷ</p>
                <p className="text-xs text-muted-foreground">/ɭ/</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-1">Retroflex Lateral</p>
                <p>Tongue curled back with air flowing on the sides. Practice by saying English "l" and gradually curling your tongue back.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="min-w-20 font-semibold">
                <p className="text-lg">ṛ</p>
                <p className="text-xs text-muted-foreground">/ɽ/</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold mb-1">Retroflex Flap</p>
                <p>Like a retroflex version of the alveolar flap. Tongue curled back for a quick tap motion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Consonant Clusters</h2>
        <p>
          Balti allows consonant clusters that may seem awkward to English speakers. Practice these combinations slowly before increasing speed.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">Common Clusters</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-semibold">Initial clusters:</span> "sk" (skar), "st" (star), "sm" (smarpo)
            </li>
            <li>
              <span className="font-semibold">Medial clusters:</span> "nd" (sonda), "nt" (mantu), "ng" (language)
            </li>
            <li>
              <span className="font-semibold">Final clusters:</span> "nk" (brank), "nd" (hand-like sounds)
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Common Pronunciation Challenges</h2>
        <p>
          Here are typical difficulties English speakers face when learning Balti pronunciation, with solutions:
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-semibold">Challenge: Retroflex Consonants</h3>
            <p className="text-sm mt-2 mb-2">
              <span className="font-semibold">Problem:</span> English doesn&apos;t have retroflex sounds, making them difficult to produce initially.
            </p>
            <p className="text-sm">
              <span className="font-semibold">Solution:</span> Practice curling your tongue back and tapping the hard palate. Listen to native speakers repeatedly and imitate the mouth position. Record yourself and compare.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-semibold">Challenge: The Alveolar Flap "r"</h3>
            <p className="text-sm mt-2 mb-2">
              <span className="font-semibold">Problem:</span> English "r" is articulated differently. The Balti flap is more like Spanish "r".
            </p>
            <p className="text-sm">
              <span className="font-semibold">Solution:</span> Practice the Spanish flap. Say "better" and focus on the "tt" sound, then say it quickly. That&apos;s the flap.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-semibold">Challenge: Vowel Length</h3>
            <p className="text-sm mt-2 mb-2">
              <span className="font-semibold">Problem:</span> English doesn&apos;t use vowel length to distinguish meaning, so learners often overlook it.
            </p>
            <p className="text-sm">
              <span className="font-semibold">Solution:</span> Listen carefully to native speaker pairs like "pat" vs "paat". Count vowel beats: short (one beat) vs long (two beats).
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-semibold">Challenge: Consonant Clusters</h3>
            <p className="text-sm mt-2 mb-2">
              <span className="font-semibold">Problem:</span> Unusual cluster combinations make words sound unfamiliar and difficult to pronounce.
            </p>
            <p className="text-sm">
              <span className="font-semibold">Solution:</span> Break clusters into separate syllables initially, then merge them slowly. Practice the cluster without the surrounding vowel first.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-semibold">Challenge: Word Stress</h3>
            <p className="text-sm mt-2 mb-2">
              <span className="font-semibold">Problem:</span> Stress patterns in Balti differ from English, affecting rhythm and comprehension.
            </p>
            <p className="text-sm">
              <span className="font-semibold">Solution:</span> Study stress patterns in Balti words. Generally, stress falls on the first syllable in most Balti words, but there are exceptions.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Pronunciation Practice Techniques</h2>
        <p>
          Effective pronunciation practice requires focused, deliberate effort. Here are proven techniques:
        </p>

        <h3 className="text-xl font-semibold mt-6">1. Shadowing</h3>
        <p>
          Listen to native speakers and shadow their speech—speak simultaneously, trying to match intonation, rhythm, and pronunciation. This trains your muscle memory and ear.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Slow-Motion Practice</h3>
        <p>
          Use audio apps to slow down native speech to 75-80% speed. This helps you hear individual sounds clearly before practicing at normal speed.
        </p>

        <h3 className="text-xl font-semibold mt-6">3. Mouth Position Diagrams</h3>
        <p>
          Study diagrams of mouth positions for difficult sounds (especially retroflex consonants). Watch YouTube videos where instructors show mouth position clearly.
        </p>

        <h3 className="text-xl font-semibold mt-6">4. Recording and Comparison</h3>
        <p>
          Record yourself speaking Balti and compare with native speaker recordings. Identify differences in pronunciation, timing, and stress. This provides immediate feedback.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Minimal Pairs Practice</h3>
        <p>
          Work with word pairs that differ in one sound (like "pat" vs "paat"). This trains your ear to recognize distinctions critical for meaning.
        </p>

        <h3 className="text-xl font-semibold mt-6">6. Daily Pronunciation Drills</h3>
        <p>
          Dedicate 10-15 minutes daily to pronunciation-specific practice rather than passive listening. Active, focused practice produces better results.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Sample Words to Practice</h2>
        <p>
          Use these words to practice key Balti sounds:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold mb-3">Vowel Practice</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">pat</span> (father)
              </li>
              <li>
                <span className="font-semibold">me</span> (I)
              </li>
              <li>
                <span className="font-semibold">tis</span> (you)
              </li>
              <li>
                <span className="font-semibold">khon</span> (snow)
              </li>
              <li>
                <span className="font-semibold">chu</span> (water)
              </li>
            </ul>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card">
            <h3 className="font-semibold mb-3">Retroflex Practice</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">ṭak</span> (roof)
              </li>
              <li>
                <span className="font-semibold">ḍuk</span> (beat)
              </li>
              <li>
                <span className="font-semibold">bāḷ</span> (ball)
              </li>
              <li>
                <span className="font-semibold">kāṛ</span> (work)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Building Pronunciation Confidence</h2>
        <p>
          Remember that pronunciation is a skill that improves with consistent practice. Most learners find that:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Initial difficulty is normal—retroflex sounds require new muscle control</li>
          <li>Active practice (speaking, recording, comparing) beats passive listening</li>
          <li>Native speakers are generally forgiving of accent; clarity matters more than perfection</li>
          <li>Immersion with native speakers accelerates pronunciation improvement</li>
          <li>Small improvements compound—consistent daily practice beats sporadic intense sessions</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
        <p>
          Mastering Balti pronunciation requires understanding the phonetic system, deliberate practice, and feedback from native speakers. While some sounds are challenging for English speakers, consistent effort produces results. Use this guide as a reference, combine it with listening to native speakers, and practice actively every day.
        </p>
        <p>
          Your efforts to pronounce Balti correctly honor the language and culture. Native speakers appreciate learners who invest in proper pronunciation, and clear speech enhances your ability to communicate and build connections.
        </p>
      </section>
    </BlogArticleLayout>
  )
}
