import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    learning: [
      { label: "Dictionary", href: "/dictionary" },
      { label: "Learn Balti", href: "/learn" },
      { label: "Learning Roadmap", href: "/learning-roadmap" },
      { label: "Get Started", href: "/get-started" },
      { label: "Resources", href: "/resources" },
    ],
    community: [
      { label: "Contribute", href: "/contribute" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Leaderboard", href: "/leaderboard" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "License", href: "/license" },
    ],
  }

  return (
    <footer className="border-t bg-muted/40" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">OpenBalti</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preserving and documenting the Balti language for future generations through community collaboration.
            </p>
          </div>

          {/* Learning Links */}
          <nav aria-label="Learning resources">
            <h3 className="font-semibold text-foreground mb-4">Learning</h3>
            <ul className="space-y-3">
              {footerLinks.learning.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Community Links */}
          <nav aria-label="Community">
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal & Social Links */}
          <nav aria-label="Legal and social">
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-border">
                <Link
                  href="https://github.com/ShadBalti/OpenBalti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} OpenBalti. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with passion for language preservation
          </p>
        </div>
      </div>
    </footer>
  )
}
