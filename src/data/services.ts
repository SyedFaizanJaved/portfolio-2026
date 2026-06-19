import type { LucideIcon } from "lucide-react";
import {
  Layers,
  Code2,
  Server,
  Plug,
  Brain,
  Rocket,
  CreditCard,
  Gauge,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES: Service[] = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web apps — from database schema to pixel-perfect UI — built to scale.",
    icon: Layers,
  },
  {
    title: "MERN Stack Development",
    description:
      "MongoDB, Express, React and Node apps with clean, maintainable architecture.",
    icon: Code2,
  },
  {
    title: "Django Development",
    description:
      "Robust Python backends with Django REST Framework, auth, and admin tooling.",
    icon: Server,
  },
  {
    title: "REST API Development",
    description:
      "Well-documented, versioned APIs with authentication, validation and tests.",
    icon: Plug,
  },
  {
    title: "AI Integration",
    description:
      "Wire LLMs and OpenAI into products — chat, generation, search and automation.",
    icon: Brain,
  },
  {
    title: "SaaS Development",
    description:
      "Multi-tenant SaaS with RBAC, dashboards, billing and production deployment.",
    icon: Rocket,
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Stripe checkout, subscriptions and webhooks wired securely into your app.",
    icon: CreditCard,
  },
  {
    title: "Performance Optimization",
    description:
      "Faster loads, smoother UX and higher Lighthouse scores across the board.",
    icon: Gauge,
  },
];
