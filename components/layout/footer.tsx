import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} OpenBalti. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex gap-4">
            <li>
              <Link
                href="https://github.com/openbalti/dictionary"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
