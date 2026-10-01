import { useCallback, useEffect, useRef, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import MenuOverlay from "./components/MenuOverlay";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Showreel from "./components/Showreel";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Process from "./components/Process";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import CustomCursor from "./components/CustomCursor";
import CursorTrail from "./components/CursorTrail";
import ScrollProgress from "./components/ScrollProgress";
import { SvgDefs, ArrowUpRight } from "./components/Decorations";
import { SITE, type BlogPost, type NavItem, type Project } from "./data/content";
import { useGlobalMouseParallax, useScrollSpy } from "./hooks/useInteractions";

const SPY_IDS = ["home", "projects", "journey", "services", "about", "blog", "contact"];

const PROJECT_BLURBS: Record<string, string> = {
  "R RUN!": "A high-energy chase short built around squash & stretch, smear frames and punchy comic timing.",
  DAYDREAMS: "Looping motion graphics for a cozy lo-fi brand, with soft easing, warm palettes and tiny surprises.",
  "LOST SIGNAL": "An animated short about a kid chasing a fading radio signal through a neon city.",
  "GROOVY TUNES": "A bouncy character-driven music video synced frame-perfect to every beat.",
};

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  useGlobalMouseParallax();
  const active = useScrollSpy(SPY_IDS);

  useEffect(() => {
    document.body.style.overflow = loaded ? "" : "hidden";
  }, [loaded]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onNavigate = useCallback(
    (item: NavItem) => {
      setMenuOpen(false);
      requestAnimationFrame(() => scrollTo(item.id));
    },
    [scrollTo]
  );

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openVideo = useCallback(() => setVideoOpen(true), []);
  const closeVideo = useCallback(() => setVideoOpen(false), []);
  const closeProject = useCallback(() => setProject(null), []);
  const closePost = useCallback(() => setPost(null), []);
  const goProjects = useCallback(() => scrollTo("projects"), [scrollTo]);
  const goShowreel = useCallback(() => scrollTo("showreel"), [scrollTo]);
  const goContact = useCallback(() => scrollTo("contact"), [scrollTo]);
  const goTop = useCallback(() => scrollTo("home"), [scrollTo]);
  const onViewAll = useCallback(() => showToast("Full archive coming soon. Here are the favourites!"), [showToast]);
  const onViewAllPosts = useCallback(() => showToast("More posts are being drawn ✏️ Stay tuned!"), [showToast]);
  const onMore = useCallback(() => scrollTo("journey"), [scrollTo]);

  return (
    <div className={`app ${loaded ? "is-loaded" : ""}`}>
      <SvgDefs />
      <Loader onReveal={() => setLoaded(true)} />
      <ScrollProgress />
      <CustomCursor />
      <CursorTrail />
      <div className="grain" aria-hidden="true" />

      <Navbar active={active} menuOpen={menuOpen} onToggleMenu={toggleMenu} onNavigate={onNavigate} />
      <MenuOverlay open={menuOpen} active={active} onClose={closeMenu} onNavigate={onNavigate} />

      <main>
        <Hero onPlay={openVideo} onProjects={goProjects} onScrollDown={goShowreel} />
        <Marquee />
        <Showreel onPlay={openVideo} />
        <Stats />
        <Projects onOpen={setProject} onViewAll={onViewAll} />
        <Skills />
        <Services />
        <Journey />
        <Process />
        <About onMore={onMore} />
        <Testimonials />
        <Blog onOpen={setPost} onViewAll={onViewAllPosts} />
        <FAQ onContact={goContact} />
        <Contact />
      </main>
      <Footer onTop={goTop} />

      <Modal open={videoOpen} onClose={closeVideo} label="Showreel video" wide>
        <div className="modal__video">
          <video src={SITE.showreelVideo} poster={SITE.showreelImage} controls autoPlay playsInline preload="auto" />
        </div>
        <div className="modal__caption">
          <h3 className="section-title">Showreel 2025</h3>
          <p>A quick glimpse of my work and my love for bringing stories to life.</p>
        </div>
      </Modal>

      <Modal open={!!project} onClose={closeProject} label={project?.title ?? "Project"}>
        {project && (
          <>
            <div className="modal__image" style={{ ["--accent" as string]: project.accent }}>
              <img src={project.image} alt={`${project.title} artwork`} decoding="async" />
            </div>
            <div className="modal__caption">
              <span className="modal__tag">{project.category}</span>
              <h3 className="section-title">{project.title}</h3>
              <p>{PROJECT_BLURBS[project.title]}</p>
              <button
                type="button"
                className="text-link"
                onClick={() => {
                  setProject(null);
                  setVideoOpen(true);
                }}
              >
                Watch in Showreel <ArrowUpRight />
              </button>
            </div>
          </>
        )}
      </Modal>

      <Modal open={!!post} onClose={closePost} label={post?.title ?? "Article"}>
        {post && (
          <>
            <div className="modal__image">
              <img src={post.image} alt="" decoding="async" />
            </div>
            <div className="modal__caption">
              <span className="modal__tag">
                {post.tag} · {post.read} read
              </span>
              <h3 className="modal__post-title">{post.title}</h3>
              <p>{post.excerpt}</p>
              <p className="modal__muted">The full article drops on the blog soon. Follow along on Instagram for the first look.</p>
            </div>
          </>
        )}
      </Modal>

      <div className={`toast ${toast ? "is-show" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  );
}
