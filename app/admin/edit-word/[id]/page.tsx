import Header from "@/components/header"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import WordForm from "@/components/word-form"

// This would normally come from the database based on the ID
const getWordById = (id: string) => {
  const allWords = [
    {
      id: "1",
      word: "ཆུ",
      transliteration: "chu",
      meaning: "water",
      partOfSpeech: "noun",
      example: "ཆུ འཐུང་ (chu athung) - Drink water",
      pronunciation: "/tʃuː/",
      etymology: "From Classical Tibetan: ཆུ (chu)",
      relatedWords: ["ཆུ་མིག (chumik) - spring", "ཆུ་ཚན (chutsen) - hot spring"],
    },
    {
      id: "2",
      word: "རི",
      transliteration: "ri",
      meaning: "mountain",
      partOfSpeech: "noun",
      example: "རི མཐོན་པོ་ (ri thönpo) - High mountain",
      pronunciation: "/ri/",
      etymology: "From Classical Tibetan: རི (ri)",
      relatedWords: ["རི་མགོ (rigo) - mountain top", "རི་ཁྲོད (ritrö) - hermitage"],
    },
  ]

  return allWords.find((word) => word.id === id)
}

export default function EditWordPage({ params }: { params: { id: string } }) {
  const word = getWordById(params.id)

  if (!word) {
    return (
      <main>
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Word not found</h1>
            <Link href="/admin" className="btn-primary">
              Back to Admin
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/admin" className="flex items-center text-blue-600 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to Admin
          </Link>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6">Edit Word: {word.word}</h1>
            <WordForm initialData={word} />
          </div>
        </div>
      </div>
    </main>
  )
}

