import { memo, type CSSProperties, type ReactNode } from "react";
import { SITE } from "../data/content";
import Button from "./Button";
import { PlayIcon } from "./Icons";
import {
  ArrowUpRight,
  Blob,
  BrushUnderline,
  Crown,
  CurvedArrow,
  Lightning,
  Plus,
  Scribble,
  Smiley,
  Sparks,
  Star,
} from "./Decorations";

type Props = {
  onPlay: () => void;
  onProjects: () => void;
  onScrollDown: () => void;
};

/** Parallax layer: moves with global --mx/--my at a given depth (px). */
const Px = ({
  depth,
  className = "",
  style,
  children,
}: {
  depth: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) => (
  <span className={`px ${className}`} style={{ ...style, ["--depth" as string]: depth }}>
    {children}
  </span>
);

const d = (s: number) => ({ ["--d" as string]: `${s}s` }) as CSSProperties;

const Hero = ({ onPlay, onProjects, onScrollDown }: Props) => {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* Background blobs */}
      <Px depth={-14} className="hero__blob hero__blob--purple">
        <div className="intro intro-blob" style={d(0.05)}>
          <Blob variant="purple" />
        </div>
      </Px>
      <Px depth={-18} className="hero__blob hero__blob--blue">
        <div className="intro intro-blob" style={d(0.2)}>
          <Blob variant="blue" />
        </div>
      </Px>
      <Px depth={-10} className="hero__blob hero__blob--orange">
        <div className="intro intro-blob-right" style={d(0.3)}>
          <Blob variant="orange" />
        </div>
      </Px>

      <div className="container hero__grid">
        {/* LEFT: copy */}
        <div className="hero__content">
          <div className="hero__hey intro intro-fade-up" style={d(0.9)}>
            <span>Hey,</span>
            <CurvedArrow className="hero__hey-arrow intro-draw" style={d(1.1)} />
          </div>

          <h1 className="hero__title">
            <span className="mask">
              <span className="hero__im intro intro-mask" style={d(1.0)}>
                I'm
              </span>
            </span>
            <Px depth={10} className="hero__crown-wrap">
              <Crown className="hero__crown intro-draw intro-pop-soft intro" style={d(2.15)} />
            </Px>
            <span className="mask mask--name">
              <span className="hero__name" aria-label={SITE.name}>
                {SITE.name.split("").map((ch, i) => (
                  <span key={i} className="hero__letter intro intro-letter" style={d(1.15 + i * 0.07)} aria-hidden="true">
                    {ch}
                  </span>
                ))}
              </span>
            </span>
            <BrushUnderline className="hero__underline intro intro-wipe" style={d(1.6)} />
          </h1>

          <p className="hero__roles intro intro-fade-up" style={d(1.75)}>
            {SITE.roles.map((r, i) => (
              <span key={r}>
                {i > 0 && <i className="dot" aria-hidden="true" />}
                {r}
              </span>
            ))}
          </p>

          <div className="hero__ctas">
            <div className="intro intro-fade-up" style={d(2.0)}>
              <Button variant="primary" onClick={onPlay} ariaLabel="Watch showreel">
                <PlayIcon size={13} /> Watch Showreel
              </Button>
            </div>
            <div className="intro intro-fade-up" style={d(2.1)}>
              <Button variant="outline" href="#projects" onClick={onProjects}>
                View Projects <ArrowUpRight className="btn__arrow" />
              </Button>
            </div>
          </div>

          <Px depth={8} className="hero__long-arrow">
            <CurvedArrow variant="long" className="intro-draw" style={d(2.3)} />
          </Px>
        </div>

        {/* RIGHT: character */}
        <div className="hero__visual">
          <Px depth={22} className="hero__bubble-wrap">
            <div className="hero__bubble intro intro-bubble" style={d(1.95)}>
              <svg viewBox="0 0 200 150" aria-hidden="true" className="hero__bubble-shape">
                <path
                  d="M100 8 C 150 6, 192 30, 190 70 C 188 104, 156 124, 116 124 L 132 146 L 96 124 C 48 124, 10 104, 10 68 C 10 32, 50 10, 100 8 Z"
                  fill="var(--blue)"
                />
              </svg>
              <span className="hero__bubble-text">
                Let's create
                <br />
                something
                <br />
                awesome!
              </span>
            </div>
          </Px>

          <Px depth={16} className="hero__character-wrap">
            <div className="hero__character intro intro-spring" style={d(1.35)}>
              <img
                src={SITE.heroImage}
                alt={`${SITE.name} — cartoon self portrait waving with a clapperboard`}
                width={1024}
                height={1024}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </Px>

          {/* Decorative doodles */}
          <Px depth={30} className="deco deco--star">
            <Star className="intro intro-pop float-a" style={d(2.4)} />
          </Px>
          <Px depth={26} className="deco deco--scribble-top">
            <Scribble className="intro-draw" style={d(2.5)} color="var(--blue)" />
          </Px>
          <Px depth={20} className="deco deco--scribble-white">
            <Scribble className="intro-draw" style={d(2.6)} color="#ffffff" />
          </Px>
          <Px depth={34} className="deco deco--arc">
            <CurvedArrow variant="short" className="intro-draw" color="var(--blue)" style={d(2.55)} />
          </Px>
          <Px depth={-20} className="deco deco--sparks">
            <Sparks className="intro-draw" style={d(2.65)} />
          </Px>
          <Px depth={-26} className="deco deco--smiley">
            <Smiley className="intro-draw float-b" style={d(2.7)} />
          </Px>
          <Px depth={-30} className="deco deco--bolt">
            <Lightning className="intro intro-pop float-c" style={d(2.8)} />
          </Px>
          <Px depth={24} className="deco deco--plus">
            <Plus className="intro intro-pop spin-slow" style={d(2.85)} />
          </Px>
          <Px depth={12} className="deco deco--plus2">
            <Plus className="intro intro-pop" style={d(2.9)} color="var(--purple)" />
          </Px>
        </div>
      </div>

      <button
        type="button"
        className="scroll-down intro intro-fade-up"
        style={d(2.5)}
        onClick={onScrollDown}
        aria-label="Scroll down"
      >
        <span className="scroll-down__mouse" aria-hidden="true">
          <i />
        </span>
        Scroll Down
      </button>
    </section>
  );
};

export default memo(Hero);
