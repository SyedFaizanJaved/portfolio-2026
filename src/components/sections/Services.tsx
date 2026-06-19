import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SERVICES } from "@/data/services";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="What I Do"
          title="Services built to"
          highlight="move you forward."
          description="From a first MVP to scaling an existing product, here's how I can help."
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group gradient-border relative flex flex-col gap-4 rounded-2xl bg-card/60 p-6 transition-shadow hover:shadow-glow-blue"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary ring-1 ring-secondary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
