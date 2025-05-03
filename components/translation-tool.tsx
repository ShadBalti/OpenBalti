"use client"

import { useState, useEffect, useRef } from "react"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeftRight, Copy, Share2, Loader2, RotateCw, X, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { IWord } from "@/models/Word"

export default function TranslationTool() {
  const { toast } = useToast()
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [direction, setDirection] = useState<"balti-to-english" | "english-to-balti">("balti-to-english")
  const [isTranslating, setIsTranslating] = useState(false)
  const [dictionary, setDictionary] = useState<IWord[]>([])
  const [isLoadingDictionary, setIsLoadingDictionary] = useState(true)
  const [matchedWords, setMatchedWords] = useState<IWord[]>([])
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const outputRef = useRef<HTMLTextAreaElement>(null)

  // Load dictionary on component mount
  useEffect(() => {
    fetchDictionary()
  }, [])

  // Update matched words when input text changes
  useEffect(() => {
    if (inputText.trim() === "") {
      setMatchedWords([])
      return
    }

    findMatchingWords(inputText)
  }, [inputText, direction, dictionary])

  const fetchDictionary = async () => {
    try {
      setIsLoadingDictionary(true)
      const response = await fetch("/api/words?limit=1000")
      const result = await response.json()

      if (result.success) {
        setDictionary(result.data)
      } else {
        toast({
          title: "Error",
          description: "Failed to load dictionary data",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching dictionary:", error)
      toast({
        title: "Error",
        description: "Failed to load dictionary data",
        variant: "destructive",
      })
    } finally {
      setIsLoadingDictionary(false)
    }
  }

  const findMatchingWords = (text: string) => {
    const words = text.toLowerCase().split(/\s+/)
    const matches: IWord[] = []

    words.forEach((word) => {
      if (word.trim() === "") return

      const matchingWords = dictionary.filter((dictWord) => {
        if (direction === "balti-to-english") {
          return dictWord.balti.toLowerCase().includes(word)
        } else {
          return dictWord.english.toLowerCase().includes(word)
        }
      })

      matchingWords.forEach((match) => {
        if (!matches.some((m) => m._id === match._id)) {
          matches.push(match)
        }
      })
    })

    setMatchedWords(matches)
  }

  const translateText = () => {
    if (inputText.trim() === "") return

    setIsTranslating(true)

    // Simulate translation delay
    setTimeout(() => {
      const translated = inputText

      // Simple word-by-word translation based on dictionary
      const words = inputText.split(/\s+/)
      const translatedWords = words.map((word) => {
        const match = dictionary.find((dictWord) => {
          if (direction === "balti-to-english") {
            return dictWord.balti.toLowerCase() === word.toLowerCase()
          } else {
            return dictWord.english.toLowerCase() === word.toLowerCase()
          }
        })

        if (match) {
          return direction === "balti-to-english" ? match.english : match.balti
        }

        return `[${word}]` // Mark untranslated words
      })

      setOutputText(translatedWords.join(" "))
      setIsTranslating(false)
    }, 500)
  }

  const toggleDirection = () => {
    setDirection((prev) => (prev === "balti-to-english" ? "english-to-balti" : "balti-to-english"))
    setInputText("")
    setOutputText("")
    setMatchedWords([])
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const clearInput = () => {
    setInputText("")
    setOutputText("")
    setMatchedWords([])
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const copyOutput = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText)
      toast({
        title: "Copied",
        description: "Translation copied to clipboard",
      })
    }
  }

  const shareTranslation = async () => {
    if (!inputText || !outputText) return

    const shareText = `
${direction === "balti-to-english" ? "Balti" : "English"}: ${inputText}
${direction === "balti-to-english" ? "English" : "Balti"}: ${outputText}

Translated with OpenBalti Dictionary
`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "OpenBalti Translation",
          text: shareText,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(shareText)
      toast({
        title: "Copied",
        description: "Translation copied to clipboard",
      })
    }
  }

  const handleWordClick = (word: IWord) => {
    const newText = direction === "balti-to-english" ? word.balti : word.english
    setInputText(newText)

    // Automatically translate when a word is clicked
    setTimeout(() => {
      translateText()
    }, 100)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Translation Tool</CardTitle>
              <CardDescription>Translate between Balti and English using our dictionary</CardDescription>
            </div>
            <Button
              onClick={toggleDirection}
              variant="outline"
              className="flex items-center gap-2"
              aria-label={`Switch to ${direction === "balti-to-english" ? "English to Balti" : "Balti to English"} translation`}
            >
              <ArrowLeftRight className="h-4 w-4" />
              <span>{direction === "balti-to-english" ? "Balti → English" : "English → Balti"}</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="input-text" className="text-sm font-medium">
                  {direction === "balti-to-english" ? "Balti" : "English"}
                </label>
                {inputText && (
                  <Button variant="ghost" size="sm" onClick={clearInput} aria-label="Clear input">
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="relative">
                <Textarea
                  id="input-text"
                  ref={inputRef}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Enter ${direction === "balti-to-english" ? "Balti" : "English"} text...`}
                  className="min-h-[150px] resize-none"
                  aria-label={`Enter ${direction === "balti-to-english" ? "Balti" : "English"} text`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="output-text" className="text-sm font-medium">
                  {direction === "balti-to-english" ? "English" : "Balti"}
                </label>
                {outputText && (
                  <Button variant="ghost" size="sm" onClick={copyOutput} aria-label="Copy translation">
                    <Copy className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <Textarea
                id="output-text"
                ref={outputRef}
                value={outputText}
                readOnly
                placeholder={`${direction === "balti-to-english" ? "English" : "Balti"} translation will appear here...`}
                className="min-h-[150px] resize-none bg-muted"
                aria-label={`${direction === "balti-to-english" ? "English" : "Balti"} translation`}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={translateText}
              disabled={!inputText || isTranslating || isLoadingDictionary}
              className="flex-1 max-w-xs mx-auto"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Translating...
                </>
              ) : (
                <>Translate</>
              )}
            </Button>

            {outputText && (
              <Button onClick={shareTranslation} variant="outline" className="flex-1 max-w-xs mx-auto">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            )}
          </div>

          {isLoadingDictionary && (
            <div className="flex justify-center items-center py-4">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              <span>Loading dictionary...</span>
            </div>
          )}

          {matchedWords.length > 0 && (
            <div>
              <Separator className="my-4" />
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Matching Words</h3>
                <div className="flex flex-wrap gap-2">
                  {matchedWords.map((word) => (
                    <Badge
                      key={word._id}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                      onClick={() => handleWordClick(word)}
                    >
                      {direction === "balti-to-english" ? word.balti : word.english}
                      {" → "}
                      {direction === "balti-to-english" ? word.english : word.balti}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" size="sm" asChild>
            <a href="/" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Dictionary
            </a>
          </Button>
          <Button variant="outline" size="sm" onClick={fetchDictionary} disabled={isLoadingDictionary}>
            <RotateCw className={`h-4 w-4 ${isLoadingDictionary ? "animate-spin" : ""}`} />
            <span className="ml-2">Refresh Dictionary</span>
          </Button>
        </CardFooter>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          This translation tool uses the OpenBalti Dictionary for word-by-word translation. Words not found in the
          dictionary will be marked with brackets.
        </p>
      </div>
    </div>
  )
}
