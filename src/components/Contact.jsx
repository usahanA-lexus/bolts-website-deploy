import React from "react";
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-boltsRed text-boltsWhite text-center">
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="mb-1">Email: <span className="font-mono">bolts@example.edu</span></p>
      <p className="mb-6">(More contact info coming soon!)</p>
      <p className="text-xs">© {new Date().getFullYear()} Bolts Robotics Team</p>
    </section>
  );
}