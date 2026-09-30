import { ThemeProvider } from "@/components/theme-provider";

/**
 * Runs before first paint to set the theme attribute.
 *
 * Without this, a visitor gets a flash of the wrong theme on every load. It
 * must stay inline and blocking in <head>: anything deferred to after hydration
 * is already too late.
 *
 * The attribute is always written, even when nothing is stored, because there
 * is no prefers-color-scheme fallback any more — the default has to be explicit
 * for the first painted frame to be correct.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    document.documentElement.setAttribute(
      'data-theme',
      stored === 'light' ? 'light' : 'dark'
    );
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
