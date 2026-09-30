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
  role: "Full stack engineer",
  positioning:
    "I build across the stack — interfaces, APIs, and the data and infrastructure underneath.",
  lead: "Most of my work is in the seam: the layer where an interface meets an API, and an API meets the data it depends on.",
  location: "India",
  // availability: "Open to full stack and backend engineering roles",
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
    { label: "Years building", value: "TODO" },
  ],
  stack: [
    {
      id: "interface",
      name: "Interface",
      owns: "What the user touches, and how fast it responds.",
      built: "TODO — one concrete thing built here.",
      tools: ["TODO — framework", "TypeScript", "TODO — styling"],
      depth: 1,
    },
    {
      id: "api",
      name: "API",
      owns: "Contracts, validation, auth, and the error paths.",
      built: "TODO — one concrete thing built here.",
      tools: ["TODO — framework", "REST", "TODO — validation"],
      depth: 2,
    },
    {
      id: "data",
      name: "Data",
      owns: "Schemas, migrations, queries, and what happens when they are wrong.",
      built: "TODO — one concrete thing built here.",
      tools: ["TODO — database", "SQL", "TODO — migrations"],
      depth: 3,
    },
    {
      id: "systems",
      name: "Systems",
      owns: "Deploys, queues, observability, and cost.",
      built: "TODO — one concrete thing built here.",
      tools: ["Docker", "TODO — CI", "TODO — monitoring"],
      depth: 4,
    },
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
