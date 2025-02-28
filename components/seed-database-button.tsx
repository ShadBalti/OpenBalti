"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SeedDatabaseButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; message?: string; count?: number } | null>(null)
  const router = useRouter()

  const handleSeed = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch("/api/seed")
      const data = await response.json()

      setResult(data)

      if (data.success) {
        setTimeout(() => {
          router.push("/admin")
          router.refresh()
        }, 3000)
      }
    } catch (error) {
      console.error("Error seeding database:", error)
      setResult({ success: false, message: "An error occurred while seeding the database." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <button onClick={handleSeed} disabled={isLoading} className="btn-primary disabled:opacity-70">
        {isLoading ? "Seeding Database..." : "Seed Database with Sample Words"}
      </button>

      {result && (
        <div
          className={`mt-4 p-4 rounded-md ${result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
        >
          <p>{result.message}</p>
          {result.success && result.count && result.count > 0 && (
            <p className="mt-2">Successfully added {result.count} words. Redirecting to admin page...</p>
          )}
        </div>
      )}
    </div>
  )
}

