export interface BlogBlock {
  type: "p" | "h2" | "ul" | "code";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: [string, string];
  content: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-scalable-saas-products",
    title: "Building Scalable SaaS Products",
    excerpt:
      "Lessons from shipping multi-tenant SaaS — from RBAC to billing to deployment — without painting yourself into a corner.",
    category: "Architecture",
    date: "May 2025",
    readTime: "7 min read",
    gradient: ["#3B82F6", "#8B5CF6"],
    content: [
      {
        type: "p",
        text: "Scalable SaaS is less about premature micro-optimization and more about boundaries you won't regret in a year. Here is what has held up across the products I've shipped.",
      },
      { type: "h2", text: "Model tenancy early" },
      {
        type: "p",
        text: "Decide how tenants are isolated before you write a second feature. Retrofitting tenant scoping onto queries later is the kind of work that quietly eats sprints and invites data leaks.",
      },
      { type: "h2", text: "Keep authorization in one place" },
      {
        type: "p",
        text: "Scatter permission checks across controllers and you'll never be sure who can do what. A single RBAC layer that every route and API passes through is easier to reason about and to audit.",
      },
      { type: "h2", text: "Make billing the source of truth" },
      {
        type: "ul",
        items: [
          "Drive entitlements from webhooks, not from the checkout response.",
          "Reconcile state so access never drifts from what the customer paid for.",
          "Treat the failure paths — declined cards, cancellations — as first-class.",
        ],
      },
      {
        type: "p",
        text: "Get these three right and most other scaling problems become tractable.",
      },
    ],
  },
  {
    slug: "react-performance-tips",
    title: "React Performance Tips",
    excerpt:
      "Practical ways to keep React apps fast: rendering discipline, code-splitting, and measuring what actually matters.",
    category: "React",
    date: "April 2025",
    readTime: "6 min read",
    gradient: ["#06B6D4", "#3B82F6"],
    content: [
      {
        type: "p",
        text: "Most React slowness isn't the framework — it's avoidable re-renders and shipping too much JavaScript. Fix those two and the rest is detail.",
      },
      { type: "h2", text: "Render less, not faster" },
      {
        type: "p",
        text: "Before reaching for memoization, ask whether the component should re-render at all. Lift state down, split components, and keep expensive subtrees isolated from frequently-changing state.",
      },
      { type: "h2", text: "Split the bundle" },
      {
        type: "ul",
        items: [
          "Lazy-load routes and heavy libraries (3D, charts) behind Suspense.",
          "Use manual chunks to keep vendor code cacheable across deploys.",
          "Defer anything below the fold until it's needed.",
        ],
      },
      { type: "h2", text: "Measure on real devices" },
      {
        type: "p",
        text: "Lighthouse and a throttled mid-range phone tell you more than your dev machine ever will. Optimize for the slowest device you care about, not the fastest you own.",
      },
    ],
  },
  {
    slug: "django-best-practices",
    title: "Django Best Practices",
    excerpt:
      "How to keep Django REST projects clean as they grow — fat models, thin views, and APIs you can trust.",
    category: "Django",
    date: "March 2025",
    readTime: "8 min read",
    gradient: ["#8B5CF6", "#06B6D4"],
    content: [
      {
        type: "p",
        text: "Django gives you a lot for free, but large projects still drift without a few habits. These keep the codebase readable as the team and surface area grow.",
      },
      { type: "h2", text: "Fat models, thin views" },
      {
        type: "p",
        text: "Business logic belongs on models and services, not in views or serializers. Views should orchestrate; the domain rules should live somewhere you can test in isolation.",
      },
      { type: "h2", text: "Serializers are contracts" },
      {
        type: "p",
        text: "Treat DRF serializers as the public shape of your API. Validate aggressively, version deliberately, and never leak internal fields just because they're convenient.",
      },
      { type: "h2", text: "Guard the database" },
      {
        type: "ul",
        items: [
          "Use select_related / prefetch_related to kill N+1 queries.",
          "Wrap multi-step writes in transactions.",
          "Add indexes for the queries you actually run, not the ones you imagine.",
        ],
      },
    ],
  },
  {
    slug: "ai-in-modern-web-development",
    title: "AI in Modern Web Development",
    excerpt:
      "Integrating LLMs into real products: structured prompts, graceful UX, and keeping outputs safe and consistent.",
    category: "AI",
    date: "February 2025",
    readTime: "6 min read",
    gradient: ["#3B82F6", "#06B6D4"],
    content: [
      {
        type: "p",
        text: "Adding AI to a product is easy to demo and hard to ship well. The gap is mostly engineering discipline around an inherently fuzzy component.",
      },
      { type: "h2", text: "Structure the prompt, validate the output" },
      {
        type: "p",
        text: "Treat prompts like code: version them, constrain them, and validate what comes back. Schema-validated outputs turn an unpredictable model into a dependable building block.",
      },
      { type: "h2", text: "Design for latency" },
      {
        type: "ul",
        items: [
          "Stream responses so the UI feels alive while the model thinks.",
          "Show intermediate state — never a frozen spinner.",
          "Fail gracefully with a clear, actionable message.",
        ],
      },
      { type: "h2", text: "Keep humans in control" },
      {
        type: "p",
        text: "AI should accelerate the user, not replace their judgment. Make outputs easy to review, edit, and reject — especially in regulated domains like finance and health.",
      },
    ],
  },
];

export function getPostBySlug(slug?: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
