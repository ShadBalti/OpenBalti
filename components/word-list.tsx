"use client"

import { useState } from "react"
import type { IWord } from "@/models/Word"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, ChevronDown, ChevronUp, History } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface WordListProps {
  words: IWord[]
  direction: "balti-to-english" | "english-to-balti"
  onEdit: (word: IWord) => void
  onDelete: (id: string) => void
  showActions?: boolean
}

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
                <TableHead className="w-[40%]" onClick={() => handleSort(firstColumnField as "balti" | "english")}>
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
                <TableHead className="w-[40%]" onClick={() => handleSort(secondColumnField as "balti" | "english")}>
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
                <TableHead className="w-[20%] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedWords.map((word) => (
                <TableRow key={word._id} className="group">
                  <TableCell className="font-medium">{isBaltiToEnglish ? word.balti : word.english}</TableCell>
                  <TableCell>{isBaltiToEnglish ? word.english : word.balti}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
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
