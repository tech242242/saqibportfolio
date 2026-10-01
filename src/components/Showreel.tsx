import { memo } from "react";
import { SITE } from "../data/content";
import { useReveal, useTilt } from "../hooks/useInteractions";
import { CircleArrow, Dashes, DoodleFace, Star } from "./Decorations";
import { PlayIcon } from "./Icons";
import SmartImage from "./SmartImage";

type Props = { onPlay: () => void };

const Showreel = ({ onPlay }: Props) => {
  const ref = useReveal<HTMLElement>();
  const tiltRef = useTilt<HTMLButtonElement>(5);

  return (
    <section ref={ref} id="showreel" className="section showreel container" aria-labelledby="showreel-title">
      <div className="card showreel__card rv rv-scale">
        <div className="showreel__text">
          <h2 id="showreel-title" className="section-title rv rv-up" style={{ ["--d" as string]: "0.15s" }}>
            <Star outline color="var(--purple)" className="showreel__star" />
            Showreel
          </h2>
          <p className="rv rv-up" style={{ ["--d" as string]: "0.25s" }}>
            A quick glimpse of my work and my love for bringing stories to life.
          </p>
          <button
            type="button"
            className="text-link rv rv-up"
            style={{ ["--d" as string]: "0.35s" }}
            onClick={onPlay}
          >
            Watch Now <CircleArrow play />
          </button>
        </div>

        <button
          ref={tiltRef}
          type="button"
          className="showreel__preview tilt rv rv-mask"
          style={{ ["--d" as string]: "0.2s" }}
          onClick={onPlay}
          aria-label="Play showreel"
        >
          <SmartImage
            src={SITE.showreelImage}
            alt="Showreel still — a boy looking at a neon purple city under a red sun"
            width={1600}
            height={900}
            priority
          />
          <span className="showreel__overlay" aria-hidden="true" />
          <span className="play-btn" aria-hidden="true">
            <span className="play-btn__ring" />
            <PlayIcon size={22} />
          </span>
          <span className="showreel__badge" aria-hidden="true">
            <i /> REEL 2025 · 01:24
          </span>
        </button>
      </div>

      <Dashes className="showreel__dashes rv-draw" />
      <DoodleFace className="showreel__face rv-draw float-b" />
    </section>
  );
};

export default memo(Showreel);
