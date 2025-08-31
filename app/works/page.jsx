export default function Works() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with Next.js and TailwindCSS to showcase skills and projects.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack MERN e-commerce app with authentication, product management, and Stripe payment integration.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "#",
    },
    {
      title: "IoT Smart Pump",
      description:
        "An IoT-enabled smart water pump controlled via web dashboard using ESP32 and Firebase.",
      tech: ["ESP32", "Firebase", "React"],
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen text-white px-8 py-16">
      <h2 className="text-4xl font-bold mb-10 border-l-4 border-emerald-500 pl-3">
        Works
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
             className="bg-[#111827] rounded-2xl p-6 shadow-lg transition-all duration-300
             hover:shadow-[0_0_20px_4px_rgba(10,100,80,0.5)]"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-md text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              className="inline-block px-4 py-2 border border-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-black transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
