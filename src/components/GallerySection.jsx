import React from "react";
import { Link } from "react-router-dom";
import { galleryPhotos } from "../data/photos";
import { galleryEvents } from "../data/galleryImages";

function positionClass(position) {
  if (position === "bottom") return "object-bottom";
  if (position === "top") return "object-top";
  return "object-center";
}

function GalleryTile({ photo, large = false, inkShadow = true }) {
  return (
    <figure
      className={`relative m-0 overflow-hidden border-[3px] border-ink ${
        large
          ? "min-h-[180px] md:min-h-0 md:row-span-2 md:col-span-2"
          : "min-h-[110px] md:min-h-[130px]"
      } ${inkShadow ? "shadow-[6px_6px_0_var(--ink)]" : "shadow-[5px_5px_0_var(--red)]"}`}
    >
      <div className="absolute inset-0">
        <img
          src={photo.src}
          alt={photo.alt}
          width={640}
          height={420}
          className={`h-full w-full object-cover ${positionClass(photo.position)}`}
        />
      </div>
      <figcaption className="absolute bottom-2 left-2 z-[1] md:bottom-3 md:left-3">
        <span className="inline-block border-2 border-ink bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink md:text-[11px]">
          {photo.caption}
        </span>
      </figcaption>
    </figure>
  );
}

export default function GallerySection() {
  const eventPreviews = galleryEvents.slice(0, 2).map((event) => ({
    src: event.images[0].img,
    alt: `${event.title} — album cover`,
    caption: event.id === "potluck" ? "Potluck 2026" : "Summer Bonfire 2026",
    position: "center",
  }));
  const tiles = [galleryPhotos[0], ...eventPreviews, ...galleryPhotos.slice(1, 3)];

  return (
    <section
      id="gallery"
      className="section-pad scroll-mt-24 border-t-[3px] border-ink bg-paper py-12 md:py-20"
    >
      <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="sticker self-start">04 / Gallery</div>
          <h2 className="headline misreg-red text-[clamp(48px,8vw,96px)]">
            From the scrapbook.
          </h2>
        </div>
        <p className="m-0 max-w-[380px] text-base leading-relaxed md:text-lg">
          <Link to="/gallery" className="font-semibold text-red-text underline">
            See all photos
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-[repeat(2,minmax(0,160px))] md:gap-4">
        <GalleryTile photo={tiles[0]} large />
        <GalleryTile photo={tiles[1]} />
        <GalleryTile photo={tiles[2]} inkShadow={false} />
        <GalleryTile photo={tiles[3]} inkShadow={false} />
        <GalleryTile photo={tiles[4]} />
      </div>
    </section>
  );
}
