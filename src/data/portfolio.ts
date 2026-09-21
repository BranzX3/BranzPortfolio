// ============================================================
//  🎯 PORTFOLIO DATA — Peerapong (Deego) Portfolio
// ============================================================

export interface Project {
  id: number;
  title: string;
  category: "AI & Multi-Agent" | "Web Application" | "System Integration";
  description: string;
  detailedOverview: string;
  architecture: string[];
  keyResults: string[];
  tags: string[];
  github?: string;
  demo?: string;
  pdfDocument?: string;
  image: string;
  featured: boolean;
  color: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: { name: string; level: number; note?: string }[];
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa?: string;
  transcriptUrl?: string;
  graduationCertUrl?: string;
}

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

export const siteConfig = {
  name: "Peerapong",
  lastName: "Wongwichai",
  nickname: "Deego",
  tagline: "Full-Stack Developer & AI-Assisted Builder",
  description:
    "I build web applications and AI systems, working alongside AI coding assistants as part of my everyday workflow.",
  email: "peerapong.wongwichai@gmail.com",
  location: "Lampang, Thailand",
  availableForWork: true,
  resumeUrl: "/projects/CV_Peerapong Wongwichai.pdf",
};

export const heroConfig = {
  availabilityBadge: "Open to full-stack & AI work",
  headlinePrefix: "I build web platforms and ",
  headlineEmphasis: "AI systems",
  headlineSuffix: ", with AI as a working partner.",
  introParagraph:
    "Hi, I'm Peerapong Wongwichai (Deego), a computer engineering graduate based in Lampang, Thailand. I've built an AI platform, a CCTV monitoring map, and a room booking system — all of them developed with AI coding assistants as part of my process.",
  cardTag: "WHAT I WORK ON",
  cardEdition: "2026",
  pillars: [
    {
      icon: "Bot",
      title: "AI Systems",
      description: "Multi-agent workflows, AWS Bedrock & MCP",
    },
    {
      icon: "Code2",
      title: "Full-Stack Web",
      description: "Vue.js, Next.js, Node.js & FastAPI",
    },
    {
      icon: "Layers",
      title: "AI-Assisted Development",
      description: "Building with AI coding assistants day to day",
    },
  ],
};

export const socialLinks: {
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
} = {
  github: "https://github.com/BranzX3",
  linkedin: "https://www.linkedin.com/in/bunzz-branz-71a155405",
};

export const aboutMe = {
  sectionTag: "01 — ABOUT",
  sectionTitle: "A bit about me",
  sectionSubtitle:
    "Where I'm from, what I've built, and how I actually work day to day.",
  headline:
    "I like building things that work end to end — and I build them with AI in the loop.",
  bio: [
    "I'm Peerapong Wongwichai (Deego), born 28 July 2003 and currently based in Lampang, Thailand.",
    "So far I've worked on three systems: an AI platform, a CCTV monitoring map, and a room booking system. Each one covers frontend, backend, and deployment, so I've had to be comfortable across the whole stack.",
    "I build all of it with AI coding assistants. They're part of how I work, not a shortcut — I still have to understand the system, review what gets written, and fix what doesn't hold up.",
    "Outside of work I'm usually reading about new tools, gaming, or drinking too much coffee.",
  ],
  facts: [
    { icon: "📍", label: "Based in", value: "Lampang, Thailand" },
    { icon: "🎂", label: "Born", value: "28 July 2003" },
    { icon: "🛠️", label: "Systems built", value: "3 (AI, CCTV, Booking)" },
    { icon: "🎓", label: "Education", value: "B.Eng Computer Eng." },
  ],
  valuesTitle: "How I work",
  values: [
    {
      title: "Keep it simple",
      description:
        "I'd rather write less code that I can still read six months from now than something clever I'll regret.",
    },
    {
      title: "AI as a partner",
      description:
        "I use AI coding assistants on every project, and I check their work. The responsibility for the code is still mine.",
    },
  ],
  motto: "Simplicity is about subtracting the obvious and adding the meaningful.",
  mottoAuthor: "— John Maeda, The Laws of Simplicity",
};

export const projectsConfig = {
  sectionTag: "02 — WORK",
  sectionTitle: "Things I've built",
  sectionSubtitle:
    "Three systems: an AI platform, a CCTV monitoring map, and a room booking system.",
};

