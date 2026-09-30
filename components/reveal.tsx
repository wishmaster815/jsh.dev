"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * One scroll moment: the datum rule for a section draws in the first time that
 * section is seen. Fires once per element, then stops observing.
 *
 * Scattered fade-and-slide-up on every element is the generic default and is
 * deliberately not used — see globals.css.
 */
export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion: show the rule without animating it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.shown = "true";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
