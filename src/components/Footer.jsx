import React from "react";
import { Link } from "react-router-dom";
import { BoltIcon } from "./Grain";

export default function Footer() {
  return (
    <footer className="section-pad flex min-h-[248px] flex-col justify-between bg-ink py-10 text-paper md:py-16">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-16">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <BoltIcon size={30} />
            <span className="headline text-[34px] tracking-[0.04em]">Bolts</span>
          </div>
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
              href="mailto:boltsrobotics@gmail.com"
              className="text-[15px] text-paper no-underline"
            >
              boltsrobotics@gmail.com
            </a>
            <a
              href="https://linktr.ee/boltsrobotics"
              className="text-[15px] text-paper no-underline"
              target="_blank"
              rel="noreferrer"
            >
              Linktree
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 font-mono text-[12px] tracking-wide text-muted-ink">
        © 2026 Bolts Robotics Team
      </div>
    </footer>
  );
}
