import { memo, useEffect, useRef } from "react";
import { JOURNEY, type JourneyIcon } from "../data/content";
import { prefersReducedMotion, useReveal } from "../hooks/useInteractions";
import SplitTitle from "./SplitTitle";
import { CurvedArrow, Smiley, Star } from "./Decorations";

const PATH_D =
  "M50 0 C 72 55, 28 110, 50 166 S 72 276, 50 333 S 28 443, 50 500 S 72 610, 50 666 S 28 776, 50 833 S 72 943, 50 1000";

const p = { fill: "none", stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const NodeIcon = ({ name }: { name: JourneyIcon }) => {
  switch (name) {
    case "pencil":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20 L5 15 L16 4 L20 8 L9 19 Z" {...p} />
          <path d="M14 6 L18 10" {...p} />
        </svg>
      );
    case "brush":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4 L11 13" {...p} />
          <path d="M10 14 C 6 14, 5 17, 4 20 C 8 20, 11 19, 11 15 Z" {...p} />
        </svg>
      );
    case "film":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" {...p} />
          <path d="M3 9 H21 M3 15 H21 M8 5 V9 M16 5 V9 M8 15 V19 M16 15 V19" {...p} />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 C 16 6, 17 11, 15 16 H9 C 7 11, 8 6, 12 3 Z" {...p} />
          <circle cx="12" cy="10" r="1.8" {...p} />
          <path d="M9 16 L7 20 M15 16 L17 20 M12 17 V21" {...p} />
        </svg>
      );
    case "studio":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" {...p} />
          <path d="M8 20 H16 M12 16 V20" {...p} />
          <path d="M10 8 L15 10 L10 12 Z" {...p} />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 L14.5 9 L21 9.5 L16 13.8 L17.6 20 L12 16.6 L6.4 20 L8 13.8 L3 9.5 L9.5 9 Z" {...p} />
        </svg>
      );
  }
};

const Journey = () => {
  const sectionRef = useReveal<HTMLElement>(0.05);
  const timelineRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const track = trackRef.current;
    const path = pathRef.current;
    const marker = markerRef.current;
    if (!timeline || !track || !path || !marker) return;

    const items = Array.from(timeline.querySelectorAll<HTMLElement>(".journey__item"));
    const total = path.getTotalLength();
    let size = { w: 0, h: 0 };
    let offsets: number[] = [];
    let raf = 0;
    let visible = false;

    const measure = () => {
      size = { w: track.clientWidth, h: track.clientHeight };
      const tTop = timeline.getBoundingClientRect().top;
      offsets = items.map((it) => {
        const node = it.querySelector<HTMLElement>(".journey__node") ?? it;
        const r = node.getBoundingClientRect();
        return (r.top + r.height / 2 - tTop) / timeline.clientHeight;
      });
    };

    const render = (prog: number) => {
      path.style.strokeDashoffset = `${1 - prog}`;
      const pt = path.getPointAtLength(prog * total);
      const x = (pt.x / 100) * size.w;
      const y = (pt.y / 1000) * size.h;
      marker.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${prog * 720}deg)`;
      items.forEach((it, i) => {
        const on = prog >= offsets[i] - 0.01;
        it.classList.toggle("is-active", on);
        if (on) it.classList.add("is-seen");
      });
    };

    if (prefersReducedMotion()) {
      measure();
      render(1);
      return;
    }

    const update = () => {
      raf = 0;
      const r = timeline.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = Math.max(0, Math.min(1, (vh * 0.7 - r.top) / r.height));
      render(prog);
    };
    const onScroll = () => {
      if (!raf && visible) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) {
        measure();
        update();
      }
    });
    io.observe(timeline);
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} id="journey" className="section journey container" aria-labelledby="journey-title">
      <div className="card journey__card">
        <div className="section-head section-head--center">
          <span className="eyebrow rv rv-up">Since 2016</span>
          <SplitTitle id="journey-title" text="My Journey">
            <Star className="journey__title-star spin-slow" />
          </SplitTitle>
          <p className="section-head__sub rv rv-up" style={{ ["--d" as string]: "0.2s" }}>
            From notebook doodles to animated stories: every frame of the way.
          </p>
        </div>

        <div ref={timelineRef} className="journey__timeline">
          <div ref={trackRef} className="journey__track" aria-hidden="true">
            <svg viewBox="0 0 100 1000" preserveAspectRatio="none">
              <path d={PATH_D} className="journey__path-bg" vectorEffect="non-scaling-stroke" />
              <path ref={pathRef} d={PATH_D} className="journey__path-fg" pathLength={1} vectorEffect="non-scaling-stroke" />
            </svg>
            <div ref={markerRef} className="journey__marker">
              <Star color="var(--lime)" />
            </div>
          </div>

          <ol className="journey__list">
            {JOURNEY.map((j, i) => (
              <li
                key={j.year}
                className={`journey__item ${i % 2 ? "is-right" : "is-left"}`}
                style={{ ["--c" as string]: j.color }}
              >
                <span className="journey__node" aria-hidden="true">
                  <NodeIcon name={j.icon} />
                </span>
                <article className="journey__entry">
                  <span className="journey__year">{j.year}</span>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="journey__end rv rv-up">
          <Smiley className="journey__smiley float-b" />
          <span>…and the best part? The next chapter hasn't been drawn yet.</span>
          <CurvedArrow variant="loop" className="journey__loop" color="var(--lime)" />
        </div>
      </div>
    </section>
  );
};

export default memo(Journey);
