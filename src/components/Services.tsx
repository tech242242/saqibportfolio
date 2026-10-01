import { memo, type CSSProperties } from "react";
import { SERVICES, type ServiceIcon } from "../data/content";
import { useReveal, useTilt } from "../hooks/useInteractions";
import SplitTitle from "./SplitTitle";
import { Crown, Lightning, Sparks } from "./Decorations";

const s = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

const Icon = ({ name }: { name: ServiceIcon }) => {
  switch (name) {
    case "character":
      return (
        <svg viewBox="0 0 80 80" className="svc-icon svc-icon--character" aria-hidden="true">
          <ellipse className="svc-shadow" cx="40" cy="72" rx="16" ry="3" fill="rgba(255,255,255,.12)" />
          <g className="svc-jump">
            <path d="M22 38 C 20 22, 30 12, 42 13 C 56 14, 62 26, 59 40 C 57 54, 46 60, 38 59 C 28 58, 23 50, 22 38 Z" stroke="currentColor" strokeWidth="3" {...s} />
            <path d="M26 20 C 30 8, 44 4, 54 14" stroke="currentColor" strokeWidth="3" {...s} />
            <circle cx="34" cy="34" r="2.6" fill="currentColor" />
            <circle className="svc-wink" cx="48" cy="34" r="2.6" fill="currentColor" />
            <path d="M32 44 C 36 50, 44 50, 49 43" stroke="currentColor" strokeWidth="3" {...s} />
          </g>
        </svg>
      );
    case "motion":
      return (
        <svg viewBox="0 0 80 80" className="svc-icon svc-icon--motion" aria-hidden="true">
          <circle cx="40" cy="40" r="26" stroke="currentColor" strokeWidth="2" strokeDasharray="3 6" {...s} />
          <g className="svc-orbit">
            <circle cx="40" cy="14" r="7" fill="currentColor" />
            <rect x="58" y="50" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="3" {...s} />
            <path d="M10 58 L18 46 L26 58 Z" stroke="currentColor" strokeWidth="3" {...s} />
          </g>
          <path d="M34 40 L46 40 M40 34 L40 46" stroke="currentColor" strokeWidth="3" {...s} />
        </svg>
      );
    case "edit":
      return (
        <svg viewBox="0 0 80 80" className="svc-icon svc-icon--edit" aria-hidden="true">
          <rect x="8" y="18" width="64" height="44" rx="6" stroke="currentColor" strokeWidth="3" {...s} />
          <path d="M8 28 H72 M8 52 H72" stroke="currentColor" strokeWidth="2" {...s} />
          <g className="svc-clips">
            <rect x="14" y="33" width="18" height="14" rx="3" fill="currentColor" opacity=".9" />
            <rect x="35" y="33" width="12" height="14" rx="3" fill="currentColor" opacity=".55" />
            <rect x="50" y="33" width="16" height="14" rx="3" fill="currentColor" opacity=".75" />
          </g>
          <path className="svc-head" d="M40 12 V68" stroke="var(--red)" strokeWidth="2.5" {...s} />
        </svg>
      );
    case "story":
      return (
        <svg viewBox="0 0 80 80" className="svc-icon svc-icon--story" aria-hidden="true">
          <g className="svc-frames">
            <rect x="6" y="14" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="3" {...s} />
            <rect x="44" y="14" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="3" {...s} />
            <rect x="6" y="46" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="3" {...s} />
            <rect x="44" y="46" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity=".25" />
          </g>
          <circle cx="16" cy="26" r="3" fill="currentColor" />
          <path d="M50 30 L58 20 L66 30" stroke="currentColor" strokeWidth="2.5" {...s} />
          <path d="M12 62 C 18 52, 26 52, 30 60" stroke="currentColor" strokeWidth="2.5" {...s} />
          <path className="svc-arrow" d="M38 57 L42 57" stroke="currentColor" strokeWidth="3" {...s} />
        </svg>
      );
  }
};

const ServiceCard = ({ item, index }: { item: (typeof SERVICES)[number]; index: number }) => {
  const ref = useTilt<HTMLElement>(6);
  return (
    <article
      ref={ref}
      className="svc tilt rv rv-up"
      style={{ ["--d" as string]: `${0.15 + index * 0.1}s`, ["--accent" as string]: item.accent } as CSSProperties}
    >
      <span className="svc__spot" aria-hidden="true" />
      <div className="svc__top">
        <span className="svc__icon" style={{ color: item.accent }}>
          <Icon name={item.icon} />
        </span>
        <span className="svc__num">0{index + 1}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <ul className="svc__tags">
        {item.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
};

const Services = () => {
  const ref = useReveal<HTMLElement>(0.12);
  return (
    <section ref={ref} id="services" className="section services container" aria-labelledby="services-title">
      <div className="card services__card">
        <div className="section-head">
          <div>
            <span className="eyebrow rv rv-up">Services</span>
            <SplitTitle id="services-title" text="What I Do">
              <Crown className="services__crown rv-draw" />
            </SplitTitle>
          </div>
          <p className="section-head__sub rv rv-up" style={{ ["--d" as string]: "0.2s" }}>
            From the first doodle to the final render: everything your story needs to move.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map((item, i) => (
            <ServiceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
      <Sparks className="services__sparks rv-draw" color="var(--blue)" />
      <Lightning className="services__bolt float-c" color="var(--orange)" />
    </section>
  );
};

export default memo(Services);
