import { enContent } from "./en";

export const thContent: typeof enContent = {
  nav: {
    about: "เกี่ยวกับ",
    projects: "ผลงาน",
    skills: "ทักษะ",
    experience: "ประสบการณ์",
    contact: "ติดต่อ",
    resumePdf: "Resume PDF",
    letsTalk: "พูดคุยร่วมงาน",
    portfolioSuffix: "แฟ้มสะสมผลงาน",
  },
  settings: {
    title: "ตั้งค่าระบบ",
    language: "ภาษา (Language)",
    theme: "โหมดสี (Theme)",
    light: "ลาเต้ / ครีม (Light ☀️)",
    dark: "อเมริกาโน่ / เอสเปรสโซ่ (Dark ☕)",
  },
  hero: {
    availabilityBadge: "เปิดรับงาน Full-Stack & AI",
    headlinePrefix: "ผมสร้างเว็บแอปพลิเคชันและ",
    headlineEmphasis: "ระบบ AI",
    headlineSuffix: " โดยมี AI เป็นเพื่อนร่วมงาน",
    introParagraph:
      "สวัสดีครับ ผมพีระพงษ์ วงศ์วิชัย (บรันซ์) จบวิศวกรรมคอมพิวเตอร์ ตอนนี้อยู่ที่ลำปางครับ ที่ผ่านมาผมทำระบบ AI Platform, CCTVMap และ Room Booking ทั้งหมดพัฒนาโดยใช้ AI coding assistant ร่วมด้วย",
    exploreWork: "ดูผลงาน",
    downloadResume: "ดาวน์โหลด Resume (PDF)",
    cardTag: "สิ่งที่ผมทำ",
    cardEdition: "2026",
    pillars: [
      {
        title: "ระบบ AI",
        description: "Multi-Agent Workflows, AWS Bedrock & MCP",
      },
      {
        title: "เว็บ Full-Stack",
        description: "Vue.js, Next.js, Node.js & FastAPI",
      },
      {
        title: "พัฒนาโดยใช้ AI ช่วย",
        description: "ใช้ AI coding assistant ในการทำงานทุกวัน",
      },
    ],
  },
  about: {
    sectionTag: "01 — เกี่ยวกับผม",
    sectionTitle: "แนะนำตัวสั้นๆ",
    sectionSubtitle: "ผมเป็นใคร ทำอะไรมาบ้าง และทำงานยังไงในแต่ละวัน",
    headline:
      "ผมชอบสร้างระบบที่ทำงานได้จริงตั้งแต่ต้นจนจบ และผมสร้างมันโดยมี AI อยู่ในกระบวนการด้วย",
    bio: [
      "ผมชื่อพีระพงษ์ วงศ์วิชัย (บรันซ์) เกิดวันที่ 28 กรกฎาคม 2546 ปัจจุบันอยู่ที่จังหวัดลำปางครับ",
      "ที่ผ่านมาผมทำมา 3 ระบบ คือ AI Platform, ระบบแผนที่มอนิเตอร์กล้อง CCTV และระบบจองห้อง ทุกตัวทำครบทั้งหน้าบ้าน หลังบ้าน และการ deploy เลยได้จับงานทั้งสาย",
      "ผมใช้ AI coding assistant ในการทำทั้งหมด มันเป็นวิธีทำงานของผม ไม่ใช่ทางลัด เพราะสุดท้ายผมยังต้องเข้าใจระบบเอง ตรวจโค้ดที่มันเขียน และแก้ส่วนที่ใช้ไม่ได้",
      "เวลาว่างผมชอบอ่านเรื่องเครื่องมือใหม่ๆ เล่นเกม และดื่มกาแฟมากเกินไปหน่อย",
    ],
    facts: [
      { label: "อยู่ที่", value: "จังหวัดลำปาง" },
      { label: "วันเกิด", value: "28 ก.ค. 2546" },
      { label: "ระบบที่ทำมา", value: "3 ระบบ (AI, CCTV, Booking)" },
      { label: "การศึกษา", value: "วิศวกรรมคอมพิวเตอร์ บก." },
    ],
    valuesTitle: "วิธีทำงานของผม",
    values: [
      {
        title: "เขียนให้เรียบง่าย",
        description:
          "ผมอยากเขียนโค้ดน้อยๆ ที่อีก 6 เดือนกลับมาอ่านแล้วยังเข้าใจ มากกว่าเขียนอะไรที่ฉลาดแต่มาเสียใจทีหลัง",
      },
      {
        title: "ใช้ AI เป็นเพื่อนร่วมงาน",
        description:
          "ผมใช้ AI coding assistant ทุกโปรเจกต์ และตรวจงานมันทุกครั้ง ความรับผิดชอบต่อโค้ดยังเป็นของผมอยู่ดี",
      },
    ],
    motto: "ความเรียบง่าย คือการตัดสิ่งธรรมดาออกไป แล้วเติมเต็มสิ่งที่มีความหมายเข้ามา",
    mottoAuthor: "— John Maeda, The Laws of Simplicity",
  },
  projects: {
    sectionTag: "02 — ผลงาน",
    sectionTitle: "งานที่ผมทำมา",
    sectionSubtitle:
      "3 ระบบ: AI Platform, ระบบแผนที่มอนิเตอร์กล้อง CCTV และระบบจองห้อง",
    allTab: "ทั้งหมด",
    articlePrefix: "โปรเจกต์ #",
    deepDiveBtn: "อ่านรายละเอียด",
    liveSiteBtn: "เข้าชมระบบจริง",
    projectPdfBtn: "เอกสาร PDF",
    githubBtn: "ซอร์สโค้ด GitHub",
    architectureTitle: "ระบบทำงานยังไง",
    modalOverviewTitle: "ภาพรวม",
    modalTechTitle: "เทคโนโลยีที่ใช้",
    modalResultsTitle: "จุดที่ระบบทำได้ดี",
    modalCloseBtn: "ปิดหน้าต่าง",
    items: [
      {
        id: 1,
        title: "Dindin AI Platform",
        category: "AI & Multi-Agent" as const,
        description:
          "แพลตฟอร์มแชท AI สำหรับมหาวิทยาลัยแม่ฟ้าหลวง ทำงานแบบมัลติเอเจนต์ จำบริบทบทสนทนาได้ และตอบแบบสตรีมมิ่ง",
        detailedOverview:
          "Dindin AI Platform จะแตกคำถามของผู้ใช้ออกเป็นงานย่อย แล้วส่งให้เอเจนต์แต่ละตัวรับผิดชอบ ระบบเก็บบริบทบทสนทนาข้ามรอบได้ เรียกใช้ LLM ผ่าน AWS Bedrock และมี MCP Client ที่เขียนเองเพื่อให้เอเจนต์เรียกเครื่องมือบนเซิร์ฟเวอร์อื่นได้ พัฒนาโดยใช้ AI coding assistant ตลอดทั้งโปรเจกต์",
        architecture: [
          "เวิร์กโฟลว์มัลติเอเจนต์: วิเคราะห์งาน -> ประมวลผล -> สรุปผล",
          "ชั้นหน่วยความจำที่เก็บบริบทของเซสชันข้ามรอบสนทนา",
          "เชื่อมต่อ AWS Bedrock ผ่าน OpenAI-compatible API Wrapper",
          "ตอบกลับแบบสตรีมมิ่งด้วย Socket.IO / WebSockets",
          "รันบน Docker หลัง Nginx Reverse Proxy",
          "ล็อกอินผ่าน SSO ของมหาวิทยาลัย",
        ],
        keyResults: [
          "เปิดใช้งานจริงในมหาวิทยาลัย ทั้งงานวิจัย AI และการเรียนการสอน",
          "เอเจนต์เรียกใช้เครื่องมือภายนอกผ่าน MCP ได้ โดยไม่ต้องแตะรหัสฐานข้อมูลโดยตรง",
          "การสตรีมทำให้คำตอบทยอยขึ้นทีละส่วน แทนที่จะรอจนจบแล้วค่อยแสดง",
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
      },
      {
        id: 2,
        title: "CCTVMAP Monitoring System",
        category: "System Integration" as const,
        description:
          "แดชบอร์ดแผนที่ที่แสดงกล้อง CCTV ทั้งมหาวิทยาลัย และบอกว่าตัวไหนออนไลน์อยู่บ้าง",
        detailedOverview:
          "CCTVMAP เอากล้องทั้งหมดของมหาวิทยาลัยขึ้นแผนที่ แล้ว ping เช็กสถานะเป็นระยะ ทำให้เห็นได้ทันทีว่ากล้องตัวไหนล่ม ระบบนี้ยังรัน MCP Server ด้วย เลยกลายเป็นที่ทดลองให้ AI agent ถามสถานะกล้องด้วยภาษาคนได้ พัฒนาโดยใช้ AI coding assistant ตลอดทั้งโปรเจกต์",
        architecture: [
          "หลังบ้าน FastAPI ping เช็กสถานะกล้องแบบพร้อมกันหลายตัว",
          "แดชบอร์ดแผนที่ Vue.js ที่มาร์กเกอร์กล้องอัปเดตตามสถานะ",
          "MCP Server ที่เปิดให้ AI agent ถามสถานะกล้องได้โดยตรง",
          "ล็อกอินผ่าน SSO ของมหาวิทยาลัย พร้อมกำหนดสิทธิ์ตามบทบาท",
        ],
        keyResults: [
          "เปลี่ยนจากการไล่เช็กเองมาเป็นระบบตรวจอัตโนมัติ ครอบคลุมกล้องหลายร้อยตัว",
          "ถาม AI agent ได้เลยว่ากล้องตัวไหนออฟไลน์อยู่ แล้วได้คำตอบจริง",
        ],
        tags: ["FastAPI", "Vue.js", "Docker", "Nginx", "MCP Server", "MFU SSO", "Python"],
      },
      {
        id: 3,
        title: "MFU Room Booking System",
        category: "Web Application" as const,
        description:
          "ระบบจองห้องศึกษาในมหาวิทยาลัย ที่ตรวจเวลาชนกันก่อนยืนยันการจองทุกครั้ง",
        detailedOverview:
          "นักศึกษาและบุคลากรเลือกห้องและช่วงเวลา ระบบจะเช็กกับการจองที่มีอยู่ก่อนยืนยันให้ เชื่อมต่อกับ Internal API และ SSO ของมหาวิทยาลัย และออกแบบหน้าจอให้ใช้บนมือถือเป็นหลัก เพราะคนส่วนใหญ่จองจากมือถือ พัฒนาโดยใช้ AI coding assistant ตลอดทั้งโปรเจกต์",
        architecture: [
          "หลังบ้าน FastAPI ตรวจช่วงเวลาที่ทับซ้อนภายในทรานแซกชันเดียว",
          "หน้าบ้าน Vue.js มีมุมมองปฏิทินสำหรับดูและจัดการการจอง",
          "เชื่อมกับ MFU SSO และข้อมูลตารางเวลาหลักของมหาวิทยาลัย",
        ],
        keyResults: [
          "การจองซ้อนถูกดักไว้ตั้งแต่ก่อนยืนยัน",
          "ยืนยันการจองได้ทันที ไม่ต้องรอคนมาอนุมัติ",
        ],
        tags: ["Vue.js", "FastAPI", "Docker", "Nginx", "MFU Internal API", "REST API"],
      },
    ],
  },
  skills: {
    sectionTag: "03 — ทักษะ",
    sectionTitle: "เครื่องมือที่ผมใช้",
    sectionSubtitle:
      "เฉพาะสิ่งที่ผมใช้ทำงานจริงมาแล้ว ไม่ใช่รายการทุกอย่างที่เคยได้ยินชื่อ",
    coreModulesSuffix: "เครื่องมือ",
    categories: [
      {
        category: "การพัฒนาส่วนหน้า (Frontend)",
        items: [
          { name: "React / Next.js", level: 90, note: "App Router, SSR, Server Actions" },
          { name: "TypeScript", level: 88, note: "Strict Typing, Interfaces" },
          { name: "Vue.js", level: 85, note: "Composition API, Pinia" },
          { name: "CSS3 / HTML5", level: 92, note: "Custom CSS, Flex/Grid, Glassmorphism" },
          { name: "Tailwind CSS", level: 85, note: "Utility-first design" },
        ],
      },
      {
        category: "การพัฒนาส่วนหลัง (Backend)",
        items: [
          { name: "Node.js / Express", level: 88, note: "REST APIs, Streaming" },
          { name: "FastAPI / Python", level: 85, note: "Async I/O, Pydantic" },
          { name: "Socket.IO", level: 82, note: "Real-time bi-directional streaming" },
          { name: "RESTful & SSE APIs", level: 90, note: "API Gateways & Rate limiting" },
        ],
      },
      {
        category: "ระบบ AI",
        items: [
          { name: "Multi-Agent Workflows", level: 85, note: "แตกงาน ประมวลผล และสรุปผล" },
          { name: "AWS Bedrock", level: 82, note: "เชื่อมต่อ LLM ผ่าน API" },
          { name: "MCP (Model Context Protocol)", level: 82, note: "เขียน Client และต่อเครื่องมือเอง" },
          { name: "Context Memory", level: 80, note: "เก็บสถานะเซสชันและประวัติสนทนา" },
        ],
      },
      {
        category: "การพัฒนาโดยใช้ AI ช่วย",
        items: [
          { name: "AI Coding Assistants", level: 90, note: "ใช้ในทุกโปรเจกต์ที่ทำมา" },
          { name: "การตั้งโจทย์ให้ AI", level: 85, note: "แตกงานเป็นขั้นที่ AI ทำได้จริง" },
          { name: "การตรวจงานที่ AI เขียน", level: 85, note: "อ่าน ทดสอบ และแก้ส่วนที่ใช้ไม่ได้" },
        ],
      },
      {
        category: "ฐานข้อมูล & Cloud DevOps",
        items: [
          { name: "MongoDB", level: 85, note: "Document Modeling & Aggregation" },
          { name: "PostgreSQL", level: 80, note: "Relational Schemas & Queries" },
          { name: "Docker & Containerization", level: 88, note: "Multi-stage builds, Compose" },
          { name: "Nginx & Vercel", level: 85, note: "Reverse Proxy, SSL, Edge Deployments" },
          { name: "Git & GitHub Actions", level: 88, note: "Version control & CI/CD" },
        ],
      },
    ],
  },
  experience: {
    sectionTag: "04 — ประวัติ",
    sectionTitle: "ประสบการณ์ & การศึกษา",
    sectionSubtitle:
      "ที่ทำงาน สิ่งที่เรียนมา และเอกสารยืนยัน",
    workTitle: "ประสบการณ์ทำงาน",
    educationTitle: "การศึกษา & เอกสารรับรอง",
    certificationsTitle: "ใบรับรอง (Certifications)",
    officialPdfsTitle: "เอกสารจากมหาวิทยาลัย",
    transcriptBtn: "ใบทรานสคริปต์การศึกษา (PDF)",
    graduationCertBtn: "ใบรับรองคาดว่าจะสำเร็จการศึกษา (PDF)",
    gpaLabel: "เกรดเฉลี่ยสะสม (GPA)",
    items: [
      {
        id: 1,
        title: "Full Stack & AI Engineer",
        company: "มหาวิทยาลัยแม่ฟ้าหลวง",
        companyUrl: "https://mfu.ac.th",
        period: "2025 – 2026",
        location: "เชียงราย, ประเทศไทย",
        description: [
          "สร้างระบบ AI มัลติเอเจนต์ แบ่งหน้าที่ระหว่างเอเจนต์วิเคราะห์งาน ประมวลผล และสรุปผล",
          "ทำชั้นหน่วยความจำบริบท ให้เอเจนต์จำประวัติการสนทนาข้ามรอบได้",
          "เชื่อม AWS Bedrock LLM ผ่านเกตเวย์แบบ OpenAI-Compatible",
          "เขียน MCP Client เอง ให้เอเจนต์เรียกใช้เครื่องมือบนเซิร์ฟเวอร์ภายนอกได้",
          "ทำระบบตอบกลับแบบสตรีมมิ่งเรียลไทม์ด้วย Socket.IO และ WebSockets",
          "พัฒนาเว็บด้วย Vue.js, Node.js และ FastAPI เชื่อมกับ SSO ของมหาวิทยาลัย",
          "ทำคอนเทนเนอร์ด้วย Docker และตั้งค่า Nginx สำหรับ SSL และ Reverse Proxy",
          "ใช้ AI coding assistant ตลอดการทำงาน โดยตรวจและทดสอบผลลัพธ์ก่อนนำขึ้นใช้จริงทุกครั้ง",
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
    ],
    education: [
      {
        id: 1,
        degree: "วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)",
        institution: "มหาวิทยาลัยแม่ฟ้าหลวง",
        period: "2022 – 2025",
        location: "เชียงราย, ประเทศไทย",
        gpa: "3.16 / 4.00",
      },
    ],
    certifications: [
      {
        id: 1,
        name: "HCCDA-Tech-Essentials",
        issuer: "Huawei Cloud",
        date: "2025",
      },
    ],
  },
  contact: {
    sectionTag: "05 — ติดต่อ",
    sectionTitle: "ติดต่อผม",
    sectionSubtitle:
      "งาน Full-Stack ระบบ AI หรือแค่อยากคุยเรื่องที่กำลังทำอยู่ก็ยินดีครับ",
    inviteTitle: "กำลังทำอะไรอยู่หรือเปล่าครับ?",
    inviteParagraph:
      "ตอนนี้ผมเปิดรับงานพัฒนา Full-Stack และงานระบบ AI ครับ ทักมาได้เลย เดี๋ยวผมตอบกลับ",
    directEmailLabel: "อีเมลติดต่อโดยตรง",
    copyBtn: "คัดลอกอีเมล",
    copiedBtn: "คัดลอกเรียบร้อย!",
    socialAccountsTitle: "ช่องทางโซเชียลมีเดีย",
    formTitle: "ส่งข้อความถึงผม",
    nameLabel: "ชื่อของคุณ *",
    namePlaceholder: "เช่น สมชาย ใจดี",
    emailLabel: "อีเมลของคุณ *",
    emailPlaceholder: "เช่น somchai@example.com",
    subjectLabel: "หัวข้อเรื่อง",
    subjectPlaceholder: "สอบถามโปรเจกต์ / การร่วมงาน",
    messageLabel: "ข้อความ *",
    messagePlaceholder: "บอกเล่าเกี่ยวกับโปรเจกต์ เป้าหมาย หรือข้อสอบถามของคุณ...",
    sendBtn: "ส่งข้อความ",
    successTitle: "ได้รับข้อความเรียบร้อยแล้ว!",
    successMsg:
      "ขอบคุณสำหรับการติดต่อครับ ผมได้รับข้อความของคุณแล้วและจะตอบกลับโดยเร็วที่สุด",
    sendAnotherBtn: "ส่งข้อความอีกครั้ง",
  },
  footer: {
    motto: "เรียบง่าย ใช้งานได้จริง และตรงไปตรงมา",
    copyrightSuffix: "Peerapong Wongwichai. สงวนลิขสิทธิ์ทั้งหมด.",
    backToTop: "กลับสู่ด้านบน",
  },
};
