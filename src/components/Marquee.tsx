import { memo, useEffect, useRef } from "react";
import { MARQUEE_A, MARQUEE_B } from "../data/content";
import { Star } from "./Decorations";
import { prefersReducedMotion } from "../hooks/useInteractions";

const Band = ({ items, variant, reverse }: { items: string[]; variant: "lime" | "purple"; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className={`band band--${variant}`}>
      <div className={`band__track ${reverse ? "is-reverse" : ""}`}>
        {[0, 1].map((k) => (
          <div className="band__group" aria-hidden={k === 1} key={k}>
            {doubled.map((t, i) => (
              <span className="band__item" key={`${t}-${i}`}>
                {t}
                <Star className="band__star" color={variant === "lime" ? "#0b0b0f" : "var(--lime)"} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/** Two crossing marquee bands; skew + speed react to scroll velocity. */
const Marquee = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let last = window.scrollY;
    let vel = 0;
    let raf = 0;
    let visible = false;

    const loop = () => {
      const y = window.scrollY;
      const target = Math.max(-1, Math.min(1, (y - last) / 40));
      last = y;
      vel += (target - vel) * 0.12;
      el.style.setProperty("--skew", `${(vel * 8).toFixed(2)}deg`);
      el.style.setProperty("--speed", `${(1 + Math.abs(vel) * 2.5).toFixed(2)}`);
      if (visible) raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) {
        last = window.scrollY;
        raf = requestAnimationFrame(loop);
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className="marquee" aria-label="What I do">
      <Band items={MARQUEE_B} variant="purple" reverse />
      <Band items={MARQUEE_A} variant="lime" />
    </section>
  );
};

export default memo(Marquee);
