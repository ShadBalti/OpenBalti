import { generateMetadata } from "@/lib/metadata"
import Image from "next/image"

export const metadata = generateMetadata(
  "About OpenBalti - Preserving the Balti Language",
  "Discover the history, importance, and preservation efforts of the Balti language through OpenBalti — an open-source project led by Dilshad Hussain dedicated to documenting and celebrating this ancient Tibetic language.",
)

export default function AboutPage() {
  return (
    <div className="container py-10 md:py-16">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
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
          <div className="pt-4">
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Quote Card */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
          <blockquote className="italic text-xl md:text-2xl font-light text-center">
            "When a language dies, we don't just lose words; we lose a unique way of seeing the world."
          </blockquote>
          <p className="text-center mt-4 text-muted-foreground">— Dilshad Hussain ShadBalti</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 id="about-balti-language" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            The Balti Language
          </h2>

          <div className="md:flex md:gap-8 md:items-start">
            <div className="md:flex-1">
              <p>
                Balti is one of the oldest surviving forms of the Tibetan language, spoken primarily in the breathtaking
                region of Baltistan in Gilgit-Baltistan, Pakistan, and parts of Ladakh, India. It is deeply tied to the
                culture, traditions, and collective memory of the Balti people.
              </p>
              <p>
                Historically written in a script called "Yige" (a variant of classical Tibetan script), cultural shifts
                have led to its adaptation in a modified Perso-Arabic script. This unique linguistic bridge between
                Tibetan and Central Asian influences makes Balti not just a language, but a living historical document.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:w-64 flex-shrink-0">
              <div className="bg-muted rounded-lg p-3">
                <div className="aspect-square relative rounded overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted-foreground/10 text-xs text-muted-foreground">
                    <Image src="/baltistan.jpeg" alt="An awesome image of baltistan" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  The magnificent landscapes of Baltistan, home to the Balti language
                </p>
              </div>
            </div>
          </div>

          <p>
            Despite its deep roots, Balti faces modern challenges. Urbanization, migration, and the dominance of
            national languages like Urdu and English have led to its gradual decline, especially among younger
            generations. Yet, within its songs, stories, and daily conversations, the heart of Baltistan still beats in
            Balti.
          </p>

          <h2 id="mission-of-openbalti" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            Mission of OpenBalti
          </h2>

          <p>
            OpenBalti exists to make the Balti language accessible to everyone — speakers, learners, and linguists. Our
            mission is to:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-background border border-border rounded-xl p-5 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Preserve</h3>
                <p className="text-muted-foreground text-sm">
                  Create a freely accessible, accurate Balti-English dictionary to document rare and traditional
                  vocabulary.
                </p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-5 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                  <path d="M21 8a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2Z" />
                  <path d="M21 14H11" />
                  <path d="M15 8v8" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Learn</h3>
                <p className="text-muted-foreground text-sm">
                  Encourage language learning through intuitive, easy-to-use digital tools and resources.
                </p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-5 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  <path d="m15 5 3 3" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Document</h3>
                <p className="text-muted-foreground text-sm">
                  Support both classical and modern Balti scripts to ensure complete documentation.
                </p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-xl p-5 flex gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Collaborate</h3>
                <p className="text-muted-foreground text-sm">
                  Open-source code available for community collaboration and continuous improvement.
                </p>
              </div>
            </div>
          </div>

          <h2 id="about-the-developer" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            About the Developer
          </h2>

          <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 my-8">
            <div className="md:flex gap-6 items-center">
              <div className="mx-auto md:mx-0 mb-6 md:mb-0 w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 overflow-hidden flex items-center justify-center text-muted-foreground text-xs">
                <Image src="/developer.jpg" alt="An awesome image of baltistan" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Dilshad Hussain</h3>
                <p className="text-muted-foreground">Self-taught web developer from Baltistan, Pakistan</p>
                <div className="mt-4 flex gap-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Full-stack Developer
                  </div>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Native Balti Speaker
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p>
                As the first engineer in his family and a proud speaker of Balti, Dilshad combined his passion for
                technology and cultural preservation to build OpenBalti.
              </p>
              <p className="mt-4">
                Growing up in the mountains of Baltistan, he experienced firsthand how quickly traditional languages and
                customs could fade. Through OpenBalti, he hopes to give back to his community and inspire others to
                protect their linguistic heritage using the power of technology.
              </p>
            </div>
          </div>

          <h2 id="how-to-contribute" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            How You Can Help
          </h2>

          <p>
            OpenBalti welcomes contributions from everyone — whether you're a native speaker, a linguist, a developer,
            or simply someone passionate about preserving endangered languages.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-8">
            <div className="bg-background border-t-2 border-primary border-b border-x border-border rounded-xl p-5">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20v-8" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                  <path d="M12 12V4" />
                  <path d="M6 16V4" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Add Words</h3>
              <p className="text-muted-foreground text-sm">
                Suggest new words or corrections to the dictionary from your knowledge of Balti.
              </p>
            </div>

            <div className="bg-background border-t-2 border-primary border-b border-x border-border rounded-xl p-5">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M14.5 9.5 16 8" />
                  <path d="m14.5 14.5 1.5 1.5" />
                  <path d="M9.5 14.5 8 16" />
                  <path d="M9.5 9.5 8 8" />
                  <path d="M21 12h1" />
                  <path d="M2 12h1" />
                  <path d="M12 21v1" />
                  <path d="M12 2v1" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Develop</h3>
              <p className="text-muted-foreground text-sm">
                Help improve the app and website through our open-source code on GitHub.
              </p>
            </div>

            <div className="bg-background border-t-2 border-primary border-b border-x border-border rounded-xl p-5">
              <div className="h-12 w-12 mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 12a8 8 0 1 0-9.25 7.9" />
                  <path d="M18 16v6" />
                  <path d="M15 19h6" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Share</h3>
              <p className="text-muted-foreground text-sm">
                Spread the word about OpenBalti within your community and social networks.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8 my-8">
            <h2 id="join-the-community" className="text-2xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="mb-6">
              Together, we can ensure that the Balti language thrives for generations to come. Connect with us and other
              contributors:
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-background border border-border hover:bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                Twitter
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-background border border-border hover:bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Newsletter
              </button>
            </div>
          </div>

          <h2 id="closing-words" className="flex items-center gap-3">
            <span className="h-8 w-1.5 bg-primary rounded-full"></span>
            Closing Words
          </h2>

          <p>
            Languages are more than just words — they are carriers of identity, tradition, and spirit. Each language
            represents a unique perspective of human experience, containing knowledge and wisdom that cannot be
            precisely translated.
          </p>

          <p>
            OpenBalti stands as a bridge between the past and the future, preserving the voice of Baltistan for the
            world to hear and ensuring that future generations can still connect with their heritage through their
            mother tongue.
          </p>

          <div className="mt-12 text-center">
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
