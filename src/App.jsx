import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TeamGrid from './components/TeamGrid'
import GalleryCarousel from './components/GalleryCarousel'
import Contact from './components/Contact'
import WhimsicalPage from './components/WhimsicalPage'

function HomePage() {
  return (
    <main className="bg-boltsWhite font-sans min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <TeamGrid />
      <GalleryCarousel />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whimsical" element={<WhimsicalPage />} />
      </Routes>
    </Router>
  );
}

export default App
