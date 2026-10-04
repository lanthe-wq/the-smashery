// Lighthouse, mobile and desktop, against the site served locally with gzip
// (as a real host would). Prints scores and the core metrics, and saves the
// full HTML reports to tools/reports/.
//
//   cd tools && npm install && npm run audit
//
// Needs Chrome or Chromium; set CHROME_PATH if it is not found.
import http from 'node:http';
import { createReadStream, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const root = fileURLToPath(new URL('../', import.meta.url));
const reports = fileURLToPath(new URL('./reports/', import.meta.url));
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2',
  '.js': 'text/javascript; charset=utf-8', '.mp4': 'video/mp4',
};
const TEXT = /^(text\/|application\/manifest|image\/svg)/;   // gzip these; video is already compressed

const server = http.createServer((req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (path.endsWith('/')) path += 'index.html';
  const file = join(root, path);
  let st;
  try { st = statSync(file); } catch { st = null; }
  if (!file.startsWith(root) || !st || !st.isFile()) { res.writeHead(404).end(); return; }
  const type = TYPES[extname(file)] || 'application/octet-stream';
  const gzip = TEXT.test(type) && /gzip/.test(req.headers['accept-encoding'] || '');
  res.writeHead(200, { 'content-type': type, ...(gzip ? { 'content-encoding': 'gzip' } : { 'content-length': st.size }) });
  const body = createReadStream(file);
  (gzip ? body.pipe(createGzip()) : body).pipe(res);
});
await new Promise(r => server.listen(0, r));
const url = `http://localhost:${server.address().port}/`;

const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless=new', '--no-sandbox'] });
mkdirSync(reports, { recursive: true });
const METRICS = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'];
try {
  for (const formFactor of ['mobile', 'desktop']) {
    const config = formFactor === 'desktop' ? (await import('lighthouse/core/config/desktop-config.js')).default : undefined;
    const { lhr, report } = await lighthouse(url, { port: chrome.port, output: 'html', logLevel: 'error' }, config);
    writeFileSync(join(reports, `${formFactor}.html`), report);
    const scores = Object.values(lhr.categories).map(c => `${c.title} ${Math.round(c.score * 100)}`).join(' · ');
    console.log(`\n${formFactor.toUpperCase()}  ${scores}`);
    for (const id of METRICS) console.log(`  ${lhr.audits[id].title.padEnd(26)} ${lhr.audits[id].displayValue}`);
    const failing = Object.values(lhr.audits).filter(a => a.score !== null && a.score < 0.9 && !['notApplicable', 'manual', 'informative'].includes(a.scoreDisplayMode));
    if (failing.length) console.log('  Below 90: ' + failing.map(a => a.id).join(', '));
  }
  console.log(`\nFull reports: ${reports}`);
} finally {
  await chrome.kill();
  server.close();
}
