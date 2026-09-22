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
  SiGit,
  SiDocker,
  SiVercel,
  SiPostman,
  SiOpenai,
  SiVite,
  SiFastapi,
  SiSupabase,
  SiRedis,
  SiPrisma,
  SiExpo,
  SiRedux,
  SiGithubactions,
} from "react-icons/si"
import { FaJava, FaDatabase, FaAws, FaBrain, FaCloud, FaLock } from "react-icons/fa"
import { TbNetwork, TbBinaryTree, TbBraces } from "react-icons/tb"
import { skillCategories } from "@/constants/data"

const iconMap = {
  // Languages
  JavaScript:              { icon: SiJavascript,    color: "#F7DF1E" },
  TypeScript:              { icon: SiTypescript,    color: "#3178C6" },
  Python:                  { icon: SiPython,        color: "#3776AB" },
  Java:                    { icon: FaJava,          color: "#F89820" },
  C:                       { icon: TbBraces,        color: "#A8B9CC" },

  // Frontend
  "React.js":              { icon: SiReact,         color: "#61DAFB" },
  "Next.js":               { icon: SiNextdotjs,     color: "#FFFFFF" },
  "React Native (Expo)":   { icon: SiExpo,          color: "#FFFFFF" },
  "Redux Toolkit":         { icon: SiRedux,         color: "#764ABC" },
  "React Query":           { icon: SiReact,         color: "#FF4154" },
  TailwindCSS:             { icon: SiTailwindcss,   color: "#06B6D4" },
  Vite:                    { icon: SiVite,          color: "#646CFF" },

  // Backend
  "Node.js":               { icon: SiNodedotjs,     color: "#5FA04E" },
  "Express.js":            { icon: SiExpress,       color: "#FFFFFF" },
  FastAPI:                 { icon: SiFastapi,       color: "#009688" },
  "REST APIs":             { icon: TbNetwork,       color: "#6CC417" },
  "WebSocket / Socket.IO": { icon: SiSocketdotio,  color: "#FFFFFF" },
  "JWT & Clerk Auth":      { icon: FaLock,          color: "#6CC417" },

  // AI / ML
  LangGraph:               { icon: TbBinaryTree,    color: "#6CC417" },
  RAG:                     { icon: FaBrain,         color: "#A78BFA" },
  Qdrant:                  { icon: FaDatabase,      color: "#DC244C" },
  "OpenAI & Gemini APIs":  { icon: SiOpenai,        color: "#FFFFFF" },

  // Databases & ORM
  PostgreSQL:              { icon: SiPostgresql,    color: "#4169E1" },
  NeonDB:                  { icon: SiPostgresql,    color: "#00E6CC" },
  MongoDB:                 { icon: SiMongodb,       color: "#47A248" },
  Supabase:                { icon: SiSupabase,      color: "#3ECF8E" },
  Redis:                   { icon: SiRedis,         color: "#FF4438" },
  Prisma:                  { icon: SiPrisma,        color: "#FFFFFF" },

  // DevOps & Tools
  Docker:                  { icon: SiDocker,        color: "#2496ED" },
  "GitHub Actions (CI/CD)":{ icon: SiGithubactions, color: "#2088FF" },
  Git:                     { icon: SiGit,           color: "#F05032" },
  Postman:                 { icon: SiPostman,       color: "#FF6C37" },
  Vercel:                  { icon: SiVercel,        color: "#FFFFFF" },
  Render:                  { icon: FaCloud,         color: "#46E3B7" },
  AWS:                     { icon: FaAws,           color: "#FF9900" },
}

const fallback = { icon: TbNetwork, color: "#6CC417" }

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
          <h4 className="w-full sm:w-44 shrink-0 text-xs font-semibold uppercase tracking-wider text-emerald-500">
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
