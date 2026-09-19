import React from "react";
import { Link } from "react-router-dom";
import { galleryPhotos } from "../data/photos";

function GalleryTile({ photo, large = false, inkShadow = true }) {
  return (
    <figure
      className={`relative m-0 overflow-hidden border-[3px] border-ink ${
        large ? "min-h-[220px] md:min-h-0 md:row-span-2 md:col-span-2" : "min-h-[140px]"
      } ${inkShadow ? "shadow-[8px_8px_0_var(--ink)]" : "shadow-[6px_6px_0_var(--red)]"}`}
    >
      <div className="duotone absolute inset-0">
        <img src={photo.src} alt={photo.alt} width={800} height={600} />
      </div>
      <figcaption className="absolute bottom-3 left-3 z-[1]">
        <span className="inline-block border-2 border-ink bg-paper px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink md:text-[12px]">
          {photo.caption}
        </span>
      </figcaption>
    </figure>
  );
}

export default function GallerySection() {
  const tiles = galleryPhotos.slice(0, 5);

  return (
    <section
      id="gallery"
      className="section-pad scroll-mt-24 border-t-[3px] border-ink bg-paper py-12 md:py-20"
    >
      <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="sticker self-start">04 / Gallery</div>
          <h2 className="headline misreg-red text-[clamp(48px,8vw,96px)]">
            From the shop.
          </h2>
        </div>
        <p className="m-0 max-w-[380px] text-base leading-relaxed md:text-lg">
          Captioned like a build log, newest first.{" "}
          <Link to="/gallery" className="font-semibold text-red-text underline">
            See all photos
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
        <GalleryTile photo={tiles[0]} large />
        <GalleryTile photo={tiles[1]} />
        <GalleryTile photo={tiles[2]} inkShadow={false} />
        <GalleryTile photo={tiles[3]} inkShadow={false} />
        <GalleryTile photo={tiles[4]} />
      </div>
    </section>
  );
}
