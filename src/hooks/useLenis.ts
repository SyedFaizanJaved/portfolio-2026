import type Lenis from "lenis";

/** Module-level reference to the active Lenis instance. */
let lenisRef: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisRef = instance;
}

export function getLenis(): Lenis | null {
  return lenisRef;
}

/** Smoothly scroll to an element id (e.g. "#projects") or to top. */
export function scrollToId(target: string, offset = -80) {
  const lenis = getLenis();
  if (target === "#top" || target === "#") {
    lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(target) as HTMLElement | null;
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
