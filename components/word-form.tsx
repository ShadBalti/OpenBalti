"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Save, X, Loader2, ChevronDown, ChevronUp, CheckCircle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { IWord } from "@/models/Word"

interface WordFormProps {
  initialData: IWord | null
  isSubmitting?: boolean
  onSubmit: (data: {
    balti: string
    english: string
    phonetic?: string
    categories?: string[]
    dialect?: string
    usageNotes?: string
    relatedWords?: string[]
    difficultyLevel?: "beginner" | "intermediate" | "advanced"
    examples?: Array<{ balti: string; english: string }>
    etymology?: string
    culturalNotes?: string
  }) => void
  onCancel?: () => void
}

const DIALECT_OPTIONS = [
  { value: "eastern", label: "Eastern Dialect (Chorbat, Nubra Valley)" },
  { value: "central", label: "Central Dialect (Khaplu Valley)" },
  { value: "western", label: "Western Dialects (Skardu, Shigar, Rondu – prestige dialect: Skardu)" },
  { value: "southern", label: "Southern Dialect (Upper Kharmang, Kargil)" },
  { value: "all", label: "All Dialects" },
]

export default function WordForm({ initialData, onSubmit, onCancel, isSubmitting = false }: WordFormProps) {
  const [balti, setBalti] = useState("")
  const [english, setEnglish] = useState("")
  const [phonetic, setPhonetic] = useState("")
  const [categoryInput, setCategoryInput] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [dialect, setDialect] = useState("")
  const [usageNotes, setUsageNotes] = useState("")
  const [relatedWordInput, setRelatedWordInput] = useState("")
  const [relatedWords, setRelatedWords] = useState<string[]>([])
  const [difficultyLevel, setDifficultyLevel] = useState<"beginner" | "intermediate" | "advanced">("intermediate")
  const [exampleBaltiInput, setExampleBaltiInput] = useState("")
  const [exampleEnglishInput, setExampleEnglishInput] = useState("")
  const [examples, setExamples] = useState<Array<{ balti: string; english: string }>>([])
  const [etymology, setEtymology] = useState("")
  const [culturalNotes, setCulturalNotes] = useState("")
  const [errors, setErrors] = useState({ balti: "", english: "" })
  const [expandAdvanced, setExpandAdvanced] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  useEffect(() => {
    if (initialData) {
      setBalti(initialData.balti)
      setEnglish(initialData.english)
      setPhonetic(initialData.phonetic || "")
      setCategories(initialData.categories || [])
      setDialect(initialData.dialect || "")
      setUsageNotes(initialData.usageNotes || "")
      setRelatedWords(initialData.relatedWords || [])
      setDifficultyLevel(initialData.difficultyLevel || "intermediate")
      setExamples(initialData.examples || [])
      setEtymology(initialData.etymology || "")
      setCulturalNotes(initialData.culturalNotes || "")
      setErrors({ balti: "", english: "" })
      setExpandAdvanced(true)
    } else {
      setBalti("")
      setEnglish("")
      setPhonetic("")
      setCategories([])
      setDialect("")
      setUsageNotes("")
      setRelatedWords([])
      setDifficultyLevel("intermediate")
      setExamples([])
      setEtymology("")
      setCulturalNotes("")
      setErrors({ balti: "", english: "" })
      setExpandAdvanced(false)
    }
    setSuccessMessage(false)
  }, [initialData])

  const validate = () => {
    const newErrors = { balti: "", english: "" }
    let isValid = true

    if (!balti.trim()) {
      newErrors.balti = "Balti word is required"
      isValid = false
    }

    if (!english.trim()) {
      newErrors.english = "English translation is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    onSubmit({
      balti: balti.trim(),
      english: english.trim(),
      phonetic: phonetic.trim() || undefined,
      categories: categories.length > 0 ? categories : undefined,
      dialect: dialect.trim() || undefined,
      usageNotes: usageNotes.trim() || undefined,
      relatedWords: relatedWords.length > 0 ? relatedWords : undefined,
      difficultyLevel,
      examples: examples.length > 0 ? examples : undefined,
      etymology: etymology.trim() || undefined,
      culturalNotes: culturalNotes.trim() || undefined,
    })

    if (!initialData) {
      // Show success message
      setSuccessMessage(true)
      
      // Clear form after submission only if adding a new word
      setBalti("")
      setEnglish("")
      setPhonetic("")
      setCategories([])
      setDialect("")
      setUsageNotes("")
      setRelatedWords([])
      setDifficultyLevel("intermediate")
      setExamples([])
      setEtymology("")
      setCulturalNotes("")
      setExpandAdvanced(false)

      // Hide success message after 5 seconds
      setTimeout(() => setSuccessMessage(false), 10000)
    }
  }

  const addCategory = () => {
    if (categoryInput.trim() && !categories.includes(categoryInput.trim())) {
      setCategories([...categories, categoryInput.trim()])
      setCategoryInput("")
    }
  }

  const removeCategory = (category: string) => {
    setCategories(categories.filter((c) => c !== category))
  }

  const addRelatedWord = () => {
    if (relatedWordInput.trim() && !relatedWords.includes(relatedWordInput.trim())) {
      setRelatedWords([...relatedWords, relatedWordInput.trim()])
      setRelatedWordInput("")
    }
  }

  const removeRelatedWord = (word: string) => {
    setRelatedWords(relatedWords.filter((w) => w !== word))
  }

  const addExample = () => {
    if (exampleBaltiInput.trim() && exampleEnglishInput.trim()) {
      setExamples([
        ...examples,
        {
          balti: exampleBaltiInput.trim(),
          english: exampleEnglishInput.trim(),
        },
      ])
      setExampleBaltiInput("")
      setExampleEnglishInput("")
    }
  }

  const removeExample = (index: number) => {
    setExamples(examples.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && categoryInput.trim()) {
      e.preventDefault()
      addCategory()
    }
  }

  const handleRelatedWordKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && relatedWordInput.trim()) {
      e.preventDefault()
      addRelatedWord()
    }
  }

  if (successMessage && !initialData) {
    return (
      <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
        <CardContent className="pt-8 pb-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">Word added!</h3>
              <p className="text-green-800 dark:text-green-200 mb-1">You&apos;ve helped preserve Balti 🙌</p>
              <p className="text-sm text-green-700 dark:text-green-300">Your contribution makes a real difference</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button 
                onClick={() => setSuccessMessage(false)} 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Add another
              </Button>
              <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-300">
                Improve this word
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="space-y-2">
          <CardTitle>{initialData ? "Edit Word" : "Add New Word"}</CardTitle>
          {!initialData && (
            <p className="text-base text-primary font-medium">
              Add one word. Help save a language ❤️
            </p>
          )}
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {/* Main inputs section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Essential Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="balti" className={errors.balti ? "text-destructive" : ""}>
                  Balti Word <span className="text-destructive" aria-label="required">*</span>
                </Label>
                <Input
                  id="balti"
                  value={balti}
                  onChange={(e) => {
                    setBalti(e.target.value)
                    if (e.target.value.trim()) {
                      setErrors((prev) => ({ ...prev, balti: "" }))
                    }
                  }}
                  placeholder="e.g., چھا (chhá)"
                  className={errors.balti ? "border-destructive" : ""}
                  required
                  aria-required="true"
                  aria-describedby={errors.balti ? "balti-error" : undefined}
                />
                {errors.balti && <p id="balti-error" className="text-xs text-destructive mt-1" role="alert">{errors.balti}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="english" className={errors.english ? "text-destructive" : ""}>
                  English Translation <span className="text-destructive" aria-label="required">*</span>
                </Label>
                <Input
                  id="english"
                  value={english}
                  onChange={(e) => {
                    setEnglish(e.target.value)
                    if (e.target.value.trim()) {
                      setErrors((prev) => ({ ...prev, english: "" }))
                    }
                  }}
                  placeholder="e.g., tea"
                  className={errors.english ? "border-destructive" : ""}
                  required
                  aria-required="true"
                  aria-describedby={errors.english ? "english-error" : undefined}
                />
                {errors.english && <p id="english-error" className="text-xs text-destructive mt-1" role="alert">{errors.english}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phonetic">Pronunciation (How to say it)</Label>
              <Input
                id="phonetic"
                value={phonetic}
                onChange={(e) => setPhonetic(e.target.value)}
                placeholder="e.g., cha (rhymes with 'spa')"
                aria-label="Pronunciation guide"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dialect">Dialect Used In</Label>
              <Select value={dialect} onValueChange={setDialect}>
                <SelectTrigger id="dialect">
                  <SelectValue placeholder="Select which dialect uses this word" />
                </SelectTrigger>
                <SelectContent>
                  {DIALECT_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Advanced details toggle */}
          <div>
            <button
              type="button"
              onClick={() => setExpandAdvanced(!expandAdvanced)}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {expandAdvanced ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
              Add more details (optional)
            </button>
          </div>

          {/* Advanced details section */}
          {expandAdvanced && (
            <div className="space-y-6 pt-4 border-t">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Additional Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="categories">Categories / Tags</Label>
                  <div className="flex gap-2">
                    <Input
                      id="categories"
                      value={categoryInput}
                      onChange={(e) => setCategoryInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="e.g., Food, Family, Nature"
                    />
                    <Button type="button" onClick={addCategory} variant="outline" size="sm">
                      Add
                    </Button>
                  </div>
                  {categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {categories.map((category, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {category}
                          <button
                            type="button"
                            onClick={() => removeCategory(category)}
                            className="ml-1 rounded-full hover:bg-muted p-0.5"
                            aria-label={`Remove category: ${category}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="usageNotes">Usage & Context</Label>
                  <Textarea
                    id="usageNotes"
                    value={usageNotes}
                    onChange={(e) => setUsageNotes(e.target.value)}
                    placeholder="How is this word used? When do people say it? Cultural context?"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Usage Examples</Label>
                  <div className="space-y-2">
                    <Input
                      value={exampleBaltiInput}
                      onChange={(e) => setExampleBaltiInput(e.target.value)}
                      placeholder="Example in Balti"
                      aria-label="Example in Balti"
                    />
                    <Input
                      value={exampleEnglishInput}
                      onChange={(e) => setExampleEnglishInput(e.target.value)}
                      placeholder="English translation of example"
                      aria-label="English translation of example"
                    />
                    <Button type="button" onClick={addExample} variant="outline" size="sm">
                      Add Example
                    </Button>
                  </div>
                  {examples.length > 0 && (
                    <div className="space-y-2 mt-2">
                      {examples.map((example, index) => (
                        <div key={index} className="p-3 bg-muted rounded-md">
                          <p className="font-medium text-sm">{example.balti}</p>
                          <p className="text-sm text-muted-foreground">{example.english}</p>
                          <Button
                            type="button"
                            onClick={() => removeExample(index)}
                            variant="ghost"
                            size="sm"
                            className="mt-2"
                            aria-label={`Remove example ${index + 1}`}
                          >
                            <X className="h-3 w-3 mr-1" />
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="etymology">Word Origin & History</Label>
                  <Textarea
                    id="etymology"
                    value={etymology}
                    onChange={(e) => setEtymology(e.target.value)}
                    placeholder="Where does this word come from? What's its history?"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="culturalNotes">Cultural Significance</Label>
                  <Textarea
                    id="culturalNotes"
                    value={culturalNotes}
                    onChange={(e) => setCulturalNotes(e.target.value)}
                    placeholder="Why is this word important to Balti culture? What does it mean to the community?"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="relatedWords">Related Words</Label>
                  <div className="flex gap-2">
                    <Input
                      id="relatedWords"
                      value={relatedWordInput}
                      onChange={(e) => setRelatedWordInput(e.target.value)}
                      onKeyDown={handleRelatedWordKeyDown}
                      placeholder="Add related Balti words"
                    />
                    <Button type="button" onClick={addRelatedWord} variant="outline" size="sm">
                      Add
                    </Button>
                  </div>
                  {relatedWords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {relatedWords.map((word, index) => (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          {word}
                          <button
                            type="button"
                            onClick={() => removeRelatedWord(word)}
                            className="ml-1 rounded-full hover:bg-muted p-0.5"
                            aria-label={`Remove related word: ${word}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficultyLevel">Difficulty Level</Label>
                  <Select
                    value={difficultyLevel}
                    onValueChange={(value) => setDifficultyLevel(value as "beginner" | "intermediate" | "advanced")}
                  >
                    <SelectTrigger id="difficultyLevel">
                      <SelectValue placeholder="Select difficulty level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner - Common everyday words</SelectItem>
                      <SelectItem value="intermediate">Intermediate - Less common words</SelectItem>
                      <SelectItem value="advanced">Advanced - Specialized or rare words</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {onCancel ? (
            <Button type="button" variant="outline" onClick={onCancel}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
          ) : (
            <div></div>
          )}
          <Button type="submit" disabled={isSubmitting} size="lg" className="min-w-fit">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {initialData ? "Updating..." : "Contributing..."}
              </>
            ) : initialData ? (
              <>
                <Save className="mr-2 h-4 w-4" />
                Update Word
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Contribute Word
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
