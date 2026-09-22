"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { competitions, volunteering } from "@/constants/data";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaTrophy, FaHandsHelping } from "react-icons/fa";

const HighlightCard = ({ item, category }) => (
  <Link
    href={`/highlights/${category}/${item.slug}`}
    className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/[0.04]"
    data-reveal="scale"
  >
    {/* cover */}
    <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0d]">
      <img
        src={item.cover}
        alt={item.title}
        className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 font-primary text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
        {item.role} · {item.date}
      </span>
    </div>

    {/* body */}
    <div className="flex flex-1 flex-col p-6">
      <h4 className="font-display text-2xl text-white">{item.title}</h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
        {item.brief}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 font-primary text-xs uppercase tracking-[0.2em] text-emerald-400">
        View details
        <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  </Link>
);

const CompetitionsGroup = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? competitions : competitions.slice(0, 3);
  const hidden = competitions.length - 3;

  return (
    <div className="mt-0">
      <h3 className="reveal mb-8 flex items-center gap-3 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
        <FaTrophy className="text-emerald-400" />
        Competitions
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <HighlightCard key={item.slug} item={item} category="competitions" />
        ))}
      </div>

      {competitions.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((p) => !p)}
            className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-3 font-primary text-xs uppercase tracking-[0.2em] text-white/70 transition-all hover:border-emerald-400 hover:text-emerald-400"
          >
            {showAll ? (
              <>Show less <FiChevronUp className="transition-transform group-hover:-translate-y-0.5" /></>
            ) : (
              <>View more ({hidden}) <FiChevronDown className="transition-transform group-hover:translate-y-0.5" /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

const VolunteeringGroup = () => {
  if (!volunteering?.length) return null;
  return (
    <div className="mt-16">
      <h3 className="reveal mb-8 flex items-center gap-3 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
        <FaHandsHelping className="text-emerald-400" />
        Volunteering
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {volunteering.map((item) => (
          <HighlightCard key={item.slug} item={item} category="volunteering" />
        ))}
      </div>
    </div>
  );
};

const Highlights = () => {
  return (
    <AnimatedSection
      id="highlights"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-12 md:py-36"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="04" label="Activities" title="BEYOND CODE" />
        <CompetitionsGroup />
        <VolunteeringGroup />
      </div>
    </AnimatedSection>
  );
};

export default Highlights;
