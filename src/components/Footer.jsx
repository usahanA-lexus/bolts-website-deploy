import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo2.png";
import { contact } from "../data/contact";

export default function Footer() {
  return (
    <footer className="section-pad flex min-h-[248px] flex-col justify-between bg-ink py-10 text-paper md:py-16">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-16">
        <div className="flex flex-col gap-3.5">
          <Link to="/" className="inline-flex w-fit items-center no-underline">
            <img
              src={logo}
              alt="Bolts Robotics logo"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
            />
          </Link>
          <p className="m-0 text-base text-muted-ink">
            SDSU VEX U robotics team. San Diego, California.
          </p>
        </div>

        <div className="flex gap-12 md:gap-16">
          <div className="flex flex-col gap-2.5">
            <a href="/#about" className="text-[15px] text-paper no-underline">
              About
            </a>
            <a href="/#calendar" className="text-[15px] text-paper no-underline">
              Calendar
            </a>
            <a href="/#roster" className="text-[15px] text-paper no-underline">
              Roster
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <Link to="/gallery" className="text-[15px] text-paper no-underline">
              Gallery
            </Link>
            <a
              href={`mailto:${contact.email}`}
              className="text-[15px] text-paper no-underline"
            >
              {contact.email}
            </a>
            <a
              href={contact.linktree}
              className="text-[15px] text-paper no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Linktree
            </a>
            <a href={contact.discord} target="_blank" rel="noreferrer" className="text-[15px] text-paper no-underline">Discord</a>
            <Link to="/contact-form" className="text-[15px] text-paper no-underline">Contact / interest form</Link>
          </div>
        </div>
      </div>

      <div className="mt-10 font-mono text-[12px] tracking-wide text-muted-ink">
        © 2026 Bolts Robotics Team
      </div>
    </footer>
  );
}
