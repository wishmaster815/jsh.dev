import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ContactRow, ProjectCard } from "@/components/project-card";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";
import { ScrollProgress, SECTIONS } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { Terminal } from "@/components/terminal";
import { ThemeToggle } from "@/components/theme-toggle";
import { experience, featuredProjects, site } from "@/content/site";

const EDGE: Record<1 | 2 | 3 | 4, string> = {
  1: "bg-head",
  2: "bg-head/75",
  3: "bg-head-2/70",
  4: "bg-dim",
};

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#stack", label: "Stack" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

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
      className="mt-(--section-gap) scroll-mt-10"
    >
      <h2 id={`${id}-heading`} className="sec-label">
        /{label}
      </h2>
      <Reveal>
        <div className="mt-(--block-gap)">{children}</div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop__grid" />
        <div className="backdrop__bloom" />
        <div className="backdrop__vignette" />
      </div>

      <div className="relative z-10">
        <ScrollProgress targets={SECTIONS} />

        <header className="mx-auto max-w-6xl px-(--gutter) pt-7">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="head-mark head-item head-1 text-step-0 text-head"
            >
              ~/jayesh-shrivastava
            </Link>
            <div className="flex items-center gap-5 sm:gap-7">
              <nav aria-label="Main">
                <ul className="hidden items-center gap-6 sm:flex">
                  {NAV.map((item, i) => (
                    <li key={item.href} className={`head-item head-${i + 2}`}>
                      <Link href={item.href} className="label link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="head-item head-6">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="head-rule mt-5 h-px bg-line" />
        </header>

        <main className="mx-auto max-w-6xl px-(--gutter)">
          {/* ================= Hero ================= */}
          <section className="pt-10 sm:pt-14">
            <p className="enter enter-1 flex items-center gap-2 text-step--1 text-muted">
              <span className="live-dot inline-block size-1.5 rounded-full bg-ok" />
              {site.availability}
            </p>

            <h1 className="enter enter-2 mt-5 max-w-[20ch] text-step-7 leading-[1.02] font-bold tracking-[-0.02em] text-head text-balance">
              I build things that run on the web.
            </h1>

            <p className="enter enter-3 mt-5 max-w-[64ch] text-step-0 text-muted text-pretty">
              {site.lead}
            </p>

            <div className="enter enter-4 mt-8 max-w-2xl">
              <Terminal />
            </div>

            <div className="enter enter-4 mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="rounded-lg border border-head px-5 py-2.5 text-step-0 text-head transition-colors duration-200 hover:bg-head hover:text-on-head"
              >
                View Projects
              </a>
              <a href="#contact" className="link text-step-0 text-muted">
                Let&apos;s talk
              </a>
            </div>
          </section>

          {/* ================= About ================= */}
          <Section id="about" label="about">
            <div className="grid gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
              <div>
                <h3 className="max-w-[28ch] text-step-5 leading-[1.1] font-bold tracking-[-0.02em] text-head text-balance">
                  {site.about.heading}
                </h3>
                <div className="mt-5 flex flex-col gap-3.5">
                  {site.about.body.map((para) => (
                    <p
                      key={para.slice(0, 24)}
                      className="max-w-(--measure) text-step-0 text-muted text-pretty"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="panel p-5">
                  <p className="label">Experience</p>
                  <ul className="mt-4 flex flex-col gap-4">
                    {experience.map((item) => (
                      <li key={`${item.org}-${item.role}`}>
                        <p className="text-step-0 text-text">{item.role}</p>
                        <p className="mt-0.5 text-step--2 text-head">
                          {item.org}
                        </p>
                        <p className="mt-1.5 text-step--2 text-muted text-pretty">
                          {item.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="panel p-5">
                  <p className="label">Practice</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {site.about.practice.map((item) => (
                      <li key={item.platform}>
                        <a
                          href={item.href}
                          rel="me noopener noreferrer"
                          target="_blank"
                          className="link text-step-0 text-head"
                        >
                          {item.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          {/* ================= Stack ================= */}
          <Section id="stack" label="stack">
            <h3 className="max-w-[26ch] text-step-5 leading-[1.1] font-bold tracking-[-0.02em] text-head text-balance">
              The stack I work across.
            </h3>
            <p className="mt-4 max-w-[62ch] text-step-0 text-muted text-pretty">
              Four layers, each with one job. The technologies I reach for most
              often — each chosen with a reason.
            </p>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {site.stack.map((layer) => (
                <li key={layer.id} className="panel p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-7 w-1 rounded-full ${EDGE[layer.depth]}`}
                      aria-hidden="true"
                    />
                    <h4 className="text-step-2 text-head">{layer.name}</h4>
                  </div>
                  <p className="mt-4 text-step--1 text-muted text-pretty">
                    {layer.owns}
                  </p>
                  <p className="mt-2.5 text-step--1 text-muted text-pretty">
                    {layer.built}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                    {layer.tools.map((tool, i) => (
                      <li
                        key={i}
                        className="rounded-md border border-line bg-panel-2 px-2 py-0.5 text-step--2 text-muted"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Section>

          {/* ================= Projects — detail inline, no separate pages ==== */}
          <Section id="projects" label="projects">
            <h3 className="max-w-[26ch] text-step-5 leading-[1.1] font-bold tracking-[-0.02em] text-head text-balance">
              Things I&apos;ve Built
            </h3>
            <p className="mt-4 max-w-[62ch] text-step-0 text-muted text-pretty">
              Real projects, each one built end to end — interface, API, and the
              data underneath.
            </p>

            <ul className="mt-7 grid gap-5 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Section>

          {/* ================= Contact ================= */}
          <Section id="contact" label="contact">
            <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
              <div>
                <h3 className="text-step-6 leading-[1.05] font-bold tracking-tight text-text text-balance">
                  Let&apos;s work together
                </h3>
                <p className="mt-5 max-w-[46ch] text-step-0 text-muted text-pretty">
                  Have an opportunity or project in mind? Send a quick message —
                  I usually respond within 24 hours.
                </p>

                <div className="mt-6">
                  <CopyEmail email={site.email} />
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {site.contact.map((item) => (
                    <li key={item.label}>
                      <ContactRow item={item} />
                    </li>
                  ))}
                </ul>
              </div>

              <ContactForm recipient={site.email} />
            </div>
          </Section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
