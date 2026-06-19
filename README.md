# Syed Faizan Javed — Portfolio

A premium, production-ready personal portfolio for a Full Stack Software Engineer.
Built as a single-page experience with dedicated case-study and blog routes, a
dark/light theme, smooth scrolling, and a lazy-loaded 3D hero.

## Tech Stack

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** + **shadcn/ui** primitives
- **Framer Motion** (animations) + **GSAP / ScrollTrigger** (scroll sync)
- **React Three Fiber + drei** — hero 3D sphere (lazy-loaded, with a static fallback)
- **Lenis** — smooth scrolling
- **React Router DOM** — routing
- **React Hook Form + Zod** — contact form & validation
- **EmailJS** — contact form delivery
- **React Helmet Async** — per-page SEO

## Getting Started

```bash
npm install
npm run dev          # http://localhost:5173
```

Other scripts:

```bash
npm run build            # type-check + production build to /dist
npm run preview          # preview the production build
npm run typecheck        # type-check only
npm run generate:assets  # regenerate OG image + PWA icons (PNG) from SVG
```

## Analytics

[Vercel Analytics](https://vercel.com/analytics) and Speed Insights are wired in
`src/App.tsx`. They activate automatically when deployed on Vercel and no-op
locally — no configuration needed.

## Contact form (EmailJS)

The contact form works out of the box: if EmailJS isn't configured it falls back
to opening the visitor's mail client. To enable real email delivery:

1. Create a free account at <https://www.emailjs.com/>.
2. Add an **Email Service**, an **Email Template**, and grab your **Public Key**.
3. Copy `.env.example` to `.env` and fill in:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The template should expose these variables: `from_name`, `reply_to`,
`subject`, `message`.

## Customizing content

All content is **data-driven** — edit the typed files in `src/data/` and
`src/constants/site.ts`; you rarely need to touch JSX.

| File | Controls |
| --- | --- |
| `src/constants/site.ts` | Name, role, email, socials, nav, typing roles |
| `src/data/projects.ts` | Featured projects + full case-study content |
| `src/data/skills.ts` | Skill groups |
| `src/data/experience.ts` | Work timeline |
| `src/data/services.ts` | Services |
| `src/data/testimonials.ts` | Testimonials |
| `src/data/blog.ts` | Blog posts + article bodies |
| `src/data/stats.ts` | Animated counters |

### Assets

Placeholder visuals are generated with CSS gradients (`GradientCover`). Replace:

- `public/resume.pdf` — your real CV (downloaded as `Syed_Faizan_Javed_Resume.pdf`)
- `public/favicon.svg` — source brand mark. The OG image (`og-image.png`) and
  PWA icons (`icon-192/512.png`, `apple-touch-icon.png`) are generated — edit the
  SVG templates in `scripts/generate-assets.mjs`, then run `npm run generate:assets`.
- Swap `GradientCover` for real `<img>` tags in `ProjectCard` / `BlogPreview`
  when you have screenshots.

## Project Structure

```
src/
├── components/   common · layout · sections · ui
├── hooks/        useTheme · useLenis · useMousePosition · useMediaQuery
├── pages/        Home · ProjectCaseStudy · BlogArticle · NotFound
├── routes/       AppRoutes (lazy + Suspense)
├── services/     emailjs
├── constants/    site config
├── data/         typed content
├── utils/        cn · motion variants
└── styles/       globals.css (theme tokens)
```

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import it in Vercel — it auto-detects Vite (build: `npm run build`,
   output: `dist`).
3. Add the `VITE_EMAILJS_*` environment variables in **Project Settings → Environment Variables**.
4. Deploy. `vercel.json` already rewrites all routes to `index.html` for SPA routing.

## Accessibility & Performance

- Respects `prefers-reduced-motion` (3D, parallax, and counters degrade gracefully)
- Keyboard-navigable with visible focus rings and a skip-to-content link
- Code-split routes + 3D bundle; lazy-loaded heavy dependencies
- Per-page meta tags, JSON-LD Person schema, `robots.txt`, and `sitemap.xml`
