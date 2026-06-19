import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { PageTransition } from "@/components/common/PageTransition";
import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/common/Reveal";
import { GradientCover } from "@/components/common/GradientCover";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, type BlogBlock } from "@/data/blog";
import NotFound from "./NotFound";

export default function BlogArticle() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  return (
    <PageTransition>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />
      <Layout>
        <article className="pb-24 pt-28">
          <div className="container-px max-w-3xl">
            <Link
              to="/"
              state={{ scrollTo: "#blog" }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to writing
            </Link>

            <Reveal className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="gradient">{post.category}</Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
            </Reveal>

            <Reveal className="mt-8" delay={0.05}>
              <div className="gradient-border aspect-[16/7] overflow-hidden rounded-3xl">
                <GradientCover gradient={post.gradient} label={post.category} />
              </div>
            </Reveal>

            <div className="mt-12 space-y-6">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <div className="mt-14 rounded-3xl gradient-border bg-card/60 p-8 text-center">
              <p className="font-display text-xl font-semibold">
                Enjoyed this read?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Let's talk about your project or role.
              </p>
              <Link
                to="/"
                state={{ scrollTo: "#contact" }}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </article>
      </Layout>
    </PageTransition>
  );
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="pt-2 font-display text-2xl font-semibold">{block.text}</h2>
      );
    case "ul":
      return (
        <ul className="space-y-2 pl-1">
          {block.items?.map((item) => (
            <li key={item} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-sm">
          <code>{block.text}</code>
        </pre>
      );
    default:
      return (
        <p className="text-base leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
  }
}
