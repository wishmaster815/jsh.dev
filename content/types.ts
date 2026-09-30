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
  /** Longer paragraph shown on the card. */
  description: string;
  /** Bullet points of what it actually does. */
  features: string[];
  /** The problem that existed before this was built. */
  problem: string;
  /** The decision worth defending. */
  // keyDecision: Decision;
  stack: string[];
  /**
   * Repository URL. Rendered as "Source" with a GitHub glyph.
   * Omit until the repo is public and the URL is real.
   */
  source?: string;
  /**
   * Deployed demo URL. Rendered as "Live" with an external-link glyph.
   * Omit when there is no deployment — a dead link is worse than no link.
   */
  live?: string;
  /**
   * Screenshot path under /public. Optional: until one is added the card falls
   * back to a generated panel, so nothing renders as a broken image.
   */
  screenshot?: string;
  featured: boolean;
  year: string;
};

/**
 * A single technology.
 *
 * `icon` is a simple-icons export name. It is optional because a few providers
 * Groq and OpenAI have no brand mark in the set, and those fall back to a
 * monogram rather than a guessed logo.
 */
export type Tech = {
  name: string;
  icon?: string;
  /** What it is actually used for here, in a few words. */
  note: string;
};

/**
 * A layer of the stack.
 *
 * Full stack is shown as actual layers with real responsibilities rather than a
 * flat list of technologies, because naming tools argues nothing on its own.
 */
export type StackLayer = {
  id: string;
  name: string;
  /** One line on what this layer owns. */
  owns: string;
  techs: Tech[];
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
  /**
   * Subjects of interest. Kept short and specific: a long list reads as filler,
   * and vague entries like "passionate about technology" say nothing.
   */
  interests: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  /** One line on what the link is for. */
  note: string;
  icon: "github" | "linkedin" | "x" | "mail";
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
  contact: ContactLink[];
  /**
   * Path to the resume under /public. Omit until the file actually exists —
   * a dead download link is worse than no button.
   */
  resume?: string;
  /** Profile URL for the "view more projects" button. */
  github?: string;
};
