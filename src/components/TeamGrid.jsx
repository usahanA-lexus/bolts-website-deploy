import React from "react";
const aTeam = [
  { name: "A1", role: "Builder", img: "" },
  { name: "A2", role: "Programmer", img: "" },
  { name: "A3", role: "Drive Coach", img: "" },
  { name: "A4", role: "Designer", img: "" },
  { name: "A5", role: "Scout", img: "" },
];

const bTeam = [
  { name: "B1", role: "Builder", img: "" },
  { name: "B2", role: "Programmer", img: "" },
  { name: "B3", role: "Drive Coach", img: "" },
  { name: "B4", role: "Designer", img: "" },
  { name: "B5", role: "Scout", img: "" },
];

function TeamMembersGrid({ members, title }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-3 text-boltsRed">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
        {members.map((m, i) => (
          <div key={i} className="flex flex-col items-center p-4 rounded-lg border border-gray-200 shadow-md bg-white">
            <div className="w-16 h-16 bg-boltsBlack text-boltsWhite rounded-lg flex items-center justify-center mb-2 animate-fadeIn shadow-sm">
              {m.img ? (
                <img src={m.img} alt={m.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                <span className="font-bold text-lg">{m.name}</span>
              )}
            </div>
            <span className="font-semibold">{m.name}</span>
            <span className="text-xs text-boltsRed">{m.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamGrid() {
  return (
    <section id="team" className="py-16 px-4 bg-boltsWhite text-boltsBlack">
      <h2 className="text-2xl font-bold text-boltsBlack mb-8 text-center">Meet the Teams</h2>
      <TeamMembersGrid members={aTeam} title="A Team" />
      <TeamMembersGrid members={bTeam} title="B Team" />
    </section>
  );
}