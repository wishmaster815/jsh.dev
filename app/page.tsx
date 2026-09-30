import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { experience, featuredProjects, journal, site } from "@/content/site";

const EDGE: Record<1 | 2 | 3 | 4, string> = {
  1: "bg-layer-1",
  2: "bg-layer-2",
  3: "bg-layer-3",
  4: "bg-layer-4",
};

/**
 * A section is a measured layer: a title, a datum rule that draws in on scroll,
 * and content. No eyebrow label and no number, because the home sections are
 * not a sequence and a marker there would be decoration pretending to be
 * information.
 */
function Section({
  id,
  title,
  datum,
  lede,
  children,
}: {
  id: string;
  title: string;
  datum: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-[var(--section-gap)] scroll-mt-10"
    >
      <Reveal>
        <div
          className="datum"
          style={{ "--datum": datum } as React.CSSProperties}
          aria-hidden="true"
        >
          <span className="datum__ticks" />
          <span className="datum__value" />
        </div>
        <h2
          id={`${id}-heading`}
          className="mt-6 text-step-4 leading-[1.08] font-normal tracking-[-0.015em]"
        >
          {title}
        </h2>
        {lede ? (
          <p className="mt-4 max-w-[var(--measure)] text-step-1 text-muted text-pretty">
            {lede}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* The measured field sits behind everything and never intercepts input. */}
      <div className="field" aria-hidden="true" />

      <SiteHeader />

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-[var(--gutter)]">
        {/* ------------------------------------------------------------------
            Hero — the one place the design spends its boldness. A datasheet
            header: identity set large, a datum rule, then a spec table. The
            page-load sequence is the single orchestrated moment.
            ------------------------------------------------------------------ */}
        <section className="pt-14 sm:pt-20">
          <p className="enter enter-1 font-mono text-step--1 text-muted">
            {site.location}
          </p>

          <h1 className="enter enter-2 mt-4 text-step-7 leading-[0.92] font-normal tracking-[-0.03em] text-balance">
            {site.name}
          </h1>

          <div
            className="enter-draw datum mt-10"
            style={{ "--datum": "46%" } as React.CSSProperties}
            aria-hidden="true"
          >
            <span className="datum__ticks" />
            <span className="datum__value" />
          </div>

          <div className="enter enter-3 mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            <div>
              <p className="font-mono text-step--2 uppercase tracking-[0.14em] text-muted">
                Role
              </p>
              <p className="mt-1.5 text-step-1">{site.role}</p>
            </div>
            {site.availability ? (
              <div>
                <p className="font-mono text-step--2 uppercase tracking-[0.14em] text-muted">
                  Status
                </p>
                <p className="mt-1.5 flex items-center gap-2 text-step-1">
                  <span
                    className="live-dot inline-block size-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {site.availability}
                </p>
              </div>
            ) : null}
          </div>

          <p className="enter enter-4 mt-10 max-w-[var(--measure)] text-step-2 leading-[1.3] text-pretty">
            {site.lead}
          </p>

          <div className="enter enter-4 mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href="#work"
              className="link-rule text-step-1 text-accent"
              style={{ transitionDelay: "80ms" }}
            >
              See the work
            </a>
            <a href="#contact" className="link-rule text-step-1">
              Get in touch
            </a>
            <span className="font-mono text-step--1 text-muted">
              {site.stats.map((s) => s.value).join("   ")}
            </span>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            The stack — full stack shown as actual layers, each owning a
            responsibility, rather than a list of technologies.
            ------------------------------------------------------------------ */}
        <Section
          id="stack"
          title="The stack"
          datum="72%"
          lede="Four layers, each with one job. Most of the difficulty is in keeping the contracts between them honest."
        >
          <ol className="flex flex-col gap-3">
            {site.stack.map((layer) => (
              <li
                key={layer.id}
                className="crop grid gap-x-6 gap-y-2 bg-surface p-5 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)_minmax(0,1fr)] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-9 w-1 shrink-0 ${EDGE[layer.depth]}`}
                    aria-hidden="true"
                  />
                  <h3 className="text-step-1 leading-none">{layer.name}</h3>
                </div>
                <p className="text-step--1 text-muted text-pretty sm:leading-relaxed">
                  {layer.owns}
                </p>
                <p className="text-step--1 text-pretty sm:leading-relaxed">
                  {layer.built}
                </p>
                <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-step--2 text-muted sm:col-span-3">
                  {layer.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* ------------------------------------------------------------------
            Selected work. Each entry surfaces its key decision inline, so a
            recruiter sees evidence of judgment without opening anything.
            ------------------------------------------------------------------ */}
        <Section
          id="work"
          title="Selected work"
          datum="58%"
          lede="Three projects, and for each one the decision that actually determined the shape of it."
        >
          <ul className="flex flex-col gap-4">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="crop group block bg-surface p-5 transition-colors duration-200 hover:bg-raised sm:p-7"
                >
                  <div className="grid gap-x-8 gap-y-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
                    <div>
                      <h3 className="text-step-3 leading-[1.1] tracking-[-0.01em] group-hover:text-accent">
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
                          {project.keyDecision.title}.{" "}
                        </span>
                        {project.keyDecision.tradeoff}
                      </p>
                    </div>
                  </div>

                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-4">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome.metric}>
                        <dt className="text-step-1 leading-tight">
                          {outcome.metric}
                        </dt>
                        <dd className="mt-1 font-mono text-step--2 leading-relaxed text-muted">
                          {outcome.detail}
                        </dd>
                      </div>
                    ))}
                    <div>
                      <dt className="font-mono text-step--2 uppercase tracking-[0.14em] text-muted">
                        Stack
                      </dt>
                      <dd className="mt-1 font-mono text-step--2 leading-relaxed text-muted">
                        {project.stack.join("  ")}
                      </dd>
                    </div>
                  </dl>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        {/* ------------------------------------------------------------------
            How I work — the reasoning showcase, and the only content a
            competitor cannot copy.
            ------------------------------------------------------------------ */}
        <Section
          id="approach"
          title="How I work"
          datum="34%"
          lede="A decision is only real once you have written down what it cost."
        >
          <div className="grid gap-x-8 gap-y-9 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="crop bg-surface p-5">
                <h3 className="text-step-1 leading-snug">
                  {project.keyDecision.title}
                </h3>
                <p className="mt-3 text-step--1 leading-relaxed text-pretty">
                  {project.keyDecision.chosen}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-step--1 leading-relaxed text-pretty">
                  <span className="font-mono text-step--2 uppercase tracking-[0.14em] text-muted">
                    Cost{" "}
                  </span>
                  {project.keyDecision.tradeoff}
                </p>
              </article>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------------
            Currently — recruiters read this as evidence of activity; it doubles
            as the standing slot for work in progress.
            ------------------------------------------------------------------ */}
        <Section
          id="currently"
          title="Currently"
          datum="21%"
          lede="What is in progress, including the parts that are not working yet."
        >
          <ul className="grid gap-4 sm:grid-cols-2">
            {journal.map((entry) => (
              <li key={entry.slug} className="crop bg-surface p-5">
                <p className="text-step-1 leading-snug">{entry.title}</p>
                <p className="mt-2 text-step--1 text-muted text-pretty">
                  {entry.state}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience" datum="28%">
          <ul className="flex flex-col">
            {experience.map((item) => (
              <li
                key={`${item.org}-${item.role}`}
                className="grid gap-x-8 gap-y-2 border-b border-line py-6 first:pt-0 last:border-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]"
              >
                <div>
                  <p className="text-step-1 leading-snug">{item.role}</p>
                  <p className="mt-1 font-mono text-step--1 text-muted">
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

        <Section
          id="contact"
          title="Contact"
          datum="12%"
          lede="If you are hiring for full stack or backend engineering work, I would like to hear about it."
        >
          <div className="crop bg-surface p-6 sm:p-8">
            <a
              href={`mailto:${site.email}`}
              className="link-rule text-step-3 tracking-[-0.01em]"
            >
              {site.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2 font-mono text-step--1">
              {site.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="me noopener noreferrer"
                    target="_blank"
                    className="link-rule text-muted hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 font-mono text-step--2 text-muted">
              Resume — TODO, not yet uploaded
            </p>
          </div>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
