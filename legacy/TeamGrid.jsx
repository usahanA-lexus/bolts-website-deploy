import React, { useEffect, useRef, useState } from "react";

import Leader from "../assets/team/Aiden.png";
import Member1 from "../assets/team/Manju!!.png";
import Member2 from "../assets/team/Nate.png";
import Member3 from "../assets/team/Bryce.png";
import Member4 from "../assets/team/Eric.png";
import Member5 from "../assets/team/Jesus.png";
import Member6 from "../assets/team/Nathan.png";
import Member7 from "../assets/team/Zachary.png";
import Member8 from "../assets/team/Alexus.png";
import Member9 from "../assets/team/Alan.png";
import Member10 from "../assets/team/Chris.png";
import Member11 from "../assets/team/Melaine.png";
import Member12 from "../assets/team/Munazza.png";
import Member13 from "../assets/team/Rachel.png";

const actualMembers = [
  { name: "Aiden", img: Leader, major: "Mechanical Engineering" },
  { name: "Manju", img: Member1 },
  { name: "Nate", img: Member2, major: "Computer Science" },
  { name: "Bryce", img: Member3 },
  { name: "Eric", img: Member4, major: "Computer Science" },
  { name: "Jesus", img: Member5, major: "Computer Science" },
  { name: "Nathan", img: Member6, major: "Computer Science" },
  { name: "Zachary", img: Member7, major: "Computer Science" },
  { name: "Alexus", img: Member8, major: "Computer Science" },
  { name: "Alan", img: Member9, major: "Math"},
  { name: "Chris", img: Member10, major:"Mechanical Engineering" },
  { name: "Melanie", img: Member11, major: "Data Science"},
  { name: "Munazza", img: Member12, major:"Computer Engineering" },
  { name: "Rachel", img: Member13, major: "Computer Science" },
];

function TeamMembersGrid({ members, title, isSpinning }) {
  return (
    <div className="mb-8">
      {title ? (
        <h3 className="mb-3 text-center text-xl font-semibold text-boltsRed">
          {title}
        </h3>
      ) : null}

      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-3 shadow-sm"
          >
            <div
              className={`w-24 h-24 bg-gray-100 text-boltsBlack rounded-full flex items-center justify-center mb-2 overflow-hidden ${
                isSpinning ? "animate-spin-decelerate" : ""
              }`}
            >
              {m.img ? (
                <img
                  src={m.img}
                  alt={m.name}
                  className={
                    "w-full h-full " +
                    (m.name === "Alexus"
                      ? "object-contain object-bottom transform origin-bottom scale-75"
                      : "object-cover")
                  }
                />
              ) : null}
          </div>
            <span className="font-medium">{m.name}</span>
            {m.major ? (
              <span className="block text-sm text-gray-500">{m.major}</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamGrid() {
  const [isSpinning, setIsSpinning] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSpinning(true);
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="team"
      className="scroll-mt-24 py-16 px-4 bg-boltsWhite text-boltsBlack space-y-5"
      ref={sectionRef}
    >
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-boltsBlack sm:text-4xl">
        Meet the Team
      </h2>
      <TeamMembersGrid members={actualMembers} isSpinning={isSpinning} />
    </section>
  );
}
