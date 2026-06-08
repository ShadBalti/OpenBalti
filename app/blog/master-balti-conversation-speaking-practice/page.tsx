import { generateMetadata } from "@/lib/metadata"
import { ARTICLES } from "@/lib/blog-articles"
import { BlogArticleLayout } from "@/components/blog-article-layout"

export const metadata = generateMetadata(
  "Master Balti Conversation: Speaking Tips & Practice Dialogues",
  "Become confident speaking Balti with real-world dialogue examples, practical strategies, and speaking tips from conversation coaches.",
  {
    keywords: [
      "Balti conversation",
      "speaking practice",
      "Balti dialogues",
      "how to speak Balti",
      "conversation skills",
    ],
  },
)

const article = ARTICLES["master-balti-conversation-speaking-practice"]

export default function ConversationPracticePage() {
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
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Building Conversation Confidence</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Speaking is often the most challenging skill for language learners, yet it&apos;s also the most rewarding. This guide provides proven strategies for moving from textbook knowledge to actual conversational fluency. Through real dialogues and practical techniques, you&apos;ll gain the confidence to communicate naturally with native Balti speakers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Essential Conversation Patterns</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Master these fundamental conversational patterns that form the basis of everyday Balti discourse:
          </p>
          
          <div className="space-y-4">
            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Pattern 1: Greeting & Introduction</h3>
              <div className="space-y-2 text-sm">
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">A: سلام و علیکم</p>
                  <p className="text-foreground/70">Asalam u alaikum (Peace be upon you)</p>
                </div>
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">B: و علیکم السلام</p>
                  <p className="text-foreground/70">Wa alaikum asalam (And upon you be peace)</p>
                </div>
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">A: تمو نام چھی ہے؟</p>
                  <p className="text-foreground/70">Tamo nam chi he? (What is your name?)</p>
                </div>
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">B: میرو نام احمد ہے</p>
                  <p className="text-foreground/70">Mero nam Ahmad he (My name is Ahmad)</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Pattern 2: Asking for Help</h3>
              <div className="space-y-2 text-sm">
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">A: معافی، کیا تم مجھے مدد کر سکتے ہو؟</p>
                  <p className="text-foreground/70">Maafi, kya tum mujhe madad kar sakte ho?</p>
                  <p className="text-foreground/60">(Excuse me, can you help me?)</p>
                </div>
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">B: جی، میں خوشی سے مدد کروں گا</p>
                  <p className="text-foreground/70">Ji, main khushi se madad karunga</p>
                  <p className="text-foreground/60">(Yes, I&apos;ll help gladly)</p>
                </div>
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">A: شکریہ بہت!</p>
                  <p className="text-foreground/70">Shukriya bhat! (Thank you very much!)</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Pattern 3: Asking Directions</h3>
              <div className="space-y-2 text-sm">
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">A: روڈ ہسپتال کہ طرف کہاں ہے؟</p>
                  <p className="text-foreground/70">Road hospital ke taraf kahan hai?</p>
                  <p className="text-foreground/60">(Which way to the hospital?)</p>
                </div>
                <div className="py-2 px-3 bg-background rounded">
                  <p className="font-medium">B: سیدھے جاؤ، پھر دائیں موڑو</p>
                  <p className="text-foreground/70">Seedhe jao, fir dain moro</p>
                  <p className="text-foreground/60">(Go straight, then turn right)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Real-World Dialogue Examples</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Practice with these authentic dialogue scenarios you&apos;ll encounter in real Balti communities:
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
              <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Scenario: At the Market</h3>
              <div className="space-y-2 text-sm">
                <div className="py-1"><strong>Vendor:</strong> سلام ایش و صحت سے؟</div>
                <div className="py-1"><strong>You:</strong> السلام و علیکم، میں ٹماٹر چاہتا ہوں</div>
                <div className="py-1"><strong>Vendor:</strong> ٹماٹر خوب تھازہ ہے، ایک کلو لوگے؟</div>
                <div className="py-1"><strong>You:</strong> جی، ایک کلو دے دیں</div>
                <div className="py-1"><strong>Vendor:</strong> یہ رہے، کتنے پیسے دوگے؟</div>
                <div className="py-1"><strong>You:</strong> قیمت کیا ہے؟</div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 p-4 rounded">
              <h3 className="font-semibold text-green-900 dark:text-green-200 mb-3">Scenario: Making a New Friend</h3>
              <div className="space-y-2 text-sm">
                <div className="py-1"><strong>Person A:</strong> تم بلتستان سے ہو؟</div>
                <div className="py-1"><strong>Person B:</strong> جی، میں سکردو سے ہوں</div>
                <div className="py-1"><strong>Person A:</strong> واہ، میں خود بھی سکردو سے ہوں!</div>
                <div className="py-1"><strong>Person B:</strong> واقعی؟ ہم پھر دوست بن سکتے ہیں</div>
                <div className="py-1"><strong>Person A:</strong> بہترین خیال ہے!</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Practical Speaking Strategies</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Use these expert strategies to improve your conversational ability:
          </p>
          
          <div className="space-y-4">
            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">1. Start Simple</h3>
              <p className="text-sm text-foreground/80">Begin with basic greetings and simple questions. Gradually expand to more complex topics as your confidence grows.</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">2. Active Listening</h3>
              <p className="text-sm text-foreground/80">Pay close attention to native speakers. Listen for intonation, stress, and conversational flow patterns.</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">3. Repetition & Shadowing</h3>
              <p className="text-sm text-foreground/80">Repeat dialogues after native speakers, imitating pronunciation and naturalness. This builds fluency through muscle memory.</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">4. Record Yourself</h3>
              <p className="text-sm text-foreground/80">Use your phone to record practice conversations. Listen back and identify areas for improvement.</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">5. Don&apos;t Fear Mistakes</h3>
              <p className="text-sm text-foreground/80">Native speakers appreciate effort and communication attempts, even with errors. Mistakes are learning opportunities.</p>
            </div>

            <div className="bg-primary/5 rounded-lg p-4">
              <h3 className="font-semibold mb-2">6. Find Conversation Partners</h3>
              <p className="text-sm text-foreground/80">Connect with native speakers or other learners for regular practice. Consistency is key to fluency.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Handling Common Conversation Challenges</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Every speaker faces challenges. Here&apos;s how to handle common situations gracefully:
          </p>
          
          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-1">I don&apos;t understand</h3>
              <p className="text-sm text-foreground/80">Say: &quot;معافی کریں، میں سمجھ نہیں آیا&quot; (Maafi karen, main samajh nahi aya)</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-1">Can you speak slowly?</h3>
              <p className="text-sm text-foreground/80">Say: &quot;کیا تم آہستہ بات کر سکتے ہو؟&quot; (Kya tum aista bat kar sakte ho?)</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-1">How do I say...?</h3>
              <p className="text-sm text-foreground/80">Say: &quot;... کو بلتی میں کیا کہتے ہیں؟&quot; (...ko Balti mein kya kehte hain?)</p>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
              <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-1">Repeat that, please</h3>
              <p className="text-sm text-foreground/80">Say: &quot;براہ کرم دوبارہ کہیں&quot; (Brah karam dobara kahen)</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <p className="text-foreground/80 leading-relaxed">
            Conversational fluency develops through consistent practice with authentic materials and real people. Start with basic patterns, gradually expand your vocabulary and grammar knowledge, and immerse yourself in natural Balti speech whenever possible. Remember that every native speaker started as a beginner—your effort and enthusiasm matter more than perfection.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  )
}
