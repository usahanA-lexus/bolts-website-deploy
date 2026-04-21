import React from "react";
import { Link } from "react-router-dom";

/** Your public Linktree (all socials in one place). */
const LINKTREE_URL = "https://linktr.ee/boltsrobotics";

/** Optional Discord invite; omit icon when empty. */
const DISCORD_INVITE_URL = "";

function IconMail({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconDiscord({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function IconExternal({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full bg-boltsRed py-16 text-boltsWhite shadow-md"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-lg sm:px-6">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Contact Us</h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:boltsrobotics@gmail.com"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-boltsRed shadow-md transition hover:bg-gray-100"
            aria-label="Email Bolts Robotics"
          >
            <IconMail className="h-6 w-6" />
          </a>
          {DISCORD_INVITE_URL ? (
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-boltsRed shadow-md transition hover:bg-gray-100"
              aria-label="Join our Discord"
            >
              <IconDiscord className="h-6 w-6" />
            </a>
          ) : null}
          <a
            href={LINKTREE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-boltsRed shadow-md transition hover:bg-gray-100"
            aria-label="Bolts Robotics Linktree (social links)"
          >
            <IconExternal className="h-6 w-6" />
          </a>
        </div>

        <p className="mt-4 text-sm">
          <a
            href="mailto:boltsrobotics@gmail.com"
            className="font-mono underline decoration-white/80 hover:text-red-100"
          >
            boltsrobotics@gmail.com
          </a>
        </p>

        <Link
          to="/contact-form"
          className="mt-6 inline-block rounded bg-boltsWhite px-6 py-2 text-sm font-semibold tracking-wide text-boltsRed transition hover:bg-gray-200"
        >
          Interest form
        </Link>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Bolts Robotics Team</p>
      </div>
    </section>
  );
}
