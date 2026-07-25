import { defineCollection, z } from 'astro:content';

/**
 * Projects collection.
 * Each Markdown file in `src/content/projects/*.md` becomes a detail page
 * at `/projects/<slug>`.
 */
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** One-line description used on cards, meta descriptions, etc. */
    tagline: z.string(),
    category: z.enum(['AI', 'Web', 'Mobile', 'Infra']),
    /** Free-form period string, e.g. "2024 – Present". */
    period: z.string(),
    /** Mahavir's role on the project. */
    role: z.string(),
    /** The client / organisation, if applicable. */
    client: z.string().optional(),
    /** Show on the homepage "Featured" section. */
    featured: z.boolean().default(false),
    /** Sort weight — lower comes first. */
    order: z.number().default(100),
    /** Primary tech stack. */
    stack: z.array(z.string()),
    /** Headline outcomes shown as bullets on the card + detail page. */
    highlights: z.array(z.string()),
    /** Optional metric chips, e.g. { label: "Latency", value: "<800ms" }. */
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    /** Cover image under /public, optional. */
    cover: z.string().optional(),
    /** Optional gallery image paths under /public. */
    gallery: z.array(z.string()).default([]),
    /** Outbound links. */
    links: z
      .object({
        live: z.string().url().optional(),
        repo: z.string().url().optional(),
        caseStudy: z.string().url().optional(),
      })
      .optional(),
    /** Accent color used for the card glow / badge. */
    accent: z.enum(['indigo', 'cyan', 'emerald', 'amber', 'rose', 'violet']).default('indigo'),
    /** SEO override. */
    description: z.string().optional(),
  }),
});

export const collections = { projects };
