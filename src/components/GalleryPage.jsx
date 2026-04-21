import React from "react";
import Navbar from "./Navbar";
import { galleryImages } from "../data/galleryImages";

export default function GalleryPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-boltsBlack">
      <Navbar />
      <section className="scroll-mt-24 grid w-full max-w-[100vw] grid-cols-1 gap-0 pt-24 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((item, index) => (
          <div
            key={index}
            className="relative min-h-[72vh] w-full overflow-hidden sm:min-h-[78vh] lg:min-h-[82vh]"
          >
            <img
              src={item.img}
              alt={item.caption}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-300 hover:opacity-95"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
