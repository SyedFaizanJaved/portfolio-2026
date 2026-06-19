export const SITE = {
  name: "Syed Faizan Javed",
  firstName: "Faizan",
  role: "Full Stack Software Engineer",
  experience: "2+ Years",
  location: "Lahore, Pakistan",
  email: "faizanjaved5565@gmail.com",
  resumeUrl: "/resume.pdf",
  resumeDownloadName: "Syed_Faizan_Javed_Resume.pdf",
  url: "https://syedfaizanjaved.vercel.app",
  tagline: "Building Intelligent Digital Products.",
  description:
    "Full Stack Software Engineer specializing in MERN Stack, Django, React, Next.js, AI Integrations, and scalable SaaS applications.",
} as const;

export const SOCIALS = {
  github: "https://github.com/SyedFaizanJaved",
  linkedin: "https://linkedin.com/in/syedfaizanjaved",
  email: `mailto:${SITE.email}`,
} as const;

export interface NavLink {
  label: string;
  href: string; // anchor on home (#id) or route (/path)
}

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

/** Section ids in document order — used for scroll-spy. */
export const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "services",
  "blog",
  "contact",
] as const;

export const TYPING_ROLES = [
  "MERN Stack Developer",
  "Django Developer",
  "React Developer",
  "Next.js Developer",
  "AI Integration Engineer",
  "Full Stack Engineer",
];
