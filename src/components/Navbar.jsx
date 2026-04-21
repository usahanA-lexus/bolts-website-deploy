import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from './logo2.png'

const navItems = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/#team" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href === "/") {
      navigate("/");
      window.scrollTo(0, 0);
    } else if (href.startsWith("/#")) {
      const hash = href.split("/#")[1];
      navigate("/#" + hash);
      setTimeout(() => {
        const element = document.querySelector("#" + hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-colors duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4 md:gap-8">
        <Link
          to="/"
          className="flex flex-shrink-0 items-center overflow-hidden rounded-lg bg-black p-0.5 ring-1 ring-white/10 transition-shadow hover:ring-white/20"
          title="Bolts Robotics — Home"
        >
          <img
            src={logo}
            alt="Bolts Robotics Logo"
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />
        </Link>
        <div className="flex flex-1 flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 md:justify-end">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-white font-medium tracking-wide hover:text-red-400 transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/whimsical"
            className="text-white font-medium tracking-wide transition-colors hover:text-red-400"
          >
            Whimsical
          </Link>
        </div>
      </div>
    </nav>
  );
}
