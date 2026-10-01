const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const SITE = {
  name: "SAQIB",
  fullName: "Muhammad Saqib",
  brand: "Saqib Visuals",
  logo: "SAQIB",
  roles: ["Full-Stack Developer", "AI Enthusiast", "Creative Visual Artist"],
  email: "mrsaqib242242@gmail.com",
  phone: "+92 347 8936242",
  location: "Faisalabad, Pakistan",
  website: "https://mrsaqib242.vercel.app",
  tagline: "Building Modern Digital Experiences with Innovation, Creativity & Technology.",
  heroImage: img("hero-character.png"),
  showreelImage: img("showreel.jpg"),
  showreelVideo: "https://videos.pexels.com/video-files/36325459/15405321_1920_1080_30fps.mp4",
  aboutImage: img("about.jpg"),
  mascotImage: img("mascot.png"),
};

export type NavItem = { label: string; href: string; id: string };

export const NAV: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Journey", href: "#journey", id: "journey" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export type Project = {
  title: string;
  category: string;
  image: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  { title: "R RUN!", category: "Web App & 2D Animation", image: img("project-run.jpg"), accent: "#f5d90a" },
  { title: "DAYDREAMS", category: "Interactive Platform", image: img("project-daydreams.jpg"), accent: "#ff7a2f" },
  { title: "LOST SIGNAL", category: "AI & Motion Experience", image: img("project-lost-signal.jpg"), accent: "#7b3cff" },
  { title: "GROOVY TUNES", category: "Creative Visual Production", image: img("project-groovy.jpg"), accent: "#2fd3a0" },
];

export type SkillKey = "react" | "tailwind" | "ai" | "api" | "pr" | "ae";

export const SKILLS: { key: SkillKey; label: string[] }[] = [
  { key: "react", label: ["React.js &", "Modern JS"] },
  { key: "tailwind", label: ["Tailwind CSS", "& UI/UX"] },
  { key: "ai", label: ["AI Integration", "& Automation"] },
  { key: "api", label: ["Databases &", "REST APIs"] },
  { key: "pr", label: ["Premiere", "Pro"] },
  { key: "ae", label: ["After", "Effects"] },
];

export type SocialKey = "whatsapp" | "instagram" | "tiktok" | "facebook" | "snapchat";

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/923478936242" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/mr_saqib242" },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@mr_saqib_242" },
  { key: "facebook", label: "Facebook", href: "https://web.facebook.com/muhammad.saqib.718278" },
  { key: "snapchat", label: "Snapchat", href: "https://www.snapchat.com/add/mrsaqib242" },
];

/* ---------- SECTIONS CONTENT ---------- */

export const MARQUEE_A = ["Full-Stack Web Dev", "AI Solutions", "UI/UX Design", "Saqib Visuals", "React & Modern JS", "Creative Visuals"];
export const MARQUEE_B = ["Fast Performance", "Clean Code", "Creative Visuals", "Built For The Future", "Turn Ideas Into Reality"];

export const STATS = [
  { value: 5, suffix: "+", label: "Years building digital experiences", color: "var(--lime)" },
  { value: 80, suffix: "+", label: "Projects & web apps delivered", color: "var(--purple-2)" },
  { value: 40, suffix: "+", label: "Happy clients worldwide", color: "var(--blue)" },
  { value: 99, suffix: "%", label: "Client satisfaction & fast delivery", color: "var(--orange)" },
];

export type ServiceIcon = "character" | "motion" | "edit" | "story";

export const SERVICES: { icon: ServiceIcon; title: string; text: string; tags: string[]; accent: string }[] = [
  {
    icon: "motion",
    title: "Premium Website Development",
    text: "High-speed, modern, SEO-ready and responsive web applications built with cutting-edge technologies.",
    tags: ["React.js", "Tailwind CSS", "High Speed"],
    accent: "var(--lime)",
  },
  {
    icon: "character",
    title: "Responsive Web Applications",
    text: "Interactive, scalable, and dynamic web apps engineered for a seamless user experience across all devices.",
    tags: ["Full-Stack", "Modern JS", "Dynamic UX"],
    accent: "var(--purple-2)",
  },
  {
    icon: "story",
    title: "AI Integration & Automation",
    text: "Smart AI integrations, LLMs, intelligent automations, and bots to supercharge workflows and products.",
    tags: ["Gemini / AI", "Automation", "REST APIs"],
    accent: "var(--blue)",
  },
  {
    icon: "edit",
    title: "Creative Visuals & Video Editing",
    text: "Punchy video editing, motion graphics, and graphic design that grab attention and tell compelling stories.",
    tags: ["Premiere Pro", "After Effects", "Branding"],
    accent: "var(--orange)",
  },
];

export type JourneyIcon = "pencil" | "brush" | "film" | "rocket" | "studio" | "star";

