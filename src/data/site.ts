/**
 * Central source of truth for site-wide personal data.
 * Edit values here to update them everywhere on the site.
 */

export const site = {
  name: 'Mahavir Vataliya',
  role: 'Full-stack engineer',
  location: 'Vadodara, India',
  email: 'mahavir.vataliya110@gmail.com',
  phone: '+91 81402 57443',
  intro: [
    "I'm a full-stack engineer. I build web platforms and AI products, and I've been shipping production software for 8 years — the last 6 of them remote, mostly with US and EU clients.",
    'I currently work as chief architect at AtliQ Technologies, where I lead products from the first customer conversation through to production: Knogen.ai (enterprise RAG), a learning platform used by 1M+ people, and the tooling our own teams deploy through.',
    'I work mostly in TypeScript/React/NextJS, Python/FastAPI, Postgres/Supabase, and LangChain, and I run things on AWS and Cloudflare.',
  ],
} as const;

export type SocialLink = { label: string; href: string; handle: string };

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/mahavirvataliya', handle: 'mahavirvataliya' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mahavirvataliya', handle: 'mahavirvataliya' },
  { label: 'Email', href: 'mailto:mahavir.vataliya110@gmail.com', handle: 'mahavir.vataliya110@gmail.com' },
];

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Writing', href: '/blog' },
  { label: 'Résumé', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

/** What Mahavir is looking for next — used on the contact page. */
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
  period: string;
  current: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Software Engineer → Chief Architect',
    company: 'AtliQ Technologies',
    period: '2020 – now',
    current: true,
    highlights: [
      'Architect of Knogen.ai, an enterprise RAG platform (Python, FastAPI, LangChain, Milvus) with permissions-aware retrieval, citations, and evaluation gates. Also built the multi-agent automation platforms behind several client deployments.',
      'Took codebasics.io to 1M+ users at 99%+ uptime, and cut our cloud bill 60% by self-hosting Supabase on Aurora Serverless instead of paying per-seat managed services.',
      'Replatformed CFR.org from legacy Drupal to headless WordPress + NextJS, keeping the editorial team in their existing workflow.',
      'Built an AI voice agent for a UAE consultancy (LiveKit, Azure Speech, Yeastar PBX) that qualifies leads on real phone calls.',
      'Run the internal deployment platform on Cloudflare Zero Trust + Coolify. Mentored 10+ engineers and set up our code review, CI/CD, and testing practices.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Infobizzs Services',
    period: '2018 – 2020',
    current: false,
    highlights: [
      'Built Cloint, a multi-role B2B CRM (Laravel, React Native, Twilio VoIP), and broke it out of a monolith into services.',
      'Wrote event-driven Python data-import services on RabbitMQ/Redis.',
      'Introduced the company\u2019s first automated testing (PHPUnit).',
    ],
  },
];

/** Open source & community — plain lines, no badges. */
export type OpenSourceItem = { text: string; url?: string };

export const openSource: OpenSourceItem[] = [
  {
    text: 'IPE — an open-source Pusher-server alternative written in Go.',
    url: 'https://github.com/mahavirvataliya',
  },
  {
    text: 'Merged contribution to react-native-webview.',
    url: 'https://github.com/react-native-webview/react-native-webview',
  },
  { text: 'Active on Stack Overflow and Medium.' },
];
