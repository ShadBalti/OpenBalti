import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Scale, Code, Users, Shield, BookOpen, Github, Mail, Globe, FileCode, Award } from "lucide-react"

export const metadata = generateMetadata(
  "License | OpenBalti - Open Source Balti Language Dictionary",
  "OpenBalti is released under the MIT License. Learn about our open-source licensing, contribution guidelines, and how you can use or modify our code.",
  {
    keywords: [
      "OpenBalti license",
      "MIT license",
      "open source",
      "Balti dictionary license",
      "contribute to OpenBalti",
    ],
  },
)

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground">License</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">License & Open Source</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            OpenBalti is proudly open source. Our code is freely available for use, modification, and distribution under
            the MIT License.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: April 30, 2025</p>
        </div>

        {/* Open Source Philosophy */}
        <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-2xl p-6 md:p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Our Open Source Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Language preservation is a collective endeavor that belongs to everyone. By making OpenBalti open
                source, we ensure that the tools for preserving the Balti language remain freely accessible to the
                global community. We believe in transparency, collaboration, and the power of community-driven
                development to create lasting impact.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-2">
              <Award className="w-5 h-5 text-green-500" />
            </div>
            <p className="font-semibold">MIT License</p>
            <p className="text-xs text-muted-foreground">Permissive & Free</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-2">
              <Github className="w-5 h-5 text-blue-500" />
            </div>
            <p className="font-semibold">GitHub</p>
            <p className="text-xs text-muted-foreground">Public Repository</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-purple-500" />
            </div>
            <p className="font-semibold">Community</p>
            <p className="text-xs text-muted-foreground">Contributions Welcome</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-5 h-5 text-orange-500" />
            </div>
            <p className="font-semibold">Documentation</p>
            <p className="text-xs text-muted-foreground">Well Documented</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          {/* Section 1 - MIT License */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                1
              </span>
              The MIT License
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The MIT License is one of the most permissive and widely used open-source licenses. It allows you to use,
              copy, modify, merge, publish, distribute, sublicense, and even sell copies of the software with minimal
              restrictions.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto font-mono text-sm leading-relaxed">
              <pre className="whitespace-pre-wrap">{`MIT License

Copyright (c) 2025 Dilshad Hussain (ShadBalti)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}</pre>
            </div>
          </section>

          {/* Section 2 - What You Can Do */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                2
              </span>
              What You Can Do
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Under the MIT License, you are free to:</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <FileCode className="w-4 h-4" />
                  Use Commercially
                </h4>
                <p className="text-sm text-muted-foreground">
                  Use the software for commercial purposes, including building products or services based on it.
                </p>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Code className="w-4 h-4" />
                  Modify
                </h4>
                <p className="text-sm text-muted-foreground">
                  Modify the source code to suit your needs, create derivative works, and customize freely.
                </p>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Users className="w-4 h-4" />
                  Distribute
                </h4>
                <p className="text-sm text-muted-foreground">
                  Distribute copies of the original or modified software to others.
                </p>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Scale className="w-4 h-4" />
                  Sublicense
                </h4>
                <p className="text-sm text-muted-foreground">
                  Grant sublicenses to third parties under the same or different terms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - Requirements */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                3
              </span>
              Requirements
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The only requirement is that you include the original copyright notice and license text in any copy of the
              software or substantial portion of it:
            </p>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h4 className="font-medium mb-2 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                <Shield className="w-4 h-4" />
                Attribution Requirement
              </h4>
              <p className="text-sm text-muted-foreground">
                Include the copyright notice and permission notice in all copies or substantial portions of the
                Software. This ensures proper credit is given to the original authors and contributors.
              </p>
            </div>
          </section>

          {/* Section 4 - Dictionary Content */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                4
              </span>
              Dictionary Content License
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While the OpenBalti source code is under the MIT License, the dictionary content (words, definitions,
              translations, examples) has different considerations:
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Community Contributions:</strong> Dictionary entries contributed by users are subject to the
                  license granted in our Terms of Use. Contributors retain ownership but grant OpenBalti a license to
                  use and distribute the content.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Educational Use:</strong> The dictionary content is freely available for personal,
                  educational, and non-commercial research purposes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Commercial Use:</strong> If you wish to use the dictionary content for commercial purposes,
                  please contact us to discuss licensing arrangements.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Attribution:</strong> We appreciate attribution when using our dictionary content, though it
                  is not strictly required for non-commercial use.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 5 - Contributions */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                5
              </span>
              Contributing to OpenBalti
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We welcome contributions from developers, linguists, native speakers, and anyone passionate about
              preserving the Balti language.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2">Code Contributions</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Submit bug fixes, new features, or improvements via pull requests on GitHub.
                </p>
                <a
                  href="https://github.com/ShadBalti/OpenBalti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2">Dictionary Contributions</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Add new words, improve definitions, or provide example sentences directly through the platform.
                </p>
                <Link
                  href="/contribute"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <BookOpen className="w-4 h-4" />
                  Learn More
                </Link>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              By contributing code to OpenBalti, you agree that your contributions will be released under the same MIT
              License. You retain copyright of your work while granting the project permission to use, modify, and
              distribute your contributions.
            </p>
          </section>

          {/* Section 6 - Branding */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                6
              </span>
              Branding and Trademark
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While the code is open source, the OpenBalti name and logo are part of our project identity:
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  The "OpenBalti" name and logo should not be used in ways that suggest official endorsement or
                  affiliation without permission
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  Forks or derivative projects should use different branding to avoid confusion with the official
                  project
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>You may reference OpenBalti when discussing the project origin or providing attribution</span>
              </li>
            </ul>
          </section>

          {/* Section 7 - Third Party */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                7
              </span>
              Third-Party Dependencies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              OpenBalti uses various open-source libraries and tools. Each dependency has its own license, which must be
              respected:
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                <Code className="w-4 h-4 text-primary" />
                <span>
                  <strong>Next.js</strong> - MIT License
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                <Code className="w-4 h-4 text-primary" />
                <span>
                  <strong>React</strong> - MIT License
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                <Code className="w-4 h-4 text-primary" />
                <span>
                  <strong>Tailwind CSS</strong> - MIT License
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                <Code className="w-4 h-4 text-primary" />
                <span>
                  <strong>shadcn/ui</strong> - MIT License
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                <Code className="w-4 h-4 text-primary" />
                <span>
                  <strong>Lucide Icons</strong> - ISC License
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                <Code className="w-4 h-4 text-primary" />
                <span>
                  <strong>MongoDB</strong> - SSPL
                </span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              For a complete list of dependencies and their licenses, please refer to the package.json file in our
              GitHub repository.
            </p>
          </section>

          {/* Section 8 - Disclaimer */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                8
              </span>
              Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As stated in the MIT License, the software is provided "as is" without warranty of any kind. The authors
              and contributors are not liable for any damages or issues arising from the use of the software. Users are
              responsible for ensuring their use complies with applicable laws and regulations in their jurisdiction.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <Mail className="w-6 h-6 text-primary" />
              Questions About Licensing?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about our licensing, need clarification for commercial use, or want to discuss
              partnership opportunities, we'd love to hear from you.
            </p>
            <div className="bg-card border border-border rounded-lg p-4 space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-medium">Email:</span>
                <a href="mailto:shadbalti2@gmail.com" className="text-primary hover:underline">
                  shadbalti2@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Github className="w-4 h-4 text-primary" />
                <span className="font-medium">GitHub:</span>
                <a
                  href="https://github.com/ShadBalti/OpenBalti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ShadBalti/OpenBalti
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="font-medium">Website:</span>
                <a href="https://openbalti.vercel.app" className="text-primary hover:underline">
                  openbalti.vercel.app
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Use
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About OpenBalti
            </Link>
            <Link href="/contribute" className="hover:text-primary transition-colors">
              Contribute
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
