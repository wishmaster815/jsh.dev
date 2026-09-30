"use client";

import Image from "next/image";

/**
 * Project media area.
 *
 * The gradient is always rendered as the base layer and the screenshot sits on
 * top of it, rather than the two being mutually exclusive states. That means a
 * configured-but-missing file leaves the gradient showing instead of an empty
 * box, with no load-error state and no failed-image flash.
 *
 * The client boundary exists only because next/image needs onLoad; the markup
 * itself would work as a server component.
 */
export function ProjectMedia({
  name,
  src,
}: {
  name: string;
  src?: string;
}) {
  return (
    <div className="relative h-44 w-full sm:h-52">
      {/* Base layer: always present, so the card is never empty. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(150deg, color-mix(in srgb, var(--head) 16%, transparent) 0%, transparent 55%), radial-gradient(120% 90% at 85% 15%, color-mix(in srgb, var(--head-2) 14%, transparent) 0%, transparent 70%)",
        }}
      />

      {src ? (
        <Image
          src={src}
          alt={`${name} interface`}
          fill
          sizes="(min-width: 1024px) 44vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top"
          // The card sits below the fold, so defer the fetch until it is close.
          loading="lazy"
        />
      ) : null}

      {/* Scrim, so the title stays readable over any screenshot. */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-[var(--panel)]/20 to-transparent" />
    </div>
  );
}