import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  Check,
  Building2,
  Lock,
} from "lucide-react";
import { type Project, CONFIDENTIAL_NOTE_SHORT } from "@/data/projects";
import { TiltCard } from "@/components/common/TiltCard";
import { GradientCover } from "@/components/common/GradientCover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { importProjectCaseStudy, prefetchOnIntent } from "@/routes/lazyPages";
import { fadeUp } from "@/utils/motion";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article variants={fadeUp}>
      <TiltCard className="group h-full">
        <div
          className="gradient-border flex h-full flex-col overflow-hidden rounded-3xl bg-card/70 shadow-card"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Cover */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} — ${project.category} preview`}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="h-full w-full object-cover"
                />
              ) : (
                <GradientCover
                  gradient={project.gradient}
                  label={project.name}
                  sublabel={project.category}
                />
              )}
            </div>
            <div className="absolute left-4 top-4">
              <Badge variant="gradient" className="backdrop-blur">
                {project.category}
              </Badge>
            </div>
            <div className="absolute right-4 top-4">
              <Badge className="gap-1 bg-emerald-500/90 text-white backdrop-blur">
                <Check className="h-3 w-3" />
                {project.status}
              </Badge>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-display text-2xl font-semibold">
              {project.name}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Building2 className="h-3.5 w-3.5 text-secondary" />
              {project.organization}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>

            {/* Tech badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Features */}
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
              {project.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 shrink-0 text-secondary" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Confidentiality note */}
            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground/80">
              <Lock className="h-3 w-3 shrink-0 text-secondary" />
              {CONFIDENTIAL_NOTE_SHORT}
            </p>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap items-center gap-2 pt-2">
              {project.liveUrl && (
                <Button asChild size="sm" variant="ghost">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </Button>
              )}
              <Button asChild size="sm" className="w-full">
                <Link
                  to={`/projects/${project.slug}`}
                  {...prefetchOnIntent(importProjectCaseStudy)}
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}
