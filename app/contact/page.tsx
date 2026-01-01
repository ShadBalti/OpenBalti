import { generateMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Mail, MapPin, MessageSquare, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = generateMetadata(
  "Contact OpenBalti | Get in Touch",
  "Have questions about the Balti language or OpenBalti project? Get in touch with us. We'd love to hear from you!",
  { keywords: ["contact", "OpenBalti", "feedback", "support"] },
)

export default function ContactPage() {
  return (
    <main className="text-gray-100 bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have questions, feedback, or want to contribute to preserving the Balti language? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Email */}
          <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition">
            <Mail className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300 mb-4">Send us your questions, suggestions, or feedback directly.</p>
            <Link
              href="mailto:info@openbalti.org"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Send Email
            </Link>
          </div>

          {/* GitHub */}
          <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition">
            <Github className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-300 mb-4">Contribute to OpenBalti on GitHub or report issues with the project.</p>
            <Link
              href="https://github.com/openbalti/dictionary"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Visit GitHub
            </Link>
          </div>

          {/* Community Feedback */}
          <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Feedback & Suggestions</h3>
            <p className="text-gray-300 mb-4">Help us improve OpenBalti by sharing your feedback and ideas.</p>
            <Link
              href="#contact-form"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Send Feedback
            </Link>
          </div>

          {/* Community */}
          <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
            <p className="text-gray-300 mb-4">
              Be part of the OpenBalti community and help preserve the Balti language.
            </p>
            <Link
              href="/contribute"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Contribute Now
            </Link>
          </div>
        </div>
      </section>

      {/* About OpenBalti */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">About OpenBalti</h2>
        <div className="bg-gray-800 rounded-2xl p-8 space-y-4 text-gray-300">
          <p>
            OpenBalti is an open-source project dedicated to preserving and promoting the Balti language. We believe
            that every language carries unique cultural knowledge and perspectives. The Balti language, a member of the
            Tibetic language family, represents centuries of cultural heritage from Baltistan and Ladakh.
          </p>
          <p>
            Our mission is to make Balti language resources freely available to everyone — learners, researchers,
            cultural enthusiasts, and community members. Through collaborative effort and community participation, we're
            building a comprehensive dictionary, learning resources, and cultural documentation.
          </p>
          <p>
            We welcome contributions from speakers, linguists, educators, and anyone passionate about language
            preservation. Whether you want to add words, contribute translations, share cultural knowledge, or help with
            development, there's a place for you in the OpenBalti community.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Send us a Message</h2>
        <div className="bg-gray-800 rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg transition"
            >
              Send Message
            </Button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-6">
            We'll get back to you as soon as possible. Thank you for reaching out!
          </p>
        </div>
      </section>

      {/* Cultural Insight */}
      <section className="relative text-center py-20 px-6 bg-gray-950">
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Join Us in Preserving Balti</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Every contribution matters. Whether you're a native speaker, a learner, a researcher, or simply someone who
            values linguistic diversity, your participation helps ensure that the Balti language and culture continue to
            thrive for future generations.
          </p>
        </div>
      </section>
    </main>
  )
}
