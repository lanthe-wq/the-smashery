// Builds every responsive image variant the page references, from the largest
// WebP of each photo. Run it after replacing a photo (keep the file names):
//
//   cd tools && npm install && npm run images
//
// Sources (the largest file of each photo, already stripped of metadata):
//   images/burger-*-900.webp             ~900px studio cut-outs on transparent
//
// Outputs: AVIF for every size (with the WebP as fallback in <picture>) and a
// 660w step for the slider so a phone at DPR ~2 no longer pulls the 900w file.
// Existing WebP files are not re-encoded, to avoid a second generation of loss.
// The hero is a video now: its posters come from `npm run video` (video.mjs).
import sharp from 'sharp';
import { statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../images/', import.meta.url));
const AVIF_CUTOUT = { quality: 55, effort: 6 };   // cut-outs shown unscrimmed on amarillo
const WEBP = { quality: 78, alphaQuality: 90, effort: 6 };

const out = [];
async function write(img, file, fmt, opts) {
  await img[fmt](opts).toFile(dir + file);
  out.push([file, statSync(dir + file).size]);
}

// Slider cut-outs.
for (const b of ['double', 'cheese', 'classic']) {
  const src = dir + `burger-${b}-900.webp`;
  for (const w of [480, 660, 900]) {
    const img = () => (w === 900 ? sharp(src) : sharp(src).resize(w));
    await write(img(), `burger-${b}-${w}.avif`, 'avif', AVIF_CUTOUT);
    if (w === 660) await write(img(), `burger-${b}-${w}.webp`, 'webp', WEBP);
  }
}

for (const [f, s] of out) console.log(`${(s / 1024).toFixed(1).padStart(7)} KB  images/${f}`);
