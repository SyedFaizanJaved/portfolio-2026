import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Check,
  Briefcase,
  Clock,
  UserRound,
  Building2,
  Lock,
} from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageTransition } from "@/components/common/PageTransition";
import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/common/Reveal";
import { GradientCover } from "@/components/common/GradientCover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS, getProjectBySlug, CONFIDENTIAL_NOTE } from "@/data/projects";
import NotFound from "./NotFound";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <PageTransition>
      <SEO
        title={`${project.name} Case Study`}
        description={project.tagline}
        path={`/projects/${project.slug}`}
        type="article"
      />
      <Layout>
        <article className="pb-24 pt-28">
          <div className="container-px">
            <Link
              to="/"
              state={{ scrollTo: "#projects" }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>

            {/* Hero */}
            <Reveal className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="gradient">{project.category}</Badge>
                <Badge className="gap-1 bg-emerald-500/90 text-white">
                  <Check className="h-3 w-3" />
                  {project.status}
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Building2 className="h-3 w-3" />
                  {project.organization}
                </Badge>
              </div>
              <h1 className="mt-4 text-fluid-h2 font-bold leading-tight">
                {project.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                {project.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Reveal>

            {/* Cover */}
            <Reveal className="mt-10" delay={0.05}>
              <div className="gradient-border aspect-[16/8] overflow-hidden rounded-3xl shadow-card">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} — ${project.category} preview`}
                    width={1200}
                    height={600}
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
              <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                {CONFIDENTIAL_NOTE}
              </p>
            </Reveal>

            {/* Meta + content */}
            <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-start">
              {/* Sidebar meta */}
              <Reveal className="lg:sticky lg:top-28">
                <dl className="gradient-border space-y-5 rounded-2xl bg-card/60 p-6">
                  <MetaRow icon={UserRound} label="My role" value={project.role} />
                  <MetaRow
                    icon={Clock}
                    label="Timeline"
                    value={project.timeline}
                  />
                  <div>
                    <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5" /> Stack
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <Badge key={t} variant="outline">
                          {t}
                        </Badge>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      Key features
                    </dt>
                    <dd className="mt-2 space-y-1.5">
                      {project.features.map((f) => (
                        <p
                          key={f}
                          className="flex items-center gap-2 text-sm text-foreground/90"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-secondary" />
                          {f}
                        </p>
                      ))}
                    </dd>
                  </div>
                </dl>
              </Reveal>

              {/* Body */}
              <div className="space-y-12">
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold">Overview</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {project.overview}
                  </p>
                </Reveal>

                {project.caseStudy.map((section) => (
                  <Reveal key={section.heading}>
                    <h2 className="font-display text-2xl font-semibold">
                      {section.heading}
                    </h2>
                    <div className="mt-3 space-y-3">
                      {section.body.map((p, i) => (
                        <p
                          key={i}
                          className="text-base leading-relaxed text-muted-foreground"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                ))}

                {/* Results */}
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold">Results</h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {project.results.map((r) => (
                      <div
                        key={r.label}
                        className="gradient-border rounded-2xl bg-card/60 p-5 text-center"
                      >
                        <p className="font-display text-3xl font-bold text-gradient">
                          {r.metric}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Next project */}
            <Reveal className="mt-20">
              <Link
                to={`/projects/${next.slug}`}
                className="group flex items-center justify-between gap-4 rounded-3xl gradient-border bg-card/60 p-8 transition-shadow hover:shadow-glow-blue"
              >
                <span>
                  <span className="text-sm text-muted-foreground">
                    Next project
                  </span>
                  <span className="mt-1 block font-display text-2xl font-semibold">
                    {next.name}
                  </span>
                </span>
                <ArrowRight className="h-6 w-6 text-secondary transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </article>
      </Layout>
    </PageTransition>
  );
}

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof UserRound;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </dt>
      <dd className="mt-1 text-sm text-foreground/90">{value}</dd>
    </div>
  );
}
