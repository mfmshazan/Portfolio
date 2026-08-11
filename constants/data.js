// ============================================================
// Single source of truth for all portfolio data.
// Edit this file to update content across the entire site.
// ============================================================

export const education = [
  {
    year: "2024-2028",
    title: "BSc(Hons) in Information Technology",
    place: "University of Moratuwa",
    description: "Focused on software engineering, algorithms, and full-stack web development.",
  },
]

export const experience = [
  {
    year: "2025 - Present",
    title: "Fullstack Developer",
    place: "Tech Solutions WeBloomLabs.",
    description: "Worked on backend APIs, frontend UI, and integrated third-party services.",
  },
  {
    year: "2026 - Present",
    title: "Software Engineer",
    place: "WIWIS.AI",
    description: "Contributed to real-world project with Next.js and WebSocket.",
  },
]

export const skillCategories = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native", "TailwindCSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Socket.io", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
  {
    category: "AI & Integrations",
    items: ["AI APIs", "Google Maps API", "EmailJS"],
  },
]

export const projects = [
  {
    title: "Buy Plants",
    number: "01",
    description:
      "An online plant marketplace where customers can browse and purchase a variety of plants. Features a modern, user-friendly interface with product listings and e-commerce functionality.",
    tech: ["Next.js", "React", "Node.js", "TailwindCSS"],
    image: "/images/buyplants.png",
    github: "#",
    live: "https://www.buyplants.lk/",
  },
  {
    title: "CrickScore",
    number: "02",
    description:
      "A multi-tenant live cricket scoring platform where organizers run their own tournaments and viewers follow live scores, scorecards, and stats. Features ball-by-ball scoring and role-based access with JWT authentication.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    image: "/images/crickscore.png",
    github: "https://github.com/mfmshazan/cricket-score",
    live: "https://crickscore-seven.vercel.app/",
  },
  {
    title: "Warehouse Management System",
    number: "03",
    description:
      "An AI-powered warehouse management system that streamlines inventory tracking, stock movements, and order management. Features intelligent insights, real-time stock monitoring, and an intuitive dashboard for warehouse operators.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "TailwindCSS", "Google Gemini API", "JWT"],
    image: "/images/wms.png",
    github: "https://github.com/mfmshazan/warehouse-management-system",
    live: "https://warehouse-management-system-ashen.vercel.app/",
  },
  {
    title: "Code Collab",
    number: "04",
    description:
      "A real-time collaborative code editor that allows multiple developers to work together seamlessly. Features live code synchronization and interactive collaboration tools.",
    tech: ["React", "Node.js", "Socket.io", "TailwindCSS"],
    image: "/images/code-collab.png",
    github: "https://github.com/mfmshazan/code-collab",
    live: "https://live-codes.vercel.app/",
  },
  {
    title: "Floodlit Ground Booking",
    number: "05",
    description:
      "A floodlit cricket ground booking system for evening and night sessions (6:00 PM – 2:00 AM). Users pick a date, reserve time slots, and see instant pricing with hourly rates and whole-night packages. Features real-time slot availability and a streamlined instant-booking flow.",
    tech: ["Next.js", "React", "Node.js", "TailwindCSS"],
    image: "/images/floodlit.png",
    github: "#",
    live: "https://booking-system-teal.vercel.app/",
  },
  {
    title: "DIGIFIX Auto Parts",
    number: "06",
    description:
      "A full-stack car parts marketplace platform — buyers can search parts by number plate, browse categories, and track live deliveries via Google Maps. Sellers manage inventory and orders through a dedicated dashboard. Features real-time GPS tracking, push notifications, and a React Native mobile app.",
    tech: ["Next.js", "React Native", "Node.js", "PostgreSQL", "TailwindCSS", "Google Maps API", "Socket.io"],
    image: "/images/digifix-autoparts.png",
    github: null,
    live: null,
    isPrivate: true,
    isUnderDevelopment: true,
  },
]

export const services = [
  {
    number: "01",
    title: "Web Development",
    Description:
      "Building responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.",
    href: "",
  },
  {
    number: "02",
    title: "AI Integration",
    Description:
      "Integrating AI-powered features into applications — from chatbots and recommendation engines to intelligent automation using modern AI APIs and models.",
    href: "",
  },
  {
    number: "03",
    title: "Backend Development",
    Description:
      "Developing robust backend systems and APIs using Node.js, Express, and databases like MongoDB and PostgreSQL.",
    href: "",
  },
  {
    number: "04",
    title: "Mobile App Development",
    Description:
      "Building cross-platform mobile applications using React Native — delivering smooth, native-like experiences for both iOS and Android.",
    href: "",
  },
]
