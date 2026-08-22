"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Social from "@/components/Social";

const LINE_COUNT = 40;        // number of vertical lines across the screen
const GLOW_RADIUS = 160;      // px around the cursor that lights lines up

const Hero = () => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);
  const headlineRef = useRef(null);
  const [clock, setClock] = useState("--:--:--");

  // Live clock (Colombo)
  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Colombo",
      }).format(new Date());
      setClock(t);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Reactive green lines — light up near the cursor, fade back out
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Per-line quick setters for buttery-smooth updates
    const setters = lineRefs.current.map((el) =>
      el
        ? {
            opacity: gsap.quickTo(el, "opacity", { duration: 0.5, ease: "power3.out" }),
            scaleX: gsap.quickTo(el, "scaleX", { duration: 0.5, ease: "power3.out" }),
          }
        : null
    );

    let rafId = null;
    let pending = null;

    const apply = (mouseX) => {
      const rect = section.getBoundingClientRect();
      lineRefs.current.forEach((el, i) => {
        if (!el || !setters[i]) return;
        const lineX = rect.left + (rect.width * (i + 0.5)) / LINE_COUNT;
        const dist = Math.abs(mouseX - lineX);
        const t = Math.max(0, 1 - dist / GLOW_RADIUS); // 1 at cursor -> 0 at edge
        setters[i].opacity(0.06 + t * 0.94);
        setters[i].scaleX(1 + t * 2.2);
      });
    };

    const onMove = (e) => {
      pending = e.clientX;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (pending != null) apply(pending);
      });
    };

    const onLeave = () => {
      lineRefs.current.forEach((el, i) => {
        if (!el || !setters[i]) return;
        setters[i].opacity(0.06);
        setters[i].scaleX(1);
      });
    };

    window.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Entrance timeline
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-line-reveal", {
        yPercent: 120,
        duration: 1,
        stagger: 0.12,
      })
        .from(".hero-fade", { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.5")
        .from(".hero-vline", { scaleY: 0, transformOrigin: "top", duration: 0.8 }, "-=0.6");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Reactive vertical lines */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: LINE_COUNT }).map((_, i) => (
          <span
            key={i}
            ref={(el) => (lineRefs.current[i] = el)}
            className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
            style={{
              left: `${((i + 0.5) / LINE_COUNT) * 100}%`,
              opacity: 0.06,
              boxShadow: "0 0 8px 0 rgba(108,196,23,0.55)",
            }}
          />
        ))}
      </div>

      {/* Vignette so the type stays legible */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.85)_100%)]" />

      {/* Content column */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 md:px-12">
        {/* Meta row (below the fixed header) */}
        <div className="hero-fade flex items-center justify-between pt-28 font-primary text-[11px] uppercase tracking-[0.25em] text-white/50 md:pt-32">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
            Available for work
          </span>
          <span className="hidden md:inline">CMB 28° / {clock}</span>
        </div>

        {/* Center content */}
        <div className="flex flex-1 flex-col justify-center py-10">
          <p className="hero-fade mb-5 font-primary text-xs uppercase tracking-[0.35em] text-white/50">
            Hello, I&apos;m Shazan Faslan
          </p>

          <h1
            ref={headlineRef}
            className="font-display leading-[0.85] tracking-tight"
          >
            <span className="block overflow-hidden">
              <span className="hero-line-reveal block whitespace-nowrap text-[clamp(2.5rem,11vw,10rem)] text-white/10">
                BUILDING THE
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line-reveal block whitespace-nowrap text-[clamp(2.5rem,11vw,10rem)] text-white">
                MODERN&nbsp;WEB
              </span>
            </span>
          </h1>

          <div className="hero-fade mt-8 max-w-xl font-primary text-sm leading-relaxed text-white/60">
            <p className="uppercase tracking-[0.2em] text-white/40">
              Fullstack · Mobile · AI Engineer
            </p>
            <p className="mt-2 text-emerald-400">
              I engineer fast, user-focused digital products — from web to mobile to AI.
            </p>
          </div>

          <div className="hero-fade mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="/images/Shazan_CV.pdf"
              download="Shazan_CV.pdf"
              className="group inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-400/5 px-6 py-3 font-primary text-xs uppercase tracking-[0.2em] text-emerald-300 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 transition-transform group-hover:scale-150" />
              Download CV
            </a>
            <Social
              containerStyles="flex gap-4"
              iconStyles="border border-white/20 p-2.5 rounded-full text-white/70 transition-all duration-300 hover:text-emerald-400 hover:border-emerald-400 hover:scale-110"
            />
          </div>
        </div>

        {/* Enter system cue */}
        <a
          href="#resume"
          className="hero-fade flex flex-col items-center gap-3 self-center pb-8"
        >
          <span className="hero-vline h-14 w-px bg-gradient-to-b from-transparent via-emerald-400/60 to-emerald-400" />
          <span className="font-primary text-[10px] uppercase tracking-[0.3em] text-white/50">
            Enter System ↓
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
