#!/usr/bin/env node
/**
 * Compress PNG/JPG/JPEG images in public/ to reduce size.
 * - Resizes images larger than 1920px (longest edge) down
 * - PNG: compression level 9, optional WebP fallback for huge files
 * - JPEG: quality 82
 * - Skips images under 80KB (already small)
 * Run: node scripts/compress-images.mjs
 */

import { readdirSync, statSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const MAX_EDGE = 1920;
const MAX_EDGE_BLOG = 800; // small for blog cards (display ~380–420px)
const MIN_SIZE_TO_PROCESS = 50 * 1024; // 50KB
const JPEG_QUALITY = 82;
const PNG_COMPRESSION = 9;

function getAllImagePaths(dir, base = "") {
  const entries = readdirSync(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const rel = base ? `${base}/${e.name}` : e.name;
    if (e.isDirectory()) {
      out.push(...getAllImagePaths(join(dir, e.name), rel));
    } else if (/\.(png|jpg|jpeg)$/i.test(e.name)) {
      out.push(join(dir, e.name));
    }
  }
  return out;
}

async function compress() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("Run: npm install --save-dev sharp");
    process.exit(1);
  }

  const paths = getAllImagePaths(publicDir);
  let totalSaved = 0;
  let processed = 0;

  for (const filePath of paths) {
    const stat = statSync(filePath);
    if (stat.size < MIN_SIZE_TO_PROCESS) continue;

    const ext = extname(filePath).toLowerCase();
    const relativePath = filePath.replace(publicDir, "").replace(/\\/g, "/");
    const isBlog = relativePath.includes("/blog/");
    const maxEdge = isBlog ? MAX_EDGE_BLOG : MAX_EDGE;
    let pipeline = sharp(filePath);
    const meta = await pipeline.metadata();
    const w = meta.width || 0;
    const h = meta.height || 0;
    const needResize = w > maxEdge || h > maxEdge;
    const scale = needResize
      ? Math.min(maxEdge / w, maxEdge / h, 1)
      : 1;
    const newW = Math.round(w * scale);
    const newH = Math.round(h * scale);

    if (needResize) {
      pipeline = pipeline.resize(newW, newH, { fit: "inside" });
    }

    const before = stat.size;
    if (ext === ".png") {
      await pipeline
        .png({ compressionLevel: PNG_COMPRESSION })
        .toFile(filePath + ".tmp");
    } else {
      await pipeline
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toFile(filePath + ".tmp");
    }
    const after = statSync(filePath + ".tmp").size;
    const { renameSync, unlinkSync } = await import("fs");
    const saved = before - after;
    if (saved > 0) {
      renameSync(filePath + ".tmp", filePath);
      totalSaved += saved;
      processed++;
      console.log(
        `${filePath.replace(publicDir, "")}: ${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB (saved ${(saved / 1024).toFixed(1)} KB)`
      );
    } else {
      unlinkSync(filePath + ".tmp");
    }
  }

  console.log(
    `\nDone. Processed ${processed} images, total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`
  );
}

compress().catch((err) => {
  console.error(err);
  process.exit(1);
});
