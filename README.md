# Mahavir Vataliya — Portfolio Website

A fast, content-rich personal portfolio built with **Astro**, deployed to **Cloudflare Pages** with maximum edge caching.

- ⚡ **Static** — zero JS by default, ~100% edge cache hit rate
- 🎨 **Dark, modern dev** aesthetic (indigo → cyan gradient)
- 📝 **Content Collections** — each project is a Markdown file → auto detail page
- 🚀 **6 detailed project case studies** from the résumé
- 📄 **Résumé downloads** (both PDFs served from the edge)
- 📧 **Contact form** via Web3Forms (no backend needed)
- 🔍 **SEO** — per-page meta, OpenGraph, sitemap, RSS, structured data
- ♿ **Accessible** — semantic HTML, focus states, reduced-motion support

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS |
| Interactivity | React islands (only where needed) |
| Content | Astro Content Collections (Markdown) |
| Forms | Web3Forms (browser POST) |
| Deploy | Cloudflare Pages |

## Getting started

```bash
pnpm install        # install dependencies
pnpm dev            # dev server at http://localhost:4321
pnpm build          # type-check + build to dist/
pnpm preview        # preview the production build locally
```

Requires Node 18+ (built on Node 24) and pnpm.

## Project structure

```
public/                       static assets served as-is
├── _headers                  Cloudflare caching rules (← the cache magic)
├── _redirects                Cloudflare redirects
├── robots.txt
├── favicon.svg
├── og-default.svg            default social-share image
└── *.pdf                     résumés
src/
├── components/               Astro components (Hero, ProjectCard, etc.)
├── content/
│   ├── config.ts             projects collection schema
│   └── projects/             ← one Markdown file per project case study
├── data/site.ts              single source of truth (bio, skills, experience)
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro           homepage
│   ├── projects/
│   │   ├── index.astro       all projects grid
│   │   └── [slug].astro      detail page (generated per project)
│   ├── resume.astro
│   ├── contact.astro
│   ├── 404.astro
│   └── rss.xml.ts            projects RSS feed
└── styles/global.css
```

## Editing content

### Add / edit a project

Each project lives in `src/content/projects/<slug>.md`. The frontmatter schema is defined in `src/content/config.ts`. To add a new project:

1. Create `src/content/projects/my-project.md`.
2. Fill in the frontmatter (`title`, `tagline`, `stack`, `highlights`, etc.) — the schema will guide you and the build will validate it.
3. The detail page `/projects/my-project` is generated automatically and appears on the projects index. Set `featured: true` to show it on the homepage too.

### Update personal info

Edit `src/data/site.ts` — name, headline, summary, skills, experience, and achievements all live there and flow to every page.

### Update the résumé

Replace the PDF in `public/` (keep the same filename, or update the link in `src/pages/resume.astro`).

## Contact form setup

The form uses [Web3Forms](https://web3forms.com) — free, no backend.

1. Get a free access key at https://web3forms.com.
2. Copy `.env.example` to `.env` and set:
   ```
   PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. On Cloudflare Pages, add the same variable under **Settings → Environment variables**.

Until a key is set, the form renders but submissions show a friendly error directing people to email directly.

## Deploy to Cloudflare Pages

### Option A — Git integration (recommended)

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and configure:
   - **Framework preset:** Astro
   - **Build command:** `pnpm build`
   - **Output directory:** `dist`
   - **Environment variables:** `PUBLIC_WEB3FORMS_ACCESS_KEY` (and `NODE_VERSION=24` if needed)
4. **Save and Deploy.** Every push auto-deploys; Cloudflare purges the edge cache on each deploy.

### Option B — Wrangler CLI

```bash
pnpm build
npx wrangler pages deploy dist --project-name mahavir-portfolio
```

### Custom domain

Cloudflare Pages → your project → **Custom domains → Set up a domain**. Update `site` in `astro.config.mjs` and the `Sitemap:` URL in `public/robots.txt` to your final domain.

## How the caching works

This is a fully static site — every page is pre-rendered HTML. Cloudflare Pages serves the entire `dist/` from 300+ edge locations, and `public/_headers` tells the edge:

- **Hashed assets** (`/_astro/*`, fonts) → `max-age=31536000, immutable` — cached for a year, never revalidated.
- **Images/SVG/PDF** → long cache (1 week).
- **HTML** → `max-age=0, must-revalidate` — served from cache instantly, revalidated so new deploys show up immediately.

The result: visitors hit the edge cache on nearly every request, pages load near-instantly worldwide, and origin load stays minimal.

## Design reference

Full design spec: [`docs/superpowers/specs/2026-07-25-portfolio-website-design.md`](docs/superpowers/specs/2026-07-25-portfolio-website-design.md)
