import { lazy, Suspense, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, Eye, Mail, MousePointerClick } from "lucide-react";
import { SITE, TYPING_ROLES } from "@/constants/site";
import { TypingText } from "@/components/common/TypingText";
import { MagneticButton } from "@/components/common/MagneticButton";
import { Parallax } from "@/components/common/Parallax";
import { FloatingTech } from "./hero/FloatingTech";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/hooks/useLenis";
import { useMousePosition } from "@/hooks/useMousePosition";
import { usePrefersReducedMotion, useIsDesktop } from "@/hooks/useMediaQuery";
import { useDeferredMount } from "@/hooks/useDeferredMount";
import { staggerContainer, fadeUp } from "@/utils/motion";

const Scene3D = lazy(() => import("./hero/Scene3D"));

/** Static fallback shown before/instead of the 3D sphere. */
function OrbFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="h-64 w-64 rounded-full bg-primary opacity-70 blur-2xl animate-float sm:h-80 sm:w-80" />
      <div className="absolute h-56 w-56 rounded-full border border-foreground/20 sm:h-72 sm:w-72" />
    </div>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const { nx, ny } = useMousePosition(isDesktop && !reduced);

  const visualRef = useRef<HTMLDivElement>(null);
  const visualInView = useInView(visualRef, { margin: "200px" });
  const show3D = useDeferredMount(visualInView && !reduced);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 -z-10 bg-grid-faint bg-[size:60px_60px] opacity-[0.12]" />
      <Parallax
        speed={120}
        className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-[36rem] w-[36rem] rounded-full bg-brand-violet/20 blur-[140px]"
      >
        <span className="block h-full w-full" />
      </Parallax>

      <div className="container-px grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects · {SITE.location}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-fluid-hero font-bold leading-[1.02]"
          >
            Building{" "}
            <span className="text-gradient">Intelligent</span>
            <br />
            Digital Products.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-2 font-display text-lg text-foreground/90 sm:text-xl"
          >
            <span className="text-muted-foreground">I'm a</span>
            <TypingText
              words={TYPING_ROLES}
              className="font-semibold text-gradient"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton>
              <Button size="lg" onClick={() => scrollToId("#projects")}>
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </MagneticButton>
            <div className="flex items-center gap-1.5">
              <Button asChild size="lg" variant="outline">
                <a href={SITE.resumeUrl} download={SITE.resumeDownloadName}>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" className="h-12 w-12">
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume in a new tab"
                  title="View resume"
                >
                  <Eye className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollToId("#contact")}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          ref={visualRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={
            isDesktop && !reduced
              ? { x: nx * -30, y: ny * -30 }
              : undefined
          }
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          <FloatingTech />
          <div className="relative h-full w-full">
            {show3D ? (
              <Suspense fallback={<OrbFallback />}>
                <Scene3D />
              </Suspense>
            ) : (
              <OrbFallback />
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToId("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
        aria-label="Scroll to about section"
      >
        <MousePointerClick className="h-4 w-4" />
        <span className="uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-10 w-[1px] bg-gradient-to-b from-secondary to-transparent" />
      </motion.button>
    </section>
  );
}
