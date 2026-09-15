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
    shortName: "ADI", // Used for the header logo "Jack." or "[YOUR NAME]."
    role: "Student",
    headlineLine1: "Designing & Building",
    headlineLine2: "Creative Digital Products",
    tagline: "Creative Developer & Designer specializing in building memorable, high-performance digital experiences.",
    location: "Nepal",
    email: "to.msg.aadi@gmail.com",
    availableForWork: true,
  },
  
  socials: [
    { name: "GitHub", url: "https://github.com/adityasing9", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/aaditya-singh-37594b3ba", icon: "Linkedin" },
    { name: "Instagram", url: "https://instagram.com/adityasing.np", icon: "Instagram" },
    { name: "Email", url: "to.msg.aadi@gmail.com", icon: "Mail" },
  ],

  about: {
    heading: "About Me",
    subheading: "A hybrid designer and software engineer merging aesthetics with modern code.",
    introLarge: "I build digital experiences that live at the intersection of minimal aesthetic design and resilient code architecture.",
    biography: [
      "[YOUR ABOUT DESCRIPTION: Replace this with your personal background, how you got started in development or design, and what drives your craft every day.]",
      "[YOUR PHILOSOPHY: Share your perspective on technology, modern web performance, typography, and user-centric design principles.]"
    ],
    education: "[YOUR DEGREE / FIELD OF STUDY, UNIVERSITY NAME]",
    location: "[YOUR CURRENT LOCATION / TIMEZONE]",
    interests: "[YOUR INTERESTS, e.g., Creative Coding, Generative Art, UI Architecture, Typography]",
    currentFocus: "[YOUR CURRENT FOCUS, e.g., Exploring WebGL, React Server Components, and Design Systems]",
  },

  skills: [
    {
      title: "Frontend Development",
      description: "Building responsive, fluid, and accessible user interfaces.",
      skills: [
        { name: "HTML5 / Semantic Web" },
        { name: "Modern CSS / Tailwind CSS" },
        { name: "JavaScript (ESNext)" },
        { name: "TypeScript" },
        { name: "React / Next.js" },
        { name: "Vue.js / Svelte (Optional)" },
        { name: "Responsive UI Architecture" },
        { name: "Web Performance & Core Web Vitals" },
      ]
    },
    {
      title: "Backend & APIs",
      description: "Scalable services, database design, and resilient backend systems.",
      skills: [
        { name: "Node.js / Express" },
        { name: "Python / FastAPI" },
        { name: "REST & GraphQL APIs" },
        { name: "PostgreSQL / MongoDB" },
        { name: "Authentication & Security" },
        { name: "Serverless Architecture" },
      ]
    },
    {
      title: "Design & Tools",
      description: "Tooling, prototyping, version control, and design systems.",
      skills: [
        { name: "Figma & UI Prototyping" },
        { name: "Git & GitHub Workflow" },
        { name: "VS Code & Developer Tooling" },
        { name: "Design Systems & Tokens" },
        { name: "Docker & CI/CD Pipelines" },
        { name: "Testing (Jest / Vitest / Playwright)" },
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-1",
      number: "01",
      title: "[PROJECT 01: FEATURED DIGITAL PLATFORM]",
      category: "Full Stack / Web Application",
      description: "[PROJECT DESCRIPTION: A flagship modern web application featuring clean editorial layouts, real-time data sync, and fluid interactive transitions.]",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/[YOUR_GITHUB]/[PROJECT_REPO_1]",
      liveUrl: "https://[project-one-demo].com",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "project-2",
      number: "02",
      title: "[PROJECT 02: CREATIVE DESIGN SYSTEM]",
      category: "UI/UX & Component Library",
      description: "[PROJECT DESCRIPTION: A minimal, accessible design system engineered with precision typography, dark/light theme switching, and modular tokens.]",
      technologies: ["TypeScript", "React", "Storybook", "Tailwind CSS", "Figma"],
      githubUrl: "https://github.com/[YOUR_GITHUB]/[PROJECT_REPO_2]",
      liveUrl: "https://[project-two-demo].com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      id: "project-3",
      number: "03",
      title: "[PROJECT 03: CLOUD INTELLIGENCE DASHBOARD]",
      category: "Analytics & Data Visualization",
      description: "[PROJECT DESCRIPTION: High-performance dashboard visualizer providing actionable insights, telemetry analytics, and interactive charts.]",
      technologies: ["React", "D3.js", "FastAPI", "Tailwind CSS", "Docker"],
      githubUrl: "https://github.com/[YOUR_GITHUB]/[PROJECT_REPO_3]",
      liveUrl: "https://[project-three-demo].com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      featured: false,
    },
    {
      id: "project-4",
      number: "04",
      title: "[PROJECT 04: E-COMMERCE EDITORIAL EXPERIENCE]",
      category: "Creative Commerce / Web Experience",
      description: "[PROJECT DESCRIPTION: An editorial luxury commerce storefront featuring micro-animations, seamless checkout, and image optimization.]",
      technologies: ["Next.js", "Stripe API", "Tailwind CSS", "GraphQL"],
      githubUrl: "https://github.com/[YOUR_GITHUB]/[PROJECT_REPO_4]",
      liveUrl: "https://[project-four-demo].com",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      featured: false,
    }
  ] as ProjectItem[],

  timeline: [
    {
      year: "2024 — PRESENT",
      title: "[SENIOR DEVELOPER / DESIGNER ROLE]",
      organization: "[COMPANY / ORGANIZATION NAME]",
      type: "experience",
      description: "[DESCRIPTION: Leading frontend architecture, designing intuitive digital experiences, and collaborating with cross-functional product teams.]",
      highlights: [
        "[Key achievement or responsibility in this role]",
        "[Performance optimization or architectural achievement]"
      ]
    },
    {
      year: "2022 — 2024",
      title: "[FULL STACK SOFTWARE DEVELOPER]",
      organization: "[COMPANY / CLIENT NAME]",
      type: "experience",
      description: "[DESCRIPTION: Developed scalable web applications, designed RESTful APIs, and created responsive UI component libraries.]",
      highlights: [
        "[Spearheaded migration to modern React/TypeScript stack]",
        "[Collaborated on end-to-end user experience enhancements]"
      ]
    },
    {
      year: "2018 — 2022",
      title: "[BACHELOR OF SCIENCE IN COMPUTER SCIENCE / DESIGN]",
      organization: "[UNIVERSITY / INSTITUTE NAME]",
      type: "education",
      description: "[DESCRIPTION: Specialized in software engineering, human-computer interaction, algorithms, and interactive media systems.]",
      highlights: [
        "[Dean's List / Honors recognition]",
        "[Capstone project in modern web technologies]"
      ]
    }
  ] as TimelineItem[],

  achievements: [
    {
      year: "2024",
      title: "[NAME OF CERTIFICATION OR AWARD]",
      organization: "[ISSUING BODY / INSTITUTION]",
      category: "Certification",
      description: "[Brief overview of requirements, skill mastery, or recognition criteria achieved.]",
    },
    {
      year: "2023",
      title: "[HACKATHON OR COMPETITION AWARD]",
      organization: "[ORGANIZING EVENT / SPONSOR]",
      category: "Competition",
      description: "[Winner / Runner-Up out of X teams building an innovative digital prototype.]",
    },
    {
      year: "2022",
      title: "[PROFESSIONAL CERTIFICATION / HONOR]",
      organization: "[CLOUD OR TECH PROVIDER, e.g. AWS / Google / Meta]",
      category: "Accreditation",
      description: "[Verified proficiency in modern cloud architecture or frontend engineering.]",
    }
  ] as AchievementItem[],
};
