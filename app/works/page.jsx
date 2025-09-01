export default function Works() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with Next.js and TailwindCSS to showcase skills and projects. This project focused on creating a fast, accessible, and modern user experience with smooth transitions.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      image: "/images/portfolio.png",
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack MERN e-commerce app with authentication, product management, and Stripe payment integration.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://www.googleusercontent.com/image_generation_content/4",
      link: "#",
    },
    {
      title: "IoT Smart Pump",
      description:
        "An IoT-enabled smart water pump controlled via a web dashboard using ESP32 and Firebase. This was a challenging hardware-software integration project.",
      tech: ["ESP32", "Firebase", "React"],
      image: "https://www.googleusercontent.com/image_generation_content/1",
      link: "#",
    },
    {
      title: "Real-time Chat App",
      description:
        "Developed a real-time chat application using WebSockets. Users can create rooms and chat instantly with other members.",
      tech: ["Next.js", "Socket.io", "Node.js"],
      image: "https://www.googleusercontent.com/image_generation_content/5",
      link: "#",
    },
    {
      title: "AI-Powered Image Generator",
      description:
        "A full-stack application that generates images using an AI model based on user prompts.",
      tech: ["Python", "Flask", "React", "DALL-E API"],
      image: "https://www.googleusercontent.com/image_generation_content/2",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen text-white px-6 py-16 mt-5">
      <div className="max-w-6xl mx-auto">
   
        {/* Standard Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-xl p-4 shadow-lg transition-all duration-300 hover:shadow-[0_0_10px_2px_rgba(10,140,90,1)] flex flex-col justify-between h-full"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg mb-3"
                />

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                className="inline-block px-3 py-1.5 text-sm border border-emerald-500 rounded-md hover:bg-emerald-500 hover:text-black transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}