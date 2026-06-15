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
    <footer className="border-t bg-gradient-to-b from-muted/50 to-background relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-2/5 rounded-full blur-3xl" aria-hidden="true"></div>
      </div>

      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16 relative z-10">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <h3 className="font-semibold text-foreground text-lg">OpenBalti</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Preserving and documenting the Balti language for future generations through community collaboration.
            </p>
            <div className="flex gap-3 mt-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-lg">💬</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-lg">🌍</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                <span className="text-lg">📚</span>
              </div>
            </div>
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
