import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";
import { SITE } from "@/constants/site";

const HIGHLIGHTS = [
  "Full Stack Development",
  "MERN Stack",
  "Django REST Framework",
  "React & Next.js",
  "SaaS Products",
  "Stripe Integration",
  "RBAC Systems",
  "REST APIs",
  "AI Integrations",
  "Agile Development",
  "Client Communication",
  "Clean Architecture",
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering products that"
          highlight="think and scale."
          description="I turn ambitious ideas into reliable software — and I sweat the details from database to pixel."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Story */}
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I'm <span className="text-foreground font-medium">{SITE.name}</span>,
              a {SITE.role.toLowerCase()} based in {SITE.location} with{" "}
              <span className="text-foreground font-medium">
                {SITE.experience.toLowerCase()}
              </span>{" "}
              of professional experience shipping real products to real users.
            </p>
            <p>
              At NeuroOceans.ai I build AI-powered SaaS end to end — designing
              Django REST APIs, crafting React and Next.js interfaces,
              integrating Stripe billing, and architecting Role-Based Access
              Control that keeps multi-tenant apps secure.
            </p>
            <p>
              I care about <span className="text-foreground font-medium">clean
              architecture</span>, fast feedback loops, and clear communication.
              Whether it's an AI memo generator or a hiring marketplace, I aim
              for code that's a pleasure to maintain and an experience that feels
              effortless.
            </p>
          </Reveal>

          {/* Highlights grid */}
          <motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {HIGHLIGHTS.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="gradient-border flex items-center gap-3 rounded-xl bg-card/60 px-4 py-3.5 text-sm font-medium"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
