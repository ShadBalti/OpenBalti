import "next-auth"
import type { DefaultSession } from "next-auth"

/**
 * @file next-auth.d.ts
 * @description This file extends the default types provided by NextAuth.js.
 * It adds custom properties to the `Session`, `User`, and `JWT` interfaces
 * to include application-specific data like user `id` and `role`.
 * This ensures that these custom properties are type-safe throughout the application.
 */

declare module "next-auth" {
  /**
   * Extends the default `Session` interface to include custom user properties.
   */
  interface Session {
    user: {
      /** The unique identifier for the user. */
      id: string
      /** The role of the user, determining their permissions. */
      role: string
    } & DefaultSession["user"]
  }

  /**
   * Extends the default `User` interface to include the `role` property.
   */
  interface User {
    /** The role of the user. */
    role?: string
  }
}

declare module "next-auth/jwt" {
  /**
   * Extends the default `JWT` interface to include custom claims.
   */
  interface JWT {
    /** The unique identifier for the user. */
    id: string
    /** The role of the user. */
    role?: string
  }
}
