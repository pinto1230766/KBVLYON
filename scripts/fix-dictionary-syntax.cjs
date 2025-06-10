const fs = require('fs');
const path = require('path');

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

  let rawEntriesContent = match[1];

  // Split the content into individual entry strings based on the closing brace and comma pattern
  const entryStrings = rawEntriesContent.split(/},\s*{/);

  const correctedEntries = [];

  for (let i = 0; i < entryStrings.length; i++) {
    let entryStr = entryStrings[i].trim();

    // Add back the braces that were removed by split, except for the very first and last entry
    if (i > 0) {
      entryStr = '{' + entryStr;
    }
    if (i < entryStrings.length - 1) {
      entryStr = entryStr + '}';
    }

    // Remove any leading/trailing commas that might be left from malformed entries
    entryStr = entryStr.replace(/^,/, '').replace(/,$/, '');

    // Attempt to parse the entry string more robustly
    let idMatch = entryStr.match(/id:\s*['"](.*?)['"],/);
    let wordMatch = entryStr.match(/word:\s*['"](.*?)['"],/);
    let ptMatch = entryStr.match(/pt:\s*['"](.*?)['"],/);
    let cvMatch = entryStr.match(/cv:\s*['"](.*?)['"]/); // Last one might not have a trailing comma
    let examplePtMatch = entryStr.match(/example:\s*{\s*pt:\s*['"](.*?)['"],/);
    let exampleCvMatch = entryStr.match(/example:\s*{\s*pt:\s*['"].*?['"],\s*cv:\s*['"](.*?)['"]\s*}/);
    let noteMatch = entryStr.match(/note:\s*['"](.*?)['"]/);

    let newEntry = {
      id: idMatch ? idMatch[1] : `unknown-id-${i}`,
      word: wordMatch ? wordMatch[1] : 'unknown-word',
      translation: {
        pt: ptMatch ? ptMatch[1] : (wordMatch ? wordMatch[1] : 'missing-pt'),
        cv: cvMatch ? cvMatch[1] : 'missing-cv'
      }
    };

    if (examplePtMatch && exampleCvMatch) {
      newEntry.example = {
        pt: examplePtMatch[1],
        cv: exampleCvMatch[1]
      };
    }

    if (noteMatch) {
      let noteContent = noteMatch[1];
      // Escape literal backslashes first
      noteContent = noteContent.replace(/\\/g, '\\\\'); 
      // Escape single quotes
      noteContent = noteContent.replace(/'/g, "\\'"); 
      
      newEntry.note = noteContent;
    }
    
    correctedEntries.push(newEntry);
  }

  // Reconstruct the string representation of the corrected array
  let correctedEntriesString = JSON.stringify(correctedEntries, null, 2);

  // Replace quotes
  correctedEntriesString = correctedEntriesString
    .replace(/"(\w+)":/g, '$1:') // Remove quotes from keys
    .replace(/"/g, "'"); // Change double quotes to single quotes for single quotes

  // Replace the old array string with the new one in the file content
  const newFileContent = fileContent.replace(dictionaryRegex, `export const dictionaryEntries: DictionaryEntry[] = ${correctedEntriesString};`);

  fs.writeFileSync(grammarDataPath, newFileContent, 'utf8');
  console.log('Successfully fixed grammarData.ts syntax.');

} catch (error) {
  console.error('Error fixing grammarData.ts:', error);
}
