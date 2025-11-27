"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Fatima Hassan",
    role: "Language Teacher",
    content:
      "OpenBalti has revolutionized how I teach Balti to my students. The comprehensive dictionary and community support are invaluable.",
    avatar: "FH",
  },
  {
    name: "Muhammad Ali",
    role: "Native Speaker & Cultural Activist",
    content:
      "Finally, a platform that treats Balti with the respect it deserves. The quality and accuracy of the dictionary is outstanding.",
    avatar: "MA",
  },
  {
    name: "Dr. Sarah Khan",
    role: "Linguistics Researcher",
    content:
      "As a researcher, I'm impressed by OpenBalti's scholarly approach to language preservation. This is crucial work.",
    avatar: "SK",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by the Community</h2>
          <p className="text-gray-400 text-lg">
            Hear from language teachers, speakers, and researchers who are preserving Balti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg bg-gray-800/50 border border-gray-700 p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-sm font-bold text-gray-900">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
