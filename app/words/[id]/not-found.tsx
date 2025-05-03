import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function WordNotFound() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Word Not Found</CardTitle>
            <CardDescription>
              The word you're looking for doesn't exist or has been removed from the dictionary.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-10 w-10 text-muted-foreground"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </div>
            <p className="text-center text-muted-foreground mb-6">
              The word you're trying to access may have been deleted or never existed. Please check the URL and try
              again.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">Back to Dictionary</Link>
            </Button>
            <Button asChild>
              <Link href="/contribute">Add a New Word</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
