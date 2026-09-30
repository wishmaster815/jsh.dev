# Portfolio V2 — Product Plan

## Status

**Product direction approved. Design and architecture not yet approved. No application code exists.**

Awaiting: `DESIGN.md` → `ARCHITECTURE.md` → `ROADMAP.md`

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

**Jayesh is a backend and AI systems engineer.**

AI is a *domain he works in*, not the theme of the site. Several projects are AI
projects and they get full case studies, but the site's identity is systems
thinking, which covers RAG, agents, backend, and infrastructure with one story.

### Why not "AI-native"

An earlier draft positioned the site as AI-native. Rejected: with no AI feature
in the product, that is a claim the site cannot back, and it invites exactly the
gimmick-driven design the brief warns against.

### Positioning line

> Backend and AI systems engineer. Here's the reasoning, the tradeoffs, and what
> broke.

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

1. **Hero** — name, one-line position, availability status, two CTAs
   (View work / Contact), resume link
2. **Selected Work** — 3 projects maximum. Each states: what it is, the key
   decision and its tradeoff, an outcome carrying a number
3. **How I Work** — 3 decision records. Reasoning surfaced in the fast path
4. **Currently** — what's live now, what's being learned now
5. **Experience** — condensed, with scale
6. **Contact**

### Section rationale

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

Aesthetic decisions are made in the design phase using the `frontend-design`
skill. This section fixes the constraints that skill does not decide.

### The target

**Outstanding, not fancy.** The restraint is the point: quality comes from
typography, spacing, and hierarchy being right, not from effects being added.

A well-set, precise editorial site reads as senior. A heavily animated one reads
as a template. Restraint is what makes it look considered.

Hard prohibitions: 3D, particles, scroll-jacking, glassmorphism, gradient
overuse, decorative motion.

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
- **Three states, not two:** system / light / dark. A two-state toggle forces
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
