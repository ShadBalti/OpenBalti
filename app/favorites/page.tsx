import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import FavoritesClient from "./client"

export const metadata = {
  title: "My Favorites - OpenBalti Dictionary",
  description: "View and manage your favorite Balti words",
}

export default function FavoritesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Favorites</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Your personal collection of saved Balti words
          </p>
        </div>
        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-12 w-full max-w-sm mx-auto" />
              <Skeleton className="h-64 w-full" />
            </div>
          }
        >
          <FavoritesClient />
        </Suspense>
      </div>
    </div>
  )
}
