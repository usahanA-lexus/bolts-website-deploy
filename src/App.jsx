import React from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TeamGrid from './components/TeamGrid'
import GalleryCarousel from './components/GalleryCarousel'
import Contact from './components/Contact'

function App() {
  return (
    <main className="bg-boltsWhite font-sans min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <TeamGrid />
      <GalleryCarousel />
      <Contact />
    </main>
  )
}

export default App
