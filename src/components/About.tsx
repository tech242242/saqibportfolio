import { memo } from "react";
import { SITE } from "../data/content";
import { useReveal, useTilt } from "../hooks/useInteractions";
import { CircleArrow, Crown, Swoosh } from "./Decorations";
import SmartImage from "./SmartImage";

type Props = { onMore: () => void };

const About = ({ onMore }: Props) => {
  const ref = useReveal<HTMLElement>(0.15);
  const tiltRef = useTilt<HTMLDivElement>(6);
  return (
    <section ref={ref} id="about" className="section about container" aria-labelledby="about-title">
      <div className="card about__card rv rv-fade">
        <div ref={tiltRef} className="about__media tilt rv rv-mask" style={{ ["--d" as string]: "0.1s" }}>
          <SmartImage
            src={SITE.aboutImage}
            alt={`${SITE.name} — sketch portrait on a lime background`}
            width={1600}
            height={900}
          />
          <p className="about__words" aria-hidden="true">
            <span>Focus</span>
            <span>Discipline</span>
            <span>Consistency</span>
          </p>
          <Crown className="about__crown rv-draw" color="#111" />
        </div>

        <div className="about__text">
          <h2 id="about-title" className="section-title rv rv-up" style={{ ["--d" as string]: "0.2s" }}>
            About Me
          </h2>
          <p className="rv rv-up" style={{ ["--d" as string]: "0.3s" }}>
            I'm Kashif, a 2D Animator and Motion Designer who loves turning ideas into playful, impactful visuals.
            I enjoy telling stories that entertain, connect and leave a lasting impression.
          </p>
          <button type="button" className="text-link rv rv-up" style={{ ["--d" as string]: "0.4s" }} onClick={onMore}>
            Know More About Me <CircleArrow />
          </button>
        </div>

        <Swoosh className="about__swoosh rv-draw" />
      </div>
    </section>
  );
};

export default memo(About);
