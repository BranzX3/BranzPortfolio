// ============================================================
//  🎯 PORTFOLIO DATA — Peerapong (Branz) Portfolio
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
  lastName: "Khummuang",
  nickname: "Branz",
  tagline: "Full-Stack & Multi-Agent AI System Developer",
  description:
    "Engineering high-performance web applications, scalable multi-agent AI systems, and microservices with modern frameworks.",
  email: "bunzzbranzz@gmail.com",
  location: "Lampang / Chiang Rai, Thailand",
  availableForWork: true,
  resumeUrl: "/resume",
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
  headline: "Passionate about full-stack craftsmanship, multi-agent AI workflows, and clean system architecture.",
  bio: [
    "I'm Peerapong, a Full-Stack Developer specializing in building modern web applications, distributed AI microservices, and agentic workflows.",
    "My recent work focuses on multi-agent AI architectures, canonical context memory, AWS Bedrock LLM integrations, and MCP (Model Context Protocol) tool execution servers.",
    "When I'm not writing code, you'll find me exploring new tech stacks, gaming, or savoring a fresh brew of coffee.",
  ],
  facts: [
    { icon: "⚡", label: "Core Focus", value: "Full Stack & Multi-Agent AI" },
    { icon: "🚀", label: "Key Projects", value: "3+ Production Systems" },
    { icon: "🎓", label: "Education", value: "B.Eng Computer Engineering" },
    { icon: "☕", label: "Coffee Consumed", value: "Infinite" },
  ],
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
    category: "AI & Multi-Agent Systems",
    icon: "🤖",
    items: [
      { name: "Multi-Agent Workflows", level: 88, note: "Task breakdown, Execution, Summarization" },
      { name: "AWS Bedrock", level: 85, note: "LLM integration & fine-tuning APIs" },
      { name: "MCP (Model Context Protocol)", level: 84, note: "Custom MCP Client & Tool Integration" },
      { name: "Canonical Memory", level: 82, note: "Context persistence & session states" },
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
      "A sophisticated AI platform built for Mae Fah Luang University featuring multi-agent architecture, canonical memory context, and real-time LLM streaming.",
    detailedOverview:
      "Dindin AI Platform is an enterprise-grade multi-agent platform designed to decompose complex queries into specialized sub-tasks. It features canonical memory management for long-term conversation context, AWS Bedrock LLM routing, and custom Model Context Protocol (MCP) clients to interact with external enterprise tool servers.",
    architecture: [
      "Multi-agent workflow (Task Analysis Agent -> Execution Agent -> Summarization Agent)",
      "Canonical Memory layer for session context persistence across model instances",
      "AWS Bedrock LLM provider integration with OpenAI-compatible API wrapper",
      "Real-time streaming response engine powered by Socket.IO and WebSockets",
      "Containerized microservices running on Docker with Nginx reverse proxy routing",
      "Mae Fah Luang University SSO (Single Sign-On) authentication integration",
    ],
    keyResults: [
      "Reduced AI query handling latency by 35% through optimized streaming pipelines.",
      "Enabled enterprise tool calling via MCP protocols without exposing raw DB credentials.",
      "Successfully deployed for university-wide AI research and educational activities.",
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
    image: "/projects/dindin-preview.png",
    featured: true,
    color: "#6366f1",
  },
  {
    id: 2,
    title: "CCTVMAP Monitoring System",
    category: "System Integration",
    description:
      "An automated CCTV spatial monitoring and health-check system with real-time ping diagnostics, map visualization, and MCP server sandbox integration.",
    detailedOverview:
      "CCTVMAP provides an interactive map dashboard for monitoring university-wide CCTV infrastructure. It continuously checks network status via automated ping routines, streams camera video feeds, and serves as a primary testbed for MCP (Model Context Protocol) tool integration.",
    architecture: [
      "FastAPI backend engine running concurrent network health diagnostics (ping)",
      "Vue.js interactive spatial dashboard with real-time camera marker updates",
      "MCP server integration enabling LLM agents to query camera diagnostics dynamically",
      "Single Sign-On (MFU SSO) authorization & role-based access control",
    ],
    keyResults: [
      "Automated continuous ping monitoring across hundreds of network camera nodes.",
      "Successfully integrated with custom MCP server for natural-language status queries.",
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
      "A university-grade room reservation platform with conflict-prevention algorithms, internal API sync, and an intuitive scheduling interface.",
    detailedOverview:
      "Engineered to streamline room reservations across campus facilities. Features automated time-slot conflict validation, integration with MFU internal APIs, and responsive mobile-first UI for students and faculty.",
    architecture: [
      "FastAPI backend with atomic transaction validation for schedule overlap detection",
      "Vue.js responsive frontend with calendar views and reservation management",
      "Direct integration with university SSO and master scheduling databases",
    ],
    keyResults: [
      "Eliminated double-booking conflicts across university study rooms.",
      "Provided fast, instant reservation confirmations with internal API integration.",
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
      "Designed and developed multi-agent AI systems with dedicated task analysis, execution, and summarization agents.",
      "Implemented canonical context memory mechanisms for persisting agent state and conversation history across turns.",
      "Integrated AWS Bedrock LLM endpoints and built OpenAI-compatible gateway services.",
      "Developed custom MCP (Model Context Protocol) clients to enable AI agent tool calling on external servers.",
      "Engineered real-time bi-directional streaming for AI responses using Socket.IO and WebSockets.",
      "Built full-stack web applications with Vue.js, Node.js, and FastAPI, integrating MFU SSO authentication.",
      "Containerized microservices using Docker and configured Nginx for SSL, load balancing, and reverse proxying.",
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
