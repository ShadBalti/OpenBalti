"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Facebook, Link as LinkIcon, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ShareWidgetProps {
  title?: string
  description?: string
  url?: string
}

export default function ShareWidget({
  title = "Join OpenBalti",
  description = "Help preserve and grow the Balti language",
  url: propUrl,
}: ShareWidgetProps) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)
  const [url, setUrl] = useState(propUrl || "")

  useEffect(() => {
    // Priority order: prop URL > environment variable > window location
    if (propUrl) {
      setUrl(propUrl)
    } else if (typeof window !== "undefined") {
      // Get production URL if available, otherwise use window location
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
      if (siteUrl) {
        setUrl(`${siteUrl}/community`)
      } else {
        // Fallback to current window location
        setUrl(window.location.href)
      }
    }
  }, [propUrl])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url || "")
    setCopied(true)
    toast({
      description: "Link copied to clipboard!",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `${title} - ${description}\n\nJoin the community: ${url}`
    )
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/?text=${text}`, "_blank")
    }
  }

  const handleFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(title)}`
    if (typeof window !== "undefined") {
      window.open(fbUrl, "_blank", "width=600,height=400")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Share the Community</CardTitle>
        <CardDescription>Invite friends to join OpenBalti</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">{title}</p>
            <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button
              variant="outline"
              onClick={handleWhatsApp}
              className="justify-start gap-2 hover:bg-green-50 dark:hover:bg-green-900/20"
            >
              <MessageCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">WhatsApp</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleFacebook}
              className="justify-start gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              <Facebook className="h-4 w-4 text-blue-600" />
              <span className="text-sm">Facebook</span>
            </Button>

            <Button
              variant="outline"
              onClick={handleCopyLink}
              className="justify-start gap-2"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <LinkIcon className="h-4 w-4" />
                  <span className="text-sm">Copy Link</span>
                </>
              )}
            </Button>
          </div>

          <div className="p-3 bg-muted rounded-lg">
            <p className="text-xs font-medium mb-2 text-muted-foreground">Share URL</p>
            <input
              type="text"
              value={url}
              readOnly
              className="w-full text-xs bg-background border border-input rounded px-2 py-1.5 text-muted-foreground"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
