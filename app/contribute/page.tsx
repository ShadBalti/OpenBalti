import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Mail,
  Share2,
  BookOpen,
  Heart,
  Users,
  Code,
  Sparkles,
  MessageSquare,
  Globe,
  CheckCircle2,
  ArrowRight,
  Star,
  Trophy,
  Pencil
} from "lucide-react"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(
  "Contribute to OpenBalti",
  "Help preserve and document the Balti language by contributing to the OpenBalti dictionary project.",
)

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        
        <div className="container relative py-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
                  <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Join Our Community</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Contribute to OpenBalti
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Help us preserve and document the Balti language. Whether you're a native speaker, linguist, 
                  or passionate about language preservation, your contribution matters.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="#ways-to-contribute">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      Get Started
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/contribute/community-collaboration.jpg"
                  alt="OpenBalti community members collaborating on language preservation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm md:text-base font-medium">
                    Together, we're preserving a living language
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5,000+", label: "Words Documented", icon: BookOpen },
              { value: "150+", label: "Contributors", icon: Users },
              { value: "20+", label: "Languages Helped", icon: Globe },
              { value: "100%", label: "Open Source", icon: Heart },
            ].map((stat, idx) => (
              <Card key={idx} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" aria-hidden="true" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contribute Section */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Your Contribution Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every contribution helps preserve a unique piece of human cultural heritage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: Trophy,
                title: "Cultural Preservation",
                description: "Help prevent the loss of a language spoken by 100,000+ people",
                color: "text-amber-600 dark:text-amber-400"
              },
              {
                icon: Users,
                title: "Community Building",
                description: "Connect with speakers and learners from around the world",
                color: "text-blue-600 dark:text-blue-400"
              },
              {
                icon: Star,
                title: "Make an Impact",
                description: "Your work directly supports language revitalization efforts",
                color: "text-green-600 dark:text-green-400"
              },
            ].map((item, idx) => (
              <Card key={idx} className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <item.icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} aria-hidden="true" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/contribute/impact-visualization.jpg"
              alt="Visual representation of OpenBalti's impact on language preservation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section id="ways-to-contribute" className="container py-12 md:py-16 scroll-mt-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ways to Contribute</h2>
            <p className="text-lg text-muted-foreground">
              Choose the contribution type that matches your skills and interests
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Add New Words */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">
                    Beginner Friendly
                  </span>
                </div>
                <CardTitle className="text-xl">Add New Words</CardTitle>
                <CardDescription>Contribute to the dictionary by adding new words and translations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you know Balti words that aren't in our dictionary yet, you can add them directly through our
                  interface. Each contribution helps make the dictionary more comprehensive.
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                    What you'll do:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li className="list-disc">Add Balti words with English translations</li>
                    <li className="list-disc">Include pronunciation guides</li>
                    <li className="list-disc">Add example sentences</li>
                    <li className="list-disc">Categorize words by type</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                  <Link href="/" className="gap-2">
                    <span>Add Words to Dictionary</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Review and Edit */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Pencil className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
                    Intermediate
                  </span>
                </div>
                <CardTitle className="text-xl">Review and Edit</CardTitle>
                <CardDescription>Help ensure accuracy by reviewing and editing existing entries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Review existing dictionary entries for accuracy and completeness. If you find errors or have suggestions
                  for improvement, you can edit entries directly.
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                    What you'll do:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li className="list-disc">Verify translation accuracy</li>
                    <li className="list-disc">Improve pronunciation guides</li>
                    <li className="list-disc">Add missing context or examples</li>
                    <li className="list-disc">Flag duplicate or incorrect entries</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group-hover:shadow-md transition-shadow">
                  <Link href="/review" className="gap-2">
                    <span>Review Dictionary</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Technical Contributions */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
                    Technical
                  </span>
                </div>
                <CardTitle className="text-xl">Technical Contributions</CardTitle>
                <CardDescription>Help improve the OpenBalti platform itself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  If you have technical skills, you can contribute to the development of the OpenBalti platform. We
                  welcome contributions to our codebase, including bug fixes, new features, and improvements.
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                    Opportunities:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-6">
                    <li className="list-disc">Fix bugs and improve performance</li>
                    <li className="list-disc">Develop new features</li>
                    <li className="list-disc">Improve UI/UX design</li>
                    <li className="list-disc">Write documentation</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group-hover:shadow-md transition-shadow">
                  <Link href="https://github.com/openbalti/dictionary" target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    <span>View on GitHub</span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Spread the Word */}
            <Card className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Share2 className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">
                    Everyone Can Help
                  </span>
                </div>
                <CardTitle className="text-xl">Spread the Word</CardTitle>
                <CardDescription>Help us reach more people by sharing the project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  One of the simplest ways to contribute is by sharing the OpenBalti Dictionary with others who might be
                  interested. The more people who know about and use the dictionary, the more successful our preservation
                  efforts will be.
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" aria-hidden="true" />
                    Share on:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Twitter", color: "bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300" },
                      { name: "Facebook", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
                      { name: "LinkedIn", color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300" },
                      { name: "Email", color: "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300" },
                    ].map((platform) => (
                      <span key={platform.name} className={`text-xs px-2 py-1 rounded-full font-medium ${platform.color}`}>
                        {platform.name}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link
                    href="https://twitter.com/intent/tweet?text=Check%20out%20the%20OpenBalti%20Dictionary%20project%20-%20helping%20preserve%20the%20Balti%20language!&url=https://openbalti.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Share on Twitter
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="mailto:?subject=OpenBalti%20Dictionary&body=Check%20out%20the%20OpenBalti%20Dictionary%20project%20at%20https://openbalti.org">
                    Share by Email
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

   {/* Contributor Spotlight */}
      <section className="container py-12 md:py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Contributors</h2>
            <p className="text-lg text-muted-foreground">
              Real people making a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Amina K.",
                role: "Native Speaker",
                contribution: "Added 500+ words",
                image: "/images/contribute/contributor-1.jpg",
                quote: "Preserving my language for future generations gives me purpose."
              },
              {
                name: "Dr. Rahman S.",
                role: "Linguist",
                contribution: "Reviewed 1,000+ entries",
                image: "/images/contribute/contributor-2.jpg",
                quote: "Every correction helps maintain the integrity of this precious resource."
              },
              {
                name: "Sarah M.",
                role: "Developer",
                contribution: "Built search features",
                image: "/images/contribute/contributor-3.jpg",
                quote: "Using my skills to support language preservation is incredibly rewarding."
              },
            ].map((contributor, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={contributor.image}
                      alt={`${contributor.name}, ${contributor.role}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{contributor.name}</h3>
                  <p className="text-sm text-primary mb-2">{contributor.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{contributor.contribution}</p>
                  <blockquote className="text-sm italic text-muted-foreground">
                    "{contributor.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting Started is Easy</h2>
            <p className="text-lg text-muted-foreground">
              Follow these simple steps to make your first contribution
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                step: "1",
                title: "Choose Your Path",
                description: "Pick a contribution type that matches your skills",
                icon: "🎯"
              },
              {
                step: "2",
                title: "Create Account",
                description: "Sign up to start contributing (optional for some tasks)",
                icon: "👤"
              },
              {
                step: "3",
                title: "Make Contribution",
                description: "Add words, review entries, or code improvements",
                icon: "✨"
              },
              {
                step: "4",
                title: "See Impact",
                description: "Watch your contribution help preserve Balti",
                icon: "🌟"
              },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-primary mb-2">Step {step.step}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="relative h-[250px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/contribute/getting-started.jpg"
              alt="Step-by-step guide to contributing to OpenBalti"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Questions? We're Here to Help</CardTitle>
              <CardDescription className="text-base">
                Get in touch with the OpenBalti team for guidance, support, or collaboration opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Email Us</h4>
                      <p className="text-sm text-muted-foreground">contact@openbalti.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
                    <Github className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">GitHub Discussions</h4>
                      <p className="text-sm text-muted-foreground">Join the conversation</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <Button asChild size="lg">
                    <Link href="mailto:contact@openbalti.org" className="gap-2">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      Send Us an Email
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">Learn More About Balti</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-12 md:py-16 border-t border-border">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
            <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>Open Source • Community Driven • Free Forever</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Make a Difference?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Join us in our mission to document and revitalize the Balti language. 
            Every contribution, no matter how small, helps preserve this important cultural heritage.
          </p>

          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Start Contributing Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/blog/why-balti-language-matters">
                <span>Why It Matters</span>
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-6">
            OpenBalti is an open-source project dedicated to preserving and promoting the Balti language.
          </p>
        </div>
      </section>
    </main>
  )
}