import fs from 'fs';

const json = fs.readFileSync('lighthouse-report.json', 'utf8');

const data = JSON.parse(json);

console.log('Performance score:', data.categories.performance.score);

console.log('Accessibility score:', data.categories.accessibility.score);

console.log('Best Practices score:', data.categories['best-practices'].score);

console.log('SEO score:', data.categories.seo.score);

console.log('PWA score:', data.categories.pwa.score);

// For performance audits

const audits = data.audits;

console.log('\nPerformance audits:');

console.log('First Contentful Paint:', audits['first-contentful-paint'].displayValue);

console.log('Largest Contentful Paint:', audits['largest-contentful-paint'].displayValue);

console.log('Total Blocking Time:', audits['total-blocking-time'].displayValue);

console.log('Cumulative Layout Shift:', audits['cumulative-layout-shift'].displayValue);

console.log('Speed Index:', audits['speed-index'].displayValue);

console.log('Time to Interactive:', audits['interactive'].displayValue);

console.log('Max Potential First Input Delay:', audits['max-potential-fid'].displayValue);