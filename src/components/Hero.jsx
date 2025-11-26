import React from "react";
export default function Hero() {
  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center items-center bg-boltsRed text-boltsWhite">
      {/* Placeholder logo */}
      <div className="w-28 h-28 bg-boltsWhite rounded-full flex items-center justify-center mb-6">
        <span className="text-boltsRed font-black text-3xl">B</span>
      </div>
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Bolts</h1>
      <h2 className="text-lg font-medium">College VEX U Robotics Team</h2>
    </section>
  );
}