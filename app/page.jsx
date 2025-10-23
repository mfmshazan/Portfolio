"use client"

import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FiDownload } from "react-icons/fi"
import { ReactTyped } from "react-typed"
import TechBackground from "@/components/TechBackground"
import { FaGraduationCap, FaBriefcase, FaGithub, FaExternalLinkAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import Link from "next/link"

const education = [
  {
    year: "2024-2028",
    title: "BSc(Hons) in Information Technology",
    place: "University of Moratuwa",
    description: "Focused on software engineering, algorithms, and full-stack web development."
  },
]

const experience = [
  {
    year: "2025 - Present",
    title: "Fullstack Developer",
    place: "Tech Solutions WeBloomLabs.",
    description: "Worked on backend APIs, frontend UI, and integrated third-party services."
  },
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

const services = [
  {
    number: "01",
    title: "Web Development",
    Description: "Building responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.",
    href: ""
  },
  {
    number: "02",
    title: "UI/UX Design",
    Description: "Creating user-friendly interfaces and engaging user experiences with a focus on usability and aesthetics.",
    href: ""
  },
  {
    number: "03",
    title: "Backend Development",
    Description: "Developing robust backend systems and APIs using Node.js, Express, and databases like MongoDB and PostgreSQL.",
    href: ""
  },
  {
    number: "04",
    title: "Figma to Code",
    Description: "Converting Figma designs into clean, efficient, and responsive code for seamless web",
    href: ""
  }
]

const projects = [
  {
    title: "E-commerce Platform",
    number: "01",
    description: "Full-stack MERN e-commerce app with authentication, product management, and Stripe payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/eCommerce.webp",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    number: "02",
    description: "A responsive personal portfolio built with Next.js and TailwindCSS to showcase skills and projects.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/images/portfolio.png",
    github: "#",
    live: "#",
  },
  {
    title: "Expense Tracker",
    number: "03",
    description: "A simple and intuitive expense tracker web application built with React and a local storage API. This project helps users manage their daily spending.",
    tech: ["React", "CSS", "Local Storage"],
    image: "/images/expenseTracker.png",
    github: "#",
    live: "#",
  },
]

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-emerald-500" />,
    title: "Phone",
    description: "+94 769157565"
  },
  {
    icon: <FaEnvelope className="text-emerald-500" />,
    title: "Email",
    description: "faslanshazan23@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt className="text-emerald-500" />,
    title: "Address",
    description: "Galle Road Katubedda, Colombo, Sri Lanka"
  }
]

