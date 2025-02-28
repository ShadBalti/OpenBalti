import Header from "@/components/header"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import WordForm from "@/components/word-form"

export default function AddWordPage() {
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
            <h1 className="text-2xl font-bold mb-6">Add New Word</h1>
            <WordForm />
          </div>
        </div>
      </div>
    </main>
  )
}

