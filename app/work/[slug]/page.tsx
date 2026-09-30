import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/card";
import { ThemeToggle } from "@/components/theme-toggle";
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
      <h2 className="text-step-2 leading-tight font-bold tracking-[-0.02em]">
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
      <div className="ambient" aria-hidden="true">
        <div className="ambient__glow" />
        <div className="ambient__grain" />
      </div>

      <div className="relative z-10">
        <header className="mx-auto max-w-5xl px-[var(--gutter)] pt-8">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="font-mono text-step-0 text-accent">
              dev
            </Link>
            <ThemeToggle />
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-[var(--gutter)] pt-12 sm:pt-16">
          <Link href="/#projects" className="label hover:text-text">
            Projects
          </Link>

          <h1 className="mt-6 max-w-[18ch] text-step-6 leading-[1] font-bold tracking-[-0.03em] text-balance">
            {project.name}
          </h1>

          <p className="mt-6 max-w-[var(--measure)] text-step-2 leading-[1.3] text-muted text-pretty">
            {project.summary}
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-step--1 text-muted">
            {project.stack.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <Block heading="The problem">
            <p className="text-pretty">{project.problem}</p>
          </Block>

          <Block heading="The decision that shaped it">
            <Card className="p-6">
              <h3 className="text-step-1 leading-snug">{decision.title}</h3>
              <p className="mt-4 text-pretty">{decision.context}</p>

              <p className="label mt-7">Options weighed</p>
              <ul className="mt-3 flex flex-col gap-2">
                {decision.options.map((option, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-step--1 text-pretty"
                  >
                    <span
                      className="mt-[0.55em] h-px w-4 shrink-0 bg-accent"
                      aria-hidden="true"
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card className="p-5">
                <p className="label">Chosen</p>
                <p className="mt-2 text-step--1 leading-relaxed text-pretty">
                  {decision.chosen}
                </p>
              </Card>
              <Card className="p-5">
                <p className="label">Tradeoff accepted</p>
                <p className="mt-2 text-step--1 leading-relaxed text-pretty">
                  {decision.tradeoff}
                </p>
              </Card>
            </div>
          </Block>

          {project.links.length > 0 ? (
            <Block heading="Source">
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

          <div className="mt-16">
            <Link
              href="/#projects"
              className="label inline-block hover:text-text"
            >
              All projects
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
