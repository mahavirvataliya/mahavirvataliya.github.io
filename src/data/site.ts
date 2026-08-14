/**
 * Central source of truth for site-wide personal data.
 * Edit values here to update them everywhere on the site.
 */

export const site = {
  name: 'Mahavir Vataliya',
  firstName: 'Mahavir',
  role: 'Full-Stack Engineer',
  headline: 'Full-Stack Engineer — React, NextJS, Supabase, Python & Agentic AI',
  tagline: 'I own the full loop: customer conversation → product decision → build → deploy → production traces → iterate.',
  location: 'Vadodara, India',
  availability: 'Open to senior remote roles — full-stack, platform & AI product engineering',
  email: 'mahavir.vataliya110@gmail.com',
  phone: '+91 81402 57443',
  yearsExperience: '8+ years',
  summary:
    'Product-minded full-stack engineer with 8+ years of production experience who owns the full loop: ' +
    'customer conversation → product decision → build → deploy → production traces → iterate. ' +
    'Hands-on across React, NextJS, Supabase, Python (FastAPI), and TypeScript/Node.js, with shipped ' +
    'agentic AI products. Scaled a B2B/B2C platform to 1M+ users at 99%+ uptime while cutting ' +
    'infrastructure cost 60% (self-hosted Supabase). Fully remote for 6+ years working directly with ' +
    'US and EU B2B clients.',
} as const;

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone' | 'stackoverflow' | 'medium';
};

// TODO: fill in your Stack Overflow & Medium profile URLs, then add entries here:
//   { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/<your-id>', handle: '<your-handle>', icon: 'stackoverflow' },
//   { label: 'Medium', href: 'https://medium.com/@<your-handle>', handle: '@<your-handle>', icon: 'medium' },
export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/mahavirvataliya', handle: 'mahavirvataliya', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mahavirvataliya', handle: 'mahavirvataliya', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:mahavir.vataliya110@gmail.com', handle: 'mahavir.vataliya110@gmail.com', icon: 'email' },
  { label: 'Phone', href: 'tel:+918140257443', handle: '+91 81402 57443', icon: 'phone' },
];

export type NavItem = { label: string; href: string };

// Resume also has a dedicated header button, so it's not repeated in nav.
export const navItems: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/contact' },
];

