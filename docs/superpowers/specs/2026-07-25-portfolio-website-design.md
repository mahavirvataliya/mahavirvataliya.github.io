# Mahavir Vataliya — Portfolio Website Design

**Date:** 2026-07-25
**Status:** Approved
**Owner:** Mahavir Vataliya

## Goal

A fast, content-rich personal portfolio that showcases Mahavir's full-stack + agentic AI engineering work, with a dedicated detail page per project, a downloadable résumé, and a contact form — deployed to Cloudflare Pages with maximum edge caching.

## Non-Goals

- No CMS, no server-side runtime, no database.
- No auth, no analytics dashboards (basic analytics TBD/later).
- No blog for v1 (can be added later).

## Stack

- **Framework:** Astro (static site generation, Content Collections).
- **Styling:** Tailwind CSS.
- **Interactivity:** Vanilla JS (mobile menu, scroll-reveal, contact form, project filter). **No client framework shipped** — total JS is ~2 KB, keeping the site as light and cache-friendly as possible.
- **Forms:** Web3Forms (browser POST, no backend). Cloudflare Pages Function is the documented fallback.
- **Deployment:** Cloudflare Pages (static `dist/`).

### Why Astro

- Zero JS by default → ~100% Cloudflare edge cache hit rate, instant loads.
- Content Collections → each project is a Markdown file with a typed schema; auto-generates `/projects/[slug]`.
- Native static output for Cloudflare Pages; no server functions, no ISR caveats.
- We ship **no client framework at all** — all interactivity is vanilla JS (~2 KB total). React was scaffolded initially but removed once it was clear no islands were needed, eliminating a 194 KB runtime from the cache.

## Visual Direction

- **Theme:** Dark, modern developer aesthetic.
- **Background:** slate/zinc (near-black `#0a0a0f` / slate-950).
- **Accents:** indigo → cyan gradient (`#6366f1` → `#22d3ee`).
- **Texture:** subtle grid / radial glow in hero.
- **Type:** sans-serif for body (Inter), monospace accents for labels/code (JetBrains Mono).
- Fully responsive, accessible (focus states, semantic HTML, reduced-motion respect).

## Pages

| Route | Type | Purpose |
|---|---|---|
| `/` | Homepage (single-scroll) | Hero, about, skills, featured projects, experience, open source, contact CTA |
| `/projects` | Index | Grid of all project cards |
| `/projects/[slug]` | Generated from Content Collection | Rich detail page per project |
| `/resume` | Static page | Download buttons for both résumé PDFs |
| `/contact` | Static page | Contact form (Web3Forms) |
| `/404` | Static page | Friendly not-found |

## Content Model

### `projects` Content Collection (Markdown + frontmatter)

Schema fields:

- `title` (string) — e.g. "Knogen.ai"
- `tagline` (string) — one-line description
- `category` (enum) — `AI`, `Web`, `Mobile`, `Infra`
- `period` (string) — e.g. "2024 – Present"
- `role` (string) — e.g. "Chief Architect, end-to-end owner"
- `featured` (boolean) — show on homepage
- `order` (number) — sort weight
- `stack` (string[]) — technologies
- `highlights` (string[]) — bullet outcomes (e.g. "cut cloud spend 60%")
- `metrics` (object, optional) — `{ label, value }[]` for the stats row
- `cover` (string, optional) — image path under `/public`
- `gallery` (string[], optional) — screenshots
- `links` (object, optional) — `{ live?, repo?, caseStudy? }`
- `body` (Markdown) — overview, problem, role, architecture, outcomes

### Projects (v1, 6)

1. **Knogen.ai** — Enterprise Agentic RAG Platform (Python, FastAPI, LangChain, Milvus, Azure AI Foundry)
2. **Codebasics.io** — B2B/B2C Learning Platform, 1M+ users (Laravel, React, AWS, Redis, MySQL)
3. **CFR.org** — Headless NextJS replatform (NextJS, WordPress, Python)
4. **Meydan Free Zone** — AI Voice Agent (LiveKit, FreeSWITCH/Asterisk/Yeastar, Azure Speech, Python)
5. **Police Dept AI Chatbot** — RAG document & data Q&A (PHP, OpenAI, Ollama, Embeddings)
6. **Cloint** — B2B SaaS CRM with voice (Laravel, React Native, Twilio, RabbitMQ, AWS)

## Homepage Sections

1. **Hero** — name, headline, value prop, CTAs (View work / Download CV / Contact), social links.
2. **About / Summary** — 8+ years, owns-the-full-loop positioning, remote B2B work.
3. **Skills** — grouped by domain.
4. **Featured Projects** — top 3 (Knogen.ai, Codebasics.io, CFR.org) → detail pages.
5. **Experience timeline** — AtliQ (2020–present, Chief Architect), Infobizzs (2018–2020).
6. **Open Source & Achievements** — React Native WebView contribution, IPE (Go Pusher alt), Performer awards.
7. **Contact CTA** — links + form teaser.

## Resume Download

Both PDFs copied to `public/`:

- `public/Mahavir_Vataliya_FullStack_AI_Product_Engineer.pdf` (primary)
- `public/Mahavir_Resume_CA.pdf` (legacy)

"Download CV" buttons link directly; Cloudflare caches them at the edge.

## Contact Form

