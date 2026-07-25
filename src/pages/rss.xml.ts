import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const projects = (await getCollection('projects')).sort(
    (a, b) => a.data.order - b.data.order
  );

  return rss({
    title: 'Mahavir Vataliya — Projects',
    description:
      'Selected work: agentic AI platforms, high-traffic web apps, AI voice agents, and more.',
    site: context.site ?? 'https://mahavir-portfolio.pages.dev',
    items: projects.map((project) => ({
      title: project.data.title,
      description: project.data.tagline,
      pubDate: new Date(),
      link: `/projects/${project.slug}/`,
      categories: [project.data.category, ...project.data.stack],
    })),
    customData: '<language>en-us</language>',
  });
}
