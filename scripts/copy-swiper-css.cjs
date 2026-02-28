/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const src = path.join(__dirname, "../node_modules/swiper/swiper-bundle.min.css");
const dest = path.join(__dirname, "../public/swiper-bundle.min.css");
if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log("Copied swiper-bundle.min.css to public/");
} else {
  console.warn("swiper-bundle.min.css not found in node_modules; run npm install");
}
