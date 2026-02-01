// Internal linking strategy and relationships

export interface InternalLink {
  href: string
  label: string
  context: string
  relevanceScore?: number
}

// Content relationship mapping - define which pages should link to which
export const contentMap: Record<string, InternalLink[]> = {
  // Dictionary pages
  '/dictionary': [
    { href: '/blog/getting-started-with-balti', label: 'Getting Started with Balti', context: 'beginners' },
    { href: '/resources', label: 'Learning Resources', context: 'education' },
    { href: '/contribute', label: 'Contribute Translations', context: 'community' },
  ],

  // Learning pages
  '/learn': [
    { href: '/dictionary', label: 'Dictionary', context: 'reference' },
    { href: '/blog/balti-dialects-explained', label: 'Understanding Dialects', context: 'cultural' },
    { href: '/resources/grammar', label: 'Grammar Guide', context: 'education' },
  ],

  // Culture pages
  '/culture': [
    { href: '/blog/why-balti-language-matters', label: 'Why Balti Matters', context: 'heritage' },
    { href: '/culture/traditions', label: 'Traditional Practices', context: 'cultural' },
    { href: '/dictionary?category=culture', label: 'Cultural Vocabulary', context: 'vocabulary' },
  ],

  // Blog pages
  '/blog': [
    { href: '/dictionary', label: 'Search the Dictionary', context: 'reference' },
    { href: '/contribute', label: 'Share Your Knowledge', context: 'community' },
    { href: '/about', label: 'Our Mission', context: 'authority' },
  ],

  // Resources
  '/resources': [
    { href: '/dictionary', label: 'Comprehensive Dictionary', context: 'reference' },
    { href: '/blog', label: 'Learning Articles', context: 'education' },
    { href: '/learn', label: 'Interactive Learning', context: 'education' },
  ],

  // About pages
  '/about': [
    { href: '/authors', label: 'Meet Our Team', context: 'credibility' },
    { href: '/contribute', label: 'Join the Community', context: 'engagement' },
  ],

  // Contribute
  '/contribute': [
    { href: '/dictionary', label: 'Browse Dictionary', context: 'reference' },
    { href: '/about', label: 'Our Community', context: 'social-proof' },
  ],
}

// Keyword-based internal linking suggestions
export const keywordLinks: Record<string, InternalLink[]> = {
  'Balti language': [
    { href: '/dictionary', label: 'Balti Dictionary', context: 'reference' },
    { href: '/blog/why-balti-language-matters', label: 'Why Balti Language Matters', context: 'educational' },
  ],
  'dialect': [
    { href: '/culture/dialects', label: 'Balti Dialects', context: 'reference' },
    { href: '/blog/balti-dialects-explained', label: 'Understanding Balti Dialects', context: 'educational' },
  ],
  'pronunciation': [
    { href: '/resources/pronunciation', label: 'Pronunciation Guide', context: 'learning' },
    { href: '/dictionary', label: 'Listen to Native Speakers', context: 'learning' },
  ],
  'grammar': [
    { href: '/resources/grammar', label: 'Balti Grammar', context: 'learning' },
    { href: '/learn', label: 'Grammar Lessons', context: 'learning' },
  ],
  'culture': [
    { href: '/culture', label: 'Balti Culture', context: 'cultural' },
    { href: '/blog', label: 'Cultural Articles', context: 'educational' },
  ],
  'learn': [
    { href: '/learn', label: 'Learn Balti', context: 'learning' },
    { href: '/resources', label: 'Learning Resources', context: 'learning' },
  ],
  'preservation': [
    { href: '/about', label: 'Our Mission', context: 'mission' },
    { href: '/blog/why-balti-language-matters', label: 'Language Preservation', context: 'educational' },
  ],
}

/**
 * Get related internal links for a given page
 */
export function getRelatedLinks(path: string, limit: number = 5): InternalLink[] {
  const links = contentMap[path] || []
  return links.slice(0, limit)
}

/**
 * Find internal links based on keywords in content
 */
export function findLinksForKeywords(keywords: string[], limit: number = 5): InternalLink[] {
  const foundLinks: Map<string, InternalLink> = new Map()

  keywords.forEach((keyword) => {
    const links = keywordLinks[keyword.toLowerCase()] || []
    links.forEach((link) => {
      if (!foundLinks.has(link.href)) {
        foundLinks.set(link.href, link)
      }
    })
  })

  return Array.from(foundLinks.values()).slice(0, limit)
}

/**
 * Get contextual internal links for a piece of content
 */
export function getContextualLinks(
  currentPath: string,
  contentKeywords: string[],
  limit: number = 3
): InternalLink[] {
  const pathLinks = getRelatedLinks(currentPath, limit)
  const keywordLinks = findLinksForKeywords(contentKeywords, limit)

  // Combine and deduplicate
  const allLinks = new Map<string, InternalLink>()
  pathLinks.forEach((link) => allLinks.set(link.href, link))
  keywordLinks.forEach((link) => {
    if (!allLinks.has(link.href) && allLinks.size < limit) {
      allLinks.set(link.href, link)
    }
  })

  return Array.from(allLinks.values()).slice(0, limit)
}

/**
 * Priority pages for internal linking (hub pages)
 */
export const hubPages = {
  dictionary: '/dictionary',
  learn: '/learn',
  resources: '/resources',
  blog: '/blog',
  culture: '/culture',
  about: '/about',
  contribute: '/contribute',
  authors: '/authors',
}
