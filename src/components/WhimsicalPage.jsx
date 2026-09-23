import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Grain from "./Grain";
import { teamPhotos } from "../data/photos";
import Robin14 from "../assets/team/Robin 14.png";
import Robin15 from "../assets/team/Robin15.png";
import Robin16 from "../assets/team/Robin 16.png";
import Robin17 from "../assets/team/Robin 17.png";
import SpotifyHolder from "../assets/whimisical assets/SpotifyHolder (2).png";

const batCrew = [
  { name: "Batman", photo: "Batman.png" },
  { name: "Robin 1", photo: "Robin1.png" },
  { name: "Robin 2", photo: "Robin2.png" },
  { name: "Robin 3", photo: "Robin3.png" },
  { name: "Robin 4", photo: "Robin4.png" },
  { name: "Robin 5", photo: "Robin5.png" },
  { name: "Robin 6", photo: "Robin6.png" },
  { name: "Robin 7", photo: "Robin7.png" },
  { name: "Robin 8", photo: "Robin8.png" },
  { name: "Robin 9", photo: "Robin9.png" },
  { name: "Robin 10", photo: "Robin10.png" },
  { name: "Robin 11", photo: "Robin11.png" },
  { name: "Robin 12", photo: "Robin12.png" },
  { name: "Robin 13", photo: "Robin13.png" },
  { name: "Robin 14", img: Robin14 },
  { name: "Robin 15", img: Robin15 },
  { name: "Robin 16", img: Robin16 },
  { name: "Robin 17", img: Robin17 },
];

export default function WhimsicalPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const sectionRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSpinning(true);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              setIsSpinning(false);
            }, 1800);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionEl);
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="whimsical-cursor min-h-screen bg-paper">
      <Navbar />
      <main className="section-pad py-12 md:py-16" ref={sectionRef}>
        <div className="mb-10 flex flex-col items-start gap-4">
          <div className="sticker">Whimsical</div>
          <h1 className="headline misreg-red text-[clamp(48px,9vw,96px)]">
            Holy Whimsical!
          </h1>
          <p className="headline m-0 text-[clamp(28px,5vw,48px)] text-red">
            Holy Bat Crew!
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 xl:flex-row xl:items-start">
        <div className="grid w-full min-w-0 flex-1 grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-6 xl:grid-cols-3">
          {batCrew.map((member) => {
            const src = member.img || teamPhotos[member.photo];
            return (
              <figure
                key={member.name}
                className="m-0 flex flex-col items-center gap-3 border-[3px] border-ink bg-paper p-4 shadow-[5px_5px_0_var(--ink)]"
              >
                <div
                  className={`h-24 w-24 overflow-hidden rounded-full border-[3px] border-ink ${
                    isSpinning ? "animate-spin-decelerate" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="text-center text-sm font-semibold">
                  {member.name}
                </figcaption>
              </figure>
            );
          })}
        </div>
        <section className="w-full max-w-[360px] shrink-0" aria-labelledby="playlist-heading">
          <h2 id="playlist-heading" className="headline mb-5 text-center text-3xl text-red">Bolts Playlist</h2>
          <div className="relative aspect-[735/760] w-full">
            <img src={SpotifyHolder} alt="Retro media-player window framing the Bolts Spotify playlist" className="h-full w-full select-none object-fill" draggable="false" />
            <div className="absolute left-[9.4%] top-[12.2%] h-[61.2%] w-[84.4%] overflow-hidden">
              <iframe
                title="Bolts Robotics Spotify playlist"
                data-testid="embed-iframe"
                className="block border-0"
                style={{ borderRadius: "0", width: "159.2%", height: "159.2%", transform: "scale(0.628)", transformOrigin: "top left" }}
                src="https://open.spotify.com/embed/playlist/1gca4bD4iIENul0fxLwTBc?utm_source=generator&theme=0&si=fe4da954fa814663"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        </div>
        <p className="mt-10 text-center text-xs text-muted-paper">
          <a href="https://www.flaticon.com/free-icons/dead-fish" title="dead fish icons" target="_blank" rel="noreferrer" className="underline hover:text-red-text">
            Dead fish icons created by Vitaly Gorbachev - Flaticon
          </a>
        </p>
      </main>
      <Footer />
      <Grain />
    </div>
  );
}
