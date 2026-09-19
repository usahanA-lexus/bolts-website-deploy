import React from "react";
import { heroWorkshop } from "../data/photos";

export default function Hero() {
  return (
    <section id="top" className="section-pad bg-paper py-8 md:py-16">
      <div className="mb-6 md:mb-10">
        <div className="mono-label mb-4 inline-block -rotate-2 bg-ink px-3 py-1.5 text-[12px] text-paper md:text-[13px]">
          SDSU VEX U Robotics
        </div>
        <h1 className="headline text-[clamp(80px,14vw,184px)] tracking-[-0.005em]">
          <span className="misreg-red block">Founding year.</span>
          <span className="misreg-ink block">No brakes.</span>
        </h1>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div className="order-2 flex flex-col gap-7 md:order-1">
          <p className="max-w-[460px] text-base leading-relaxed text-ink md:text-xl md:leading-relaxed">
            Bolts is a brand new SDSU VEX U team. We are building the robot, the
            code, and the culture from scratch.
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

        <div className="relative order-1 h-[190px] md:order-2 md:h-[290px] md:mr-4">
          <div
            className="halftone-red absolute -bottom-2.5 -right-2.5 left-2.5 top-2.5 border-[3px] border-red md:-bottom-4 md:-right-4 md:left-4 md:top-4"
            aria-hidden="true"
          />
          <div className="duotone absolute inset-0 border-[3px] border-ink">
            <img
              src={heroWorkshop}
              alt="Bolts team working on a robot chassis in the workshop"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
