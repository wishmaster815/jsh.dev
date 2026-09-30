# Portfolio V2 — Product Plan

## Status

**Product direction approved. Implementation started.**

Done: product direction, design direction, design system with both themes,
content schema, home page, case study route.

Not done: real content, `/journal` route, `DESIGN.md`, `ARCHITECTURE.md`,
`ROADMAP.md`.

Awaiting: the real case study (`PLAN.md` §11 step 1) — this is the blocker.

This supersedes the previous proposal version of this document. The earlier
"AI-native interactive portfolio" direction was rejected; see
[Rejected directions](#rejected-directions) before proposing it again.

---

## 01 — What this project is

A portfolio site for Jayesh Shrivastava, doing two jobs at once:

1. **Recruiting surface** — a recruiter or hiring manager should understand what
   Jayesh can build and how he thinks, in under five minutes.
2. **Growth vehicle** — a real project to practise and demonstrate modern web
   development, not a static page.

These two goals pull against each other. A recruiter wants a finished, confident
surface. A learning surface wants rough edges, which a recruiter reads as
*unfinished*. The resolution is structural, and it is the central design
constraint of this project:

> **The recruiter path and the growth path live in different rooms. Nothing
> unfinished ever appears on the recruiter path.**

---

## 02 — Positioning

**Jayesh is a full stack engineer.**

Revised from "backend and AI systems engineer" at the user's request. The
through-line is unchanged — systems thinking, depth of reasoning over breadth of
tooling — but the claim is now breadth across the stack rather than depth in one
layer.

**Caveat, recorded deliberately:** "full stack" is a weaker positioning claim
than "backend and AI systems engineer" was. It describes range rather than
specialism, and it is close to table stakes. The site offsets this by showing the
stack as *layers with real responsibilities* rather than a list of technologies —
naming tools argues nothing, whereas owning a layer and knowing what breaks in it
argues capability. Revisit the positioning if the work turns out to be genuinely
backend-weighted.

### Why not "AI-native"

An earlier draft positioned the site as AI-native. Rejected: with no AI feature
in the product, that is a claim the site cannot back, and it invites exactly the
gimmick-driven design the brief warns against.

### Positioning line

> Full stack engineer. I build across the stack — interfaces, APIs, and the data
> and infrastructure underneath.

This is a direction, not final copy. Copy must be specific and defensible — no
skills lists, no "passionate developer."

### Theme

**Systems thinking.** Depth of reasoning over breadth of tooling.

---

## 03 — Audiences

| Audience | Time | Needs first | Path |
| --- | --- | --- | --- |
| Recruiter | 30–60s | Relevant? Available? How to reach? | Home only, no clicks |
| Hiring manager | 3–5 min | Can they do the work? What's the depth? | One case study |
| Engineer | 5–15 min | How do they think? What's live? | Home + `/journal` |
| Founder | 1–2 min | Can they build it? | Case study + contact |

**Primary constraint: the 30-second home page must be complete on its own.** A
recruiter must never need to open a case study to understand the value. Depth is
available for those who want it and invisible to those who don't.

The `/journal` route is where the two purposes separate — it is explicitly
labelled as work-in-progress, which is what lets it read as *active* rather than
*incomplete*.

---

## 04 — Information architecture

```text
/
├── /work/[slug]      Case studies — the proof
├── /journal          Decision records + learning notes — the growth surface
└── /lab              Experiments — gated, build only with real content
```

Four routes, deliberately minimal. Fewer routes is less to build, and for a
project that is also a learning vehicle, fewer things to get wrong is worth more
than a richer site.

**No `/about` route.** Identity is answered in the hero; a short block stays on
home plus a resume PDF link, which is what a recruiter actually wants.

**No `/contact` route.** Contact is the last home section, plus persistent nav
and footer, since recruiters leave wherever they are.

---

## 05 — Home page sections

1. **Hero** — datasheet header: name at display scale, a datum rule, then a spec
   table carrying role, status, and location. Two CTAs.
2. **The stack** — 4 layers (Interface, API, Data, Systems), each stating what it
   owns and one concrete thing built in it
3. **Selected Work** — 3 projects maximum. Each states: what it is, the key
   decision and its tradeoff, an outcome carrying a number
4. **How I Work** — 3 decision records. Reasoning surfaced in the fast path
5. **Currently** — what's live now, what's being learned now
6. **Experience** — condensed, with scale
7. **Contact**

### Section rationale

**The stack answers the full stack claim.** A list of technologies is a
self-description and argues nothing. Four layers, each owning a responsibility
and one real piece of work, is an argument. The section exists so the positioning
is evidenced rather than asserted — and the depth ordering (interface outward to
systems inward) mirrors how a request actually travels.

**Work before thinking.** Work tells a recruiter *what*; thinking tells a hiring
manager *how well*. Segregating thinking into its own section means a recruiter
never sees it.

The fix: **the key decision is inline in each work entry.** A recruiter sees
evidence of judgment in 30 seconds without clicking. A hiring manager clicks
through for depth. One structure, two depths.

**`How I Work` carries the positioning.** It is the highest-value content on the
site and the only thing a competitor cannot copy off it.

**`Currently` serves both purposes.** Recruiters read it as evidence of
activity; it doubles as a standing slot for new learning.

---

## 06 — Case study structure

Each case study at `/work/[slug]`:

```text
Problem
  → What I built
  → Architecture (only the real system, never a generic diagram)
  → Key decisions and tradeoffs accepted
  → What broke
  → Outcome (with numbers)
  → Demo / Source
```

### Content rules

- **Every outcome carries a number, a scale, or a named failure.** "Improved
  performance" is empty. "Cut p95 from 1.2s to 180ms" is evidence. A technical
  reader who spots one vague claim stops trusting the rest of the page.
- **No diagrams of concepts.** Only diagrams of systems actually built. A
  pipeline diagram proves a tutorial can be copied; a real architecture with its
  real tradeoffs proves engineering.
- **"What broke" is mandatory.** It is the cheapest credibility available and
  almost nobody publishes it.

---

## 07 — `/journal` — decision records and learning notes

The growth surface. Built **after** the home page and first case study, so the
format is informed by real content instead of invented upfront.

**Decision record** — context, options weighed, decision, tradeoff accepted,
what would be done differently.

**Learning note** — what is being learned, current state, what is stuck.

Framed as active practice, with honest current state. This route is the one
place rough edges are allowed, and its labelling is what makes that safe.

---

## 08 — `/lab` — gated

**Do not build `/lab` until it has 3+ genuine experiments with honest
write-ups.**

An experiments page holding toy projects is worse than no page: it signals *no
shipped work*. This is a gate, not a backlog item.

Each experiment: goal, current state, what was learned, what broke, next step.

---

## 09 — Design direction

Aesthetic decisions are made using the `frontend-design` skill. This section
fixes the constraints that skill does not decide, and records the direction
actually implemented.

### Concept: an engineering cross-section

The site is presented as a **measured surface**. Structure carries information:

- A faint **grid** sits behind the content and fades out before it reaches body
  copy, so the page reads as a surface the content is placed on.
- **Datum rules** separate sections. Each carries tick marks and an accent value
  bar, so a rule is a measurement rather than a newspaper column divider.
- **Crop marks** frame panels in the language of a technical drawing.
- The **stack** is shown as layers, which is what the cross-section metaphor is
  for.

The tension that keeps this from being a template: an **editorial serif on a
technical field**. The near-universal pairing in developer portfolios is technical
grid plus sans or mono; using a serif for display is the deliberate departure.

Type: **Newsreader** for display and body, **IBM Plex Mono** for data, labels and
metadata. Two families, not the Inter default.

Colour: monochrome-first, with a single iris accent used *structurally* — datum
values, crop marks, layer edges, links — rather than as a floating highlight.

### The first attempt failed this test

Recorded because it is the most useful lesson in the project. The initial build
used hairline rules above every section, zero border radius, and a dense
four-column metadata grid. That is precisely the **broadsheet default** the skill
warns about, and the monospace metadata was the **template-chrome** default. The
risk was identified during planning and then implemented anyway.

The distinguishing question, per the skill: is this a choice made for *this*
brief, or one that would appear on any page? Structure must encode something true
about the content.

### Micro-animations

Three coherent moments, not scattered effects:

1. **One orchestrated page-load sequence** in the hero — staggered rise and a
   datum drawing in. Runs once.
2. **One scroll moment** — each section's datum rule draws in the first time that
   section is seen, via `IntersectionObserver`, then stops observing.
3. **Action-responding motion** — link underlines drawing in, crop marks
   appearing on hover and focus, theme transitions.

Fade-and-slide-up on every section is deliberately absent: it is the generic
default and reads as generated. All of it collapses under
`prefers-reduced-motion`, and the field is removed under `prefers-reduced-data`.

### The target

**Outstanding, not fancy.** Quality comes from typography, spacing and hierarchy
being right, not from effects being added.

Hard prohibitions: 3D, particles, scroll-jacking, glassmorphism, gradient
overuse, decorative motion, all-caps eyebrows on headings, middle-dot meta
strings, numbered section markers, and `→` appended to link text.

### Theme toggle — requirements

- **Design both themes from the first line of CSS.** Retrofitting dark mode is
  one of the most expensive post-hoc refactors in frontend work, and the usual
  result is the "dark mode afterthought" — flat greys, washed accents, broken
  contrast.
- **Token-based from day one.** Every colour resolves through CSS custom
  properties. No raw hex values in components. This is the mechanism that makes
  dual-theme cheap rather than brutal.
- **Set `color-scheme` alongside the tokens.** Without it, form controls,
  scrollbars, and focus rings retain OS-default styling and look broken in
  whichever mode they don't match. It is also required for correct rendering of
  embedded SVG and iframes.
- **Prevent the flash of wrong theme.** An inline blocking script in `<head>`
  reads the stored preference before first paint. Most commonly missed step, and
  immediately visible to any dark-mode user.
- **Two states, light and dark:** system / light / dark. A two-state toggle forces
  users to override their OS.
- **Neither theme is an inversion of the other.** `filter: invert()` wrecks
  images, logos, and brand colour. Both palettes are designed deliberately.
- **Verify contrast in both themes.** Most portfolios check dark only and ship a
  failing light theme.

### Responsive

- **375px is the primary test width, not an afterthought.** Recruiters open
  these on phones. The fast path must be complete and flawless at that width.
- Case studies need mobile-specific treatment: capped line length, and code
  blocks and wide diagrams that scroll horizontally inside their own container
  rather than breaking the page.

### Universal

- Semantic HTML, visible focus states, full keyboard navigation.
- `prefers-reduced-motion` respected. `prefers-reduced-data` respected if
  anything heavy is added later.
- No console errors.

### Skills this project practises

Semantic HTML and ARIA · design tokens and theming systems · responsive layout
from mobile up · Core Web Vitals · image and font loading strategy ·
accessibility as a constraint rather than a fix · TypeScript types over a real
content schema.

The site needs no "skills" section to demonstrate these. It needs to *be* them.
Every one is verifiable by a hiring manager in about ten seconds on a real
device.

---

## 10 — Explicitly not building

- **Any AI feature** — chat, retrieval, assistant, grounding. Removed entirely.
  `AI.md` is dropped from the planning set.
- **Terminal as navigation** — decoration with real accessibility and mobile cost
- **3D, particles, scroll-jacking, heavy animation**
- **A skills or taxonomy section** — replaced by decision records
- **`/lab`** until it has real content
- **A separate `/about` route** — folded into home plus resume
- **A blog engine or CMS** — markdown is sufficient
- **Analytics** — revisit only to learn which projects recruiters read

---

## 11 — Build sequence

Content first, chrome second. One complete case study de-risks the project and
surfaces the real content questions while they are still cheap.

1. **Write one complete case study** in markdown, before any UI
2. **Confirm the content schema** — TypeScript types for a project, derived
   from step 1
3. **Design system and both themes** — `frontend-design` skill, tokens and dark
   mode included
4. **Home page** — all six sections
5. **Case study template**, then the remaining two
6. **`/journal` route**
7. **Polish** — accessibility, performance, SEO, mobile

Every step is a gate.

### Quality gate — all steps, in order

1. `tsc` typecheck
2. lint
3. production build
4. 375px pass
5. Keyboard-only pass
6. Both themes, including contrast
7. No console errors

---

## 12 — Rejected directions

Do not re-propose these without new evidence. Each was considered and rejected
for a stated reason.

- **"Ask my portfolio" / any AI chat feature** — rejected. It required an API
  key, backend, rate limiting, cost, cold starts, and error states, and its
  highest-severity failure mode was a recruiter seeing an error box in their
  first ten seconds. Removing it made this a pure frontend build: no backend, no
  secrets, no external service that can fail in front of a visitor.
- **"AI-native" positioning** — unsupported by the product after the AI feature
  was removed, and it invited gimmick-driven design.
- **A generic RAG pipeline diagram** (`PDF → Chunking → Embeddings → Vector
  Search → Retriever → LLM`) — the most recognisable diagram in the field, and a
  negative signal. Interactive nodes on a diagram the reader has seen forty
  times says *I watched a tutorial.*
- **A separate Engineering/skills section** — a taxonomy, not a story. Skimmed
  in two seconds, retained as nothing.
- **Terminal-style interface** — decoration that proves nothing a nav menu
  doesn't, at real accessibility and mobile cost.
- **Chat CTA in the hero** — self-defeating, and it contradicted the brief's own
  instruction to avoid a chatbot that exists because the portfolio is AI-themed.

---

## 13 — Open items

- [ ] **Resume PDF** — needed for the hero link. Not yet written.
- [ ] **Availability status in hero** — an explicit "open to work" signal
      removes a round of email and recruiters scan for it. **Include only if
      true.** Default: omit.
- [ ] **Project selection** — which 3 of DocuMind, ConversoAI, AttendX,
      AgentDock, Clipr lead the home page. Case study order follows from this.
- [ ] **Domain and hosting** — not decided.

---

## 14 — Planning documents

```text
AGENTS.md
PLAN.md          this file
DESIGN.md        not started
ARCHITECTURE.md  not started
ROADMAP.md       not started
```

`AI.md` was removed from this set along with the AI feature.

These files are at the repository root, not under `docs/`. Earlier versions of
`PLAN.md` and `AGENTS.md` described a `docs/` layout. If the files move, both
documents must be updated to match.

---

## 15 — Next action

1. Write one complete case study (Milestone 1)
2. Create `DESIGN.md` using the `frontend-design` skill
3. Approve design
4. Create `ARCHITECTURE.md`
5. Create `ROADMAP.md`
6. Only then initialise the application
