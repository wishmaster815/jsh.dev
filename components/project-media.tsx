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
          /*
            Accurate for this layout, not a guess. Below lg the grid is one
            column, so the card is the full content width. From lg it is two
            columns inside a max-w-6xl container, which caps the card at about
            566px however wide the viewport gets.

            The previous 44vw overstated it badly: at a 1920px viewport that
            told the browser to fetch a 1080w candidate for a card that only
            ever renders 566px wide.
          */
          sizes="(min-width: 1024px) 580px, calc(100vw - 3.5rem)"
          className="object-cover object-top"
          // The card sits below the fold, so defer the fetch until it is close.
          loading="lazy"
        />
      ) : null}

      {/*
        Scrim. Kept light on purpose: the title has its own near-opaque panel
        block, so this only has to seat that block against the bottom edge. A
        heavy scrim on top of it double-darkened every screenshot, which made a
        dark-themed app like AgentDock indistinguishable from the card behind it.

        This is also what carries a dark screenshot, which is why the media area
        gets a hairline edge below.
      */}
      <div className="absolute inset-0 bg-linear-to-t from-panel/85 from-15% via-panel/20 via-55% to-transparent" />

      {/* A visible edge, so a dark screenshot still reads as an image. */}
      <div className="pointer-events-none absolute inset-0 rounded-t-[13px] ring-1 ring-inset ring-line/70" />
    </div>
  );
}
