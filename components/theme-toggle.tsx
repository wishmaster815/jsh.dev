"use client";

import { MoonIcon, SunIcon } from "./icons";
import { useTheme } from "./theme-provider";

/**
 * Light/dark switch.
 *
 * A single control with role="switch" and aria-checked, so it is announced as
 * an on/off state rather than as an unlabelled button. The knob position and
 * the icon crossfade are driven by one attribute flip, so there is no
 * intermediate state to get out of sync.
 */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button 
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark theme"
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className="theme-switch"
      data-on={dark}
    >
      <span className="theme-switch__track" aria-hidden="true">
        <span className="theme-switch__knob" />
      </span>

      <span className="theme-switch__icons" aria-hidden="true">
        <SunIcon className="theme-switch__icon theme-switch__icon--sun" />
        <MoonIcon className="theme-switch__icon theme-switch__icon--moon" />
      </span>

    </button>
  );
}
