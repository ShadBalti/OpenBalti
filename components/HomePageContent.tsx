'use client'

import * as Accordion from '@radix-ui/react-accordion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import CommunityStats from '@/components/community-stats'
import { cn } from '@/lib/utils'

export function HomePageContent() {
  return (
    <section className="prose mx-auto max-w-3xl text-muted-foreground mt-16">
      <Accordion.Root
        type="multiple"
        className="space-y-4"
        defaultValue={['balti', 'dictionary']}
      >
        <AccordionItem value="balti" title="What is the Balti Language?">
          <p>
            The <strong>Balti language</strong> is a Tibetic language spoken in the scenic mountains of Baltistan, a region in northern Pakistan. It is considered one of the most preserved forms of classical Tibetan, retaining ancient phonology and grammar.
          </p>
        </AccordionItem>

        <AccordionItem value="dictionary" title="Explore the OpenBalti Digital Dictionary">
          <p>
            <strong>OpenBalti Dictionary</strong> is a free and open-source platform to <strong>translate Balti to English</strong> and <strong>English to Balti</strong>. Built for learners, speakers, and culture enthusiasts.
          </p>
        </AccordionItem>

        <AccordionItem value="importance" title="Why Balti Matters">
          <ul className="list-disc list-inside">
            <li>One of the oldest spoken Tibetan dialects</li>
            <li>Crucial for preserving Baltistan’s identity</li>
            <li>Still spoken in Skardu, Shigar, Kharmang, and Ghanche</li>
            <li>Unique vocabulary not found in other dialects</li>
          </ul>
        </AccordionItem>

        <AccordionItem value="learn" title="Learn Balti Online for Free">
          <p>
            OpenBalti helps you <strong>learn Balti online</strong> with meanings, usage, and historical context.
          </p>
        </AccordionItem>

        <AccordionItem value="features" title="Features of the OpenBalti Dictionary">
          <ul className="list-disc list-inside">
            <li>Fast and responsive UI</li>
            <li>Real-time word search and filtering</li>
            <li>Community submissions and reviews</li>
            <li>Plans for audio and sentence examples</li>
            <li>Future support for Roman and native script</li>
          </ul>
        </AccordionItem>

        <AccordionItem value="tech" title="Technology Behind OpenBalti">
          <p>
            Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. Hosted on Vercel. Check out the code on{' '}
            <Link href="https://github.com/ShadBalti/openbalti" target="_blank" className="text-primary underline">
              GitHub
            </Link>.
          </p>
        </AccordionItem>

        <AccordionItem value="contribute" title="Contribute to Language Preservation">
          <p>
            <Link href="/contribute" className="text-primary underline">
              Submit words
            </Link>, fix definitions, or share the platform to help preserve Balti.
          </p>
        </AccordionItem>

        <AccordionItem value="stats" title="Community Stats">
          <CommunityStats />
        </AccordionItem>

        <AccordionItem value="connect" title="Stay Connected">
          <p>
            Follow us on{' '}
            <a href="https://twitter.com/ShadBalti" target="_blank" rel="noreferrer" className="text-primary underline">
              @openbalti
            </a>{' '}
            for updates and word highlights.
          </p>
        </AccordionItem>
      </Accordion.Root>
    </section>
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
    <Accordion.Item value={value} className="border rounded-lg overflow-hidden">
      <Accordion.Header>
        <Accordion.Trigger
          className={cn(
            'w-full flex items-center justify-between px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200 transition group'
          )}
        >
          <span>{title}</span>
          <ChevronDown
            className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="px-4 py-3 bg-white animate-slideDown">
        {children}
      </Accordion.Content>
    </Accordion.Item>
  )
}