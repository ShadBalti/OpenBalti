"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, MessageSquare, Lightbulb, Share2 } from "lucide-react"

export default function ContributionActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Take Action</CardTitle>
        <CardDescription>Contribute to the Balti language community</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/contribute">
            <Button variant="outline" className="w-full justify-start h-auto p-4 flex flex-col items-start gap-2 hover:bg-green-50 dark:hover:bg-green-900/20">
              <div className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-green-600" />
                <span className="font-semibold">Add a Word</span>
              </div>
              <span className="text-xs text-muted-foreground">Contribute new Balti words</span>
            </Button>
          </Link>

          <Button variant="outline" className="w-full justify-start h-auto p-4 flex flex-col items-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">Suggest Fix</span>
            </div>
            <span className="text-xs text-muted-foreground">Suggest corrections</span>
          </Button>

          <Button variant="outline" className="w-full justify-start h-auto p-4 flex flex-col items-start gap-2 hover:bg-purple-50 dark:hover:bg-purple-900/20">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-600" />
              <span className="font-semibold">Comment</span>
            </div>
            <span className="text-xs text-muted-foreground">Share your thoughts</span>
          </Button>

          <Button variant="outline" className="w-full justify-start h-auto p-4 flex flex-col items-start gap-2 hover:bg-orange-50 dark:hover:bg-orange-900/20">
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-orange-600" />
              <span className="font-semibold">Invite Friend</span>
            </div>
            <span className="text-xs text-muted-foreground">Share the community</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
