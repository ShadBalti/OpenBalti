"use client"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

/**
 * A wrapper around `next-themes`'s `ThemeProvider` to provide theme switching functionality (e.g., light/dark mode)
 * to the application. It should be used to wrap the root layout of the application.
 *
 * @param {ThemeProviderProps} props - The props for the theme provider, passed directly to `next-themes`.
 * @param {React.ReactNode} props.children - The child components that will have access to the theme context.
 * @returns {JSX.Element} The `NextThemesProvider` wrapping the application's children.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
