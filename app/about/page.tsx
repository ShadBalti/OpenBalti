import Header from "@/components/header"

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Balti Dictionary</h1>

          <div className="bg-white rounded-lg shadow-md p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">The Balti Language</h2>
              <p className="text-gray-700 mb-4">
                Balti is a Tibetic language spoken in the Baltistan region of Gilgit-Baltistan, Pakistan, and parts of
                Ladakh, India. It is closely related to Tibetan and is written in the Tibetan script.
              </p>
              <p className="text-gray-700">
                With approximately 400,000 speakers, Balti is an important cultural heritage of the region, preserving
                ancient Tibetan linguistic features that have been lost in other Tibetic languages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to preserve and promote the Balti language by creating comprehensive digital resources.
                This dictionary aims to document Balti vocabulary, provide accurate translations, and serve as a
                learning tool for both native speakers and language enthusiasts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Features of Our Dictionary</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Comprehensive collection of Balti words and phrases</li>
                <li>Accurate English translations and meanings</li>
                <li>Phonetic pronunciations</li>
                <li>Example sentences showing usage in context</li>
                <li>Etymology information tracing word origins</li>
                <li>Related words and expressions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                We welcome contributions, corrections, and suggestions to improve our dictionary. If you have any
                feedback or would like to contribute to this project, please contact us at:
              </p>
              <p className="text-blue-600">contact@baltidictionary.org</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

