"use client"

import { useState, useEffect, useRef } from "react"
import { useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import { Search, X, Save, Trash2, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Suggestion {
  _id: string
  balti: string
  english: string
}

interface SearchPreset {
  _id?: string
  name: string
  query: string
  filters: {
    category?: string
    dialect?: string
    difficulty?: string
    feedback?: string
  }
}

interface AdvancedSearchProps {
  onSearch: (query: string, filters: any, fuzzy: boolean) => void
  isLoading?: boolean
}

export default function AdvancedSearch({ onSearch, isLoading = false }: AdvancedSearchProps) {
  const { data: session } = useSession()
  const { toast } = useToast()

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [fuzzyEnabled, setFuzzyEnabled] = useState(false)
  const [presets, setPresets] = useState<SearchPreset[]>([])
  const [showPresetDialog, setShowPresetDialog] = useState(false)
  const [presetName, setPresetName] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    dialects: [] as string[],
    difficulties: [] as string[],
    feedback: [] as string[],
  })

  const suggestionsRef = useRef<HTMLDivElement>(null)
  const debounceTimer = useRef<NodeJS.Timeout>()

  // Fetch autocomplete suggestions
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSuggestions([])
      return
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current)

    debounceTimer.current = setTimeout(async () => {
      try {
        const response = await fetch(`/api/words/search/autocomplete?q=${encodeURIComponent(searchQuery)}&limit=8`)
        const result = await response.json()

        if (result.success) {
          setSuggestions(result.data)
          setShowSuggestions(true)
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error)
      }
    }, 300)

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current)
    }
  }, [searchQuery])

  // Fetch user's saved presets
  useEffect(() => {
    if (session?.user?.id) {
      fetchPresets()
    }
  }, [session])

  const fetchPresets = async () => {
    try {
      const response = await fetch(`/api/users/${session?.user?.id}/search-presets`)
      const result = await response.json()

      if (result.success) {
        setPresets(result.data)
      }
    } catch (error) {
      console.error("Error fetching presets:", error)
    }
  }

  const handleSearch = () => {
    onSearch(searchQuery, selectedFilters, fuzzyEnabled)
    setShowSuggestions(false)
  }

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setSearchQuery(suggestion.balti)
    setShowSuggestions(false)
  }

  const handleSavePreset = async () => {
    if (!presetName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a preset name",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch(`/api/users/${session?.user?.id}/search-presets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: presetName,
          query: searchQuery,
          filters: {
            category: selectedFilters.categories[0],
            dialect: selectedFilters.dialects[0],
            difficulty: selectedFilters.difficulties[0],
            feedback: selectedFilters.feedback[0],
          },
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Search preset saved",
        })
        setPresetName("")
        setShowPresetDialog(false)
        fetchPresets()
      }
    } catch (error) {
      console.error("Error saving preset:", error)
      toast({
        title: "Error",
        description: "Failed to save preset",
        variant: "destructive",
      })
    }
  }

  const handleLoadPreset = (preset: SearchPreset) => {
    setSearchQuery(preset.query)
    setSelectedFilters({
      categories: preset.filters.category ? [preset.filters.category] : [],
      dialects: preset.filters.dialect ? [preset.filters.dialect] : [],
      difficulties: preset.filters.difficulty ? [preset.filters.difficulty] : [],
      feedback: preset.filters.feedback ? [preset.filters.feedback] : [],
    })
  }

  const handleDeletePreset = async (presetId: string | undefined) => {
    if (!presetId) return

    try {
      const response = await fetch(`/api/users/${session?.user?.id}/search-presets?presetId=${presetId}`, {
        method: "DELETE",
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Success",
          description: "Preset deleted",
        })
        fetchPresets()
      }
    } catch (error) {
      console.error("Error deleting preset:", error)
      toast({
        title: "Error",
        description: "Failed to delete preset",
        variant: "destructive",
      })
    }
  }

  const toggleFilter = (filterType: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterType]
      if (current.includes(value)) {
        return {
          ...prev,
          [filterType]: current.filter((v) => v !== value),
        }
      } else {
        return {
          ...prev,
          [filterType]: [...current, value],
        }
      }
    })
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search words..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSuggestions([])
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {showSuggestions && suggestions.length > 0 && (
              <div
                ref={suggestionsRef}
                className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50"
              >
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion._id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 hover:bg-accent text-sm"
                  >
                    <div className="font-medium">{suggestion.balti}</div>
                    <div className="text-xs text-muted-foreground">{suggestion.english}</div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button onClick={handleSearch} disabled={isLoading}>
            Search
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <Button variant={fuzzyEnabled ? "default" : "outline"} size="sm" onClick={() => setFuzzyEnabled(!fuzzyEnabled)}>
          Fuzzy Match
        </Button>

        {session && (
          <>
            <Button variant="outline" size="sm" onClick={() => setShowPresetDialog(true)}>
              <Save className="h-4 w-4 mr-1" />
              Save Search
            </Button>

            {presets.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ChevronDown className="h-4 w-4 mr-1" />
                    Presets ({presets.length})
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {presets.map((preset) => (
                    <div key={preset._id} className="flex items-center justify-between px-2 py-1 hover:bg-accent">
                      <DropdownMenuItem onClick={() => handleLoadPreset(preset)} className="flex-1">
                        {preset.name}
                      </DropdownMenuItem>
                      <button
                        onClick={() => handleDeletePreset(preset._id)}
                        className="p-1 hover:bg-destructive/20 rounded"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </>
        )}
      </div>

      {Object.values(selectedFilters).some((arr) => arr.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {selectedFilters.categories.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
              <button onClick={() => toggleFilter("categories", cat)} className="ml-1">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedFilters.dialects.map((dial) => (
            <Badge key={dial} variant="secondary">
              {dial}
              <button onClick={() => toggleFilter("dialects", dial)} className="ml-1">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedFilters.difficulties.map((diff) => (
            <Badge key={diff} variant="secondary">
              {diff}
              <button onClick={() => toggleFilter("difficulties", diff)} className="ml-1">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {selectedFilters.feedback.map((fb) => (
            <Badge key={fb} variant="secondary">
              {fb}
              <button onClick={() => toggleFilter("feedback", fb)} className="ml-1">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <Dialog open={showPresetDialog} onOpenChange={setShowPresetDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Search Preset</DialogTitle>
            <DialogDescription>Give this search a name to save it for later use</DialogDescription>
          </DialogHeader>
          <Input
            placeholder="e.g., Common Verbs, Advanced Words"
            value={presetName}
            onChange={(e) => setPresetName(e.target.value)}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPresetDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSavePreset}>Save Preset</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
