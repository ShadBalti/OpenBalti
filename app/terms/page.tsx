import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { FileText, Users, Shield, Scale, AlertTriangle, RefreshCw, Mail, Globe, CheckCircle } from "lucide-react"

export const metadata = generateMetadata(
  "Terms of Use | OpenBalti - Balti Language Dictionary",
  "Read the terms and conditions for using OpenBalti, the community-driven Balti language dictionary. Understand your rights and responsibilities as a user.",
  {
    keywords: ["OpenBalti terms", "terms of service", "user agreement", "Balti dictionary terms"],
  },
)

export default function TermsPage() {
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
            <li className="text-foreground">Terms of Use</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Use</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to OpenBalti! These terms govern your use of our platform dedicated to preserving and promoting the
            Balti language.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: April 30, 2025</p>
        </div>

        {/* Agreement Banner */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold mb-2">Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using OpenBalti, you agree to be bound by these Terms of Use and our Privacy Policy. If
                you do not agree to these terms, please do not use our Service. We encourage you to read these terms
                carefully before using our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          {/* Section 1 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                1
              </span>
              About OpenBalti
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              OpenBalti is a free, open-source, community-driven digital dictionary project dedicated to documenting,
              preserving, and promoting the Balti language. The Balti language (also known as Balti Bhoti) is an ancient
              Tibetic language spoken primarily in the Baltistan region of Gilgit-Baltistan, Pakistan, and parts of
              Ladakh, India.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to create a comprehensive linguistic resource that helps preserve this endangered language
              for future generations while making it accessible to learners, researchers, and the global Balti diaspora.
            </p>
            <p className="text-muted-foreground leading-relaxed">The Service includes but is not limited to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>A searchable Balti-English dictionary with definitions, translations, and examples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Educational resources for learning Balti script, grammar, and phrases</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Community contribution and review systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>User profiles, favorites, and personalized learning features</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                2
              </span>
              Eligibility
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To use OpenBalti, you must meet the following requirements:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Age Requirement
                </h4>
                <p className="text-sm text-muted-foreground">
                  You must be at least 13 years old to use the Service. Users between 13 and 18 should have parental or
                  guardian consent.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-primary" />
                  Legal Capacity
                </h4>
                <p className="text-sm text-muted-foreground">
                  You must have the legal capacity to enter into these Terms of Use in your jurisdiction.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Accurate Information
                </h4>
                <p className="text-sm text-muted-foreground">
                  You agree to provide accurate and truthful information when creating an account or contributing
                  content.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  Compliance
                </h4>
                <p className="text-sm text-muted-foreground">
                  You agree to comply with all applicable local, national, and international laws when using the
                  Service.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                3
              </span>
              User Accounts
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While many features are available without an account, creating an account unlocks additional
              functionality:
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">3.1 Account Creation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>You may create an account using Google OAuth authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  Your account gives you access to contribution features, favorites, learning progress, and leaderboard
                  participation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Each person may only create one account</span>
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">3.2 Account Responsibilities</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>You are responsible for maintaining the security of your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>You are responsible for all activities that occur under your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>You must notify us immediately of any unauthorized use of your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>You may not share your account credentials with others</span>
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">3.3 Account Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these Terms. You may also delete your
              account at any time through your settings or by contacting us. Upon deletion, your personal data will be
              removed, though anonymized contributions may remain in the dictionary.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                4
              </span>
              Acceptable Use Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              OpenBalti is a community dedicated to language preservation. We expect all users to act respectfully and
              constructively.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                <h4 className="font-medium mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Encouraged Behavior
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Contributing accurate linguistic content</li>
                  <li>• Providing constructive feedback</li>
                  <li>• Helping other learners</li>
                  <li>• Reporting errors respectfully</li>
                  <li>• Sharing cultural context and knowledge</li>
                  <li>• Respecting diverse dialects and variations</li>
                </ul>
              </div>
              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                <h4 className="font-medium mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Prohibited Behavior
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Posting offensive, hateful, or discriminatory content</li>
                  <li>• Submitting intentionally false information</li>
                  <li>• Harassing or bullying other users</li>
                  <li>• Spamming or self-promotion</li>
                  <li>• Attempting to hack or disrupt the Service</li>
                  <li>• Impersonating others or creating fake accounts</li>
                </ul>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Violations may result in content removal, account suspension, or permanent bans at our discretion.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                5
              </span>
              User Contributions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              OpenBalti thrives on community contributions. When you contribute content to our platform:
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">5.1 Your Ownership</h3>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of the original content you create. However, by submitting content to OpenBalti, you
              grant us a worldwide, non-exclusive, royalty-free, perpetual license to use, modify, display, and
              distribute your contributions as part of the Service.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">5.2 Contribution Standards</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Contributions should be accurate to the best of your knowledge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Content must be original or properly attributed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>You must have the right to submit any content you contribute</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Contributions should respect the linguistic integrity of the Balti language</span>
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">5.3 Community Review</h3>
            <p className="text-muted-foreground leading-relaxed">
              Contributions may be reviewed, edited, or removed by community moderators or administrators to ensure
              quality and accuracy. We reserve the right to modify or delete any content that violates these Terms or
              our community guidelines.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                6
              </span>
              Intellectual Property
            </h2>

            <h3 className="text-lg font-medium mt-4 mb-3">6.1 OpenBalti Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              The OpenBalti platform, including its design, code, features, and branding (logo, name, visual identity),
              is protected by intellectual property laws. The source code is released under the MIT License, allowing
              for open-source use with proper attribution.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.2 Dictionary Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              The linguistic content of the dictionary is contributed by the community and is intended to be freely
              accessible for educational and non-commercial purposes. Commercial use of the dictionary content requires
              prior written permission.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">6.3 Third-Party Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              Some elements of the Service may include third-party content, such as fonts, icons, or libraries. These
              remain the property of their respective owners and are used under their respective licenses.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                7
              </span>
              Disclaimers and Limitations
            </h2>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
              <h4 className="font-medium mb-2 flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                <AlertTriangle className="w-4 h-4" />
                Important Notice
              </h4>
              <p className="text-sm text-muted-foreground">
                The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or
                implied.
              </p>
            </div>

            <h3 className="text-lg font-medium mt-6 mb-3">7.1 No Warranty</h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not warrant that the Service will be uninterrupted, error-free, or completely secure. We do not
              guarantee the accuracy, completeness, or usefulness of any content, including dictionary entries.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">7.2 Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, OpenBalti and its creators, contributors, and affiliates shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use
              of the Service.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">7.3 External Links</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Service may contain links to third-party websites or services. We are not responsible for the content,
              policies, or practices of any third-party sites.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                8
              </span>
              Indemnification
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless OpenBalti, its creators, contributors, and affiliates
              from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Your use or misuse of the Service</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Your violation of these Terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Your violation of any third-party rights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>Content you submit to the Service</span>
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                9
              </span>
              Changes to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may modify these Terms of Use at any time. When we make changes:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-2">
                <RefreshCw className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>We will update the "Last Updated" date at the top of this page</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>For material changes, we may notify users via email or prominent website notice</span>
              </li>
              <li className="flex items-start gap-2">
                <RefreshCw className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Your continued use after changes constitutes acceptance of the updated Terms</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We encourage you to review these Terms periodically to stay informed of any updates.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                10
              </span>
              Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to
              its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be
              resolved through good-faith negotiation, and if necessary, through the appropriate courts of Pakistan.
            </p>
          </section>

          {/* Section 11 - Contact */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <Mail className="w-6 h-6 text-primary" />
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Use, please contact us:
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
                <Globe className="w-4 h-4 text-primary" />
                <span className="font-medium">Website:</span>
                <a href="https://openbalti.com" className="text-primary hover:underline">
                  openbalti.com
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
            <Link href="/license" className="hover:text-primary transition-colors">
              License
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
