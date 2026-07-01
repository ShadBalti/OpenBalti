"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface WordScriptForm {
  script: string
  text: string
  isPrimary?: boolean
  transliteration?: string
  notes?: string
}

interface WordDefinition {
  language: string
  text: string
  isPrimary?: boolean
}

interface WordLinguisticDataProps {
  word: {
    partOfSpeech?: string
    phonetic?: string
    scripts?: WordScriptForm[]
    definitions?: WordDefinition[]
    searchTerms?: string[]
    linguisticData?: Record<string, unknown>
  }
}

const SCRIPT_LABELS: Record<string, string> = {
  persoArabic: "Balti (Perso-Arabic)",
  yige: "Balti (Yige)",
  roman: "Roman transliteration",
  ipa: "IPA pronunciation",
}

const LINGUISTIC_LABELS: Record<string, string> = {
  persoArabic: "Balti (Perso-Arabic)",
  yige: "Balti (Yige)",
  ipa: "IPA pronunciation",
  romanTransliteration: "Roman transliteration",
  pronunciation: "Pronunciation",
  verificationStatus: "Verification status",
  verificationNotes: "Verification notes",
}

function humanize(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/^\w/, (char) => char.toUpperCase())
}

function hasText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0
}

function hasAnyLinguisticData(word: WordLinguisticDataProps["word"]) {
  return Boolean(
    word.partOfSpeech ||
      word.phonetic ||
      word.scripts?.length ||
      word.definitions?.length ||
      word.searchTerms?.length ||
      Object.values(word.linguisticData || {}).some(hasText),
  )
}

export function WordLinguisticData({ word }: WordLinguisticDataProps) {
  const linguisticEntries = Object.entries(word.linguisticData || {}).filter(([, value]) => hasText(value))

  if (!hasAnyLinguisticData(word)) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Word Data</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {word.partOfSpeech && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Part of Speech</h3>
              <p className="mt-1 capitalize">{word.partOfSpeech}</p>
            </div>
          )}

          {word.phonetic && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Pronunciation</h3>
              <p className="mt-1">/{word.phonetic}/</p>
            </div>
          )}
        </div>

        {word.definitions && word.definitions.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Definitions</h3>
            <div className="mt-2 space-y-2">
              {word.definitions.map((definition, index) => (
                <div key={`${definition.language}-${index}`} className="rounded-md border p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="capitalize">
                      {definition.language}
                    </Badge>
                    {definition.isPrimary && <Badge variant="secondary">Primary</Badge>}
                  </div>
                  <p className="mt-2">{definition.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {word.scripts && word.scripts.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Scripts & Transliteration</h3>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {word.scripts.map((script, index) => (
                <div key={`${script.script}-${index}`} className="rounded-md border p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{SCRIPT_LABELS[script.script] || humanize(script.script)}</Badge>
                    {script.isPrimary && <Badge variant="secondary">Primary</Badge>}
                  </div>
                  <p className="mt-2 text-lg font-medium">{script.text}</p>
                  {script.transliteration && (
                    <p className="mt-1 text-sm text-muted-foreground">Transliteration: {script.transliteration}</p>
                  )}
                  {script.notes && <p className="mt-1 text-sm text-muted-foreground">{script.notes}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {linguisticEntries.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Linguistic Details</h3>
            <dl className="mt-2 grid gap-3 sm:grid-cols-2">
              {linguisticEntries.map(([key, value]) => (
                <div key={key} className="rounded-md bg-muted p-3">
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {LINGUISTIC_LABELS[key] || humanize(key)}
                  </dt>
                  <dd className="mt-1 text-sm">{String(value)}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {word.searchTerms && word.searchTerms.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Search Terms</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {word.searchTerms.map((term, index) => (
                <Badge key={`${term}-${index}`} variant="secondary">
                  {term}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
