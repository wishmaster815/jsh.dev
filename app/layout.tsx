import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Providers, ThemeScript } from "@/components/theme-script";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Monospace throughout. The reference is mono-dominant, including headings and
 * body copy, and that is the character of the design — so there is one family
 * rather than a display/body pair.
 */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.positioning,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    /**
     * suppressHydrationWarning is required, not cosmetic.
     *
     * ThemeScript sets `data-theme` on <html> before first paint, which is the
     * only way to avoid a flash of the wrong theme. The server cannot know the
     * stored preference, so it renders no attribute — and React's client render
     * therefore expects none either. Without this, hydration reports a mismatch
     * for every visitor who has a theme stored.
     *
     * The DOM is already correct before React runs, so there is nothing to
     * patch: the attribute is intentionally left as the script set it.
     */
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${plexMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
        {/*
          Scroll-reveal starts its children at opacity 0 and reveals them from
          JavaScript. Without this, a visitor whose script fails or is blocked
          would see four empty sections. Pin everything visible when scripting
          is off.
        */}
        <noscript>
          <style>{`.reveal > * { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
