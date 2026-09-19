import React from "react";
import { heroWorkshop } from "../data/photos";

export default function Hero() {
  return (
    <section
      id="top"
      className="section-pad relative z-0 overflow-hidden bg-paper py-8 md:py-12"
    >
      <div className="mb-6 md:mb-8">
        <div className="mono-label mb-4 inline-block -rotate-2 bg-ink px-3 py-1.5 text-[12px] text-paper md:text-[13px]">
          SDSU VEX U Robotics
        </div>
        <h1 className="headline text-[clamp(64px,11vw,140px)] tracking-[-0.005em]">
          <span className="misreg-red block">Founding year.</span>
          <span className="misreg-ink block">No brakes.</span>
        </h1>
      </div>

      <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10">
        <div className="flex flex-col gap-6">
          <p className="max-w-[460px] text-base leading-relaxed text-ink md:text-xl md:leading-relaxed">
            Bolts Robotics is the SDSU VEX U team. We are building the robot,
            the code, and the culture from scratch at San Diego State.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#join"
              className="inline-flex min-h-[52px] items-center justify-center border-[3px] border-ink bg-red px-7 py-4 text-base font-semibold text-white no-underline shadow-[6px_6px_0_var(--ink)] md:text-[17px]"
            >
              Join the team
            </a>
            <a
              href="#calendar"
              className="inline-flex min-h-[52px] items-center justify-center border-[3px] border-ink bg-paper px-7 py-4 text-base font-semibold text-ink no-underline shadow-[6px_6px_0_var(--ink)] md:text-[17px]"
            >
              See the calendar
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-[320px] justify-self-start md:max-w-[360px] md:justify-self-end">
          <div
            className="halftone-red absolute -bottom-2 -right-2 left-2 top-2 -z-10 border-[3px] border-red"
            aria-hidden="true"
          />
          <div className="duotone relative aspect-[4/3] w-full overflow-hidden border-[3px] border-ink">
            <img
              src={heroWorkshop}
              alt="Bolts team working on a robot chassis in the workshop"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
