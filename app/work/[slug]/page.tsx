import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

function Block({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <Reveal>
        <div className="datum" style={{ "--datum": "26%" } as React.CSSProperties} aria-hidden="true">
          <span className="datum__ticks" />
          <span className="datum__value" />
        </div>
        <h2 className="mt-5 text-step-2 leading-tight font-normal">
          {heading}
        </h2>
        <div className="mt-6 max-w-[var(--measure)]">{children}</div>
      </Reveal>
    </section>
  );
}

export default async function CaseStudy(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const decision = project.keyDecision;

  return (
    <>
      <div className="field" aria-hidden="true" />
      <SiteHeader />

      <main className="relative z-10 mx-auto w-full max-w-5xl flex-1 px-[var(--gutter)] pt-12 sm:pt-18">
        <Link
          href="/#work"
          className="link-rule font-mono text-step--1 text-muted"
        >
          All work
        </Link>

        <h1 className="mt-6 max-w-[18ch] text-step-6 leading-[0.98] font-normal tracking-[-0.025em] text-balance">
          {project.name}
        </h1>

        <p className="mt-6 max-w-[var(--measure)] text-step-2 leading-[1.3] text-muted text-pretty">
          {project.summary}
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-step--1 text-muted">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Block heading="The problem">
          <p className="text-pretty">{project.problem}</p>
        </Block>

        {project.architecture ? (
          <Block heading="Architecture">
            <p className="text-pretty">{project.architecture}</p>
          </Block>
        ) : null}

        <Block heading="Key decisions">
          <article>
            <h3 className="text-step-1 leading-snug">{decision.title}</h3>
            <p className="mt-4 text-pretty">{decision.context}</p>

            <p className="mt-7 font-mono text-step--2 uppercase tracking-[0.14em] text-muted">
              Options weighed
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {decision.options.map((option) => (
                <li
                  key={option}
                  className="flex gap-3 text-step--1 text-pretty"
                >
                  <span
                    className="mt-[0.55em] h-px w-4 shrink-0 bg-line-strong"
                    aria-hidden="true"
                  />
                  {option}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="crop bg-surface p-5">
                <p className="font-mono text-step--2 uppercase tracking-[0.14em] text-muted">
                  Chosen
                </p>
                <p className="mt-2 text-step--1 leading-relaxed text-pretty">
                  {decision.chosen}
                </p>
              </div>
              <div className="crop bg-surface p-5">
                <p className="font-mono text-step--2 uppercase tracking-[0.14em] text-muted">
                  Tradeoff accepted
                </p>
                <p className="mt-2 text-step--1 leading-relaxed text-pretty">
                  {decision.tradeoff}
                </p>
              </div>
            </div>
          </article>
        </Block>

        {/* Required, not optional. The cheapest credibility available. */}
        <Block heading="What broke">
          <p className="text-pretty">{project.whatBroke}</p>
        </Block>

        <Block heading="Outcome">
          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {project.outcomes.map((outcome) => (
              <div key={outcome.metric} className="crop bg-surface p-5">
                <dt className="text-step-4 leading-none tracking-[-0.01em]">
                  {outcome.metric}
                </dt>
                <dd className="mt-2 text-step--1 text-muted text-pretty">
                  {outcome.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Block>

        {project.links.length > 0 ? (
          <Block heading="Source and demo">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-step-0">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="link-rule text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}
      </main>

      <SiteFooter />
    </>
  );
}
