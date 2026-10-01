import { useEffect, useRef, useState } from "react";
import { ALL_IMAGES, SITE } from "../data/content";
import { Star, Squiggle } from "./Decorations";
import { prefersReducedMotion } from "../hooks/useInteractions";

type Props = { onReveal: () => void };

const MIN_DURATION = 1500;

const Loader = ({ onReveal }: Props) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const revealRef = useRef(onReveal);
  revealRef.current = onReveal;

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const duration = reduced ? 300 : MIN_DURATION;
    let assetsReady = false;
    let raf = 0;
    let done = false;
    const start = performance.now();

    const preload = (src: string, high = false) =>
      new Promise<void>((res) => {
        const i = new Image();
        i.decoding = "async";
        if (high) i.fetchPriority = "high";
        i.onload = () => {
          // decode off the main thread so the first paint is instant
          (i.decode ? i.decode() : Promise.resolve()).catch(() => undefined).finally(() => res());
        };
        i.onerror = () => res();
        i.src = src;
      });

    const fontReady = (document as Document & { fonts?: FontFaceSet }).fonts?.ready ?? Promise.resolve();
    // Hero is critical; every other image is fetched in parallel so it's cached before scrolling.
    const others = ALL_IMAGES.filter((s) => s !== SITE.heroImage).map((s) => preload(s));
    Promise.race([
      Promise.all([fontReady, preload(SITE.heroImage, true), Promise.all(others)]),
      new Promise((r) => setTimeout(r, 3200)),
    ]).then(() => {
      assetsReady = true;
    });

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // Hold at 92% until assets are ready
      const target = assetsReady ? ease(t) : Math.min(ease(t), 0.92);
      setProgress(Math.round(target * 100));
      if (target >= 1 && !done) {
        done = true;
        setTimeout(() => {
          setExiting(true);
          revealRef.current();
          setTimeout(() => setGone(true), 1000);
        }, reduced ? 0 : 220);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;

  return (
    <div className={`loader ${exiting ? "loader--exit" : ""}`} role="status" aria-live="polite">
      <div className="loader__inner">
        <Star className="loader__star" />
        <div className="loader__logo">
          {SITE.logo.split("").map((ch, i) => (
            <span key={i} style={{ animationDelay: `${i * 60}ms` }}>
              {ch}
            </span>
          ))}
          <span className="loader__dot" style={{ animationDelay: `${SITE.logo.length * 60}ms` }}>.</span>
        </div>
        <div className="loader__bar">
          <svg viewBox="0 0 400 20" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M4 12 C 80 8, 200 6, 396 8"
              stroke="rgba(255,255,255,.08)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M4 12 C 80 8, 200 6, 396 8"
              stroke="var(--lime)"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              pathLength={100}
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
            />
          </svg>
        </div>
        <div className="loader__meta">
          <span>Loading the fun</span>
          <span className="loader__pct">{progress.toString().padStart(2, "0")}%</span>
        </div>
        <Squiggle className="loader__squiggle" />
      </div>
      <span className="sr-only">Loading {progress}%</span>
    </div>
  );
};

export default Loader;
