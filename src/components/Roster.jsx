import React, { useState } from "react";
import roster from "../data/roster.json";
import site from "../data/site.json";
import { teamPhotos } from "../data/photos";

function Badges({ member }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {member.lead ? (
        <span className="mono-label border-2 border-ink bg-red px-1.5 py-0.5 text-[10px] text-white">
          Team lead
        </span>
      ) : null}
      {member.execTitle ? (
        <span className="mono-label border-2 border-ink bg-ink px-1.5 py-0.5 text-[10px] text-paper">
          Exec
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

function FlipCard({ member }) {
  const [flipped, setFlipped] = useState(false);
  const src = teamPhotos[member.photo];
  const backMajor = member.flipBack?.major || member.major || "Builder";
  const backRole =
    member.flipBack?.role ||
    member.execTitle ||
    (member.lead ? "Team lead" : "Team member");

  function toggle() {
    setFlipped((v) => !v);
  }

  function onKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  }

  return (
    <button
      type="button"
      className="flip-scene group w-full border-0 bg-transparent p-0 text-left"
      aria-pressed={flipped}
      aria-label={`${member.name}, flip card for details`}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div
        className={`flip-inner relative min-h-[260px] ${flipped ? "is-flipped" : ""}`}
      >
        <div className="flip-face flip-front flex h-full min-h-[260px] flex-col border-[3px] border-ink bg-paper text-ink shadow-[5px_5px_0_var(--ink)]">
          <div className="duotone aspect-square w-full border-b-[3px] border-ink">
            {src ? (
              <img
                src={src}
                alt=""
                width={400}
                height={400}
                className="h-full w-full object-cover object-[center_20%]"
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
          </div>
        </div>

        <div className="flip-face flip-back relative flex min-h-[260px] flex-col justify-between overflow-hidden border-[3px] border-ink bg-ink p-4 text-paper shadow-[5px_5px_0_var(--red)]">
          <div
            className="halftone-ink pointer-events-none absolute inset-0 opacity-30"
            aria-hidden="true"
          />
          <div className="relative z-[1] flex flex-col gap-2">
            <div className="headline text-3xl">{member.name}</div>
            <div className="mono-label text-[11px] text-red-on-ink">
              {backRole}
            </div>
            <p className="m-0 text-sm leading-relaxed">{backMajor}</p>
            {member.team ? (
              <p className="mono-label m-0 text-[11px] text-muted-ink">
                Team {member.team}
              </p>
            ) : (
              <p className="mono-label m-0 text-[11px] text-muted-ink">
                {member.execTitle ? "Exec board" : "Roster"}
              </p>
            )}
          </div>
          <div className="relative z-[1]">
            <Badges member={member} />
          </div>
        </div>
      </div>
    </button>
  );
}

function ExecCard({ person }) {
  const src = teamPhotos[person.photo];

  return (
    <article className="flex flex-col overflow-hidden border-[3px] border-ink bg-ink text-paper shadow-[6px_6px_0_var(--red)]">
      <div className="duotone aspect-square w-full border-b-[3px] border-ink bg-paper">
        {src ? (
          <img
            src={src}
            alt={`${person.name}, ${person.execTitle}`}
            width={400}
            height={400}
            className="h-full w-full object-cover object-[center_20%]"
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

function TeamBlock({ teamNumber, members }) {
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
          <FlipCard key={`${teamNumber}-${member.name}`} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function Roster() {
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
  const team1 = members.filter((m) => m.team === 1);
  const team2 = members.filter((m) => m.team === 2);

  return (
    <section
      id="roster"
      className="section-pad relative z-10 scroll-mt-24 overflow-hidden border-t-[3px] border-ink bg-paper py-12 text-ink md:py-20"
    >
      <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="sticker self-start">03 / Roster</div>
          <h2 className="headline misreg-red text-[clamp(48px,8vw,96px)]">
            The builders.
          </h2>
        </div>
        <p className="m-0 max-w-[400px] text-base leading-relaxed text-ink md:text-lg">
          {hierarchyReady
            ? "Exec board and both build teams. People can show up more than once when roles overlap."
            : "The people building Bolts from scratch."}
        </p>
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
                />
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <TeamBlock teamNumber={1} members={team1} />
            <TeamBlock teamNumber={2} members={team2} />
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
          {members.map((member) => (
            <FlipCard key={member.name} member={member} />
          ))}
        </div>
      )}
    </section>
  );
}
