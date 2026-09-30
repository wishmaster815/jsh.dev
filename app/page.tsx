import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import {
  experience,
  featuredProjects,
  journal,
  site,
} from "@/content/site";

/**
 * A section boundary is a hairline rule and whitespace, not an eyebrow label
 * and not a number. The home sections are not a sequence, so numbered markers
 * would be decorative rather than informative.
 */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-[var(--section-gap)] scroll-mt-8"
    >
      <h2
        id={`${id}-heading`}
        className="border-t border-line pt-4 text-step-2 font-normal"
      >
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-[var(--gutter)]">
        {/* Hero — the one place the design spends its boldness. Spec-sheet
            header: identity set large, with a monospace metadata grid beneath. */}
        <section className="pt-16 pb-4 sm:pt-24">
          <h1 className="max-w-[20ch] text-step-6 leading-[1.05] font-normal tracking-[-0.02em] text-balance">
            {site.name}
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-step-2 leading-snug text-muted text-pretty">
            {site.positioning}
          </p>

          {site.availability ? (
            <p className="mt-6 font-mono text-step--1 text-accent">
              {site.availability}
            </p>
          ) : null}

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-4">
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-step--1 text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-step-1">{stat.value}</dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-step--1 text-muted">Based in</dt>
              <dd className="mt-1 text-step-1">{site.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-step--1 text-muted">Contact</dt>
              <dd className="mt-1 text-step-1">
                <a
                  href={`mailto:${site.email}`}
                  className="underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  Email
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* Selected work. Each entry surfaces its key decision inline, so a
            recruiter sees evidence of judgment without opening anything. */}
        <Section id="work" title="Selected work">
          <ul className="flex flex-col">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="border-b border-line last:border-0">
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid gap-x-6 gap-y-3 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]"
                >
                  <div>
                    <h3 className="text-step-3 leading-tight group-hover:text-accent">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-mono text-step--1 text-muted">
                      {project.year}
                    </p>
                  </div>
                  <div>
                    <p className="max-w-[var(--measure)] text-pretty">
                      {project.summary}
                    </p>
                    <p className="mt-3 max-w-[var(--measure)] text-step--1 text-muted text-pretty">
                      <span className="text-text">
                        Key decision — {project.keyDecision.title}.
                      </span>{" "}
                      {project.keyDecision.tradeoff}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-step--1 text-muted">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome.metric}>{outcome.metric}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* How I work — the reasoning showcase, and the only content a
            competitor cannot copy. */}
        <Section id="approach" title="How I work">
          <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project) => (
              <article key={project.slug}>
                <h3 className="text-step-1 leading-snug">
                  {project.keyDecision.title}
                </h3>
                <p className="mt-3 text-step--1 leading-relaxed text-muted">
                  {project.keyDecision.chosen}
                </p>
                <p className="mt-3 text-step--1 leading-relaxed">
                  <span className="font-mono text-muted">The cost: </span>
                  {project.keyDecision.tradeoff}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* Currently — recruiters read this as activity; it doubles as the
            standing slot for new work in progress. */}
        <Section id="currently" title="Currently">
          <ul className="flex flex-col gap-4">
            {journal.map((entry) => (
              <li key={entry.slug} className="max-w-[var(--measure)]">
                <p className="text-step-1">{entry.title}</p>
                <p className="mt-1 text-step--1 text-muted">{entry.state}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="flex flex-col gap-6">
            {experience.map((item) => (
              <li
                key={`${item.org}-${item.role}`}
                className="grid gap-x-6 gap-y-1 border-b border-line pb-6 last:border-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]"
              >
                <div>
                  <p className="text-step-1">{item.role}</p>
                  <p className="font-mono text-step--1 text-muted">
                    {item.org} — {item.period}
                  </p>
                </div>
                <p className="max-w-[var(--measure)] text-pretty">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <div className="max-w-[var(--measure)]">
            <p className="text-step-2 leading-snug text-pretty">
              If you are hiring for backend or AI engineering work, I would like
              to hear about it.
            </p>
            <p className="mt-6">
              <a
                href={`mailto:${site.email}`}
                className="text-step-1 underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-4 font-mono text-step--1 text-muted">
              Resume: TODO — not yet uploaded
            </p>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
