"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

/**
 * Centred footer matching the reference: a one-line note, a credit line, a
 * GitHub link paired with scroll-to-top, then the copyright.
 *
 * The top button only appears once the visitor has scrolled past the hero, so
 * it is available when it is useful and absent when it is not.
 */
export function SiteFooter() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  const github = site.links.find((l) => /github\.com/.test(l.href));
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-6xl px-(--gutter)">
      <div className="mt-(--section-gap) flex flex-col items-center gap-4 border-t border-line py-9 text-center">
        {/* <p className="label max-w-[52ch] text-pretty">
          Built with modern web technologies and a focus on clean and performant
          code
        </p> */}

        <p className="label">
          Made with <span aria-hidden="true">♥</span>
          <span className="sr-only">love</span> and coffee by {site.name}
        </p>

        <ul className="flex items-center gap-4">
          {github ? (
            <li>
              <a
                href={github.href}
                rel="me noopener noreferrer"
                target="_blank"
                className="label link"
              >
                GitHub
              </a>
            </li>
          ) : null}
          <li aria-hidden="true" className="label text-line-2">
            &middot;
          </li>
          <li>
            <button
              type="button"
              onClick={toTop}
              className={`label link transition-opacity duration-200 ${
                showTop ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              tabIndex={showTop ? 0 : -1}
              aria-hidden={!showTop}
            >
              Scroll to top
            </button>
          </li>
        </ul>

        <p className="label">
          &copy; {year} &middot; All rights reserved
        </p>
      </div>
    </footer>
  );
}
