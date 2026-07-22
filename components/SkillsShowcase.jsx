"use client"

import { motion } from "framer-motion"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiPostman,
  SiGooglemaps,
  SiOpenai,
} from "react-icons/si"
import { FaJava, FaDatabase } from "react-icons/fa"
import { TbApi } from "react-icons/tb"
import { MdEmail } from "react-icons/md"
import { skillCategories } from "@/constants/data"

// Maps a skill name (from constants/data.js) to its brand icon + colour.
// Add a new entry here when you add a new skill string in data.js.
const iconMap = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#F89820" },
  SQL: { icon: FaDatabase, color: "#4479A1" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "#FFFFFF" },
  "Socket.io": { icon: SiSocketdotio, color: "#FFFFFF" },
  "REST APIs": { icon: TbApi, color: "#10B981" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Vercel: { icon: SiVercel, color: "#FFFFFF" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "AI APIs": { icon: SiOpenai, color: "#10B981" },
  "Google Maps API": { icon: SiGooglemaps, color: "#4285F4" },
  EmailJS: { icon: MdEmail, color: "#10B981" },
}

const fallback = { icon: TbApi, color: "#10B981" }

const SkillsShowcase = () => {
  return (
    <div className="divide-y divide-white/5">
      {skillCategories.map((group, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3"
        >
          <h4 className="w-full sm:w-40 shrink-0 text-xs font-semibold uppercase tracking-wider text-emerald-500">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, j) => {
              const { icon: Icon, color } = iconMap[item] || fallback
              return (
                <motion.span
                  key={j}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: j * 0.03 }}
                  whileHover={{ y: -2 }}
                  className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/5 bg-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all cursor-default"
                >
                  <Icon className="text-base shrink-0" style={{ color }} />
                  <span className="text-xs text-gray-300 whitespace-nowrap">
                    {item}
                  </span>
                </motion.span>
              )
            })}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillsShowcase
