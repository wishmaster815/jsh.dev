"use client";

import { Mascot as MascotBase, type MascotProps } from "page-mascot";

/**
 * Client boundary for page-mascot.
 *
 * The package ships no "use client" directive, yet it uses useState, useEffect,
 * useRef, window and addEventListener, and follows the pointer and scroll
 * position. Rendering it from a Server Component therefore fails or does
 * nothing. This wrapper supplies the missing boundary rather than adding
 * "use client" to page.tsx, which would opt the whole page out of Server
 * Components and send all its content to the browser.
 *
 * Default paths point at the sheets in public/mascots. Pass nothing and it
 * works; override either to relocate the files.
 */
export function Mascot({
  directions = "/mascots/crt-directions.webp",
  reactions = "/mascots/crt-reactions.webp",
  label = "CRT mascot",
  ...props
}: Partial<MascotProps>) {
  return (
    <MascotBase
      directions={directions}
      reactions={reactions}
      // The package builds its accessible name as `Boop the ${label}`, so this
      // has to stay a noun phrase. A sentence here reads as
      // "Boop the An illustrated mascot that looks toward your cursor".
      label={label}
      {...props}
    />
  );
}