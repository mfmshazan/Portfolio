"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Platform",
    number: "01",
    description:
      "Full-stack MERN e-commerce app with authentication, product management, and Stripe payment integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/eCommerce.webp",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    number: "02",
    description:
      "A responsive personal portfolio built with Next.js and TailwindCSS to showcase skills and projects.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/images/portfolio.png",
    github: "#",
    live: "#",
  },
  
 {
    title: "Expense Tracker",
    number: "03",
    description:
      "A simple and intuitive expense tracker web application built with React and a local storage API. This project helps users manage their daily spending.",
    tech: ["React", "CSS", "Local Storage"],
    image: "/images/expenseTracker.png",
    github: "#",
    live: "#",
  },
];

const Works = () => {
  return (
    <section className="min-h-screen text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-36  max-w-full">
         
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-60 items-center">
              {/* Left Side - Project Details */}
              <div className="md:w-1/2 flex flex-col space-y-4 text-center md:text-left">
                <span className="text-white font-bold text-4xl">{project.number}</span>
                <h3 className="text-4xl font-bold ">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="pr-2   text-emerald-400 text-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-emerald-500 transition hover:scale-110 duration-300">
                    <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-emerald-500 transition  hover:scale-110 duration-300">
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Right Side - Image Preview */}
              <div className="md:w-1/2 flex justify-center">
                <img src={project.image} alt={project.title} className="rounded-lg shadow-xl w-full max-w-md hover:scale-110 duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
