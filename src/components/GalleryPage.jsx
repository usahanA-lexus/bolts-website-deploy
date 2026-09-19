import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Grain from "./Grain";
import { galleryPhotos } from "../data/photos";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main className="section-pad py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4">
          <div className="sticker self-start">Gallery</div>
          <h1 className="headline misreg-red text-[clamp(48px,8vw,96px)]">
            From the shop.
          </h1>
          <p className="m-0 max-w-xl text-lg leading-relaxed text-ink">
            Build log photos from the Bolts workshop.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {galleryPhotos.map((photo) => {
            const pos =
              photo.position === "bottom"
                ? "object-bottom"
                : photo.position === "top"
                  ? "object-top"
                  : "object-center";
            return (
              <figure
                key={photo.caption}
                className="relative m-0 min-h-[180px] overflow-hidden border-[3px] border-ink shadow-[6px_6px_0_var(--ink)] sm:aspect-[4/3] sm:min-h-0"
              >
                <div className="duotone absolute inset-0">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={640}
                    height={420}
                    className={`h-full w-full object-cover ${pos}`}
                  />
                </div>
                <figcaption className="absolute bottom-2 left-2 z-[1]">
                  <span className="inline-block border-2 border-ink bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em]">
                    {photo.caption}
                  </span>
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
