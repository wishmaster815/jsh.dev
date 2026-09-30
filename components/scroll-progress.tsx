"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["about", "stack", "projects", "contact"] as const;

/**
 * Two scroll-driven pieces of feedback:
 *
 * 1. A reading-progress hairline across the top. On a single-page site this
 *    answers "how much is left", which is a real question rather than a
 *    decorative flourish.
 * 2. The nav marks whichever section is currently in view, so a reader knows
 *    where they are.
 *
 * Both are driven by one scroll listener and write CSS custom properties /
 * booleans rather than animating anything on a timer.
 */
export function ScrollProgress({ targets }: { targets: readonly string[] }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(doc.scrollTop / max, 1) : 0);

      // The active section is the last one whose top has passed a third of
      // the way down the viewport. Cheaper and steadier than an observer when
      // sections are uneven in height.
      const line = window.innerHeight * 0.33;
      let current = "";
      for (const id of targets) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      // Coalesce to one measurement per frame; scroll fires far more often
      // than the DOM actually needs recalculating.
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targets]);

  return (
    <>
      <div
        className="progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <span className="sr-only" role="status" aria-live="polite">
        {active
          ? `Viewing the ${active} section`
          : "At the top of the page"}
      </span>
    </>
  );
}

export { SECTIONS };
