import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Parallax } from "@/components/common/Parallax";
import { ProjectCard } from "./projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/utils/motion";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <Parallax
        speed={140}
        className="absolute right-0 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-brand-blue/10 blur-[130px]"
      >
        <span className="block h-full w-full" />
      </Parallax>
      <div className="container-px">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects I'm"
          highlight="proud of."
          description="A selection of production SaaS and AI products I've designed and built. Each links to a full case study."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
