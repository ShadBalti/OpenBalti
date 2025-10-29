"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { UserDropdown } from "@/components/auth/user-dropdown"
import { useSession } from "next-auth/react"
import { Bookmark, BookOpen, Info, Menu, Users, Medal, X } from "lucide-react"
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
    { href: "/", label: "Dictionary", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { href: "/about", label: "About", icon: <Info className="h-4 w-4 mr-2" /> },
    { href: "/contributors", label: "Contributors", icon: <Users className="h-4 w-4 mr-2" /> },
    { href: "/leaderboard", label: "leaderboard", icon: <Medal className="h-4 w-4 mr-2" /> },
    ...(session ? [{ href: "/favorites", label: "Favorites", icon: <Bookmark className="h-4 w-4 mr-2" /> }] : []),
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <SkipLink />
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="OpenBalti Logo" width={32} height={32} />
            <span className="font-bold hidden md:inline-block">OpenBalti</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="mx-6 hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Link href={item.href}>
                <div className="flex items-center">
                  {item.icon}
                  {item.label}
                </div>
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserDropdown />
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="container grid gap-y-2 py-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className={cn(
                  "justify-start text-sm font-medium transition-colors",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
                onClick={closeMobileMenu}
              >
                <Link href={item.href}>
                  <div className="flex items-center">
                    {item.icon}
                    {item.label}
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
