import Link from "next/link"
import { generateMetadata } from "@/lib/metadata"
import { Shield, Lock, Eye, UserCheck, Database, Bell, Globe, Mail } from "lucide-react"

export const metadata = generateMetadata(
  "Privacy Policy | OpenBalti - Balti Language Dictionary",
  "Learn how OpenBalti collects, uses, and protects your personal information. Our commitment to privacy and data security in preserving the Balti language.",
  {
    keywords: ["OpenBalti privacy", "data protection", "user privacy", "Balti dictionary privacy policy"],
  },
)

export default function PrivacyPage() {
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
            <li className="text-foreground">Privacy Policy</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how OpenBalti collects, uses, and safeguards your
            information as part of our mission to preserve the Balti language.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: April 30, 2025</p>
        </div>

        {/* Quick Summary Card */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            Privacy at a Glance
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="font-medium text-sm">Data Security</p>
                <p className="text-xs text-muted-foreground">Industry-standard encryption</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-sm">Your Control</p>
                <p className="text-xs text-muted-foreground">Access, modify, or delete data</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Database className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <p className="font-medium text-sm">Minimal Collection</p>
                <p className="text-xs text-muted-foreground">Only what we need</p>
              </div>
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
              Introduction and Our Commitment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              OpenBalti is a community-driven project dedicated to preserving and promoting the Balti language, an
              ancient Tibetic language spoken in Baltistan (Gilgit-Baltistan, Pakistan) and parts of Ladakh, India. We
              understand that your trust is essential to our mission, and we are committed to protecting your personal
              information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy describes our practices regarding the collection, use, storage, and disclosure of
              information we receive from users of our website at openbalti.com (the "Service"). By using our
              Service, you consent to the practices described in this policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in transparency and accountability. OpenBalti operates as an open-source project, meaning our
              code is publicly available for review. This extends to our data practices — we collect only what is
              necessary to provide our services and improve the user experience.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                2
              </span>
              Information We Collect
            </h2>

            <h3 className="text-lg font-medium mt-6 mb-3">2.1 Information You Provide Directly</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account or interact with our Service, you may provide:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Account Information:</strong> Your name, email address, and profile picture when signing in
                  through Google OAuth authentication.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>User Contributions:</strong> Words, definitions, translations, example sentences, and other
                  linguistic content you submit to the dictionary.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Feedback and Reviews:</strong> Comments, ratings, and feedback you provide on dictionary
                  entries.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Communication Data:</strong> Information you provide when contacting us for support or
                  inquiries.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Preferences:</strong> Your saved favorites, learning lists, and search preferences.
                </span>
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you access our Service, we automatically collect certain technical information:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Usage Data:</strong> Pages visited, search queries, features used, time spent on pages, and
                  interaction patterns.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Device Information:</strong> Browser type, operating system, device type, and screen
                  resolution.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Log Data:</strong> IP address, access times, referring URLs, and error logs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span>
                  <strong>Cookies and Similar Technologies:</strong> We use essential cookies for authentication and
                  preferences, and analytics cookies (with your consent) to understand usage patterns.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                3
              </span>
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use collected information for the following purposes:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Service Operation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Authenticate and manage user accounts</li>
                  <li>• Display and organize dictionary content</li>
                  <li>• Process and display user contributions</li>
                  <li>• Enable search and filtering functionality</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Personalization</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Save your preferences and favorites</li>
                  <li>• Provide relevant search suggestions</li>
                  <li>• Remember your learning progress</li>
                  <li>• Customize your dashboard experience</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Community Features</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Display contributor leaderboards</li>
                  <li>• Show public contribution history</li>
                  <li>• Enable community reviews</li>
                  <li>• Track contribution statistics</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Improvement & Security</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Analyze usage to improve features</li>
                  <li>• Identify and fix technical issues</li>
                  <li>• Prevent fraud and abuse</li>
                  <li>• Ensure platform security</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                4
              </span>
              Third-Party Services
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use trusted third-party services to operate OpenBalti. Each service has its own privacy policy
              governing the use of your information:
            </p>

            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">Google OAuth (Authentication)</h4>
                <p className="text-sm text-muted-foreground">
                  Used for secure sign-in. We receive your name, email, and profile picture.{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">Google Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Used to understand how visitors use our site. Collects anonymized usage data.{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Privacy Policy
                  </a>
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">Vercel (Hosting)</h4>
                <p className="text-sm text-muted-foreground">
                  Our website is hosted on Vercel. They may collect standard server logs.{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Vercel Privacy Policy
                  </a>
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">MongoDB (Database)</h4>
                <p className="text-sm text-muted-foreground">
                  Our dictionary data is stored securely on MongoDB Atlas.{" "}
                  <a
                    href="https://www.mongodb.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    MongoDB Privacy Policy
                  </a>
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">GitHub (Open Source)</h4>
                <p className="text-sm text-muted-foreground">
                  Our code is hosted on GitHub for transparency and collaboration.{" "}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub Privacy Statement
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                5
              </span>
              Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Encryption:</strong> All data transmission is encrypted using HTTPS/TLS protocols.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Secure Authentication:</strong> We use OAuth 2.0 through Google, avoiding storage of
                  passwords.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Access Controls:</strong> Only authorized team members can access sensitive data.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>Regular Updates:</strong> We keep our systems and dependencies updated with security patches.
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              While we strive to protect your information, no method of transmission over the Internet is 100% secure.
              We cannot guarantee absolute security but will notify affected users promptly in case of any data breach.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                6
              </span>
              Your Rights and Choices
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have several rights regarding your personal information:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <UserCheck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Access Your Data</p>
                  <p className="text-xs text-muted-foreground">View all personal information we hold about you</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <UserCheck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Correct Inaccuracies</p>
                  <p className="text-xs text-muted-foreground">Update or correct your profile information</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <UserCheck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Delete Your Account</p>
                  <p className="text-xs text-muted-foreground">Request complete deletion of your data</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <UserCheck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Export Your Data</p>
                  <p className="text-xs text-muted-foreground">Download a copy of your contributions</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <UserCheck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Opt-Out of Analytics</p>
                  <p className="text-xs text-muted-foreground">Disable non-essential tracking cookies</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <UserCheck className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Withdraw Consent</p>
                  <p className="text-xs text-muted-foreground">Revoke permissions at any time</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:shadbalti2@gmail.com" className="text-primary hover:underline">
                shadbalti2@gmail.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                7
              </span>
              Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              OpenBalti is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us immediately. If we discover that we have collected personal
              information from a child under 13, we will take steps to delete that information promptly.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For users between 13 and 18 years of age, we encourage parents and guardians to monitor their children's
              online activities and consider using parental controls.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                8
              </span>
              International Data Transfers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              OpenBalti is operated from Pakistan, but our services use infrastructure located in various countries. By
              using our Service, you consent to the transfer of your information to countries outside your country of
              residence, which may have different data protection rules. We ensure that appropriate safeguards are in
              place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                9
              </span>
              Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
              requirements, or other factors. When we make material changes, we will:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-2">
                <Bell className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Post the updated policy on this page with a new "Last Updated" date</span>
              </li>
              <li className="flex items-start gap-2">
                <Bell className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Notify registered users via email for significant changes</span>
              </li>
              <li className="flex items-start gap-2">
                <Bell className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Display a prominent notice on our website</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Your continued use of the Service after any changes indicates your acceptance of the updated Privacy
              Policy.
            </p>
          </section>

          {/* Section 10 - Contact */}
          <section className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 mt-0">
              <Mail className="w-6 h-6 text-primary" />
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
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
            <p className="text-sm text-muted-foreground mt-4">
              We aim to respond to all inquiries within 5 business days.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Use
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
