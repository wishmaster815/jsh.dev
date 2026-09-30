"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals content once, when it first enters the viewport.
 *
 * Deliberately a single subtle lift rather than the usual fade-and-slide-up on
 * every element — that pattern is the most recognisable tell of a generated
 * page. Children stagger by index in CSS so a group arrives as one gesture.
 *
 * Reduced motion is handled entirely in the stylesheet: the media query pins
 * opacity and transform to their final values, so no JavaScript branch is
 * needed here and the observer can be left to do one job.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setShown(true);
          observer.disconnect();
        }
      },
      // Fire slightly before the element is fully in view, so the motion is
      // already finishing by the time it is properly on screen.
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-shown" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
