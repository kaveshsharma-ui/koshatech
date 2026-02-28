import sharp from "sharp";

const src = "public/hero-ai-visual.png";
const outDir = "public/hero/layers";

const crops = [
  // Tuned for the current hero-ai-visual.png (942x1024)
  { name: "goodfirms", left: 0, top: 255, width: 430, height: 360 },
  { name: "clutch", left: 300, top: 770, width: 380, height: 250 },
  { name: "trophy", left: 420, top: 700, width: 140, height: 150 },
  { name: "phone", left: 470, top: 60, width: 472, height: 760 },
  { name: "card", left: 505, top: 150, width: 240, height: 170 },
];

await sharp(src).metadata().then((m) => {
  console.log("src:", m.width, "x", m.height);
});

await sharp({ create: { width: 1, height: 1, channels: 3, background: "#fff" } })
  .png()
  .toFile(`${outDir}/.keep.png`).catch(() => {});

for (const c of crops) {
  await sharp(src)
    .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
    .png({ compressionLevel: 9, palette: true })
    .toFile(`${outDir}/${c.name}.png`);
  console.log("wrote", `${outDir}/${c.name}.png`);
}
