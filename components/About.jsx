"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import SkillsShowcase from "@/components/SkillsShowcase";
import { education, experience } from "@/constants/data";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const TimelineColumn = ({ title, items, Icon }) => (
  <div>
    <h3 className="reveal mb-8 flex items-center gap-3 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
      <Icon className="text-emerald-400" />
      {title}
    </h3>
    <div className="relative space-y-8 pl-6">
      {/* vertical guide line */}
      <span className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-emerald-400/60 via-white/10 to-transparent" />
      {items.map((item, i) => (
        <div key={i} className="reveal group relative" data-reveal="left">
          <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full border border-emerald-400 bg-black transition-all group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px] group-hover:shadow-emerald-400" />
          <p className="font-primary text-xs uppercase tracking-[0.2em] text-emerald-400">
            {item.year}
          </p>
          <h4 className="mt-1 text-lg font-semibold text-white">{item.title}</h4>
          <p className="text-sm text-white/40">{item.place}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-white/50">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <AnimatedSection
      id="resume"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-12 md:py-36"
    >
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(108,196,23,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(108,196,23,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="01" label="About Me" title="THE JOURNEY" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <TimelineColumn title="Education" items={education} Icon={FaGraduationCap} />
          <TimelineColumn title="Experience" items={experience} Icon={FaBriefcase} />
        </div>

        <div className="mt-20">
          <h3 className="reveal mb-8 font-primary text-sm uppercase tracking-[0.25em] text-white/60">
            <span className="text-emerald-400">/</span> Tech Stack
          </h3>
          <div className="reveal">
            <SkillsShowcase />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
