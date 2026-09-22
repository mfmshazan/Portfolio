// ============================================================
// Single source of truth for all portfolio data.
// Edit this file to update content across the entire site.
// ============================================================

export const aboutBio = [
  "I'm Shazan, a Software Engineer and IT undergraduate at the University of Moratuwa, driven by curiosity and a genuine interest in using technology to solve meaningful problems.",
  "I enjoy building software, exploring AI, and learning about DevOps. I want to understand not just how software is built, but how it's deployed, maintained, and continuously improved. My goal is to become a well-rounded engineer who thinks critically, adapts to new technologies, and builds reliable products that make a real difference.",
];

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
    items: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "React Native (Expo)", "Redux Toolkit", "React Query", "TailwindCSS", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "REST APIs", "WebSocket / Socket.IO", "JWT & Clerk Auth"],
  },
  {
    category: "AI / ML",
    items: ["LangGraph", "RAG", "Qdrant", "OpenAI & Gemini APIs"],
  },
  {
    category: "Databases & ORM",
    items: ["PostgreSQL", "NeonDB", "MongoDB", "Supabase", "Redis", "Prisma"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions (CI/CD)", "Git", "Postman", "Vercel", "Render", "AWS"],
  },
]

// Each project shows a stacking panel in the Works section. "More details"
// opens /projects/<slug>, which reads the `details` block below.
// Drop extra screenshots into public/images/<slug>/... and list them in gallery.

