import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EXPERIENCE } from "@/data/experience";
import { fadeUp, viewportOnce } from "@/utils/motion";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Career"
          title="Where I've"
          highlight="been building."
          description="Two years of shipping production software across SaaS, AI, and frontend roles."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical line */}
          <span
            className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-secondary via-primary/40 to-transparent sm:left-1/2"
            aria-hidden
          />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative pl-12 sm:pl-0"
              >
                {/* Node */}
                <span className="absolute left-4 top-1.5 z-10 flex h-3 w-3 -translate-x-1/2 sm:left-1/2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-60 animate-ping" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </span>

                <div
                  className={
                    i % 2 === 0
                      ? "sm:mr-auto sm:w-[46%] sm:pr-8 sm:text-right"
                      : "sm:ml-auto sm:w-[46%] sm:pl-8"
                  }
                >
                  <div className="gradient-border rounded-2xl bg-card/70 p-6 shadow-card">
                    <div
                      className={`flex items-center gap-2 ${
                        i % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      <Briefcase className="h-4 w-4 text-secondary" />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
                          Now
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold">
                      {job.role}
                    </h3>
                    <p className="text-gradient font-medium">{job.company}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {job.summary}
                    </p>
                    <ul
                      className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                        i % 2 === 0 ? "sm:text-left" : ""
                      }`}
                    >
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
