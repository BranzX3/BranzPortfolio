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
};

export const socialLinks = {
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
    items: ["React", "Next.js", "TypeScript", "CSS / SCSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "FastAPI", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    items: ["Docker", "Vercel", "AWS", "GitHub Actions", "CI/CD", "Nginx"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: ["Git", "VS Code", "Figma", "Postman", "Linear", "Notion"],
  },
];

// ─── Projects ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Project Alpha",                        // ← ชื่อ project
    description:
      "A full-stack SaaS platform with real-time collaboration features, built with Next.js and WebSockets.",
    tags: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL"],
    github: "https://github.com/yourusername/project-alpha",
    demo: "https://project-alpha.vercel.app",
    featured: true,
    color: "#6366f1",                             // ← สี accent ของ card
  },
  {
    id: 2,
    title: "Project Beta",
    description:
      "An AI-powered document analysis tool that processes PDFs using OCR and LLM technology.",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    github: "https://github.com/yourusername/project-beta",
    demo: "",                                     // ← ว่างถ้าไม่มี demo
    featured: true,
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Project Gamma",
    description:
      "A mobile-first e-commerce storefront with Stripe payments and real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/project-gamma",
    demo: "https://project-gamma.vercel.app",
    featured: false,
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "Project Delta",
    description:
      "Open-source CLI toolkit for automating deployment workflows across multiple cloud providers.",
    tags: ["TypeScript", "CLI", "Docker", "AWS"],
    github: "https://github.com/yourusername/project-delta",
    demo: "",
    featured: false,
    color: "#10b981",
  },
];

// ─── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    title: "Senior Frontend Developer",           // ← ตำแหน่ง
    company: "Awesome Company",                   // ← ชื่อบริษัท
    companyUrl: "https://awesomecompany.com",     // ← URL บริษัท (ใส่ "" ถ้าไม่มี)
    period: "2023 – Present",                    // ← ช่วงเวลา
    location: "Bangkok, Thailand",
    description: [
      "Led the development of a new customer-facing dashboard, reducing load time by 40%.",
      "Mentored a team of 4 junior developers and established coding standards.",
      "Architected a micro-frontend system enabling independent team deployments.",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "AWS"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Tech Startup XYZ",
    companyUrl: "",
    period: "2022 – 2023",
    location: "Remote",
    description: [
      "Built and maintained 3 production web applications serving 10k+ monthly users.",
      "Designed and implemented RESTful APIs consumed by mobile and web clients.",
      "Reduced deployment time by 60% by introducing GitHub Actions CI/CD pipelines.",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "Digital Agency ABC",
    companyUrl: "",
    period: "2021 – 2022",
    location: "Bangkok, Thailand",
    description: [
      "Developed responsive websites for 15+ clients across various industries.",
      "Collaborated with design teams to implement pixel-perfect UI components.",
    ],
    technologies: ["React", "CSS", "WordPress", "PHP"],
  },
];

// ─── Education ────────────────────────────────────────────────
export const education = [
  {
    id: 1,
    degree: "B.Sc. Computer Science",            // ← วุฒิการศึกษา
    institution: "University Name",              // ← ชื่อมหาวิทยาลัย
    period: "2017 – 2021",
    location: "Bangkok, Thailand",
    gpa: "3.8 / 4.0",                           // ← ลบบรรทัดนี้ถ้าไม่ต้องการแสดง
    highlights: [
      "Dean's List — 3 consecutive years",
      "Senior project: AI-based traffic prediction system",
    ],
  },
];