export const projects = [
  {
    slug: "agent-ally",
    title: "Agent Ally",
    number: "01",
    description:
      "An accessibility-first control layer for AI coding agents. Every decision is read aloud, keyboard-navigable, and drivable from your phone, so anyone can use it.",
    tech: ["TypeScript", "Node.js", "WebSocket", "Express", "Web Speech API", "Claude Code"],
    image: "/images/agent-ally.png",
    github: "https://github.com/mfmshazan/agent-ally",
    live: null,
    details: {
      overview: [
        "AI coding agents pause mid-task to ask for permission: Can I run this command? Which option do you want? In the terminal those prompts use arrow-key widgets and streaming output that screen readers handle poorly, yet they are the highest-stakes moments in a session.",
        "Agent Ally wraps the agent's decision loop in a fully accessible experience. Every decision is announced, navigated by keyboard, and confirmed aloud before anything commits. You can also approve decisions from your phone over Wi-Fi, so you are never tied to the terminal. The name is a pun: a11y (accessibility) + ally (a helper on your side).",
      ],
      features: [
        "Spoken decisions: every permission prompt and multiple-choice question is read aloud with an earcon, full text, then options as a numbered list",
        "Keyboard navigation: arrow and number keys move between options. Enter commits (high-risk needs a second Enter), R replays, D reads the full command",
        "Phone control: scan a QR at launch, then send prompts and approve decisions from a web page over local Wi-Fi with no app to install",
        "Phone voice: speak your prompts and have decisions read aloud from the phone",
        "File and photo uploads, multiple chats, cross-device history, and session resume",
      ],
      role:
        "Solo project. Designed and built the entire accessibility layer, the CLI wrapper around the agent, and the phone-control web app.",
      gallery: [],
    },
  },
  {
    slug: "enterprise-knowledge-assistant",
    title: "Enterprise Knowledge Assistant",
    number: "02",
    description:
      "A production-grade RAG and Agentic AI platform. Upload documents and websites, then let your organization ask questions and get cited, verified answers via a multi-agent LangGraph pipeline.",
    tech: ["Next.js 15", "FastAPI", "Python", "LangGraph", "LangChain", "Qdrant", "PostgreSQL", "Redis", "Docker"],
    image: "/images/eka.png",
    github: "https://github.com/mfmshazan/enterprise-knowledge-assistant",
    live: "https://eka-23.vercel.app",
    details: {
      overview: [
        "Enterprise Knowledge Assistant lets an organization ingest PDF, DOCX, and Markdown files along with crawled websites, then ask questions and get grounded answers with inline source citations that link back to the exact chunk.",
        "It runs two decoupled loops: an asynchronous ingestion path that turns raw files into embedded, searchable chunks using Qdrant as a rebuildable index, and a latency-sensitive query path that retrieves context and runs a multi-agent pipeline (Planner, Retrieval, Verification, Generation) orchestrated by LangGraph.",
      ],
      features: [
        "Ingest PDF, DOCX, and Markdown files along with crawled websites",
        "Retrieve relevant context via Qdrant vector search and reranking",
        "Reason with a multi-agent LangGraph pipeline: Planner, Retrieval, Verification, Generation",
        "Answer with inline source citations linking back to the exact chunk",
        "Per-user conversation memory, plus organizations, roles, and an admin dashboard",
      ],
      role:
        "Architected the RAG pipeline and multi-agent orchestration, and built the ingestion and query paths along with the Next.js dashboard.",
      gallery: [],
    },
  },
  {
    slug: "crickscore",
    title: "CrickScore",
    number: "03",
    description:
      "A multi-tenant live cricket scoring platform where organizers run their own tournaments and viewers follow live scores, scorecards, and stats. Features ball-by-ball scoring and role-based access with JWT authentication.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    image: "/images/crickscore.png",
    github: "https://github.com/mfmshazan/cricket-score",
    live: "https://crickscore-seven.vercel.app/",
    details: {
      overview: [
        "CrickScore is a multi-tenant platform where organizers create and run their own cricket tournaments while viewers follow along in real time with live scores, scorecards, and player stats.",
      ],
      features: [
        "Multi-tenant tournaments where each organizer runs their own competition",
        "Ball-by-ball live scoring with real-time updates",
        "Live scorecards and player and team statistics",
        "Role-based access secured with JWT authentication",
      ],
      role: "Full-stack developer. Built the scoring engine, real-time updates, and auth.",
      gallery: [],
    },
  },
  {
    slug: "warehouse-management-system",
    title: "Warehouse Management System",
    number: "04",
    description:
      "An AI-powered warehouse management system that streamlines inventory tracking, stock movements, and order management. Features intelligent insights, real-time stock monitoring, and an intuitive dashboard for warehouse operators.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "TailwindCSS", "Google Gemini API", "JWT"],
    image: "/images/wms.png",
    github: "https://github.com/mfmshazan/warehouse-management-system",
    live: "https://warehouse-management-system-ashen.vercel.app/",
    details: {
      overview: [
        "An AI-powered warehouse management system that streamlines inventory tracking, stock movements, and order management, with intelligent insights powered by the Google Gemini API.",
      ],
      features: [
        "Inventory tracking and stock-movement management",
        "Order management workflow",
        "AI-driven insights and recommendations via Google Gemini API",
        "Real-time stock monitoring dashboard for operators",
      ],
      role: "Full-stack developer. Built the dashboard, APIs, and AI integration.",
      gallery: [],
    },
  },
  {
    slug: "buy-plants",
    title: "Buy Plants",
    number: "05",
    description:
      "An online plant marketplace where customers can browse and purchase a variety of plants. Features a modern, user-friendly interface with product listings and e-commerce functionality.",
    tech: ["Next.js", "React", "Node.js", "TailwindCSS"],
    image: "/images/buyplants.png",
    github: "#",
    live: "https://www.buyplants.lk/",
    details: {
      overview: [
        "An online plant marketplace with a modern, user-friendly storefront where customers browse and purchase a wide variety of plants.",
      ],
      features: [
        "Product catalog with listings and detail views",
        "E-commerce purchase flow",
        "Responsive, modern UI",
      ],
      role: "Developer. Built the storefront and product experience.",
      gallery: [],
    },
  },
  {
    slug: "digifix",
    title: "DIGIFIX Auto Parts",
    number: "06",
    description:
      "A real-time car spare-parts marketplace connecting customers, shops, salesmen, delivery riders, and admins. Features vehicle-aware search by number plate, live delivery tracking, and role-based dashboards. One Node.js backend serves two Android apps and a full web platform.",
    tech: ["Next.js", "React Native / Expo", "Node.js", "Express", "PostgreSQL", "Socket.io", "Google Maps API", "JWT"],
    image: "/images/digifix-autoparts.png",
    github: "https://github.com/mfmshazan/digifix-car-marketplace",
    live: null,
    apks: [
      {
        label: "Customer App",
        url: "https://github.com/mfmshazan/digifix-car-marketplace/releases/download/v1.0.0-phase1/digifix-customer-v1.0.0.apk",
      },
      {
        label: "Rider App",
        url: "https://github.com/mfmshazan/digifix-car-marketplace/releases/download/v1.0.0-phase1/digifix-rider-v1.0.0.apk",
      },
    ],
    details: {
      overview: [
        "DigiFix turns finding a car part from guesswork into vehicle-aware search by type, brand, model, or number plate. It includes real-time ordering and live delivery tracking, plus role-based dashboards for everyone in the supply chain: customers, spare-part shops, salesmen, delivery riders, and admins.",
        "It is one Node.js backend serving three front-ends: a customer Android app, a rider Android app, and a full web platform. Built as a 2nd-year software engineering project at the University of Moratuwa and delivered for DigiFix, which now maintains and extends it.",
      ],
      features: [
        "Vehicle-aware part search by type, brand, model, or number plate",
        "Real-time ordering with role-based dashboards for each user type",
        "Live delivery tracking via Google Maps and Socket.io",
        "Two Android apps (Customer and Rider) backed by a single API",
        "Push notifications across the supply chain",
      ],
      role:
        "Team project delivered for DigiFix. Contributed across the web platform and mobile apps; now handed over to the company for ongoing updates.",
      gallery: [],
    },
  },
  {
    slug: "code-collab",
    title: "Code Collab",
    number: "07",
    description:
      "A real-time collaborative code editor that allows multiple developers to work together seamlessly. Features live code synchronization and interactive collaboration tools.",
    tech: ["Next.js", "Monaco Editor", "Socket.IO", "PostgreSQL", "Prisma"],
    image: "/images/code-collab.png",
    github: "https://github.com/mfmshazan/code-collab",
    live: "https://live-codes.vercel.app/",
    details: {
      overview: [
        "Think Google Docs for code. A real-time collaborative editor where multiple developers edit and run code together, with live synchronization over WebSockets.",
      ],
      features: [
        "Real-time collaborative editing",
        "Live code synchronization via Socket.io",
        "Multi-user sessions and interactive collaboration tools",
      ],
      role: "Developer. Built the real-time sync and editor experience.",
      gallery: [],
    },
  },
  {
    slug: "floodlit-ground-booking",
    title: "Floodlit Ground Booking",
    number: "08",
    description:
      "A floodlit cricket ground booking system for evening and night sessions (6:00 PM to 2:00 AM). Users pick a date, reserve time slots, and see instant pricing with hourly rates and whole-night packages. Features real-time slot availability and a streamlined instant-booking flow.",
    tech: ["Next.js", "React", "Node.js", "TailwindCSS"],
    image: "/images/floodlit.png",
    github: "#",
    live: "https://booking-system-teal.vercel.app/",
    details: {
      overview: [
        "A booking system for a floodlit cricket ground's evening and night sessions from 6:00 PM to 2:00 AM. Users pick a date, reserve time slots, and see instant pricing.",
      ],
      features: [
        "Date and time-slot selection",
        "Instant pricing with hourly rates and whole-night packages",
        "Real-time slot availability",
        "Streamlined instant-booking flow",
      ],
      role: "Developer. Built the booking flow and pricing logic.",
      gallery: [],
    },
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
      "Integrating AI-powered features into applications, from chatbots and recommendation engines to intelligent automation using modern AI APIs and models.",
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
      "Building cross-platform mobile applications using React Native, delivering smooth, native-like experiences for both iOS and Android.",
    href: "",
  },
]

