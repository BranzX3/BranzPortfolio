// ============================================================
//  🎯 PORTFOLIO DATA — แก้ไขข้อมูลของคุณที่นี่
// ============================================================

export const siteConfig = {
  name: "Peerapong",          // ← ใส่ชื่อของคุณ
  tagline: "Full Stack Developer",    // ← ตำแหน่ง/คำอธิบายสั้นๆ
  description:
    "Vibe coding and chill.",
  email: "bunzzbranzz@gmail.com",        // ← อีเมลของคุณ
  location: "Lampang, Thailand",      // ← ที่อยู่/เมือง
  availableForWork: true,             // ← true = กำลังหางาน
  resumeUrl: "/projects/resume.pdf",           // ← ใส่ path ไฟล์ในโฟลเดอร์ public หรือใส่เป็น Link Google Drive ก็ได้
};

export const socialLinks: {
  github?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
} = {
  github: "https://github.com/BranzX3",       // ← GitHub URL ของคุณ
  linkedin: "www.linkedin.com/in/bunzz-branz-71a155405", // ← LinkedIn URL
  // twitter: "https://x.com/Artyemis_",      // ← Twitter/X URL (ลบออกถ้าไม่ใช้)
  // youtube: "https://youtube.com/@yourchannel",   // ← เพิ่มได้
};

export const aboutMe = {
  bio: [
    "Hey! I'm a casual developer love being chill and vibe coding.",
    "I work with React, Next.js, Node.js, and FastAPI, and recently I've been focused on developing AI applications with agentic workflows and tools integrations.",
    "When I'm not coding, you'll probably find me gaming or enjoying a good cup of coffee ☕",
  ],
  // ─── เพิ่ม/ลด fun facts ได้เลย ───
  facts: [
    { icon: "🚀", label: "Projects Shipped", value: "3" },
    { icon: "☕", label: "Cups of Coffee", value: "∞" },
    { icon: "🌍", label: "Countries Worked", value: "0" },
    { icon: "🎯", label: "Years Experience", value: "1+" },
  ],
};

// ─── Skills ─────────────────────────────────────────────────
export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: ["React", "Next.js", "TypeScript", "CSS", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "FastAPI", "Python"],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "Redis", "ChromaDB"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    items: ["Docker", "Vercel", "AWS", "GitHub Actions", "Nginx"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "VS Code", "Claude Code", "Postman", "Antigravity", "Cursor"],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Dindin AI Platform (Mae Fah Luang University)",
    description:
      "Developed an AI platform with a multi-agent architecture for knowledge retrieval and tool execution. Designed task analysis, execution, and summarization agents with canonical memory for context persistence. Integrated LLMs via AWS Bedrock and exposed an OpenAI-compatible API for external usage. Implemented real-time streaming responses using Socket.IO and deployed with Docker and Nginx.",
    tags: [
      "Docker",
      "Nginx",
      "Vue.js",
      "Node.js",
      "MongoDB",
      "AWS Bedrock",
      "OpenAI-compatible API",
      "Socket.IO",
      "MFU SSO",
      "MCP Client"
    ],
    github: "https://github.com/patipanbank/MFULearnAi",
    demo: "https://mfulearnai.mfu.ac.th/login",
    image: "/projects/dindin-preview.png",
    featured: true,
    color: "#6366f1",
  },
  {
    id: 2,
    title: "CCTVMAP (CCTV Monitoring System)",
    description:
      "Built a CCTV monitoring system for visualizing camera locations, status, and live streaming. Implemented internal network camera health checks (ping) and integrated video streaming. Used as a testing environment for MCP server integration with external tools.",
    tags: [
      "Docker",
      "Nginx",
      "Vue.js",
      "FastAPI",
      "MFU SSO"
    ],
    github: "https://github.com/NeonWunna/CCTVmfu",
    demo: "https://cctvmap.mfu.ac.th/",
    image: "/projects/cctvmap.png",
    featured: true,
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Room Booking System",
    description:
      "Developed a room booking system integrated with MFU internal APIs. Implemented booking validation to prevent scheduling conflicts and built a responsive UI for browsing and reservations.",
    tags: [
      "Docker",
      "Nginx",
      "Vue.js",
      "FastAPI",
      "MFU Internal API"
    ],
    github: "https://github.com/nalikanon/booking4Roommfu",
    demo: "https://roombooking.mfu.ac.th/",
    image: "/projects/roombooking.png",
    featured: true,
    color: "#06b6d4",
  }
];

// ─── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Mae Fah Luang University",
    companyUrl: "",
    period: "2025 – 2026",
    location: "Chiang Rai, Thailand",
    description: [
      "Built frontend applications using Vue.js and backend services using Node.js and FastAPI.",
      "Designed and implemented a multi-agent AI system with task analysis, execution, and summarization roles.",
      "Implemented canonical memory to persist and reuse context across interactions.",
      "Integrated LLM services via AWS Bedrock and exposed an OpenAI-compatible API.",
      "Built an API Gateway layer for managing and routing AI requests.",
      "Integrated MCP client for connecting with external tool servers.",
      "Tested MCP server integration using a CCTV monitoring system (CCTVMAP).",
      "Implemented MFU SSO authentication across systems.",
      "Deployed applications using Docker and configured Nginx for routing.",
      "Improved response latency and overall user experience.",
      "Implemented real-time AI response streaming using Socket.IO."
    ],
    technologies: [
      "Vue.js",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "Docker",
      "Nginx",
      "AWS Bedrock",
      "Socket.IO"
    ],
  },
];

// ─── Education ────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.Eng. Computer Engineering",
    institution: "Mae Fah Luang University",
    period: "2022 – 2025",
    location: "Chiang Rai, Thailand",
    gpa: "3.16 / 4.0",
  },
];

// ─── Certifications ───────────────────────────────────────────
export const certifications = [
  {
    id: 1,
    name: "HCCDA-Tech-Essentials",
    issuer: "Huawei Cloud",
    date: "2025",
    link: "", // ← ใส่ link ตรวจสอบ (ถ้ามี)
    image: "/projects/HWENDCTEDA095306.png", // ← ใส่รูปภาพ cert (ถ้ามี)
  }
];
