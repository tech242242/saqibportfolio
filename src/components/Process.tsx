import { memo } from "react";
import { PROCESS } from "../data/content";
import { useReveal } from "../hooks/useInteractions";
import SplitTitle from "./SplitTitle";
import { CurvedArrow, Plus } from "./Decorations";

const Process = () => {
  const ref = useReveal<HTMLElement>(0.2);
  return (
    <section ref={ref} id="process" className="section process container" aria-labelledby="process-title">
      <div className="card process__card">
        <div className="process__intro">
          <span className="eyebrow rv rv-up">Process</span>
          <SplitTitle id="process-title" text="How I Work" />
          <p className="rv rv-up" style={{ ["--d" as string]: "0.2s" }}>
            A simple, transparent flow. You're in the loop at every frame.
          </p>

          {/* Squash & stretch: the animator's hello world */}
          <div className="ball-demo rv rv-fade" style={{ ["--d" as string]: "0.3s" }} aria-hidden="true">
            <span className="ball-demo__note">
              squash &amp; stretch 101
              <CurvedArrow className="ball-demo__arrow" color="var(--muted)" />
            </span>
            <span className="ball-demo__ball" />
            <span className="ball-demo__shadow" />
            <span className="ball-demo__ground" />
          </div>
        </div>

        <ol className="process__steps">
          <svg className="process__line rv-draw" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true">
            <path
              d="M10 20 C 80 4, 120 36, 200 20 S 320 4, 400 20 S 520 36, 590 20"
              stroke="var(--purple)"
              strokeWidth="3"
              strokeDasharray="1"
              strokeLinecap="round"
              fill="none"
              pathLength={1}
              className="draw-path"
            />
          </svg>
          {PROCESS.map((s, i) => (
            <li key={s.step} className="step rv rv-up" style={{ ["--d" as string]: `${0.35 + i * 0.15}s` }}>
              <span className="step__num">
                {s.step}
                <Plus className="step__plus" color={["var(--lime)", "var(--blue)", "var(--purple-2)", "var(--orange)"][i]} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default memo(Process);
