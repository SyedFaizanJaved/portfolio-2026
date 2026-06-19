export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "NeuroOceans.ai",
    period: "August 2024 – Present",
    current: true,
    summary:
      "Building production AI-powered SaaS products end to end, from data models to polished React interfaces.",
    responsibilities: [
      "Built and shipped scalable SaaS applications.",
      "Developed AI-powered product features.",
      "Integrated Stripe payments and subscription billing.",
      "Designed Role-Based Access Control (RBAC) systems.",
      "Owned React + Django development across the stack.",
      "Built and consumed REST APIs.",
      "Maintained clean Git workflows.",
      "Collaborated in Agile sprints.",
      "Communicated directly with clients on requirements.",
      "Managed production deployments.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Stackup Solutions",
    period: "October 2023 – November 2023",
    summary:
      "Focused on responsive, component-driven React interfaces and UI polish.",
    responsibilities: [
      "Built responsive React applications.",
      "Implemented Bootstrap layouts.",
      "Optimized reusable components.",
      "Delivered UI improvements across pages.",
    ],
  },
];
