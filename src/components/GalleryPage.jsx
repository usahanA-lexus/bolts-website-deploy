import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { galleryEvents } from "../data/galleryImages";

export default function GalleryPage() {
  const [album, setAlbum] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!album) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [album]);

  return (
    <div className="scrapbook-page min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl">Gallery<br /><span className="text-rose-700">Bolts scrapbook</span></h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-stone-600">Pick a folder, peek inside, and relive a little of the fun.</p>
          <div aria-hidden="true" className="mt-8 flex items-center justify-center gap-3 overflow-hidden text-2xl text-rose-600 sm:text-3xl">
            <span className="min-w-0 overflow-hidden whitespace-nowrap tracking-[0.3em]">✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿</span>
            <span className="shrink-0">🔧</span>
            <span className="min-w-0 overflow-hidden whitespace-nowrap tracking-[0.3em]">✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿ ✿</span>
          </div>
        </header>
        <section aria-label="Event and day photo albums" className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {galleryEvents.map((event) => (
            <button key={event.id} type="button" onClick={() => setAlbum(event)} aria-haspopup="dialog" className="relative rounded-b-2xl rounded-tr-2xl border border-stone-300 p-4 text-left text-stone-800 shadow-md transition-transform motion-safe:hover:-translate-y-1" style={{ backgroundColor: event.color }}>
              <span aria-hidden="true" className="absolute -top-5 left-[-1px] h-5 w-28 rounded-t-xl border-x border-t border-stone-300" style={{ backgroundColor: event.color }} />
              <img src={event.images[0].img} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-lg border-4 border-white object-cover shadow-sm" />
              <span className="mt-5 block text-xl font-bold">{event.title}</span>
              <span className="mt-2 block text-sm text-stone-600">{event.images.length} {event.images.length === 1 ? "photo" : "photos"} tucked inside</span>
              <span className="mt-4 block text-sm font-bold text-rose-700">Open album ↗</span>
            </button>
          ))}
        </section>
        <p className="mt-16 text-center text-lg font-semibold text-rose-700">made of memories ♡</p>
      </main>
      <Footer />
      <dialog ref={dialogRef} aria-labelledby="album-title" onCancel={() => setAlbum(null)} onClose={() => setAlbum(null)} onClick={(event) => { if (event.target === event.currentTarget) setAlbum(null); }} className="m-auto max-h-[90dvh] w-[94vw] max-w-6xl overflow-y-auto rounded-2xl bg-transparent p-0 text-stone-800 backdrop:bg-black/70">
        {album && (
          <div className="min-h-full px-5 pb-10 sm:px-10" style={{ backgroundColor: album.color }}>
            <div className="sticky top-0 z-10 flex justify-end py-4" style={{ backgroundColor: album.color }}>
              <button type="button" autoFocus onClick={() => setAlbum(null)} className="rounded-full border border-stone-400 bg-white px-4 py-2 font-bold text-stone-800">Close album ×</button>
            </div>
            <header className="mb-12">
              <h2 id="album-title" className="text-3xl font-black sm:text-5xl">{album.title}</h2>
              <p className="mt-4 text-stone-600">{album.description}</p>
            </header>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {album.images.map((item, index) => (
                <figure key={item.img} className="scrapbook-photo" style={{ "--photo-tilt": `${[-2, 2, -1, 1.5][index % 4]}deg`, "--tape-color": ["#f9cbd8", "#d8d0f4", "#d1e8ce", "#f5dfa0"][index % 4] }}>
                  <span className="scrapbook-tape" aria-hidden="true" />
                  <img src={item.img} alt={`${album.title} — photo ${index + 1}`} loading={index < 3 ? "eager" : "lazy"} className="aspect-[4/3] w-full rounded-sm bg-stone-50 object-contain" />
                </figure>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
