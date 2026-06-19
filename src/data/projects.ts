export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface ProjectResult {
  metric: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  /** gradient pair for the fallback cover (used when `image` is absent) */
  gradient: [string, string];
  /** optional cover image path (e.g. "/projects/flit.png") */
  image?: string;
  stack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Organization the project was built for */
  organization: string;
  /** Delivery status, e.g. "Completed" */
  status: string;
  // Case study content
  overview: string;
  role: string;
  timeline: string;
  caseStudy: CaseStudySection[];
  results: ProjectResult[];
}

export const PROJECTS: Project[] = [
  {
    slug: "flit",
    name: "FLIT",
    category: "Hiring Platform",
    tagline:
      "An AI-matched hiring platform connecting employers and candidates through WorkDNA.",
    gradient: ["#3B82F6", "#8B5CF6"],
    image: "/projects/flit.png",
    organization: "NeuroOceans.ai",
    status: "Completed",
    stack: ["React", "Django", "Stripe", "RBAC"],
    features: [
      "WorkDNA matching",
      "Employer Dashboard",
      "Candidate Dashboard",
      "Admin Panel",
      "Secure Payments",
      "Authentication",
      "AI Matching",
    ],
    githubUrl: "https://github.com/SyedFaizanJaved",
    overview:
      "FLIT is a two-sided hiring marketplace that matches candidates to roles using a proprietary 'WorkDNA' profile. I helped build the full platform — three role-based experiences, AI matching, and secure Stripe payments.",
    role: "Full Stack Engineer — React frontend, Django REST backend, payments and RBAC.",
    timeline: "2024 — Present · NeuroOceans.ai",
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Traditional job boards match on keywords, flooding employers with weak applicants and burying good candidates. FLIT needed a smarter signal — and three distinct, secure experiences for candidates, employers, and admins.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "I implemented the WorkDNA profile flow and the AI matching surface on the frontend, plus the Django REST endpoints that score and rank candidates against roles.",
          "Role-Based Access Control gates every route and API: candidates, employers, and admins each see only what they should. Stripe powers employer subscriptions and one-off unlocks, with webhooks keeping entitlements in sync.",
        ],
      },
      {
        heading: "Technical highlights",
        body: [
          "A normalized permissions layer in Django keeps authorization logic in one place instead of scattered checks. The React app consumes a typed API client, with optimistic UI on the dashboards for a snappy feel.",
          "Payments are fully webhook-driven, so access never drifts from billing state even if a checkout tab is closed early.",
        ],
      },
    ],
    results: [
      { metric: "3", label: "Role-based dashboards" },
      { metric: "100%", label: "Webhook-synced billing" },
      { metric: "AI", label: "Candidate matching" },
    ],
  },
  {
    slug: "supplement-ai",
    name: "Supplement AI",
    category: "Healthcare SaaS",
    tagline:
      "A healthcare SaaS that turns health inputs into personalized supplement recommendations.",
    gradient: ["#06B6D4", "#3B82F6"],
    image: "/projects/supplement-ai.png",
    organization: "NeuroOceans.ai",
    status: "Completed",
    stack: ["React", "Django", "AI"],
    features: ["AI Recommendations", "Health Analysis", "Responsive Dashboard"],
    githubUrl: "https://github.com/SyedFaizanJaved",
    overview:
      "Supplement AI analyzes a user's health profile and generates tailored supplement guidance through a clean, responsive dashboard backed by an AI recommendation engine.",
    role: "Full Stack Engineer — React dashboard and Django AI integration.",
    timeline: "2024 · NeuroOceans.ai",
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Generic supplement advice ignores the individual. Users wanted recommendations grounded in their own health data, presented simply enough to act on.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "I built the responsive dashboard that captures health inputs and renders AI-generated recommendations with clear reasoning, plus the Django services that call the AI layer and persist analysis history.",
        ],
      },
      {
        heading: "Technical highlights",
        body: [
          "The recommendation prompts are structured and validated so outputs stay consistent and safe. The dashboard streams results progressively so the page never feels stalled while the model works.",
        ],
      },
    ],
    results: [
      { metric: "AI", label: "Personalized engine" },
      { metric: "100%", label: "Responsive UI" },
      { metric: "Live", label: "Health analysis" },
    ],
  },
  {
    slug: "gaapiq",
    name: "GaapIQ",
    category: "Accounting AI Platform",
    tagline:
      "An accounting AI platform that drafts memos, cites standards, and bills by subscription.",
    gradient: ["#8B5CF6", "#06B6D4"],
    image: "/projects/gaapiq.png",
    organization: "NeuroOceans.ai",
    status: "Completed",
    stack: ["React", "Django", "Stripe"],
    features: [
      "AI Memo Generator",
      "Citation Engine",
      "Subscription Billing",
      "Batch Processing",
    ],
    githubUrl: "https://github.com/SyedFaizanJaved",
    overview:
      "GaapIQ helps accountants draft technical memos with an AI generator and a citation engine that grounds outputs in standards, all behind subscription billing with batch processing for scale.",
    role: "Full Stack Engineer — React frontend, Django backend, Stripe billing.",
    timeline: "2024 — Present · NeuroOceans.ai",
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Drafting accounting memos is slow and citation-heavy. GaapIQ needed to generate defensible drafts with real citations — and process many at once for firms.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "I worked on the AI memo generator UI and the citation engine surface, plus Stripe subscription billing and the batch-processing pipeline that lets users queue many documents.",
        ],
      },
      {
        heading: "Technical highlights",
        body: [
          "Batch jobs run asynchronously with status surfaced back to the UI, so a large run never blocks the interface. Subscriptions and usage limits are enforced server-side and reconciled through Stripe webhooks.",
        ],
      },
    ],
    results: [
      { metric: "Batch", label: "Async processing" },
      { metric: "Cited", label: "Grounded outputs" },
      { metric: "Stripe", label: "Subscription billing" },
    ],
  },
  {
    slug: "weavesync",
    name: "WeaveSync",
    category: "Integration Platform",
    tagline:
      "A real-time integration platform that weaves your tools and data into one synchronized flow.",
    gradient: ["#06B6D4", "#8B5CF6"],
    image: "/projects/weavesync.png",
    organization: "NeuroOceans.ai",
    status: "Completed",
    stack: ["React", "Django", "PostgreSQL", "REST APIs", "Webhooks"],
    features: [
      "Real-time Sync",
      "Connector Library",
      "Conflict Resolution",
      "Scheduled Jobs",
      "Webhook Triggers",
      "Monitoring Dashboard",
    ],
    githubUrl: "https://github.com/SyedFaizanJaved",
    overview:
      "WeaveSync keeps data consistent across the tools a business already uses. It connects third-party APIs and internal services, then syncs records in real time with conflict handling so nothing drifts out of date.",
    role: "Full Stack Engineer — React dashboard, Django sync engine, webhooks and scheduling.",
    timeline: "2024 — Present · NeuroOceans.ai",
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Teams run on a patchwork of tools that don't talk to each other, so the same record lives in three places and slowly diverges. Manual exports and brittle one-off scripts don't scale.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "I built the connector framework and the React monitoring dashboard, plus the Django engine that syncs records bidirectionally and resolves conflicts by configurable rules.",
          "Webhooks trigger instant updates, while a scheduler backfills and reconciles on an interval so the system is both real-time and self-healing.",
        ],
      },
      {
        heading: "Technical highlights",
        body: [
          "Sync runs as idempotent jobs with a clear audit trail, so a replay never duplicates data. Failed syncs surface in the dashboard with the exact record and reason, turning silent drift into something operators can see and fix.",
        ],
      },
    ],
    results: [
      { metric: "Realtime", label: "Bidirectional sync" },
      { metric: "Auditable", label: "Idempotent jobs" },
      { metric: "Live", label: "Monitoring dashboard" },
    ],
  },
  {
    slug: "toca",
    name: "TOCA",
    category: "AI Assistant Platform",
    tagline:
      "An AI assistant platform that turns conversations into actions with contextual memory.",
    gradient: ["#3B82F6", "#06B6D4"],
    image: "/projects/toca.png",
    organization: "NeuroOceans.ai",
    status: "Completed",
    stack: ["React", "Django", "OpenAI API", "WebSockets"],
    features: [
      "Conversational AI",
      "Context Memory",
      "Multi-model Support",
      "Realtime Streaming",
      "Usage Analytics",
    ],
    githubUrl: "https://github.com/SyedFaizanJaved",
    overview:
      "TOCA is an AI assistant platform that holds a real conversation — remembering context across a session and turning natural-language requests into concrete actions, streamed back to the user in real time.",
    role: "Full Stack Engineer — React chat UI, Django + OpenAI backend, realtime streaming.",
    timeline: "2024 — Present · NeuroOceans.ai",
    caseStudy: [
      {
        heading: "The problem",
        body: [
          "Most chat assistants forget everything between messages and stall on a spinner while the model thinks. Users wanted a continuous, responsive assistant that actually remembers what was said.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "I built the streaming chat interface and the Django service layer that manages context memory, routes between models, and calls the OpenAI API.",
          "Responses stream token-by-token over WebSockets so the conversation feels live, and session context is persisted so follow-up questions just work.",
        ],
      },
      {
        heading: "Technical highlights",
        body: [
          "Prompts are structured and validated for consistent, safe output, and a usage-analytics layer tracks tokens and latency per session so cost and performance stay visible as usage grows.",
        ],
      },
    ],
    results: [
      { metric: "Streamed", label: "Realtime responses" },
      { metric: "Context", label: "Session memory" },
      { metric: "Multi", label: "Model support" },
    ],
  },
];

export function getProjectBySlug(slug?: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Shown on cards/case studies to explain why no real screenshots are public. */
export const CONFIDENTIAL_NOTE =
  "Built at NeuroOceans.ai as a proprietary, in-house product. Real application screenshots can't be shared publicly, so the preview shown is a representative mockup.";

export const CONFIDENTIAL_NOTE_SHORT =
  "Proprietary NeuroOceans.ai product — representative mockup shown.";
