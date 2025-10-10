const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function testPdfFormat() {
  const pdfPath = path.join(__dirname, '../pdfs/dicionario.pdf');
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  
  // Extraire les 100 premières lignes pour voir le format
  const lines = data.text.split('\n').filter(line => line.trim());
  
  let output = '📄 Format du PDF - Premières 100 lignes:\n\n';
  output += '='.repeat(80) + '\n\n';
  
  lines.slice(0, 100).forEach((line, index) => {
    output += `${index + 1}. ${line}\n`;
  });
  
  output += '\n' + '='.repeat(80) + '\n';
  output += `\nTotal de lignes: ${lines.length}\n`;
  output += `Total de caractères: ${data.text.length}\n`;
  
  // Sauvegarder dans un fichier
  const outputPath = path.join(__dirname, '../pdf-format-sample.txt');
  fs.writeFileSync(outputPath, output, 'utf8');
  
  console.log('✅ Échantillon sauvegardé dans: pdf-format-sample.txt');
  console.log(`   ${lines.length} lignes au total`);
  console.log(`   ${data.text.length} caractères`);
}

testPdfFormat().catch(console.error);
