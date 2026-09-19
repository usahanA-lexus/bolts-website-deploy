import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Calendar from "./components/Calendar";
import Roster from "./components/Roster";
import GallerySection from "./components/GallerySection";
import GalleryPage from "./components/GalleryPage";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Grain from "./components/Grain";
import ContactForm from "./components/ContactForm";
import WhimsicalPage from "./components/WhimsicalPage";

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Calendar />
        <Roster />
        <GallerySection />
        <Join />
      </main>
      <Footer />
      <Grain />
    </div>
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

export default App;
