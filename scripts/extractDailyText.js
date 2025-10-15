import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { XMLParser } from 'fast-xml-parser';

const fsp = fs.promises;

const EPUB_DIR = path.resolve('assets/daily-text');
const OUTPUT_DIR = path.resolve('src/data');
const RAW_OUTPUT_DIR = path.join(OUTPUT_DIR, 'epub-raw');

const SOURCES = [
  { language: 'pt', file: 'es25_TPO.epub' },
  { language: 'kea', file: 'es25_KBV.epub' },
];

const xmlParser = new XMLParser({ ignoreAttributes: false });

const ensureDir = async (dirPath) => {
  await fsp.mkdir(dirPath, { recursive: true });
};

const loadEpub = async (filePath) => {
  const buffer = await fsp.readFile(filePath);
  return JSZip.loadAsync(buffer);
};

const getRootfilePath = async (zip) => {
  const containerEntry = zip.file('META-INF/container.xml');
  if (!containerEntry) {
    throw new Error('META-INF/container.xml introuvable');
  }

  const containerXml = await containerEntry.async('string');
  const containerDoc = xmlParser.parse(containerXml);
  const rootfiles = containerDoc?.container?.rootfiles?.rootfile;
  const rootfile = Array.isArray(rootfiles) ? rootfiles[0] : rootfiles;

  if (!rootfile?.['@_full-path']) {
    throw new Error('Chemin du package OPF introuvable');
  }

  return rootfile['@_full-path'];
};

const getSpineDocuments = async (zip, opfPath) => {
  const opfEntry = zip.file(opfPath);
  if (!opfEntry) {
    throw new Error(`Package OPF introuvable: ${opfPath}`);
  }

  const opfXml = await opfEntry.async('string');
  const opfDoc = xmlParser.parse(opfXml);
  const manifestItems = opfDoc?.package?.manifest?.item;
  const spineItems = opfDoc?.package?.spine?.itemref;

  if (!manifestItems || !spineItems) {
    throw new Error('Manifest ou spine introuvable dans le package OPF');
  }

  const manifestMap = new Map();
  const manifestArray = Array.isArray(manifestItems) ? manifestItems : [manifestItems];
  manifestArray.forEach((item) => {
    manifestMap.set(item['@_id'], item['@_href']);
  });

  const spineArray = Array.isArray(spineItems) ? spineItems : [spineItems];
  const rootDir = path.posix.dirname(opfPath);

  return spineArray
    .map((itemRef) => {
      const href = manifestMap.get(itemRef['@_idref']);
      if (!href) {
        return null;
      }
      return path.posix.join(rootDir, href);
    })
    .filter(Boolean);
};

const sanitizeFilename = (value) => value.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();

const extractPlainText = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const extractDailyEntriesFromHtml = (html) => {
  const entries = {};
  const datePattern = /(\d{1,2})\s+de\s+([A-Za-zçãéô]+)\s+(\d{4})/gi;
  const lines = extractPlainText(html).split(/(?=[A-ZÀ-Ú])/g);

  let currentDateKey = null;
  let currentContent = [];

  const flush = () => {
    if (currentDateKey && currentContent.length > 0) {
      const [reference, ...rest] = currentContent;
      entries[currentDateKey] = {
        reference: reference?.trim() ?? '',
        content: rest.join(' ').replace(/\s+/g, ' ').trim(),
      };
    }
    currentDateKey = null;
    currentContent = [];
  };

  lines.forEach((lineRaw) => {
    const line = lineRaw.trim();
    if (!line) {
      return;
    }

    const match = datePattern.exec(line);
    if (match) {
      flush();
      const [day, monthName, year] = [match[1], match[2], match[3]];
      const normalizedDate = new Date(`${year}-${monthName}-${day}`).toISOString().split('T')[0];
      currentDateKey = normalizedDate;
      datePattern.lastIndex = 0; // reset for next match
      return;
    }

    if (currentDateKey) {
      currentContent.push(line);
    }
  });

  flush();

  return entries;
};

const mergeEntries = (aggregate, partial) => {
  for (const [date, entry] of Object.entries(partial)) {
    if (!aggregate[date] || entry.content.length > aggregate[date].content.length) {
      aggregate[date] = entry;
    }
  }
  return aggregate;
};

const extractDailyTextFromEpub = async ({ language, file }) => {
  const epubPath = path.join(EPUB_DIR, file);
  console.log(`\nTraitement du fichier ${epubPath}...`);

  const zip = await loadEpub(epubPath);
  const rootfilePath = await getRootfilePath(zip);
  const spineDocs = await getSpineDocuments(zip, rootfilePath);

  const rawLangDir = path.join(RAW_OUTPUT_DIR, language);
  await ensureDir(rawLangDir);

  const aggregatedEntries = {};

  for (let index = 0; index < spineDocs.length; index += 1) {
    const docPath = spineDocs[index];
    const entry = zip.file(docPath);
    if (!entry) {
      continue;
    }

    const html = await entry.async('string');
    const sanitizedName = sanitizeFilename(path.posix.basename(docPath)) || `section-${index}`;
    const rawOutputPath = path.join(rawLangDir, `${index.toString().padStart(3, '0')}-${sanitizedName}.xhtml`);
    await fsp.writeFile(rawOutputPath, html, 'utf-8');

    const partialEntries = extractDailyEntriesFromHtml(html);
    mergeEntries(aggregatedEntries, partialEntries);
  }

  const outputPath = path.join(OUTPUT_DIR, `dailyText.${language}.json`);
  await fsp.writeFile(outputPath, JSON.stringify(aggregatedEntries, null, 2), 'utf-8');
  console.log(`Textes quotidiens traités pour ${language} -> ${outputPath} (${Object.keys(aggregatedEntries).length} entrées)`);
};

const main = async () => {
  await ensureDir(OUTPUT_DIR);
  await ensureDir(RAW_OUTPUT_DIR);

  for (const source of SOURCES) {
    try {
      await extractDailyTextFromEpub(source);
    } catch (error) {
      console.error(`Erreur lors du traitement de ${source.language}`, error);
      process.exitCode = 1;
    }
  }
};

main();
