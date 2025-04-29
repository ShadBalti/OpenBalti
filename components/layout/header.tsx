"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MoonIcon, SunIcon, MenuIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { UserDropdown } from "@/components/auth/user-dropdown"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // After mounting, we can show the theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2 md:hidden" aria-label="Open menu">
                <MenuIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                <Link
                  href="/"
                  className={`transition-colors px-2 py-1 rounded-md hover:bg-muted ${
                    isActive("/") ? "text-primary font-medium" : "text-foreground"
                  }`}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Dictionary
                </Link>
                <Link
                  href="/about"
                  className={`transition-colors px-2 py-1 rounded-md hover:bg-muted ${
                    isActive("/about") ? "text-primary font-medium" : "text-foreground"
                  }`}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  About Balti
                </Link>
                <Link
                  href="/contribute"
                  className={`transition-colors px-2 py-1 rounded-md hover:bg-muted ${
                    isActive("/contribute") ? "text-primary font-medium" : "text-foreground"
                  }`}
                  aria-current={isActive("/contribute") ? "page" : undefined}
                >
                  Contribute
                </Link>
                <Link
                  href="/contributors"
                  className={`transition-colors px-2 py-1 rounded-md hover:bg-muted ${
                    isActive("/contributors") ? "text-primary font-medium" : "text-foreground"
                  }`}
                  aria-current={isActive("/contributors") ? "page" : undefined}
                >
                  Contributors
                </Link>
                <Link
                  href="/review"
                  className={`transition-colors px-2 py-1 rounded-md hover:bg-muted ${
                    isActive("/review") ? "text-primary font-medium" : "text-foreground"
                  }`}
                  aria-current={isActive("/review") ? "page" : undefined}
                >
                  Review
                </Link>
                <Link
                  href="/activity"
                  className={`transition-colors px-2 py-1 rounded-md hover:bg-muted ${
                    isActive("/activity") ? "text-primary font-medium" : "text-foreground"
                  }`}
                  aria-current={isActive("/activity") ? "page" : undefined}
                >
                  Activity Log
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2" aria-label="OpenBalti Dictionary Home">
            <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              OpenBalti
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
          <Link
            href="/"
            className={`transition-colors ${
              isActive("/") ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}
            aria-current={isActive("/") ? "page" : undefined}
          >
            Dictionary
          </Link>
          <Link
            href="/about"
            className={`transition-colors ${
              isActive("/about") ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}
            aria-current={isActive("/about") ? "page" : undefined}
          >
            About Balti
          </Link>
          <Link
            href="/contribute"
            className={`transition-colors ${
              isActive("/contribute") ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}
            aria-current={isActive("/contribute") ? "page" : undefined}
          >
            Contribute
          </Link>
          <Link
            href="/contributors"
            className={`transition-colors ${
              isActive("/contributors") ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}
            aria-current={isActive("/contributors") ? "page" : undefined}
          >
            Contributors
          </Link>
          <Link
            href="/review"
            className={`transition-colors ${
              isActive("/review") ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}
            aria-current={isActive("/review") ? "page" : undefined}
          >
            Review
          </Link>
          <Link
            href="/activity"
            className={`transition-colors ${
              isActive("/activity") ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
            }`}
            aria-current={isActive("/activity") ? "page" : undefined}
          >
            Activity Log
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon
                className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                aria-hidden="true"
              />
              <MoonIcon
                className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                aria-hidden="true"
              />
            </Button>
          )}
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}
