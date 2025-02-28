import Header from "@/components/header"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SeedDatabaseButton from "@/components/seed-database-button"

export default function SeedDatabasePage() {
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
            <h1 className="text-2xl font-bold mb-6">Seed Database</h1>

            <p className="mb-4 text-gray-700">
              This will add sample Balti words to your database. This is useful for testing or to get started quickly.
            </p>

            <SeedDatabaseButton />
          </div>
        </div>
      </div>
    </main>
  )
}

