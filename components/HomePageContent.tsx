import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePageContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Contribute to the Dictionary</CardTitle>
          <CardDescription>Help preserve the Balti language by contributing words and translations</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The OpenBalti Dictionary is a community-driven project aimed at preserving and promoting the Balti language.
            You can contribute by adding new words, improving existing translations, or reviewing submissions.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/contribute">Start Contributing</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>About the Project</CardTitle>
          <CardDescription>Learn more about the OpenBalti Dictionary project</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The OpenBalti Dictionary project was created to document and preserve the Balti language, a Tibetic language
            spoken in the Baltistan region. Our goal is to create a comprehensive digital resource for learners and
            speakers.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default HomePageContent
