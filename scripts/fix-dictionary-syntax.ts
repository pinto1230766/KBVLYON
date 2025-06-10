import fs from 'fs';
import path from 'path';

interface DictionaryEntry {
  id: string;
  word: string;
  translation: {
    pt: string;
    cv: string;
  };
  example?: {
    pt: string;
    cv: string;
  };
  note?: string;
}

const grammarDataPath = path.resolve(__dirname, '../src/data/grammarData.ts');

try {
  let fileContent = fs.readFileSync(grammarDataPath, 'utf8');

  // Extract the dictionaryEntries array string
  const dictionaryRegex = /export const dictionaryEntries: DictionaryEntry\[\] = \[\s*([\s\S]*?)\s*\];/;
  const match = fileContent.match(dictionaryRegex);

  if (!match || !match[1]) {
    console.error('Could not find dictionaryEntries array in grammarData.ts');
    process.exit(1);
  }

  let rawEntriesString = `[${match[1]}]`;

  // Attempt to fix common syntax errors before parsing
  // Remove extra commas that might be floating around
  rawEntriesString = rawEntriesString.replace(/,\s*,/g, ',');
  // Ensure objects are properly closed if a note was outside
  rawEntriesString = rawEntriesString.replace(/}\s*,\s*note:/g, '}, note:');
  rawEntriesString = rawEntriesString.replace(/}\s*note:/g, '}, note:');


  // Manually fix the specific problematic pattern identified:
  // { id: 'entry-X', word: 'Y', cv: 'Z' }, note: '...'
  // Should be:
  // { id: 'entry-X', word: 'Y', translation: { pt: 'Y', cv: 'Z' }, note: '...' },
  // This is complex to do with regex reliably without parsing.
  // Let's try a more robust parsing approach.

  // Temporarily make it valid JSON by wrapping keys in quotes and handling single quotes
  rawEntriesString = rawEntriesString.replace(/(\w+):/g, '"$1":');
  rawEntriesString = rawEntriesString.replace(/'/g, '"');
  
  // Remove trailing commas that might cause issues in JSON.parse
  rawEntriesString = rawEntriesString.replace(/,\s*\]/g, ']');
  rawEntriesString = rawEntriesString.replace(/,\s*}/g, '}');


  let parsedEntries: any[];
  try {
    parsedEntries = JSON.parse(rawEntriesString);
  } catch (jsonError) {
    console.error('Failed to parse dictionaryEntries after initial cleanup. Attempting more aggressive fix.', jsonError);
    // Fallback for more complex parsing issues, might involve manual string manipulation
    // This part would be highly specific to the exact malformed structure.
    // For now, let's assume the above regex fixes are sufficient for JSON.parse to work.
    // If not, a more advanced parser or manual string manipulation would be needed.
    process.exit(1);
  }


  const correctedEntries: DictionaryEntry[] = parsedEntries.map((entry: any) => {
    const newEntry: DictionaryEntry = {
      id: entry.id,
      word: entry.word,
      translation: {
        pt: entry.pt || entry.word, // Use existing pt or fallback to word
        cv: entry.cv // Use existing cv
      }
    };

    // If example exists, add it
    if (entry.example) {
      newEntry.example = entry.example;
    }

    // If note exists, add it
    if (entry.note) {
      newEntry.note = entry.note;
    }

    // Handle cases where 'pt' and 'cv' were direct properties of the entry, not nested under 'translation'
    // This is the core of the fix for the reported error pattern.
    if (typeof entry.pt === 'string' && !entry.translation) {
        newEntry.translation.pt = entry.pt;
        // Delete old direct properties if they exist and were moved
        delete entry.pt;
    }
    if (typeof entry.cv === 'string' && !entry.translation) {
        newEntry.translation.cv = entry.cv;
        // Delete old direct properties if they exist and were moved
        delete entry.cv;
    }

    return newEntry;
  });

  // Reconstruct the string representation of the corrected array
  const correctedEntriesString = JSON.stringify(correctedEntries, null, 2)
    .replace(/"(\w+)":/g, '$1:') // Remove quotes from keys
    .replace(/"/g, "'"); // Change double quotes to single quotes for string values

  // Replace the old array string with the new one in the file content
  const newFileContent = fileContent.replace(dictionaryRegex, `export const dictionaryEntries: DictionaryEntry[] = ${correctedEntriesString};`);

  fs.writeFileSync(grammarDataPath, newFileContent, 'utf8');
  console.log('Successfully fixed grammarData.ts syntax.');

} catch (error) {
  console.error('Error fixing grammarData.ts:', error);
}
