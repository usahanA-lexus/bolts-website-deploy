import React from 'react'
import logo from './logo2.png'
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex flex-col justify-center items-center bg-boltsRed text-boltsWhite"
    >
      {/* Placeholder logo */}
      <div className="mb-6">
        <img
          src={logo}
          alt="Bolts Robotics Logo"
          className="w-28 h-28 object-contain"
        />
      </div>
      <h2 className="text-lg font-medium">VEX U Robotics Team</h2>
    </section>
  )
}
