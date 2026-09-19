import React from "react";
import { useState } from "react";
import { galleryImages } from "../data/galleryImages";

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setCurrent((current + 1) % galleryImages.length);

  const slide = galleryImages[current];

  return (
    <section
      id="gallery-preview"
      className="scroll-mt-24 relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-boltsBlack"
    >
      <div className="relative min-h-[82vh] w-full overflow-hidden md:min-h-[min(92vh,960px)]">
        <img
          src={slide.img}
          alt={slide.caption}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            slide.alignBottom ? "object-bottom" : "object-center"
          }`}
        />
        <button
          type="button"
          aria-label="Previous gallery image"
          className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-transparent text-2xl text-white shadow-sm backdrop-blur-[2px] transition hover:bg-white/15"
          onClick={prev}
        >
          〈
        </button>
        <button
          type="button"
          aria-label="Next gallery image"
          className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-transparent text-2xl text-white shadow-sm backdrop-blur-[2px] transition hover:bg-white/15"
          onClick={next}
        >
          〉
        </button>
      </div>
      <p className="sr-only">{slide.caption}</p>
    </section>
  );
}
