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
    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-red-600/50" : "bg-red-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center gap-8">
        <div className="flex justify-center gap-8 flex-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-white font-semibold hover:text-red-200 transition-colors cursor-pointer"
          >
            {item.label}
          </a>
        ))}
        <Link
          to="/whimsical"
          className="text-white font-semibold hover:text-red-200 transition-colors"
        >
          Whimsical
        </Link>
        </div>
        <Link to="/" className="flex-shrink-0 flex flex-col items-center">
          <img
            src={logo}
            alt="Bolts Robotics Logo"
            className="w-16 h-16 object-contain"
          />
          <p className="text-xs text-white font-semibold">VEX U Team</p>
        </Link>
      </div>
    </nav>
  );
}
