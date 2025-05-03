import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function WordsPageSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dictionary</CardTitle>
        <CardDescription>Browse and search for Balti words and their translations</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
        </div>

        <div>
          <div className="flex space-x-1 mb-4">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-24" />
          </div>

          <div className="space-y-4">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <Skeleton className="h-6 w-32 mb-1" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="flex space-x-1">
                      <Skeleton className="h-6 w-16" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-9 w-32" />
                </div>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default WordsPageSkeleton
