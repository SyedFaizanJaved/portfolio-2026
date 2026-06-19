import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section header: eyebrow chip + display title + optional copy. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start",
        className
      )}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-secondary"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="text-fluid-h2 font-bold leading-[1.05]"
      >
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
