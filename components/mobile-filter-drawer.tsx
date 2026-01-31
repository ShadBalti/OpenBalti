"use client"

import { useState, useEffect } from "react"
import { ChevronDown, X, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"

interface FilterOption {
  label: string
  value: string
  count?: number
}

interface FilterGroup {
  title: string
  key: string
  options: FilterOption[]
  selectedValue: string | null
}

interface MobileFilterDrawerProps {
  filterGroups: FilterGroup[]
  activeFiltersCount: number
  onFilterChange: (key: string, value: string | null) => void
  onClearAll: () => void
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

/**
 * A mobile-optimized filter drawer component that provides an intuitive interface
 * for applying filters on small screens. Features include collapsible filter groups,
 * visual feedback for selected filters, and easy clearing of all filters.
 */
export default function MobileFilterDrawer({
  filterGroups,
  activeFiltersCount,
  onFilterChange,
  onClearAll,
  isOpen = false,
  onOpenChange,
}: MobileFilterDrawerProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())
  const [localFilters, setLocalFilters] = useState<Record<string, string | null>>({})

  // Initialize local filters from props
  useEffect(() => {
    const filters: Record<string, string | null> = {}
    filterGroups.forEach((group) => {
      filters[group.key] = group.selectedValue
    })
    setLocalFilters(filters)
  }, [filterGroups])

  const toggleGroup = (key: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedGroups(newExpanded)
  }

  const handleFilterSelect = (key: string, value: string) => {
    const newValue = localFilters[key] === value ? null : value
    setLocalFilters((prev) => ({
      ...prev,
      [key]: newValue,
    }))
    onFilterChange(key, newValue)
  }

  const handleClearAll = () => {
    setLocalFilters({})
    filterGroups.forEach((group) => {
      onFilterChange(group.key, null)
    })
    onClearAll()
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="relative flex items-center gap-2 bg-white hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="text-sm font-medium">Filters</span>
          {activeFiltersCount > 0 && (
            <Badge
              variant="secondary"
              className="ml-1 h-6 w-6 p-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-bold text-xs"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="h-[90vh] rounded-t-2xl p-4 overflow-y-auto"
        aria-describedby="filter-drawer-description"
      >
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold">Filter Dictionary</SheetTitle>
          <SheetDescription id="filter-drawer-description" className="text-base">
            Customize your search with filters
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-4 pb-24">
          {filterGroups.map((group) => (
            <div key={group.key} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleGroup(group.key)}
                className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 transition-colors"
                aria-expanded={expandedGroups.has(group.key)}
                aria-controls={`filter-group-${group.key}`}
              >
                <span className="font-semibold text-sm">{group.title}</span>
                <div className="flex items-center gap-2">
                  {localFilters[group.key] && (
                    <Badge variant="default" className="text-xs">
                      1 selected
                    </Badge>
                  )}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedGroups.has(group.key) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {expandedGroups.has(group.key) && (
                <div id={`filter-group-${group.key}`} className="p-4 space-y-2 bg-white dark:bg-slate-950">
                  {group.options.map((option) => {
                    const isSelected = localFilters[group.key] === option.value
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleFilterSelect(group.key, option.value)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          isSelected
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
                            : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100"
                        }`}
                        role="checkbox"
                        aria-checked={isSelected}
                      >
                        <span className="font-medium text-sm">{option.label}</span>
                        {option.count && (
                          <span className="text-xs text-muted-foreground dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                            {option.count}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <SheetFooter className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex gap-3">
          <Button
            variant="outline"
            onClick={handleClearAll}
            disabled={activeFiltersCount === 0}
            className="flex-1 h-10"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Clear all
          </Button>
          <SheetClose asChild>
            <Button className="flex-1 h-10">Apply filters</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
