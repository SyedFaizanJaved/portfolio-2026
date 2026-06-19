import { useEffect, useState } from "react";

/**
 * Returns `true` once `active` is set AND the browser is idle, so heavy work
 * (e.g. mounting a three.js canvas) never competes with first paint.
 */
export function useDeferredMount(active: boolean, timeout = 1500): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!active || ready) return;

    type IdleWindow = typeof window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number }
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const w = window as IdleWindow;

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setReady(true), { timeout });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setReady(true), 200);
    return () => window.clearTimeout(id);
  }, [active, ready, timeout]);

  return ready;
}
