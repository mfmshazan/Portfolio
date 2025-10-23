"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { name: "Home", path: "#home" },
  { name: "About-Me", path: "#resume" },
  { name: "Services", path: "#services" },
  { name: "Projects", path: "#works" },
  { name: "Contact", path: "#contact" },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white cursor-pointer"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-4 w-40  rounded-md bg-[#0f172a] border border-gray-700 shadow-lg">
          <ul className="flex flex-col font-mono text-base text-gray-300">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.path}
                  className="block px-3 py-4 hover:text-emerald-400 transition cursor-pointer"
                  onClick={(e) => scrollToSection(e, link.path)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
