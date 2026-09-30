import {
  siAnthropic,
  siDocker,
  siExpress,
  siFastapi,
  siFirebase,
  siFramer,
  siGithub,
  siGit,
  siGraphql,
  siHuggingface,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siRender,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  type SimpleIcon,
} from "simple-icons";

/**
 * Only the icons actually used are imported, so the bundle carries twenty-odd
 * marks rather than the whole set.
 */
const ICONS: Record<string, SimpleIcon> = {
  siAnthropic,
  siDocker,
  siExpress,
  siFastapi,
  siFirebase,
  siFramer,
  siGithub,
  siGit,
  siGraphql,
  siHuggingface,
  siLangchain,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siOllama,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siRender,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
};

function monogram(name: string) {
  return name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
}

/**
 * Brand mark, or a monogram when the set has none.
 *
 * The marks are drawn as shapes, not in their brand colours. A large share of
 * brand hexes are black — Next.js, Vercel, Express, Git, Framer, LangChain —
 * and those vanish against this site's near-black cards, while the bright ones
 * (Python yellow, Mongo green) fight the teal accent. Filling with
 * currentColor instead makes every mark follow the theme: light on dark, dark
 * on light, with no per-brand exception table to maintain.
 *
 * Monochrome also reads as one system. Twenty-two competing brand colours in a
 * card grid look like a badge wall rather than part of the page.
 */
export function TechIcon({
  name,
  icon,
  className = "size-5",
}: {
  name: string;
  icon?: string;
  className?: string;
}) {
  const found = icon ? ICONS[icon] : undefined;

  if (!found) {
    return (
      <span
        aria-hidden="true"
        className={`${className} grid shrink-0 place-items-center rounded-md border border-line bg-panel-2 font-mono text-[0.6rem] font-semibold text-head`}
      >
        {monogram(name)}
      </span>
    );
  }

  return (
    <svg
      role="img"
      aria-label={`${found.title} logo`}
      viewBox="0 0 24 24"
      className={`${className} shrink-0 text-muted`}
    >
      <title>{found.title}</title>
      <path fill="currentColor" d={found.path} />
    </svg>
  );
}
