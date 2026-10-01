const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const SITE = {
  name: "KASHIF",
  logo: "KASHIF",
  roles: ["2D Animator", "Motion Designer", "Video Editor"],
  email: "hello@kashif.com",
  location: "India",
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
  { title: "R RUN!", category: "2D Animation", image: img("project-run.jpg"), accent: "#f5d90a" },
  { title: "DAYDREAMS", category: "Motion Graphics", image: img("project-daydreams.jpg"), accent: "#ff7a2f" },
  { title: "LOST SIGNAL", category: "Animated Short", image: img("project-lost-signal.jpg"), accent: "#7b3cff" },
  { title: "GROOVY TUNES", category: "Music Video", image: img("project-groovy.jpg"), accent: "#2fd3a0" },
];

export type SkillKey = "toonboom" | "ae" | "an" | "ps" | "blender" | "pr";

export const SKILLS: { key: SkillKey; label: string[] }[] = [
  { key: "toonboom", label: ["Toon Boom", "Harmony"] },
  { key: "ae", label: ["Adobe After", "Effects"] },
  { key: "an", label: ["Adobe", "Animate"] },
  { key: "ps", label: ["Adobe", "Photoshop"] },
  { key: "blender", label: ["Blender"] },
  { key: "pr", label: ["Premiere", "Pro"] },
];

export type SocialKey = "instagram" | "dribbble" | "youtube" | "linkedin";

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: "instagram", label: "Instagram", href: "https://instagram.com" },
  { key: "dribbble", label: "Dribbble", href: "https://dribbble.com" },
  { key: "youtube", label: "YouTube", href: "https://youtube.com" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
];

/* ---------- NEW SECTIONS ---------- */

export const MARQUEE_A = ["2D Animation", "Motion Design", "Video Editing", "Character Design", "Storyboards"];
export const MARQUEE_B = ["Frame by Frame", "Squash & Stretch", "Bold Colors", "Big Ideas", "Make it Dope"];

export const STATS = [
  { value: 6, suffix: "+", label: "Years of drawing frames", color: "var(--lime)" },
  { value: 120, suffix: "+", label: "Projects delivered", color: "var(--purple-2)" },
  { value: 45, suffix: "+", label: "Happy clients worldwide", color: "var(--blue)" },
  { value: 2, suffix: "M+", label: "Views on animated work", color: "var(--orange)" },
];

export type ServiceIcon = "character" | "motion" | "edit" | "story";

export const SERVICES: { icon: ServiceIcon; title: string; text: string; tags: string[]; accent: string }[] = [
  {
    icon: "character",
    title: "2D Character Animation",
    text: "Expressive frame-by-frame and rigged characters with snappy timing, weight and personality.",
    tags: ["Frame by frame", "Rigging", "Lip-sync"],
    accent: "var(--lime)",
  },
  {
    icon: "motion",
    title: "Motion Graphics",
    text: "Bold, bouncy explainers, logo stings and social loops that stop the scroll.",
    tags: ["Explainers", "Logo stings", "Social loops"],
    accent: "var(--purple-2)",
  },
  {
    icon: "edit",
    title: "Video Editing",
    text: "Story-first edits, punchy pacing, sound design and colour for YouTube, brands and music.",
    tags: ["YouTube", "Music videos", "Colour"],
    accent: "var(--blue)",
  },
  {
    icon: "story",
    title: "Storyboards & Animatics",
    text: "From a napkin idea to a timed animatic, so everyone sees the film before a frame is final.",
    tags: ["Scripts", "Boards", "Animatics"],
    accent: "var(--orange)",
  },
];

export type JourneyIcon = "pencil" | "brush" | "film" | "rocket" | "studio" | "star";

