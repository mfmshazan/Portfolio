"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const progressRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Green scroll-progress bar across the very top
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bar = progressRef.current;
    const anim = gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      }
    );
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* progress bar */}
      <span
        ref={progressRef}
        className="absolute left-0 top-0 h-0.5 w-full origin-left bg-gradient-to-r from-emerald-500 to-emerald-300"
        style={{ transform: "scaleX(0)" }}
      />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link href="#home" className="group flex items-center gap-1.5">
          <span className="font-display text-2xl tracking-tight text-white">
            shazan
          </span>
          <span className="mb-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400 transition-transform group-hover:scale-125" />
        </Link>

        <div className="hidden items-center gap-10 xl:flex">
          <Nav />
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-5 py-2 font-primary text-xs uppercase tracking-[0.2em] text-emerald-300 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 transition-transform group-hover:scale-150" />
            Let&apos;s Connect
          </a>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
