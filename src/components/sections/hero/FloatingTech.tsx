import { motion } from "framer-motion";
import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  Database,
  Cpu,
} from "lucide-react";

const ICONS = [
  { Icon: Atom, x: "8%", y: "22%", d: 0 },
  { Icon: Braces, x: "84%", y: "16%", d: 0.6 },
  { Icon: Database, x: "12%", y: "72%", d: 1.2 },
  { Icon: Boxes, x: "88%", y: "66%", d: 0.9 },
  { Icon: Cloud, x: "70%", y: "82%", d: 1.5 },
  { Icon: Cpu, x: "26%", y: "10%", d: 0.3 },
];

/** Decorative floating tech glyphs scattered around the hero. */
export function FloatingTech() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
      {ICONS.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + d * 0.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 5 + d,
              repeat: Infinity,
              ease: "easeInOut",
              delay: d,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl glass text-secondary"
          >
            <Icon className="h-5 w-5" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