const Home = () => {
  return (
    <div className="bg-[#0a0f1c]">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#0a0f1c] via-[#0d1525] to-[#0a0f1c]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center xl:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[20px] xl:text-[30px] font-extralight leading-[1.5]"
              >
                Hello I'm <br />
                <span className="name font-light tracking-tight">Shazan Faslan</span>
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[20px] xl:text-[40px] font-medium mt-10 text-emerald-500"
              >
                <ReactTyped
                  strings={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-xl mt-6 text-gray-600 font-medium"
              >
                I'm a Fullstack Developer passionate about solving problems and building user-focused digital solutions.
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex mt-8"
              >
                <div className="flex gap-8 px-1 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
                  <Button variant="outline" className="flex items-center gap-2 text-md hover:bg-emerald-500/10 transition-all">
                    Download CV
                    <FiDownload className="text-xl" />
                  </Button>
                </div>
                <div className="ml-20 mt-3">
                  <Social
                    containerStyles="flex gap-14 text-lg border-l border-white/20 pl-16 hover:text-emerald-500"
                    iconStyles="border border-white p-2 rounded-full text-white transition duration-300 hover:text-emerald-500 transition duration-300 hover:border-emerald-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative w-full xl:w-1/2 flex flex-col items-center justify-center mt-8 xl:mt-0"
            >
              {/* Floating Code Animation */}
              <div className="relative w-full max-w-md h-[400px]">
                {/* Center Circle */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full backdrop-blur-xl border border-emerald-500/30 flex items-center justify-center"
                >
                  <span className="text-4xl">👨‍💻</span>
                </motion.div>

                {/* Orbiting Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                >
                  {/* React */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-xl backdrop-blur-md border border-cyan-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-2xl">⚛️</span>
                  </motion.div>

                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl backdrop-blur-md border border-green-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-2xl">🟢</span>
                  </motion.div>

                  {/* Code */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl backdrop-blur-md border border-purple-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-2xl">💻</span>
                  </motion.div>

                  {/* Database */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-xl backdrop-blur-md border border-orange-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-2xl">🗄️</span>
                  </motion.div>
                </motion.div>

                {/* Second Ring - Faster */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]"
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-lg backdrop-blur-md border border-yellow-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-xl">⚡</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-pink-500/20 to-pink-500/10 rounded-lg backdrop-blur-md border border-pink-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-xl">🎨</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg backdrop-blur-md border border-blue-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-xl">🚀</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-500/10 rounded-lg backdrop-blur-md border border-red-500/30 flex items-center justify-center cursor-pointer"
                  >
                    <span className="text-xl">🔥</span>
                  </motion.div>
                </motion.div>

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className="absolute w-2 h-2 bg-emerald-500/40 rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 20}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me / Resume Section */}
      <section id="resume" className="min-h-screen text-white px-6 py-32 relative bg-gradient-to-b from-[#0a0f1c] via-[#162032] to-[#0a0f1c]">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Left Side - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8"
            >
              Education
            </motion.h2>
            <div className="space-y-8">
              {education.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                >
                  <FaGraduationCap className="text-emerald-500 text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-emerald-500">{item.year} | {item.place}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mt-12 mb-8"
            >
              Experience
            </motion.h2>
            <div className="space-y-8">
              {experience.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                >
                  <FaBriefcase className="text-emerald-500 text-2xl mt-1" />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-emerald-500">{item.year} | {item.place}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8"
            >
              Skills
            </motion.h2>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 rounded-lg hover:bg-white/5 transition-all"
                >
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
                      transition={{ duration: 1.5, ease: "easeInOut", delay: i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex flex-col justify-center py-32 text-white relative bg-[#0d1525]">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
        {/* Glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 } 
                }}
                className="flex-1 flex flex-col gap-6 group p-8 rounded-2xl border border-white/10 hover:border-emerald-500/50 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-full flex justify-between items-center">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-emerald-500"
                  >
                    {service.number}
                  </motion.div>
                </div>
                <h2 className="font-bold text-2xl group-hover:text-emerald-500 transition-colors">{service.title}</h2>
                <p className="text-white/60 group-hover:text-white/80 transition-colors">{service.Description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Works Section */}
      <section id="works" className="min-h-screen text-white px-6 py-32 relative bg-gradient-to-br from-[#0a0f1c] via-[#0f1729] to-[#0a0f1c]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-16 text-center"
          >
            Projects
          </motion.h2>
          <div className="flex flex-col space-y-36 max-w-full">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row gap-60 items-center"
              >
                {/* Left Side - Project Details */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:w-1/2 flex flex-col space-y-4 text-center md:text-left"
                >
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-white font-bold text-4xl"
                  >
                    {project.number}
                  </motion.span>
                  <h3 className="text-4xl font-bold">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {project.tech.map((t, i) => (
                      <motion.span 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="pr-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-md border border-emerald-500/20 hover:border-emerald-500 transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl hover:text-emerald-500 transition p-3 rounded-full border border-white/20 hover:border-emerald-500"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl hover:text-emerald-500 transition p-3 rounded-full border border-white/20 hover:border-emerald-500"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Right Side - Image Preview */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="md:w-1/2 flex justify-center"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg shadow-2xl w-full max-w-md border border-white/10 hover:border-emerald-500/50 transition-all" 
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen text-white px-6 py-32 flex items-center justify-center relative bg-gradient-to-t from-[#0a0f1c] via-[#162032] to-[#0a0f1c]">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl"></div>
          {/* Radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
        </div>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 mb-10"
            >
              Feel free to reach out for collaborations or just a friendly hello 👋
            </motion.p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-6 p-4 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#162032] p-8 rounded-2xl shadow-lg border border-white/10"
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400 transition-all hover:border-white/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400 transition-all hover:border-white/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400 transition-all hover:border-white/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Textarea
                  placeholder="Message"
                  className="bg-[#0d1525] border border-transparent focus:border-emerald-500 text-white placeholder-gray-400 h-32 transition-all hover:border-white/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

