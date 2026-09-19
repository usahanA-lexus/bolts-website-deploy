import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Grain from "./Grain";
import { teamPhotos } from "../data/photos";

const batCrew = [
  { name: "Batman", photo: "Batman.jpg" },
  { name: "Robin 1", photo: "Robin1.jpg" },
  { name: "Robin 2", photo: "Robin2.jpg" },
  { name: "Robin 3", photo: "Robin3.jpg" },
  { name: "Robin 4", photo: "Robin4.jpg" },
  { name: "Robin 5", photo: "Robin5.jpg" },
  { name: "Robin 6", photo: "Robin6.jpg" },
  { name: "Robin 7", photo: "Robin7.jpg" },
  { name: "Robin 8", photo: "Robin8.jpg" },
  { name: "Robin 9", photo: "Robin9.jpg" },
  { name: "Robin 10", photo: "Robin10.jpg" },
  { name: "Robin 11", photo: "Robin11.jpg" },
  { name: "Robin 12", photo: "Robin12.jpg" },
  { name: "Robin 13", photo: "Robin13.jpg" },
];

export default function WhimsicalPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSpinning(true);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              setIsSpinning(false);
            }, 1800);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="section-pad py-12 md:py-16" ref={sectionRef}>
        <div className="mb-10 flex flex-col items-start gap-4">
          <div className="sticker">Whimsical</div>
          <h1 className="headline misreg-red text-[clamp(48px,9vw,96px)]">
            Holy Whimsical!
          </h1>
          <p className="headline m-0 text-[clamp(28px,5vw,48px)] text-red">
            Holy Bat Crew!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {batCrew.map((member) => {
            const src = teamPhotos[member.photo];
            return (
              <figure
                key={member.name}
                className="m-0 flex flex-col items-center gap-3 border-[3px] border-ink bg-paper p-4 shadow-[5px_5px_0_var(--ink)]"
              >
                <div
                  className={`duotone h-24 w-24 overflow-hidden rounded-full border-[3px] border-ink ${
                    isSpinning ? "animate-spin-decelerate" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="text-center text-sm font-semibold">
                  {member.name}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </main>
      <Footer />
      <Grain />
    </div>
  );
}
