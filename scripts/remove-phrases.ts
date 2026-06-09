import mongoose from "mongoose";
import * as fs from "fs";
import * as path from "path";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please set MONGODB_URI environment variable");
  process.exit(1);
}

// Define Word schema inline for the script
const WordSchema = new mongoose.Schema({
  balti: { type: String, required: true, trim: true },
  english: { type: String, required: true, trim: true },
  phonetic: { type: String, trim: true },
  categories: { type: [String], default: [] },
  dialect: { type: String, trim: true },
  usageNotes: { type: String, trim: true },
  relatedWords: { type: [String], default: [] },
  difficultyLevel: { type: String, enum: ["beginner", "intermediate", "advanced"], default: "intermediate" },
  examples: { type: [{ balti: String, english: String }], default: [] },
  etymology: { type: String, trim: true },
  culturalNotes: { type: String, trim: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  feedbackStats: {
    useful: { type: Number, default: 0 },
    trusted: { type: Number, default: 0 },
    needsReview: { type: Number, default: 0 },
  },
}, { timestamps: true });

const Word = mongoose.models.Word || mongoose.model("Word", WordSchema);

async function removePhrases() {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log("Connected to MongoDB.");

    // Remove all entries where 'balti' field contains a space (i.e., multi-word phrases)
    const result = await Word.deleteMany({ balti: { $regex: /\s/ } });
    console.log(`Removed ${result.deletedCount} phrases from the database.`);

    // Also update the dataset JSON file
    const datasetPath = path.join(__dirname, "../data/balti_dictionary_dataset.json");
    if (fs.existsSync(datasetPath)) {
      const data = JSON.parse(fs.readFileSync(datasetPath, "utf-8"));
      const originalCount = data.length;
      const filtered = data.filter((entry: any) => !entry.balti.includes(" "));
      fs.writeFileSync(datasetPath, JSON.stringify(filtered, null, 2));
      console.log(`Dataset file: removed ${originalCount - filtered.length} phrases, ${filtered.length} entries remaining.`);
    } else {
      console.log("Dataset file not found, skipping file update.");
    }

    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

removePhrases();
