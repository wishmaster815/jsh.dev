/**
 * Content schema.
 *
 * The site renders from these types and nothing else. Presentation never
 * hardcodes content, so every section is data-driven and the content can change
 * without touching components.
 *
 * Outcome metrics and "what broke" were removed at the user's request: for a
 * fresher portfolio the decision record is the substance, and a projects table
 * of unverified numbers reads worse than an honest short blurb.
 */

export type Link = {
  label: string;
  href: string;
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
  /** The decision worth defending. */
  keyDecision: Decision;
  stack: string[];
  links: Link[];
  /** Drives ordering and whether it leads the Projects section. */
  featured: boolean;
  year: string;
};

/**
 * A layer of the stack.
 *
 * Full stack is shown as actual layers with real responsibilities rather than a
 * list of technologies, because naming tools argues nothing.
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

export type Experience = {
  role: string;
  org: string;
  period: string;
  detail: string;
};

export type About = {
  heading: string;
  /** Paragraphs, written plainly. No claims that cannot be checked. */
  body: string[];
  /** Checkable evidence: practice platforms anyone can open and verify. */
  practice: { platform: string; href: string }[];
};

export type Site = {
  name: string;
  role: string;
  positioning: string;
  /** One sentence, plain, for the hero lead. */
  lead: string;
  location: string;
  /** Omitted unless genuinely true. */
  availability?: string;
  email: string;
  links: Link[];
  stats: { label: string; value: string }[];
  stack: StackLayer[];
  about: About;
  experience: Experience[];
};
