import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-primary hover:underline">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="text-muted-foreground mb-8">Effective Date: April 30, 2025</p>

      <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>By using OpenBalti, you agree to these terms. Please read them carefully.</p>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>Using OpenBalti means you agree to our Terms and Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
          <p>You must be 13+ to use this service. Under 18? Ask a guardian first.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Accounts</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You may log in with Google</li>
            <li>You are responsible for account activity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
          <p>Please use OpenBalti respectfully and legally.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Contributions</h2>
          <p>You retain ownership but grant us permission to use contributions on OpenBalti.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
          <p>All OpenBalti content is protected. Don't reuse it without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. External Links</h2>
          <p>We’re not responsible for third-party content or policies.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Liability</h2>
          <p>We're not responsible for any issues arising from your use of OpenBalti.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Updates</h2>
          <p>These terms may change. Continued use implies agreement.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
          <p>Email us at <a href="shadbalti2@gmail.com" className="underline text-primary">contact@openbalti.vercel.app</a></p>
        </section>
      </div>
    </main>
  )
}
