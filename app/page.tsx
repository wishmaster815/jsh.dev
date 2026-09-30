import Link from "next/link";
import { Card } from "@/components/card";
import { Terminal } from "@/components/terminal";
import { ThemeToggle } from "@/components/theme-toggle";
import { experience, featuredProjects, otherProjects, site } from "@/content/site";

const EDGE: Record<1 | 2 | 3 | 4, string> = {
  1: "bg-accent",
  2: "bg-accent/80",
  3: "bg-accent-2/70",
  4: "bg-muted/60",
};

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-[var(--section-gap)] scroll-mt-10"
    >
      <h2 id={`${id}-heading`} className="sr-only">
        {label}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="ambient__glow" />
        <div className="ambient__grain" />
      </div>

      <div className="relative z-10">
        {/* ================= Hero ================= */}
        <header className="mx-auto max-w-5xl px-[var(--gutter)] pt-8">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="font-mono text-step-0 font-medium text-accent"
            >
              dev
            </Link>
            <nav aria-label="Main">
              <ul className="flex items-center gap-5 sm:gap-7">
                {[
                  { href: "/#about", label: "About" },
                  { href: "/#stack", label: "Stack" },
                  { href: "/#projects", label: "Projects" },
                  { href: "/#contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="label hover:text-text">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-[var(--gutter)]">
          <section className="pt-16 sm:pt-24">
            <p className="enter enter-1 label">{site.role}</p>

            <h1 className="enter enter-2 mt-6 max-w-[17ch] text-step-7 leading-[0.98] font-bold tracking-[-0.035em] text-balance">
              I build things that{" "}
              <span className="spectral">run on the web.</span>
            </h1>

            <p className="enter enter-3 mt-7 max-w-[58ch] text-step-1 leading-relaxed text-muted text-pretty">
              {site.lead}
            </p>

            <div className="enter enter-4 mt-11 max-w-2xl">
              <Terminal />
            </div>

            <div className="enter enter-4 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="rounded-full bg-accent px-5 py-2.5 text-step-0 font-medium text-on-accent transition-transform duration-200 hover:scale-[1.03]"
              >
                See the projects
              </a>
              <a href="#contact" className="link-rule text-step-0">
                Get in touch
              </a>
            </div>
          </section>

          {/* ================= About ================= */}
          <Section id="about" label="About">
            <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <div>
                <p className="label">About</p>
                <h3 className="mt-4 max-w-[26ch] text-step-4 leading-[1.12] font-bold tracking-[-0.025em] text-balance">
                  {site.about.heading}
                </h3>
                <div className="mt-7 flex flex-col gap-5">
                  {site.about.body.map((para) => (
                    <p
                      key={para.slice(0, 24)}
                      className="max-w-[var(--measure)] text-pretty"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Card className="p-5">
                  <p className="label">Experience</p>
                  <ul className="mt-4 flex flex-col gap-4">
                    {experience.map((item) => (
                      <li key={`${item.org}-${item.role}`}>
                        <p className="text-step-0 leading-snug">{item.role}</p>
                        <p className="mt-0.5 font-mono text-step--2 text-muted">
                          {item.org}
                        </p>
                        <p className="mt-1.5 text-step--1 text-muted text-pretty">
                          {item.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-5">
                  <p className="label">Practice</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {site.about.practice.map((item) => (
                      <li key={item.platform}>
                        <a
                          href={item.href}
                          rel="me noopener noreferrer"
                          target="_blank"
                          className="link-rule text-step-0 text-accent"
                        >
                          {item.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-step--1 text-muted text-pretty">
                    Problem solving outside the projects. These links are
                    checkable.
                  </p>
                </Card>
              </div>
            </div>
          </Section>

          {/* ================= Stack ================= */}
          <Section id="stack" label="Stack">
            <p className="label">Stack</p>
            <h3 className="mt-4 max-w-[24ch] text-step-4 leading-[1.12] font-bold tracking-[-0.025em] text-balance">
              Four layers, each with one job.
            </h3>
            <p className="mt-5 max-w-[var(--measure)] text-muted text-pretty">
              The technologies I reach for most often — each chosen with a
              reason, and each held to the layer it belongs to.
            </p>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {site.stack.map((layer) => (
                <li key={layer.id}>
                  <Card className="h-full p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-8 w-1 rounded-full ${EDGE[layer.depth]}`}
                        aria-hidden="true"
                      />
                      <h4 className="text-step-2 leading-none">
                        {layer.name}
                      </h4>
                    </div>
                    <p className="mt-4 text-step--1 text-muted text-pretty">
                      {layer.owns}
                    </p>
                    <p className="mt-3 text-step--1 text-pretty">
                      {layer.built}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-4 font-mono text-step--2 text-muted">
                      {layer.tools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </Card>
                </li>
              ))}
            </ul>
          </Section>

          {/* ================= Projects ================= */}
          <Section id="projects" label="Projects">
            <p className="label">Projects</p>
            <h3 className="mt-4 max-w-[24ch] text-step-4 leading-[1.12] font-bold tracking-[-0.025em] text-balance">
              Built end to end, and the decision that shaped each one.
            </h3>

            <ul className="mt-9 flex flex-col gap-4">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/work/${project.slug}`} className="block">
                    <Card className="p-6 sm:p-7">
                      <div className="grid gap-x-8 gap-y-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
                        <div>
                          <h4 className="text-step-3 leading-[1.1] tracking-[-0.01em] transition-colors duration-200 group-hover:text-accent">
                            {project.name}
                          </h4>
                          <p className="mt-1.5 font-mono text-step--2 text-muted">
                            {project.year}
                          </p>
                        </div>
                        <div>
                          <p className="text-pretty">{project.summary}</p>
                          <p className="mt-3 text-step--1 text-muted text-pretty">
                            <span className="text-text">
                              {project.keyDecision.title}.{" "}
                            </span>
                            {project.keyDecision.tradeoff}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-4 font-mono text-step--2 text-muted">
                        {project.stack.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>

            {otherProjects.length > 0 ? (
              <div className="mt-10">
                <p className="label">Also built</p>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {otherProjects.map((project) => (
                    <li key={project.slug}>
                      <Link href={`/work/${project.slug}`} className="block">
                        <Card className="h-full p-5">
                          <h4 className="text-step-1 leading-snug">
                            {project.name}
                          </h4>
                          <p className="mt-1 font-mono text-step--2 text-muted">
                            {project.year}
                          </p>
                          <p className="mt-3 text-step--1 text-pretty">
                            {project.summary}
                          </p>
                        </Card>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Section>

          {/* ================= Contact ================= */}
          <Section id="contact" label="Contact">
            <Card className="p-7 sm:p-10">
              <p className="label">Contact</p>
              <h3 className="mt-4 max-w-[22ch] text-step-4 leading-[1.12] font-bold tracking-[-0.025em] text-balance">
                Have an opportunity or project in mind?
              </h3>
              <p className="mt-5 max-w-[var(--measure)] text-muted text-pretty">
                Send a message and I will usually reply within a day. I am based
                in {site.location} and open to{" "}
                {site.availability?.toLowerCase() ?? "interesting work"}.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="link-rule mt-7 inline-block text-step-2 text-accent"
              >
                {site.email}
              </a>

              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-line pt-6">
                {site.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      rel="me noopener noreferrer"
                      target="_blank"
                      className="link-rule text-step-0"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </Section>
        </main>

        <footer className="mx-auto max-w-5xl px-[var(--gutter)]">
          <div className="mt-[var(--section-gap)] border-t border-line py-8">
            <p className="label">
              {site.name} — {site.role}, {site.location}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
