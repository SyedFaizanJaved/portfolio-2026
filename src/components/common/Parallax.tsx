import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total vertical travel in px across the element's scroll range. */
  speed?: number;
}

/**
 * Scrubbed GSAP/ScrollTrigger parallax for decorative elements. Animates only
 * the `y` transform of its own wrapper (so give the wrapper non-transform
 * positioning). No-ops under prefers-reduced-motion.
 */
export function Parallax({ children, className, speed = 80 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -speed / 2 },
        {
          y: speed / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [reduced, speed]);

  return (
    <div ref={ref} className={cn(className)} aria-hidden>
      {children}
    </div>
  );
}
