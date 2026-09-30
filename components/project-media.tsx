import Image from "next/image";

/**
 * Project media area.
 *
 * Just the screenshot, with a scrim strong enough that the title stays legible
 * over a light UI. There is no gradient fallback layer: a project either has a
 * screenshot or the card shows nothing, which is honest about what exists.
 *
 * A server component. next/image does not require a client boundary here.
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

      {/*
        Scrim. Screenshots are mostly light application chrome, so a weak fade
        leaves the title sitting on white pixels. This is nearly opaque at the
        bottom where the text is and clear by the middle, which keeps the
        screenshot visible while making the text readable.
      */}
      <div className="absolute inset-0 bg-linear-to-t from-panel from-35% via-panel/80 via-65% to-transparent" />

      {/* A hairline under the text block, to lift it off a busy UI. */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
    </div>
  );
}
