import {
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./icons";
import type { ContactLink, Project } from "@/content/types";

const ICON = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
} as const;

const SHOWN = 3;

export function ContactRow({ item }: { item: ContactLink }) {
  const Icon = ICON[item.icon];
  const external = item.icon !== "mail";

  return (
    <a
      href={item.href}
      rel={external ? "me noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      className="panel group flex items-center gap-4 p-4 transition-colors duration-200 hover:border-head"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-panel-2 text-muted transition-colors group-hover:text-head">
        <Icon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-step-0 text-text">{item.label}</span>
        <span className="block truncate text-step--2 text-muted">
          {item.note}
        </span>
      </span>
      <ExternalIcon className="size-4 shrink-0 text-dim transition-colors group-hover:text-head" />
    </a>
  );
}

/**
 * Project card. Detail is inline — there is no per-project route, so everything
 * a reader needs is on the card itself.
 */
export function ProjectCard({ project }: { project: Project }) {
  const overflow = project.stack.length - SHOWN;

  return (
    <article className="panel group flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-line-2">
      <div className="relative h-44 overflow-hidden border-b border-line sm:h-52">
        {project.screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.screenshot}
            alt={`${project.name} interface`}
            className="size-full object-cover object-top"
          />
        ) : (
          <div
            className="size-full"
            style={{
              backgroundImage:
                "linear-gradient(150deg, color-mix(in srgb, var(--head) 16%, transparent) 0%, transparent 55%), radial-gradient(120% 90% at 85% 15%, color-mix(in srgb, var(--head-2) 14%, transparent) 0%, transparent 70%)",
            }}
          />
        )}

        {/* Scrim so the title stays readable over any screenshot. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--panel)] via-[var(--panel)]/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-step-2 text-text">{project.name}</h3>
          <p className="mt-0.5 text-step--2 text-head">{project.summary}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-step--1 text-muted text-pretty">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-col gap-1.5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-2.5 text-step--1 text-muted text-pretty"
            >
              <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-head" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <ul className="flex flex-wrap items-center gap-2">
            {project.stack.slice(0, SHOWN).map((tool, i) => (
              <li
                key={i}
                className="rounded-md border border-line bg-panel-2 px-2 py-0.5 text-step--2 text-muted"
              >
                {tool}
              </li>
            ))}
            {overflow > 0 ? (
              <li className="rounded-md border border-line px-2 py-0.5 text-step--2 text-head">
                +{overflow}
              </li>
            ) : null}
          </ul>

          {project.links.length > 0 ? (
            <ul className="mt-4 flex items-center gap-4 text-muted">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex items-center gap-1.5 text-step--2 transition-colors hover:text-head"
                  >
                    {/github\.com/.test(link.href) ? (
                      <GitHubIcon className="size-4" />
                    ) : (
                      <ExternalIcon className="size-4" />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}
