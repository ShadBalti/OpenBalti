import Header from "@/components/header"
import SearchBar from "@/components/search-bar"
import WordList from "@/components/word-list"
import Link from "next/link"
import { Book, SearchIcon, Plus } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <div className="max-w-4xl mx-auto mt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Balti Language Dictionary</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the rich vocabulary of the Balti language with our comprehensive dictionary
          </p>
        </div>

        <SearchBar />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
            <SearchIcon className="w-10 h-10 text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Search Words</h2>
            <p className="text-gray-600 mb-4">Find Balti words and their meanings quickly with our search feature</p>
            <Link href="/search" className="text-blue-600 hover:text-blue-800 font-medium">
              Start searching →
            </Link>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-100">
            <Book className="w-10 h-10 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Browse Dictionary</h2>
            <p className="text-gray-600 mb-4">Explore our complete collection of Balti words and phrases</p>
            <Link href="/words" className="text-green-600 hover:text-green-800 font-medium">
              Browse all words →
            </Link>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg shadow-sm border border-purple-100">
            <Plus className="w-10 h-10 text-purple-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Contribute</h2>
            <p className="text-gray-600 mb-4">Help expand our dictionary by adding new Balti words and meanings</p>
            <Link href="/admin/add-word" className="text-purple-600 hover:text-purple-800 font-medium">
              Add new words →
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Recent Words</h2>
          <WordList />
        </div>
      </div>
    </main>
  )
}

