"use client";

import { useState } from "react";
import { MailIcon } from "./icons";

/**
 * Email with copy-to-clipboard.
 *
 * Copying is offered alongside opening a mail client, because pasting an
 * address into a form is the most common way a visitor uses it. Falls back to
 * selecting the text if the clipboard API is unavailable or blocked, which
 * happens over plain HTTP.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState<"idle" | "done" | "fail">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied("done");
    } catch {
      setCopied("fail");
    }
    setTimeout(() => setCopied("idle"), 2200);
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-2">
      <a
        href={`mailto:${email}`}
        className="link text-step-1 text-head"
      >
        {email}
      </a>

      <button
        type="button"
        onClick={copy}
        className="flex items-center gap-2 rounded-md border border-line px-2.5 py-1 text-step--2 text-muted transition-colors duration-200 hover:border-head hover:text-head"
      >
        <MailIcon className="size-3.5" />
        {copied === "done"
          ? "Copied"
          : copied === "fail"
            ? "Copy failed"
            : "Copy"}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {copied === "done"
          ? "Email address copied to clipboard"
          : copied === "fail"
            ? "Could not copy. Select the address and copy it manually."
            : ""}
      </span>
    </span>
  );
}