export const JOURNEY: { year: string; title: string; text: string; icon: JourneyIcon; color: string }[] = [
  {
    year: "2020",
    title: "The First Line of Code",
    text: "Wrote my very first lines of HTML and CSS, discovering the thrill of building things for the digital screen.",
    icon: "pencil",
    color: "var(--lime)",
  },
  {
    year: "2021",
    title: "Modern JavaScript & React",
    text: "Mastered React.js, modern ES6+, and responsive UI workflows with Tailwind CSS and interactive components.",
    icon: "brush",
    color: "var(--blue)",
  },
  {
    year: "2022",
    title: "Full-Stack & APIs",
    text: "Engineered scalable REST APIs, relational databases, and full-stack web applications with snappy performance.",
    icon: "film",
    color: "var(--purple-2)",
  },
  {
    year: "2023",
    title: "Creative Visuals & Video",
    text: "Expanded into high-impact video editing and creative visual design, bridging engineering with aesthetics.",
    icon: "rocket",
    color: "var(--orange)",
  },
  {
    year: "2024",
    title: "AI Integration & Automation",
    text: "Embedded generative AI solutions, smart automations, and intelligent workflows into production applications.",
    icon: "studio",
    color: "var(--lime)",
  },
  {
    year: "2025",
    title: "Saqib Visuals",
    text: "Running Saqib Visuals — delivering premium web apps, AI tools, and creative content for clients globally.",
    icon: "star",
    color: "var(--blue)",
  },
];

export const PROCESS = [
  { step: "01", title: "Idea & Discovery", text: "We discuss your vision, goals, and aesthetic to craft a crystal-clear project roadmap." },
  { step: "02", title: "UI/UX & Architecture", text: "Clean wireframes, intuitive layouts, and scalable architecture designed for high conversion." },
  { step: "03", title: "Code & AI Integration", text: "Writing performant code, connecting robust APIs, and integrating AI automations." },
  { step: "04", title: "Polish & Launch", text: "Cross-device testing, speed optimization, seamless deployment, and reliable support." },
];

export const TESTIMONIALS = [
  { name: "Hamza Sheikh", role: "E-Commerce Founder", quote: "Saqib built our storefront with blazing fast speed and killer aesthetics. Our conversions shot up within two weeks!", color: "var(--lime)" },
  { name: "Zainab Malik", role: "Agency Director", quote: "Muhammad Saqib's attention to detail in React and UI/UX design is world-class. Fast delivery and spotless communication.", color: "var(--purple-2)" },
  { name: "David Miller", role: "Tech Lead", quote: "Integrated an AI workflow into our web platform seamlessly. Saqib delivers clean, maintainable code every time.", color: "var(--blue)" },
  { name: "Ayesha Noor", role: "Content Creator", quote: "From our web app to high-energy video edits, Saqib Visuals elevated my whole digital brand. Highly recommended!", color: "var(--orange)" },
  { name: "Bilal Farooq", role: "Startup Founder", quote: "Delivered our MVP ahead of schedule with responsive layouts and smooth animations that our users adore.", color: "var(--lime)" },
  { name: "Sarah Jenkins", role: "Product Manager", quote: "Exceptional work ethic. Whether it's complex APIs, sleek UI, or video edits, he brings immense value.", color: "var(--purple-2)" },
];

export type BlogPost = { title: string; excerpt: string; tag: string; date: string; read: string; image: string };

export const BLOG: BlogPost[] = [
  {
    title: "Building Blazing-Fast Web Apps with React & Tailwind",
    excerpt: "How modern component patterns, minimal dependencies, and clean CSS deliver lightning-fast page loads.",
    tag: "Web Dev",
    date: "Mar 12, 2025",
    read: "5 min",
    image: img("blog-walkcycle.jpg"),
  },
  {
    title: "Integrating AI & LLMs into Production Applications",
    excerpt: "Practical guide to adding intelligent automation, chatbots, and generative features to user-facing apps.",
    tag: "AI & Tech",
    date: "Feb 02, 2025",
    read: "6 min",
    image: img("blog-motion.jpg"),
  },
  {
    title: "Design Principles that Drive Digital Conversions",
    excerpt: "Why clean UI/UX hierarchy, typography, and micro-interactions turn regular visitors into loyal clients.",
    tag: "UI/UX Design",
    date: "Jan 18, 2025",
    read: "7 min",
    image: img("showreel.jpg"),
  },
];

export const FAQ = [
  { q: "What kind of projects and services do you offer?", a: "I specialize in premium website development, responsive React web apps, AI integrations & automations, UI/UX design, database & REST APIs, and creative video editing." },
  { q: "How long does a typical project take?", a: "A modern website or landing page typically takes 3–5 days. Complex full-stack applications or custom AI integrations take 1–3 weeks with transparent milestones." },
  { q: "What do you need from me to get started?", a: "A quick brief: your goals, reference sites or features you love, and your target timeline. We will collaborate closely to shape the exact specifications." },
  { q: "Do you work with international clients?", a: "Yes! Based in Faisalabad, Pakistan, I work with clients, startups, and creators globally via WhatsApp, Google Meet, and async updates." },
  { q: "Do you provide revisions and post-launch support?", a: "Yes, revisions are included during both the design and development phases, along with post-launch support to guarantee everything runs smoothly." },
];

/** All images, used by the loader to preload everything for instant display. */
export const ALL_IMAGES = [
  SITE.heroImage,
  SITE.showreelImage,
  ...PROJECTS.map((p) => p.image),
  SITE.aboutImage,
  SITE.mascotImage,
  img("blog-walkcycle.jpg"),
  img("blog-motion.jpg"),
];
