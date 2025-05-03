"use client"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Shield, AlertTriangle, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface FeedbackFilterProps {
  onFilterChange: (filter: string | null) => void
  activeFilter: string | null
}

export default function FeedbackFilter({ onFilterChange, activeFilter }: FeedbackFilterProps) {
  const filters = [
    { id: "useful", label: "Most Useful", icon: <ThumbsUp className="h-4 w-4 mr-2" /> },
    { id: "trusted", label: "Most Trusted", icon: <Shield className="h-4 w-4 mr-2" /> },
    { id: "needsReview", label: "Needs Review", icon: <AlertTriangle className="h-4 w-4 mr-2" /> },
  ]

  const handleFilterClick = (filterId: string) => {
    if (activeFilter === filterId) {
      onFilterChange(null)
    } else {
      onFilterChange(filterId)
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <div className="flex items-center mr-2">
        <span className="text-sm font-medium mr-2">Filter by feedback:</span>
      </div>
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilterClick(filter.id)}
          className="flex items-center"
        >
          {filter.icon}
          {filter.label}
        </Button>
      ))}
      {activeFilter && (
        <Badge variant="outline" className="flex items-center gap-1">
          Active filter
          <Button variant="ghost" size="icon" onClick={() => onFilterChange(null)} className="h-4 w-4 p-0 ml-1">
            <X className="h-3 w-3" />
            <span className="sr-only">Clear filter</span>
          </Button>
        </Badge>
      )}
    </div>
  )
}
