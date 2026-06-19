import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  /** Normalised to [-0.5, 0.5] relative to viewport center. */
  nx: number;
  ny: number;
}

/** Track the global mouse position (throttled via rAF). */
export function useMousePosition(enabled = true): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const handle = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        setPos({
          x: e.clientX,
          y: e.clientY,
          nx: e.clientX / innerWidth - 0.5,
          ny: e.clientY / innerHeight - 0.5,
        });
      });
    };
    window.addEventListener("mousemove", handle);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handle);
    };
  }, [enabled]);

  return pos;
}
