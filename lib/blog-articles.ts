// Blog article metadata and configuration
export interface Article {
  slug: string
  title: string
  excerpt: string
  category: "Learning" | "Culture" | "Linguistics" | "Community"
  date: string
  readTime: string
  keywords: string
  author: {
    name: string
    role: string
    image?: string
    bio?: string
    link?: string
  }
  heroImage?: string
  relatedArticles: {
    slug: string
    title: string
    category: string
  }[]
}

export const ARTICLES: Record<string, Article> = {
  "getting-started-with-balti": {
    slug: "getting-started-with-balti",
    title: "Getting Started with Balti: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of Balti language with this comprehensive beginner's guide covering pronunciation, basic grammar, essential phrases, and practical learning strategies.",
    category: "Learning",
    date: "January 15, 2025",
    readTime: "8 min read",
    keywords: "Balti for beginners, learn Balti, Balti pronunciation, beginner guide",
    author: {
      name: "OpenBalti Team",
      role: "Language Educators",
      bio: "The OpenBalti Team is dedicated to making Balti language learning accessible and engaging for learners worldwide.",
    },
    heroImage: "/images/blog/balti-landscape.jpg",
    relatedArticles: [
      {
        slug: "balti-dialects-explained",
        title: "Understanding Balti Dialects: A Complete Overview",
        category: "Linguistics",
      },
      {
        slug: "learning-balti-with-music",
        title: "Learning Balti Through Music and Folk Songs",
        category: "Learning",
      },
    ],
  },

  "why-balti-language-matters": {
    slug: "why-balti-language-matters",
    title: "Why the Balti Language Matters: Preserving Cultural Identity",
    excerpt:
      "Explore why preserving the Balti language is crucial for maintaining cultural identity, preventing linguistic loss, and honoring the heritage of Baltistan communities worldwide.",
    category: "Culture",
    date: "January 10, 2025",
    readTime: "8 min read",
    keywords: "language preservation, Balti culture, endangered languages, cultural identity",
    author: {
      name: "Dr. Rashida Khan",
      role: "Linguistic Anthropologist",
      bio: "Dr. Rashida Khan is a specialist in endangered language preservation with a focus on Tibetic languages and their cultural significance.",
    },
    relatedArticles: [
      {
        slug: "community-spotlight",
        title: "Community Spotlight: Native Speakers Preserving Balti",
        category: "Community",
      },
      {
        slug: "traditional-crafts-balti-culture",
        title: "Traditional Crafts: The Living Art of Baltistan",
        category: "Culture",
      },
    ],
  },

  "balti-dialects-explained": {
    slug: "balti-dialects-explained",
    title: "Understanding Balti Dialects: A Complete Overview",
    excerpt:
      "Deep dive into the regional variations of Balti language across Skardu, Khaplu, Kargil, and Nubra Valley. Learn what makes each dialect unique and how to identify them.",
    category: "Linguistics",
    date: "January 5, 2025",
    readTime: "10 min read",
    keywords: "Balti dialects, regional variations, Skardu, Khaplu, Kargil, Nubra",
    author: {
      name: "Prof. Mirza Hassan",
      role: "Dialectologist",
      bio: "Prof. Mirza Hassan has spent over 20 years studying the linguistic variations of Balti across different regions of Baltistan.",
    },
    relatedArticles: [
      {
        slug: "getting-started-with-balti",
        title: "Getting Started with Balti: A Beginner's Guide",
        category: "Learning",
      },
      {
        slug: "balti-language-guide-2026",
        title: "Comprehensive Balti Language Guide 2026",
        category: "Learning",
      },
    ],
  },

  "traditional-crafts-balti-culture": {
    slug: "traditional-crafts-balti-culture",
    title: "Traditional Crafts: The Living Art of Baltistan",
    excerpt:
      "Discover the intricate traditional crafts of Baltistan including carpet weaving, woodcarving, embroidery, and metalwork that tell stories of heritage and artistic excellence.",
    category: "Culture",
    date: "December 28, 2024",
    readTime: "7 min read",
    keywords: "Balti crafts, traditional arts, carpet weaving, Baltistan culture",
    author: {
      name: "Aisha Malik",
      role: "Cultural Heritage Specialist",
      bio: "Aisha Malik is passionate about documenting and promoting traditional Baltistan crafts and their role in cultural preservation.",
    },
    relatedArticles: [
      {
        slug: "why-balti-language-matters",
        title: "Why the Balti Language Matters: Preserving Cultural Identity",
        category: "Culture",
      },
      {
        slug: "community-spotlight",
        title: "Community Spotlight: Native Speakers Preserving Balti",
        category: "Community",
      },
    ],
  },

  "community-spotlight": {
    slug: "community-spotlight",
    title: "Community Spotlight: Native Speakers Preserving Balti",
    excerpt:
      "Meet passionate community members who are dedicating their time and expertise to teach and preserve the Balti language for future generations through various initiatives.",
    category: "Community",
    date: "December 20, 2024",
    readTime: "5 min read",
    keywords: "community, native speakers, language preservation, Balti community",
    author: {
      name: "Farah Ansari",
      role: "Community Coordinator",
      bio: "Farah Ansari works directly with Balti-speaking communities to develop grassroots preservation initiatives and educational programs.",
    },
    relatedArticles: [
      {
        slug: "why-balti-language-matters",
        title: "Why the Balti Language Matters: Preserving Cultural Identity",
        category: "Culture",
      },
      {
        slug: "traditional-crafts-balti-culture",
        title: "Traditional Crafts: The Living Art of Baltistan",
        category: "Culture",
      },
    ],
  },

  "learning-balti-with-music": {
    slug: "learning-balti-with-music",
    title: "Learning Balti Through Music and Folk Songs",
    excerpt:
      "Music is a powerful way to learn any language. Explore traditional Balti songs, folk melodies, and how they can help you master the language naturally and enjoyably.",
    category: "Learning",
    date: "December 15, 2024",
    readTime: "6 min read",
    keywords: "Balti music, folk songs, language learning through music, cultural immersion",
    author: {
      name: "Karim Siddiqui",
      role: "Music and Language Educator",
      bio: "Karim Siddiqui integrates traditional Balti music into language education, believing that music is a gateway to cultural understanding.",
    },
    relatedArticles: [
      {
        slug: "getting-started-with-balti",
        title: "Getting Started with Balti: A Beginner's Guide",
        category: "Learning",
      },
      {
        slug: "traditional-crafts-balti-culture",
        title: "Traditional Crafts: The Living Art of Baltistan",
        category: "Culture",
      },
    ],
  },

  "balti-language-guide-2026": {
    slug: "balti-language-guide-2026",
    title: "Comprehensive Balti Language Guide 2026",
    excerpt:
      "An updated and comprehensive guide to the Balti language covering everything from basic alphabet and pronunciation to advanced grammar and contemporary usage.",
    category: "Learning",
    date: "December 10, 2024",
    readTime: "12 min read",
    keywords: "Balti language guide, Balti grammar, Balti alphabet, language learning",
    author: {
      name: "OpenBalti Team",
      role: "Language Educators",
      bio: "The OpenBalti Team is dedicated to making Balti language learning accessible and engaging for learners worldwide.",
    },
    relatedArticles: [
      {
        slug: "getting-started-with-balti",
        title: "Getting Started with Balti: A Beginner's Guide",
        category: "Learning",
      },
      {
        slug: "balti-dialects-explained",
        title: "Understanding Balti Dialects: A Complete Overview",
        category: "Linguistics",
      },
    ],
  },

  "how-to-learn-balti-complete-guide": {
    slug: "how-to-learn-balti-complete-guide",
    title: "How to Learn Balti Language: Complete Guide for Beginners",
    excerpt:
      "A comprehensive roadmap for learning Balti with step-by-step strategies, recommended resources, study tips, tools, and proven methods used by successful language learners.",
    category: "Learning",
    date: "January 20, 2025",
    readTime: "11 min read",
    keywords: "how to learn Balti, Balti language course, learn Balti online, Balti learning guide, language learning strategy",
    author: {
      name: "Dr. Amina Hassan",
      role: "Language Learning Expert",
      bio: "Dr. Amina Hassan specializes in language acquisition methodology and has helped thousands of learners master new languages using proven techniques.",
    },
    relatedArticles: [
      {
        slug: "getting-started-with-balti",
        title: "Getting Started with Balti: A Beginner's Guide",
        category: "Learning",
      },
      {
        slug: "best-resources-learning-balti-2025",
        title: "Best Resources for Learning Balti Language 2025",
        category: "Learning",
      },
      {
        slug: "learning-balti-with-music",
        title: "Learning Balti Through Music and Folk Songs",
        category: "Learning",
      },
    ],
  },

  "best-resources-learning-balti-2025": {
    slug: "best-resources-learning-balti-2025",
    title: "Best Resources for Learning Balti Language 2025",
    excerpt:
      "Discover the top apps, websites, books, courses, online teachers, and community platforms for learning Balti. Expert reviews and recommendations for every learning style.",
    category: "Learning",
    date: "January 25, 2025",
    readTime: "10 min read",
    keywords: "Balti learning resources, Balti apps, Balti language courses, learn Balti online, Balti study materials",
    author: {
      name: "Sofia Rahman",
      role: "EdTech & Language Resources Specialist",
      bio: "Sofia Rahman reviews and evaluates language learning tools and platforms to help learners find the best fit for their needs and goals.",
    },
    relatedArticles: [
      {
        slug: "how-to-learn-balti-complete-guide",
        title: "How to Learn Balti Language: Complete Guide for Beginners",
        category: "Learning",
      },
      {
        slug: "learning-balti-with-music",
        title: "Learning Balti Through Music and Folk Songs",
        category: "Learning",
      },
      {
        slug: "community-spotlight",
        title: "Community Spotlight: Native Speakers Preserving Balti",
        category: "Community",
      },
    ],
  },

  "balti-pronunciation-guide-master-sounds": {
    slug: "balti-pronunciation-guide-master-sounds",
    title: "Balti Language Pronunciation Guide: Master the Sounds",
    excerpt:
      "Master Balti pronunciation with detailed phonetic breakdowns, IPA notation, audio guides, mouth position diagrams, and solutions for common pronunciation challenges.",
    category: "Linguistics",
    date: "February 1, 2025",
    readTime: "9 min read",
    keywords: "Balti pronunciation, how to pronounce Balti, Balti phonetics, Balti sounds, Balti accent",
    author: {
      name: "Prof. Tenzin Dorje",
      role: "Phonetics & Linguistics Specialist",
      bio: "Prof. Tenzin Dorje is an expert in Tibetic languages phonetics and has developed innovative pronunciation teaching methods.",
    },
    relatedArticles: [
      {
        slug: "getting-started-with-balti",
        title: "Getting Started with Balti: A Beginner's Guide",
        category: "Learning",
      },
      {
        slug: "balti-dialects-explained",
        title: "Understanding Balti Dialects: A Complete Overview",
        category: "Linguistics",
      },
      {
        slug: "balti-language-guide-2026",
        title: "Comprehensive Balti Language Guide 2026",
        category: "Learning",
      },
    ],
  },

  "essential-balti-phrases-travelers-visitors": {
    slug: "essential-balti-phrases-travelers-visitors",
    title: "Essential Balti Phrases for Travelers & Visitors",
    excerpt:
      "Learn practical Balti phrases for travelers visiting Baltistan. Includes greetings, asking for help, dining, directions, cultural etiquette, and tips for respectful communication.",
    category: "Learning",
    date: "February 5, 2025",
    readTime: "8 min read",
    keywords: "Balti phrases, Balti greetings, Balti for tourists, travel Balti, Baltistan phrases, practical Balti",
    author: {
      name: "Hassan Ahmed",
      role: "Cultural & Travel Guide Expert",
      bio: "Hassan Ahmed has spent years guiding travelers through Baltistan and knows the practical phrases and cultural tips that matter most.",
    },
    relatedArticles: [
      {
        slug: "getting-started-with-balti",
        title: "Getting Started with Balti: A Beginner's Guide",
        category: "Learning",
      },
      {
        slug: "why-balti-language-matters",
        title: "Why the Balti Language Matters: Preserving Cultural Identity",
        category: "Culture",
      },
      {
        slug: "traditional-crafts-balti-culture",
        title: "Traditional Crafts: The Living Art of Baltistan",
        category: "Culture",
      },
    ],
  },

  "balti-language-facts-history-everything": {
    slug: "balti-language-facts-history-everything",
    title: "Balti Language Facts & History: Everything You Need to Know",
    excerpt:
      "Comprehensive overview of Balti language history, linguistic classification, speaker statistics, evolution, and fascinating facts. Build authority and deep understanding of this unique language.",
    category: "Linguistics",
    date: "February 10, 2025",
    readTime: "10 min read",
    keywords: "Balti language facts, Balti history, Tibetic languages, Balti language origin, endangered languages, linguistic heritage",
    author: {
      name: "Dr. Namgyal Tsering",
      role: "Historical Linguist & Language Anthropologist",
      bio: "Dr. Namgyal Tsering has authored numerous papers on Tibetic languages and is recognized as a leading authority on Balti linguistic heritage.",
    },
    relatedArticles: [
      {
        slug: "why-balti-language-matters",
        title: "Why the Balti Language Matters: Preserving Cultural Identity",
        category: "Culture",
      },
      {
        slug: "balti-dialects-explained",
        title: "Understanding Balti Dialects: A Complete Overview",
        category: "Linguistics",
      },
      {
        slug: "community-spotlight",
        title: "Community Spotlight: Native Speakers Preserving Balti",
        category: "Community",
      },
    ],
  },
}

// Export a list of all articles
export const ALL_ARTICLES = Object.values(ARTICLES)

// Get article by slug
export function getArticle(slug: string): Article | undefined {
  return ARTICLES[slug]
}

// Get related articles
export function getRelatedArticles(relatedSlugs: string[]): Article[] {
  return relatedSlugs
    .map((slug) => ARTICLES[slug])
    .filter((article) => article !== undefined) as Article[]
}
