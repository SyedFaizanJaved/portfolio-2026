import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { STATS } from "@/data/stats";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-px">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="gradient-border grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-card/40 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center gap-2 px-6 py-10 text-center"
            >
              <span className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
