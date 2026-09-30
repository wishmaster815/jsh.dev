"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

/**
 * Two states only: light and dark. There is deliberately no "system" option,
 * so a visitor who lands on a light-mode OS still sees the site's dark-first
 * design until they choose otherwise.
 *
 * The preference lives in localStorage, which is external to React, so it is
 * read with useSyncExternalStore rather than an effect. That keeps setState out
 * of the effect body and avoids a cascading render on mount.
 */

export type Theme = "light" | "dark";

/** Dark is the design's native state, so it is the default. */
export const DEFAULT_THEME: Theme = "dark";

const STORAGE_KEY = "theme";

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function readStored(): Theme {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "light" || raw === "dark") return raw;
  } catch {
    // localStorage blocked — fall back to the default
  }
  return DEFAULT_THEME;
}

function applyToDocument(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

/** No external source to watch now, so subscribe only tracks local listeners. */
function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

/** Server render and hydration must agree, so both report the default. */
function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

function getSnapshot(): Theme {
  return readStored();
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    applyToDocument(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // preference still applies for this session
    }
    emit();
  }, []);

  const toggle = useCallback(() => {
    setTheme(readStored() === "dark" ? "light" : "dark");
  }, [setTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggle }),
    [theme, setTheme, toggle],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
} | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
