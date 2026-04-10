import React from "react";
import { Link } from "react-router-dom";
import DiscordQR from "../assets/gallery/Discord QR.png";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-boltsRed text-boltsWhite text-center m-4 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="mb-1">Email: <span className="font-mono">Boltsrobotics@gmail.com</span></p>
      <p className="mb-6">Discord:  </p>
      <div className="flex justify-center">
        <img
          src={DiscordQR}
          alt="Discord QR Code"
          className="w-48 h-48 object-contain"
        />
      </div>
      <Link to="/ContactForm" className="inline-block mt-6 px-6 py-2 bg-boltsWhite text-boltsRed font-bold rounded hover:bg-gray-200 transition">
        Fill Out Contact Form
      </Link>
      <p className="text-xs mt-6">© {new Date().getFullYear()} Bolts Robotics Team</p>
    </section>
  );
}