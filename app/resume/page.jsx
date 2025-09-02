"use client"

import { FaGraduationCap, FaBriefcase } from "react-icons/fa"
import { motion } from "framer-motion"

const education = [
  {
    year: "2024-2028",
    title: "BSc(Hons) in Information Technology",
    place: "University of Moratuwa",
    description: "Focused on software engineering, algorithms, and full-stack web development."
  },
  // {
  //   year: "2018 - 2020",
  //   title: "High School",
  //   place: "XYZ College",
  //   description: "Studied mathematics and computer science with excellent academic performance."
  // }
]

const experience = [
  {
    year: "2025 - Present",
    title: "Fullstack Developer Intern",
    place: "Tech Solutions WeBloomLabs.",
    description: "Worked on backend APIs, frontend UI, and integrated third-party services."
  },
  // {
  //   year: "2022 - 2023",
  //   title: "Freelance Developer",
  //   place: "Remote",
  //   description: "Built modern web applications and REST APIs for clients worldwide."
  // }
]

const skills = [
  { name: "JavaScript", level: 75 },
  { name: "React.js", level: 70 },
  { name: "Next.js", level: 60 },
  { name: "Node.js / Express", level: 40 },
  { name: "MongoDB / SQL", level: 20 },
  { name: "C", level: 65 },
  { name: "Python", level: 35 }
]

const Resume = () => {
  return (
    <div className="h-screen overflow-hidden">
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>

      <div className="min-h-screen bg-[#0a0f1c] text-white px-6 py-16 flex items-center justify-center">
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

            <h2 className="text-4xl font-bold mt-12 mb-8">Achievements</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Built a real-time chat app with Next.js & Socket.io</li>
              <li>Contributed to open-source projects on GitHub</li>
              <li>Winner of Hackathon 2023 (Backend Challenge)</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
