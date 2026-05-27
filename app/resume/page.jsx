"use client"

import { FaGraduationCap, FaBriefcase } from "react-icons/fa"
import { motion } from "framer-motion"
import { education, experience, skills } from "@/constants/data"

const Resume = () => {
  return (
    <div className="h-[80vh] overflow-hidden">
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>

     <div className="min-h-[80vh] bg-[#0a0f1c] text-white px-6 pt-0 pb-16 flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side - Education & Experience */}
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

            <h2 className="text-4xl font-bold mt-12 mb-8">Experience</h2>
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

          {/* Right Side - Skills */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill.name}</span>
                    <span className="text-emerald-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-emerald-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
