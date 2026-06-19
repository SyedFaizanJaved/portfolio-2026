import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE, SOCIALS, NAV_LINKS } from "@/constants/site";
import { scrollToId } from "@/hooks/useLenis";

const socialLinks = [
  { icon: Github, href: SOCIALS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
  { icon: Mail, href: SOCIALS.email, label: "Email" },
];

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative border-t border-border">
      <div className="container-px py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link
              to="/"
              className="flex items-center gap-2 font-display text-xl font-bold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-primary-foreground">
                F
              </span>
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {SITE.role} building intelligent, scalable products. Open to
              freelance work and full-time roles.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-secondary/50 hover:text-foreground"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToId(link.href)}
                className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built with React, TypeScript & Framer Motion in {SITE.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
