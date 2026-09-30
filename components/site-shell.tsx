import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-[var(--gutter)] py-5">
        <Link
          href="/"
          className="font-mono text-step-0 font-medium text-accent"
        >
          dev
        </Link>

        <div className="flex items-center gap-6">
          <nav aria-label="Main">
            <ul className="hidden items-center gap-7 sm:flex">
              {NAV.map((item) => (
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
      </div>
      <div className="mx-auto max-w-5xl px-[var(--gutter)]">
        <div className="h-px bg-line" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-[var(--section-gap)]">
      <div className="mx-auto max-w-5xl px-[var(--gutter)]">
        <div className="h-px bg-line" />
        <div className="flex flex-col gap-3 py-9 sm:flex-row sm:items-center sm:justify-between">
          <p className="label">
            Built with Next.js — no template
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="label hover:text-text">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
