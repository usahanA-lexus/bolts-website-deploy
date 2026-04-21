import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TeamGrid from './components/TeamGrid'
import GalleryCarousel from './components/GalleryCarousel'
import GalleryPage from './components/GalleryPage'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import WhimsicalPage from './components/WhimsicalPage'

function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-boltsWhite scroll-smooth pt-24 font-sans">
      <Navbar />
      <Hero />
      <About />
      <GalleryCarousel />
      <TeamGrid />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/whimsical" element={<WhimsicalPage />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/ContactForm" element={<Navigate to="/contact-form" replace />} />
      </Routes>
    </Router>
  );
}

export default App
