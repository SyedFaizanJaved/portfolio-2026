/**
 * Generates premium "app mockup" cover images for each project into
 * public/projects/<slug>.png. Run with: npm run generate:covers
 *
 * These are designed (not AI) covers — a dark app-window mockup tinted with each
 * project's gradient. Swap for AI-generated art later by overwriting the PNGs.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdir } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "projects");

const PROJECTS = [
  { slug: "flit", name: "FLIT", category: "Hiring Platform", from: "#3B82F6", to: "#8B5CF6", stack: ["React", "Django", "Stripe", "RBAC"] },
  { slug: "supplement-ai", name: "Supplement AI", category: "Healthcare SaaS", from: "#06B6D4", to: "#3B82F6", stack: ["React", "Django", "AI"] },
  { slug: "gaapiq", name: "GaapIQ", category: "Accounting AI", from: "#8B5CF6", to: "#06B6D4", stack: ["React", "Django", "Stripe"] },
  { slug: "weavesync", name: "WeaveSync", category: "Integration Platform", from: "#06B6D4", to: "#8B5CF6", stack: ["React", "Django", "Postgres", "Webhooks"] },
  { slug: "toca", name: "TOCA", category: "AI Assistant Platform", from: "#3B82F6", to: "#06B6D4", stack: ["React", "Django", "OpenAI", "WebSockets"] },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function chip(x, label) {
  const w = 26 + label.length * 11;
  return `
    <g transform="translate(${x},648)">
      <rect width="${w}" height="40" rx="20" fill="#0f172a" stroke="#243049"/>
      <text x="${w / 2}" y="26" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#cbd5e1">${esc(label)}</text>
    </g>`;
}

function cover({ name, category, from, to, stack }) {
  // tech chips row
  let cx = 80;
  const chips = stack
    .map((t) => {
      const g = chip(cx, t);
      cx += 26 + t.length * 11 + 14;
      return g;
    })
    .join("");

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B1120"/><stop offset="1" stop-color="#0d1424"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="750" fill="url(#bg)"/>
  <circle cx="1080" cy="120" r="240" fill="${to}" opacity="0.18"/>
  <circle cx="120" cy="700" r="200" fill="${from}" opacity="0.14"/>

  <!-- eyebrow + title -->
  <rect x="80" y="86" width="56" height="6" rx="3" fill="url(#accent)"/>
  <text x="150" y="96" font-family="sans-serif" font-size="20" letter-spacing="2" fill="#94a3b8">NEUROOCEANS.AI  ·  COMPLETED</text>
  <text x="80" y="168" font-family="sans-serif" font-size="64" font-weight="700" fill="#F8FAFC">${esc(name)}</text>
  <text x="80" y="208" font-family="sans-serif" font-size="26" fill="#94a3b8">${esc(category)}</text>

  <!-- app window mockup -->
  <g transform="translate(80,250)">
    <rect width="1040" height="360" rx="20" fill="#0f172a" stroke="#1e293b"/>
    <rect width="1040" height="48" rx="20" fill="#111827"/>
    <rect y="24" width="1040" height="24" fill="#111827"/>
    <circle cx="28" cy="24" r="6" fill="#ef4444" opacity="0.7"/>
    <circle cx="50" cy="24" r="6" fill="#f59e0b" opacity="0.7"/>
    <circle cx="72" cy="24" r="6" fill="#22c55e" opacity="0.7"/>
    <rect x="360" y="14" width="320" height="20" rx="10" fill="#1e293b"/>

    <!-- sidebar -->
    <rect x="0" y="48" width="200" height="312" fill="#0d1626"/>
    <rect x="24" y="84" width="150" height="14" rx="7" fill="url(#accent)" opacity="0.85"/>
    <rect x="24" y="120" width="120" height="12" rx="6" fill="#243049"/>
    <rect x="24" y="148" width="140" height="12" rx="6" fill="#243049"/>
    <rect x="24" y="176" width="100" height="12" rx="6" fill="#243049"/>
    <rect x="24" y="204" width="130" height="12" rx="6" fill="#243049"/>

    <!-- main hero card -->
    <rect x="228" y="80" width="784" height="120" rx="14" fill="url(#accent)" opacity="0.22"/>
    <rect x="252" y="104" width="220" height="18" rx="9" fill="#e2e8f0" opacity="0.75"/>
    <rect x="252" y="136" width="380" height="12" rx="6" fill="#94a3b8" opacity="0.6"/>
    <rect x="252" y="158" width="300" height="12" rx="6" fill="#94a3b8" opacity="0.45"/>

    <!-- stat cards -->
    <rect x="228" y="220" width="250" height="110" rx="14" fill="#111c30" stroke="#1e293b"/>
    <rect x="495" y="220" width="250" height="110" rx="14" fill="#111c30" stroke="#1e293b"/>
    <rect x="762" y="220" width="250" height="110" rx="14" fill="#111c30" stroke="#1e293b"/>
    <rect x="252" y="244" width="80" height="22" rx="6" fill="url(#accent)" opacity="0.8"/>
    <rect x="519" y="244" width="80" height="22" rx="6" fill="url(#accent)" opacity="0.8"/>
    <rect x="786" y="244" width="80" height="22" rx="6" fill="url(#accent)" opacity="0.8"/>
    <rect x="252" y="286" width="180" height="10" rx="5" fill="#243049"/>
    <rect x="519" y="286" width="180" height="10" rx="5" fill="#243049"/>
    <rect x="786" y="286" width="180" height="10" rx="5" fill="#243049"/>
  </g>

  <!-- tech chips -->
  ${chips}
</svg>`;
}

async function run() {
  await mkdir(OUT, { recursive: true });
  for (const p of PROJECTS) {
    await sharp(Buffer.from(cover(p))).png().toFile(join(OUT, `${p.slug}.png`));
  }
  console.log("Generated covers:", PROJECTS.map((p) => `${p.slug}.png`).join(", "));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