export const JOURNEY: { year: string; title: string; text: string; icon: JourneyIcon; color: string }[] = [
  {
    year: "2016",
    title: "The First Flipbook",
    text: "Bouncing balls in the corners of school notebooks. Flipping pages became my favourite thing.",
    icon: "pencil",
    color: "var(--lime)",
  },
  {
    year: "2018",
    title: "Hello, Photoshop",
    text: "Moved from paper to pixels. Fan art, character sketches and a lot of late-night tutorials.",
    icon: "brush",
    color: "var(--blue)",
  },
  {
    year: "2019",
    title: "Frame by Frame",
    text: "Learnt Adobe Animate and made my first 12fps walk cycle. It wobbled, and I loved it.",
    icon: "film",
    color: "var(--purple-2)",
  },
  {
    year: "2021",
    title: "Going Freelance",
    text: "First paid music video. Then YouTubers, indie brands and creators from around the world.",
    icon: "rocket",
    color: "var(--orange)",
  },
  {
    year: "2023",
    title: "Studio Life",
    text: "Worked with an animation team on series episodes, learning pipelines, Toon Boom and teamwork.",
    icon: "studio",
    color: "var(--lime)",
  },
  {
    year: "2025",
    title: "Creating Awesome",
    text: "Independent 2D animator and motion designer with 120+ projects. The next chapter could be yours.",
    icon: "star",
    color: "var(--blue)",
  },
];

export const PROCESS = [
  { step: "01", title: "Idea & Script", text: "We talk, I listen, and we lock the story and vibe." },
  { step: "02", title: "Storyboard", text: "Rough boards and an animatic to nail timing early." },
  { step: "03", title: "Animate", text: "Keys, in-betweens, colour. This is where it comes alive." },
  { step: "04", title: "Polish & Deliver", text: "Sound, effects and final exports for every platform." },
];

export const TESTIMONIALS = [
  { name: "Aarav Mehta", role: "YouTuber, 800K subs", quote: "Kashif turned my boring intro into something my audience actually waits for. Pure magic.", color: "var(--lime)" },
  { name: "Sara Khan", role: "Founder, Doodle Co.", quote: "Fast, super creative and fun to work with. The explainer doubled our sign-ups.", color: "var(--purple-2)" },
  { name: "Leo Martins", role: "Indie Musician", quote: "The music video felt like my song came to life. Every beat hit perfectly.", color: "var(--blue)" },
  { name: "Priya Nair", role: "Creative Lead, Pixel Pop", quote: "His timing and character acting are top-tier. He's now our go-to animator.", color: "var(--orange)" },
  { name: "Daniel Cho", role: "Producer", quote: "Delivered ahead of schedule, with extra touches we never asked for. Love it.", color: "var(--lime)" },
  { name: "Zoya Ali", role: "Brand Manager", quote: "Our social loops went viral twice in one month. Kashif gets internet culture.", color: "var(--purple-2)" },
];

export type BlogPost = { title: string; excerpt: string; tag: string; date: string; read: string; image: string };

export const BLOG: BlogPost[] = [
  {
    title: "12 Tiny Tricks for Juicier Walk Cycles",
    excerpt: "Overlap, drag and a sneaky head bob: small changes that make a walk feel alive instead of robotic.",
    tag: "Animation",
    date: "Mar 12, 2025",
    read: "6 min",
    image: img("blog-walkcycle.jpg"),
  },
  {
    title: "Easing Is Everything in Motion Design",
    excerpt: "Why linear keyframes feel dead, and how I build curves in After Effects that bounce with attitude.",
    tag: "Motion",
    date: "Feb 02, 2025",
    read: "5 min",
    image: img("blog-motion.jpg"),
  },
  {
    title: "Painting a Neon City in 3 Layers",
    excerpt: "Behind the scenes of the Lost Signal backgrounds: colour scripts, glow passes and cheap parallax.",
    tag: "Behind the Scenes",
    date: "Jan 18, 2025",
    read: "8 min",
    image: img("showreel.jpg"),
  },
];

export const FAQ = [
  { q: "What kind of projects do you take on?", a: "Character animation, explainers, music videos, YouTube intros and edits, social loops and animated shorts. If it moves, let's talk." },
  { q: "How long does a typical animation take?", a: "A 30–60 second motion graphics piece usually takes 1–3 weeks. Frame-by-frame character work takes longer. You'll get a clear timeline up front." },
  { q: "What do you need from me to start?", a: "A short brief: your goal, audience, rough length, references you love and your deadline. Don't worry if it's messy, we'll shape it together." },
  { q: "Do you work with international clients?", a: "Yes! I work remotely with creators and brands worldwide, with async updates and review links at every stage." },
  { q: "How many revisions are included?", a: "Two rounds at the storyboard stage and two rounds on the final animation are included, so we're aligned long before the final render." },
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
