export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Faizan took our AI SaaS from a rough prototype to a production app our customers trust. He owns problems end to end and ships with unusual polish for someone early in their career.",
    name: "Daniyal Ahmed",
    title: "Product Lead, NeuroOceans.ai",
    initials: "DA",
  },
  {
    quote:
      "The Stripe billing and RBAC work was flawless — secure, well-tested, and delivered ahead of schedule. Communication was clear at every step, which made the whole engagement easy.",
    name: "Sarah Mitchell",
    title: "Founder, GaapIQ",
    initials: "SM",
  },
  {
    quote:
      "He has a rare mix of strong frontend craft and solid backend instincts. Our React dashboard finally feels fast and intentional. I'd hire Faizan again without hesitation.",
    name: "Omar Khan",
    title: "CTO, Supplement AI",
    initials: "OK",
  },
];
