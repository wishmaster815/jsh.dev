import { ThemeProvider } from "@/components/theme-provider";

/**
 * Runs before first paint to set the theme attribute.
 *
 * Without this, a dark-mode visitor gets a white flash on every load. It must
 * stay inline and blocking in <head>: anything deferred to after hydration is
 * already too late.
 *
 * Three states. "system" removes the attribute so the CSS media query decides,
 * which is why the stylesheet treats "no attribute" as system.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {
    /* localStorage blocked: fall through to the system preference */
  }
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
