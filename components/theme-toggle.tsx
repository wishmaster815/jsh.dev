"use client";

import { useTheme, type Theme } from "./theme-provider";

/**
 * Three-state control. Rendered as buttons with aria-pressed so each option is
 * announced and reachable by keyboard, rather than as a bare toggle that would
 * discard the system option entirely.
 */
const OPTIONS: { value: Theme; label: string; title: string }[] = [
  { value: "light", label: "Lt", title: "Light" },
  { value: "system", label: "Au", title: "Match system" },
  { value: "dark", label: "Dk", title: "Dark" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <fieldset className="flex items-center gap-1.5">
      <legend className="sr-only">Colour theme</legend>
      {OPTIONS.map((option) => {
        const active = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            aria-pressed={active}
            title={option.title}
            className={`label px-1.5 py-0.5 transition-colors ${
              active ? "text-accent" : "hover:text-text"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </fieldset>
  );
}