export type SkillGroup = {
  title: string;
  icon: 'frontend' | 'backend' | 'database' | 'ai' | 'observability' | 'cloud';
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    items: [
      'ReactJS',
      'NextJS (App Router, SSR/ISR, Headless CMS)',
      'TypeScript',
      'React Native',
      'WebSockets',
      'TailwindCSS',
      'Gutenberg Blocks',
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    items: [
      'Python (FastAPI, Pandas)',
      'Node.js (NestJS)',
      'PHP (Laravel)',
      'REST APIs',
      'Webhooks',
      'Event-Driven Queues (RabbitMQ, Redis)',
      'Idempotent Transactions',
    ],
  },
  {
    title: 'Supabase & Databases',
    icon: 'database',
    items: [
      'Supabase (Postgres, Auth, self-hosted)',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'MongoDB',
      'DynamoDB',
      'Milvus (vector)',
      'Query Optimization & Indexing',
    ],
  },
  {
    title: 'Agentic AI & LLM Products',
    icon: 'ai',
    items: [
      'LangChain',
      'RAG & Embedding Pipelines',
      'Multi-Agent Orchestration',
      'Structured Outputs',
      'AI Evaluation & Hallucination Management',
      'Human-in-the-Loop Review',
      'MCP Servers',
      'Claude Code (Custom Skills, Hooks)',
      'OpenAI + Ollama',
      'AI Token & Cost Control',
      'AI Voice Agents (LiveKit, FreeSWITCH, Asterisk, Yeastar)',
    ],
  },
  {
    title: 'Production Observability',
    icon: 'observability',
    items: [
      'Production Tracing & Debugging',
      'New Relic, CloudWatch, Uptime Kuma, SonarQube',
      'Retries & Failed-Sync Recovery',
      'Webhook-Driven Reconciliation',
      '99%+ Uptime at 100K+ Concurrent Users',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: [
      'AWS (Lambda, EC2, S3, RDS, Elastic Beanstalk, CloudFront)',
      'Azure',
      'Cloudflare (Pages, CDN, Zero Trust, Stream)',
      'Docker',
      'Terraform',
      'CI/CD (GitHub Actions, GitLab CI)',
      'Serverless',
      'Coolify (self-hosted PaaS)',
    ],
  },
];

/** How I work — the operating principles. Signals culture-fit for remote-first teams. */
export type WayOfWorking = { title: string; detail: string; icon: string };

export const waysOfWorking: WayOfWorking[] = [
  {
    title: 'Async-first, written-first',
    detail:
      '6+ years remote working directly with US and EU B2B clients. Decisions live in writing, updates don\u2019t need a meeting, and handoffs survive timezones.',
    icon: 'observability',
  },
  {
    title: 'Direct customer discovery',
    detail:
      'I sit in discovery calls with non-technical customers and translate what they say into what they actually need — before writing any code.',
    icon: 'briefcase',
  },
  {
    title: 'Signal over one-off feedback',
    detail:
      'I separate one-off feedback from roadmap signal: one customer\u2019s workaround isn\u2019t a feature request, but three of them are a pattern.',
    icon: 'star',
  },
  {
    title: 'Build-vs-buy discipline',
    detail:
      'The right default isn\u2019t always a managed service — self-hosting Supabase on Aurora Serverless cut our cloud spend 60%. I do the math before picking.',
    icon: 'cloud',
  },
  {
    title: 'AI agents as daily leverage',
    detail:
      'Claude Code with custom skills, hooks, and MCP servers is my primary working mode — with evaluation gates so AI speed doesn\u2019t outrun quality.',
    icon: 'ai',
  },
  {
    title: 'Raise the floor',
    detail:
      'Mentored 10+ engineers and established code review, CI/CD, and automated-testing standards. A team that ships safely is faster than any hero.',
    icon: 'rocket',
  },
];

/** Open source & community presence. */
export type OpenSourceItem = {
  title: string;
  detail: string;
  url?: string;
  urlLabel?: string;
  badge?: string;
  icon: string;
};

export const openSource: OpenSourceItem[] = [
  {
    title: 'IPE — Pusher-server alternative in Go',
    detail:
      'Author of IPE, an open-source, self-hostable Pusher-server alternative written in Go for realtime WebSockets at scale.',
    url: 'https://github.com/mahavirvataliya',
    urlLabel: 'GitHub',
    badge: 'Author',
    icon: 'code',
  },
  {
    title: 'React Native WebView',
    detail:
      'Merged contribution to the react-native-webview library used across the React Native ecosystem.',
    url: 'https://github.com/react-native-webview/react-native-webview',
    urlLabel: 'Repository',
    badge: 'Merged PR',
    icon: 'github',
  },
  {
    title: 'Stack Overflow & Medium',
    detail: 'Active answering questions and writing engineering posts.',
    icon: 'star',
  },
  {
    title: 'Hackathon — organised & won',
    detail:
      'Organised a company hackathon and won a prize for an API proxy with pricing and rate limiting.',
    badge: 'Winner',
    icon: 'hackathon',
  },
];

/** What Mahavir is looking for next — phrased as values so it attracts the right teams. */
export const lookingFor = {
  roles: [
    'Senior / Staff Full-Stack Engineer',
    'Platform / Infrastructure Engineer',
    'AI Product Engineer',
  ],
  environment: [
    'Remote-first teams with an async, written culture',
    'Ownership of products end-to-end, not just tickets',
    'Teams building developer platforms, edge infrastructure, or open-source products',
  ],
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Software Engineer → Chief Architect',
    company: 'AtliQ Technologies',
    location: 'Vadodara, India (Remote)',
    period: 'Jul 2020 – Present',
    current: true,
    highlights: [
      'Owned the full product loop for B2B client engagements — discovery calls with non-technical customers, scope & architecture decisions, build, ship, iterate from production behaviour — across CRM, LMS, fintech, and AI automation.',
      'Architected & shipped Knogen.ai, a production enterprise agentic RAG platform (Python/FastAPI, LangChain, Milvus, Azure AI Foundry) with document automation, RBAC retrieval, grounded citations, HITL review, and cost-aware model routing.',
      'Deployed multi-agent orchestration platforms (Paperclip, Hermes, OpenClaw) with governance, audit trails, and evaluation gates before production.',
      'Replatformed CFR.org from legacy Drupal to headless WordPress + NextJS with custom Gutenberg-mapped rendering blocks and Python content-migration pipelines.',
      'Self-hosted Supabase on Aurora Serverless v2 as the company\u2019s Postgres + Auth backbone, cutting cloud spend 60% as part of a build-vs-buy overhaul.',
      'Scaled codebasics.io to 1M+ users at 99%+ uptime via Redis caching, DB indexing, Laravel Octane, Nginx tuning, Multi-AZ RDS, CloudFront — tracing with New Relic & CloudWatch (critical stored procedure 4s → 100ms, DB perf +30%).',
      'Built operational automation with production-grade reliability: cross-provider video auto-sync with retries, failed-sync recovery & monitoring; multi-currency payments with idempotent transactions and webhook reconciliation across Stripe & Authorize.Net.',
      'Run the org-wide secure deployment platform on Cloudflare Zero Trust + Coolify, where employees ship AI-built internal tools safely.',
      'Mentored 10+ engineers; established code review, CI/CD, and automated-testing standards.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Infobizzs Services Pvt Ltd',
    location: 'Vadodara, India',
    period: 'Jun 2018 – Jun 2020',
    current: false,
    highlights: [
      'Built Cloint, an operations-heavy B2B SaaS CRM (Laravel, React Native, AWS) with multi-role workflows, pipelines, statuses, tasks, notifications, and in-app Twilio VoIP calling; converted the monolith into a 12-factor distributed system.',
      'Built event-driven Python data-import microservices (RabbitMQ/Redis) and introduced the company\u2019s first automated-testing discipline (PHPUnit) on a multi-role school-management platform.',
      'Moved a crashing PHP Excel-import into a Python/Pandas serverless pipeline (Lambda, S3, API Gateway) for memory-safe document processing.',
    ],
  },
];

export type Achievement = { title: string; detail: string; icon: 'star' | 'code' | 'award' | 'hackathon' };

export const achievements: Achievement[] = [
  {
    title: 'Performer of the Quarter (4×) & Performer of the Year',
    detail: 'Awarded at AtliQ for engineering excellence and driving cross-team technical initiatives.',
    icon: 'award',
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '8+', label: 'Years in production' },
  { value: '1M+', label: 'Users scaled' },
  { value: '60%', label: 'Cloud cost cut' },
  { value: '99%+', label: 'Uptime sustained' },
];
