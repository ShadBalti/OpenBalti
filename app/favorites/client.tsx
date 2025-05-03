"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import FavoritesList from "@/components/favorites-list"

export default function FavoritesClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full max-w-sm mx-auto" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  return <FavoritesList />
}
