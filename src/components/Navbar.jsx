import React, { useEffect, useId, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./logo2.png";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Calendar", to: "/#calendar" },
  { label: "Roster", to: "/#roster" },
  { label: "Gallery", to: "/gallery" },
  { label: "Whimsical", to: "/whimsical" },
];

function resolveHash(hash) {
  if (hash === "#team") return "#roster";
  if (hash === "#contact") return "#join";
  return hash;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const hash = resolveHash(location.hash);
    if (!hash || location.pathname !== "/") return;
    if (hash !== location.hash) {
      navigate({ pathname: "/", hash }, { replace: true });
      return;
    }
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location, navigate]);

  function go(to) {
    setOpen(false);
    if (to.startsWith("/#")) {
      const hash = to.slice(1);
      if (location.pathname === "/") {
        navigate({ pathname: "/", hash });
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        navigate({ pathname: "/", hash });
      }
      return;
    }
    navigate(to);
  }

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper">
      <div className="section-pad flex h-16 items-center justify-between md:h-[84px]">
        <Link
          to="/"
          className="flex flex-shrink-0 items-center overflow-hidden rounded-sm border-[2px] border-ink bg-ink p-0.5 no-underline"
          title="Bolts Robotics Home"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Bolts Robotics logo"
            width={64}
            height={64}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => go(link.to)}
              className="bg-transparent p-0 text-[15px] font-semibold text-ink"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go("/#join")}
            className="border-[3px] border-ink bg-red px-5 py-2.5 text-[15px] font-semibold text-white shadow-[4px_4px_0_var(--ink)]"
          >
            Join the team
          </button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center bg-transparent text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t-[3px] border-ink bg-paper px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => go(link.to)}
                className="bg-transparent px-2 py-3 text-left text-base font-semibold text-ink"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go("/#join")}
              className="mt-2 border-[3px] border-ink bg-red px-5 py-3 text-base font-semibold text-white shadow-[4px_4px_0_var(--ink)]"
            >
              Join the team
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
