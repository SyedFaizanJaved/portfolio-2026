import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SKILL_GROUPS } from "@/data/skills";
import { staggerContainer, fadeUp, viewportOnce } from "@/utils/motion";

const ICON_MAP: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-grid-faint bg-[size:60px_60px] opacity-[0.07]" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to"
          highlight="ship great software."
          description="A full-stack toolkit spanning frontend craft, backend systems, data, DevOps, and AI."
        />

        <div className="mt-14 flex flex-col items-center">
          <Tabs defaultValue={SKILL_GROUPS[0].category} className="w-full">
            <div className="flex justify-center">
              <TabsList>
                {SKILL_GROUPS.map((group) => {
                  const Icon = ICON_MAP[group.icon];
                  return (
                    <TabsTrigger key={group.category} value={group.category}>
                      <Icon className="mr-1.5 h-4 w-4" />
                      {group.category}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {SKILL_GROUPS.map((group) => (
              <TabsContent key={group.category} value={group.category}>
                <motion.div
                  variants={staggerContainer(0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
                >
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="gradient-border flex items-center justify-center gap-2 rounded-2xl bg-card/60 px-4 py-5 text-center text-sm font-medium transition-shadow hover:shadow-glow-blue"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
