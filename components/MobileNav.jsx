"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Social from "@/components/Social";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#resume" },
  { name: "Services", path: "#services" },
  { name: "Work", path: "#works" },
  { name: "Contact", path: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.set(overlayRef.current, { display: "flex" })
        .fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        )
        .from(
          ".mobile-link",
          { y: 40, opacity: 0, stagger: 0.07, duration: 0.4, ease: "power3.out" },
          "-=0.1"
        )
        .from(
          ".mobile-foot",
          { opacity: 0, duration: 0.3 },
          "-=0.2"
        );
      tlRef.current = tl;
    }, overlayRef);
    return () => ctx.revert();
  }, []);

  const toggle = (next) => {
    const willOpen = next ?? !open;
    setOpen(willOpen);
    const tl = tlRef.current;
    if (!tl) return;
    if (willOpen) tl.play(0);
    else
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
      });
  };

  const scrollToSection = (e, path) => {
    e.preventDefault();
    const element = document.getElementById(path.substring(1));
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    toggle(false);
  };

  return (
    <>
      <button
        onClick={() => toggle()}
        className="relative z-[60] p-2 text-white"
        aria-label="Toggle menu"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      <div
        ref={overlayRef}
        style={{ display: "none" }}
        className="fixed inset-0 z-[55] hidden flex-col justify-center bg-black px-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(108,196,23,0.06)_1px,transparent_1px)] bg-[size:48px_100%]" />
        <nav className="relative flex flex-col gap-2">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path)}
              className="mobile-link group flex items-baseline gap-4"
            >
              <span className="font-primary text-xs text-emerald-400">
                0{i + 1}
              </span>
              <span className="font-display text-5xl text-white/70 transition-colors group-hover:text-white">
                {link.name}
              </span>
            </a>
          ))}
        </nav>

        <div className="mobile-foot relative mt-16">
          <Social
            containerStyles="flex gap-4"
            iconStyles="border border-white/20 p-2.5 rounded-full text-white/70 transition-all duration-300 hover:text-emerald-400 hover:border-emerald-400"
          />
        </div>
      </div>
    </>
  );
}
