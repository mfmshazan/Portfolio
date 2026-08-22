"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/constants/data";
import { FiArrowUpRight } from "react-icons/fi";

const Services = () => {
  return (
    <AnimatedSection
      id="services"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white md:px-12 md:py-36"
    >
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="02" label="Services" title="WHAT I DO" />

        <div className="border-t border-white/10">
          {services.map((service) => (
            <div
              key={service.number}
              className="reveal group relative flex flex-col gap-4 border-b border-white/10 py-8 transition-colors md:flex-row md:items-center md:gap-10 md:py-10"
            >
              {/* hover fill */}
              <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-emerald-400/10 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative font-primary text-sm text-emerald-400 md:w-16">
                {service.number}
              </span>
              <h3 className="relative font-display text-4xl leading-none text-white/80 transition-colors duration-300 group-hover:text-white md:w-96 md:text-6xl">
                {service.title}
              </h3>
              <p className="relative max-w-md text-sm leading-relaxed text-white/50 md:flex-1">
                {service.Description}
              </p>
              <FiArrowUpRight className="relative text-2xl text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Services;
