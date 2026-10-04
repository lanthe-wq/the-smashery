// Builds the hero video loop, its encodes and its poster frames from the stock clip:
//
//   cd tools && npm install && npm run video
//
// Needs ffmpeg with libsvtav1, libx265 and libx264 on the PATH. The source clip
// (Pexels 37296040, see images/CREDITS.md) is downloaded into tools/src/ the first
// time; pass another file as the first argument to rebuild from real footage.
// The phone crop's pan (PAN) follows the spatula in this clip: retime it for new
// footage. The profile and level printed at the end go into CLIPS in index.html.
//
// 1. Loop: the clip minus its first second, with its last second cross-faded into
//    that first second. The last frame flows into the first, so the loop has no seam.
// 2. Encodes, smallest first for each screen: AV1, then HEVC (iPhones without AV1
//    hardware), then H.264 for everything else. The page picks one in script.
//    Light temporal denoise first: the sizzle is mostly sensor noise, it costs half
//    the bits, and under the 50% scrim nobody can tell.
//    - portrait 600×1000 for phones held upright, with a slow eased pan that follows
//      the spatula (a centre crop loses the patty during the second flip)
//    - 1280×720 for most landscape screens, 1920×1080 for wide ones
// 3. Posters: frame 0 of each encode's framing, as AVIF and WebP, so the still the
//    page paints first is the frame the video starts on.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SOURCE_URL = 'https://videos.pexels.com/video-files/37296040/15798660_2560_1440_24fps.mp4';
const here = p => fileURLToPath(new URL(p, import.meta.url));
const srcDir = here('./src/');
const videoDir = here('../video/');
const imageDir = here('../images/');
mkdirSync(srcDir, { recursive: true });
mkdirSync(videoDir, { recursive: true });

const source = process.argv[2] || srcDir + 'pexels-37296040.mp4';
if (!existsSync(source)) {
  console.log('Downloading the source clip…');
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  writeFileSync(source, Buffer.from(await res.arrayBuffer()));
}

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`${cmd} failed:\n${r.stderr}`);
  return r.stdout.trim();
}
const ffmpeg = args => run('ffmpeg', ['-v', 'error', '-y', ...args]);
const probe = (file, entries) => run('ffprobe', ['-v', 'error', '-show_entries', entries, '-of', 'csv=p=0', file]);

// ---- 1. seamless loop ----------------------------------------------------------
const FADE = 1.0;
const duration = Number(probe(source, 'format=duration'));
const master = srcDir + 'hero-smash-master.mp4';
ffmpeg(['-i', source, '-filter_complex',
  `[0:v]split=2[s1][s2];` +
  `[s1]trim=start=${FADE},setpts=PTS-STARTPTS[a];` +
  `[s2]trim=end=${FADE},setpts=PTS-STARTPTS[b];` +
  `[a][b]xfade=transition=fade:duration=${FADE}:offset=${duration - 2 * FADE},format=yuv420p[v]`,
  '-map', '[v]', '-an', '-c:v', 'libx264', '-crf', '12', '-preset', 'fast', master]);

// ---- 2. encodes --------------------------------------------------------------------
// The portrait crop is 0.6 of the frame height wide. Its centre eases from 52% of the
// width to 64% while the second patty is flipped (loop time 1.6–2.8s) and back
// (5.0–6.2s), so the loop starts and ends on the same framing.
const PAN = 'st(0,clip((t-1.6)/1.2,0,1));st(1,clip((t-5.0)/1.2,0,1));' +
  'iw*(0.52+0.12*(ld(0)*ld(0)*(3-2*ld(0))-ld(1)*ld(1)*(3-2*ld(1))))-ow/2';
const DENOISE = 'hqdn3d=3:3:7:7';
const VARIANTS = [
  { name: 'hero-smash-portrait-600', vf: `crop=w=ih*0.6:h=ih:x='${PAN}':y=0,${DENOISE},scale=600:1000:flags=lanczos`, codecs: ['av1', 'hevc', 'h264'] },
  { name: 'hero-smash-1280', vf: `${DENOISE},scale=1280:720:flags=lanczos`, codecs: ['av1', 'hevc', 'h264'] },
  { name: 'hero-smash-1920', vf: `${DENOISE},scale=1920:1080:flags=lanczos`, codecs: ['av1', 'hevc'] },
];
const ENCODERS = {
  av1: ['-c:v', 'libsvtav1', '-preset', '4', '-crf', '46', '-g', '240', '-svtav1-params', 'tune=0'],
  hevc: ['-c:v', 'libx265', '-preset', 'slow', '-crf', '31', '-tag:v', 'hvc1', '-x265-params', 'keyint=240:log-level=error'],
  h264: ['-c:v', 'libx264', '-preset', 'veryslow', '-crf', '29', '-profile:v', 'high', '-g', '240'],
};
const out = [];
for (const v of VARIANTS) {
  for (const codec of v.codecs) {
    const file = `${videoDir}${v.name}.${codec}.mp4`;
    const level = codec === 'h264' ? ['-level:v', v.name.endsWith('1920') ? '4.0' : '3.1'] : [];
    ffmpeg(['-i', master, '-vf', v.vf, '-an', '-map_metadata', '-1', ...ENCODERS[codec], ...level,
      '-pix_fmt', 'yuv420p', '-movflags', '+faststart', file]);
    out.push([`video/${v.name}.${codec}.mp4`, statSync(file).size, probe(file, 'stream=profile,level')]);
  }
}

// ---- 3. posters ------------------------------------------------------------------
const frame = srcDir + 'hero-smash-frame0.png';
ffmpeg(['-i', master, '-frames:v', '1', frame]);
const { width: fw, height: fh } = await sharp(frame).metadata();
const cropW = Math.round(fh * 0.6);
const portrait = { left: Math.round(fw * 0.52 - cropW / 2), top: 0, width: cropW, height: fh };
async function poster(img, file, fmt, opts) {
  await img[fmt](opts).toFile(imageDir + file);
  out.push([`images/${file}`, statSync(imageDir + file).size, '']);
}
for (const w of [1200, 2000]) {
  await poster(sharp(frame).resize(w), `hero-smash-poster-${w}.avif`, 'avif', { quality: 50, effort: 6 });
  await poster(sharp(frame).resize(w), `hero-smash-poster-${w}.webp`, 'webp', { quality: 72, effort: 6 });
}
for (const w of [600, 900]) {
  const img = () => sharp(frame).extract(portrait).resize(w, Math.round(w / 0.6));
  await poster(img(), `hero-smash-poster-portrait-${w}.avif`, 'avif', { quality: 50, effort: 6 });
  await poster(img(), `hero-smash-poster-portrait-${w}.webp`, 'webp', { quality: 72, effort: 6 });
}

for (const [f, s, info] of out) console.log(`${(s / 1024).toFixed(1).padStart(8)} KB  ${f}  ${info}`);
