"use client";

import type { ReactNode } from "react";

/**
 * Card with a pointer-tracking spotlight.
 *
 * The handler writes `--mx` / `--my` as CSS custom properties instead of using
 * state, so moving the pointer re-renders nothing. The glow in globals.css reads
 * those properties.
 *
 * `focus-within` in the stylesheet lights the card on keyboard focus too, so the
 * effect is not pointer-only.
 */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card ${className}`}
      onPointerMove={(event) => {
        const el = event.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
