
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import Word from '../models/Word'; // Adjust path as necessary

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Please define the MONGODB_URI environment variable in .env');
  process.exit(1);
}

// Placeholder for createdBy field - replace with a valid ObjectId if needed
const PLACEHOLDER_CREATED_BY = new mongoose.Types.ObjectId('60d5ec49f8c7d1001c8b4567'); // Example ObjectId

async function seedDictionary() {
  await mongoose.connect(MONGODB_URI as string);
  console.log('Connected to MongoDB.');

  try {
    const dataPath = path.resolve(__dirname, '../data/balti_dictionary_dataset.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const dictionaryEntries = JSON.parse(jsonData);

    let insertedCount = 0;
    let skippedCount = 0;

    for (const entry of dictionaryEntries) {
      // Check for existing word by 'balti' field to prevent duplicates
      const existingWord = await Word.findOne({ balti: entry.balti });

      if (existingWord) {
        skippedCount++;
        // console.log(`Skipping duplicate: ${entry.balti}`);
      } else {
        // Ensure all required fields are present or provide defaults
        const newWord = new Word({
          balti: entry.balti,
          english: entry.english,
          phonetic: entry.phonetic || '',
          scripts: entry.scripts || [
            { script: 'roman', text: entry.balti, isPrimary: true },
            ...(entry.phonetic ? [{ script: 'ipa', text: entry.phonetic }] : []),
          ],
          definitions: entry.definitions || [
            { language: 'english', text: entry.english, isPrimary: true },
            ...(entry.urdu ? [{ language: 'urdu', text: entry.urdu }] : []),
            ...(entry.baltiDefinition ? [{ language: 'balti', text: entry.baltiDefinition }] : []),
          ],
          partOfSpeech: entry.partOfSpeech || 'unknown',
          searchTerms: entry.searchTerms || [entry.balti, entry.english, entry.phonetic].filter(Boolean),
          categories: entry.categories || [],
          dialect: entry.dialect || '',
          usageNotes: entry.usageNotes || '',
          relatedWords: entry.relatedWords || [],
          difficultyLevel: entry.difficultyLevel || 'beginner',
          examples: entry.examples || [],
          etymology: entry.etymology || '',
          culturalNotes: entry.culturalNotes || '',
          linguisticData: entry.linguisticData || {},
          createdBy: PLACEHOLDER_CREATED_BY,
          feedbackStats: { useful: 0, trusted: 0, needsReview: 0 },
        });
        await newWord.save();
        insertedCount++;
        // console.log(`Inserted: ${entry.balti}`);
      }

      if ((insertedCount + skippedCount) % 100 === 0) {
        console.log(`Progress: ${insertedCount + skippedCount}/${dictionaryEntries.length} processed. Inserted: ${insertedCount}, Skipped: ${skippedCount}`);
      }
    }

    console.log('\n--- Seeding Complete ---');
    console.log(`Total entries processed: ${dictionaryEntries.length}`);
    console.log(`Inserted new entries: ${insertedCount}`);
    console.log(`Skipped duplicate entries: ${skippedCount}`);
  } catch (error) {
    console.error('Error seeding dictionary:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

seedDictionary();
