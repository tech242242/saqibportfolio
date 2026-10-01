import { memo, useState } from "react";
import { SITE, SOCIALS } from "../data/content";
import { useMagnetic, useReveal } from "../hooks/useInteractions";
import { MailIcon, PinIcon, SocialIcon } from "./Icons";
import { BrushUnderline, HeartTiny, Oval } from "./Decorations";

const SocialLink = ({ s }: { s: (typeof SOCIALS)[number] }) => {
  const ref = useMagnetic<HTMLAnchorElement>(0.4);
  return (
    <a ref={ref} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="social-btn magnetic">
      <SocialIcon name={s.key} />
    </a>
  );
};

const Contact = () => {
  const ref = useReveal<HTMLElement>(0.2);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <section ref={ref} id="contact" className="section contact container" aria-labelledby="contact-title">
      <div className="card contact__card">
        <h2 id="contact-title" className="contact__title">
          <span className="mask">
            <span className="rv rv-mask-up" style={{ ["--d" as string]: "0.1s" }}>
              Let's make
            </span>
          </span>
          <span className="mask">
            <span className="rv rv-mask-up" style={{ ["--d" as string]: "0.22s" }}>
              Something{" "}
              <span className="contact__dope">
                Dope!
                <Oval className="contact__oval rv-draw" />
              </span>
            </span>
          </span>
          <BrushUnderline className="contact__underline rv-wipe" />
        </h2>

        <div className="contact__divider" aria-hidden="true" />

        <ul className="contact__info">
          <li className="rv rv-up" style={{ ["--d" as string]: "0.3s" }}>
            <MailIcon />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <button type="button" className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
              {copied ? "Copied!" : "Copy"}
            </button>
          </li>
          <li className="rv rv-up" style={{ ["--d" as string]: "0.4s" }}>
            <PinIcon />
            <span>{SITE.location}</span>
          </li>
        </ul>

        <div className="contact__socials">
          {SOCIALS.map((s, i) => (
            <div key={s.key} className="rv rv-pop" style={{ ["--d" as string]: `${0.4 + i * 0.08}s` }}>
              <SocialLink s={s} />
            </div>
          ))}
        </div>

        <div className="contact__mascot rv rv-peek" style={{ ["--d" as string]: "0.5s" }}>
          <img src={SITE.mascotImage} alt="" loading="eager" decoding="async" width={600} height={600} />
          <HeartTiny className="contact__heart float-a" />
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
