import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Community Spotlight: Native Speakers Preserving Balti",
  "Meet passionate community members dedicating their time and expertise to teach and preserve the Balti language for future generations.",
  { keywords: ["community", "native speakers", "language preservation", "Balti community"] },
)

const article = ARTICLES["community-spotlight"]

export default function CommunitySpotlightPage() {
  return (
    <BlogArticleLayout
      slug={article.slug}
      title={article.title}
      excerpt={article.excerpt}
      date={article.date}
      readTime={article.readTime}
      category={article.category}
      author={article.author}
      relatedArticles={article.relatedArticles}
    >
      <section>
        <h2>The Backbone of Language Preservation</h2>
        <p>
          Language preservation doesn&apos;t happen in isolation. It thrives because of passionate individuals—native
          speakers, educators, linguists, and community organizers—who dedicate their time, energy, and expertise to
          keeping their language alive. These are the unsung heroes of cultural preservation.
        </p>
      </section>

      <section>
        <h2>Who Are These Community Champions?</h2>
        <p>The Balti language preservation movement includes:</p>
        <ul>
          <li>
            <strong>Elders and Native Speakers:</strong> Those whose first language is Balti and who serve as living
            libraries of the language&apos;s authentic usage and cultural context.
          </li>
          <li>
            <strong>Educators:</strong> Teachers who maintain Balti language instruction in schools despite
            pressures toward English and Urdu-only education.
          </li>
          <li>
            <strong>Linguists and Scholars:</strong> Researchers documenting Balti&apos;s phonology, grammar, and
            history.
          </li>
          <li>
            <strong>Community Organizers:</strong> Individuals coordinating cultural events, workshops, and preservation initiatives.
          </li>
          <li>
            <strong>Artists and Writers:</strong> Those creating new content in Balti—music, literature, and digital media.
          </li>
        </ul>
      </section>

      <section>
        <h2>Stories of Dedication</h2>
        <p>
          Across Baltistan, Kargil, and in diaspora communities worldwide, individuals are working tirelessly to keep
          Balti alive. Some run language classes in their communities. Others document oral histories and traditional
          stories. Some create music and poetry in Balti. Each contribution, no matter how small, strengthens the
          language and honors the heritage it carries.
        </p>
        <p>
          These community members often work without financial compensation, driven by love for their language and
          concern for its survival. They are teachers who stay late after school to conduct language classes. They are
          parents who insist their children learn Balti. They are activists who advocate for linguistic rights.
        </p>
      </section>

      <section>
        <h2>Challenges Faced by Community Leaders</h2>
        <p>
          Despite their passion, preservation workers face significant challenges. Limited funding, lack of educational
          materials, and competing pressures from dominant languages make their work difficult. Young people are often
          drawn to English and Urdu, seeing them as more &quot;useful&quot; for employment and education.
        </p>
        <p>
          Yet these community members persevere. They adapt to new technologies, create innovative learning materials,
          and find creative ways to make Balti relevant to younger generations.
        </p>
      </section>

      <section>
        <h2>How Technology Is Empowering Communities</h2>
        <p>
          Digital platforms have opened new opportunities for community-based preservation. Balti speakers are creating
          YouTube channels, podcasts, and social media content in their language. Community members are contributing to
          online dictionaries and language databases. These digital tools help reach beyond geographic boundaries and
          engage diaspora communities.
        </p>
        <p>
          OpenBalti and similar platforms provide infrastructure that community members can use to create, share, and
          preserve language resources, amplifying the impact of grassroots preservation efforts.
        </p>
      </section>

      <section>
        <h2>Success Stories and Victories</h2>
        <p>
          There are reasons for hope. In some communities, initiatives to teach Balti in schools have been successful.
          Some families have reversed language shift, with young people becoming fluent speakers. Cultural festivals
          celebrating Balti language and traditions are growing in popularity.
        </p>
        <p>
          These successes show that with effort, community support, and the right resources, language preservation is
          possible. They inspire hope that Balti can not only survive but thrive.
        </p>
      </section>

      <section>
        <h2>How You Can Support Community Efforts</h2>
        <p>
          If you&apos;re a Balti speaker or community member, you can contribute by learning the language deeply,
          teaching others, and creating content in Balti. If you&apos;re an outsider interested in supporting these
          efforts, you can:
        </p>
        <ul>
          <li>Learn about and support endangered language initiatives</li>
          <li>Amplify the voices of community leaders through social media and word-of-mouth</li>
          <li>Support organizations working on language preservation</li>
          <li>Advocate for linguistic rights and inclusive education policies</li>
          <li>Show interest in Balti culture, language, and traditions</li>
        </ul>
      </section>

      <section>
        <h2>The Power of Community</h2>
        <p>
          The preservation of the Balti language ultimately rests in the hands of its speakers and the broader Balti
          community. While linguists and organizations can provide tools and support, the real heroes are the community
          members who dedicate their lives to keeping this language alive.
        </p>
        <p>
          Their work is a testament to the power of community, culture, and love for one&apos;s heritage. By supporting
          these community leaders and participating in preservation efforts, we all contribute to ensuring that the
          beautiful Balti language survives and thrives for generations to come.
        </p>
      </section>
    </BlogArticleLayout>
  )
}
