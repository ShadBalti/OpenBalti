"use client"

import { useState } from "react"
import type { IWord } from "@/models/Word"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, ChevronDown, ChevronUp, History, Eye, GraduationCap } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import WordDetail from "@/components/word-detail"
import FeedbackBadges from "@/components/feedback-badges"

interface WordListProps {
  words: IWord[]
  direction: "balti-to-english" | "english-to-balti"
  onEdit: (word: IWord) => void
  onDelete: (id: string) => void
  showActions?: boolean
}

/**
 * Renders a sortable and interactive list of dictionary words in a table format.
 * It supports both Balti-to-English and English-to-Balti directions, allows sorting by either language,
 * and provides actions to view, edit, or delete words.
 *
 * @param {WordListProps} props - The component props.
 * @param {IWord[]} props.words - An array of word objects to display.
 * @param {"balti-to-english" | "english-to-balti"} props.direction - The translation direction to display.
 * @param {(word: IWord) => void} props.onEdit - Callback function to handle editing a word.
 * @param {(id: string) => void} props.onDelete - Callback function to handle deleting a word.
 * @param {boolean} [props.showActions=true] - Whether to show the edit and delete action buttons.
 * @returns {JSX.Element} The rendered word list component.
 */
export default function WordList({ words, direction, onEdit, onDelete, showActions = true }: WordListProps) {
  const [sortField, setSortField] = useState<"balti" | "english">("balti")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [selectedWord, setSelectedWord] = useState<IWord | null>(null)

  const handleSort = (field: "balti" | "english") => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const sortedWords = [...words].sort((a, b) => {
    const fieldA = a[sortField].toLowerCase()
    const fieldB = b[sortField].toLowerCase()

    if (sortDirection === "asc") {
      return fieldA.localeCompare(fieldB)
    } else {
      return fieldB.localeCompare(fieldA)
    }
  })

  if (words.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No words found</CardTitle>
          <CardDescription>
            No words match your search criteria. Try a different search term or add a new word.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Start by adding your first word to the dictionary!</p>
            <div className="flex justify-center">
              <Badge variant="outline" className="text-muted-foreground">
                {direction === "balti-to-english" ? "Balti → English" : "English → Balti"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (selectedWord) {
    return (
      <div className="space-y-4">
        <Button variant="outline" onClick={() => setSelectedWord(null)} className="mb-2">
          Back to word list
        </Button>
        <WordDetail word={selectedWord} />
      </div>
    )
  }

  const isBaltiToEnglish = direction === "balti-to-english"
  const firstColumnHeader = isBaltiToEnglish ? "Balti" : "English"
  const secondColumnHeader = isBaltiToEnglish ? "English" : "Balti"
  const firstColumnField = isBaltiToEnglish ? "balti" : "english"
  const secondColumnField = isBaltiToEnglish ? "english" : "balti"

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Dictionary Entries</CardTitle>
          <Badge variant="outline">
            {words.length} {words.length === 1 ? "word" : "words"}
          </Badge>
        </div>
        <CardDescription>
          Showing words in {isBaltiToEnglish ? "Balti to English" : "English to Balti"} order
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[35%]" onClick={() => handleSort(firstColumnField as "balti" | "english")}>
                  <div className="flex items-center cursor-pointer hover:text-primary transition-colors">
                    {firstColumnHeader}
                    {sortField === firstColumnField &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      ))}
                  </div>
                </TableHead>
                <TableHead className="w-[35%]" onClick={() => handleSort(secondColumnField as "balti" | "english")}>
                  <div className="flex items-center cursor-pointer hover:text-primary transition-colors">
                    {secondColumnHeader}
                    {sortField === secondColumnField &&
                      (sortDirection === "asc" ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      ))}
                  </div>
                </TableHead>
                <TableHead className="w-[15%]">Categories</TableHead>
                <TableHead className="w-[15%]">Feedback</TableHead>
                <TableHead className="w-[15%] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedWords.map((word) => (
                <TableRow key={word._id} className="group">
                  <TableCell className="font-medium">
                    <div>
                      {isBaltiToEnglish ? word.balti : word.english}
                      {word.phonetic && isBaltiToEnglish && (
                        <div className="text-xs text-muted-foreground">/{word.phonetic}/</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{isBaltiToEnglish ? word.english : word.balti}</TableCell>
                  <TableCell>
                    {word.categories && word.categories.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {word.categories.slice(0, 2).map((category, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                        {word.categories.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{word.categories.length - 2}
                          </Badge>
                        )}
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-xs">None</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <FeedbackBadges feedbackStats={word.feedbackStats} size="sm" />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {word.difficultyLevel && (
                        <span className="flex items-center mr-2">
                          <GraduationCap className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-xs text-muted-foreground capitalize">{word.difficultyLevel}</span>
                        </span>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedWord(word)}
                        aria-label="View word details"
                        className="h-8 w-8 text-muted-foreground hover:text-primary"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        aria-label="View word history"
                        className="h-8 w-8 text-muted-foreground hover:text-primary"
                      >
                        <Link href={`/words/${word._id}/history`}>
                          <History className="h-4 w-4" />
                        </Link>
                      </Button>
                      {showActions && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(word)}
                            aria-label="Edit word"
                            className="h-8 w-8 text-muted-foreground hover:text-primary"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onDelete(word._id)}
                            aria-label="Delete word"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
