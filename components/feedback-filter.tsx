"use client"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Shield, AlertTriangle, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FeedbackFilterProps {
  onFilterChange?: (filter: string | null) => void
  activeFilter?: string | null
  selectedFeedback?: string | null
  onFeedbackChange?: (filter: string | null) => void
  inline?: boolean
}

/**
 * Renders a set of buttons that allow users to filter a list of words based on community feedback.
 * Users can select a filter (e.g., 'Most Useful', 'Most Trusted') to apply it and click the same filter again to clear it.
 *
 * @param {FeedbackFilterProps} props - The component props.
 * @param {(filter: string | null) => void} props.onFilterChange - A callback function that is invoked when the filter selection changes.
 * @param {string | null} props.activeFilter - The currently active filter.
 * @returns {JSX.Element} The rendered feedback filter component.
 */
export default function FeedbackFilter({
  onFilterChange,
  activeFilter,
  selectedFeedback,
  onFeedbackChange,
  inline = false,
}: FeedbackFilterProps) {
  const currentFilter = selectedFeedback ?? activeFilter ?? null
  const handleChange = onFeedbackChange ?? onFilterChange ?? (() => undefined)
  const filters = [
    { id: "useful", label: "Most Useful", icon: <ThumbsUp className="h-4 w-4 mr-2" /> },
    { id: "trusted", label: "Most Trusted", icon: <Shield className="h-4 w-4 mr-2" /> },
    { id: "needsReview", label: "Needs Review", icon: <AlertTriangle className="h-4 w-4 mr-2" /> },
  ]

  const handleFilterClick = (filterId: string) => {
    if (currentFilter === filterId) {
      handleChange(null)
    } else {
      handleChange(filterId)
    }
  }

  return (
    <div className={`flex flex-wrap gap-2 ${inline ? "" : "mb-4"}`}>
      <div className="flex items-center mr-2">
        <span className="text-sm font-medium mr-2">Filter by feedback:</span>
      </div>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={currentFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilterClick(filter.id)}
          className="flex items-center"
        >
          {filter.icon}
          {filter.label}
        </Button>
      ))}
      {currentFilter && (
        <Badge variant="outline" className="flex items-center gap-1">
          Active filter
          <Button variant="ghost" size="icon" onClick={() => handleChange(null)} className="h-4 w-4 p-0 ml-1">
            <X className="h-3 w-3" />
            <span className="sr-only">Clear filter</span>
          </Button>
        </Badge>
      )}
    </div>
  )
}
