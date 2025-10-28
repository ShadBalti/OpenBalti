import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-primary hover:underline">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Effective Date: April 30, 2025</p>

      <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          OpenBalti is committed to protecting your privacy. This policy explains how we collect,
          use, and protect your information.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Google account info (name, email)</li>
            <li>Usage data (anonymous analytics)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To personalize your experience</li>
            <li>To improve our service</li>
            <li>To communicate only when needed</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Third-Party Services</h2>
          <p>We use Google for sign-in and GitHub for collaboration. They have their own privacy policies.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Your Rights</h2>
          <p>You can request access to or deletion of your data at any time.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Security</h2>
          <p>We take data security seriously and follow industry best practices.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Updates</h2>
          <p>We may update this policy. Changes are effective once posted.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
          <p>Email us at <a href="shadbalti2@gmail.com" className="underline text-primary">contact@openbalti.vercel.app</a></p>
        </section>
      </div>
    </main>
  )
}
