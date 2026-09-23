import React from "react";

const cards = [
  {
    title: "Engineering",
    body: "We build the robots ourselves using VEX materials.",
    tone: "paper",
  },
  {
    title: "Programming",
    body: "We write how the robot moves and thinks.",
    tone: "red",
  },
  {
    title: "Teamwork",
    body: "Mechanical, computer science, math, data science, and computer engineering students on one roster, building together.",
    tone: "ink",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative z-10 scroll-mt-24 overflow-hidden border-t-[3px] border-ink bg-paper py-12 md:py-[88px]"
    >
      <div className="mb-8 flex flex-col gap-4 md:mb-12 md:gap-5">
        <div className="sticker">01 / About</div>
        <h2 className="headline misreg-red text-[clamp(48px,8vw,96px)]">
          What we do
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-10">
        {cards.map((card) => {
          const isRed = card.tone === "red";
          const isInk = card.tone === "ink";
          return (
            <article
              key={card.title}
              className={`flex flex-col gap-3 border-[3px] border-ink p-5 md:gap-3.5 md:p-7 ${
                isRed
                  ? "bg-red text-white shadow-[8px_8px_0_var(--ink)]"
                  : isInk
                    ? "bg-ink text-paper shadow-[8px_8px_0_var(--red)]"
                    : "bg-paper text-ink shadow-[8px_8px_0_var(--ink)]"
              }`}
            >
              <div
                className={`mono-label text-[12px] md:text-[13px] ${
                  isRed
                    ? "text-white"
                    : isInk
                      ? "text-red-on-ink"
                      : "text-red-text"
                }`}
              >
                {card.title}
              </div>
              <p className="m-0 text-[17px] leading-snug md:text-xl md:leading-relaxed">
                {card.body}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
