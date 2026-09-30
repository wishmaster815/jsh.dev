import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-[var(--gutter)] py-3.5">
        <Link href="/" className="link-rule font-mono text-step--1">
          {site.name}
        </Link>
        <div className="flex items-center gap-5 sm:gap-7">
          <nav aria-label="Main">
            <ul className="flex items-center gap-4 font-mono text-step--1 sm:gap-5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-rule text-muted">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-[var(--section-gap)] border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-[var(--gutter)] py-9 font-mono text-step--1 text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} — {site.role}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {site.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                rel="me noopener noreferrer"
                target="_blank"
                className="link-rule"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`} className="link-rule">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
