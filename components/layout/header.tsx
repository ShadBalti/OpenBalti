"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { UserDropdown } from "@/components/auth/user-dropdown"
import { useSession } from "next-auth/react"
import { BookOpen, Info, Menu, X, BookOpenText } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { SkipLink } from "@/components/layout/skip-link"

export function Header() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navItems = [
    { href: "/dictionary", label: "Dictionary", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { href: "/learn", label: "Learn", icon: <BookOpenText className="h-4 w-4 mr-2" /> },
    { href: "/blog", label: "Blog", icon: <BookOpenText className="h-4 w-4 mr-2" /> },
    { href: "/resources", label: "Resources", icon: <BookOpenText className="h-4 w-4 mr-2" /> },
    { href: "/about", label: "About", icon: <Info className="h-4 w-4 mr-2" /> },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SkipLink />
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="OpenBalti Logo" width={32} height={32} />
            <span className="font-bold hidden md:inline-block">OpenBalti</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="mx-6 hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "text-sm font-medium transition-colors px-3 py-2",
                pathname === item.href
                  ? "text-foreground bg-secondary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/20",
              )}
            >
              <Link href={item.href}>
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <UserDropdown />
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-transparent"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container grid gap-y-1 py-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className={cn(
                  "justify-start text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground bg-secondary/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/20",
                )}
                onClick={closeMobileMenu}
              >
                <Link href={item.href}>
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
