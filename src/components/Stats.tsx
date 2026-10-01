import { memo, useEffect, useRef } from "react";
import { STATS } from "../data/content";
import { prefersReducedMotion, useReveal } from "../hooks/useInteractions";
import { Squiggle } from "./Decorations";

/** Number that counts up once visible. Writes textContent directly (no re-renders). */
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = `${Math.round(value * eased)}${suffix}`;
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, suffix]);
  return (
    <span ref={ref} className="stat__num">
      0{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useReveal<HTMLElement>(0.2);
  return (
    <section ref={ref} className="section stats container" aria-label="Numbers">
      <ul className="stats__grid">
        {STATS.map((s, i) => (
          <li
            key={s.label}
            className="stat card rv rv-pop-soft"
            style={{ ["--d" as string]: `${i * 0.1}s`, ["--c" as string]: s.color, ["--r" as string]: `${[-2, 1.5, -1, 2][i]}deg` }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <Squiggle className="stat__squiggle rv-draw" color={s.color} />
            <span className="stat__label">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default memo(Stats);
