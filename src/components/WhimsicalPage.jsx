import React, { useEffect, useRef, useState } from "react";
import Navbar from './Navbar'

// Batman Crew!
import Batman from "../assets/team/Batman.png";
import Robin1 from "../assets/team/Robin1.png";
import Robin2 from "../assets/team/Robin2.png";
import Robin3 from "../assets/team/Robin3.png";
import Robin4 from "../assets/team/Robin4.png";
import Robin5 from "../assets/team/Robin5.png";
import Robin6 from "../assets/team/Robin6.png";
import Robin7 from "../assets/team/Robin7.png";
import Robin8 from "../assets/team/Robin8.png";

const batCrew =
[
  { name: "Batman", img: Batman },
  { name: "Robin 1", img: Robin1 },
  { name: "Robin 2", img: Robin2 },
  { name: "Robin 3", img: Robin3 },
  { name: "Robin 4", img: Robin4 },
  { name: "Robin 5", img: Robin5 },
  { name: "Robin 6", img: Robin6 },
  { name: "Robin 7", img: Robin7 },
  { name: "Robin 8", img: Robin8 },
];

function TeamMembersGrid({ members, title, isSpinning })
{
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-3 text-center text-boltsRed">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {members.map((m, i) => (
          <div
            key={m.name}
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 shadow-md bg-white"
          >
            <div
              className={`w-24 h-24 bg-gray-100 text-boltsBlack rounded-full flex items-center justify-center mb-2 overflow-hidden ${
                isSpinning ? "animate-spin-decelerate" : ""
              }`}
            >
              <img
                src={m.img}
                alt={m.name}
                className={
                  "w-full h-full " +
                  (m.name === "Robin 8"
                    ? "object-contain object-bottom"
                    : "object-cover")
                }
              />
            </div>
            <span className="font-semibold">{m.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhimsicalPage()
{
  const [isSpinning, setIsSpinning] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() =>
    {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver((entries) =>
      {
      entries.forEach((entry) =>
      {
        if (entry.isIntersecting)
        {
          setIsSpinning(true);
          if (timeoutRef.current)
          {
            clearTimeout(timeoutRef.current);
          }
          timeoutRef.current = setTimeout(() =>
          {
            setIsSpinning(false);
          }, 1800);
        }
      });
    }, { threshold: 0.10 });

    observer.observe(sectionEl);
    return () =>
      {
      observer.disconnect();
      if (timeoutRef.current)
      {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <main className="bg-boltsWhite font-sans min-h-screen scroll-smooth">
      <Navbar />
      <section
        className="py-16 px-4 bg-boltsWhite text-boltsBlack space-y-5 pt-24"
        ref={sectionRef}
      >
        <h2 className="text-2xl font-bold text-boltsBlack mb-8 text-center">
          Holy Whimsical!
        </h2>
        <TeamMembersGrid
          members={batCrew}
          title="Holy Bat Crew!"
          isSpinning={isSpinning}
        />
      </section>
    </main>
  );
}