export const skillsConfig = {
  sectionTag: "03 — SKILLS",
  sectionTitle: "What I work with",
  sectionSubtitle:
    "Tools I've actually used on real projects, not a list of everything I've heard of.",
};

export const experienceConfig = {
  sectionTag: "04 — BACKGROUND",
  sectionTitle: "Experience & education",
  sectionSubtitle:
    "Where I've worked, what I studied, and the documents to back it up.",
};

export const contactConfig = {
  sectionTag: "05 — CONTACT",
  sectionTitle: "Get in touch",
  sectionSubtitle:
    "For full-stack work, AI systems, or just to talk about something you're building.",
  inviteTitle: "Working on something?",
  inviteParagraph:
    "I'm open to full-stack development and AI systems work. Feel free to send a message — I'll get back to you.",
  formTitle: "Send a Message",
};

export const footerConfig = {
  motto: "Simple, functional, and honest.",
  copyrightSuffix: "Peerapong Wongwichai. All rights reserved.",
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "🎨",
    items: [
      { name: "React / Next.js", level: 90, note: "App Router, SSR, Server Actions" },
      { name: "TypeScript", level: 88, note: "Strict Typing, Interfaces" },
      { name: "Vue.js", level: 85, note: "Composition API, Pinia" },
      { name: "CSS3 / HTML5", level: 92, note: "Custom CSS, Flex/Grid, Glassmorphism" },
      { name: "Tailwind CSS", level: 85, note: "Utility-first design" },
    ],
  },
  {
    category: "Backend & Systems",
    icon: "⚙️",
    items: [
      { name: "Node.js / Express", level: 88, note: "REST APIs, Streaming" },
      { name: "FastAPI / Python", level: 85, note: "Async I/O, Pydantic" },
      { name: "Socket.IO", level: 82, note: "Real-time bi-directional streaming" },
      { name: "RESTful & SSE APIs", level: 90, note: "API Gateways & Rate limiting" },
    ],
  },
  {
    category: "AI Systems",
    icon: "🤖",
    items: [
      { name: "Multi-Agent Workflows", level: 85, note: "Task breakdown, execution, summarization" },
      { name: "AWS Bedrock", level: 82, note: "LLM integration via API" },
      { name: "MCP (Model Context Protocol)", level: 82, note: "Custom client & tool integration" },
      { name: "Context Memory", level: 80, note: "Session state & conversation history" },
    ],
  },
  {
    category: "AI-Assisted Development",
    icon: "✨",
    items: [
      { name: "AI Coding Assistants", level: 90, note: "Used on every project I've built" },
      { name: "Prompting & Task Framing", level: 85, note: "Breaking work into steps an AI can handle" },
      { name: "Reviewing AI Output", level: 85, note: "Reading, testing, and fixing what it writes" },
    ],
  },
  {
    category: "Database & Cloud DevOps",
    icon: "☁️",
    items: [
      { name: "MongoDB", level: 85, note: "Document Modeling & Aggregation" },
      { name: "PostgreSQL", level: 80, note: "Relational Schemas & Queries" },
      { name: "Docker & Containerization", level: 88, note: "Multi-stage builds, Compose" },
      { name: "Nginx & Vercel", level: 85, note: "Reverse Proxy, SSL, Edge Deployments" },
      { name: "Git & GitHub Actions", level: 88, note: "Version control & CI/CD" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Dindin AI Platform",
    category: "AI & Multi-Agent",
    description:
      "An AI chat platform for Mae Fah Luang University, with a multi-agent workflow, conversation memory, and streaming responses.",
    detailedOverview:
      "Dindin AI Platform splits a user's question into smaller tasks and hands them to separate agents. It keeps conversation context across turns, routes requests to LLMs through AWS Bedrock, and uses a custom MCP client so agents can call tools on other servers. Built with AI coding assistants throughout.",
    architecture: [
      "Multi-agent workflow: task analysis -> execution -> summarization",
      "Memory layer that keeps session context across turns",
      "AWS Bedrock integration behind an OpenAI-compatible API wrapper",
      "Streaming responses over Socket.IO / WebSockets",
      "Docker containers behind an Nginx reverse proxy",
      "Login through the university's SSO",
    ],
    keyResults: [
      "Deployed and in use at the university for AI research and teaching.",
      "Agents can call external tools through MCP without handling database credentials directly.",
      "Streaming makes answers show up as they're generated instead of all at once.",
    ],
    tags: [
      "Multi-Agent AI",
      "AWS Bedrock",
      "Socket.IO",
      "Vue.js",
      "Node.js",
      "MongoDB",
      "Docker",
      "Nginx",
      "MCP Client",
      "MFU SSO",
    ],
    github: "https://github.com/patipanbank/MFULearnAi",
    demo: "https://mfulearnai.mfu.ac.th/login",
    pdfDocument: "/projects/DinDinAI.pdf",
    image: "/projects/dindin-preview.png",
    featured: true,
    color: "#6366f1",
  },
  {
    id: 2,
    title: "CCTVMAP Monitoring System",
    category: "System Integration",
    description:
      "A map dashboard that shows every CCTV camera on campus and whether it's currently online.",
    detailedOverview:
      "CCTVMAP puts the university's cameras on an interactive map and pings them on a schedule so you can see at a glance which ones are down. It also runs an MCP server, which made it a good place to test letting an AI agent query camera status in plain language. Built with AI coding assistants throughout.",
    architecture: [
      "FastAPI backend running ping checks concurrently",
      "Vue.js map dashboard with camera markers that update as status changes",
      "MCP server so an AI agent can ask about camera status directly",
      "University SSO login with role-based access",
    ],
    keyResults: [
      "Replaced manual checking with automatic monitoring across hundreds of cameras.",
      "You can ask an AI agent which cameras are offline and get a real answer.",
    ],
    tags: ["FastAPI", "Vue.js", "Docker", "Nginx", "MCP Server", "MFU SSO", "Python"],
    github: "https://github.com/NeonWunna/CCTVmfu",
    demo: "https://cctvmap.mfu.ac.th/",
    image: "/projects/cctvmap.png",
    featured: true,
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "MFU Room Booking System",
    category: "Web Application",
    description:
      "A booking system for campus study rooms that checks for time conflicts before confirming a reservation.",
    detailedOverview:
      "Students and staff pick a room and a time slot, and the system checks it against existing bookings before confirming. It connects to the university's internal APIs and SSO, and the interface is designed for phones first since that's how most people book. Built with AI coding assistants throughout.",
    architecture: [
      "FastAPI backend that validates time-slot overlaps inside a single transaction",
      "Vue.js frontend with a calendar view for browsing and managing bookings",
      "Connected to university SSO and the central scheduling data",
    ],
    keyResults: [
      "Double-bookings are caught before a reservation is confirmed.",
      "Bookings confirm immediately instead of waiting on a manual approval step.",
    ],
    tags: ["Vue.js", "FastAPI", "Docker", "Nginx", "MFU Internal API", "REST API"],
    github: "https://github.com/nalikanon/booking4Roommfu",
    demo: "https://roombooking.mfu.ac.th/",
    image: "/projects/roombooking.png",
    featured: true,
    color: "#06b6d4",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    title: "Full Stack & AI Engineer",
    company: "Mae Fah Luang University",
    companyUrl: "https://mfu.ac.th",
    period: "2025 – 2026",
    location: "Chiang Rai, Thailand",
    description: [
      "Built a multi-agent AI system that splits work between task analysis, execution, and summarization agents.",
      "Added a context memory layer so agents keep conversation history across turns.",
      "Connected AWS Bedrock LLMs behind an OpenAI-compatible gateway.",
      "Wrote a custom MCP client so agents can call tools on external servers.",
      "Set up real-time streaming for AI responses with Socket.IO and WebSockets.",
      "Built the web apps with Vue.js, Node.js, and FastAPI, connected to university SSO.",
      "Containerized everything with Docker and set up Nginx for SSL and reverse proxying.",
      "Used AI coding assistants throughout, reviewing and testing the output before it shipped.",
    ],
    technologies: [
      "Vue.js",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "Docker",
      "Nginx",
      "AWS Bedrock",
      "Socket.IO",
      "MCP Protocol",
      "AI Coding Assistants",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "B.Eng. Computer Engineering",
    institution: "Mae Fah Luang University",
    period: "2022 – 2025",
    location: "Chiang Rai, Thailand",
    gpa: "3.16 / 4.00",
    transcriptUrl: "/projects/Transcript.pdf",
    graduationCertUrl: "/projects/หนังสือรับรองคาดว่าจะสำเร็จการศึกษา.pdf",
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 1,
    name: "HCCDA-Tech-Essentials",
    issuer: "Huawei Cloud",
    date: "2025",
    link: "",
    image: "/projects/HWENDCTEDA095306.png",
  },
];
