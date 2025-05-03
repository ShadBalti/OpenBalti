import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

export function WordOfTheDayStatic() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            Word of the Day
            <Badge variant="outline" className="ml-2">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {new Date().toLocaleDateString()}
            </Badge>
          </CardTitle>
        </div>
        <CardDescription>Discover a new Balti word every day</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">ཨ་ཡུ་ཀུ</h3>
            <p className="text-lg text-muted-foreground">Hello</p>
            <p className="text-sm text-muted-foreground italic">/a-yu-ku/</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Greeting</Badge>
            <Badge variant="secondary">Common</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-4">
        <Button asChild size="sm" variant="outline">
          <Link href="/word-of-the-day">View Archive</Link>
        </Button>
        <Button asChild size="sm">
          <Link href="/words">
            <ExternalLinkIcon className="mr-2 h-4 w-4" />
            Browse Dictionary
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default WordOfTheDayStatic
