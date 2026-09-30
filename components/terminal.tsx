"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

type Line =
  | { kind: "command"; text: string }
  | { kind: "output"; text: string }
  | { kind: "status"; text: string };

/**
 * Terminal readout.
 *
 * This is a content device, not a navigation shell: every line is real data from
 * the content schema, so it cannot drift from the rest of the site. Nothing
 * here is clickable and nothing depends on it for navigation.
 *
 * Under prefers-reduced-motion the whole block is shown at once, with no
 * typing and no blinking cursor.
 */

const STACK_TOOLS = site.stack
  .flatMap((layer) => layer.techs.map((tech) => tech.name))
  .filter(Boolean);

const LINES: Line[] = [
  { kind: "command", text: "whoami" },
  { kind: "output", text: `${site.name} — ${site.role.toLowerCase()}` },
  { kind: "command", text: "cat focus.txt" },
  {
    kind: "output",
    text: `Full stack across ${site.stack
      .map((layer) => layer.name.toLowerCase())
      .join(", ")}.`,
  },
  { kind: "command", text: "cat stack.txt" },
  { kind: "output", text: STACK_TOOLS.slice(0, 6).join(", ") },
  { kind: "command", text: "status --short" },
  {
    kind: "status",
    text: site.availability ?? "open to interesting work",
  },
];

const LINE_MS = 460;
const COMMAND_MS = 620;

export function Terminal() {
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      // Deferred rather than set inline: setting state synchronously in the
      // effect body triggers a cascading render.
      const t = setTimeout(() => setVisible(LINES.length), 0);
      return () => clearTimeout(t);
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let at = 0;

    const step = (index: number) => {
      if (cancelled) return;
      const line = LINES[index];

      if (line.kind === "command") {
        // Type the command, then commit the line.
        for (let i = 1; i <= line.text.length; i++) {
          timers.push(
            setTimeout(() => {
              if (!cancelled) setTyped(line.text.slice(0, i));
            }, at + i * 26),
          );
        }
        at += line.text.length * 26 + COMMAND_MS;
        timers.push(
          setTimeout(() => {
            if (!cancelled) {
              setTyped("");
              setVisible(index + 1);
            }
          }, at),
        );
      } else {
        at += LINE_MS;
        timers.push(
          setTimeout(() => {
            if (!cancelled) setVisible(index + 1);
          }, at),
        );
      }

      if (index + 1 < LINES.length) {
        timers.push(setTimeout(() => step(index + 1), at));
      }
    };

    timers.push(setTimeout(() => step(0), 420));

    return () => {
      cancelled = true;
      for (const t of timers) clearTimeout(t);
    };
  }, []);

  const done = visible >= LINES.length;

  return (
    <div className="term">
      <div className="term__bar">
        <span className="term__dots" aria-hidden="true">
          <span className="term__dot term__dot--r" />
          <span className="term__dot term__dot--y" />
          <span className="term__dot term__dot--g" />
        </span>
        <span className="term__title">{site.name.split(" ")[0].toLowerCase()} — zsh</span>
      </div>

      <div className="term__body" role="img" aria-label={describe()}>
        {LINES.slice(0, visible).map((line, i) => (
          <p
            key={`${line.kind}-${i}`}
            className={
              line.kind === "command"
                ? "term__line term__line--cmd"
                : line.kind === "status"
                  ? "term__line term__line--ok"
                  : "term__line"
            }
          >
            {line.kind === "command" ? (
              <>
                <span className="term__prompt" aria-hidden="true">
                  $
                </span>{" "}
                {line.text}
              </>
            ) : line.kind === "status" ? (
              <>
                <span className="term__prompt" aria-hidden="true">
                  $
                </span>{" "}
                <span className="term__ok" aria-hidden="true">
                  ●{" "}
                </span>
                {line.text}
              </>
            ) : (
              line.text
            )}
          </p>
        ))}

        {/* The command currently being typed, plus a resting cursor. */}
        {!done ? (
          <p className="term__line term__line--cmd">
            <span className="term__prompt" aria-hidden="true">
              $
            </span>{" "}
            {typed}
            <span className="term__caret" aria-hidden="true" />
          </p>
        ) : (
          <p className="term__line term__line--cmd">
            <span className="term__prompt" aria-hidden="true">
              $
            </span>{" "}
            <span className="term__caret term__caret--rest" aria-hidden="true" />
          </p>
        )}
      </div>
    </div>
  );
}

/** Text alternative for the whole readout, since it is decorative motion. */
function describe() {
  return `${site.name}, ${site.role}. Works across ${site.stack
    .map((l) => l.name.toLowerCase())
    .join(", ")}. ${site.availability ?? "Open to interesting work"}.`;
}
