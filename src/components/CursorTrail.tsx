import { memo, useEffect, useRef } from "react";
import { prefersReducedMotion } from "../hooks/useInteractions";

const COLORS = ["#d4ff2e", "#7b3cff", "#2f93ff", "#ff5a2a", "#ffc629"];
const SHAPES = ["dot", "star", "plus", "ring"] as const;
const POOL = 14;

/**
 * Tiny doodle confetti that trails fast cursor movement.
 * Reuses a fixed pool of DOM nodes + Web Animations API (no React renders, no layout thrash).
 */
const CursorTrail = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;
    const nodes = Array.from(root.children) as HTMLElement[];
    let idx = 0;
    let lx = 0,
      ly = 0,
      lastT = 0;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      if (dx * dx + dy * dy < 2200 || now - lastT < 45) return;
      lx = e.clientX;
      ly = e.clientY;
      lastT = now;
      const n = nodes[idx++ % POOL];
      const shape = SHAPES[(Math.random() * SHAPES.length) | 0];
      n.className = `trail trail--${shape}`;
      n.style.color = COLORS[(Math.random() * COLORS.length) | 0];
      const rot = (Math.random() - 0.5) * 180;
      const driftX = (Math.random() - 0.5) * 40;
      n.animate(
        [
          { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(0.2) rotate(0deg)`, opacity: 1 },
          { transform: `translate3d(${e.clientX + driftX * 0.4}px, ${e.clientY - 6}px, 0) scale(1) rotate(${rot * 0.5}deg)`, opacity: 1, offset: 0.25 },
          { transform: `translate3d(${e.clientX + driftX}px, ${e.clientY + 34}px, 0) scale(0.4) rotate(${rot}deg)`, opacity: 0 },
        ],
        { duration: 800, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={ref} className="trail-layer" aria-hidden="true">
      {Array.from({ length: POOL }).map((_, i) => (
        <span key={i} className="trail" />
      ))}
    </div>
  );
};

export default memo(CursorTrail);
