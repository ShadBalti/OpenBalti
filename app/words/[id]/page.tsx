import Header from "@/components/header"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getWordById } from "@/lib/words"
import { notFound } from "next/navigation"

// Prevent static generation
export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export default async function WordPage({ params }: { params: { id: string } }) {
  try {
    const word = await getWordById(params.id)

    if (!word) {
      notFound()
    }

    return (
      <main>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/words" className="flex items-center text-blue-600 mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Words
            </Link>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold">{word.word}</h1>
                  <p className="text-lg text-gray-500">{word.transliteration}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{word.partOfSpeech}</span>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Meaning</h2>
                    <p className="text-gray-700">{word.meaning}</p>

                    {word.example && (
                      <div className="mt-4">
                        <h2 className="text-xl font-semibold mb-2">Example</h2>
                        <p className="text-gray-700">{word.example}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    {word.pronunciation && (
                      <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Pronunciation</h2>
                        <p className="text-gray-700">{word.pronunciation}</p>
                      </div>
                    )}

                    {word.etymology && (
                      <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Etymology</h2>
                        <p className="text-gray-700">{word.etymology}</p>
                      </div>
                    )}
                  </div>
                </div>

                {word.relatedWords && word.relatedWords.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-3">Related Words</h2>
                    <ul className="list-disc list-inside text-gray-700">
                      {word.relatedWords.map((related, index) => (
                        <li key={index}>{related}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  } catch (error) {
    console.error("Error fetching word:", error)
    return (
      <main>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Error</h1>
            <p className="text-red-500">Failed to load word details. Please try again later.</p>
            <Link href="/words" className="btn-primary mt-4 inline-block">
              Back to Words
            </Link>
          </div>
        </div>
      </main>
    )
  }
}

