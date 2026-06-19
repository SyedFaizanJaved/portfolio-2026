import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { GradientCover } from "@/components/common/GradientCover";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS } from "@/data/blog";
import { importBlogArticle, prefetchOnIntent } from "@/routes/lazyPages";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

export function BlogPreview() {
  return (
    <section id="blog" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on"
          highlight="building software."
          description="Occasional thoughts on architecture, React, Django, and shipping AI products."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {BLOG_POSTS.map((post) => (
            <motion.article key={post.slug} variants={fadeUp}>
              <Link
                to={`/blog/${post.slug}`}
                {...prefetchOnIntent(importBlogArticle)}
                className="group gradient-border flex h-full flex-col overflow-hidden rounded-2xl bg-card/70 shadow-card transition-shadow hover:shadow-glow-blue"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <GradientCover gradient={post.gradient} label={post.category} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-secondary">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
