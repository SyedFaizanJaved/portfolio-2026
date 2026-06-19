import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useIsDesktop } from "@/hooks/useMediaQuery";

/** Soft gradient blob that trails the cursor (desktop, pointer:fine only). */
export function CursorGlow() {
  const isDesktop = useIsDesktop();
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full opacity-40 blur-[100px]"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(139,92,246,0.35),_rgba(59,130,246,0.12)_45%,_transparent_70%)]" />
    </motion.div>
  );
}
