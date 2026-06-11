// One-off image optimizer: resize oversized images and recompress in place.
// Keeps the same filename + extension so all <img src> and CSS url() refs stay valid.
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";

const DIR = "public/images";
const MAX_W = 1920;        // cap width — won't upscale smaller images
const JPEG_Q = 82;
const PNG_Q = 80;

const fmt = (b) => (b / 1024 / 1024).toFixed(2) + " MB";
let beforeTotal = 0, afterTotal = 0, changed = 0;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const src = path.join(DIR, file);
  const tmp = src + ".tmp";
  const ext = path.extname(file).toLowerCase();
  const origSize = (await stat(src)).size;
  beforeTotal += origSize;

  try {
    const img = sharp(src, { failOn: "none" });
    const meta = await img.metadata();
    let pipe = img.rotate(); // respect EXIF orientation
    if (meta.width && meta.width > MAX_W) pipe = pipe.resize({ width: MAX_W });

    if (ext === ".png") {
      pipe = pipe.png({ quality: PNG_Q, compressionLevel: 9, effort: 8, palette: true });
    } else {
      pipe = pipe.jpeg({ quality: JPEG_Q, mozjpeg: true, progressive: true });
    }

    await pipe.toFile(tmp);
    const newSize = (await stat(tmp)).size;

    if (newSize < origSize) {
      await rename(tmp, src);
      afterTotal += newSize;
      changed++;
      console.log(`  ${file}: ${fmt(origSize)} -> ${fmt(newSize)}  (-${Math.round((1 - newSize / origSize) * 100)}%)`);
    } else {
      await unlink(tmp);
      afterTotal += origSize;
    }
  } catch (e) {
    console.log(`  SKIP ${file}: ${e.message}`);
    afterTotal += origSize;
    try { await unlink(tmp); } catch {}
  }
}

console.log(`\nOptimized ${changed}/${files.length} files.`);
console.log(`Total: ${fmt(beforeTotal)} -> ${fmt(afterTotal)}  (saved ${fmt(beforeTotal - afterTotal)})`);
