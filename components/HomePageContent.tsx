'use client'

import * as Accordion from '@radix-ui/react-accordion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import CommunityStats from '@/components/community-stats'
import { cn } from '@/lib/utils'

export function HomePageContent() {
  return (
    <article
      className="mx-auto max-w-3xl px-4 mt-16 text-muted-foreground dark:text-gray-300"
      itemScope
      itemType="https://schema.org/Article"
    >
      <header className="mb-10">
        <h1 className="text-2xl font-bold text-foreground dark:text-white" itemProp="headline">
          OpenBalti – Free Balti to English Dictionary & Language Learning Tool
        </h1>
        <p className="mt-2 text-sm" itemProp="description">
          Learn Balti online for free. Explore our open-source Balti–English dictionary, community stats, and language preservation tools.
        </p>
      </header>

      {/* Community Stats at the Top */}
      <section aria-labelledby="community-stats" className="mb-10">
        <h2 id="community-stats" className="text-xl font-semibold text-foreground dark:text-white mb-2">
          Community Stats
        </h2>
        <CommunityStats />
      </section>

      <Accordion.Root type="multiple" className="space-y-4" defaultValue={['balti', 'dictionary']}>
        <AccordionItem value="balti" title="What is the Balti Language?">
          <p itemProp="articleBody">
            The <strong>Balti language</strong> is a Tibetic dialect spoken in Baltistan, northern Pakistan. Known for its classical Tibetan roots, it is one of the most preserved ancient languages, rich in phonology and grammar.
          </p>
        </AccordionItem>

        <AccordionItem value="dictionary" title="OpenBalti – Balti to English Dictionary (Free)">
          <p itemProp="articleBody">
            The <strong>OpenBalti Dictionary</strong> is an open-source platform for translating <strong>Balti to English</strong> and <strong>English to Balti</strong>. It's ideal for native speakers, students, researchers, and language enthusiasts.
          </p>
        </AccordionItem>

        <AccordionItem value="importance" title="Why Preserving Balti Matters">
          <ul className="list-disc list-inside" itemProp="articleBody">
            <li>One of the oldest Tibetan dialects still in use</li>
            <li>Vital for safeguarding Baltistan’s cultural heritage</li>
            <li>Spoken in Skardu, Shigar, Kharmang, and Ghanche</li>
            <li>Includes vocabulary unique to Balti</li>
          </ul>
        </AccordionItem>

        <AccordionItem value="learn" title="Learn Balti Online for Free">
          <p itemProp="articleBody">
            Our free platform helps you <strong>learn Balti online</strong> with detailed word meanings, usage tips, and cultural context.
          </p>
        </AccordionItem>

        <AccordionItem value="features" title="Key Features of the OpenBalti Dictionary">
          <ul className="list-disc list-inside" itemProp="articleBody">
            <li>Mobile-first, fast-loading interface</li>
            <li>Live search with tag-based filtering</li>
            <li>Community-submitted words with review process</li>
            <li>Future features: audio pronunciation and native script</li>
          </ul>
        </AccordionItem>

        <AccordionItem value="tech" title="Tech Stack – How We Built OpenBalti">
          <p itemProp="articleBody">
            OpenBalti is built using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, and hosted on Vercel. Explore the source code on{' '}
            <Link href="https://github.com/ShadBalti/openbalti" target="_blank" className="text-primary underline">
              GitHub
            </Link>.
          </p>
        </AccordionItem>

        <AccordionItem value="contribute" title="Help Us Preserve Balti – Contribute!">
          <p itemProp="articleBody">
            You can help document the Balti language by{' '}
            <Link href="/contribute" className="text-primary underline">
              submitting new words
            </Link>, correcting translations, or promoting the project. Your support helps protect an endangered cultural treasure.
          </p>
        </AccordionItem>

        <AccordionItem value="connect" title="Connect with OpenBalti on Social Media">
          <p itemProp="articleBody">
            Follow us on{' '}
            <a href="https://twitter.com/ShadBalti" target="_blank" rel="noreferrer" className="text-primary underline">
              Twitter (@openbalti)
            </a>{' '}
            for language facts, word highlights, and community updates.
          </p>
        </AccordionItem>
      </Accordion.Root>
    </article>
  )
}

function AccordionItem({
  value,
  title,
  children,
}: {
  value: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Accordion.Item value={value} className="border rounded-lg overflow-hidden dark:border-gray-700">
      <Accordion.Header>
        <Accordion.Trigger
          className={cn(
            'w-full flex items-center justify-between px-4 py-3 font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition group'
          )}
        >
          <span>{title}</span>
          <ChevronDown
            className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="px-4 py-3 bg-white dark:bg-gray-900 animate-slideDown">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  )
}
