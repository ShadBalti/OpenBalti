import Header from "@/components/header"
import SearchBar from "@/components/search-bar"
import Link from "next/link"
import { Search } from "lucide-react"
import { searchWords } from "@/lib/words"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""
  const results = query ? await searchWords(query) : []

  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Search Results</h1>
          <SearchBar />

          <div className="mt-8">
            {query ? (
              <>
                <p className="mb-4 text-gray-600">
                  Found {results.length} results for "{query}"
                </p>

                {results.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {results.map((word) => (
                      <Link key={word._id} href={`/words/${word._id}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-2xl font-bold">{word.word}</h3>
                              <p className="text-sm text-gray-500">{word.transliteration}</p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {word.partOfSpeech}
                            </span>
                          </div>
                          <p className="mt-3 text-gray-700">{word.meaning}</p>
                          {word.example && (
                            <p className="mt-2 text-sm text-gray-600">
                              <span className="font-medium">Example:</span> {word.example}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Search size={48} className="mx-auto text-gray-300 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">No results found</h2>
                    <p className="text-gray-500">Try searching for a different word or check your spelling</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h2 className="text-2xl font-bold text-gray-700">Enter a search term</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

