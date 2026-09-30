import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/content/site";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-[var(--gutter)] py-4">
        <Link href="/" className="font-mono text-step--1 tracking-tight">
          {site.name}
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Main">
            <ul className="flex items-center gap-4 font-mono text-step--1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted hover:text-text">
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
    <footer className="mt-[var(--section-gap)] border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-[var(--gutter)] py-8 font-mono text-step--1 text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name} — {site.role}
        </p>
        <ul className="flex gap-4">
          {site.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                rel="me noopener noreferrer"
                target="_blank"
                className="hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`} className="hover:text-text">
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
