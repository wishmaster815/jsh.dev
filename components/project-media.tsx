"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Project media area.
 *
 * A screenshot when one is configured, otherwise a generated gradient. If a
 * path is set but the file is missing or fails to decode, it falls back to the
 * gradient rather than leaving a broken image on the card — a project card is
 * the first thing a visitor looks at, so it must never render as a failure.
 *
 * The client boundary exists only for the load-error state; the gradient path
 * itself needs no JavaScript.
 */
export function ProjectMedia({
  name,
  src,
}: {
  name: string;
  src?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className="relative h-44 w-full sm:h-52">
      {showImage ? (
        <Image
          src={src as string}
          alt={`${name} interface`}
          fill
          sizes="(min-width: 1024px) 44vw, (min-width: 640px) 50vw, 100vw"
          onError={() => setFailed(true)}
          className="object-cover object-top"
          // The card is below the fold, so defer the fetch until it is close.
          loading="lazy"
        />
      ) : (
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(150deg, color-mix(in srgb, var(--head) 16%, transparent) 0%, transparent 55%), radial-gradient(120% 90% at 85% 15%, color-mix(in srgb, var(--head-2) 14%, transparent) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Scrim, so the title stays readable over any screenshot. */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-[var(--panel)]/20 to-transparent" />
    </div>
  );
}
