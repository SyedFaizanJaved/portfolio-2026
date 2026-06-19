/**
 * Generates raster assets that need real PNGs (social cards, PWA icons) from
 * inline SVG. Run with: npm run generate:assets
 *
 * Text uses white/light fills and a generic sans-serif family so it rasterizes
 * legibly regardless of which fonts are installed on the build machine.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1120"/>
      <stop offset="1" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#3B82F6"/>
      <stop offset="0.5" stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1010" cy="140" r="280" fill="#8B5CF6" opacity="0.20"/>
  <circle cx="180" cy="540" r="240" fill="#3B82F6" opacity="0.16"/>
  <rect x="80" y="470" width="120" height="6" rx="3" fill="url(#accent)"/>
  <text x="80" y="235" font-family="sans-serif" font-size="38" font-weight="600" fill="#94A3B8">Syed Faizan Javed</text>
  <text x="80" y="330" font-family="sans-serif" font-size="86" font-weight="700" fill="#F8FAFC">Building Intelligent</text>
  <text x="80" y="430" font-family="sans-serif" font-size="86" font-weight="700" fill="#F8FAFC">Digital Products.</text>
  <text x="80" y="540" font-family="sans-serif" font-size="30" fill="#94A3B8">Full Stack Software Engineer  ·  MERN  ·  Django  ·  React  ·  AI</text>
</svg>`;

const brandSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3B82F6"/>
      <stop offset="0.5" stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#06B6D4"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#g)"/>
  <text x="50%" y="52%" text-anchor="middle" dominant-baseline="central"
        font-family="sans-serif" font-size="300" font-weight="700" fill="#ffffff">F</text>
</svg>`;

async function run() {
  await sharp(Buffer.from(ogSvg)).png().toFile(join(PUBLIC, "og-image.png"));

  const iconTargets = [
    { name: "icon-192.png", size: 192 },
    { name: "icon-512.png", size: 512 },
    { name: "apple-touch-icon.png", size: 180 },
  ];
  for (const { name, size } of iconTargets) {
    await sharp(Buffer.from(brandSvg(size)))
      .png()
      .toFile(join(PUBLIC, name));
  }

  console.log("Generated: og-image.png, icon-192.png, icon-512.png, apple-touch-icon.png");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
