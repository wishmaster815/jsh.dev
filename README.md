# Portfolio V2

Personal portfolio site for Jayesh Shrivastava. Next.js 16, TypeScript, Tailwind v4.

**Read `AGENTS.md` and `PLAN.md` before changing anything.** They carry the
project's rules, the approved product direction, and the list of rejected
approaches.

## Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # Turbopack production build
npm run start   # serve the production build
npm run lint    # eslint, flat config
npx tsc --noEmit
```

`next build` does not lint. Lint is a separate step.

## Quality gate

Run in order before calling any step done:

1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`
4. 375px pass
5. Keyboard-only pass
6. Both themes, including contrast
7. No console errors

## Layout

```text
app/
├── layout.tsx        fonts, metadata, pre-paint theme script
├── globals.css       design tokens, both palettes, type scale
├── page.tsx          home: six sections
└── work/[slug]/      case study
components/
├── theme-provider.tsx  three-state theme store
├── theme-toggle.tsx
├── theme-script.tsx    inline pre-paint script
└── site-shell.tsx      header and footer
content/
├── types.ts          content schema — the contract the site renders from
└── site.ts           content, currently placeholder
```

## Content is the blocker

`content/site.ts` is placeholder. The real case study has not been written yet —
see `PLAN.md` §11 step 1. **Do not invent project facts.** Metrics, latencies and
outcomes must come from Jayesh. A fabricated number is worse than a missing one,
because a technical reader who finds one stops trusting the rest of the page.
