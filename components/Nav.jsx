"use client";

import { useState, useEffect } from "react";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#resume" },
  { name: "Services", path: "#services" },
  { name: "Work", path: "#works" },
  { name: "Contact", path: "#contact" },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => link.path.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, path) => {
    e.preventDefault();
    const element = document.getElementById(path.substring(1));
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        const sectionId = link.path.substring(1);
        const isActive = activeSection === sectionId;
        return (
          <a
            href={link.path}
            key={link.name}
            onClick={(e) => scrollToSection(e, link.path)}
            className={`group relative font-primary text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
              isActive ? "text-emerald-400" : "text-white/60 hover:text-white"
            }`}
          >
            {link.name}
            <span
              className={`absolute -bottom-1.5 left-0 h-px bg-emerald-400 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
