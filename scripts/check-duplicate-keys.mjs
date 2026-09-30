import { readFileSync } from "node:fs";

const src = readFileSync("content/site.ts", "utf8");

/**
 * Any string array in the content file is a candidate for colliding React keys.
 * Placeholder data is the usual culprit: two entries both reading "TODO".
 */
const arrays = [
  ...[...src.matchAll(/tools:\s*\[([^\]]+)\]/g)].map((m) =>
    m[1]
      .split(",")
      .map((s) => s.trim().replace(/^["']|["']$/g, ""))
      .filter(Boolean),
  ),
];

let bad = 0;
arrays.forEach((a, i) => {
  const seen = new Set();
  const dupes = new Set();
  for (const v of a) {
    if (seen.has(v)) dupes.add(v);
    seen.add(v);
  }
  const ok = dupes.size === 0;
  if (!ok) bad++;
  console.log(`${ok ? "OK  " : "DUP "} tools[${i}]: [${a.join(", ")}]`);
});

console.log(
  bad === 0
    ? "\nNo duplicate strings in any tools array."
    : `\n${bad} array(s) still contain duplicates.`,
);
