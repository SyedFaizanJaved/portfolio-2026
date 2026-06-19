export interface SkillGroup {
  category: string;
  /** lucide icon name handled in component via map */
  icon: "Layout" | "Server" | "Database" | "Wrench" | "Sparkles";
  accent: "blue" | "violet" | "cyan";
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "Layout",
    accent: "blue",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    accent: "violet",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "Python",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    category: "Database",
    icon: "Database",
    accent: "cyan",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps & Tools",
    icon: "Wrench",
    accent: "blue",
    skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Netlify"],
  },
  {
    category: "AI",
    icon: "Sparkles",
    accent: "violet",
    skills: ["OpenAI API", "Prompt Engineering", "AI Integrations"],
  },
];
