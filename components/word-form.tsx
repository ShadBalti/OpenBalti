"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Save, X, Loader2 } from "lucide-react"
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

/**
 * A comprehensive form for adding or editing a dictionary word.
 * It includes fields for Balti and English translations, phonetic spelling, categories, dialect, usage notes,
 * related words, difficulty level, and usage examples. The form handles its own state and validation.
 *
 * @param {WordFormProps} props - The component props.
 * @param {IWord | null} props.initialData - The initial data for the form, used for editing an existing word. If null, the form is in 'add' mode.
 * @param {boolean} [props.isSubmitting=false] - A flag to indicate if the form is currently being submitted, disabling the submit button and showing a loader.
 * @param {Function} props.onSubmit - The callback function to execute when the form is submitted with valid data.
 * @param {Function} [props.onCancel] - An optional callback function to handle form cancellation.
 * @returns {JSX.Element} The rendered word form component.
 */
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
    }
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>{initialData ? "Edit Word" : "Add New Word"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="balti" className={errors.balti ? "text-destructive" : ""}>
                Balti Word
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
                placeholder="Enter Balti word"
                className={errors.balti ? "border-destructive" : ""}
              />
              {errors.balti && <p className="text-xs text-destructive mt-1">{errors.balti}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="english" className={errors.english ? "text-destructive" : ""}>
                English Translation
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
                placeholder="Enter English translation"
                className={errors.english ? "border-destructive" : ""}
              />
              {errors.english && <p className="text-xs text-destructive mt-1">{errors.english}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phonetic">Pronunciation Guide (Phonetic)</Label>
            <Input
              id="phonetic"
              value={phonetic}
              onChange={(e) => setPhonetic(e.target.value)}
              placeholder="How to pronounce this word (e.g., bahl-tee)"
            />
            <p className="text-xs text-muted-foreground">Add a phonetic spelling to help with pronunciation</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="categories">Categories / Tags</Label>
            <div className="flex gap-2">
              <Input
                id="categories"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a category (e.g., Food, Family, Nature)"
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
            <Label htmlFor="dialect">Regional Dialect</Label>
            <Input
              id="dialect"
              value={dialect}
              onChange={(e) => setDialect(e.target.value)}
              placeholder="Region where this word is commonly used (e.g., Skardu, Khaplu, Shigar)"
            />
            <p className="text-xs text-muted-foreground">Specify which region of Baltistan this word is used in</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="usageNotes">Usage Notes</Label>
            <Textarea
              id="usageNotes"
              value={usageNotes}
              onChange={(e) => setUsageNotes(e.target.value)}
              placeholder="Cultural context, usage information, or other notes"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Add cultural context or additional information about this word
            </p>
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
            <Label htmlFor="etymology">Etymology (Word Origin)</Label>
            <Textarea
              id="etymology"
              value={etymology}
              onChange={(e) => setEtymology(e.target.value)}
              placeholder="Describe the origin and history of this word"
              rows={2}
            />
            <p className="text-xs text-muted-foreground">
              Explain where this word comes from and its historical context
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="culturalNotes">Cultural Significance</Label>
            <Textarea
              id="culturalNotes"
              value={culturalNotes}
              onChange={(e) => setCulturalNotes(e.target.value)}
              placeholder="Describe the cultural significance and context of this word"
              rows={2}
            />
            <p className="text-xs text-muted-foreground">
              Add information about the cultural importance and context of this word
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="relatedWords">Related Words</Label>
            <div className="flex gap-2">
              <Input
                id="relatedWords"
                value={relatedWordInput}
                onChange={(e) => setRelatedWordInput(e.target.value)}
                onKeyDown={handleRelatedWordKeyDown}
                placeholder="Add a related Balti word"
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
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">Indicates how difficult this word is for language learners</p>
          </div>
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
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {initialData ? "Updating..." : "Adding..."}
              </>
            ) : initialData ? (
              <>
                <Save className="mr-2 h-4 w-4" />
                Update Word
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Add Word
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
