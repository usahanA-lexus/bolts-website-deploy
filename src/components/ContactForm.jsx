import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Grain from "./Grain";

export default function ContactForm() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-paper">
      <Navbar />
      <main className="section-pad flex flex-1 flex-col py-10">
        <div className="mb-6 flex flex-col gap-3">
          <div className="sticker self-start">Interest form</div>
          <h1 className="headline misreg-red text-[clamp(40px,7vw,72px)]">
            Join the team.
          </h1>
        </div>
        <div className="overflow-hidden border-[3px] border-ink bg-paper shadow-[8px_8px_0_var(--ink)]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdfS_-ttWzAZgGuQmiPTEAUPUQfxvDdu_D094EoO8LnqodqCQ/viewform?usp=sharing&ouid=117489490932856860370"
            className="min-h-[calc(100vh-14rem)] w-full border-0"
            title="Bolts Robotics interest form"
            loading="lazy"
          >
            Loading form
          </iframe>
        </div>
      </main>
      <Footer />
      <Grain />
    </div>
  );
}
EOF