// ============================================================
// Competitions & Volunteering
// Each item shows a brief card on the home page ("Beyond Code"
// section). Clicking it opens /highlights/<category>/<slug>.
// Drop images under:  public/images/competitions/<slug>/...
//                     public/images/volunteering/<slug>/...
// ============================================================

// First 3 are shown by default in the Beyond Code section. The rest appear under "View more".
export const competitions = [
  {
    slug: "code-rush",
    title: "Code Rush",
    role: "3rd Place",
    date: "2025",
    brief:
      "Open-innovation hackathon by GDG on Campus (KITS, Ramtek). Team Teal Trinity built a real-world AI solution using Google technologies and finished 3rd.",
    cover: "/images/hackthons/code%20Rush.jpeg",
    details: {
      summary:
        "Code Rush is an open-innovation hackathon hosted by the Google Developer Group (GDG) on Campus at KITS, Ramtek, powered by Hack2skill. Teams identify real-world problems within their campuses or local communities and build practical, innovative solutions using AI and Google technologies.",
      body: [
        "The challenge required teams to submit a minimum viable product (MVP) hosted on platforms like Google Firebase, Netlify, or GitHub, alongside a 3-minute demo video, a slide deck, and at least one integrated Google technology.",
        "Competing as Team Teal Trinity, we identified a real campus-level problem, built a working AI-powered MVP integrating Google technologies, and delivered a compelling demo, earning 3rd place out of all competing teams.",
      ],
      highlights: [
        "3rd place overall, Team Teal Trinity",
        "Built and deployed a functional AI MVP in the hackathon window",
        "Integrated Google technologies as required by the competition",
        "Submitted hosted product, demo video, and slide deck",
      ],
      gallery: ["/images/hackthons/code%20Rush.jpeg"],
      link: "",
    },
  },
  {
    slug: "agentrix-2026",
    title: "AgenTrix 2026",
    role: "Top 10",
    date: "2026",
    brief:
      "National AI hackathon at University of Ruhuna. Team Teal Titans built an AI Agents and RAG system in a 12-hour overnight sprint and reached the Shark Tank-style grand finale. Top 10.",
    cover: "/images/hackthons/agentrix.jpeg",
    details: {
      summary:
        "AgenTrix 2026 is a national-level AI development hackathon managed by the Computer Engineering Society (ComES) at the Faculty of Engineering, University of Ruhuna, Sri Lanka. Teams design and develop next-generation AI systems focusing on AI Agents, Retrieval-Augmented Generation (RAG), and autonomous multi-step applications.",
      body: [
        "The competition ran in three phases: a 12-hour overnight hackathon on June 20 from 6:00 PM to 6:00 AM where teams built from scratch with repositories strictly frozen at the mark, followed by a Code Review and Defense round where industry professionals evaluated code and teams defended their logic, API integrations, and state management.",
        "The Grand Finale on July 18, 2026 brought the Top 10 teams together for a Shark Tank-style live pitch focused on commercial viability and innovation. Teams were required to use only free-tier AI models (Gemini free tier); using paid models led to disqualification. Competing as Team Teal Titans, we finished in the Top 10.",
      ],
      highlights: [
        "Top 10 nationally",
        "Built an AI Agent and RAG system in a 12-hour overnight sprint",
        "Passed rigorous code review and defense by industry professionals",
        "Competed in the Shark Tank-style grand finale",
      ],
      gallery: ["/images/hackthons/agentrix.jpeg"],
      link: "",
    },
  },
  {
    slug: "octwave-3",
    title: "OctWave 3.0",
    role: "Top 10",
    date: "2026",
    brief:
      "Intensive Kaggle ML competition by IEEE Sri Lanka. Team Teal Titans tackled fraud detection then computer vision across 208 teams. Finished Top 10.",
    cover: "/images/hackthons/octWave.jpeg",
    details: {
      summary:
        "OctWave 3.0 is an intensive data science and machine learning competition organized by the IEEE Sri Lanka Section and the University of Moratuwa.",
      body: [
        "Round 1 (August 9-11, 2026): 208 teams competed to solve a credit card fraud detection classification problem on Kaggle. Submissions were evaluated using the F1-score due to the dataset's imbalanced nature. The top 70 teams advanced. Round 2 (August 16-17, 2026): The 70 remaining teams tackled a complex computer vision task, building deep learning pipelines to detect and classify character appearances from image frames.",
        "Following the Kaggle rounds, teams submitted their Jupyter Notebooks and a two-page technical report for strict reproducibility verification. The top 10 teams from Round 2 advanced to the final phase. Competing as Team Teal Titans, we made it.",
      ],
      highlights: [
        "Top 10 out of 208 teams",
        "Round 1: Credit card fraud detection with F1-score optimisation",
        "Round 2: Deep learning computer vision pipeline",
        "Submitted fully reproducible Jupyter Notebooks and technical report",
      ],
      gallery: ["/images/hackthons/octWave.jpeg"],
      link: "",
    },
  },
  {
    slug: "codesplash-26",
    title: "CodeSplash '26",
    role: "Participant",
    date: "2026",
    brief:
      "CSSA University of Kelaniya's AI-focused competition. Team Teal Titans competing in Agentic AI and market-readiness tracks. Currently ongoing.",
    cover: "/images/hackthons/codeSplash.jpeg",
    details: {
      summary:
        "CodeSplash 2026 is organized by the Computer Science Students' Association (CSSA) at the University of Kelaniya, Sri Lanka. The 2026 edition placed a heavy emphasis on Artificial Intelligence, Agentic AI, and bridging the gap between coding and market readiness.",
      body: [
        "Key sessions included an Agentic AI Mentorship Session conducted by Tharaka Mahabage (Cyber Security Architect at Kaya) and a session titled Turning Ideas into Market-Ready Products led by Singhe Silva. The initiative also included a School Phase Awareness Session to foster digital skills among younger students.",
        "This is an ongoing competition and we are currently building toward the final submission.",
      ],
      highlights: [
        "National-level competition at University of Kelaniya",
        "Focus on Agentic AI and real-world market readiness",
        "Mentorship from industry professionals",
        "Currently ongoing",
      ],
      gallery: ["/images/hackthons/codeSplash.jpeg"],
      link: "",
    },
  },
  {
    slug: "moraxtreme-10",
    title: "MoraXtreme 10.0",
    role: "Top 10",
    date: "2026",
    brief:
      "Sri Lanka's premier competitive programming marathon. 1,152 students, 467 teams, an 8-hour HackerRank grand finale. Team Teal Titans finished in the Top 10.",
    cover: "/images/hackthons/MoraXreme.jpeg",
    details: {
      summary:
        "MoraXtreme 10.0 is one of Sri Lanka's premier undergraduate competitive programming events, organized by the IEEE Student Branch and the IEEE Computer Society Student Branch Chapter at the University of Moratuwa.",
      body: [
        "The 10th edition saw massive participation, with 1,152 students forming 467 teams across the country. After a rigorous online elimination round, the top 15 teams advanced to the Grand Finals held on January 10, 2026.",
        "The Grand Finale consisted of an 8-hour coding marathon on HackerRank, pushing participants to solve complex, real-world algorithmic problems. Champions took home LKR 50,000; 1st and 2nd Runners-Up received LKR 30,000 and LKR 20,000 respectively, alongside exclusive gifts sponsored by Redline Technologies. Competing as Team Teal Titans, we finished in the Top 10.",
      ],
      highlights: [
        "Top 10 finish nationally",
        "1,152 participants across 467 teams",
        "8-hour HackerRank grand finale",
        "Organized by IEEE Student Branch, University of Moratuwa",
      ],
      gallery: ["/images/hackthons/MoraXreme.jpeg"],
      link: "",
    },
  },
  {
    slug: "coderally-7",
    title: "CodeRally 7.0",
    role: "Top 10 (Advanced Tier)",
    date: "2026",
    brief:
      "IIT's premier national competitive programming and hackathon. Three skill tiers: Beginner, Intermediate, and Advanced. Team Teal Titans finished Top 10 in the Advanced Tier.",
    cover: "/images/hackthons/codeRally.jpeg",
    details: {
      summary:
        "CodeRally 7.0 (CodeRally VII) is a premier national-level competitive programming and hackathon event in Sri Lanka, organised by the IEEE Computer Society Student Branch Chapter of IIT. The competition is structured across three skill tiers: Beginner, Intermediate, and Advanced, each with its own leaderboard and competitive track.",
      body: [
        "The competition runs as a full ecosystem spanning several months: registration and an awareness session in late June and early July, two intensive workshops (Workshop I on July 19 at IIT City Campus focused on AI in competitive programming; Workshop II on August 1 covering advanced data structures and system architectures), selection weeks from August 10 to 21, a virtual hackathon on August 29, and the 24-hour on-site grand finale on September 5, known as The Long Night.",
        "Teams register as houses in a War Chronicle leaderboard system, adding a strategic layer beyond pure coding. Competing in the Advanced Tier, Team Teal Titans finished in the Top 10. The award ceremony took place on September 13.",
      ],
      highlights: [
        "Top 10 in the Advanced Tier",
        "Three-tier structure: Beginner, Intermediate, and Advanced",
        "Participated in the 24-hour on-site Long Night finale",
        "Organised by IEEE CS Student Branch Chapter, IIT Sri Lanka",
      ],
      gallery: ["/images/hackthons/codeRally.jpeg"],
      link: "",
    },
  },
]

