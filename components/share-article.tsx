"use client"

import { Share2, Copy, Check, Mail, MessageCircle, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface ShareArticleProps {
  title: string
  url: string
  description?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  showLabel?: boolean
}

export function ShareArticle({
  title,
  url,
  description,
  variant = "outline",
  size = "default",
  showLabel = true,
}: ShareArticleProps) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      toast({ title: "Link copied to clipboard!" })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({ title: "Failed to copy link", variant: "destructive" })
    }
  }

  const shareOnTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&via=OpenBalti`
    window.open(tweetUrl, "_blank", "width=550,height=420")
  }

  const shareOnFacebook = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(fbUrl, "_blank", "width=550,height=420")
  }

  const shareOnLinkedIn = () => {
    const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(liUrl, "_blank", "width=550,height=420")
  }

  const shareViaEmail = () => {
    const subject = `Check out: ${title}`
    const body = `${description || title}\n\nRead more at: ${url}`
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  const shareViaWhatsApp = () => {
    const text = `${title}\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
  }

  if (!showLabel) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={size} className="gap-2">
            <Share2 className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem onClick={shareOnTwitter} className="gap-2 cursor-pointer">
            <Twitter className="h-4 w-4 text-blue-400" />
            <span>Share on Twitter</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={shareOnFacebook} className="gap-2 cursor-pointer">
            <Facebook className="h-4 w-4 text-blue-600" />
            <span>Share on Facebook</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={shareOnLinkedIn} className="gap-2 cursor-pointer">
            <Linkedin className="h-4 w-4 text-blue-700" />
            <span>Share on LinkedIn</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={shareViaEmail} className="gap-2 cursor-pointer">
            <Mail className="h-4 w-4" />
            <span>Share via Email</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={shareViaWhatsApp} className="gap-2 cursor-pointer">
            <MessageCircle className="h-4 w-4 text-green-500" />
            <span>Share on WhatsApp</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={copyToClipboard} className="gap-2 cursor-pointer">
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy link</span>
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className="gap-2">
          <Share2 className="h-4 w-4" />
          {showLabel && <span>Share</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-semibold">Share this article</div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={shareOnTwitter} className="gap-2 cursor-pointer">
          <Twitter className="h-4 w-4 text-blue-400" />
          <span>Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnFacebook} className="gap-2 cursor-pointer">
          <Facebook className="h-4 w-4 text-blue-600" />
          <span>Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareOnLinkedIn} className="gap-2 cursor-pointer">
          <Linkedin className="h-4 w-4 text-blue-700" />
          <span>LinkedIn</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={shareViaEmail} className="gap-2 cursor-pointer">
          <Mail className="h-4 w-4" />
          <span>Email</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareViaWhatsApp} className="gap-2 cursor-pointer">
          <MessageCircle className="h-4 w-4 text-green-500" />
          <span>WhatsApp</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={copyToClipboard} className="gap-2 cursor-pointer">
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy link</span>
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