- Provider: **Web3Forms** (browser POST to `https://api.web3forms.com/submit`, access key in client env).
- Fields: name, email, subject, message. Honeypot field for spam.
- Fallback documented: Cloudflare Pages Function `functions/contact.ts` if in-house is preferred.

## Cloudflare Caching (core requirement)

- `astro build` → fully static `dist/`.
- Cloudflare Pages auto-serves from 300+ edge locations.
- `public/_headers`:
  - Hashed assets (`/_astro/*`, images): `Cache-Control: public, max-age=31536000, immutable`
  - HTML: `Cache-Control: public, max-age=0, must-revalidate` (revalidate via deploy)
  - PDFs: long cache with revalidation
- `public/_redirects` (if needed for pretty URLs / 404).
- `public/robots.txt` + generated `sitemap-index.xml`.
- Per-page SEO: `<title>`, meta description, OpenGraph, Twitter card, canonical.

## SEO & Performance Targets

- Lighthouse performance 95+ (static, minimal JS).
- Each page has unique title/description.
- OG image per project (placeholder gradient if no screenshot).
- Semantic HTML, alt text, `prefers-reduced-motion`.

## Repo Layout

```
/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── _headers
│   ├── _redirects
│   ├── robots.txt
│   ├── favicon.svg
│   └── *.pdf  (résumés)
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── ExperienceTimeline.astro
│   │   ├── Achievements.astro
│   │   ├── ContactCTA.astro
│   │   ├── ProjectCard.astro
│   │   ├── SectionHeading.astro
│   │   └── SEO.astro
│   ├── content/
│   │   ├── config.ts          # collection schema
│   │   └── projects/
│   │       ├── knogen-ai.md
│   │       ├── codebasics-io.md
│   │       ├── cfr-org.md
│   │       ├── meydan-voice-agent.md
│   │       ├── police-chatbot.md
│   │       └── cloint-crm.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── resume.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
└── docs/superpowers/specs/
    └── 2026-07-25-portfolio-website-design.md
```

## Deployment (Cloudflare Pages)

Two equivalent paths:

### Option A — Git integration (recommended for ongoing deploys)
1. Push repo to GitHub.
2. Cloudflare Pages → "Create a project" → connect repo.
3. Build command: `npm run build`; Output dir: `dist`.
4. Add env var if/when needed (e.g. `WEB3FORMS_ACCESS_KEY`).
5. Every push auto-deploys; Cloudflare purges edge cache on deploy.

### Option B — Direct upload / Wrangler
```bash
npm run build
npx wrangler pages deploy dist --project-name mahavir-portfolio
```

## Open Items (later, not blocking v1)

- Real project screenshots/logos (placeholders used for now).
- Final bio paragraph in Mahavir's voice.
- Custom OG images per project.
- Custom domain wiring.

## Success Criteria

- Site builds clean to static `dist/`.
- All 6 projects have detail pages reachable from homepage + projects index.
- Résumé PDFs downloadable.
- Contact form posts successfully.
- Cloudflare caching headers correct; Lighthouse performance ≥ 95.

---

## V2 Addendum (2026-08-14) — Job-search positioning upgrade

**Goal:** position the portfolio to win senior remote roles at engineering-led companies (edge/platform infrastructure, transparent all-remote cultures, open-source product companies — e.g. Cloudflare, GitLab, Automattic) and high-paying remote companies generally.

**What those employers screen for → what we added:**

| Signal employers want | Addition |
|---|---|
| Writing quality (writing cultures) | **Blog** (`/blog`): 6 seed posts from real résumé experience — evaluation gates for LLMs, self-hosting Supabase, 4s→100ms trace story, Cloudflare Zero Trust platform, async-first remote, headless WordPress replatform. BlogPosting JSON-LD, reading time, related-case-study CTAs, RSS. |
| Platform/edge depth (Cloudflare) | **New featured project**: Org-wide Secure Deployment Platform (Cloudflare Zero Trust + Coolify). Skills list now includes Cloudflare (Pages/CDN/Zero Trust/Stream) + Coolify. |
| AI engineering depth | **New project**: Multi-Agent Orchestration Platforms (Paperclip, Hermes, OpenClaw) with governance + audit trails. |
| Remote/async readiness | Hero credentials line (remote-first 6+ yrs, UTC+5:30, global overlap); **"How I work"** section (6 operating principles); async-first blog post. |
| Open source contribution | **Open source & community section**: IPE (Go), React Native WebView merged PR, Stack Overflow/Medium (URLs TODO), hackathon win, awards strip. |
| Culture fit / handbook-style values | How-I-work principles mirror transparent-company values (written-first decisions, ownership, raising the floor via mentoring). |
| Recruiter SEO | Person schema with `knowsAbout[]`; BlogPosting schema; blog + projects in sitemap; recruiter-oriented meta descriptions. |
| Performance ethos | Footer colophon: "~2 KB JS, edge-cached" — the site itself is the demo. |
| Role targeting | Contact page **"What I'm looking for"**: roles + environment phrased by values (developer platforms, edge infra, open-source products) rather than naming employers. |

**Honesty guardrails:** no invented testimonials, metrics, or links. Stack Overflow / Medium profile URLs are left as documented TODOs in `src/data/site.ts` until real handles are provided. Seed blog posts are flagged in the README as drafts to personalize before publishing.
