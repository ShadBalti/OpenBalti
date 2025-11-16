import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata(
  "Page Not Found",
  "The page you are looking for does not exist or has been moved.",
)

/**
 * Renders the 404 "Not Found" page.
 * This component is displayed automatically by Next.js when a requested route does not exist.
 * It provides a user-friendly message and navigation links to help users find their way.
 *
 * @returns {JSX.Element} The rendered 404 page.
 */
export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-8 md:py-12">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Go to Dictionary</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">Learn About Balti</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
