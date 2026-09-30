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
  icons: {
    icon: "/js-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${plexMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
        <noscript>
          <style>
            {`.reveal > * { opacity: 1 !important; transform: none !important; }`}
          </style>
        </noscript>
      </head>

      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}