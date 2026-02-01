"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BookOpen, BookMarked, Heart, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSession } from "next-auth/react"

export function MobileBottomNav() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dictionary", label: "Dictionary", icon: BookOpen },
    { href: "/learn", label: "Learn", icon: BookMarked },
    { href: "/favorites", label: "Saved", icon: Heart },
    { href: session ? "/profile" : "/auth/signin", label: session ? "Profile" : "Sign In", icon: User },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t border-border"
      aria-label="Mobile navigation"
    >
      <div className="container px-0 flex justify-around h-16 items-center max-w-none">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center h-full flex-1 gap-1 px-2 py-2",
                "transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                active
                  ? "text-primary border-t-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileBottomNav
