import Header from "@/components/header"
import Link from "next/link"
import { Plus, Database } from "lucide-react"
import AdminWordList from "@/components/admin-word-list"

export default function AdminPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex gap-2">
              <Link href="/admin/add-word" className="btn-primary flex items-center">
                <Plus size={16} className="mr-2" />
                Add New Word
              </Link>
              <Link
                href="/seed-database"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
              >
                <Database size={16} className="mr-2" />
                Seed Database
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Manage Words</h2>
            <AdminWordList />
          </div>
        </div>
      </div>
    </main>
  )
}

