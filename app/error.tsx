"use client"

import ErrorBoundary from "@/components/error-boundary"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"

/**
 * @file app/error.tsx
 * @description This file serves as the global error handler for the Next.js application.
 * It uses a client-side ErrorBoundary component to catch and handle runtime errors,
 * displaying a user-friendly fallback UI instead of a crashed application.
 * The metadata for the error page is also defined here to ensure consistent branding.
 */

export const metadata: Metadata = generateMetadata(
  "Server Error | OpenBalti ",
  "An unexpected error has occurred. Please try again later.",
)

export default ErrorBoundary