export const volunteering = [
  {
    slug: "road-to-legacy-2",
    title: "Road to Legacy 2.0",
    role: "Organizing Committee",
    date: "2025",
    brief:
      "Served on the Organizing Committee (Delegate Handling Team) for IEEE USJ's flagship tech-talk event. Also contributed to the event website and registration systems.",
    cover: "/images/volunteer/Roadto%20Lagacy.jpeg",
    details: {
      summary:
        "Road to Legacy is a prominent student-led tech initiative designed to bridge the gap between academia and the IT industry. The 2.0 edition, held in August 2025, was spearheaded by the IEEE Student Branch of the University of Sri Jayewardenepura (IEEE USJ) as a collaborative effort bringing together students from UCSC and the University of Moratuwa.",
      body: [
        "As part of the Organizing Committee's Delegate Handling Team, I was responsible for managing participants on the day and keeping sessions running smoothly. Alongside this, I contributed to the technical side of the event, helping build the event website and registration systems.",
        "The event brought together industry leaders, tech visionaries, and corporate partners to guide first-year IT undergraduates toward engineering excellence and tech entrepreneurship, exposing them to real-world industry expectations early in their university careers.",
      ],
      highlights: [
        "Organizing Committee, Delegate Handling Team",
        "Contributed to the event website and registration systems",
        "Collaborative event spanning UoM, UCSC, and USJ students",
        "IEEE USJ flagship industry-academia bridge event",
      ],
      gallery: ["/images/volunteer/Roadto%20Lagacy.jpeg"],
      link: "",
    },
  },
  {
    slug: "rotaract-it-team",
    title: "Rotaract Main Website",
    role: "Web Developer",
    date: "2025-2026",
    brief:
      "Contributed to building and maintaining the official Rotaract Club website at the University of Moratuwa for the 2025-2026 term.",
    cover: "/images/volunteer/rotract%2025/25-26.jpeg",
    details: {
      summary:
        "The Rotaract Club of the University of Moratuwa is part of Rotaract District 3220, running community service and youth development initiatives. For the 2025-2026 term, I contributed as a developer on the club's official website project.",
      body: [
        "My contribution was focused on building and maintaining the club's main website, translating the club's events, projects, and community work into a clean, accessible online presence.",
        "It was a chance to apply web development skills in a meaningful volunteer context, turning real community-driven work into something visible and lasting on the web.",
      ],
      highlights: [
        "Developer on the official Rotaract Club website, University of Moratuwa",
        "2025-2026 term",
        "Applied web development skills in a volunteer capacity",
      ],
      gallery: ["/images/volunteer/rotract%2025/25-26.jpeg"],
      link: "",
    },
  },
  {
    slug: "ugap-university-coordinator",
    title: "UGAP University Coordinator",
    role: "University Coordinator",
    date: "2025-2026",
    brief:
      "Served as the University Coordinator for the Undergraduate Association Puttalam (UGAP), representing and supporting Puttalam-district undergraduates studying at university.",
    cover: "/images/volunteer/UGAP.jpeg",
    details: {
      summary:
        "The Undergraduate Association Puttalam (UGAP) is a student-led association dedicated to supporting undergraduates from the Puttalam district who are pursuing higher education at universities across Sri Lanka. The association fosters community, peer support, and professional development among its members.",
      body: [
        "As the University Coordinator, I served as the key link between UGAP and the university community, coordinating communication, organising activities, and ensuring that students from Puttalam had the support and connections they needed to thrive in their academic journey.",
        "The role involved representing the association's interests at the university level, facilitating peer networks, and helping build a sense of community for students who are often far from home. It was a responsibility that combined leadership, organisation, and a genuine commitment to the people I represented.",
      ],
      highlights: [
        "University Coordinator for UGAP, Puttalam district undergraduates",
        "Bridged the association with the university community",
        "Organised activities and facilitated peer support networks",
        "Represented students from Puttalam across university platforms",
      ],
      gallery: ["/images/volunteer/UGAP.jpeg"],
      link: "",
    },
  },
]

// Lookup helper used by the dynamic detail route.
export const highlightGroups = { competitions, volunteering }

export function getHighlight(category, slug) {
  const group = highlightGroups[category]
  if (!group) return null
  return group.find((item) => item.slug === slug) || null
}

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null
}
