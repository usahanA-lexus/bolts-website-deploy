import React, { useEffect, useRef, useState } from "react";
import roster from "../data/roster.json";
import site from "../data/site.json";
import { teamPhotos } from "../data/photos";

const portraitClasses = {
  Alexus: "object-contain object-bottom origin-bottom scale-75",
  Paul: "object-cover object-[42%_center]",
  John: "object-cover object-center origin-[53%_45%] scale-[1.6]",
};

function Badges({ member }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {member.lead ? (
        <span className="mono-label border-2 border-ink bg-red px-1.5 py-0.5 text-[10px] text-white">
          Team lead
        </span>
      ) : null}
      {member.founder ? (
        <span className="mono-label border-2 border-ink bg-paper px-1.5 py-0.5 text-[10px] text-ink">
          Founder
        </span>
      ) : null}
    </div>
  );
}

function MemberCard({ member, isSpinning }) {
  const src = teamPhotos[member.photo];

  return (
    <article className="flex flex-col overflow-hidden border-[3px] border-ink bg-paper text-ink shadow-[5px_5px_0_var(--ink)]">
      <div
        className={`aspect-square w-full overflow-hidden border-b-[3px] border-ink ${
          isSpinning ? "animate-spin-decelerate" : ""
        }`}
      >
        {src ? (
          <img
            src={src}
            alt={member.name}
            width={400}
            height={400}
            className={`h-full w-full ${portraitClasses[member.name] || "object-cover object-[center_20%]"}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-ink">
            <span className="headline text-5xl text-paper">
              {member.name.slice(0, 1)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5 p-3">
        <div className="text-[17px] font-semibold">{member.name}</div>
        {member.major ? (
          <div className="mono-label text-[11px] text-muted-paper">
            {member.major}
          </div>
        ) : null}
        <Badges member={member} />
        {member.role ? (
          <div className="text-sm text-muted-paper">{member.role}</div>
        ) : null}
      </div>
    </article>
  );
}

function ExecCard({ person, isSpinning }) {
  const src = teamPhotos[person.photo];

  return (
    <article className="flex flex-col overflow-hidden border-[3px] border-ink bg-ink text-paper shadow-[6px_6px_0_var(--red)]">
      <div
        className={`aspect-square w-full overflow-hidden border-b-[3px] border-ink bg-paper ${
          isSpinning ? "animate-spin-decelerate" : ""
        }`}
      >
        {src ? (
          <img
            src={src}
            alt={`${person.name}, ${person.execTitle}`}
            width={400}
            height={400}
            className={`h-full w-full ${portraitClasses[person.name] || "object-cover object-[center_20%]"}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-ink">
            <span className="headline text-5xl text-paper">
              {person.name.slice(0, 1)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1.5 p-3">
        <div className="mono-label text-[11px] text-red-on-ink md:text-[12px]">
          {person.execTitle}
        </div>
        <div className="text-[18px] font-semibold md:text-[20px]">
          {person.name}
        </div>
      </div>
    </article>
  );
}

function TeamBlock({ teamNumber, members, isSpinning }) {
  const title = site.teamNames?.[String(teamNumber)] || `Team ${teamNumber}`;
  const blurb = site.teamBlurbs?.[String(teamNumber)] || "";

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-2.5">
        <div className="headline self-start -rotate-1 border-[3px] border-ink bg-red px-4 py-1.5 text-[clamp(28px,4vw,40px)] text-white shadow-[5px_5px_0_var(--ink)]">
          {title}
        </div>
        {blurb ? (
          <div className="font-mono text-[12px] tracking-wide text-muted-paper">
            {blurb}
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
        {members.map((member) => (
          <MemberCard
            key={`${teamNumber}-${member.name}`}
            member={member}
            isSpinning={isSpinning}
          />
        ))}
      </div>
    </div>
  );
}

export default function Roster() {
  const [isSpinning, setIsSpinning] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);
  const members = roster.members || [];
  const hierarchyReady = Boolean(site.hierarchyReady);
  const execOrder = [
    "President",
    "VP",
    "Treasurer",
    "Secretary",
    "Digital Media",
    "Social Media",
    "Student Advisor",
    "Advisor",
  ];
  const execs = members
    .filter((m) => m.execTitle)
    .sort(
      (a, b) =>
        execOrder.indexOf(a.execTitle) - execOrder.indexOf(b.execTitle)
    );
  const team1 = members
    .filter((m) => m.team === 1)
    .sort((a, b) => Number(b.lead) - Number(a.lead));
  const team2 = members
    .filter((m) => m.team === 2)
    .sort((a, b) => Number(b.lead) - Number(a.lead));

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
    <section
      id="roster"
      ref={sectionRef}
      className="section-pad relative z-10 scroll-mt-24 overflow-hidden border-t-[3px] border-ink bg-paper py-12 text-ink md:py-20"
    >
      <div className="mb-10 flex flex-col gap-5 md:mb-14">
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="sticker self-start">03 / Roster</div>
          <h2 className="headline misreg-red text-[clamp(48px,8vw,96px)]">
            The builders.
          </h2>
        </div>
      </div>

      {hierarchyReady ? (
        <>
          <div className="mb-12 flex flex-col gap-5 md:mb-14">
            <div className="mono-label text-[13px] text-muted-paper">
              Leadership / Exec board
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {execs.map((person) => (
                <ExecCard
                  key={`${person.execTitle}-${person.name}`}
                  person={person}
                  isSpinning={isSpinning}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <TeamBlock
              teamNumber={1}
              members={team1}
              isSpinning={isSpinning}
            />
            <TeamBlock
              teamNumber={2}
              members={team2}
              isSpinning={isSpinning}
            />
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
          {members.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              isSpinning={isSpinning}
            />
          ))}
        </div>
      )}
    </section>
  );
}
