import React from "react";
import { useState } from 'react';

const placeholders = [
  { caption: "Prep Time!", img: "https://via.placeholder.com/400x200?text=Gallery+1" },
  { caption: "Team Workshop!", img: "https://via.placeholder.com/400x200?text=Gallery+2" },
  { caption: "Prototype Zone", img: "https://via.placeholder.com/400x200?text=Gallery+3" }
];

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + placeholders.length) % placeholders.length);
  const next = () => setCurrent((current + 1) % placeholders.length);

  return (
    <section id="gallery" className="py-16 px-4 bg-boltsBlack">
      <h2 className="text-2xl font-bold text-boltsWhite mb-6 text-center">Gallery</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[400px] aspect-[2/1] rounded-lg border-2 border-gray-700 shadow-lg overflow-hidden">
          <img
            src={placeholders[current].img}
            alt={placeholders[current].caption}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          {/* Minimal navigation arrows */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-boltsRed text-boltsWhite rounded-full w-8 h-8 flex items-center justify-center"
            onClick={prev}
          >〈</button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-boltsRed text-boltsWhite rounded-full w-8 h-8 flex items-center justify-center"
            onClick={next}
          >〉</button>
        </div>
        <p className="mt-4 text-boltsWhite">{placeholders[current].caption}</p>
      </div>
    </section>
  );
}