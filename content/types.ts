/**
 * Content schema.
 *
 * The site renders from these types and nothing else. Presentation never
 * hardcodes content, so every section is driven by data and the content can
 * change without touching components.
 *
 * These shapes encode the content rules in PLAN.md §6:
 *   - an Outcome must be quantified
 *   - a Decision must state the tradeoff it accepted
 *   - a case study must name what broke
 */

export type Link = {
  label: string;
  href: string;
};

export type Outcome = {
  /** The measured result. A number, a scale, or a named failure. */
  metric: string;
  /** What the number means, in plain language. */
  detail: string;
};

export type Decision = {
  title: string;
  /** The situation that forced a choice. */
  context: string;
  /** What was actually weighed. */
  options: string[];
  /** What was chosen, and why in one sentence. */
  chosen: string;
  /** What that cost. A decision without a cost is not a decision. */
  tradeoff: string;
};

export type Project = {
  slug: string;
  name: string;
  /** One line: what it is and what it does. */
  summary: string;
  /** The problem that existed before this was built. */
  problem: string;
  /** The single decision worth surfacing in the 30-second path. */
  keyDecision: Decision;
  /** What broke, and what it taught. Required, not optional. */
  whatBroke: string;
  outcomes: Outcome[];
  stack: string[];
  /** Only real systems. Never a diagram of a concept. */
  architecture?: string;
  links: Link[];
  /** Drives ordering on the home page. */
  featured: boolean;
  year: string;
};

export type JournalEntry = {
  slug: string;
  title: string;
  kind: "decision" | "learning";
  date: string;
  /** Honest current state, including what's stuck. */
  state: string;
  body: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  /** Scope and scale. Numbers where they exist. */
  detail: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

/**
 * Practice and problem solving.
 *
 * Carries its own weight for a fresher: LeetCode and GeeksforGeeks profiles are
 * checkable evidence of consistency, which a reader can verify rather than take
 * on trust.
 */
export type Practice = {
  platform: string;
  href: string;
  detail: string;
};

/**
 * A layer of the stack.
 *
 * Full stack is shown as actual layers with real responsibilities rather than a
 * list of technologies, because naming tools argues nothing. Each layer states
 * what it owns and one concrete thing built in it.
 */
export type StackLayer = {
  id: string;
  name: string;
  /** What this layer is responsible for. */
  owns: string;
  /** Concrete work done here. */
  built: string;
  /** Tools, honestly scoped to this layer only. */
  tools: string[];
  /** 1 is the outermost layer, 4 the deepest. Drives the edge weight. */
  depth: 1 | 2 | 3 | 4;
};

export type Site = {
  name: string;
  role: string;
  positioning: string;
  /** One sentence, plain, for the hero lead. */
  lead: string;
  location: string;
  /** Omitted unless genuinely true. See PLAN.md §13. */
  availability?: string;
  summary: string;
  email: string;
  links: Link[];
  /** Measured stats for the hero metadata grid. Empty until real. */
  stats: { label: string; value: string }[];
  stack: StackLayer[];
  education: Education[];
  practice: Practice[];
};
