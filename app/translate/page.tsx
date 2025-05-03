import type { Metadata } from "next"
import TranslationTool from "@/components/translation-tool"

export const metadata: Metadata = {
  title: "Translation Tool - OpenBalti Dictionary",
  description: "Translate between Balti and English using the OpenBalti Dictionary translation tool.",
  openGraph: {
    title: "Translation Tool - OpenBalti Dictionary",
    description: "Translate between Balti and English using the OpenBalti Dictionary translation tool.",
    type: "website",
  },
}

export default function TranslatePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">OpenBalti Translation Tool</h1>
          <p className="text-muted-foreground">
            Translate between Balti and English using our community-built dictionary
          </p>
        </div>

        <TranslationTool />
      </div>
    </div>
  )
}
