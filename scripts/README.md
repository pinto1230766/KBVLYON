# 🔧 Unified PDF Extraction Tool

A consolidated, well-documented script that handles all PDF processing needs for the KBVLYON project. This unified tool replaces multiple individual extraction scripts with a single, comprehensive solution.

## ✨ Features

- **PDF Text Extraction**: Extract raw text from PDF files
- **Dictionary Processing**: Parse dictionary entries from PDFs with multiple format support
- **Lessons Processing**: Extract and categorize grammar lessons from PDFs
- **Preaching Lessons**: Extract lessons from source maps (APK extraction)
- **APK JavaScript Processing**: Extract lessons from compiled JavaScript files
- **18-Lesson Curriculum**: Generate complete 18-lesson learning curriculum
- **TypeScript Generation**: Auto-generate properly typed TypeScript data files

## 🚀 Installation

1. Install the required dependency:

```bash
npm install pdf-parse
```

## 📁 File Structure

```text
KBVLYON/
├── scripts/
│   ├── unified_pdf_extractor.cjs    # Main unified extraction script
│   ├── extractPdfData.cjs           # Legacy - consolidated into unified script
│   ├── extract_lessons_from_pdfs.cjs # Legacy - consolidated
│   ├── extract_preaching_lessons.js # Legacy - consolidated
│   ├── generate_18_lessons.cjs      # Legacy - consolidated
│   └── README.md                    # This documentation
├── pdfs/                            # Place your PDFs here
│   ├── dicionario-cv.pdf
│   ├── licoes-gramatica.pdf
│   └── ...
├── assets/public/
│   └── grammar_lessons_extracted.json
└── src/data/                        # Generated files
    ├── dictionaryData.ts
    ├── lessonsData.ts
    └── preachingLessons_from_apk.ts
```

## 🎯 Usage

### Command Line Interface

```bash
node scripts/unified_pdf_extractor.cjs --type <extraction-type> [options]
```

### Extraction Types

| Type | Description | Input Required |
|------|-------------|----------------|
| `pdf-text` | Extract raw text from all PDFs | None |
| `dictionary` | Extract dictionary entries from PDFs | None (scans pdfs/ folder) |
| `lessons` | Extract grammar lessons from PDFs | None (scans pdfs/ folder) |
| `preaching` | Extract preaching lessons from source map | `--source-map <path>` |
| `apk-lessons` | Extract lessons from APK JavaScript | `--input <js-file>` |
| `generate-18` | Generate complete 18-lesson curriculum | None |

### Options

- `--input <path>`: Input file path (for apk-lessons)
- `--output <path>`: Custom output file path
- `--source-map <path>`: Source map file path (for preaching)
- `--help`: Show help information

## 📋 Examples

### Extract Text from PDFs
```bash
node scripts/unified_pdf_extractor.cjs --type pdf-text
```

### Extract Dictionary Data
```bash
node scripts/unified_pdf_extractor.cjs --type dictionary
```

### Extract Grammar Lessons
```bash
node scripts/unified_pdf_extractor.cjs --type lessons
```

### Extract Preaching Lessons from Source Map
```bash
node scripts/unified_pdf_extractor.cjs --type preaching --source-map "C:/path/to/app.js.map"
```

### Extract Lessons from APK JavaScript
```bash
node scripts/unified_pdf_extractor.cjs --type apk-lessons --input "path/to/extracted/app.js"
```

### Generate 18-Lesson Curriculum
```bash
node scripts/unified_pdf_extractor.cjs --type generate-18
```

### Custom Output Location
```bash
node scripts/unified_pdf_extractor.cjs --type dictionary --output src/data/myDictionary.ts
```

## 📖 Supported PDF Formats

### Dictionary Formats

The script recognizes multiple dictionary formats:

**Format 1:** `word - PT: translation - CV: translation - Ex: example`
```text
abadu - PT: abade, padre - CV: abadu - Ex: O abade da igreja é muito sábio
```

**Format 2:** `word (PT translation) (CV translation)`
```text
abanu (abanão, abano) (abanu)
```

**Format 3:** `word PT: translation CV: translation`
```text
abaxu PT: abaixo CV: abaxu Ex: Assine seu nome abaixo da linha
```

### Lessons Format

Lessons are automatically detected based on:
- Titles starting with "Lição" or "Lesson"
- Auto-detected categories (Pronomes, Verbos, Sintaxe, etc.)

## 📊 Output Files

The script generates properly typed TypeScript files:

- `src/data/dictionaryData.ts` - Dictionary entries with translations
- `src/data/lessonsData.ts` - Grammar lessons with categories
- `src/data/preachingLessons_from_apk.ts` - Preaching lessons from APK
- `src/data/lessons_extracted.json` - Raw PDF extraction results

## 🔧 Customization

### Modifying Parsing Formats

If your PDFs have different formats, modify the parsing functions in `unified_pdf_extractor.cjs`:

- `parseDictionaryText()` - For dictionary entries
- `parseLessonsText()` - For lesson content
- `detectCategory()` - For automatic lesson categorization

### Adding Categories

In the `detectCategory()` function, add your own keywords:

```javascript
if (lowerText.includes('your-keyword')) return 'Your-Category';
```

## ⚠️ Important Notes

1. **PDF Quality**: Scanned PDFs (images) won't work. Use PDFs with selectable text.

2. **Text Format**: The script works best with well-formatted PDFs. You may need to adjust regex patterns for your specific format.

3. **Encoding**: Ensure PDFs use UTF-8 encoding for Portuguese/Creole special characters.

4. **Backup**: The script overwrites existing files. Make backups before running!

## 🐛 Troubleshooting

### No words extracted?

- Verify PDF contains selectable text (not scanned images)
- Open PDF and copy some lines to see exact format
- Adjust regex in `parseDictionaryText()` to match your format

### Wrong categories?

- Modify `detectCategory()` function with your keywords

### "Cannot find module 'pdf-parse'" error?

- Install dependency: `npm install pdf-parse`

### APK extraction issues?

- Ensure JavaScript file contains the expected array format `A = [...]`
- Check that the file was properly extracted from APK

## 📚 Legacy Scripts

The following scripts have been consolidated into `unified_pdf_extractor.cjs`:

- `extractPdfData.cjs` → Use `--type dictionary` or `--type lessons`
- `extract_lessons_from_pdfs.cjs` → Use `--type pdf-text`
- `extract_preaching_lessons.js` → Use `--type preaching`
- `generate_18_lessons.cjs` → Use `--type generate-18`
- `extract_lessons_manual.py` → Use `--type apk-lessons`

## 🎯 Migration Guide

### Old usage:
```bash
node scripts/extractPdfData.cjs
```

### New usage:
```bash
# Extract dictionary
node scripts/unified_pdf_extractor.cjs --type dictionary

# Extract lessons
node scripts/unified_pdf_extractor.cjs --type lessons
```

## 📞 Support

For questions or issues:

1. Check PDF formats and script logs
2. Test with one PDF at a time
3. Verify file paths and permissions
4. Ensure all dependencies are installed

## 🎉 Result

Once successfully executed, your data will be automatically available in the KBVLYON application with proper TypeScript types and validation!
