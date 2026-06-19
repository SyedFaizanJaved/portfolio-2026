/**
 * Shared dynamic-import functions for the lazy route pages.
 *
 * `import()` caches its module promise, so calling these ahead of a click
 * (on hover/focus/touch, or during idle time) warms the chunk — by the time
 * the user navigates, the page code is already downloaded and renders instantly.
 */
export const importProjectCaseStudy = () => import("@/pages/ProjectCaseStudy");
export const importBlogArticle = () => import("@/pages/BlogArticle");

/**
 * Event handlers to spread onto a <Link> so its route chunk is prefetched the
 * moment the user shows intent (pointer hover, keyboard focus, or touch start).
 */
export function prefetchOnIntent(load: () => Promise<unknown>) {
  let warmed = false;
  const run = () => {
    if (warmed) return;
    warmed = true;
    void load();
  };
  return { onMouseEnter: run, onFocus: run, onTouchStart: run };
}

type IdleWindow = typeof window & {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

/** Warm all route chunks once the browser is idle. Returns a cleanup fn. */
export function prefetchRoutesWhenIdle(): () => void {
  const warm = () => {
    void importProjectCaseStudy();
    void importBlogArticle();
  };
  const w = window as IdleWindow;
  if (typeof w.requestIdleCallback === "function") {
    const id = w.requestIdleCallback(warm, { timeout: 2500 });
    return () => w.cancelIdleCallback?.(id);
  }
  const id = window.setTimeout(warm, 1500);
  return () => window.clearTimeout(id);
}
