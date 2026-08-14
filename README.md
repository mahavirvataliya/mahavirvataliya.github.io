# Mahavir Vataliya — Portfolio Website

A fast, content-rich personal portfolio built with **Astro**, deployed to **Cloudflare Pages** with maximum edge caching.

- ⚡ **Static** — zero JS by default, ~100% edge cache hit rate
- 🎨 **Dark, modern dev** aesthetic (indigo → cyan gradient)
- 📝 **Content Collections** — projects *and* blog posts are Markdown files → auto detail pages
- 🚀 **8 detailed project case studies** from the résumé
- ✍️ **Blog** — engineering writing that demonstrates depth and communication (what remote-first companies screen for)
- 🧭 **"How I work"** — operating principles for async/remote culture fit
- 🔓 **Open source section** — contributions and community presence
- 📄 **Résumé downloads** (both PDFs served from the edge)
- 📧 **Contact form** via Web3Forms (no backend needed)
- 🔍 **SEO** — per-page meta, OpenGraph, sitemap, RSS, Person + BlogPosting structured data
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
│   ├── config.ts             projects + blog collection schemas
│   ├── blog/                 ← one Markdown file per post
│   └── projects/             ← one Markdown file per project case study
├── data/site.ts              single source of truth (bio, skills, experience)
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro           homepage
│   ├── projects/
│   │   ├── index.astro       all projects grid
│   │   └── [slug].astro      detail page (generated per project)
│   ├── blog/
│   │   ├── index.astro       all posts
│   │   └── [slug].astro      post page (generated per post)
│   ├── resume.astro
│   ├── contact.astro
│   ├── 404.astro
│   └── rss.xml.ts            blog RSS feed
└── styles/global.css
```

## Editing content

### Add / edit a project

Each project lives in `src/content/projects/<slug>.md`. The frontmatter schema is defined in `src/content/config.ts`. To add a new project:

1. Create `src/content/projects/my-project.md`.
2. Fill in the frontmatter (`title`, `tagline`, `stack`, `highlights`, etc.) — the schema will guide you and the build will validate it.
3. The detail page `/projects/my-project` is generated automatically and appears on the projects index. Set `featured: true` to show it on the homepage too.

### Write a blog post

Each post lives in `src/content/blog/<slug>.md`:

1. Create `src/content/blog/my-post.md` with `title`, `description`, `pubDate`, and `tags`.
2. Optionally set `relatedProject: <project-slug>` to surface a case-study CTA at the end of the post.
3. The post appears on `/blog`, the homepage's *Writing* section (latest 3), and the RSS feed. Set `draft: true` to hide a post while it's in progress.

> **Note:** the seed posts shipped with this site are drafts written from the résumé — review and personalize them (add real numbers, war stories, links) before treating them as final.

### Update personal info

Edit `src/data/site.ts` — name, headline, summary, skills, experience, ways of working, open-source items, and what-you're-looking-for all live there and flow to every page.

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

## Deploy

### Option A — GitHub Pages (mahavirvataliya.github.io) — current setup

The repo ships with `.github/workflows/deploy.yml`. One-time setup:

1. Push this repo to **`github.com/mahavirvataliya/mahavirvataliya.github.io`** (a user-site repo — the workflow's `main` branch *is* the source, Pages serves the built output).
   - Alternatively use any repo name and change the site URL (see "Custom domain" below), since a project repo serves from `/<repo-name>/` and needs `base` config.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. (Optional) Add the `WEB3FORMS_ACCESS_KEY` secret under **Settings → Secrets and variables → Actions** so the contact form sends.
4. Push to `main` — the workflow builds with pnpm and publishes. Your site goes live at `https://mahavirvataliya.github.io`.

**Caching caveat:** GitHub Pages ignores `public/_headers` and serves everything with `Cache-Control: max-age=600` (10 minutes). The site still works perfectly — hashed assets revalidate cheaply — but you don't get Cloudflare's year-long immutable asset caching. To get it: put Cloudflare (free) in front of the GitHub Pages domain — add the site in Cloudflare, point a custom domain's CNAME at it, and Cloudflare's edge caches everything per the `_headers`-style rules you define.

### Option B — Cloudflare Pages (best caching, no GitHub setup)

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Configure:
   - **Framework preset:** Astro
   - **Build command:** `pnpm build`
   - **Output directory:** `dist`
   - **Environment variables:** `PUBLIC_WEB3FORMS_ACCESS_KEY` (and `NODE_VERSION=24` if needed)
4. **Save and Deploy.** Every push auto-deploys; `public/_headers` takes effect and Cloudflare purges the edge cache on each deploy.

Or via Wrangler CLI:

```bash
pnpm build
npx wrangler pages deploy dist --project-name mahavir-portfolio
```

### Custom domain

- **GitHub Pages:** repo → Settings → Pages → Custom domain. Then update `site` in `astro.config.mjs` and the `Sitemap:` URL in `public/robots.txt`.
- **Cloudflare Pages:** project → **Custom domains → Set up a domain**. Same config updates as above.

## How the caching works

This is a fully static site — every page is pre-rendered HTML. Cloudflare Pages serves the entire `dist/` from 300+ edge locations, and `public/_headers` tells the edge:

- **Hashed assets** (`/_astro/*`, fonts) → `max-age=31536000, immutable` — cached for a year, never revalidated.
- **Images/SVG/PDF** → long cache (1 week).
- **HTML** → `max-age=0, must-revalidate` — served from cache instantly, revalidated so new deploys show up immediately.

The result: visitors hit the edge cache on nearly every request, pages load near-instantly worldwide, and origin load stays minimal.

## Design reference

Full design spec: [`docs/superpowers/specs/2026-07-25-portfolio-website-design.md`](docs/superpowers/specs/2026-07-25-portfolio-website-design.md)
