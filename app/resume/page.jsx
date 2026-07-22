"use client"

import { FaGraduationCap, FaBriefcase } from "react-icons/fa"
import { education, experience } from "@/constants/data"
import SkillsShowcase from "@/components/SkillsShowcase"

const Resume = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-[80vh] bg-[#0a0f1c] text-white px-6 pt-0 pb-16 flex items-center justify-center">
        <div className="max-w-6xl w-full">

          {/* Top Row - Education & Experience side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Education</h2>
              <div className="space-y-8">
                {education.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <FaGraduationCap className="text-emerald-500 text-2xl mt-1" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-emerald-500">{item.year} | {item.place}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Experience</h2>
              <div className="space-y-8">
                {experience.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <FaBriefcase className="text-emerald-500 text-2xl mt-1" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-emerald-500">{item.year} | {item.place}</p>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom - Skills full width */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <SkillsShowcase />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
