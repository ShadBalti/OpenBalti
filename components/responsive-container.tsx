import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
}

/**
 * Responsive container with mobile-first design
 * Automatically handles padding and max-width based on screen size
 */
export function ResponsiveContainer({
  children,
  className = "",
  size = "md",
  padding = "md",
}: ResponsiveContainerProps) {
  const maxWidthClass = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-full",
  }[size]

  const paddingClass = {
    none: "px-0",
    sm: "px-3 md:px-4",
    md: "px-4 md:px-6 lg:px-8",
    lg: "px-6 md:px-8 lg:px-12",
  }[padding]

  return (
    <div className={cn("w-full mx-auto", maxWidthClass, paddingClass, className)}>
      {children}
    </div>
  )
}

/**
 * Responsive grid for layouts that adapt to screen size
 * Mobile: 1 column, Tablet: 2 columns, Desktop: 3+ columns
 */
interface ResponsiveGridProps {
  children: React.ReactNode
  columns?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  gap?: "sm" | "md" | "lg"
  className?: string
}

export function ResponsiveGrid({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
  className = "",
}: ResponsiveGridProps) {
  const gapClass = {
    sm: "gap-2 md:gap-3 lg:gap-4",
    md: "gap-3 md:gap-4 lg:gap-6",
    lg: "gap-4 md:gap-6 lg:gap-8",
  }[gap]

  const gridClass = cn(
    "grid",
    {
      "grid-cols-1": columns.mobile === 1,
      "grid-cols-2": columns.mobile === 2,
      "grid-cols-3": columns.mobile === 3,
      "grid-cols-4": columns.mobile === 4,
    },
    {
      "md:grid-cols-1": columns.tablet === 1,
      "md:grid-cols-2": columns.tablet === 2,
      "md:grid-cols-3": columns.tablet === 3,
      "md:grid-cols-4": columns.tablet === 4,
    },
    {
      "lg:grid-cols-1": columns.desktop === 1,
      "lg:grid-cols-2": columns.desktop === 2,
      "lg:grid-cols-3": columns.desktop === 3,
      "lg:grid-cols-4": columns.desktop === 4,
      "lg:grid-cols-5": columns.desktop === 5,
      "lg:grid-cols-6": columns.desktop === 6,
    },
    gapClass,
    className
  )

  return <div className={gridClass}>{children}</div>
}

/**
 * Stack component for vertical or horizontal flex layouts
 */
interface StackProps {
  children: React.ReactNode
  direction?: "vertical" | "horizontal" | "auto"
  gap?: "xs" | "sm" | "md" | "lg"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "between" | "around"
  className?: string
}

export function Stack({
  children,
  direction = "vertical",
  gap = "md",
  align = "stretch",
  justify = "start",
  className = "",
}: StackProps) {
  const directionClass =
    direction === "horizontal" ? "flex-row" : direction === "auto" ? "flex-col md:flex-row" : "flex-col"

  const gapClass = {
    xs: "gap-1",
    sm: "gap-2 md:gap-3",
    md: "gap-3 md:gap-4",
    lg: "gap-4 md:gap-6",
  }[gap]

  const alignClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  }[align]

  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
  }[justify]

  return (
    <div className={cn("flex", directionClass, gapClass, alignClass, justifyClass, className)}>
      {children}
    </div>
  )
}

export default ResponsiveContainer
