import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Essential Balti Phrases for Travelers & Visitors",
  "Learn practical Balti phrases for travelers visiting Baltistan. Includes greetings, asking for help, dining, directions, cultural etiquette, and tips for respectful communication.",
  {
    keywords: [
      "Balti phrases",
      "Balti greetings",
      "Balti for tourists",
      "travel Balti",
      "Baltistan phrases",
      "practical Balti",
    ],
  },
)

const article = ARTICLES["essential-balti-phrases-travelers-visitors"]

interface Phrase {
  english: string
  balti: string
  pronunciation: string
  context: string
}

export default function EssentialPhrasesPage() {
  const greetings: Phrase[] = [
    {
      english: "Hello",
      balti: "Assalamo Alaikum",
      pronunciation: "ah-sah-LAH-moh ah-LAI-koom",
      context: "Standard Islamic greeting used in most situations",
    },
    {
      english: "Good morning",
      balti: "Subah bakhair",
      pronunciation: "soo-BAH bah-KHAIR",
      context: "Morning greeting, very respectful",
    },
    {
      english: "Good evening",
      balti: "Shaam bakhair",
      pronunciation: "SHAHM bah-KHAIR",
      context: "Evening greeting",
    },
    {
      english: "How are you?",
      balti: "Kusta no?",
      pronunciation: "KOO-stah no",
      context: "Informal, friendly inquiry",
    },
    {
      english: "I am fine, thank you",
      balti: "Me Thandicho, Shukriya",
      pronunciation: "meh THAN-dee-cho, shoo-KREE-yah",
      context: "Common response to greeting",
    },
    {
      english: "Goodbye",
      balti: "Khoda hafiz",
      pronunciation: "KHO-dah HAH-feez",
      context: "Formal goodbye meaning 'God protect you'",
    },
    {
      english: "Thank you",
      balti: "Shukriya / Dhanyavaad",
      pronunciation: "shoo-KREE-yah / DHAN-yah-vad",
      context: "Express gratitude",
    },
    {
      english: "Please",
      balti: "Mehrbani karni",
      pronunciation: "mehr-bah-NEE KAR-nee",
      context: "Polite request",
    },
  ]

  const essentialPhrases: Phrase[] = [
    {
      english: "My name is...",
      balti: "Meray naam...",
      pronunciation: "meh-RAI nahm",
      context: "Introduce yourself",
    },
    {
      english: "What is your name?",
      balti: "Taski naam kya tis?",
      pronunciation: "tah-skee nahm kyah tis",
      context: "Ask someone's name politely",
    },
    {
      english: "I don't understand",
      balti: "Me samgi nang",
      pronunciation: "meh sahm-GEE nahng",
      context: "When you need clarification",
    },
    {
      english: "Do you speak English?",
      balti: "Tis English bolda?",
      pronunciation: "tis ANG-lish BOLE-dah",
      context: "Ask about language capability",
    },
    {
      english: "Speak slowly, please",
      balti: "Mehrbani karni, slowly bol",
      pronunciation: "mehr-bah-NEE KAR-nee, SLOW-lee bole",
      context: "Request slower speech",
    },
    {
      english: "Where is the bathroom?",
      balti: "Toilet kyan chai?",
      pronunciation: "TOY-let KYahn CHAI",
      context: "Practical need",
    },
    {
      english: "How much does it cost?",
      balti: "Kinay lagda hai?",
      pronunciation: "kee-NAI lag-DAH hai",
      context: "Ask about prices in market",
    },
    {
      english: "Where are you from?",
      balti: "Tis kun chai?",
      pronunciation: "tis koon CHAI",
      context: "Common conversation starter",
    },
  ]

  const diningPhrases: Phrase[] = [
    {
      english: "I would like to eat",
      balti: "Me khanay la chayi",
      pronunciation: "meh KHAN-ai lah CHAI-ee",
      context: "Express hunger",
    },
    {
      english: "What is this food?",
      balti: "Yay kya khanay hai?",
      pronunciation: "YAI kyah KHAN-ai hai",
      context: "Ask about dish name",
    },
    {
      english: "It's delicious",
      balti: "Bahut mazay da hai",
      pronunciation: "bah-HOOT mah-ZAI dah hai",
      context: "Compliment the food",
    },
    {
      english: "I am vegetarian",
      balti: "Me sabzi khanay waliy",
      pronunciation: "meh sab-ZEE KHAN-ai WAH-lee",
      context: "State dietary preference",
    },
    {
      english: "No spicy, please",
      balti: "Mirchi mat dena",
      pronunciation: "MEER-chee maht DEH-nah",
      context: "Request milder food",
    },
    {
      english: "Water, please",
      balti: "Pani dena",
      pronunciation: "PAH-nee DEH-nah",
      context: "Request water",
    },
    {
      english: "Green tea, please",
      balti: "Sabz chai dena",
      pronunciation: "sahbz CHAI DEH-nah",
      context: "Order local tea",
    },
    {
      english: "The bill, please",
      balti: "Bill dena",
      pronunciation: "BILL DEH-nah",
      context: "Request payment",
    },
  ]

  const directionPhrases: Phrase[] = [
    {
      english: "Where is...?",
      balti: "Kyan chai?",
      pronunciation: "KYahn CHAI",
      context: "Ask location of place",
    },
    {
      english: "How far?",
      balti: "Kintay dur?",
      pronunciation: "kin-TAI door",
      context: "Ask distance",
    },
    {
      english: "Turn left",
      balti: "Bayan phir",
      pronunciation: "bah-YAHN fir",
      context: "Give direction",
    },
    {
      english: "Turn right",
      balti: "Dayan phir",
      pronunciation: "dah-YAHN fir",
      context: "Give direction",
    },
    {
      english: "Go straight",
      balti: "Sidha chalo",
      pronunciation: "see-DAH CHAH-lo",
      context: "Give direction",
    },
    {
      english: "Is it near or far?",
      balti: "Karib hai ya dur?",
      pronunciation: "kah-REEB hai yah door",
      context: "Ask about distance",
    },
    {
      english: "The road to Skardu",
      balti: "Skardu da sadak",
      pronunciation: "SKAR-doo dah sah-DAHK",
      context: "Ask for directions to Skardu",
    },
    {
      english: "Can you show me on the map?",
      balti: "Map par dikha sakda?",
      pronunciation: "map par dik-HAH sahk-DAH",
      context: "Request visual guidance",
    },
  ]

  const culturalPhrases: Phrase[] = [
    {
      english: "Beautiful place",
      balti: "Bahut sundar jagah",
      pronunciation: "bah-HOOT soon-DAHR jah-GAH",
      context: "Compliment the location",
    },
    {
      english: "I love Baltistan",
      balti: "Me Baltistan la chachi",
      pronunciation: "meh BAL-tis-tahn lah CHAH-chee",
      context: "Express appreciation for region",
    },
    {
      english: "Your culture is beautiful",
      balti: "Taski sanskriti bahut sundar",
      pronunciation: "tah-skee sahn-SKREE-tee bah-HOOT soon-DAHR",
      context: "Compliment culture",
    },
    {
      english: "Can I take a photo?",
      balti: "Photo lay sakda?",
      pronunciation: "FOH-to lai sahk-DAH",
      context: "Ask permission to photograph",
    },
    {
      english: "Traditional dress is beautiful",
      balti: "Purani kapray bahut sundar",
      pronunciation: "poo-RAH-nee kah-PRAI bah-HOOT soon-DAHR",
      context: "Compliment traditional clothing",
    },
    {
      english: "What festival is this?",
      balti: "Yay kaun tyohaar?",
      pronunciation: "yai kown teh-OH-har",
      context: "Ask about celebration",
    },
    {
      english: "Can you teach me a traditional song?",
      balti: "Mujhe ek purani gana sikhao",
      pronunciation: "moo-JEH ek poo-RAH-nee gah-NAH sik-HAO",
      context: "Request cultural knowledge",
    },
  ]

  const emergencyPhrases: Phrase[] = [
    {
      english: "Help!",
      balti: "Madad!",
      pronunciation: "mah-DAHD",
      context: "Emergency assistance",
    },
    {
      english: "I am lost",
      balti: "Me rasta bhat gaya",
      pronunciation: "meh rah-STAH bhat gah-YAH",
      context: "Need navigation help",
    },
    {
      english: "I need a doctor",
      balti: "Mujhe daktar chahi",
      pronunciation: "moo-JEH dahk-TAHR chah-HEE",
      context: "Medical emergency",
    },
    {
      english: "I don't feel well",
      balti: "Me thandicho nang",
      pronunciation: "meh THAN-dee-cho nahng",
      context: "Express illness",
    },
    {
      english: "Police",
      balti: "Police",
      pronunciation: "poh-LEES",
      context: "Call authority",
    },
    {
      english: "I have lost my passport",
      balti: "Meray passport kho gaya",
      pronunciation: "meh-RAI pah-SPORT kho gah-YAH",
      context: "Report lost document",
    },
    {
      english: "Where is the hospital?",
      balti: "Hospital kyan chai?",
      pronunciation: "HOS-pit-ul KYahn CHAI",
      context: "Find medical facility",
    },
  ]

  const PhraseTable = ({ phrases }: { phrases: Phrase[] }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-primary/10 border-b border-border">
          <tr>
            <th className="text-left p-3 font-semibold">English</th>
            <th className="text-left p-3 font-semibold">Balti</th>
            <th className="text-left p-3 font-semibold">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {phrases.map((phrase, idx) => (
            <tr key={idx} className="border-b border-border hover:bg-secondary/50">
              <td className="p-3">{phrase.english}</td>
              <td className="p-3 font-semibold">{phrase.balti}</td>
              <td className="p-3 text-muted-foreground italic">{phrase.pronunciation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

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
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Visiting Baltistan? Start Here</h2>
        <p>
          Baltistan is one of the most beautiful regions in the world, home to stunning mountains, warm hospitality, and a rich cultural heritage. Learning a few Balti phrases before your visit shows respect to locals and greatly enhances your travel experience.
        </p>
        <p>
          This guide provides practical phrases for every travel situation—from greetings and dining to asking directions and emergencies. Locals genuinely appreciate visitors who make an effort to speak their language, and it often leads to meaningful cultural exchanges.
        </p>

        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
          <h3 className="font-semibold mb-2">Pronunciation Guide</h3>
          <p className="text-sm">
            Pronunciation is written in phonetic English. Syllables in CAPITALS receive emphasis. Practice these phrases with native Balti speakers if possible.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Greetings & Basic Courtesy</h2>
        <p>
          Start every interaction with appropriate greetings. Balti culture values respect and politeness, so using proper greeting phrases sets a positive tone.
        </p>

        <PhraseTable phrases={greetings} />

        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-2">Cultural Tip</h3>
          <p className="text-sm">
            Always greet with "Assalamo Alaikum" (Islamic greeting) rather than Western-style greetings. It shows cultural respect and is the standard in Baltistan.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Essential Travel Phrases</h2>
        <p>
          These phrases help you navigate common travel situations and communicate your needs:
        </p>

        <PhraseTable phrases={essentialPhrases} />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Dining & Food Phrases</h2>
        <p>
          Balti cuisine is delicious and unique. Use these phrases to order food, express preferences, and compliment the cook:
        </p>

        <PhraseTable phrases={diningPhrases} />

        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Food to Try</h3>
          <p className="text-sm mb-2">
            <span className="font-semibold">Balti Broth (Thuki):</span> A hearty meat broth served with potatoes and peas—comfort food staple.
          </p>
          <p className="text-sm mb-2">
            <span className="font-semibold">Skyu:</span> Hand-rolled pasta with vegetable sauce, unique to Baltistan.
          </p>
          <p className="text-sm">
            <span className="font-semibold">Apricots:</span> Baltistan is famous for dried and fresh apricots—don&apos;t miss them!
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Directions & Navigation</h2>
        <p>
          Navigate Baltistan confidently with these direction phrases:
        </p>

        <PhraseTable phrases={directionPhrases} />

        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Places to Visit</h3>
          <ul className="text-sm space-y-1">
            <li>
              <span className="font-semibold">Skardu:</span> Regional capital with stunning views
            </li>
            <li>
              <span className="font-semibold">Khaplu:</span> Ancient town with historic palace
            </li>
            <li>
              <span className="font-semibold">Kargil:</span> Town with rich cultural heritage
            </li>
            <li>
              <span className="font-semibold">Nubra Valley:</span> Remote mountain beauty
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Cultural & Social Phrases</h2>
        <p>
          Show genuine interest in Balti culture. Locals appreciate visitors who engage respectfully:
        </p>

        <PhraseTable phrases={culturalPhrases} />

        <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Cultural Etiquette</h3>
          <ul className="text-sm space-y-2">
            <li>
              <span className="font-semibold">Photography:</span> Always ask permission before photographing people
            </li>
            <li>
              <span className="font-semibold">Dress:</span> Modest clothing is respectful in this conservative region
            </li>
            <li>
              <span className="font-semibold">Ramadan:</span> If visiting during Ramadan, avoid eating in public during fasting hours
            </li>
            <li>
              <span className="font-semibold">Right Hand:</span> Use right hand for eating and giving/receiving items
            </li>
            <li>
              <span className="font-semibold">Shoes:</span> Remove shoes when entering homes and mosques
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Emergency Phrases</h2>
        <p>
          While we hope you won&apos;t need these, it&apos;s important to know emergency phrases:
        </p>

        <PhraseTable phrases={emergencyPhrases} />

        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Emergency Contacts</h3>
          <ul className="text-sm space-y-1">
            <li>
              <span className="font-semibold">Police:</span> 15
            </li>
            <li>
              <span className="font-semibold">Ambulance:</span> 115
            </li>
            <li>
              <span className="font-semibold">Fire:</span> 16
            </li>
            <li>
              <span className="font-semibold">Your Embassy:</span> Keep contact details readily available
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Practice Tips for Travelers</h2>
        <p>
          Make the most of these phrases during your visit:
        </p>

        <div className="space-y-3">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Listen Actively</h3>
            <p className="text-sm mt-1">
              Pay attention to how locals pronounce phrases. Your ear will attune to the language quickly.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Embrace Mistakes</h3>
            <p className="text-sm mt-1">
              Don&apos;t fear mispronunciation. Locals will appreciate your effort and gently correct you.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Use Hand Gestures</h3>
            <p className="text-sm mt-1">
              Combining phrases with gestures helps communication when language barriers exist.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Connect with Locals</h3>
            <p className="text-sm mt-1">
              Language exchange opens doors to friendships and authentic cultural experiences unavailable to monolingual tourists.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold">Take Notes</h3>
            <p className="text-sm mt-1">
              Write down new words and phrases you encounter. Review them daily to build vocabulary.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Beyond the Phrases</h2>
        <p>
          Learning phrases is just the beginning. Baltistan welcomes visitors who show genuine interest in the culture. Attend local festivals, visit family-run guesthouses, hike with local guides, and most importantly, listen to stories from locals. These interactions will enrich your travel experience far more than any guidebook.
        </p>
        <p>
          The people of Baltistan are known for their warmth and hospitality. Your effort to speak their language is a bridge that often leads to meaningful connections and unforgettable memories.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
        <p>
          These essential phrases provide a foundation for travel in Baltistan. While you won&apos;t master the language in a week, these tools will help you navigate, connect, and show respect to the communities you visit. Combine them with genuine interest in Balti culture, and you&apos;ll discover that language is less about perfect grammar and more about the connection between people.
        </p>
        <p>
          Safe travels, and remember: "Shukriya" (thank you) goes a long way in any language.
        </p>
      </section>
    </BlogArticleLayout>
  )
}
