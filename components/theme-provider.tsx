"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

export type Theme = "system" | "light" | "dark";

const STORAGE_KEY = "theme";

/* ---------------------------------------------------------------------------
   Theme lives in localStorage and the OS media query, both external to React.
   useSyncExternalStore reads them without an effect, so there is no setState
   inside an effect body and no cascading render on mount.
   --------------------------------------------------------------------------- */

const listeners = new Set<() => void>();
const darkQuery = "(prefers-color-scheme: dark)";

function emit() {
  for (const listener of listeners) listener();
}

function readStored(): Theme {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "light" || raw === "dark" || raw === "system") return raw;
  } catch {
    // localStorage blocked — system is a safe default
  }
  return "system";
}

function applyToDocument(theme: Theme) {
  // "system" removes the attribute so the stylesheet's media query decides.
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  const mq = window.matchMedia(darkQuery);
  mq.addEventListener("change", onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
    mq.removeEventListener("change", onStoreChange);
  };
}

/** Server render and hydration both start on "system" so markup agrees. */
function getServerSnapshot(): Theme {
  return "system";
}

function getSnapshot(): Theme {
  return readStored();
}

function systemResolved(): "light" | "dark" {
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

/** Resolved theme has to come from a store too, since it reads the OS query. */
function getResolvedSnapshot(): "light" | "dark" {
  return systemResolved();
}

function getResolvedServerSnapshot(): "light" | "dark" {
  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const system = useSyncExternalStore(
    subscribe,
    getResolvedSnapshot,
    getResolvedServerSnapshot,
  );

  const resolved: "light" | "dark" = theme === "system" ? system : theme;

  const setTheme = useCallback((next: Theme) => {
    applyToDocument(next);
    try {
      if (next === "system") {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, next);
      }
    } catch {
      // preference still applies for this session
    }
    emit();
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, resolved }),
    [theme, setTheme, resolved],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolved: "light" | "dark";
} | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
