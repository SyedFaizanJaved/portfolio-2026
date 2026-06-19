import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-violet/10 blur-[130px]" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from"
          highlight="people I've worked with."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="gradient-border flex flex-col rounded-3xl bg-card/70 p-7 shadow-card"
            >
              <Quote className="h-8 w-8 text-secondary/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-medium">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {t.title}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
