<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio V2

Personal portfolio site for Jayesh Shrivastava. Next.js 16 + TypeScript.

## Next.js 16 specifics that bite

Verified against `node_modules/next/dist/docs/` (16.3.7). These differ from
earlier versions and from most training data.

- **`params` and `searchParams` are Promises.** Always `await` them. Sync access
  is removed. Prefer the global `PageProps<'/work/[slug]'>` helper over hand-written
  types.
- **`next lint` is removed.** Lint is `eslint` directly, and `next build` no
  longer lints — so lint is a separate gate step, not implied by the build.
- **`scroll-behavior: smooth` is no longer auto-preserved** across route
  transitions. Add `data-scroll-behavior="smooth"` to `<html>` to keep it.
- **`middleware` is now `proxy`** (`proxy.ts`, export `proxy`). Not used here.
- **Turbopack is the default** for `dev` and `build`. Do not pass `--turbopack`.
- **`next build` no longer prints bundle size.** Use Lighthouse for real numbers.
- `dev` and `build` use separate output dirs (`.next/dev`), so they can run
  concurrently.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # Turbopack production build
npm run lint    # eslint, flat config
npx tsc --noEmit
```

## State

**Implementation started.** Next.js 16.3.7 + TypeScript strict + Tailwind v4, git
initialised.

Built so far: design tokens with both themes, three-state theme control, content
schema, home page (six sections), `/work/[slug]` case study route.

Not built: `/journal` route, `DESIGN.md`, `ARCHITECTURE.md`, `ROADMAP.md`.

**Content is the open blocker.** `PLAN.md` §11 step 1 requires one real case study
written by the user before the UI is finished. `content/site.ts` is deliberately
full of `TODO` — do not invent project facts. Metrics, latencies and outcomes
must come from the user, because a fabricated number is worse than a missing one.

## Token model

`--accent` is for text and links on `--bg` (tuned ≥4.5:1 there).
`--accent-solid` / `--on-accent` are for fills, and are a **separate pair** — a
light-on-dark accent cannot also carry legible text. Using `--accent` as a
background fails contrast in dark mode; that bug shipped once already.

`--line` is a decorative hairline at ~1.2:1. That is intentional and is not a
WCAG 1.4.11 failure, because it is only ever a section divider. Do not reuse it
for a meaningful control boundary without re-checking contrast.

## Hard boundaries

- **Never read, copy, or migrate anything from Portfolio V1.** Independent
  project — do not open it even for reference.
- **No AI features.** Chat, retrieval, assistant, grounding: all removed. Read
  `PLAN.md` §12 (Rejected directions) before proposing anything similar.
- Positioning is **backend and AI systems engineer**, AI as a domain of work
  rather than the site's theme.
- Theming constraints in `PLAN.md` §9 are **non-negotiable** and are the part
  most easily broken by a future edit:
  - tokens via CSS custom properties from the first line, no raw hex in components
  - `color-scheme` set alongside the tokens
  - inline pre-paint script in `<head>` prevents the wrong-theme flash
  - three states (system / light / dark), not two
  - no `filter: invert()` — both palettes are designed deliberately
  - verify contrast in **both** themes
- **375px, both themes, and keyboard-only are gates**, not later polish.
- **`suppressHydrationWarning` on `<html>` is required, not cosmetic.** The
  pre-paint theme script sets `data-theme` before first paint, which is the only
  way to avoid a flash of the wrong theme. The server cannot know the stored
  preference, so it renders no attribute and React's client render expects none
  either. Removing the prop reintroduces a hydration mismatch for every visitor
  with a stored theme.
- **List keys must be index-based or a genuinely unique id.** Placeholder data
  repeating a string (two `"TODO"` entries) collides React keys. `npm run
  check:keys` runs inside `npm run gate` to catch this.

## Quality gate — in order, every step

1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`
4. 375px pass
5. Keyboard-only pass
6. Both themes, including contrast
7. No console errors

## Design direction

Aesthetic decisions follow the `frontend-design` skill: **technical-specification**
aesthetic — Newsreader (editorial serif) for display and body, IBM Plex Mono for
data and metadata, hairline rules as section dividers, left-aligned and
asymmetric, never centered. Monochrome-first with a single iris accent.

**Spend the boldness in one place** — the hero spec-sheet header. Everything
around it stays quiet. Avoid the flagged template tells: tracked-out all-caps
eyebrows, middle-dot meta strings, `→` on link text, numbered section markers
(the home sections are not a sequence), identical rounded cards with uniform
shadows, and accenting a single word in a headline.

## Working style

- Concise unless detailed output requested. Label claims **approved** /
  **recommended** / **assumed** / **open**.
- `PLAN.md` is the approved source of truth. Improving it is fine;
  contradicting it needs explicit approval.
- One step at a time. Never attempt the whole portfolio in one pass.
- Small conventional commits (`chore:` / `feat:` / `fix:` / `perf:`).
