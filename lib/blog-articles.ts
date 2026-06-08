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
