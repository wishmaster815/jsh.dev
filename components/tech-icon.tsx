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
 * Brands own their marks, so a hand-drawn approximation of the Groq or OpenAI
 * logo would be both wrong and a trademark problem. Two letters read as
 * deliberate instead.
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
      className={`${className} shrink-0`}
    >
      <title>{found.title}</title>
      <path fill={found.hex} d={found.path} />
    </svg>
  );
}
