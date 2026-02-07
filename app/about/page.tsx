import { generateMetadata } from "@/lib/metadata"
import Image from "next/image"
import Link from "next/link"

export const metadata = generateMetadata(
  "About OpenBalti - Preserving the Balti Language",
  "Discover the history, importance, and preservation efforts of the Balti language through OpenBalti — an open-source project dedicated to documenting and revitalizing this ancient Tibetic language.",
)

export default function AboutPage() {
  return (
    <div className="container py-10 md:py-16">
      <div className="mx-auto max-w-4xl space-y-12">
        
        {/* ================= HERO ================= */}
        <div className="space-y-6 text-center">
          <div className="mx-auto max-w-md">
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-sm"></div>
              <span className="relative inline-block px-4 py-1.5 text-sm font-medium text-primary bg-background rounded-full border border-primary/20">
                Preserving Our Heritage
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-primary">OpenBalti</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preserving language. Protecting heritage. Empowering generations.
          </p>

          <p className="text-base md:text-lg max-w-2xl mx-auto">
            OpenBalti is a free, community-driven digital dictionary and language platform dedicated to documenting and revitalizing the Balti language for the digital age.
          </p>

          <div className="pt-4">
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        {/* ================= QUOTE ================= */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
          <blockquote className="italic text-xl md:text-2xl font-light text-center">
            "When a language dies, we don't just lose words; we lose a unique way of seeing the world."
          </blockquote>
          <p className="text-center mt-4 text-muted-foreground">— Dilshad Hussain</p>
        </div>

        {/* ================= URGENCY ================= */}
        <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Why Balti Needs Digital Preservation</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Today, many young Balti speakers grow up reading and writing mainly in Urdu and English. As elders pass away and oral traditions fade, thousands of unique words, expressions, and cultural concepts risk being lost forever.
          </p>
          <p className="text-center mt-4 font-medium">
            OpenBalti is working to ensure Balti survives not just in memory — but in the digital future.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">

          {/* ================= BALTI LANGUAGE ================= */}
          <h2 id="about-balti-language" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            The Balti Language
          </h2>

          <div className="md:flex md:gap-8 md:items-start">
            <div className="md:flex-1">
              <p>
                Balti is one of the oldest surviving forms of the Tibetan language, spoken primarily in Baltistan in Gilgit-Baltistan, Pakistan, and parts of Ladakh. It is deeply tied to the culture, traditions, and collective memory of the Balti people.
              </p>

              <div className="bg-muted/50 border border-border rounded-xl p-4 my-6 text-sm not-prose">
                <ul className="space-y-1">
                  <li><strong>Language Family:</strong> Tibetic (Tibeto-Burman)</li>
                  <li><strong>Primary Region:</strong> Baltistan</li>
                  <li><strong>Historical Script:</strong> Yige (Classical Tibetan)</li>
                  <li><strong>Modern Script:</strong> Adapted Perso-Arabic</li>
                  <li><strong>Status:</strong> Under-documented and declining among youth</li>
                </ul>
              </div>

              <p>
                Historically written in Yige, Balti later adapted to a modified Perso-Arabic script. This makes Balti a linguistic bridge between Tibetan heritage and Central Asian cultural influences.
              </p>
            </div>

            <div className="mt-6 md:mt-0 md:w-64 flex-shrink-0">
              <div className="bg-muted rounded-lg p-3">
                <div className="aspect-square relative rounded overflow-hidden">
                  <Image
                    src="/baltistan.jpeg"
                    alt="Mountain landscape of Baltistan, homeland of the Balti language"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  The landscapes of Baltistan, where Balti has lived for centuries
                </p>
              </div>
            </div>
          </div>

          <p>
            Despite its deep roots, Balti faces modern challenges from urbanization, migration, and dominant global languages. Yet in songs, poetry, humor, and daily life, the spirit of Baltistan still lives through Balti.
          </p>

          {/* ================= MISSION ================= */}
          <h2 id="mission-of-openbalti" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            Mission of OpenBalti
          </h2>

          <p>
            OpenBalti aims to make Balti accessible to everyone through a growing{" "}
            <Link href="/dictionary" className="text-primary underline">Balti-English dictionary</Link> and open digital tools.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">Preserve</h3>
              <p className="text-sm text-muted-foreground">
                Build the largest freely accessible Balti-English dictionary so rare and traditional words are never lost.
              </p>
            </div>
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">Learn</h3>
              <p className="text-sm text-muted-foreground">
                Help a new generation learn Balti using modern, easy-to-use digital tools.
              </p>
            </div>
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">Document</h3>
              <p className="text-sm text-muted-foreground">
                Support both classical and modern Balti scripts for complete documentation.
              </p>
            </div>
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-2">Collaborate</h3>
              <p className="text-sm text-muted-foreground">
                Keep the project open-source so the global community can help improve it.
              </p>
            </div>
          </div>

          {/* ================= DEVELOPER ================= */}
          <h2 id="about-the-developer" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            About the Developer
          </h2>

          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 my-8 not-prose">
            <div className="md:flex gap-6 items-center">
              <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-primary/20 mx-auto md:mx-0">
                <Image
                  src="/developer.jpg"
                  alt="Portrait of Dilshad Hussain, founder of OpenBalti"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium">Dilshad Hussain</h3>
                <p className="text-muted-foreground">Self-taught developer from Baltistan</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-muted-foreground">
              <p>
                Dilshad grew up surrounded by the sounds of Balti in daily life. Over time, he saw younger generations losing the ability to read and write their own language.
              </p>
              <p className="mt-4">
                As the first engineer in his family, he decided to use technology to protect his mother tongue. OpenBalti is his contribution to preserving Balti in the digital age.
              </p>
            </div>
          </div>

          {/* ================= CTA ================= */}
          <h2 id="how-to-contribute" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            How You Can Help
          </h2>

          <p>Anyone can contribute — speaker, learner, or developer.</p>

          <div className="flex flex-wrap gap-4 justify-center my-8 not-prose">
            <Link href="/contribute" className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90">
              Add a Word Now
            </Link>
            <a
              href="https://github.com/ShadBalti/OpenBalti"
              target="_blank"
              className="px-6 py-3 rounded-md border border-border hover:bg-muted font-medium"
            >
              Contribute on GitHub
            </a>
          </div>

          {/* ================= CLOSING ================= */}
          <h2 id="closing-words" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            Closing Words
          </h2>

          <p>
            Languages carry identity, memory, and wisdom. Each one represents a unique human perspective.
          </p>
          <p>
            OpenBalti stands as a bridge between past and future, ensuring new generations can still connect with their heritage.
          </p>

          <p className="text-center mt-6 text-muted-foreground">
            Add a word. Share the project. Contribute code. Every action keeps Balti alive.
          </p>

          <div className="mt-12 text-center not-prose">
            <div className="inline-block p-0.5 rounded-lg bg-gradient-to-r from-primary/80 via-primary to-primary/80">
              <div className="bg-background px-6 py-4 rounded-md">
                <p className="text-xl md:text-2xl font-medium text-primary">
                  Language is our identity. OpenBalti is our voice.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}