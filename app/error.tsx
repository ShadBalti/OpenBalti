"use client"

import ErrorBoundary from "@/components/error-boundary"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"

export const metadata: Metadata = generateMetadata(
  "Server Error | OpenBalti ",
  "An unexpected error has occurred. Please try again later.",
)

export default ErrorBoundary
