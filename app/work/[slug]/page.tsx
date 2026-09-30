import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <section className="mt-12">
      <h2 className="border-t border-line pt-4 text-step-1 font-normal">
        {heading}
      </h2>
      <div className="mt-5 max-w-[var(--measure)]">{children}</div>
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
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-[var(--gutter)] pt-16 sm:pt-24">
        <Link
          href="/#work"
          className="font-mono text-step--1 text-muted hover:text-text"
        >
          Work
        </Link>

        <h1 className="mt-6 max-w-[20ch] text-step-5 leading-[1.08] font-normal tracking-[-0.02em] text-balance">
          {project.name}
        </h1>
        <p className="mt-5 max-w-[var(--measure)] text-step-1 text-muted text-pretty">
          {project.summary}
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-1 font-mono text-step--1 text-muted">
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
            <h3 className="text-step-0 leading-snug">{decision.title}</h3>
            <p className="mt-3 text-pretty">{decision.context}</p>

            <p className="mt-6 font-mono text-step--1 text-muted">
              Options weighed
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {decision.options.map((option) => (
                <li key={option} className="text-pretty">
                  {option}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-pretty">
              <span className="font-mono text-step--1 text-muted">Chosen: </span>
              {decision.chosen}
            </p>
            <p className="mt-3 text-pretty">
              <span className="font-mono text-step--1 text-muted">
                Tradeoff accepted:{" "}
              </span>
              {decision.tradeoff}
            </p>
          </article>
        </Block>

        {/* Required, not optional. The cheapest credibility available. */}
        <Block heading="What broke">
          <p className="text-pretty">{project.whatBroke}</p>
        </Block>

        <Block heading="Outcome">
          <dl className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {project.outcomes.map((outcome) => (
              <div key={outcome.metric}>
                <dt className="text-step-3 leading-tight">{outcome.metric}</dt>
                <dd className="mt-1 text-step--1 text-muted">
                  {outcome.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Block>

        {project.links.length > 0 ? (
          <Block heading="Source and demo">
            <ul className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline decoration-line underline-offset-4 hover:decoration-accent"
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
