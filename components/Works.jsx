"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/constants/data";
import { FaGithub, FaExternalLinkAlt, FaAndroid } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiArrowUpRight } from "react-icons/fi";

const Works = () => {
  const [visible, setVisible] = useState(4);
  const shown = projects.slice(0, visible);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
  }, [visible]);

  return (
    <section id="works" className="relative bg-black text-white">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-12 md:pt-36">
        <p className="mb-4 flex items-center gap-3 font-primary text-xs uppercase tracking-[0.35em] text-emerald-400">
          <span className="h-px w-10 bg-emerald-400" />
          03 / Selected Work
        </p>
        <h2 className="font-display text-[13vw] leading-[0.85] text-white md:text-[6.5vw]">
          PROJECTS
        </h2>
      </div>

      {/* Stacking full-screen panels */}
      <div className="relative mt-16">
        {shown.map((project, index) => {
          const accent = index % 2 === 1;
          return (
            <div
              key={project.number}
              className="project-panel sticky top-0 flex h-screen w-full items-center overflow-hidden border-t border-white/10 bg-[#0d0d0d]"
            >
              {/* faint project image as backdrop */}
              <div className="pointer-events-none absolute inset-0">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover opacity-[0.12]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/85 to-[#0d0d0d]/40" />
              </div>

              <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 pt-16 md:px-12">
                {/* top row: pill + dot */}
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/25 px-4 py-1.5 font-primary text-xs uppercase tracking-[0.2em] text-white/80">
                    Project / {project.number}
                  </span>
                  <span
                    className={`h-3 w-3 rounded-full ${
                      accent
                        ? "bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400"
                        : "bg-white/80"
                    }`}
                  />
                </div>

                {/* title */}
                <h3
                  className={`mt-10 font-display text-[13vw] leading-[0.9] md:mt-16 md:text-[7vw] ${
                    accent ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {project.title}
                </h3>

                {/* description */}
                <p className="mt-6 max-w-2xl font-primary text-sm leading-relaxed text-white/50 md:text-base">
                  {project.description}
                </p>

                {/* tech + links */}
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-primary text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
                  {/* Primary: More details */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 font-primary text-xs uppercase tracking-[0.2em] text-black transition-all hover:bg-emerald-400"
                  >
                    More details <FiArrowUpRight />
                  </Link>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-primary text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-emerald-400 hover:text-emerald-400"
                    >
                      Live <FaExternalLinkAlt />
                    </a>
                  )}

                  {project.apks?.map((apk) => (
                    <a
                      key={apk.label}
                      href={apk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-primary text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-emerald-400 hover:text-emerald-400"
                    >
                      <FaAndroid /> {apk.label}
                    </a>
                  ))}

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-primary text-xs uppercase tracking-[0.2em] text-white transition-all hover:border-emerald-400 hover:text-emerald-400"
                    >
                      Code <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View more / less */}
      {projects.length > 4 && (
        <div className="relative z-10 flex justify-center bg-black py-20">
          {visible < projects.length ? (
            <button
              onClick={() => setVisible((p) => Math.min(p + 3, projects.length))}
              className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-primary text-xs uppercase tracking-[0.2em] text-white/70 transition-all hover:border-emerald-400 hover:text-emerald-400"
            >
              View more ({projects.length - visible})
              <FiChevronDown className="transition-transform group-hover:translate-y-0.5" />
            </button>
          ) : (
            <button
              onClick={() => setVisible(4)}
              className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-primary text-xs uppercase tracking-[0.2em] text-white/70 transition-all hover:border-emerald-400 hover:text-emerald-400"
            >
              Show less
              <FiChevronUp className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Works;
