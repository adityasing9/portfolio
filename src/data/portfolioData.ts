export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string; iconName?: string }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  type: 'experience' | 'education';
  description: string;
  highlights?: string[];
}

export interface AchievementItem {
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Aaditya Singh",
    shortName: "ADI",
    role: "AI/ML Engineer & Full-Stack Developer",
    headlineLine1: "Building Intelligent Solutions",
    headlineLine2: "For Real-World Problems",
    tagline: "AI/ML Engineer in the making. Full-stack developer. Technology enthusiast.",
    location: "Bengaluru, Karnataka, India",
    email: "to.msg.aadi@gmail.com",
    availableForWork: true,
  },
  
  socials: [
    { name: "GitHub", url: "https://github.com/adityasing9", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/aaditya-singh-37594b3ba", icon: "Linkedin" },
    { name: "Instagram", url: "https://instagram.com/adityasing.np", icon: "Instagram" },
    { name: "Email", url: "mailto:to.msg.aadi@gmail.com", icon: "Mail" },
  ],

  about: {
    heading: "About Me",
    subheading: "AI/ML Engineering Student at BMSIT & Full-Stack Systems Builder",
    introLarge: "I build intelligent software systems that solve real-world problems and bridge AI research with production engineering.",
    biography: [
      "I am an Artificial Intelligence and Machine Learning engineering student at BMS Institute of Technology and Management (BMSIT), Bengaluru, passionate about building intelligent software, solving real-world problems, and exploring emerging technologies.",
      "My core technical interests span Retrieval-Augmented Generation (RAG), Full-Stack Systems, Automation, FinTech Security, and Blockchain. I enjoy transforming theoretical concepts into practical applications that combine intelligent systems with resilient architecture.",
      "I believe in learning by building, continuous experimentation, and creating technology that delivers genuine, real-world value."
    ],
    education: "B.E. in Artificial Intelligence & Machine Learning, BMSIT Bengaluru (2024–2028)",
    location: "Bengaluru, Karnataka, India",
    interests: "Artificial Intelligence, LLMs, RAG, FinTech Security, PWAs, Blockchain & Web3",
    currentFocus: "Developing intelligent agents, vector search pipelines, and offline-capable web applications",
  },

  skills: [
    {
      title: "AI & Machine Learning",
      description: "Architecting LLM applications, RAG pipelines, and semantic retrieval.",
      skills: [
        { name: "Large Language Models (LLMs)" },
        { name: "Retrieval-Augmented Gen (RAG)" },
        { name: "Semantic Embeddings" },
        { name: "ChromaDB & Vector DBs" },
        { name: "OpenRouter & Gemini APIs" },
        { name: "AI Workflow Automation" },
        { name: "Python / Data Processing" },
      ]
    },
    {
      title: "Full-Stack & Frontend",
      description: "Building fluid, responsive, and resilient user interfaces & PWAs.",
      skills: [
        { name: "React.js / Next.js" },
        { name: "TypeScript & ESNext" },
        { name: "Tailwind CSS" },
        { name: "Progressive Web Apps (PWA)" },
        { name: "HTML5 / Responsive Design" },
        { name: "State Management & Vite" },
      ]
    },
    {
      title: "Backend & Systems",
      description: "Scalable APIs, authentication, and database architecture.",
      skills: [
        { name: "Node.js / Express.js" },
        { name: "FastAPI / Flask" },
        { name: "PostgreSQL & MySQL" },
        { name: "MongoDB & Supabase" },
        { name: "RESTful APIs" },
        { name: "JWT Authentication & Security" },
      ]
    },
    {
      title: "Tools, Web3 & DevOps",
      description: "Smart contracts, containerization, and developer workflows.",
      skills: [
        { name: "Git & GitHub Workflow" },
        { name: "Docker & Cloud Deployment" },
        { name: "Solidity & Hardhat (Web3)" },
        { name: "Linux (Ubuntu / Kali Linux)" },
        { name: "Vercel & Render" },
        { name: "Testing & Architecture" },
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-1",
      number: "01",
      title: "StudyAI — AI-Powered Document Learning Assistant",
      category: "AI/ML & Document Intelligence",
      description: "An intelligent learning platform featuring end-to-end RAG architecture, semantic vector retrieval with ChromaDB, chunking pipelines, and grounded Q&A over complex documents.",
      technologies: ["Python", "FastAPI", "ChromaDB", "Sentence Transformers", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/adityasing9",
      liveUrl: "https://github.com/adityasing9",
      image: "/projects/project_studyai_rag_1794436802603.jpg",
      featured: true,
    },
    {
      id: "project-2",
      number: "02",
      title: "IntentLock Commerce — AI Shopping Agent & Security Firewall",
      category: "AI Agents & FinTech Security",
      description: "AI personal shopping agent with strict deterministic validation gates and an intent security firewall intercepting transactions before reaching payment gateways (PayPal AI Hackathon).",
      technologies: ["Node.js", "Express", "OpenAI API", "PayPal REST API", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/adityasing9",
      liveUrl: "https://github.com/adityasing9",
      image: "/projects/project_intentlock_firewall_1794436803519.jpg",
      featured: true,
    },
    {
      id: "project-3",
      number: "03",
      title: "SettleHub — Local-First Expense Management & Settlement PWA",
      category: "FinTech & Progressive Web App",
      description: "Local-first expense splitting PWA with 100% offline capability via Dexie.js & IndexedDB, custom group split calculations, and greedy graph-based debt minimization algorithms.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Dexie.js", "IndexedDB", "Workbox PWA"],
      githubUrl: "https://github.com/adityasing9/SettleHub",
      liveUrl: "https://github.com/adityasing9/SettleHub",
      image: "/projects/project_settlehub_pwa_1794436803690.jpg",
      featured: true,
    },
    {
      id: "project-4",
      number: "04",
      title: "HackPass — QR-Based College Event Attendance Management",
      category: "Event Management & Computer Vision",
      description: "High-throughput ticketing and check-in system with encrypted dynamic QR verification, real-time sync, and rapid entry analytics for college technical symposiums.",
      technologies: ["FastAPI", "Python", "OpenCV", "PostgreSQL", "React", "Tailwind CSS"],
      githubUrl: "https://github.com/adityasing9",
      liveUrl: "https://github.com/adityasing9",
      image: "/projects/project_kinetix_canvas_1794435571099.jpg",
      featured: false,
    },
    {
      id: "project-5",
      number: "05",
      title: "Decrypto — Blockchain-Based Sealed-Bid Auction Application",
      category: "Web3 & Smart Contracts",
      description: "Decentralized sealed-bid auction platform on Ethereum featuring cryptographic bid commitments, reveal phases, and automated escrow settlement via Solidity smart contracts.",
      technologies: ["Solidity", "Hardhat", "Ethers.js", "React", "IPFS", "Ethereum"],
      githubUrl: "https://github.com/adityasing9",
      liveUrl: "https://github.com/adityasing9",
      image: "/projects/project_decrypto_blockchain_1794436804789.jpg",
      featured: false,
    }
  ] as ProjectItem[],

  timeline: [
    {
      year: "2024 — 2028",
      title: "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
      organization: "BMS Institute of Technology and Management (BMSIT), Bengaluru",
      type: "education",
      description: "Specializing in AI/ML algorithms, vector embeddings, full-stack systems, retrieval architectures, and software engineering.",
      highlights: [
        "Focus on Retrieval-Augmented Generation (RAG) and intelligent agent architectures",
        "Building real-world software across FinTech, AI security, and decentralized applications"
      ]
    },
    {
      year: "2024",
      title: "PayPal AI Hackathon — AI Agent Commerce & Security Architecture",
      organization: "PayPal & Hackathon Community",
      type: "experience",
      description: "Architected IntentLock Commerce, an autonomous AI shopping agent with deterministic security boundaries and intent verification before transaction execution.",
      highlights: [
        "Engineered intelligent payment security firewall protecting against prompt injection and malicious tool misuse",
        "Integrated PayPal REST API for automated, policy-enforced checkout workflows"
      ]
    },
    {
      year: "2023 — PRESENT",
      title: "Applied AI & Full-Stack Product Engineering",
      organization: "Independent Software Development & Open Source",
      type: "experience",
      description: "Developing open-source applications, local-first PWAs (SettleHub), and document intelligence systems (StudyAI).",
      highlights: [
        "Designed graph-based net debt simplification algorithm for multi-party group settlements",
        "Implemented offline-first sync pipelines with IndexedDB and service workers"
      ]
    }
  ] as TimelineItem[],

  achievements: [
    {
      year: "2024",
      title: "PayPal AI Hackathon Project Showcase",
      organization: "PayPal AI Hackathon",
      category: "Competition",
      description: "Engineered IntentLock Commerce, featuring an intelligent payment security firewall intercepting autonomous AI agent actions.",
    },
    {
      year: "2024",
      title: "StudyAI RAG Document Intelligence Platform",
      organization: "Applied AI Systems",
      category: "AI/ML Project",
      description: "Implemented high-accuracy semantic retrieval and grounded reasoning over dense technical documents using vector embeddings and ChromaDB.",
    },
    {
      year: "2024",
      title: "SettleHub Offline-First Financial Engine",
      organization: "FinTech & Web Systems",
      category: "PWA Milestone",
      description: "Published a progressive web application solving multi-party debt settlement with graph debt minimization algorithms and zero server latency.",
    }
  ] as AchievementItem[],
};
