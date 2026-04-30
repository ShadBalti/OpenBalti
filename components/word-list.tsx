"use client"

import { useState } from "react"
import type { IWord } from "@/models/Word"
import { ChevronDown, ChevronUp, GraduationCap } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { cn } from "@/lib/utils"
interface WordListProps {
  words: IWord[]
  direction: "balti-to-english" | "english-to-balti"
  onEdit?: (word: IWord) => void
  onDelete?: (id: string) => void
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
                <TableHead className="w-[45%]" onClick={() => handleSort(firstColumnField as "balti" | "english")}>
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
                <TableHead className="w-[45%]" onClick={() => handleSort(secondColumnField as "balti" | "english")}>
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
                <TableHead className="w-[10%] text-center">Difficulty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedWords.map((word) => (
                <TableRow 
                  key={word._id} 
                  className="hover:bg-accent/50 transition-colors"
                  asChild
                >
                  <Link href={`/word/${word._id}`} className="cursor-pointer">
                    <TableCell className="font-medium">
                      <div>
                        {isBaltiToEnglish ? word.balti : word.english}
                        {word.phonetic && isBaltiToEnglish && (
                          <div className="text-xs text-muted-foreground">/{word.phonetic}/</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{isBaltiToEnglish ? word.english : word.balti}</TableCell>
                    <TableCell className="text-center">
                      {word.difficultyLevel && (
                        <div className="flex items-center justify-center gap-1">
                          <GraduationCap className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground capitalize">{word.difficultyLevel}</span>
                        </div>
                      )}
                    </TableCell>
                  </Link>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
