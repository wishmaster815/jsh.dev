import type { Experience, JournalEntry, Project, Site } from "./types";

/**
 * PLACEHOLDER CONTENT — REPLACE BEFORE LAUNCH.
 *
 * PLAN.md §11 step 1: the user writes the real case study. Every string below
 * is a stand-in, and no project fact has been invented to fill a gap. Metrics,
 * latencies and outcomes are left as `TODO` on purpose — a fabricated number
 * on a portfolio is worse than a missing one, because a technical reader who
 * finds one stops trusting the rest of the page.
 *
 * `availability` is deliberately unset. PLAN.md §13: include only if true.
 */

export const site: Site = {
  name: "Jayesh Shrivastava",
  role: "Backend and AI systems engineer",
  positioning:
    "I build AI systems, backend infrastructure and the developer tooling around them.",
  location: "India",
  // availability: "Open to backend and AI engineering roles",
  summary:
    "Systems thinking over tooling lists. This site is the reasoning, the tradeoffs, and what broke.",
  email: "TODO@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/TODO" },
    { label: "LinkedIn", href: "https://linkedin.com/in/TODO" },
  ],
  stats: [
    // TODO: replace with real, checkable numbers.
    { label: "Projects shipped", value: "TODO" },
    { label: "Primary stack", value: "TypeScript / Python" },
  ],
};

export const projects: Project[] = [
  {
    slug: "TODO",
    name: "TODO — project name",
    summary: "TODO — one line on what it does.",
    problem: "TODO — the problem that existed before this was built.",
    keyDecision: {
      title: "TODO — the decision worth surfacing",
      context: "TODO — the situation that forced a choice.",
      options: [
        "TODO — option one",
        "TODO — option two",
      ],
      chosen: "TODO — what was chosen, and why.",
      tradeoff: "TODO — what that cost. A decision without a cost is not a decision.",
    },
    whatBroke: "TODO — what broke, and what it taught.",
    outcomes: [
      {
        metric: "TODO",
        detail: "TODO — what the number means in plain language.",
      },
    ],
    stack: ["TODO"],
    links: [
      { label: "Source", href: "https://github.com/TODO" },
    ],
    featured: true,
    year: "TODO",
  },
];

export const experience: Experience[] = [
  {
    role: "TODO — role",
    org: "TODO — organisation",
    period: "TODO",
    detail: "TODO — scope and scale. Numbers where they exist.",
  },
];

export const journal: JournalEntry[] = [
  {
    slug: "TODO",
    title: "TODO — what is being worked on right now",
    kind: "learning",
    date: "TODO",
    state: "TODO — honest current state, including what is stuck.",
    body: "TODO",
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
