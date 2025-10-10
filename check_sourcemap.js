const fs = require('fs');

try {
  const mapFile = 'C:\\Users\\FP123\\Downloads\\KBVLYON\\assets\\public\\assets\\PreachingLessonsPage-ErgC5eH2.js.map';
  const content = fs.readFileSync(mapFile, 'utf8');
  const map = JSON.parse(content);
  
  let output = `Total sources: ${map.sources.length}\n\n`;
  
  map.sources.forEach((s, i) => {
    output += `${i}: ${s}\n`;
  });
  
  fs.writeFileSync('sourcemap_files.txt', output, 'utf8');
  console.log('Written to sourcemap_files.txt');
} catch (e) {
  console.error('Error:', e.message);
}
