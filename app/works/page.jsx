"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Buy Plants",
    number: "01",
    description:
      "An online plant marketplace where customers can browse and purchase a variety of plants. Features a modern, user-friendly interface with product listings and e-commerce functionality.",
    tech: ["Next.js", "React", "TailwindCSS"],
    image: "/images/buyplants.png",
    github: "#",
    live: "https://www.buyplants.lk/",
  },
  {
    title: "Code Collab",
    number: "02",
    description:
      "A real-time collaborative code editor that allows multiple developers to work together seamlessly. Features live code synchronization and interactive collaboration tools.",
    tech: ["React", "Node.js", "Socket.io"],
    image: "/images/code-collab.png",
    github: "https://github.com/mfmshazan/code-collab",
    live: "https://code-collab-weld.vercel.app/",
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
