import React from "react";
import { Link } from "react-router-dom";

const rows = [
  {
    label: "Meets",
    value: "GBMs Fridays at 11:30 AM, plus your team each week.",
  },
  {
    label: "Where",
    value: "GMCS 549 (GBMs), GMCS 538 (teams).",
  },
  {
    label: "Commitment",
    value: "4 hours a week.",
  },
  {
    label: "Open to",
    value: "All majors.",
  },
];

export default function Join() {
  return (
    <section
      id="join"
      className="section-pad scroll-mt-24 border-t-[3px] border-ink bg-red py-14 md:py-[88px]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <h2 className="headline misreg-paper m-0 text-[clamp(56px,10vw,152px)] text-ink">
          Get your hands dirty.
        </h2>

        <div className="flex flex-col gap-6 border-[3px] border-ink bg-ink p-6 text-paper shadow-[10px_10px_0_var(--paper)] md:p-9">
          <div className="flex flex-col">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-2 border-t-2 border-dashed border-paper py-3 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-3"
              >
                <div className="mono-label text-[12px] text-red-on-ink">
                  {row.label}
                </div>
                <div className="text-base">{row.value}</div>
              </div>
            ))}
            <div className="border-b-2 border-dashed border-paper" />
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact-form"
              className="inline-flex items-center justify-center border-[3px] border-paper bg-paper px-6 py-3.5 text-base font-semibold text-ink no-underline"
            >
              Fill out the interest form
            </Link>
            <a
              href="mailto:boltsrobotics@gmail.com"
              className="inline-flex items-center justify-center border-[3px] border-paper px-6 py-3.5 text-base font-semibold text-paper no-underline"
            >
              Email the team
            </a>
          </div>

          <p className="m-0 text-[15px] leading-snug text-paper">
            We are looking for sponsors.{" "}
            <a
              href="mailto:boltsrobotics@gmail.com"
              className="text-red-on-ink underline"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
EOF