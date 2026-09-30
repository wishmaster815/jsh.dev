import { readFileSync } from "node:fs";

/**
 * Catches link placeholders before they ship.
 *
 * A "TODO" or "YOUR_LINK" href renders as a working-looking anchor that goes
 * nowhere, which is worse than no link at all. The type system cannot catch
 * this because the value is still a string.
 */
const src = readFileSync("content/site.ts", "utf8");

const PLACEHOLDER = /(TODO|YOUR_|XXX|example\.com|placeholder|changeme)/i;

let bad = 0;

/** Every href= and every source:/live: value. */
const values = [
  ...[...src.matchAll(/href:\s*"([^"]*)"/g)].map((m) => m[1]),
  ...[...src.matchAll(/\bsource:\s*"([^"]*)"/g)].map((m) => m[1]),
  ...[...src.matchAll(/\blive:\s*"([^"]*)"/g)].map((m) => m[1]),
];

for (const value of values) {
  if (!value) continue;
  if (PLACEHOLDER.test(value)) {
    console.log(`  PLACEHOLDER  ${value}`);
    bad++;
  } else if (!/^https?:\/\//.test(value)) {
    console.log(`  NOT ABSOLUTE ${value}`);
    bad++;
  }
}

const sources = (src.match(/\bsource:\s*"([^"]*)"/g) ?? []).length;
const lives = (src.match(/\blive:\s*"([^"]*)"/g) ?? []).length;

console.log(`\n  ${sources} source link(s), ${lives} live link(s)`);

if (bad === 0) {
  console.log("  No placeholder or relative links.");
} else {
  console.log(`\n  ${bad} link(s) will not work. Fix before launch.`);
  process.exitCode = 1;
}
