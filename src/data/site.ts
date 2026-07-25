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
  location: 'Vadodara, India (Remote)',
  availability: 'Open to remote roles & contract work (US / EU / India)',
  email: 'mahavir.vataliya110@gmail.com',
  phone: '+91 81402 57443',
  yearsExperience: '8+ years',
  summary:
    'Product-minded full-stack engineer with 8+ years of production experience who owns the full loop: ' +
    'customer conversation → product decision → build → deploy → production traces → iterate. ' +
    'Hands-on across React, NextJS, Supabase, Python (FastAPI), and TypeScript/Node.js, with shipped ' +
    'agentic AI products. Scaled a B2B/B2C platform to 1M+ users at 99%+ uptime while cutting ' +
    'infrastructure cost 60%. Fully remote for 6+ years working directly with US and EU B2B clients.',
} as const;

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone';
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/mahavirvataliya', handle: 'mahavirvataliya', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mahavirvataliya', handle: 'mahavirvataliya', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:mahavir.vataliya110@gmail.com', handle: 'mahavir.vataliya110@gmail.com', icon: 'email' },
  { label: 'Phone', href: 'tel:+918140257443', handle: '+91 81402 57443', icon: 'phone' },
];

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Resume', href: '/resume' },
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
      'Docker',
      'Terraform',
      'CI/CD (GitHub Actions, GitLab CI)',
      'Serverless',
      'Cloudflare Zero Trust + Coolify',
    ],
  },
];

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
      'Use AI agents as leverage across development (Claude Code with custom skills, hooks, MCP servers); run the org-wide secure deployment platform on Cloudflare Zero Trust + Coolify.',
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
    title: 'React Native WebView contribution',
    detail: 'Merged open-source contribution to the React Native WebView library.',
    icon: 'code',
  },
  {
    title: 'IPE — Go Pusher alternative',
    detail: 'Author of IPE, an open-source Pusher-server alternative written in Go.',
    icon: 'code',
  },
  {
    title: 'Performer of the Quarter (4×) & Performer of the Year',
    detail: 'Awarded at AtliQ for engineering excellence and driving cross-team technical initiatives.',
    icon: 'award',
  },
  {
    title: 'Hackathon win — API Proxy',
    detail: 'Organised a hackathon and won a prize for building an API proxy with pricing and rate limiting.',
    icon: 'hackathon',
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: '8+', label: 'Years in production' },
  { value: '1M+', label: 'Users scaled' },
  { value: '60%', label: 'Cloud cost cut' },
  { value: '99%+', label: 'Uptime sustained' },
];
