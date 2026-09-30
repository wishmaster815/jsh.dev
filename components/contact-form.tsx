"use client";

import { useState } from "react";
import { SendIcon } from "./icons";

type Errors = { name?: string; email?: string; message?: string };
type Status = "idle" | "sending" | "sent" | "failed";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FIELD =
  "w-full rounded-lg border border-line bg-panel-2 px-4 py-3 text-step-0 text-text placeholder:text-dim transition-colors focus:border-head focus:outline-none";

export function ContactForm({ recipient }: { recipient: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Name is required";
    if (!email) next.email = "Email is required";
    else if (!EMAIL.test(email)) next.email = "Enter a valid email address";
    if (!message) next.message = "Message is required";
    return next;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("failed");
      setNotice("Fix the highlighted fields.");
      return;
    }

    setStatus("sending");
    setNotice("");

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          website: String(data.get("website") ?? ""),
        }),
      });

      const result = (await response.json()) as {
        ok: boolean;
        errors?: Errors;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) setErrors(result.errors);
        setStatus("failed");
        setNotice("That did not send. Try emailing directly instead.");
        return;
      }

      // No provider is wired up server-side, so compose a pre-filled draft.
      // This is what makes the form work with zero configuration.
      const href = `mailto:${recipient}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${name}`,
      )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      window.location.href = href;

      form.reset();
      setStatus("sent");
      setNotice("Opening your email client with the message ready to send.");
    } catch {
      setStatus("failed");
      setNotice("Network error. Email me directly instead.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="panel p-6 sm:p-8"
      aria-labelledby="contact-form-heading"
    >
      <h3 id="contact-form-heading" className="text-step-2 text-text">
        Send a Message
      </h3>

      <div className="mt-6 flex flex-col gap-5">
        <Field
          id="name"
          name="name"
          label="Name"
          placeholder="Your Name"
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Email Address"
          error={errors.email}
          autoComplete="email"
        />
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            placeholder="Your Message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${FIELD} resize-y ${
              errors.message ? "border-error" : ""
            }`}
          />
          {errors.message ? (
            <p id="message-error" role="alert" className="mt-1.5 text-step--2 text-error">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-ok px-5 py-3 text-step-0 font-semibold text-on-head transition-transform duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
      >
        <SendIcon />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className="mt-3 min-h-[1.5em] text-step--2 text-muted"
      >
        {notice}
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${FIELD} ${error ? "border-error" : ""}`}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-step--2 text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
