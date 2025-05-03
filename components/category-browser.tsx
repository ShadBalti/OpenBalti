"use client"

import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CategoryBrowserProps {
  selectedCategory?: string | null
  onCategoryChange?: (category: string | null) => void
  inline?: boolean
}

export default function CategoryBrowser({
  selectedCategory = null,
  onCategoryChange = () => {},
  inline = false,
}: CategoryBrowserProps) {
  const { toast } = useToast()
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/words/categories")
      const result = await response.json()

      if (result.success) {
        setCategories(result.data)
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch categories",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error fetching categories:", error)
      toast({
        title: "Error",
        description: "Failed to fetch categories",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCategoryClick = (category: string) => {
    if (category === selectedCategory) {
      onCategoryChange(null)
    } else {
      onCategoryChange(category)
    }
  }

  if (inline) {
    return (
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Categories</h3>
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            <span>Loading categories...</span>
          </div>
        ) : categories.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No categories available</p>
        )}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Tag className="h-4 w-4" />
          Browse by Category
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            <span>Loading categories...</span>
          </div>
        ) : categories.length > 0 ? (
          <ScrollArea className="h-[120px] pr-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <p className="text-sm text-muted-foreground">No categories available</p>
        )}
      </CardContent>
    </Card>
  )
}
