"use client"

import type React from "react"

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"
import { ProfileCompletionReminder } from "@/components/profile/profile-completion-reminder"

// Export the component as a named export
export function SessionProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider>
      {children}
      <ProfileCompletionReminder />
    </NextAuthSessionProvider>
  )
}

// Also export as default for backward compatibility
export default function AuthSessionProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}
