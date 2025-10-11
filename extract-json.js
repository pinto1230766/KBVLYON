import fs from 'fs';

const html = fs.readFileSync('lighthouse-report.html', 'utf8');

const start = html.indexOf('window.__LIGHTHOUSE_JSON__ = ') + 'window.__LIGHTHOUSE_JSON__ = '.length;

const end = html.indexOf('</script>', start);

const json = html.substring(start, end);

fs.writeFileSync('lighthouse-report.json', json);