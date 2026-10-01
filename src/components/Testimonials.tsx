import { memo, type CSSProperties } from "react";
import { TESTIMONIALS } from "../data/content";
import { useReveal } from "../hooks/useInteractions";
import SplitTitle from "./SplitTitle";
import { HeartTiny, Oval, Star } from "./Decorations";

type T = (typeof TESTIMONIALS)[number];

const initials = (n: string) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

const Quote = ({ t }: { t: T }) => (
  <figure className="quote" style={{ ["--c" as string]: t.color } as CSSProperties}>
    <span className="quote__mark" aria-hidden="true">
      “
    </span>
    <div className="quote__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="quote__star" color="#ffc629" />
      ))}
    </div>
    <blockquote>{t.quote}</blockquote>
    <figcaption>
      <span className="quote__avatar" aria-hidden="true">
        {initials(t.name)}
      </span>
      <span>
        <strong>{t.name}</strong>
        <small>{t.role}</small>
      </span>
    </figcaption>
  </figure>
);

const Row = ({ items, reverse }: { items: T[]; reverse?: boolean }) => (
  <div className="quotes__row">
    <div className={`quotes__track ${reverse ? "is-reverse" : ""}`}>
      {[0, 1].map((k) => (
        <div className="quotes__group" aria-hidden={k === 1} key={k}>
          {items.map((t) => (
            <Quote key={`${t.name}-${k}`} t={t} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const ref = useReveal<HTMLElement>(0.15);
  return (
    <section ref={ref} id="testimonials" className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow rv rv-up">Testimonials</span>
          <SplitTitle id="testimonials-title" text="Kind Words">
            <Oval className="testimonials__oval rv-draw" color="var(--lime)" />
          </SplitTitle>
          <HeartTiny className="testimonials__heart float-a" color="var(--orange)" />
        </div>
      </div>
      <div className="quotes rv rv-fade" style={{ ["--d" as string]: "0.2s" }}>
        <Row items={TESTIMONIALS} />
        <Row items={[...TESTIMONIALS].reverse()} reverse />
      </div>
    </section>
  );
};

export default memo(Testimonials);
