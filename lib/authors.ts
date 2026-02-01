import type { Author } from '@/components/author-bio'

export const authors: Record<string, Author> = {
  'bilal-ahmed': {
    id: 'bilal-ahmed',
    name: 'Bilal Ahmed',
    slug: 'bilal-ahmed',
    title: 'Balti Language Specialist & Cultural Historian',
    bio: 'With over 15 years of experience in Balti language documentation and cultural preservation, Bilal leads OpenBalti\'s mission to create accessible, high-quality resources for learners worldwide. His work has been featured in international linguistic conferences and publications.',
    image: '/authors/bilal-ahmed.jpg',
    expertise: [
      'Balti Language',
      'Cultural Preservation',
      'Linguistic Documentation',
      'Educational Technology'
    ],
    credentials: [
      'Master\'s Degree in Comparative Linguistics from Kashmir University',
      'Certified Language Educator (CLE)',
      'Member of Endangered Languages Alliance',
      'Published researcher in 5+ international journals',
      'Keynote speaker at UNESCO Language Conferences'
    ],
    email: 'bilal@openbalti.com',
    website: 'https://bilal-ahmed.com',
    twitter: 'bilal_linguist',
    linkedin: 'https://linkedin.com/in/bilal-ahmed',
    joinedDate: '2022-01-15'
  },
  'fatima-khan': {
    id: 'fatima-khan',
    name: 'Fatima Khan',
    slug: 'fatima-khan',
    title: 'Community Development & Cultural Ambassador',
    bio: 'Fatima is a native Balti speaker and community organizer dedicated to grassroots language preservation. She coordinates with cultural organizations across the Balti regions and ensures that OpenBalti resources reflect authentic community voices.',
    image: '/authors/fatima-khan.jpg',
    expertise: [
      'Community Engagement',
      'Cultural Heritage',
      'Native Speaker Guidance',
      'Regional Dialect Knowledge'
    ],
    credentials: [
      'Community Education Specialist Certificate',
      'Cultural Ambassador for Gilgit-Baltistan',
      'Founder of Balti Cultural Circle (500+ members)',
      'Coordinator with UNESCO Cultural Projects'
    ],
    twitter: 'fatima_balti',
    linkedin: 'https://linkedin.com/in/fatima-khan-balti',
    joinedDate: '2022-03-20'
  },
  'dr-rashid-malik': {
    id: 'dr-rashid-malik',
    name: 'Dr. Rashid Malik',
    slug: 'dr-rashid-malik',
    title: 'Linguistics Professor & Academic Advisor',
    bio: 'Dr. Malik is a renowned linguist specializing in Himalayan language families. His research on Balti phonology and morphology has advanced our understanding of the language\'s unique features and historical development.',
    image: '/authors/dr-rashid-malik.jpg',
    expertise: [
      'Linguistics',
      'Phonology',
      'Language History',
      'Academic Research'
    ],
    credentials: [
      'PhD in Linguistics from University of Oxford',
      'Professor of Asian Languages at Mountain State University',
      'Published 20+ peer-reviewed articles on Balti linguistics',
      'Guest editor for Journal of Himalayan Languages',
      'Funded researcher by British Academy'
    ],
    email: 'rashid@mountainstate.edu',
    website: 'https://mountainstate.edu/faculty/rashid-malik',
    twitter: 'dr_rashid_malik',
    linkedin: 'https://linkedin.com/in/rashid-malik',
    joinedDate: '2022-06-01'
  },
  'aisha-ali': {
    id: 'aisha-ali',
    name: 'Aisha Ali',
    slug: 'aisha-ali',
    title: 'Content Writer & Education Specialist',
    bio: 'Aisha is passionate about making language learning accessible to all. She crafts engaging, clear content that helps learners at every level grasp Balti concepts with confidence and enjoyment.',
    image: '/authors/aisha-ali.jpg',
    expertise: [
      'Content Creation',
      'Educational Writing',
      'Learning Design',
      'Beginner-Friendly Explanations'
    ],
    credentials: [
      'Bachelor\'s in Education & English Literature',
      'TEFL Certification (Teaching English as Foreign Language)',
      '5+ years of educational content writing',
      'Specialized in accessibility and inclusive learning'
    ],
    twitter: 'aisha_writes',
    linkedin: 'https://linkedin.com/in/aisha-ali',
    joinedDate: '2023-01-10'
  }
}

export function getAuthor(slug: string): Author | null {
  return authors[slug] || null
}

export function getAllAuthors(): Author[] {
  return Object.values(authors)
}

export function getAuthorsByExpertise(expertise: string): Author[] {
  return Object.values(authors).filter(author =>
    author.expertise.includes(expertise)
  )
}
