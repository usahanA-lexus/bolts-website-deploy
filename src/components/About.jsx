import React from "react";
import boltsLandscape from "./bolts logo landscape.png";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 m-3 rounded-2xl bg-boltsBlack px-3 py-8 text-center text-boltsWhite shadow-md sm:m-4 sm:px-4 sm:py-10"
    >
      <header className="mx-auto mb-5 max-w-3xl">
        <img
          src={boltsLandscape}
          alt="Bolts Robotics"
          className="mx-auto h-auto w-full max-w-[180px] object-contain sm:max-w-[200px] md:max-w-[220px]"
        />
      </header>
      <div className="mx-auto max-w-3xl space-y-4 text-left sm:text-center">
        <p className="text-base font-light leading-relaxed">
          Bolts is a brand new SDSU VEX U robotics team, which means we are currently in our
          &ldquo;build everything from nothing&rdquo; era.
        </p>
        <p className="text-base font-light leading-relaxed">
          We have not competed yet, and that is exactly the point. Right now, we are designing
          systems, writing code, breaking things, fixing them, and learning faster than any
          textbook could ever teach.
        </p>
        <p className="text-base font-light leading-relaxed">
          This is not a casual club. It is for people who want to get their hands dirty with
          engineering, push through failure, and show up ready to compete when the season hits.
        </p>
        <p className="text-base font-light leading-relaxed">
          We are early, we are hungry, and we are building something that is going to last.
        </p>
      </div>
    </section>
  );
}
