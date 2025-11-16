import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, Share2, BookOpen } from "lucide-react"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(
  "Contribute to OpenBalti",
  "Help preserve and document the Balti language by contributing to the OpenBalti dictionary project.",
)

/**
 * Renders the "Contribute" page, which outlines the various ways users can contribute to the OpenBalti project.
 * It includes sections for adding words, reviewing entries, making technical contributions, and sharing the project.
 *
 * @returns {JSX.Element} The rendered "Contribute" page.
 */
export default function ContributePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contribute to OpenBalti</h1>
          <p className="text-muted-foreground">Help us preserve and document the Balti language</p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>
            The OpenBalti Dictionary is a community-driven project that relies on contributions from people like you.
            Whether you're a native speaker, a linguist, or simply interested in language preservation, there are many
            ways you can help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Add New Words</span>
              </CardTitle>
              <CardDescription>Contribute to the dictionary by adding new words and translations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                If you know Balti words that aren't in our dictionary yet, you can add them directly through our
                interface. Each contribution helps make the dictionary more comprehensive.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/">
                  <span>Add Words to Dictionary</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                  aria-hidden="true"
                >
                  <path d="m9 11-6 6v3h9l3-3"></path>
                  <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path>
                </svg>
                <span>Review and Edit</span>
              </CardTitle>
              <CardDescription>Help ensure accuracy by reviewing and editing existing entries</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Review existing dictionary entries for accuracy and completeness. If you find errors or have suggestions
                for improvement, you can edit entries directly.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/review">
                  <span>Review Dictionary</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Technical Contributions</span>
              </CardTitle>
              <CardDescription>Help improve the OpenBalti platform itself</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                If you have technical skills, you can contribute to the development of the OpenBalti platform. We
                welcome contributions to our codebase, including bug fixes, new features, and improvements to the user
                interface.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href="https://github.com/openbalti/dictionary" target="_blank" rel="noopener noreferrer">
                  <span>GitHub Repository</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>Spread the Word</span>
              </CardTitle>
              <CardDescription>Help us reach more people by sharing the project</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                One of the simplest ways to contribute is by sharing the OpenBalti Dictionary with others who might be
                interested. The more people who know about and use the dictionary, the more successful our preservation
                efforts will be.
              </p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <Link
                  href="https://twitter.com/intent/tweet?text=Check%20out%20the%20OpenBalti%20Dictionary%20project%20-%20helping%20preserve%20the%20Balti%20language!&url=https://openbalti.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Share on Twitter</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="mailto:?subject=OpenBalti%20Dictionary&body=Check%20out%20the%20OpenBalti%20Dictionary%20project%20at%20https://openbalti.org">
                  <span>Share by Email</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Contact Us</span>
            </CardTitle>
            <CardDescription>Get in touch with the OpenBalti team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions, suggestions, or would like to contribute in other ways, please don't hesitate to
              reach out to us. We're always looking for new collaborators and supporters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="mailto:contact@openbalti.org">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Email Us</span>
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/about">
                  <span>Learn More About Balti</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            OpenBalti is an open-source project dedicated to preserving and promoting the Balti language.
            <br />
            Join us in our mission to document and revitalize this important cultural heritage.
          </p>
        </div>
      </div>
    </div>
  )
}
