import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"
import Image from "next/image"
import {
  Clock,
  User,
  Calendar,
  ArrowRight,
  Share2,
  BookOpen,
  MessageCircle,
  Mountain,
  Globe,
  Flame,
  Sparkles,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = generateMetadata(
  "Balti Language Guide: Words, Grammar & Cultural Depth (2026)",
  "Explore Balti vocabulary, grammar, honorifics, numbers, verbs, colors, and real conversations. A comprehensive guide for learners and OpenBalti contributors.",
  {
    keywords: [
      "Balti language",
      "Balti vocabulary",
      "Balti grammar",
      "learn Balti",
      "Balti words",
      "Tibetic language",
      "endangered language",
    ],
  },
)

// ─── Reusable design primitives ──────────────────────────────────────────────

function SectionAnchor({
  id,
  label,
  icon: Icon,
  accent = "primary",
}: {
  id: string
  label: string
  icon: React.ElementType
  accent?: string
}) {
  const accentMap: Record<string, string> = {
    primary: "border-primary bg-primary/8 text-primary",
    blue: "border-blue-500 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
    amber: "border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400",
    green: "border-green-500 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
    purple: "border-purple-500 bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400",
    rose: "border-rose-500 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400",
    teal: "border-teal-500 bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400",
  }
  return (
    <div id={id} className="scroll-mt-24 flex items-center gap-3 mb-8">
      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border-2 flex-shrink-0 ${accentMap[accent]}`}>
        <Icon className="w-4 h-4" aria-hidden="true" />
      </span>
      <h2 className="text-2xl md:text-3xl font-bold leading-tight">{label}</h2>
    </div>
  )
}

function WordPill({ balti, english }: { balti: string; english: string }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2.5 px-4 rounded-xl bg-secondary/40 hover:bg-secondary/70 border border-transparent hover:border-border transition-all group">
      <code className="font-mono font-semibold text-primary text-sm group-hover:scale-105 transition-transform origin-left">
        {balti}
      </code>
      <span className="text-muted-foreground text-sm text-right">{english}</span>
    </div>
  )
}

function Callout({
  children,
  color = "blue",
  emoji,
}: {
  children: React.ReactNode
  color?: string
  emoji?: string
}) {
  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 dark:bg-blue-950/20 border-blue-500 text-blue-900 dark:text-blue-300",
    amber: "bg-amber-50 dark:bg-amber-950/20 border-amber-500 text-amber-900 dark:text-amber-300",
    green: "bg-green-50 dark:bg-green-950/20 border-green-500 text-green-900 dark:text-green-300",
    purple: "bg-purple-50 dark:bg-purple-950/20 border-purple-500 text-purple-900 dark:text-purple-300",
    rose: "bg-rose-50 dark:bg-rose-950/20 border-rose-500 text-rose-900 dark:text-rose-300",
  }
  return (
    <div className={`flex gap-3 rounded-xl border-l-4 p-5 my-6 ${colorMap[color]}`} role="note">
      {emoji && <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>}
      <p className="text-sm leading-relaxed m-0">{children}</p>
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BaltiLanguageGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <div className="relative w-full h-[520px] md:h-[620px] overflow-hidden">
        <Image
          src="/images/blog/balti-landscape.jpg"
          alt="Panoramic view of Baltistan mountains and valleys — home of the Balti language"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* Breadcrumb */}
        <nav className="absolute top-6 left-6 right-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white/50 truncate max-w-[200px]" aria-current="page">Balti Language Guide</li>
          </ol>
        </nav>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-10 md:pb-14 max-w-4xl">
          <Badge className="mb-4 bg-primary/90 hover:bg-primary text-primary-foreground border-0 text-xs tracking-wider uppercase">
            Language Guide · 2026
          </Badge>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4 tracking-tight">
            Balti Language Guide:<br className="hidden md:block" />
            Words, Grammar &amp;<br className="hidden md:block" />
            Cultural Depth
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime="2026-01-01">January 1, 2026</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />14 min read</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />OpenBalti Team</span>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">

          {/* ── Main content ── */}
          <article className="min-w-0 space-y-16">

            {/* Mobile TOC */}
            <aside className="lg:hidden bg-secondary/30 border border-border rounded-2xl p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4" /> Contents
              </h2>
              <nav>
                <ol className="space-y-1.5 text-sm">
                  {[
                    ["#intro", "Introduction"],
                    ["#pronouns", "Pronouns & Family"],
                    ["#numbers", "Numbers"],
                    ["#vocabulary", "Everyday Vocabulary"],
                    ["#food", "Food, Animals & Daily Life"],
                    ["#verbs", "Verbs & Tense System"],
                    ["#adjectives", "Adjectives & Colors"],
                    ["#conversations", "Real Conversations"],
                    ["#slang", "Modern Slang"],
                    ["#strategy", "Learning Strategy"],
                    ["#conclusion", "Final Thought"],
                  ].map(([href, label], i) => (
                    <li key={href}>
                      <a href={href} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-0.5">
                        <span className="text-[10px] font-mono text-muted-foreground/50 w-4 text-right">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            {/* ── 1. Introduction ── */}
            <section>
              <SectionAnchor id="intro" label="What Makes Balti Unique" icon={Mountain} accent="blue" />

              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                The Balti language is a Western Tibetic language spoken mainly in Baltistan (Pakistan) and parts of
                Ladakh (India). What makes Balti truly remarkable is its linguistic conservatism — it still preserves
                ancient sounds from Old Tibetan that many modern dialects have long lost.
              </p>
              <p className="text-base leading-relaxed text-foreground/80 mb-6">
                At the same time, Balti has evolved. Its vocabulary includes a rich blend of native Tibetic roots
                alongside influences from Urdu, Persian, Arabic, and even English. In this guide, you will explore
                Balti vocabulary, grammar, and real conversational usage — perfect for learners and contributors
                to OpenBalti.
              </p>

              <Callout color="blue" emoji="🏔️">
                <strong>Think of Balti as an ancient mountain fortress:</strong> strong foundational roots, enriched
                over centuries with cultural layers from neighbouring civilisations.
              </Callout>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: "📜", title: "Ancient roots", body: "Preserves Old Tibetan sounds lost in modern dialects" },
                  { icon: "🫡", title: "Honorific speech", body: "Distinct registers reflect respect and social hierarchy" },
                  { icon: "🌐", title: "Cultural fusion", body: "Urdu, Persian, Arabic & English all left their mark" },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/40 transition-all"
                  >
                    <span className="text-2xl mb-3 block">{card.icon}</span>
                    <h3 className="font-semibold text-sm mb-1">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 2. Pronouns & Family ── */}
            <section>
              <SectionAnchor id="pronouns" label="Pronouns & Family Terms" icon={Users} accent="amber" />

              <p className="text-base leading-relaxed text-foreground/80 mb-8">
                Balti uses different words depending on respect and social status. Honorific forms are not optional
                formality — they are central to Balti identity.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Pronouns */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">🧍 Pronouns</h3>
                  <div className="space-y-1.5">
                    {[
                      { en: "I", balti: "na / nga" },
                      { en: "You (informal)", balti: "khyang" },
                      { en: "You (respectful)", balti: "yang / yari-phyaqpo" },
                      { en: "He / She", balti: "kho / mo" },
                      { en: "He / She (honorific)", balti: "do" },
                      { en: "We", balti: "naya / ngaya" },
                      { en: "They", balti: "khong" },
                    ].map((row) => (
                      <WordPill key={row.en} balti={row.balti} english={row.en} />
                    ))}
                  </div>
                </div>

                {/* Family */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">👨‍👩‍👧 Family & Kinship</h3>
                  <div className="space-y-2">
                    {[
                      { relation: "Father", ordinary: "Ata / aba", respectful: "Baba / Bawa" },
                      { relation: "Mother", ordinary: "Amo / aayo", respectful: "Zizi" },
                      { relation: "Elder Brother", ordinary: "Kaka", respectful: "Kacho" },
                      { relation: "Elder Sister", ordinary: "Ashe", respectful: "Ashcho" },
                      { relation: "Son", ordinary: "Bu", respectful: "Bucho" },
                      { relation: "Grandfather", ordinary: "Apo", respectful: "Apocho" },
                    ].map((row) => (
                      <div
                        key={row.relation}
                        className="grid grid-cols-[90px_1fr_1fr] items-center gap-2 py-2 px-3 rounded-xl hover:bg-secondary/40 transition-colors text-sm"
                      >
                        <span className="text-muted-foreground text-xs">{row.relation}</span>
                        <code className="font-mono text-primary font-medium">{row.ordinary}</code>
                        <code className="font-mono text-green-600 dark:text-green-400 font-medium">{row.respectful}</code>
                      </div>
                    ))}
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block" /> ordinary
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> respectful
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Callout color="amber" emoji="👉">
                Language reflects social structure and respect deeply — using the right register is fundamental
                to natural Balti communication.
              </Callout>
            </section>

            {/* ── 3. Numbers ── */}
            <section>
              <SectionAnchor id="numbers" label="Numbers in Balti" icon={Sparkles} accent="purple" />

              <p className="text-base leading-relaxed text-foreground/80 mb-8">
                Balti numbers closely resemble Standard Tibetan, reflecting the language's deep Tibetic heritage.
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
                {[
                  { num: "1", balti: "chik" },
                  { num: "2", balti: "nis" },
                  { num: "3", balti: "gsum" },
                  { num: "4", balti: "bzhi" },
                  { num: "5", balti: "ga" },
                  { num: "10", balti: "bcu" },
                  { num: "20", balti: "ngis-bcu" },
                  { num: "100", balti: "brgya" },
                  { num: "1000", balti: "stong" },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all p-4 text-center gap-1.5"
                  >
                    <span className="text-3xl font-extrabold text-primary leading-none">{item.num}</span>
                    <code className="text-xs font-mono text-muted-foreground">{item.balti}</code>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Once", balti: "scik-rim" },
                  { label: "Twice", balti: "ngis-rim" },
                  { label: "Half", balti: "phed" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-dashed border-border bg-secondary/20 p-3 text-center"
                  >
                    <code className="font-mono font-semibold text-primary block mb-1">{item.balti}</code>
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 4. Everyday Vocabulary ── */}
            <section>
              <SectionAnchor id="vocabulary" label="Everyday Vocabulary" icon={Globe} accent="teal" />

              <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/images/blog/balti-landscape.jpg"
                  alt="Natural landscapes of Baltistan — nature, home, and geography"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-5 text-sm text-white/80 font-medium">
                  Nature, home, and geography — the vocabulary of everyday Balti life
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "🌿 Nature",
                    words: [["chuu", "Water"], ["me", "Fire"], ["khlung", "Wind"], ["charfa", "Rain"], ["khnum", "Sky"], ["ni ma", "Sun"], ["lzod", "Moon"]],
                  },
                  {
                    title: "🏔 Geography",
                    words: [["ri", "Mountain"], ["lam", "Road"], ["sa", "Earth"], ["jing", "Field"]],
                  },
                  {
                    title: "🏠 Household",
                    words: [["nang", "House"], ["tchok tse", "Table"], ["kursi", "Chair ✦"], ["tabaq", "Plate ✦"], ["tji", "Knife"], ["pene", "Money"]],
                  },
                ].map((group) => (
                  <div key={group.title} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-sm mb-4 pb-3 border-b border-border">{group.title}</h3>
                    <div className="space-y-1.5">
                      {group.words.map(([balti, en]) => (
                        <WordPill key={balti} balti={balti} english={en} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-3">✦ Loanword from Urdu / Persian</p>

              <Callout color="blue" emoji="💡">
                Many modern Balti household terms are loanwords — a testament to centuries of cultural exchange
                along the Silk Road.
              </Callout>
            </section>

            
            {/* ── 5. Food & Animals ── */}
            <section>
              <SectionAnchor id="food" label="Food, Animals & Daily Life" icon={Flame} accent="rose" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-sm mb-4 pb-3 border-b border-border">🐾 Animals</h3>
                  <div className="space-y-1.5">
                    {[["khi", "Dog"], ["bila", "Cat"], ["baang", "Cow"], ["rabaq", "Goat"], ["hrta", "Horse"]].map(
                      ([b, e]) => <WordPill key={b} balti={b} english={e} />
                    )}
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-sm mb-4 pb-3 border-b border-border">🍎 Food & Drink</h3>
                  <div className="space-y-1.5">
                    {[
                      ["zachuss", "Food"],
                      ["shaa", "Meat"],
                      ["khorba", "Bread"],
                      ["cha", "Tea"],
                      ["oma / ona", "Milk"],
                      ["kushoo", "Apple"],
                      ["chuli", "Apricot"],
                    ].map(([b, e]) => <WordPill key={b} balti={b} english={e} />)}
                  </div>
                </div>
              </div>
            </section>

            {/* ── 6. Verbs & Tense ── */}
            <section>
              <SectionAnchor id="verbs" label="Verbs & Tense System" icon={BookOpen} accent="green" />

              <p className="text-base leading-relaxed text-foreground/80 mb-8">
                Balti verbs change using suffixes called tense markers. Once you learn these patterns, the grammar
                becomes highly predictable.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { tense: "Present", suffix: "-ed", example: "zer-ed", translation: "tells" },
                  { tense: "Past", suffix: "-s", example: "nu-s", translation: "wept" },
                  { tense: "Future (consonant)", suffix: "-uk / -nuk / -tuk", example: "chat-uk", translation: "will cut" },
                  { tense: "Future (vowel)", suffix: "-in / -ik", example: "jig-tuk", translation: "will fear" },
                ].map((row) => (
                  <div
                    key={row.tense}
                    className="grid grid-cols-[120px_1fr_1fr] md:grid-cols-[160px_1fr_1fr] items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <span className="text-sm font-medium">{row.tense}</span>
                    <code className="font-mono font-bold text-primary bg-primary/8 px-2.5 py-1 rounded-lg text-sm w-fit">
                      {row.suffix}
                    </code>
                    <span className="text-sm text-muted-foreground">
                      <code className="font-mono text-foreground/70">{row.example}</code>
                      <span className="mx-1.5 text-muted-foreground/40">—</span>
                      {row.translation}
                    </span>
                  </div>
                ))}
              </div>

              <Callout color="green" emoji="👉">
                This structured suffix system makes Balti grammar predictable once the patterns are internalised —
                a significant advantage for learners.
              </Callout>
            </section>

            {/* ── 7. Adjectives & Colors ── */}
            <section>
              <SectionAnchor id="adjectives" label="Adjectives & Colors" icon={Sparkles} accent="purple" />

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Colors with swatches */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">🌈 Colors</h3>
                  <div className="space-y-2">
                    {[
                      { en: "White", balti: "karfo", hex: "#f8fafc", border: true },
                      { en: "Black", balti: "naqpo", hex: "#1e293b", border: false },
                      { en: "Red", balti: "marpho", hex: "#ef4444", border: false },
                      { en: "Green", balti: "snunpo", hex: "#22c55e", border: false },
                      { en: "Blue", balti: "nagon po", hex: "#3b82f6", border: false },
                    ].map((item) => (
                      <div
                        key={item.en}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 hover:bg-secondary/40 transition-colors"
                      >
                        <span
                          className={`w-7 h-7 rounded-lg flex-shrink-0 shadow-sm ${item.border ? "border border-border" : ""}`}
                          style={{ backgroundColor: item.hex }}
                          aria-hidden="true"
                        />
                        <code className="font-mono font-semibold text-primary text-sm flex-1">{item.balti}</code>
                        <span className="text-sm text-muted-foreground">{item.en}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Qualities */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">✨ Qualities</h3>
                  <div className="space-y-1.5">
                    {[
                      ["lyakhmo", "Good"],
                      ["rgasha", "Beautiful"],
                      ["shishik", "Bad"],
                      ["chogo", "Big"],
                      ["tshuntse", "Small"],
                    ].map(([b, e]) => <WordPill key={b} balti={b} english={e} />)}
                  </div>
                </div>
              </div>

              {/* Trangmo spotlight */}
              <div className="rounded-2xl border-2 border-purple-300 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-background dark:from-purple-950/20 dark:to-background p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">🌟</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                      Unique Word Spotlight
                    </p>
                    <code className="font-mono font-bold text-2xl text-purple-700 dark:text-purple-300 block mb-2">
                      Trangmo
                    </code>
                    <p className="text-sm text-muted-foreground leading-relaxed m-0">
                      A simple, honest, straightforward person. This single word carries deep cultural meaning
                      about the values Balti society holds dear — directness and integrity as virtues.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 8. Conversations ── */}
            <section>
              <SectionAnchor id="conversations" label="Real Conversations in Balti" icon={MessageCircle} accent="green" />

              <p className="text-base leading-relaxed text-foreground/80 mb-8">
                Put the language to immediate use with these common phrases and responses.
              </p>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">💬 Common Phrases</h3>
              <div className="space-y-2.5 mb-10">
                {[
                  { balti: "Chi hal yu?", english: "Hello / How are you?" },
                  { balti: "Yaanhi?", english: "Polite greeting" },
                  { balti: "Yari mantakhpo chan ju?", english: "What is your name?" },
                  { balti: "Yan garna an ju?", english: "Where are you from?" },
                  { balti: "Yangla Balti ong mana ju?", english: "Do you speak Balti?" },
                ].map((phrase) => (
                  <div
                    key={phrase.balti}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-2xl border border-border bg-card px-5 py-4 hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <code className="font-mono font-bold text-primary text-base sm:text-lg flex-1">{phrase.balti}</code>
                    <span className="text-sm text-muted-foreground sm:text-right">{phrase.english}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">🙏 Responses</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { balti: "Ju / Han", english: "Yes (respectful / informal)" },
                  { balti: "Met", english: "No" },
                  { balti: "Shuqria / Charimo", english: "Thank you" },
                  { balti: "Ñga si Yang laa rgen", english: "I love you" },
                ].map((item) => (
                  <div
                    key={item.balti}
                    className="rounded-2xl border border-border bg-card p-4 hover:shadow-md hover:border-primary/40 transition-all"
                  >
                    <code className="font-mono font-bold text-primary text-lg block mb-1">{item.balti}</code>
                    <span className="text-sm text-muted-foreground">{item.english}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 9. Slang ── */}
            <section>
              <SectionAnchor id="slang" label="Modern Slang (Youth Culture)" icon={Flame} accent="rose" />

              <p className="text-base leading-relaxed text-foreground/80 mb-8">
                Balti is evolving, especially among young people. Slang reflects identity, humor, and social belonging.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { word: "Rozi", meaning: "Friend / buddy", emoji: "👋" },
                  { word: "Apo", meaning: "Boss", emoji: "😎" },
                  { word: "Fungchan", meaning: "Liar", emoji: "🤥" },
                  { word: "Gotita", meaning: "Short-tempered person", emoji: "😤" },
                  { word: "Kick se dug", meaning: "Be careful", emoji: "⚠️" },
                ].map((item) => (
                  <div
                    key={item.word}
                    className="rounded-2xl border border-border bg-card p-5 hover:border-rose-400/50 hover:shadow-md transition-all group"
                  >
                    <span className="text-2xl mb-3 block">{item.emoji}</span>
                    <code className="font-mono font-bold text-rose-600 dark:text-rose-400 text-lg block mb-1 group-hover:scale-105 transition-transform origin-left">
                      {item.word}
                    </code>
                    <span className="text-sm text-muted-foreground">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 10. Strategy ── */}
            <section>
              <SectionAnchor id="strategy" label="Learn Balti the Smart Way" icon={BookOpen} accent="blue" />

              <ol className="space-y-4">
                {[
                  {
                    title: "Practice daily vocabulary",
                    desc: "Even 10–15 minutes per day builds lasting retention over time.",
                    color: "bg-blue-500",
                  },
                  {
                    title: "Learn both ordinary and honorific forms",
                    desc: "Using the correct register is essential to respectful, natural Balti communication.",
                    color: "bg-amber-500",
                  },
                  {
                    title: "Use real phrases in conversation",
                    desc: "Connect with native speakers or contribute to OpenBalti to put words in real context.",
                    color: "bg-green-500",
                  },
                  {
                    title: "Explore cultural meanings behind words",
                    desc: "Words like Trangmo carry values — learning culture alongside language accelerates depth.",
                    color: "bg-purple-500",
                  },
                ].map((step, idx) => (
                  <li
                    key={idx}
                    className="flex gap-5 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-xl ${step.color} text-white flex items-center justify-center font-bold text-sm`}
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-base mb-1">{step.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed m-0">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── 11. Conclusion ── */}
            <section>
              <SectionAnchor id="conclusion" label="Final Thought: Language Is Identity" icon={Mountain} accent="primary" />

              <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src="/images/blog/journey-ahead.jpg"
                  alt="Mountain path symbolising the journey of preserving an endangered language"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <p className="text-lg leading-relaxed text-foreground/90 mb-4">
                Balti is more than communication — it is history, respect, and identity combined. Every word carries
                the weight of a culture that stretches back to ancient Tibet, shaped by trade routes, mountain passes,
                and centuries of living at the roof of the world.
              </p>
              <p className="text-base leading-relaxed text-foreground/80">
                But like many regional languages, Balti faces the risk of fading. That is why every learner,
                every contributor, and every conversation matters. Start small, stay consistent, and be part of the
                community keeping this language alive.
              </p>
            </section>

            {/* ── Article Footer ── */}
            <footer className="pt-10 border-t border-border space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <Link href="/blog" className="text-primary hover:underline flex items-center gap-2 group text-sm font-medium">
                  <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  Back to Blog
                </Link>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" aria-hidden="true" />
                  Share Article
                </Button>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 text-center space-y-4">
                <h3 className="font-bold text-2xl">Ready to Learn More?</h3>
                <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
                  Explore our complete learning resources and join a thriving community of Balti language enthusiasts.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Button asChild size="lg">
                    <Link href="/learn" className="gap-2">
                      <BookOpen className="h-4 w-4" aria-hidden="true" />
                      Explore Learning Guides
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/dictionary">Browse Dictionary</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/community" className="gap-2">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Join Community
                    </Link>
                  </Button>
                </div>
              </div>
            </footer>
          </article>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-6">

              {/* TOC */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5 flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5" /> Contents
                </h2>
                <nav aria-label="Table of contents">
                  <ol className="space-y-0.5 text-sm">
                    {[
                      ["#intro", "Introduction"],
                      ["#pronouns", "Pronouns & Family"],
                      ["#numbers", "Numbers"],
                      ["#vocabulary", "Everyday Vocabulary"],
                      ["#food", "Food & Animals"],
                      ["#verbs", "Verbs & Tenses"],
                      ["#adjectives", "Adjectives & Colors"],
                      ["#conversations", "Conversations"],
                      ["#slang", "Modern Slang"],
                      ["#strategy", "Learning Strategy"],
                      ["#conclusion", "Final Thought"],
                    ].map(([href, label], i) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
                        >
                          <span className="text-[10px] font-mono text-muted-foreground/40 w-4 text-right flex-shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

                            {/* Author */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                    <Image
                      src="/images/team/openbalti-logo.png"
                      alt="OpenBalti Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">OpenBalti Team</h3>
                    <p className="text-xs text-muted-foreground">Language Preservationists</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dedicated to preserving and promoting the Balti language through education and community engagement.
                </p>
              </div>

              {/* Quick stats */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Guide Stats</h2>
                <div className="space-y-3">
                  {[
                    { label: "Vocabulary entries", value: "60+" },
                    { label: "Grammar patterns", value: "4" },
                    { label: "Conversation phrases", value: "9" },
                    { label: "Cultural notes", value: "8" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-bold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}