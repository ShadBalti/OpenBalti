import { MongoClient } from "mongodb"
import type { Word } from "@/lib/words"

// Sample Balti words data
const sampleWords: Word[] = [
  {
    word: "ཆུ",
    transliteration: "chu",
    meaning: "water",
    partOfSpeech: "noun",
    example: "ཆུ འཐུང་ (chu athung) - Drink water",
    pronunciation: "/tʃuː/",
    etymology: "From Classical Tibetan: ཆུ (chu)",
    relatedWords: ["ཆུ་མིག (chumik) - spring", "ཆུ་ཚན (chutsen) - hot spring"],
  },
  {
    word: "རི",
    transliteration: "ri",
    meaning: "mountain",
    partOfSpeech: "noun",
    example: "རི མཐོན་པོ་ (ri thönpo) - High mountain",
    pronunciation: "/ri/",
    etymology: "From Classical Tibetan: རི (ri)",
    relatedWords: ["རི་མགོ (rigo) - mountain top", "རི་ཁྲོད (ritrö) - hermitage"],
  },
  {
    word: "ཉི་མ",
    transliteration: "nyima",
    meaning: "sun",
    partOfSpeech: "noun",
    example: "ཉི་མ ཤར་ (nyima shar) - The sun rises",
    pronunciation: "/ɲima/",
    etymology: "From Classical Tibetan: ཉི་མ (nyi ma)",
    relatedWords: ["ཉིན་མོ (nyinmo) - day", "ཉི་འོད (nyi'ö) - sunlight"],
  },
  {
    word: "ཟ",
    transliteration: "za",
    meaning: "eat",
    partOfSpeech: "verb",
    example: "ཁོང་ ཟ་ (khong za) - He eats",
    pronunciation: "/za/",
    etymology: "From Classical Tibetan: ཟ་ (za)",
    relatedWords: ["ཟ་མ (zama) - food", "ཟ་ཁང (zakhang) - restaurant"],
  },
  {
    word: "ལོ",
    transliteration: "lo",
    meaning: "year",
    partOfSpeech: "noun",
    example: "ལོ གསར་པ་ (lo sarpa) - New year",
    pronunciation: "/lo/",
    etymology: "From Classical Tibetan: ལོ (lo)",
    relatedWords: ["ལོ་གསར (losar) - new year festival", "ལོ་ཙཱ་བ (lotsawa) - translator"],
  },
  {
    word: "ལམ",
    transliteration: "lam",
    meaning: "path, road, way",
    partOfSpeech: "noun",
    example: "ལམ་རིང་པོ་ (lam ringpo) - Long road",
    pronunciation: "/lam/",
    etymology: "From Classical Tibetan: ལམ (lam)",
    relatedWords: ["ལམ་ཁ (lamkha) - road", "ལམ་སྟོན (lamtön) - guide"],
  },
  {
    word: "མེ",
    transliteration: "me",
    meaning: "fire",
    partOfSpeech: "noun",
    example: "མེ་འབར་ (me bar) - The fire burns",
    pronunciation: "/me/",
    etymology: "From Classical Tibetan: མེ (me)",
    relatedWords: ["མེ་ཏོག (metok) - flower", "མེ་རི (meri) - flame"],
  },
  {
    word: "ནམ་མཁའ",
    transliteration: "namkha",
    meaning: "sky",
    partOfSpeech: "noun",
    example: "ནམ་མཁའ་སྔོན་པོ་ (namkha ngönpo) - Blue sky",
    pronunciation: "/namkʰa/",
    etymology: "From Classical Tibetan: ནམ་མཁའ (nam mkha')",
    relatedWords: ["ནམ་ཟླ (namdla) - weather", "ནམ་ལངས (namlang) - dawn"],
  },
  {
    word: "ཤིང",
    transliteration: "shing",
    meaning: "tree, wood",
    partOfSpeech: "noun",
    example: "ཤིང་སྡོང་ (shingdong) - Tree trunk",
    pronunciation: "/ʃiŋ/",
    etymology: "From Classical Tibetan: ཤིང (shing)",
    relatedWords: ["ཤིང་ཏོག (shingtok) - fruit", "ཤིང་ནགས (shingnag) - forest"],
  },
  {
    word: "རྒྱ་མཚོ",
    transliteration: "gyatso",
    meaning: "ocean, sea",
    partOfSpeech: "noun",
    example: "རྒྱ་མཚོ་ཆེན་པོ་ (gyatso chenpo) - Great ocean",
    pronunciation: "/ɟatso/",
    etymology: "From Classical Tibetan: རྒྱ་མཚོ (rgya mtsho)",
    relatedWords: ["མཚོ (tso) - lake", "རྒྱ་མཚོའི་གླིང་ (gyatsoi ling) - island"],
  },
]

async function seedDatabase() {
  if (!process.env.MONGODB_URI) {
    throw new Error("Please add your MongoDB URI to .env.local")
  }

  try {
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("balti_dictionary")
    const collection = db.collection("words")

    // Check if collection already has data
    const count = await collection.countDocuments()
    if (count > 0) {
      console.log(`Database already has ${count} words. Skipping seed.`)
      await client.close()
      return
    }

    // Add timestamps to each word
    const now = new Date()
    const wordsWithTimestamps = sampleWords.map((word) => ({
      ...word,
      createdAt: now,
      updatedAt: now,
    }))

    // Insert the sample words
    const result = await collection.insertMany(wordsWithTimestamps)
    console.log(`Successfully inserted ${result.insertedCount} words into the database`)

    await client.close()
    console.log("Database connection closed")
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

// Run the seed function
seedDatabase()

